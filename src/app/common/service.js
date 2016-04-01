(function () {
    'use strict';

    angular
        .module('app')
        .service('weChatService', weChatService);

    /** @ngInject */
    function weChatService($http) {

        /*
         * ÓÃ»§µÇÂ¼
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

    }
})();
