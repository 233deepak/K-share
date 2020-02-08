angular.module('apf.testModule').controller( 'testController', ['$scope', '$rootScope', '$resource','$location','pfViewUtils','$document','localStorageService','allTests','awsStorageService',
  function ($scope, $rootScope, $resource ,$location,pfViewUtils,$document,localStorageService,allTests ,awsStorageService) {
    'use strict';

    $location.search({});
    $scope.showPagination = false;
    
  
    
    $scope.allItems = allTests;
    $scope.exclusiveStartId = "";
    $scope.items = $scope.allItems;
 
    var viewSelected = function(viewId) {
      $scope.viewType = viewId;
      $scope.sortConfig.show = ($scope.viewType !== "tableView");
    };
 
    $scope.viewsConfig = {
      views: [pfViewUtils.getCardView(),pfViewUtils.getListView(), pfViewUtils.getTableView()],
      onViewSelect: viewSelected
    };
 
    $scope.viewsConfig.currentView = $scope.viewsConfig.views[0].id;
    $scope.viewType = $scope.viewsConfig.currentView;
 
 
  
 
    $scope.listConfig = {
      selectionMatchProp: 'name',
      checkDisabled: false,
      itemsAvailable: true,
      onClick: handleClick,
      onCheckBoxChange: handleCheckBoxChange,
      selectItems :false,
      showSelectBox:false
    };
   

 
    function handleCheckBoxChange (item) {
      var selectedItems = $filter('filter')($scope.allItems, {selected: true});
      if (selectedItems) {
        $scope.toolbarConfig.filterConfig.selectedCount = selectedItems.length;
      }
    }

    function handleClick (item) {
     localStorageService.set("current-meta-data",item);
    // $location.path('/detailpage/'+item.documentId);
     $location.path("/testDetail/").search({testId:item.testID});
    }
  
 
    $scope.showComponent = true;
    
    
  }
  
]);