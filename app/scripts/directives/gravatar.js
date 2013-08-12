'use strict';

angular.module('breweverywhereApp')
  .directive('gravatar', function () {
    return {
      template: '<div></div>',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        element.text('this is the gravatar directive');
      }
    };
  });
