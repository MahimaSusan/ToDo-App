var todoApp = angular.module('todoApp',['ngAnimate','catgService','storageService','ui.router','angular.filter']);
angular.module("todoApp").filter('categFilter', function() {
 return function(items,searchText) {
        if(searchText!=undefined&&searchText!=''){
    var filtered = [];
    searchText = searchText.toLowerCase();
    angular.forEach(items, function(item) {
    if( item.todoCatg.toLowerCase().indexOf(searchText) >= 0 ) filtered.push(item);
    });
    return filtered;
  }else{
    return items;
  }
 }
});
