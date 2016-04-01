angular.module('eventApp', ['ngRoute','ngMessages'])
    //custom filter
    .filter('customToUpper', function () {
        return function (item) {
            return item.toUpperCase();
        }
    })
    .filter('customToLower', function () {
        return function (item) {
            return item.toLowerCase();
        }
    })

    .config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
        $routeProvider
            .when('/add-event', {
                templateUrl: 'views/add-event.html',
                controller: 'formController',
                controllerAs: 'eventController'
            }) .when('/list-event', {
                templateUrl: 'views/list-event.html',
                controller: 'eventManagerController',
                //controllerAs: 'eventController'
            })
            .otherwise({redirectTo: '/add-event'})

        $locationProvider.html5Mode({enable: true, requireBase: false});
    }]);
