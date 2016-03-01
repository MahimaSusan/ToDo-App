
	todoApp.controller('timerController', ['$scope', 'getLocalStorage', function($scope, getLocalStorage) {

 $scope.todos = getLocalStorage.getTodos();
localStorage.clear();
$scope.addTodo = function() {

    $scope.todos.push({'title': $scope.newTodo	, 
'id': $scope.index,
    	'done': false});
    getLocalStorage.updateTodos($scope.todos);
    $scope.newTodo = '';
};

$scope.pause = function(){
		$scope.showFirstButton=true;
	 $scope.showFirstButton = !$scope.showFirstButton;
};
	$scope.play = function(){

  //some cool things happen here, and:
  $scope.showFirstButton = !$scope.showFirstButton;
};
$scope.completedToDo = [];
$scope.complete = function(todo){
	//$scope.hide =true;
	$scope.showme=true;
	$scope.showme = !$scope.showme;
	this.todo.done=true;
     
         $scope.completedToDo.push(this.todo);
         
         getLocalStorage.updateTodos($scope.todos);

//
};
$scope.remove = function(item){
	$scope.todos.splice(item, 1);
        localStorage.removeItem(item);
getLocalStorage.updateTodos($scope.todos);
        
};

 $scope.selectedRow = null; // initialize our variable to null
    $scope.setClickedRow = function(index) { //function that sets the value of selectedRow to current index
        $scope.selectedRow = index;
    }
    $('.list').on('click', function() {
        $(this).parent().prepend(this);
    });
   




}]);

