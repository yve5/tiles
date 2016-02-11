'use strict';

angular.module('tilesApp').directive('header', [
  function () {
    return {
      templateUrl: 'views/header.html',
      controller: 'headerController',
      restrict: 'ACE'
    };
  }]);
