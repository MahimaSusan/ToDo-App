todoApp.controller('catgListController',function ($scope,$filter,catgList,getLocalStorage){
	$scope.list=catgList;
	$scope.todosArray=getLocalStorage.getTodos();
	$scope.todoform=false;
	$scope.todoForm=function () {
	$scope.todoform=!$scope.todoform;
	}
	$scope.catgtodos = _.where($scope.todosArray, {todoCatg: catgList});
	$scope.empty=false;
	if ($scope.catgtodos == ""){
		$scope.empty=true;
	}
	$scope.addtodo=function () {
		if($scope.newTodo == undefined ){
		    	    	return true;
		    	    }
			 	$scope.newTodo=$filter('lowercase')($scope.newTodo);
				$scope.todosArray.push({
					id:Date.now(),
					text:$scope.newTodo,
					todoCatg:catgList,
					completed:false
				});
				getLocalStorage.updateTodos($scope.todosArray);
				$scope.newTodo="";
				location.reload()
	}
});
