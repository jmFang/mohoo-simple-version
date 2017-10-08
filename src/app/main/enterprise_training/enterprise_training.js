(function() {
	'use strict';

	angular
		.module('enterprise_training',[])
		.controller('Enterprise_trainingController', Enterprise_trainingController);

	function Enterprise_trainingController(){
		angular.element('.nav .active').removeClass("active");
		angular.element('.nav .enterprise-training').addClass("active");
	}
})();
