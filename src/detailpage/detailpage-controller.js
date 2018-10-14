angular.module('apf.detailpageModule').controller( 'detailpageController', ['$scope', '$rootScope', '$document','$location','document','$timeout','$sce',
  function ($scope, $rootScope, $document ,$location,document,$timeout,$sce) {
    'use strict';
      
    $scope.document = document;

    $timeout(function () {
        var content = $document.find("#content");
        if(content){
          content.html($scope.document.htmlContent);
        }
      });

    $scope.trustSrc = function(src) {
        return $sce.trustAsResourceUrl(src);
      }
    

  }
]);