(function () {
    'use strict';

    angular
        .module('app')
        .service('weChatService', weChatService);

    /** @ngInject */
    function weChatService($http) {

        //登录
        this.login = function (formData) {
            return (
                $http({
                    method: 'POST',

                    url: requestUrl + '/user.json',

                    headers: {'Content-Type': 'application/json'},

                    data: formData
                })
            )
        };

        //退出

        this.logout = function(userId){
          return(
              $http({
                  method: 'POST',
                  url: requestUrl + '/logout.json?userId='+userId,
                  headers: {'Content-Type': 'application/json'}
              })
          )
        };

        //完善信息
        this.improveInfo = function (formData) {
            return (
                $http({
                    method: 'POST',

                    url: requestUrl + '/user-info.json',

                    headers: {'Content-Type': 'application/json'},

                    data: formData
                })
            )
        };

        //查看本人信息
        this.detailSelf = function (userId) {
            return (
                $http({
                    method: 'GET',

                    url: requestUrl + '/me.json?userId='+userId,

                    headers: {'Content-Type': 'text/plain'}

                })
            )
        };

        //查看通讯录
        this.queryAddress = function () {
            return (
                $http({
                    method: 'GET',

                    url: requestUrl + '/address.json',

                    headers: {'Content-Type': 'text/plain'}

                })
            )
        };

    }
})();
