'use strict';

angular.module('breweverywhereApp')
    .directive('uniqueEmail', ['BrewerResource', function (BrewerResource) {
        return {
            require: 'ngModel',
            link: function (scope, elm, attrs, ctrl) {
                ctrl.$parsers.unshift(function (viewValue) {
                    BrewerResource.query({"Email": viewValue}).then(function(value){
                        if (value.length === 0) {
                            // it is valid
                            ctrl.$setValidity('uniqueEmail', true);
                            return viewValue;
                        } else {
                            // it is invalid, return undefined (no model update)
                            ctrl.$setValidity('uniqueEmail', false);
                            return undefined;
                        }
                    });
                });
            }
        };
    }]);
