var storageService = angular.module('storageService', []);

storageService.factory('getLocalStorage', function() {
	var todos = {};
	return {
    	list: todos,
    	updateTodos: function (todosArr) {
        	if (window.localStorage && todosArr) {
            	localStorage.setItem("todosArray", angular.toJson(todosArr));
        	}
        	todos = todosArr;
    	},
    	getTodos: function () {
       		todos = angular.fromJson( localStorage.getItem("todosArray") );
       		return todos ? todos : [];
    	}
	};
});
