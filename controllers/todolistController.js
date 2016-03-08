todoApp.controller('todolistController',function ($scope,$filter,getLocalStorage){
	$scope.catgArry=getLocalStorage.getCatgs();
	$scope.empty=false;
	if ($scope.catgArry == ""){
		$scope.empty=true;
	}
	$scope.newtodos=false;
	$scope.add=function () {
		$scope.newtodos=!$scope.newtodos;
	}
	$scope.addCatg=function () {
		if($scope.todoCatg == undefined){
    	    	return true;
    	    }
		$scope.todoCatg=$filter('lowercase')($scope.todoCatg);
		$scope.catgArry.push({todoCatg:$scope.todoCatg});
		getLocalStorage.updateCatg($scope.catgArry);
		$scope.todoCatg="";
		$scope.newtodos=!$scope.newtodos;
			$state.go('todoList', {}, {reload: true});
		// location.reload();
	}
});
