/*angular.module('apf.contributeModule').controller( 'contributeController', ['$scope', '$resource','$location','localStorageService',
  function ($scope, $resource ,$location, localStorageService) {
    'use strict';

    if(!localStorageService.get("session-id")){
       $location.path("/login");
    }    

  }
]);*/

angular.module('apf.contributeModule').controller('contributeController', ['$scope', '$timeout', '$rootScope','localStorageService','$location','$document',
  function ($scope, $timeout, $rootScope, localStorageService ,$location,$document) {
 
    if(!localStorageService.get("session-id")){
      $location.path("/login");
    }  
    var initializeWizard = function () {
      $scope.data = {
        name: '',
        description: '',
        lorem: 'default setting',
        ipsum: '',
        title : '',
        tags: []
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
 
angular.module('apf.contributeModule').controller('DetailsReviewController', ['$rootScope', '$scope',
  function ($rootScope, $scope) {
    'use strict';
 
    // Find the data!
    var next = $scope;
    while (angular.isUndefined($scope.data)) {
      next = next.$parent;
      if (angular.isUndefined(next)) {
        $scope.data = {};
      } else {
        $scope.data = next.wizardData;
      }
    }
  }
]);
 
angular.module('apf.contributeModule').controller('SecondStepController', ['$rootScope', '$scope',
  function ($rootScope, $scope) {
    'use strict';
 
    $scope.focusSelectors = ['.invalid-classname', '#step-two-new-lorem'];
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
 
angular.module('apf.contributeModule').controller('DeploymentController', ['$rootScope', '$scope', '$timeout',
  function ($rootScope, $scope, $timeout) {
    'use strict';
 
    $scope.onShow = function() {
      $scope.deploymentComplete = false;
      $timeout(function() {
        $scope.deploymentComplete = true;
      }, 2500);
    };
  }
]);