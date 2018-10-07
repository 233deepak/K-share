angular.module('apf.loginModule').controller( 'loginController', ['$scope', '$resource','$location','localStorageService','$modal','$window',
  function ($scope, $resource ,$location, localStorageService,$modal,$window) {
    'use strict';
          
     var modalInstance = $modal.open({
       templateUrl : 'src/login/login-form.html',
       backdrop : 'static',
       controller : function ($scope){
        $scope.cancel = function(){ 
          modalInstance.dismiss('Cancled clicked');
          $location.path('/dashboard');
         }
        $scope.onSignIn = function(googleUser){
          var profile = googleUser.getBasicProfile();
          console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
          console.log('Name: ' + profile.getName());
          console.log('Image URL: ' + profile.getImageUrl());
          console.log('Email: ' + profile.getEmail());
        } 
       }
     });

     $scope.cancel = function(){ 
      modalInstance.dismiss('showModal set to false');
     }

     modalInstance.rendered.then((data)=>{
       $window.fbAsyncInit();
      FB.XFBML.parse(document.getElementById('fb-login-button'));

     });
     modalInstance.result.then(
      function (dismissCause) {
       // ctrl.close({'dismissCause': dismissCause}); // closed
      },
      function (dismissCause) {
       // ctrl.close({'dismissCause': dismissCause}); // dismissed
      }
    );

    
    
  }
]);