angular.module('apf.detailpageModule').controller( 'detailpageController', ['$scope', '$rootScope', '$document','$location','document','$timeout','$sce','storageService',
  function ($scope, $rootScope, $document ,$location,document,$timeout,$sce,storageService) {
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
    $scope.comments = storageService.getObject(document.documenID+"CMNT");
    $scope.commentText = "";

    $scope.addComment = ()=>{
      $scope.comments.push({userImg : "bird.jpg" , altText:"Avatar" , userName:"Default" ,commentDate:new Date(),commentText :$scope.commentText});
      $scope.commentText ="";
      storageService.setObject(document.documenID+"CMNT",$scope.comments);
    }

  }
]);