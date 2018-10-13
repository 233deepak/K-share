angular.module('apf.dashboardModule').controller( 'dashboardController', ['$scope', '$rootScope', '$resource','$location','pfViewUtils',
  function ($scope, $rootScope, $resource ,$location,pfViewUtils) {
    'use strict';

    $scope.filtersText = '';
    $scope.showPagination = false;
 
    $scope.columns = [
      { header: "Topic", itemField: "name" },
      { header: "Age", itemField: "age"},
      { header: "Address", itemField: "address" },
      { header: "BirthMonth", itemField: "birthMonth"}
    ];
 
    $scope.allItems = [
      {
        name: "Heap and Heap sort",
        age: 57,
        address: "20 Dinosaur Way, Washingstone",
        birthMonth: 'February'
      },
      {
        name: "Linked list",
        age: 23,
        address: "415 East Main Street, Norfolk, Virginia",
        birthMonth: 'October'
      },
      {
        name: "B-trees",
        age: 71,
        address: "234 Elm Street,Pennsylvania",
        birthMonth: 'March'
      },
      {
        name: "Queue",
        age: 21,
        address: "2 Apple Boulevard, Cincinatti, Ohio",
        birthMonth: 'December'
      },
      {
        name: "DFS",
        age: 19,
        address: "50 Second Street, New York, New York",
        birthMonth: 'February'
      },
      {
        name: "BFS",
        age: 32,
        address: "22 Oak Stree, Denver, Colorado",
        birthMonth: 'March'
      },
      {
        name: "Binary search tree",
        age: 55,
        address: "72 Bourbon Way. Nashville. Tennessee",
        birthMonth: 'March'
      },
      {
        name: "DAG",
        age: 34,
        address: "21 Jump Street, Hollywood, California",
        birthMonth: 'March'
      },
      {
        name: "Stack",
        age: 21,
        address: "50 Second Street, New York, New York",
        birthMonth: 'April'
      },
      {
        name: "Arrays",
        age: 30,
        address: "22 Oak Stree, Denver, Colorado",
        birthMonth: 'November'
      },
      {
        name: "Pattern matching",
        age: 50,
        address: "72 Bourbon Way. Nashville. Tennessee",
        birthMonth: 'January'
      },
      {
        name: "Dynamic Programming",
        age: 32,
        address: "21 Jump Street, Hollywood, California",
        birthMonth: 'June'
      }
    ];
    $scope.items = $scope.allItems;
 
    var matchesFilter = function (item, filter) {
      var match = true;
      var re = new RegExp(filter.value, 'i');
 
      if (filter.id === 'name') {
        match = item.name.match(re) !== null;
      } else if (filter.id === 'age') {
        match = item.age === parseInt(filter.value);
      } else if (filter.id === 'address') {
        match = item.address.match(re) !== null;
      } else if (filter.id === 'birthMonth') {
        match = item.birthMonth === filter.value;
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
 
    $scope.filterConfig = {
      fields: [
        {
          id: 'name',
          title:  'Topic',
          placeholder: 'Filter by Name...',
          filterType: 'text'
        },
        {
          id: 'age',
          title:  'Age',
          placeholder: 'Filter by Age...',
          filterType: 'text'
        },
        {
          id: 'address',
          title:  'Address',
          placeholder: 'Filter by Address...',
          filterType: 'text'
        },
        {
          id: 'birthMonth',
          title:  'Birth Month',
          placeholder: 'Filter by Birth Month...',
          filterType: 'select',
          filterValues: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
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
 
    var monthVals = {
      'January': 1,
      'February': 2,
      'March': 3,
      'April': 4,
      'May': 5,
      'June': 6,
      'July': 7,
      'August': 8,
      'September': 9,
      'October': 10,
      'November': 11,
      'December': 12
    };
    var compareFn = function(item1, item2) {
      var compValue = 0;
      if ($scope.sortConfig.currentField.id === 'name') {
        compValue = item1.name.localeCompare(item2.name);
      } else if ($scope.sortConfig.currentField.id === 'age') {
          compValue = item1.age - item2.age;
      } else if ($scope.sortConfig.currentField.id === 'address') {
        compValue = item1.address.localeCompare(item2.address);
      } else if ($scope.sortConfig.currentField.id === 'birthMonth') {
        compValue = monthVals[item1.birthMonth] - monthVals[item2.birthMonth];
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
          id: 'name',
          title:  'Name',
          sortType: 'alpha'
        },
        {
          id: 'age',
          title:  'Age',
          sortType: 'numeric'
        },
        {
          id: 'address',
          title:  'Address',
          sortType: 'alpha'
        },
        {
          id: 'birthMonth',
          title:  'Birth Month',
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
      onCheckBoxChange: handleCheckBoxChange
    };
 
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

    
  }
  
]);