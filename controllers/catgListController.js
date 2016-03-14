todoApp.controller('catgListController',function ($scope,$stateParams,getLocalStorage){
	$(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip();
});
	$scope.list=$stateParams.key;
	$scope.todosArray=getLocalStorage.getTodos();
	console.log($scope.todosArray);
	$scope.todoform=false;
	$scope.show=true;
	$scope.clearForm=function () {
		$scope.todoform=!$scope.todoform;
		$scope.newTodo="";
	}
	$scope.addtodo=function () {
		if($scope.newTodo == undefined || $scope.newTodo == ""){
		    return true;
		}
		$scope.todosArray.unshift({
				id:Date.now(),
				text:$scope.newTodo,
				todoCatg:$scope.list,
				completed:false
		});
		getLocalStorage.updateTodos($scope.todosArray);
		$scope.newTodo="";
		$scope.todoform=!$scope.todoform;
	}
	$scope.changeTodo=function () {
		this.todo.completed= !this.todo.completed;
		getLocalStorage.updateTodos($scope.todosArray);
	}
});
