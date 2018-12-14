
angular.module( 'apf.detailpageModule', [])
.config(['$routeProvider', function ($routeProvider) {
    'use strict';
    $routeProvider
      .when('/detailpage', {
        templateUrl: 'src/detailpage/detailpage.html',
        controller: 'detailpageController',
        resolve: {
          document : function(storageService,awsStorageService,$route) {
            var topicMetaData = storageService.getObject("current-meta-data");
            var documentId = topicMetaData.documentId;
            if ($route.current.params.documentId) {
              documentId = $route.current.params.documentId
            }
            return awsStorageService.getDocument(documentId).then(function(data){
              data.metaData = topicMetaData;
              return data;
            });
           
          }
          
        }
      });
  }]);
