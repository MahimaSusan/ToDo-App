todoApp.config(function($stateProvider, $urlRouterProvider){

      $urlRouterProvider.otherwise("/todolist")

      $stateProvider
        .state('todoList', {
            url: "/todolist",
            templateUrl: "./partials/todoList.html",
            controller:'todolistController'
        })
        .state('todoList.catg',{
          	url: "/:key",
          	templateUrl:"./partials/todos.html",
           	controller:'catgListController'
          //   resolve:{
          //      catgList: function(catglistSrv,$stateParams){
          //     				return catglistSrv.getCatgs($stateParams.key);
          //   			}
          // }
        })
        .state('todoList.search',{
          	url: "/search/:keyword",
          	templateUrl:"./partials/search.html",
           	controller:'searchController'
        })
});
