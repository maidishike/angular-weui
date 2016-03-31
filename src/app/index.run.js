(function() {
  'use strict';

  angular
    .module('app')
    .run(runBlock);

  /** @ngInject */
  function runBlock($rootScope,$state,$stateParams) {

    $rootScope.$state = $state;

    $rootScope.$stateParams = $stateParams;

  }

})();
