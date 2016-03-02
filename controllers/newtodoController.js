
todoApp.controller('newtodoController',function ($window,$scope,$filter,getLocalStorage){
	$scope.todosArray=getLocalStorage.getTodos();
	 $(function() {
    	$( "#datepicker" ).datepicker();
 	 });
	 $scope.addtodo= function () {
	 	if($scope.todoCatg == undefined || $scope.newTodo == undefined){
    	    	return true;
    	    }
	 	$scope.todoCatg=$filter('lowercase')($scope.todoCatg);
		$scope.todosArray.push({
			id:Date.now(),
			text:$scope.newTodo,
			todoCatg:$scope.todoCatg,
			todoDate:$scope.todoDate,
			completed:false		
		});
		getLocalStorage.updateTodos($scope.todosArray);
		console.log($scope.todosArray);
		$scope.newTodo="";
		$scope.todoCatg="";
		$scope.todoDate="";
		$window.alert("sucessfully added new todo");	
		location.reload();    
	};
});

