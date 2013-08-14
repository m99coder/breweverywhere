'use strict';

angular.module('breweverywhereApp')
  .directive('mustEqual', function () {
        return {
            restrict: 'A',
            require: 'ngModel',
            link: function (scope, elm, attrs, ctrl) {

                function validateEqual(myValue, otherValue) {
                    if (myValue === otherValue) {
                        ctrl.$setValidity('equal', true);
                    } else {
                        ctrl.$setValidity('equal', false);
                    }
                    return myValue;
                }

                scope.$watch(attrs.validateEquals, function (otherModelValue) {
                    ctrl.$setValidity('equal', ctrl.$viewValue === otherModelValue);
                });

                ctrl.$parsers.push(function (viewValue) {
                    return validateEqual(viewValue, scope.$eval(attrs.mustEqual));
                });

                ctrl.$formatters.push(function (modelValue) {
                    return validateEqual(modelValue, scope.$eval(attrs.mustEqual));
                });
            }
        };
  });
