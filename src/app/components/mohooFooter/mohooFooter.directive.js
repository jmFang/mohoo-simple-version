(function () {
	'use strict';

	angular
		.module('seHablaEspanol')
		.directive('mohooFooter', mohooFooter);

		/* @ngInject */
		function mohooFooter () {
			var directive = {
				restrict: 'E',
				templateUrl: 'app/components/mohooFooter/mohooFooter.html',
				scope: {
					/*add some here*/
				},
				controller: MohooFooterController,
				controllerAs: 'vm',
				bindToController: true

			};

			return directive;
			/* @ngInject */
	/*		function MohooFooterController (moment) {
				var vm = this;
				//add some operations here
			}*/
		}
})();
