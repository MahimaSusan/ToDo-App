todoApp.controller('completedtodoController', ['$scope', 'getLocalStorage', '$interval', function($scope, getLocalStorage, $interval) {
    $scope.todosArray = getLocalStorage.getTodos();
    $scope.completedToDo = [];
        angular.forEach($scope.todosArray, function(todo) {
            obj1 = todo.done ? todo.text  : 0;
            if(obj1!=0){

            	$scope.completedToDo.push(obj1); 
        }
    })
    }]);