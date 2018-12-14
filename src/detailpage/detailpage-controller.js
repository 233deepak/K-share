angular.module('apf.detailpageModule').controller( 'detailpageController', ['$scope', '$rootScope', '$document','$location','document','$timeout','$sce','storageService','awsStorageService',
  function ($scope, $rootScope, $document ,$location,document,$timeout,$sce,storageService,awsStorageService) {
    'use strict';

    var loggedInUser = storageService.getObject("logged-in-user");
    $scope.document = document;
    if (loggedInUser && loggedInUser.userRole == "ADMIN")
      $scope.showPublish = true;
    else
      $scope.showPublish = false;

    $timeout(function () {
        var content = $document.find("#content");
        if(content){
          content.html($scope.document.htmlContent);
        }
      });

    $scope.trustSrc = function(src) {
        return $sce.trustAsResourceUrl(src);
      }

      $scope.comments = [];
      if(document.metaData.topicId){
        awsStorageService.getAllCommentsForTopic(document.metaData.topicId).then(function(commentData){
          $scope.comments = commentData.comments;
        });
      }
    
    

    $scope.commentText = "";

    $scope.addComment = ()=>{
      var topicMetaData =  storageService.getObject("current-meta-data");
      if(!storageService.getObject("logged-in-user")){
        $location.path("/login/detailpage/").search({documentId:topicMetaData.documentId});
      }
      var loogedInUser = storageService.getObject("logged-in-user");
      
      var comment = {
         userImageURL : loogedInUser.profilePicURL , 
         commentedBy: loogedInUser.name ,
         //commentedOn:new Date(), 
         commentText :$scope.commentText,
         topicId: topicMetaData.topicId,
         userID : loogedInUser.userId
        }
      //$scope.comments.push({userImageURL : loogedInUser.profilePicURL ,  commentedBy:"Default" ,commentedOn:new Date(), commentText :$scope.commentText});
      $scope.commentText ="";
      var scope = $scope
      awsStorageService.createComment(topicMetaData.topicId,comment).then((comment)=>{
         scope.comments.push(comment);
      });
     // storageService.setObject(document.documenID+"CMNT",$scope.comments);
    }

   $scope.publishTopic = ()=>{
      var topicMetaData = $scope.document.metaData;
      topicMetaData.topicStatus = "PUBLISHED";
      var copiedTopic = angular.copy(topicMetaData);
      delete copiedTopic.createdOn;
      awsStorageService.updateTopic(copiedTopic).then((response)=>{
        alert("Topic published !!!!");
      });
   } 
  }
]);