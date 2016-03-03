todoApp.controller('timerController', ['$scope', 'getLocalStorage', '$interval', function($scope, getLocalStorage, $interval) {
    $scope.todos = getLocalStorage.getTodos();
    $scope.addTodo = function() {
        $scope.todos.push({
            'title': $scope.newTodo,
            'id': $scope.index,
            ' completedtodo': $scope.completedToDo,
            'done': false,
        });
        getLocalStorage.updateTodos($scope.todos);
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