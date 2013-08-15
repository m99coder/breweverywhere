'use strict';

angular.module('breweverywhereApp')
  .directive('uniqueUserName', ['BrewerResource', function (BrewerResource) {
        return {
            require:'ngModel',
            link:function (scope, elm, attrs, ctrl) {
                ctrl.$parsers.unshift(function (viewValue) {
                    if(viewValue){
                        BrewerResource.query({"UserName":viewValue}).then(function(value){
                            if (value.length === 0) {
                                // it is valid
                                ctrl.$setValidity('uniqueUserName', true);
                                return viewValue;
                            } else {
                                // it is invalid, return undefined (no model update)
                                ctrl.$setValidity('uniqueUserName', false);
                                return viewValue;
                            }
                        });
                        // it is invalid, return undefined (no model update)
                        ctrl.$setValidity('uniqueUserName', false);
                        return viewValue;
                    }
                });
            }
        };
  }]);
