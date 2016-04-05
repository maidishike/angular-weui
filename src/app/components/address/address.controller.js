
(function () {
    'use strict';
    angular.module('app')
        .controller('AddressController', AddressController);

    function AddressController($scope,weChatService){
        weChatService.queryAddress()
            .success(function(data){
                console.log(data);
                $scope.addressDataList = data;
            })
    }

})();