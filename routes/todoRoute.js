todoApp.config(function($stateProvider, $urlRouterProvider){

      $urlRouterProvider.otherwise("/todolist")

      $stateProvider
      //   .state('newtodo', {
      //       url: "/newList",
      //       templateUrl: "./partials/newList.html",
      //       controller:'newtodoController'
      //   })
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
               				var catg=catglistSrv.getCatgs($stateParams.key);
              				return catg;
            			}
           }
        })
        // .state('todoList.catg',{
        //   	url: "/:key",
        //   	templateUrl:"./partials/search.html",
        //    	controller:'searchController'
        //      }
        // })
    });
