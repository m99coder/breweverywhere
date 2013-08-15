'use strict';

angular.module('breweverywhereApp')
    .controller('RegisterCtrl', ['$scope', '$location', 'BrewerResource', function ($scope, $location, BrewerResource) {
        $scope.brewer = new breweverywhere.Brewer();
        $scope.password = "";
        $scope.confirmpassword = "";

        $scope.register = function () {
            var brewer = new BrewerResource($scope.brewer);
            brewer.DateJoined = new Date();

            brewer.Password = Sha1.hash($scope.password + brewer.DateJoined.valueOf().toString());
            brewer.$save(function (brewer) {
                $location.path('/');
            });
        };
    }]);
