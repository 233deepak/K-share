angular.module('apf.dashboardModule').controller( 'dashboardController', ['$scope', '$rootScope', '$resource','$location','pfViewUtils','$document','localStorageService',
  function ($scope, $rootScope, $resource ,$location,pfViewUtils,$document,localStorageService) {
    'use strict';

    $scope.filtersText = '';
    $scope.showPagination = false;
    
    $scope.columns = [
      { header: "Title", itemField: "title" },
      { header: "CreatedBy", itemField: "createdBy"},
      { header: "CreatedOn", itemField: "createdOn" },
      { header: "Views", itemField: "views"}
    ];
 
    $scope.allItems = [
      {
        title: "Heap and Heap sort Heap and Heap sort ",
        createdOn: "9 December",
        createdBy: "Sriyank Siddhartha",
        hasVideo: true,
        hasNotes: true,
        views:20089,
        verified:true,
        documentID:"121"
      },
      {
        title: "Linked-list",
        createdOn: "9 December",
        createdBy: "Sriyank Siddhartha",
        hasVideo: true,
        hasNotes: true,
        views:20089,
        verified:true,
        documentID:"121"
      },
      {
        title: "B-trees",
        createdOn: "9 December",
        createdBy: "Sriyank Siddhartha",
        hasVideo: true,
        hasNotes: true,
        views:20089,
        verified:true,
        documentID:"121"
      },
      {
        title: "Queue",
        createdOn: "9 December",
        createdBy: "Sriyank Siddhartha",
        hasVideo: true,
        hasNotes: true,
        views:20089,
        verified:true,
        documentID:"121"
      },
      {
        title: "DFS",
        createdOn: "9 December",
        createdBy: "Sriyank Siddhartha",
        hasVideo: true,
        hasNotes: true,
        views:20089,
        verified:true,
        documentID:"121"
      },
      {
        title: "BFS",
        createdOn: "9 December",
        createdBy: "Sriyank Siddhartha",
        hasVideo: true,
        hasNotes: true,
        views:20089,
        verified:true,
        documentID:"121"
      },
      {
        title: "BST",
        createdOn: "9 December",
        createdBy: "Sriyank Siddhartha",
        hasVideo: true,
        hasNotes: true,
        views:20089,
        verified:true,
        documentID:"121"
      },
      {
        title: "DAG",
        createdOn: "9 December",
        createdBy: "Sriyank Siddhartha",
        hasVideo: true,
        hasNotes: true,
        views:20089,
        verified:true,
        documentID:"121"
      },
      {
        title: "Stack",
        createdOn: "9 December",
        createdBy: "Sriyank Siddhartha",
        hasVideo: true,
        hasNotes: true,
        views:20089,
        verified:true,
        documentID:"121"
      },
      {
        title: "Arrays",
        createdOn: "9 December",
        createdBy: "Sriyank Siddhartha",
        hasVideo: true,
        hasNotes: true,
        views:20089,
        verified:true,
        documentID:"121"
      },
      {
        title: "Pattern",
        createdOn: "9 December",
        createdBy: "Sriyank Siddhartha",
        hasVideo: true,
        hasNotes: true,
        views:20089,
        verified:true,
        documentID:"121"
      },
      {
        title: "Dynamic programming",
        createdOn: "9 December",
        createdBy: "Sriyank Siddhartha",
        hasVideo: true,
        hasNotes: true,
        views:20089,
        verified:true,
        documentID:"121"
      }
    ];

    if(localStorageService.get("all-topics")){
      var currentTopics = localStorageService.get("all-topics");
      $scope.items = currentTopics;
    } else {
      $scope.items = $scope.allItems;
      localStorageService.set("all-topics",$scope.allItems);
    }
    
    
 
    var matchesFilter = function (item, filter) {
      var match = true;
      var re = new RegExp(filter.value, 'i');
 
      if (filter.id === 'title') {
        match = item.title.match(re) !== null;
      } else if (filter.id === 'createdBy') {
        match = item.createdBy === parseInt(filter.value);
      } else if (filter.id === 'createdOn') {
        match = item.createdOn.match(re) !== null;
      } 
      return match;
    };
 
    var matchesFilters = function (item, filters) {
      var matches = true;
 
      filters.forEach(function(filter) {
        if (!matchesFilter(item, filter)) {
          matches = false;
          return false;
        }
      });
      return matches;
    };
 
    var applyFilters = function (filters) {
      $scope.items = [];
      if (filters && filters.length > 0) {
        $scope.allItems.forEach(function (item) {
          if (matchesFilters(item, filters)) {
            $scope.items.push(item);
          }
        });
      } else {
        $scope.items = $scope.allItems;
      }
    };
 
    var clearFilters = function() {
      filterChange([]);
      $scope.filterConfig.appliedFilters = [];
    };
 
    var filterChange = function (filters) {
      $scope.filtersText = "";
      filters.forEach(function (filter) {
        $scope.filtersText += filter.title + " : " + filter.value + "\n";
      });
      applyFilters(filters);
      $scope.toolbarConfig.filterConfig.resultsCount = $scope.items.length;
    };
 
   
    $scope.searchByKeyWord = function(){
      var serachkey = $document.find('#searchkey').val();
      var newFilter = {
        id: "searchKey",
        title: "SearchKey",
        value: serachkey
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
          id: 'createdOn',
          title:  'Address',
          placeholder: 'Filter by createdOn...',
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
     localStorageService.set("current-document-id",item.documentID);
     localStorageService.set("current-meta-data",item);
     $location.path('/detailpage');
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