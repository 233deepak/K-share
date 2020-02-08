angular.module('apf.testDetailModule').controller( 'testDetailController', ['$scope', '$rootScope', '$resource','$location','pfViewUtils','$document','localStorageService','testDetail','awsStorageService',
  function ($scope, $rootScope, $resource ,$location,pfViewUtils,$document,localStorageService,testDetail ,awsStorageService) {
    'use strict';

    $scope.questions = testDetail.questions;
    $scope.testDetail = testDetail;
    $scope.currentIndex = 0;
    $scope.selectedOption = 1;
    $scope.resultMode = false;
    $scope.testMode = true;

    $scope.currentQuestion = $scope.questions[0];

    $scope.nextQuestion = function(){
      $scope.currentIndex++;
      var question = $scope.questions[$scope.currentIndex];
      if(question){
        $scope.currentQuestion = question;
      }
    }

    $scope.previousQuestion = function(){
      $scope.currentIndex--;
      var question = $scope.questions[$scope.currentIndex];
      if(question){
        $scope.currentQuestion = question;
      }

    }

    $scope.updateResponse = function(){
      $scope.currentQuestion.response = $scope.selectedOption;
    }
    
    $scope.getResults = function(){
      var answerKey = [1,3,2,1,3,1,2,3,3,3];
      var score = 0;
      var correctAnswerCount = 0;
      $scope.questions.forEach((question,index) => {
        if(question.response === answerKey[index]){
          score+=2;
          correctAnswerCount++;
        } 
      });
       $scope.resultMode = true;
       $scope.testMode = false;
       $scope.score = score;
      $scope.correctAnswerCount = correctAnswerCount;
    }
    
  }
  
]);