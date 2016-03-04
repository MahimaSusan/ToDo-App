var storageService = angular.module('storageService', []);

storageService.factory('getLocalStorage', function() {
	var todos = {};
	var catgs = {};
	return {
    	// list: catgs,
    	updateTodos: function (todosArr) {
        	if (window.localStorage && todosArr) {
            	localStorage.setItem("todosArray", angular.toJson(todosArr));
        	}
        	todos = todosArr;
    	},
    	getTodos: function () {
       		todos = angular.fromJson( localStorage.getItem("todosArray") );
       		return todos ? todos : [];
    	},
			updateCatg:function (todosCatg) {
				if (window.localStorage && todosCatg) {
						localStorage.setItem("catgArry", angular.toJson(todosCatg));
				}
				catgs = todosCatg;
			},
			getCatgs: function () {
					catgs = angular.fromJson( localStorage.getItem("catgArry") );
					return catgs ? catgs : [];
			}
	};
});
