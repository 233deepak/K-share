angular.module('apf.loginModule').controller( 'loginController', ['$scope', '$resource','$location','storageService','$modal','$window','awsStorageService','$routeParams',
  function ($scope, $resource ,$location, storageService,$modal,$window,awsStorageService,$routeParams) {
    'use strict';
          
    
     var modalInstance = $modal.open({
       templateUrl : 'src/login/login-form.html',
       backdrop : 'static',
       controller : function ($scope){
        $scope.loginComplete = true; 
        $scope.cancel = function(){ 
          modalInstance.dismiss('Cancled clicked');
          $location.path('/dashboard');
         }

        function signOut() {
          var auth2 = gapi.auth2.getAuthInstance();
          auth2.signOut().then(function () {
            console.log('User signed out.');
          });
        } 
       function onSignIn(googleUser){
        $scope.loginComplete = false;
          var profile = googleUser.getBasicProfile();
          console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
          console.log('Name: ' + profile.getName());
          console.log('Image URL: ' + profile.getImageUrl());
          console.log('Email: ' + profile.getEmail());
          var user = {
            email:profile.getEmail(),
            profilePicURL:profile.getImageUrl(),
            name:profile.getName(),
            socialSite : "GOOGLE"
          };
          checkUserAndCreateIfRequired("google" ,user ,googleUser);
         /* awsStorageService.getUserByEmail(profile.getEmail(),"google").then((userData)=>{
               if(!userData){
                createUser(profile ,googleUser);
               }else{
                storageService.setObject("logged-in-user",userData);
                storageService.setObject("auth-user",googleUser);
                modalInstance.dismiss('showModal set to false');
                var redirectURI = $routeParams.redirectUrl;
                $location.path('/'+redirectURI);
               }

          });*/
        } 


        function createUser(user,authUser){
          
         awsStorageService.createUser(user).then((userData) =>{
          storageService.setObject("logged-in-user",userData);
          storageService.setObject("auth-user",authUser);
          modalInstance.dismiss('showModal set to false');
          var redirectURI = $routeParams.redirectUrl;
          $scope.loginComplete = true;
          $location.path('/'+redirectURI);
         });
        } 
        
      function checkLoginState() {
        $scope.loginComplete = false;
        FB.login(function(response) {
          var authUser = response;
          FB.api('/me?fields=id,first_name,last_name,picture,email', function(response) {
            console.log('Successful login for: ' + response.name);
            var user = {
              email:response.email,
              profilePicURL:response.picture.data.url,
              name:response.first_name +" "+response.last_name,
              socialSite : "FACEBOOK"
            };
            checkUserAndCreateIfRequired("facebook",user , authUser);

          });
       }, {scope: 'public_profile,email'});
       
      } 

      function checkUserAndCreateIfRequired(socialSite ,userDetails ,authUser) {
        awsStorageService.getUserByEmail(userDetails.email,socialSite).then((userData)=>{
          if(!userData){
           createUser(userDetails ,authUser);
          }else{
           storageService.setObject("logged-in-user",userData);
           storageService.setObject("auth-user",authUser);
           modalInstance.dismiss('showModal set to false');
           var redirectURI = $routeParams.redirectUrl;
           $scope.loginComplete = true;
           $location.path('/'+redirectURI);
          }

         });
      }

        $scope.login = function (){
          localStorageService.set("logged-in-user" ,"logged-in-user");
          modalInstance.dismiss('showModal set to false');
          $location.path('/contribute');
          
        }
        $window.onSignIn = onSignIn;
        $window.signOut =  signOut;
        $window.checkLoginState = checkLoginState;
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