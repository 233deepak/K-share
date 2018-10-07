angular.module('apf.contributeModule').controller( 'contributeController', ['$scope', '$resource','$location','localStorageService',
  function ($scope, $resource ,$location, localStorageService) {
    'use strict';

    if(!localStorage.getItem("session-id")){
       $location.path("/login");
    }    

  }
]);