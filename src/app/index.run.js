(function() {
  'use strict';

  angular
    .module('dartsClub')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
