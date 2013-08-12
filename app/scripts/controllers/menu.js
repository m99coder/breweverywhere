'use strict';

angular.module('breweverywhereApp')
  .controller('MenuCtrl', ['$scope', 'authenticate', function ($scope, authenticate) {
        $scope.currentBrewer = null;

        $scope.$on('USER_UPDATED', function() {
            $scope.currentBrewer = authenticate.currentBrewer;
        });

        $scope.brewerIsAdmin = function() {
            if(($scope.currentBrewer !== null) && ($scope.currentBrewer !== undefined)){
                return $scope.currentBrewer.BrewerIsAdmin;
            }

            return false;
        };

        $scope.brewerLoggedIn = function() {
            return authenticate.brewerLoggedIn();
        };
  }]);
