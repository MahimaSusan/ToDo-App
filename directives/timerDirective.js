
todoApp.directive('stopwatch', function() {
    return {
        restrict: 'AE',
        templateUrl: 'stopwatch.html',
        transclude: true,
        scope: {
            text: '@text',
            todo: '=?',
            todosArray: '=?',
            currentTime: '=?time'
        },
        link: function($scope, element, attrs, ctrl) {},
        controllerAs: 'timerCtrl',
        controller: function($scope, $interval, getLocalStorage, $state, $window) {
            $scope.todosArray = getLocalStorage.getTodos();
            $scope.time = [];
            var self = this;
            var time = 0;
            var mode = 1;
            var status = 0;
            var timer_id;
            self.play = 1;
            this.plays = function(interval) {
                self.play = 0;
                var timeRet;
                interval = 1000;
                if (status == 0) {
                    status = 1;

                    function timeRun() {
                        if (time < 86400) {
                            time++;
                            timeRet = self.getElapsedMs();
                            if (typeof(callback) === 'function') callback(timeRet);
                        }
                    };
                    return timer_id = setInterval(timeRun, interval);
                }
            };
            self.pauses = function() {
                self.play = 1;
                if (status == 1) {
                    status = 0;
                    clearInterval(timer_id);
                }
            };
            self.getTime = function() {
                return time;
            };
            self.getElapsedMs = function() {
                var second = time % 60;
                var minute = Math.floor(time / 60) % 60;
                var hour = Math.floor(time / 3600) % 60;
                second = (second < 10) ? '0' + second : second;
                minute = (minute < 10) ? '0' + minute : minute;
                hour = (hour < 10) ? '0' + hour : hour;
                var timeObj = hour + ":" + minute + ":" + second
                return timeObj;
            };
            $scope.completedToDo = [];
            this.complete = function(text, timeNow) {
                 $scope.todosArray = getLocalStorage.getTodos();
                $scope.showme = true;
                $scope.showme = !$scope.showme;
                index = $scope.todosArray.findIndex(x => x.text == text);
                $scope.todosArray[index].done = true;
                $scope.todosArray[index].time = timeNow;
                $window.alert("item completed");
                getLocalStorage.updateTodos($scope.todosArray);
                $state.reload('activity_logger.todolog');
            };
            this.remove = function(text) {
                $scope.todosArray = getLocalStorage.getTodos();
                index = $scope.todosArray.findIndex(x => x.text == text);
                $scope.todosArray.splice(index, 1);
                getLocalStorage.updateTodos($scope.todosArray);
                $state.reload('activity_logger.todolog');
            };
            this.selectedRow = null;
            $scope.setClickedRow = function(index) {
                this.selectedRow = index;
            }
            $('.list').on('click', function() {
                $(this).parent().prepend(this);
            });
        }
    }
});