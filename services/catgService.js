var catgService = angular.module('catgService', []);
catgService.factory('catglistSrv', function(getLocalStorage) {
    catglist = getLocalStorage.getCatgs();
    return {
        getCatgs: function(key) {
            category = _.where(catglist, {todoCatg: key});
            return category[0].todoCatg;
        }
    };
});
