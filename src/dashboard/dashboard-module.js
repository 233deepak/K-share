
angular.module( 'apf.dashboardModule', [])
.config(['$routeProvider', function ($routeProvider) {
    'use strict';
    $routeProvider
      .when('/dashboard', {
        templateUrl: 'src/dashboard/dashboard.html',
        controller: 'dashboardController'
      });
  }]);
