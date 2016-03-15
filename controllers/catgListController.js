todoApp.controller('catgListController',function ($scope,$state,$stateParams,getLocalStorage){
	$(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip({delay:{hide:100}});
	});
	$scope.catgList=getLocalStorage.getCatgs();
	angular.forEach($scope.catgList, function(item) {
			if(item.todoCatg == $stateParams.key){
				$scope.category=item.todoCatg;
			}
	});
	if($scope.category != $stateParams.key){
		$state.go('todoList',{});
			return true;
	}
	$scope.todosArray=getLocalStorage.getTodos();
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
				todoCatg:$scope.category,
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
