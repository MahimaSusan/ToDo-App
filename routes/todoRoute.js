todoApp.config(function($stateProvider, $urlRouterProvider){

      $urlRouterProvider.otherwise("/newList")

      $stateProvider
        .state('newtodo', {
            url: "/newList",
            templateUrl: "./partials/newList.html",
            controller:'newtodoController'
        })
    });