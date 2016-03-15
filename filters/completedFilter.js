todoApp.filter('compltdFilter', function() {
 return function(items,catgName) {
        if(catgName!=undefined && catgName!='' && items!=undefined && items!=''){
            var filtered = [];
            var completed= [];
            angular.forEach(items, function(item) {
              if( item.todoCatg.indexOf(catgName) >= 0 ) filtered.push(item);
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
