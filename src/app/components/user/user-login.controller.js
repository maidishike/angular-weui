
(function () {
    'use strict';
    angular.module('app')
        .controller('UserLoginController', UserLoginController);

    function UserLoginController($scope,$location,weChatService){
        $scope.userLoginFormData = {};
        $scope.userLogin = function(){
            weChatService.login($scope.userLoginFormData)
                .success(function(data){
                    for(var i in data){
                        if(data[i].email == $scope.userLoginFormData.email && data[i].password == $scope.userLoginFormData.password)
                        {
                            $scope.userid = data[i].userId;
                            window.sessionStorage.setItem("userId",$scope.userid);
                            if(data[i].active == 0){
                                showAndHide('#loadingToast',1000);
                                $location.path('user/improve/info');

                            }else{
                                $location.path('app/home');
                            }
                        }else{
                            showAndHide('.js_tooltips',3000);
                        }
                    }
                })
        }


    }

})();