'use strict';

angular.module('tilesApp').controller('headerController', ['$scope', function ($scope) {
    $scope.goToEnv = function (env) {
      window.location.href = '#/' + env;
    };
  }]);
