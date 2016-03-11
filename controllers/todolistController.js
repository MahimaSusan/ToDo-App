todoApp.controller('todolistController',function ($scope,$state,getLocalStorage){
	$scope.catgArry=getLocalStorage.getCatgs();
	$scope.empty=false;
  $scope.selectedRow = null;
  $scope.setClickedRow = function(index) {
      $scope.selectedRow = index;
  }
	$(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip();
});

	if ($scope.catgArry == ""){
		$scope.empty=true;
	}
	$scope.newtodos=false;
	$scope.add=function () {
		$scope.newtodos=!$scope.newtodos;
	}
	$scope.clearForm=function () {
		$scope.newtodos=!$scope.newtodos;
		$scope.todoCatg="";
	}
	$scope.addCatg=function () {
		if($scope.todoCatg == undefined || $scope.todoCatg == ""){
    	    	return true;
    }
		$scope.catgArry.push({todoCatg:$scope.todoCatg});
		getLocalStorage.updateCatg($scope.catgArry);
		$scope.todoCatg="";
		$scope.newtodos=!$scope.newtodos;
		$scope.empty=false;
	}
	$scope.clear=function () {
		$scope.searchTodo="";
		$state.go('todoList.search',{keyword:''});
	}
});
