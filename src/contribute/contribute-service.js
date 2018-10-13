angular.module('apf.contributeModule').service('contributeService',['localStorageService' ,function(localStorageService){

    this.getCurrentScopeData = (currentScope)=>{
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
}]);