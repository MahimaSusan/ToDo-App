var todoApp = angular.module('todoApp',['ngAnimate','catgService','storageService','ui.router','angular.filter']);
angular.module("todoApp").filter('categFilter', function() {
 return function(items,catgName) {
        if(catgName!=undefined&&catgName!=''){
            var filtered = [];
            var notCompleted= [];
            catgName = catgName.toLowerCase();
            angular.forEach(items, function(item) {
              if( item.todoCatg.toLowerCase().indexOf(catgName) >= 0 ) filtered.push(item);
            });
            angular.forEach(filtered, function(item) {
              if( item.completed == false ) {
                notCompleted.push(item);
              }
            });
            return notCompleted;
        }
  }
});
angular.module("todoApp").filter('compltdFilter', function() {
 return function(items,catgName) {
        if(catgName!=undefined&&catgName!=''){
            var filtered = [];
            var completed= [];
            catgName = catgName.toLowerCase();
            angular.forEach(items, function(item) {
              if( item.todoCatg.toLowerCase().indexOf(catgName) >= 0 ) filtered.push(item);
            });
            angular.forEach(filtered, function(item) {
              if( item.completed == true ) {
                completed.push(item);
              }
            });
            return completed;
        }
  }
});
