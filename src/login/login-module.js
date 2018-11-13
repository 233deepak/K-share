
angular.module( 'apf.loginModule', [])
.config(['$routeProvider', function ($routeProvider) {
    'use strict';
    $routeProvider
      .when('/login/:redirectUrl', {
        templateUrl: 'src/login/login.html',
        controller: 'loginController'
      });
  }]);
