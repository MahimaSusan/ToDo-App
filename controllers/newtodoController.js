todoApp.controller('newtodoController',function ($scope,getLocalStorage){

	$scope.todosArray=getLocalStorage.getTodos();
	
	 $(function() {
    	$( "#datepicker" ).datepicker();
 	 });

	$scope.addtodo= function () {
		$scope.todosArray.push({
			id:Date.now(),
			text:$scope.newTodo,
			todoCatg:$scope.todoCatg,
			todoDate:$scope.todoDate,
			completed:false		
		});

		getLocalStorage.updateTodos($scope.todosArray);
		$scope.newTodo="";
		$scope.todoCatg="";
	};

});