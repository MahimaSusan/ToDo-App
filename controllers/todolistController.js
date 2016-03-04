todoApp.controller('todolistController',function ($scope,getLocalStorage){
	$scope.todosArray=getLocalStorage.getTodos();
	$scope.empty=false;
	if ($scope.todosArray == ""){
		$scope.empty=true;
	}
});
