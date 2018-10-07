
angular.module( 'apf.loginModule', [])
.config(['$routeProvider', function ($routeProvider) {
    'use strict';
    $routeProvider
      .when('/login', {
        templateUrl: 'src/login/login.html',
        controller: 'loginController'
      });
  }]);
