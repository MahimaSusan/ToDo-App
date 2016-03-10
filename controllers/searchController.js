todoApp.controller('searchController',function ($scope,getLocalStorage,$stateParams){
 $scope.todosArray=getLocalStorage.getTodos();
 $scope.search_result=$stateParams.keyword;
 $scope.no_result=false;
 $scope.empty_search=true;
 if($stateParams.keyword == ""){
   $scope.empty_search=!$scope.empty_search;
   return true;
 }
 var regex = new RegExp(".*" + $stateParams.keyword + ".*", "gim");
 $scope.results=[];
 angular.forEach($scope.todosArray, function(item) {
    if(regex.test(item.text)){
        $scope.results.push(item);
    }
 });
 if ($scope.results == ""){
   $scope.no_result=!$scope.no_result;
 }
});
