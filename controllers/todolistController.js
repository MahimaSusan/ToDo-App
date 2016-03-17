todoApp.controller('todolistController',function ($scope,$state,getLocalStorage){
	$scope.catgArry=getLocalStorage.getCatgs();
  $scope.selectedRow = null;
	$scope.class="search_box";
	$scope.changeClass = function(){
    if ($scope.class === "search_box")
      $scope.class = "search_show";
    else
      $scope.class = "search_box";
  };
  $scope.setClickedRow = function(catg) {
      $scope.selectedRow = catg;
  }
	$('.cate').on('click', function() {
			$(this).parent().prepend(this);
	});
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
		$scope.selectedRow = null;
		$state.go('todoList',{});
	}
	$scope.remove=function () {
		$scope.selectedRow = null;
	}
});
