
(function () {
    'use strict';
    angular.module('app')
        .controller('UserLoginController', UserLoginController);

    function UserLoginController($scope,weChatService){
        $scope.userLoginFormData = {};
        $scope.userLogin = function(){
            weChatService.login($scope.userLoginFormData)
                .success(function(data){
                    console.log(data);
                    for(var i in data){
                        if(data[i].email == $scope.userLoginFormData.email && data[i].password == $scope.userLoginFormData.password)
                        {

                        }else{
                            $('.js_tooltips').show();
                            setTimeout(function (){
                                $('.js_tooltips').hide();
                            }, 3000);
                        }
                    }
                })
        }


    }

})();