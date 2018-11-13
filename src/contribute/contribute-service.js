angular.module('apf.contributeModule').service('contributeService',['storageService','awsStorageService','$q' ,function(storageService,awsStorageService,$q){

    var contributeService = this;
    contributeService.getCurrentScopeData = (currentScope)=>{
        var scopedata = currentScope.data;
        var next = currentScope;
         while (angular.isUndefined(scopedata)) {
            next = next.$parent;
            if (angular.isUndefined(next)) {
                scopedata = {};
            } else {
               scopedata = next.wizardData;
            }
         }
       return scopedata;
    }
   
    contributeService.saveDraft = (rawData)=>{
    var guid = contributeService.guid();  
    var loggedInUser = storageService.getObject("logged-in-user");
    var tags = contributeService.convertTagsToStr(rawData.tags);
    var topicMetaData = {
		title: rawData.title,
		createdBy: loggedInUser.name,
		//createdOn: new Date(),
		hasVideos: (rawData.videos.length > 0),
		hasNotes: (rawData.files.length > 0),
		numberOfviews: 0,
		status: "DRAFT",
		tags: tags,
		documentId: "",
		guid: guid,
		category: rawData.category,
		reviewerUserID: "ADMIN",
		ownerUserID: loggedInUser.userId
	};
    var videoLinks = contributeService.extractVideoLinks(rawData.videos);
    var fileLinks = contributeService.extractFileLinks(rawData.files);
    var document = {
        htmlContent :rawData.htmlcontent,
        videoLinks : videoLinks,
        docLinks : fileLinks,  
        guid : guid
    };
    var deferred = $q.defer();
    awsStorageService.createDocument(document).then(function successCallback(documentData) {
        topicMetaData.documentId = documentData.docId;
        awsStorageService.createTopic(topicMetaData).then(function successCallback(response) {
            deferred.resolve(response);
          }, function errorCallback(response) {
            deferred.reject(response);
          });
      }, function errorCallback(response) {
        deferred.reject(response);
      });
    return deferred.promise;
   }

   contributeService.guid = () =>{
    function s4() {
      return Math.floor((1 + Math.random()) * 0x10000)
        .toString(16)
        .substring(1);
    }
    return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
  }

  contributeService.extractVideoLinks = (videos)=> {
    var videoLinks = [];  
    videos.forEach(video => {
        videoLinks.push(video.link);
    });
    return videoLinks;
  }
  
  contributeService.extractFileLinks = (files)=> {
    var fileLinks = [];  
    files.forEach(file => {
        fileLinks.push({name:file.name,link:"https://ocw.mit.edu/terms/"});
    });
    return fileLinks;
  }

  contributeService.convertTagsToStr = (tags)=>{
      var tagStr = "";
      if (tags) {
          tags.forEach((tag) => {
              tagStr += tag.text + ",";
          });
      }
      return tagStr;
  }

}]);