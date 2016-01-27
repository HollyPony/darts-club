(function() {
  'use strict';

  angular.module('dartsClub').controller('MainController', MainController);

  /** @ngInject */
  function MainController(appConstants) {
    var vm = this;

    vm.games = appConstants.games;
  }
})();
