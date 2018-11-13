
angular.module( 'apf.detailpageModule', [])
.config(['$routeProvider', function ($routeProvider) {
    'use strict';
    $routeProvider
      .when('/detailpage', {
        templateUrl: 'src/detailpage/detailpage.html',
        controller: 'detailpageController',
        resolve: {
          document : function(storageService,awsStorageService) {
            var topicMetaData =  storageService.getObject("current-meta-data");
            return awsStorageService.getDocument(topicMetaData.documentId).then(function(data){
              data.metaData = topicMetaData;
              return data;
            });
           
          }
          
        }
      });
  }]);
