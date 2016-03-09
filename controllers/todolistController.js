todoApp.controller('todolistController',function ($scope,getLocalStorage){
	$scope.catgArry=getLocalStorage.getCatgs();
	$scope.empty=false;
  $scope.selectedRow = null;
     $scope.setClickedRow = function(index) {
         $scope.selectedRow = index;
     }
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
		$scope.catgArry.push({todoCatg:$scope.todoCatg});
		getLocalStorage.updateCatg($scope.catgArry);
		$scope.todoCatg="";
		location.reload();
	}
		$scope.clear=function () {
			$scope.searchTodo="";
		}
});
