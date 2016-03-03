var catgService = angular.module('catgService', []);
catgService.factory('catglistSrv', function(getLocalStorage) {
    var todosList = [];
    todosList = getLocalStorage.getTodos();
    var catgList = [];
    return {
        getCatgs: function(key) {
            catgList = _.where(todosList, {todoCatg: key});
            return catgList;
        }
    };
});