
angular.module( 'apf.contributeModule', [])
.config(['$routeProvider', function ($routeProvider) {
    'use strict';
    $routeProvider
      .when('/contribute', {
        templateUrl: 'src/contribute/contribute-wizard.html',
        controller: 'contributeController'
      });
  }]);
