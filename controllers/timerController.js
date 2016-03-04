todoApp.controller('timerController', ['$scope', 'getLocalStorage', '$interval', function($scope, getLocalStorage, $interval) {
    $scope.todosArray = getLocalStorage.getTodos();
    $scope.addTodo = function() {
        $scope.todosArray.push({
            'text': $scope.newTodo,
            'id': $scope.index,
            ' completedtodo': $scope.completedToDo,
            'done': false,
        });
        getLocalStorage.updateTodos($scope.todosArray);
        $scope.newTodo = '';
    };
    $interval(function() {
        $scope.sharedTime = new Date();
    }, 500);
    $scope.selectedRow = null;
    $scope.setClickedRow = function(index) { 
        $scope.selectedRow = index;
    }
    $('.list').on('click', function() {
        $(this).parent().prepend(this);
    });
}]);