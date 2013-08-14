'use strict';

angular.module('breweverywhereApp')
  .controller('AdjunctListCtrl', ['$scope', 'AdjunctResource', function ($scope, AdjunctResource) {
        $scope.adjuncts = [];
        $scope.pageSize = 10;
        $scope.noOfPages = 0;
        $scope.currentPage = 0;
        $scope.maxSize = 5;

        $scope.setPage = function (pageNo) {
            $scope.currentPage = pageNo;
        };

        $scope.init = function() {
            AdjunctResource.query().then(function(adjuncts) {
                $scope.adjuncts = adjuncts;
                $scope.noOfPages = Math.ceil($scope.adjuncts.length / $scope.pageSize);
                $scope.setPage(1);
            });
        };

        $scope.init();

  }]);
