(function() {
  'use strict';

  angular
    .module('seHablaEspanol')
    .config(routeConfig);

  function routeConfig($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'app/main/main.html',
        controller: 'MainController',
        controllerAs: 'main'
      })
      .when('/about_us', {
        templateUrl: 'app/main/about_us/about_us.html',
        controller: 'AboutUsController',
        controllerAs: 'aboutus'
      })
      .when('/my_course',{
        templateUrl:'app/main/my_course/my_course.html',
        controller:'MyCourseController',
        controllerAs: 'course'
      })
      .when('/login_register',{
        templateUrl:'app/main/login_register/login_register.html',
        controller:'LoginRegisterController',
        controllerAs: 'loginRegister'
      })
      .when('/learning_information',{
        templateUrl:'app/main/learning_information/learning_information.html',
        controller:'Learning_informationController',
        controllerAs: 'learning_information'
      })
      .when('/enterprise_training',{
        templateUrl:'app/main/enterprise_training/enterprise_training.html',
        controller:'Enterprise_trainingController',
        controllerAs: 'enterprise_training'
      })
      .when('/contact_us',{
        templateUrl:'app/main/contact_us/contact_us.html',
        controller:'Contact_usController',
        controllerAs: 'contact_us'
      })
      .otherwise({
        redirectTo: '/'
      });
  }

})();
