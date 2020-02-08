angular.module('apf.appModule').service( 'awsStorageService', ['storageService','$http','$q',
  function (storageService,$http,$q) {
    'use strict';
      var service = this;
      service.serverConfig = {
        localhost : "http://localhost:3000/",
        awsHost : "http://localhost:3000/",
        host : "https://vaye7uwjw2.execute-api.us-east-2.amazonaws.com/Prod/"
      };
     this.getAllTopics = (filters ,exclusiveStartId)=>{
        var deferred = $q.defer();
        var topicEndpoint = service.serverConfig.host+"topic" ;
        var searchCriteria = this.prepareFilterCondition(filters);
        var loggedInUser = storageService.getObject("logged-in-user");
        var userRole = (!loggedInUser)?"DEFAULT":loggedInUser.userRole;
        var searchJSON = {
            "serKey" : searchCriteria.searchKey,
            "exclusiveStartId":"",
            "pageSize":50,
            "userRole": userRole,
            "filterConditions" : searchCriteria.filterConditions
        };
        var cachedPage = undefined;
        if(!filters || filters.lenght == 0 ){
            var cachedPage = storageService.getObject("default-topic-page");
        }
        if(cachedPage){
           deferred.resolve(cachedPage);
        }else{
          $http.post(topicEndpoint, searchJSON).then(function successCallback(response) {
            storageService.setObject("default-topic-page",response.data.data);
            deferred.resolve(response.data.data);
          }, function errorCallback(response) {
            deferred.reject(response);
          });
        }
         
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
      $http.get(docEndpoint+"/"+documentId ,{ cache: true}).then(function successCallback(response) {
          deferred.resolve(response.data.data);
        }, function errorCallback(response) {
          deferred.reject(response);
        });
        return deferred.promise;
    }
    
     this.getAllCommentsForTopic = (topicId)=>{
      var deferred = $q.defer();
      var commentEndpoint = service.serverConfig.host+"topic/"+topicId+"/comment" ;
      $http.get(commentEndpoint,{ cache: true}).then(function successCallback(response) {
          deferred.resolve(response.data.data);
        }, function errorCallback(response) {
          deferred.reject(response);
        });
        return deferred.promise;
     }

     this.getUserByEmail = (emailId,socialSite)=>{
      var deferred = $q.defer();
      var userEndpoint = service.serverConfig.host+"user/"+emailId+"/"+socialSite ;
      $http.get(userEndpoint,{ cache: true}).then(function successCallback(response) {
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

     this.updateTopic = (topic)=>{
      var deferred = $q.defer();
      var topicEndpoint = service.serverConfig.host+"topic/"+topic.topicId;
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

     this.uploadFiles = (files)=>{
         var deferred = $q.defer();
         if(files && files.length < 4){
           files.forEach((file)=>{
               var s3ObjectId = file.s3ObjectId ;
               //file.name = s3ObjectId;
               var presignedEndpoint = service.serverConfig.host+"presigned";
               var presignedData = { fileName :s3ObjectId ,fileType : file.type};
               $http.post(presignedEndpoint,presignedData).then(function successCallback(response) {
                   var presignedURL = response.data.data;
                 $http.put(presignedURL, file, { headers: { 'Content-Type': file.type ,encodeURI: false} })
                   .success(function (resp) {
                    deferred.resolve()
                   })
                   .error(function (resp) {
                     alert("An Error Occurred Attaching Your File");
                   });
                  // deferred.resolve();
                 }, function errorCallback(response) {
                   deferred.reject(response);
                 });
                 
            });
         }
         return deferred.promise;
     }

     this.calculateScore = (question)=>{
      
     }  
  }
]);