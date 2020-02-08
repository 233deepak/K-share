angular.module('apf.dashboardModule').controller( 'dashboardController', ['$scope', '$rootScope', '$resource','$location','pfViewUtils','$document','localStorageService','allTopics','awsStorageService',
  function ($scope, $rootScope, $resource ,$location,pfViewUtils,$document,localStorageService,topicData ,awsStorageService) {
    'use strict';

    $location.search({});
    $scope.filtersText = '';
    $scope.showPagination = false;
    
    $scope.columns = [
      { header: "Title", itemField: "title" },
      { header: "CreatedBy", itemField: "createdBy"},
      { header: "CreatedOn", itemField: "createdOn" },
      { header: "Views", itemField: "views"}
    ];
    
    $scope.allItems = topicData.topics;
    $scope.exclusiveStartId = "";
    $scope.items = $scope.allItems;

    var applyFilters = function (filters) {
      $scope.items = [];
      $scope.filtersText = "";
      awsStorageService.getAllTopics(filters,$scope.exclusiveStartId).then(function(response){
        $scope.items = response.topics;
        $scope.exclusiveStartId = response.exclusiveStartId;
        filters.forEach(function (filter) {
        $scope.filtersText += filter.title + " : " + filter.value + "\n";
        });
        $scope.toolbarConfig.filterConfig.resultsCount = $scope.items.length;
        $scope.loadingComplete = true;
      });
     
    };
 
    var clearFilters = function() {
      filterChange([]);
      $scope.filterConfig.appliedFilters = [];
    };
 
    var filterChange = function (filters) {
      applyFilters(filters);
      
    };
 
   
    $scope.searchByKeyWord = function(){
      var serachkey = $document.find('#searchkey').val(); 
      var newFilter = {
        id: "searchKey",
        title: "SearchKey",
        value: serachkey.toLowerCase()
      }
      $scope.filterConfig.appliedFilters.push(newFilter);
      filterChange($scope.filterConfig.appliedFilters); 

    }
    $scope.filterConfig = {
      fields: [
        {
          id: 'title',
          title:  'Topic',
          placeholder: 'Filter by Topic...',
          filterType: 'text'
        },
        {
          id: 'createdBy',
          title:  'CreatedBy',
          placeholder: 'Filter by CreatedBy...',
          filterType: 'text'
        },
        {
          id: 'category',
          title:  'Category',
          placeholder: 'Filter by category...',
          filterType: 'text'
        }
        
      ],
      resultsCount: $scope.items.length,
      totalCount: $scope.allItems.length,
      appliedFilters: [],
      onFilterChange: filterChange
    };
 
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
 
    
    var compareFn = function(item1, item2) {
      var compValue = 0;
      if ($scope.sortConfig.currentField.id === 'title') {
        compValue = item1.title.localeCompare(item2.title);
      } else if ($scope.sortConfig.currentField.id === 'views') {
          compValue = item1.views - item2.views;
      } else if ($scope.sortConfig.currentField.id === 'createdBy') {
        compValue = item1.createdBy.localeCompare(item2.createdBy);
      } 
 
      if (!$scope.sortConfig.isAscending) {
        compValue = compValue * -1;
      }
 
      return compValue;
    };
 
    var sortChange = function (sortId, isAscending) {
      $scope.items.sort(compareFn);
    };
 
    $scope.sortConfig = {
      fields: [
        {
          id: 'title',
          title:  'Topic',
          sortType: 'alpha'
        },
        {
          id: 'views',
          title:  'views',
          sortType: 'numeric'
        },
        {
          id: 'createdBy',
          title:  'createdBy',
          sortType: 'alpha'
        }
      ],
      onSortChange: sortChange
    };
 
    $scope.actionsText = "";
    var performAction = function (action) {
      $scope.actionsText = action.name + "\n" + $scope.actionsText;
    };
 
    $scope.actionsConfig = {
      primaryActions: [],
      moreActions: [],
      actionsInclude: true
    };
 
    $scope.toolbarConfig = {
      viewsConfig: $scope.viewsConfig,
      filterConfig: $scope.filterConfig,
      sortConfig: $scope.sortConfig,
      actionsConfig: $scope.actionsConfig
    };
 
    $scope.listConfig = {
      selectionMatchProp: 'name',
      checkDisabled: false,
      itemsAvailable: true,
      onClick: handleClick,
      onCheckBoxChange: handleCheckBoxChange,
      selectItems :false,
      showSelectBox:false
    };
    $scope.pageConfig = {
      pageSize: 5
   }
    $scope.emptyStateConfig = {
      icon: 'pficon-warning-triangle-o',
      title: 'No Items Available',
      info: "This is the Empty State component. The goal of a empty state pattern is to provide a good first impression that helps users to achieve their goals. It should be used when a view is empty because no objects exists and you want to guide the user to perform specific actions.",
      helpLink: {
         label: 'For more information please see',
         urlLabel: 'pfExample',
         url : '#/api/patternfly.views.component:pfEmptyState'
      }
    };
 
    $scope.noItemsConfig = {
      title: 'No Results Match the Filter Criteria',
      info: 'The active filters are hiding all items.',
      helpLink: {
        urlLabel: 'Clear All Filters',
        urlAction: clearFilters
      }
    };
 
    $scope.tableConfig = {
      onCheckBoxChange: handleCheckBoxChange,
      selectionMatchProp: "name",
      itemsAvailable: true
    };
 
    $scope.doAdd = function () {
      $scope.actionsText = "Add Action\n" + $scope.actionsText;
    };
 
    $scope.optionSelected = function (option) {
      $scope.actionsText = "Option " + option + " selected\n" + $scope.actionsText;
    };
 
    $scope.updateItemsAvailable = function () {
      $scope.tableConfig.itemsAvailable = $scope.listConfig.itemsAvailable;
      if(!$scope.listConfig.itemsAvailable) {
        $scope.toolbarConfig.filterConfig.resultsCount = 0;
        $scope.toolbarConfig.filterConfig.totalCount = 0;
        $scope.toolbarConfig.filterConfig.selectedCount = 0;
     } else {
        $scope.toolbarConfig.filterConfig.resultsCount = $scope.items.length;
        $scope.toolbarConfig.filterConfig.totalCount = $scope.allItems.length;
        handleCheckBoxChange();
      }
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
     $location.path("/detailpage/").search({documentId:item.documentId});
    }
    
    
    $scope.togglePagination = function () {
      if ($scope.showPagination) {
        $scope.pageConfig = {
           pageSize: 5
        }
      } else {
        delete $scope.pageConfig;
      }
      $scope.addNewComponentToDOM();
    };
 
    $scope.showComponent = true;
 
    $scope.addNewComponentToDOM = function () {
      $scope.showComponent = false;
      $timeout(() => $scope.showComponent = true);
    };
   
    $scope.shareOnfacebook = function (){
      FB.ui({
        method: 'share',
        display: 'popup',
        href: 'https://developers.facebook.com/docs/',
      }, function(response){});
    
    }

    
    
  }
  
]);