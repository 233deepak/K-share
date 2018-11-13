
angular.module( 'apf.dashboardModule', [])
.config(['$routeProvider', function ($routeProvider) {
    'use strict';
    $routeProvider
      .when('/dashboard', {
        templateUrl: 'src/dashboard/dashboard.html',
        controller: 'dashboardController',
        resolve: {
          allTopics : function (awsStorageService){
             return awsStorageService.getAllTopics().then(function(data){
                  return data;
             });
          }
        }
      });
  }]);
