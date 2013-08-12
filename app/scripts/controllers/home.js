'use strict';

angular.module('breweverywhereApp')
  .controller('HomeCtrl', ['$scope', '$location', 'authenticate', function ($scope, $location, authenticate) {
        $scope.currentBrewer = null;

        $scope.$on('USER_UPDATED', function() {
            $scope.currentBrewer = authenticate.currentBrewer;
        });

        $scope.brewerLoggedIn = function() {
            return authenticate.brewerLoggedIn();
        };
  }]);
