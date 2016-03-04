todoApp.config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("/activity_logger");
    $stateProvider.state('activity_logger', {
        url: "/activity_logger",
        templateUrl: "./partials/todoLogger.html",
    }).state('activity_logger.completedtodos', {
        url: "/completedtodos",
        templateUrl: "./partials/completedTodos.html",
        controller:"completedtodoController"
    }).state('activity_logger.todolog', {
        url: "/todolog",
        templateUrl: "./partials/todoLog.html",
        controller: "timerController"
    }).state('activity_logger.report', {
        url: "/report",
        templateUrl: "./partials/report.html",
    })
});