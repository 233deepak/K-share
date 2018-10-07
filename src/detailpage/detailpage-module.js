
angular.module( 'apf.detailpageModule', [])
.config(['$routeProvider', function ($routeProvider) {
    'use strict';
    $routeProvider
      .when('/detailpage', {
        templateUrl: 'src/detailpage/detailpage.html',
        controller: 'detailpageController'
      });
  }]);
