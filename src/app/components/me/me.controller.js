
(function () {
    'use strict';
    angular.module('app')
        .controller('MeController', MeController);

    function MeController($scope,$location,weChatService){
        $scope.user_id = window.sessionStorage.getItem('userId');
        weChatService.detailSelf($scope.user_id)
            .success(function(data){
                console.log(data);
                for(var i in data){
                    if(data[i].userId == $scope.user_id)
                    {
                        $scope.phone = data[i].phone;
                        $scope.wx = data[i].wx;
                        $scope.name = data[i].name;
                    }
                }
            });

        //退出登录

        $scope.userLogout = function(){

        }
    }

})();