
(function () {
    'use strict';
    angular.module('app')
        .controller('UserImproveInfoController', UserImproveInfoController);

    function UserImproveInfoController($scope,$location,weChatService){
        $scope.userLoginFormData = {};
        $scope.userImproveInfo = function(){
            weChatService.improveInfo($scope.userImproveInfoFormData)
                .success(function(data){
                    if(data.update == 1){
                        showAndHide('#toast',1000);
                    }
                })
        }


    }

})();