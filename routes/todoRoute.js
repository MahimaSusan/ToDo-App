todoApp.config(function($stateProvider, $urlRouterProvider){

      $urlRouterProvider.otherwise("/newtodo")

      $stateProvider
        .state('newtodo', {
            url: "/newList",
            templateUrl: "./partials/newList.html",
            controller:'newtodoController'
        })
    });