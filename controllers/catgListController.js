todoApp.controller('catgListController',function ($scope,catgList,getLocalStorage){
	$(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip();
});
	$scope.list=catgList;
	$scope.todosArray=getLocalStorage.getTodos();
	$scope.todoform=false;
	$scope.show=true;

	$scope.todoForm=function () {
		$scope.todoform=!$scope.todoform;
	}
	$scope.clearForm=function () {
		$scope.todoform=!$scope.todoform;
		$scope.newTodo="";
	}
	$scope.addtodo=function () {
		if($scope.newTodo == undefined || $scope.newTodo == ""){
		    return true;
		}
		$scope.todosArray.push({
				id:Date.now(),
				text:$scope.newTodo,
				todoCatg:catgList,
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
	$scope.completedTodos=[];
});
