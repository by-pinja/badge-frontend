(function() {
  'use strict';

  /**
   * Initialization of badgeFrontend.core module.
   *
   * @namespace Modules
   */
  angular
    .module('badgeFrontend.core', [
      'ngAnimate', 'ngMaterial', 'ngMessages', 'ngSanitize',
      'ui.router',
      'badge-frontend-templates',
      'blocks.exception', 'blocks.logger', 'blocks.router'
    ]);
})();