'use strict';

angular.module('breweverywhereApp')
  .controller('LoginCtrl', ['$scope', '$location', 'authenticate', function ($scope, $location, authenticate) {
        $scope.login = new breweverywhere.LogIn();
        $scope.currentBrewer = null;

        $scope.$on('USER_UPDATED', function () {
            $scope.currentBrewer = authenticate.currentBrewer;
        });

        $scope.login = function () {
            authenticate.login($scope.login.userName, $scope.login.password);
            $scope.login = new breweverywhere.LogIn();
        };

        $scope.logout = function () {
            authenticate.logout();
        };

        $scope.register = function () {
            $location.path('/register');
        };

        $scope.brewerLoggedIn = function () {
            return authenticate.brewerLoggedIn();
        };
  }]);
