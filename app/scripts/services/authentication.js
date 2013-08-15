'use strict';

angular.module('breweverywhereApp')
  .service('authenticate', ['$http', '$rootScope', '$window', 'BrewerResource', 'sha', function authentication($http, $rootScope, $window, BrewerResource, sha) {
    // AngularJS will instantiate a singleton by calling "new" on this function
        var authenticate = {
            // data members
            currentBrewer:null,

            // methods
            login:function (username, password) {
                BrewerResource.query({UserName:username}).then(function (brewers) {
                    if (brewers.length === 0) {
                        $window.alert("Invalid user name");
                        return;
                    }

                    var brewer = brewers[0];

                    var passwordHash = sha.hash(password + Date.parse(brewer.DateJoined).valueOf().toString());

                    if (passwordHash !== brewer.Password) {
                        $window.alert("Invalid password.")
                        return;
                    }

                    authenticate.currentBrewer = brewer;
                    $rootScope.$broadcast('USER_UPDATED');
                });
            },

            brewerLoggedIn:function () {
                if ((authenticate.currentBrewer !== null) && (authenticate.currentBrewer !== undefined)) {
                    return true;
                }

                return false;
            },

            logout:function () {
                authenticate.currentBrewer = null;
                $rootScope.$broadcast('USER_UPDATED');
            }

        };

        return authenticate;
  }]);
