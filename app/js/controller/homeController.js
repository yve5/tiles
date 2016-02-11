'use strict';

// Data
var tab = [{
    'items': [
      {
        'title': 'App 1 PROD',
        'img': 'img/logo.png',
        'url': 'https://www.example.com',
        'env': 'prod'
      },
      {
        'title': 'App 1 RECE',
        'img': 'img/logo.png',
        'url': 'https://www.example.com',
        'env': 'rece'
      },
      {
        'title': 'App 2 RECE',
        'img': 'img/logo.png',
        'url': 'https://www.example.com',
        'env': 'rece'
      },
      {
        'title': 'App 2 DEV',
        'img': 'img/logo.png',
        'url': 'https://www.example.com',
        'env': 'deve'
      },
      {
        'title': 'App 3 DEV',
        'img': 'img/logo.png',
        'url': 'https://www.example.com',
        'env': 'deve'
      },
      {
        'title': 'App 3 PROD',
        'img': 'img/logo.png',
        'url': 'https://www.example.com',
        'env': 'prod'
      },
      {
        'title': 'App 1 DEV',
        'img': 'img/logo.png',
        'url': 'https://www.example.com',
        'env': 'deve'
      }
    ]
  }];


// Controller
angular.module('tilesApp').controller('homeController', ['$scope', '$http', '$routeParams', function ($scope, $http, $routeParams) {
    $scope.env = $routeParams.env;
    var data = tab[0];
    $scope.elts = [];

    if ($scope.env !== 'all' && $scope.env !== 'prod' && $scope.env !== 'rece' && $scope.env !== 'deve') {
      window.location.href = '#/all';
    }

    for (var i = 0; i < data.items.length; i++) {
      if ($scope.env === 'all' || data.items[i].env === $scope.env) {
        $scope.elts.push(data.items[i]);
      }
    }

    $scope.openApp = function (url) {
      window.open(url);
    };
  }]);
