(function() {
  'use strict';

  angular
    .module('seHablaEspanol')
    .directive('acmeKeyboard', acmeKeyboard);

  /** @ngInject */
  function acmeKeyboard() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/components/keyboard/keyboard.html',
      scope: {
          imgSrc: '@',
          keyTitle: '@',
          keyForeginTitle: '@'
      },
      controller: KeyboardController,
      controllerAs: 'vm',
      bindToController: true
    };

    return directive;

    /** @ngInject */
    function KeyboardController() {
      var vm = this;

      // "vm.creationDate" is available by directive option "bindToController: true"
      console.log(vm.imgSrc, vm.keyTitle, vm.keyForeginTitle);
    }
  }

})();