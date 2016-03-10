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
           	controller:'catgListController',
            resolve:{
              	catgList: function(catglistSrv,$stateParams){
               			// 	var catg=catglistSrv.getCatgs($stateParams.key);                    
              				return catglistSrv.getCatgs($stateParams.key);
            			}
           }
        })
        .state('todoList.search',{
          	url: "/:keyword",
          	templateUrl:"./partials/search.html",
           	controller:'searchController'
        })
});
