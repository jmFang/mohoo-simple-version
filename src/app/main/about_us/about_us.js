(function() {
	'use strict';

	angular
		.module('about_us',[])
		.controller('AboutUsController', AboutUsController);

	function AboutUsController($scope){
		//angular.element('.nav .active').removeClass("active");
		//angular.element('.nav .about-us').addClass("active");
		$scope.test = "test1";
		$scope.test2 = "test2";
		$scope.test3 = "test3";
	}
})();
