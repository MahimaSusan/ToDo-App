var storageService = angular.module('storageService', []);
storageService.factory('getLocalStorage', function() {
var todoList = {};

return {
    list: todoList,
    updateTodos: function (todosArr) {
        if (window.localStorage && todosArr) {
            localStorage.setItem("todos", angular.toJson(todosArr));
        }
        todoList = todosArr;
    },
    getTodos: function () {
       todoList = angular.fromJson( localStorage.getItem("todos") );
       return todoList ? todoList : [];
    }
};
});