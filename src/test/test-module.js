
angular.module( 'apf.testModule', [])
.config(['$routeProvider', function ($routeProvider) {
    'use strict';
    $routeProvider
      .when('/test', {
        templateUrl: 'src/test/test.html',
        controller: 'testController',
        resolve: {
          allTests : function (awsStorageService){
             var tests = [
                 {
                   title : "Life Science",
                   testID: 1,

                 },
                 {
                  title : "Computer Science",
                  testID: 2,
                },
                {
                  title : "IAS Test",
                  testID: 3,
                },
                {
                  title : "IES Science",
                  testID: 4,
                }

             ];
             return tests;
             //return awsStorageService.getAllTopics().then(function(data){
                  //return data;
            // });
          }
        }
      });
  }]);
