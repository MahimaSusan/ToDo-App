todoApp.controller('todolistController',function ($scope,getLocalStorage){
	$scope.todosArray=getLocalStorage.getTodos();
});