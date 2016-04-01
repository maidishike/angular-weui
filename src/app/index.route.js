(function () {
  'use strict';

  angular
      .module('app')
      .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider, $ocLazyLoadProvider) {
    $ocLazyLoadProvider.config({

      debug: false,

      events: true

    });
    $stateProvider
      //   .state('home', {
      //     url: '/',
      //     templateUrl: 'app/main/main.html',
      //     controller: 'MainController',
      //     controllerAs: 'main'
      //   })


        .state('index', {
          url: "/",
          templateUrl: "app/components/user/user-login.html",
          controller: 'UserLoginController'
        })

        .state('improveInfo', {
            url: "/user/improve/info",
            templateUrl: "app/components/user/user-improve-info.html",
            controller: 'UserImproveInfoController'
        })
        .state('forgetPwd', {

          url: '/user/forget/password',

          templateUrl: 'app/components/user/user-pwd-forget.html',

          controller: 'ForgetPwdEmailController'

        })


    /**
     * @互动应用
     */

        .state('app', {
          abstract: true,
          url: "/app",
          templateUrl: "app/main/main.html"
        })

        .state('app.home', {
          url: "/home",
          templateUrl: "app/components/home/home.html",
          controller: 'HomeController'
        })

        .state('app.address', {
            url: "/address",
            templateUrl: "app/components/address/address.html",
            controller: 'AddressController'
        })
        .state('app.find', {
            url: "/find",
            templateUrl: "app/components/find/find.html",
            controller: 'FindController'
        })
        .state('app.me', {
            url: "/me",
            templateUrl: "app/components/me/me.html",
            controller: 'MeController'
        })



    $urlRouterProvider.otherwise('/');
  }

})();
