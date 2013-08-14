'use strict';

angular.module('breweverywhereApp')
  .filter('startFrom', function () {
        return function(input, start) {
            start = +start;
            return input.slice(start);
        };
    });