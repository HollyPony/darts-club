(function() {
  'use strict';

  angular.module('dartsClub')
    .constant('appConstants', {
      games: [
        {
          order: 0,
          technicalName: '501'
        },
        {
          order: 1,
          technicalName: 'capital'
        }
      ]
    });
})();
