'use strict';

angular.module('breweverywhereApp')
  .filter('localization', function () {
    return function (input) {
      return 'localization filter: ' + input;
    };
  });
