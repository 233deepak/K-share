angular.module('apf.appModule').service( 'awsStorageService', ['localStorageService','$http','$q',
  function (localStorageService,$http,$q) {
    'use strict';
      var service = this;
      service.serverConfig = {
        localhost : "http://localhost:3000/",
        awsHost : "http://localhost:3000/",
        host : "http://localhost:3000/"
      }; 
     this.getAllTopics = (filters)=>{
        var deferred = $q.defer();
        var topicEndpoint = service.serverConfig.host+"topic" ;
        var searchCriteria = this.prepareFilterCondition(filters);
        var searchJSON = {
            "serKey" : searchCriteria.searchKey,
            "exclusiveStartId":"",
            "pageSize":50,
            "filterConditions" : searchCriteria.filterConditions
        };
         $http.post(topicEndpoint, searchJSON).then(function successCallback(response) {
            deferred.resolve(response.data.data);
          }, function errorCallback(response) {
            deferred.reject(response);
          });
          return deferred.promise;
     }

    this.prepareFilterCondition = (filters)=>{
      var searchCriteria = { searchKey : "" ,filterConditions:[]};
      var filterConditions = [];
      if(filters){
        filters.forEach(filter => {
          if(filter.id != "searchKey"){
            var filterCondition = {
              fieldName : filter.id,
              value : filter.value
            };
            filterConditions.push(filterCondition);
          }else{
            searchCriteria.searchKey = filter.value;
          }
          
        });  
      }
      searchCriteria.filterConditions = filterConditions;
      return searchCriteria;
    }

    this.getDocument = (documentId)=>{
      var deferred = $q.defer();
      var docEndpoint = service.serverConfig.host+"doc" ;
      $http.get(docEndpoint+"/"+documentId).then(function successCallback(response) {
          deferred.resolve(response.data.data);
        }, function errorCallback(response) {
          deferred.reject(response);
        });
        return deferred.promise;
    }
    
     this.getAllCommentsForTopic = (topicId)=>{
      var deferred = $q.defer();
      var commentEndpoint = service.serverConfig.host+"topic/"+topicId+"/comment" ;
      $http.get(commentEndpoint).then(function successCallback(response) {
          deferred.resolve(response.data.data);
        }, function errorCallback(response) {
          deferred.reject(response);
        });
        return deferred.promise;
     }

     this.getUserByEmail = (emailId,socialSite)=>{
      var deferred = $q.defer();
      var userEndpoint = service.serverConfig.host+"user/"+emailId+"/"+socialSite ;
      $http.get(userEndpoint).then(function successCallback(response) {
          deferred.resolve(response.data.data);
        }, function errorCallback(response) {
          deferred.reject(response);
        });
        return deferred.promise;
     }

     this.createUser = (user)=>{
      var deferred = $q.defer();
      var userEndpoint = service.serverConfig.host+"user";
      $http.put(userEndpoint,user).then(function successCallback(response) {
          deferred.resolve(response.data.data);
        }, function errorCallback(response) {
          deferred.reject(response);
        });
        return deferred.promise;
     }

     this.createDocument = (document)=>{
      var deferred = $q.defer();
      var docEndpoint = service.serverConfig.host+"doc";
      $http.put(docEndpoint,document).then(function successCallback(response) {
          deferred.resolve(response.data.data);
        }, function errorCallback(response) {
          deferred.reject(response);
        });
        return deferred.promise;
     }

     this.createTopic = (topic)=>{
      var deferred = $q.defer();
      var topicEndpoint = service.serverConfig.host+"topic";
      $http.put(topicEndpoint,topic).then(function successCallback(response) {
          deferred.resolve(response.data.data);
        }, function errorCallback(response) {
          deferred.reject(response);
        });
        return deferred.promise;
     }

     this.createComment = (topicId , comment)=>{
      var deferred = $q.defer();
      var topicEndpoint = service.serverConfig.host+"topic/"+topicId+"/comment";
      $http.put(topicEndpoint,comment).then(function successCallback(response) {
          deferred.resolve(response.data.data);
        }, function errorCallback(response) {
          deferred.reject(response);
        });
        return deferred.promise;
     }
  }
]);