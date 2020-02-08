angular.module ('apf.appModule', [
  'ngResource',
  'ngRoute',
  'ngTagsInput',
  'textAngular',
  'thatisuday.dropzone',
  'LocalStorageModule',
  'pascalprecht.translate',
  'patternfly',
  'patternfly.toolbars',
  'patternfly.charts',
  'patternfly.views',
  'patternfly.utils',
  'patternfly.wizard',
  'apf.dashboardModule',
  'apf.detailpageModule',
  'apf.contributeModule',
  'apf.loginModule',
  'apf.reportsModule',
  'apf.adminModule',
  'apf.testModule',
  'apf.testDetailModule'
  
]).config(['$routeProvider', '$translateProvider','localStorageServiceProvider',
  function ($routeProvider, $translateProvider, localStorageServiceProvider) {
    'use strict';

    $routeProvider
      .when('/', {
        redirectTo: '/test'
      })
     /* .when('/dashboard', {
        templateUrl: 'src/dashboard/dashboard.html'
      })*/

      // Default
      .otherwise({
      });

    $translateProvider.translations('default', 'en');
    $translateProvider.preferredLanguage('default');
    localStorageServiceProvider
    .setPrefix('apf')
    .setStorageType('sessionStorage')
    .setNotify(true, true);
    Dropzone.autoDiscover = false;

  }
]);
