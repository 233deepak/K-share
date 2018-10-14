angular.module('apf.contributeModule').service('contributeService',['localStorageService' ,function(localStorageService){

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
    var topicMetaData = {
        title: rawData.title,
        createdOn: new Date(),
        createdBy: "Eric Domain",
        hasVideo: (rawData.videos.length > 0),
        hasNotes: (rawData.files.length > 0),
        views:0,
        verified:true,
        tags:rawData.tags,
        documentID:guid
    };
    contributeService.saveMetaData(topicMetaData);
    var videoLinks = contributeService.extractVideoLinks(rawData.videos);
    var fileLinks = contributeService.extractFileLinks(rawData.files);
    var document = {
        htmlContent :rawData.htmlcontent,
        videoLinks : videoLinks,
        docLinks : fileLinks,  
        documenID : guid,
        metaData : {}
     };
     
    localStorageService.set(guid,document);
   }

   contributeService.saveMetaData = (metaData)=>{
     var currentTopics = localStorageService.get("all-topics");
     currentTopics.push(metaData);
     localStorageService.set("all-topics",currentTopics);
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

}]);