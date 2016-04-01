(function () {
    'use strict';

    angular
        .module('app')
        .service('weChatService', weChatService);

    /** @ngInject */
    function weChatService($http) {

        /*
         * 用户登录
         *
         * */

        this.getBeaconList = function (searchMsg, pageId, access_token) {
            if (typeof (searchMsg) == 'undefined') {
                return ($http({

                    method: 'GET',

                    url: requestUrl + '/beacons?page=' + pageId,

                    headers: {'Content-Type': 'text/plain', 'X-Access-Token': access_token}

                }))
            } else {
                return ($http({
                    method: 'GET',
                    url: requestUrl + '/beacons?q=' + searchMsg + '&page=' + pageId,
                    headers: {'Content-Type': 'text/plain', 'X-Access-Token': access_token}
                }))

            }

        };

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

    }
})();
