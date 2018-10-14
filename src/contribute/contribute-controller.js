angular.module('apf.contributeModule').controller('contributeController', ['$scope', '$timeout', '$rootScope','localStorageService','$location','$document',
  function ($scope, $timeout, $rootScope, localStorageService ,$location,$document) {
 
    if(!localStorageService.get("session-id")){
      $location.path("/login");
    }  
    var initializeWizard = function () {
      $scope.data = {
        name: '',
        description: '',
        title : '',
        tags: [],
        htmlcontent : '',
        videos : [{id:1,link:""}],
        dropzone : {},
        files : []
      };
      $scope.secondaryLoadInformation = 'Please wait ..............';
 
      $scope.wizardReady = false;
      $timeout(function () {
        $scope.wizardReady = true;
        var modalHeader = $document.find('.modal-header');
        modalHeader.hide();
        $document.find('.selectpicker').selectpicker();
      }, 1000);
 
      $scope.nextButtonTitle = "Next >";
    };
 
    var startDeploy = function () {
      $timeout(function() { }, 10000);
      $scope.deployInProgress = true;
    };
 
    $scope.data = {};
 
    $scope.firstStepNextTooltip = "First step next";
    $scope.firstStepPrevTooltip = "First step back";
    $scope.secondStepNextTooltip = "Second step next";
    $scope.secondStepPrevTooltip = "Second step back";
    $scope.reviewStepNextTooltip = "Review step next";
    $scope.reviewStepPrevTooltip = "Review step back";
 
    $scope.nextCallback = function (step) {
      // call startdeploy after deploy button is clicked on review-summary tab
      if (step.stepId === 'review-summary') {
        startDeploy();
      }
      return true;
    };
    $scope.backCallback = function (step) {
      return true;
    };
 
    $scope.stepChanged = function (step, index) {
      if (step.stepId === 'review-summary') {
        $scope.nextButtonTitle = "Deploy";
      } else if (step.stepId === 'review-progress') {
        $scope.nextButtonTitle = "Close";
      } else {
        $scope.nextButtonTitle = "Next >";
      }
    };
 
    $scope.cancelDeploymentWizard = function () {
      $rootScope.$emit('wizard.done', 'cancel');
    };
 
    $scope.finishedWizard = function () {
      $rootScope.$emit('wizard.done', 'done');
      return true;
    };
 
    initializeWizard();
   }
]);
 
angular.module('apf.contributeModule').controller('DetailsGeneralController', ['$rootScope', '$scope',
  function ($rootScope, $scope) {
    'use strict';
 
    $scope.reviewTemplate = "src/contribute/contribute-review.html";
    $scope.detailsGeneralComplete = false;
    $scope.focusSelectors = ['#new-name'];
    $scope.onShow = function() { };
 
    $scope.updateName = function() {
      $scope.detailsGeneralComplete = angular.isDefined($scope.data.title) && $scope.data.title.length > 0;
    };
  }
]);
 
angular.module('apf.contributeModule').controller('DetailsReviewController', ['$rootScope', '$scope','$document','contributeService',
  function ($rootScope, $scope , $document ,contributeService) {
    'use strict';
    $scope.data = contributeService.getCurrentScopeData($scope);
    var content = $document.find("#content");
    if(content){
      content.html($scope.data.htmlcontent);
    }
    
   
  }
]);
 
angular.module('apf.contributeModule').controller('SecondStepController', ['$rootScope', '$scope','$timeout','contributeService',
  function ($rootScope, $scope ,$timeout,contributeService) {
    'use strict';
   
    $scope.data = contributeService.getCurrentScopeData($scope);
    $scope.focusSelectors = ['.invalid-classname', '#step-two-new-lorem'];
    
    $scope.addMoreVideo = function(){
      var newItemNo = $scope.data.videos.length+1;
      $scope.data.videos.push({id:newItemNo,link:""});
    }

    $scope.removeVideo = function(){
      var newItemNo = $scope.data.videos.length+1;
      $scope.data.videos.pop();
    }

    $scope.dzOptions = {
      url : '/alt_upload_url',
      paramName : 'photo',
      maxFilesize : '10',
      addRemoveLinks : true,
      autoProcessQueue : false
    };
    
    
    $scope.dzCallbacks = {
      'addedfile' : function(file){
        console.log(file);
        $scope.newFile = file;  
        $scope.data.files.push(file);  
      },
      'success' : function(file, xhr){
        console.log(file, xhr);
      },
    
    };
    
    $scope.dzMethods = {};
    $scope.removeNewFile = function(){
      $scope.dzMethods.removeFile($scope.newFile); 
    }
    $timeout(function () {
      $scope.data.dropzone = $scope.dzMethods.getDropzone();  // done so the next time the page is shown it updates
    });
   
  }
]);
 
angular.module('apf.contributeModule').controller('SummaryController', ['$rootScope', '$scope', '$timeout',
  function ($rootScope, $scope, $timeout) {
    'use strict';
    $scope.pageShown = false;
 
    $scope.onShow = function () {
      $scope.pageShown = true;
      $timeout(function () {
        $scope.pageShown = false;  // done so the next time the page is shown it updates
      });
    }
  }
]);
 
angular.module('apf.contributeModule').controller('SubmitDraftController', ['$rootScope', '$scope', '$timeout','contributeService',
  function ($rootScope, $scope, $timeout,contributeService) {
    'use strict';
    $scope.data = contributeService.getCurrentScopeData($scope);
    $scope.onShow = function() {
      $scope.deploymentComplete = false;
      var dropzone = $scope.data.dropzone;
      if(dropzone){
        dropzone.processQueue();
      }
      contributeService.saveDraft($scope.data);
      $timeout(function() {
        $scope.deploymentComplete = true;
      }, 2500);
    };


  }
]);