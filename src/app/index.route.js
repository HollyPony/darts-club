(function() {
  'use strict';

  angular
    .module('dartsClub')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/views/main.html',
        controller: 'MainController',
        controllerAs: 'mainCtrl'
      });

    $urlRouterProvider.otherwise('/');
  }

})();
