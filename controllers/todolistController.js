todoApp.controller('todolistController',function ($scope,$state,getLocalStorage){
	$scope.catgArry=getLocalStorage.getCatgs();
  $scope.selectedRow = null;
  $scope.setClickedRow = function(index) {
      $scope.selectedRow = index;
  }
	$(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip();
	});
	$scope.newtodos=false;
	$scope.clearForm=function () {
		$scope.newtodos=!$scope.newtodos;
		$scope.todoCatg="";
	}
	$scope.addCatg=function () {
		if($scope.todoCatg == undefined || $scope.todoCatg == ""){
    	    	return true;
    }
		$scope.catgArry.unshift({todoCatg:$scope.todoCatg});
		getLocalStorage.updateCatg($scope.catgArry);
		$scope.newtodos=!$scope.newtodos;
		$scope.todoCatg="";
	}
	$scope.clear=function () {
		$scope.searchTodo="";
		$state.go('todoList',{});
	}

});
