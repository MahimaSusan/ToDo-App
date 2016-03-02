

	todoApp.controller('timerController', ['$scope', 'getLocalStorage','$interval', function($scope, getLocalStorage,$interval) {

 $scope.todos = getLocalStorage.getTodos();
//localStorage.clear();
$scope.addTodo = function() {
console.log($scope.todos);
    $scope.todos.push({'title': $scope.newTodo, 
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

$scope.pause = function(id){
		$scope.showFirstButton=true;
	// $scope.showFirstButton = !$scope.showFirstButton;
};
	$scope.play = function(id){

  //some cool things happen here, and:
  $scope.showFirstButton = !$scope.showFirstButton;
};
$scope.completedToDo = [];



 $scope.selectedRow = null; // initialize our variable to null
    $scope.setClickedRow = function(index) { //function that sets the value of selectedRow to current index
        $scope.selectedRow = index;
    }
    $('.list').on('click', function() {
        $(this).parent().prepend(this);
    });
   









}]);

