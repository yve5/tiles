'use strict';

angular
  .module('tilesApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(['$routeProvider', function ($routeProvider) {
    $routeProvider
      .when('/:env', {
        templateUrl: 'views/home.html',
        controller: 'homeController'
      })
      .otherwise({
        redirectTo: '/all'
      });
  }]);
