angular.module('apf.detailpageModule').service( 'storageService', ['localStorageService',
  function (localStorageService) {
    
    this.getObject = (key)=>{
      return localStorageService.get(key);
    }

    this.setObject = (key ,value)=>{
      localStorageService.set(key,value);
    }
  }
]);
