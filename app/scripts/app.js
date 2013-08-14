'use strict';

angular.module('breweverywhereApp', ['mongolabResourceHttp', 'ui.bootstrap'])
  .config(['$routeProvider', function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/home.html',
        controller: 'HomeCtrl'
      })
        .when('/register', {
            templateUrl: 'views/register.html',
            controller: 'RegisterCtrl'
        })
        .when('/adjuncts', {
            templateUrl: 'views/adjunctlist.html',
            controller: 'AdjunctListCtrl'
        })
        .otherwise({
        redirectTo: '/'
      });
  }]);
