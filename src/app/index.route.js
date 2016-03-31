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
          controller: 'UserLoginController as vm'
        })
        .state('forgetPwd', {

          url: '/user/forget/password',

          templateUrl: 'app/components/user/user-pwd-forget.html',

          controller: 'ForgetPwdEmailController'

        })

        .state('setNewPwd', {

          url: '/resetPassword/email/:email/checkCode/:checkCode',

          templateUrl: 'tpls/user/user-reset-password.html',

          controller: 'SetNewPwdController'

        })

        .state('setNewPwdSuc', {

          url: '/setNewPwdSuc',

          templateUrl: 'tpls/user/setNewPwdSuc.html'

        })

        .state('actEmail', {

          url: '/actEmail',

          templateUrl: 'tpls/user/email/actEmail.html'

          //controller:'loginCtrl'

        })

        .state('tokenFail', {

          url: '/user/token/fail',

          templateUrl: 'app/components/user/user-token-fail.html'

          //controller:'loginCtrl'

        })

        .state('backPwdEmail', {

          url: '/backPwdEmail',

          templateUrl: 'app/components/user/user.html'

          //controller:'loginCtrl'

        })

        .state('registerSuccess', {

          url: '/verifyEmail/email/:email/checkCode/:checkCode',

          templateUrl: 'tpls/user/user-register-success.html',

          controller: 'RegisterSuccessController'

        })

        .state('registerFail', {

          url: '/registerFail',

          templateUrl: 'tpls/user/user-register-fail.html'

          //controller: 'RegisterFailController'

        })

        .state('backPwdFail', {

          url: '/backPwdFail',

          templateUrl: 'tpls/user/user-pwd-back.html'

          //controller: 'RegisterFailController'

        })

        .state('changePassword', {
          url: '/user/change/password',
          templateUrl: 'app/components/user/user-change-password.html',
          controller: 'ChangePwdController as vm'
        })


        .state('userRegister', {

          url: '/user/register',

          templateUrl: 'app/components/user/user-register.html',

          controller: 'UserRegisterController as vm'

        })

      /*
       * 商户认证
       * */

        .state('useraudit', {

          url: '/user/audit',

          templateUrl: 'tpls/user/user-audit.html',

          controller: 'UserAuditController as vm'

        })

      /*
       * 第三方授权
       * */

        .state('userAuth', {

          url: '/user/np/bind',

          templateUrl: 'app/components/user/user-np-bind.html',

          controller: 'UserNpBindController as vm'

        })

        .state('userAuthSuccess', {

          url: '/auth',

          templateUrl: 'app/components/user/user-np-bind-success.html',

          controller: 'UserNpBindSuccessController as vm'

        })

        .state('userGainInfo', {

          url: '/user/np/gain',

          templateUrl: 'app/components/user/user-np-gain.html',

          controller: 'UserNpGainController as vm'

        })

      /*
       * 第三方授权测试
       * */
        .state('authTest', {

          url: '/test/auth',

          templateUrl: 'app/components/test/auth-test.html',

          controller: 'AuthTestController as vm'

        })

        .state('userAuthTest', {

          url: '/auth_test',

          templateUrl: 'app/components/test/auth-test-success.html',

          controller: 'userAuthTestSuccessController as vm'

        })
      /*

       * 用户信息

       * */

        .state('userInfo', {

          url: '/user/info',

          views: {

            '': {

              templateUrl: 'app/main/main.html'

            },

            'maingrid@userInfo': {

              templateUrl: 'app/components/user/user-info-detail.html',

              controller: 'UserInfoController as vm'

            }

          }


        })


      /*

       @配置管理

       */

        .state('beaconList', {

          url: '/beacon/list/:page',

          views: {

            '': {

              templateUrl: 'app/main/main.html'

            },

            'maingrid@beaconList': {

              templateUrl: 'app/components/beacon/beacon-list.html',

              controller: 'BeaconListController as vm'

            }

          }


        })

        .state('beaconDetail', {

          url: '/beacon/detail/:object_id',

          views: {

            '': {

              templateUrl: 'app/main/main.html'

            },

            'maingrid@beaconDetail': {

              templateUrl: 'app/components/beacon/beacon-detail.html',

              controller: 'BeaconDetailController as vm'

            }

          }


        })

        .state('beaconHistory', {

          url: '/beacon/history/list/:object_id/:page',

          views: {

            '': {

              templateUrl: 'app/main/main.html'

            },

            'maingrid@beaconHistory': {

              templateUrl: 'app/components/beacon/beacon-history-list.html',

              controller: 'BeaconHistoryController as vm'

            }

          }


        })

        .state('editBeacon', {

          url: '/beacon/edit/:object_id',

          views: {

            '': {

              templateUrl: 'app/main/main.html'

            },

            'maingrid@updateBeacon': {

              templateUrl: 'app/components/beacon/beacon-edit.html',

              controller: 'EditBeaconController as vm'

            }


          }

        })

        .state('addBeacon', {

          url: '/beacon/create',

          views: {

            '': {

              templateUrl: 'app/main/main.html'

            },

            'maingrid@addBeacon': {

              templateUrl: 'app/components/beacon/beacon-create.html',

              controller: 'CreateBeaconController as vm'

            }


          }

        })

      /*

       * @巡检记录

       * */

        .state('inspectRecord', {

          url: '/inspect/record/list/:page',

          views: {

            '': {

              templateUrl: 'app/main/main.html'

            },

            'maingrid@inspectRecord': {

              templateUrl: 'app/components/record/inspect-record-list.html',

              controller: 'InspectorRecordListController as vm'

            }

          }


        })

      /*

       * @人员管理

       * */

        .state('inspectorList', {

          url: '/inspector/list/:page',

          views: {

            '': {

              templateUrl: 'app/main/main.html'

            },

            'maingrid@inspectorList': {

              templateUrl: 'app/components/inspector/inspector-list.html',

              controller: 'InspectorListController as vm'

            }

          }


        })

        .state('createInspector', {

          url: '/inspector/create',

          views: {

            '': {

              templateUrl: 'app/main/main.html'

            },

            'maingrid@createInspector': {

              templateUrl: 'app/components/inspector/inspector-create.html',

              controller: 'CreateInspectorController as vm'

            }

          }


        })

        .state('editInspector', {

          url: '/inspector/edit/:object_id',

          views: {

            '': {

              templateUrl: 'app/main/main.html'

            },

            'maingrid@editInspector': {

              templateUrl: 'app/components/inspector/inspector-edit.html',

              controller: 'EditInspectorController as vm'

            }

          }


        })

      /*
       * 部署管理
       * */

        .state('deploymanage', {

          url: '/deploy/list/:page',

          views: {

            '': {

              templateUrl: 'app/main/main.html'

            },

            'maingrid@deploymanage': {

              templateUrl: 'tpls/deployManage/deploymanage.html'

              //controller:'MainController'

            }

          }

        })

      /*

       @申请设备

       */

        .state('applyDeviceList', {
          url: '/device/apply/list/:page',
          templateUrl: 'app/components/device/device-apply-list.html',
          controller: 'ApplyDeviceListController as vm'
        })

      /*

       @导入设备列表

       * */

        .state('importdevice', {
          url: '/device/import/:page',
          templateUrl: 'app/components/device/device-import.html',
          controller: 'ImportDeviceController as vm'
        })

      /*

       *@设备配置

       *  */

        .state('lbs.deviceBindedList', {
          url: '/device/binded/list/:page',
          templateUrl: 'app/components/device/device-binded-list.html',
          controller: 'DeviceBindedListController as vm'
        })

        .state('deviceUnbindedList', {
          url: '/device/unbinded/list/:page',
          templateUrl: 'app/components/device/device-unbinded-list.html',
          controller: 'DeviceUnbindedListController as vm'
        })

        .state('editDevice', {
          url: '/device/edit/:object_id/:page',
          templateUrl: 'app/components/device/device-edit.html',
          controller: 'EditDeviceController as vm'
        })


        .state('createDevice', {
          url: '/device/create',
          templateUrl: 'app/components/device/device-create.html',
          controller: 'CreateDeviceController as vm'
        })


    /**
     * 查看设备 配置到页面
     */
        .state('deviceDetail', {

          url: '/device/detail/:device_id/:object_id/:page',
          templateUrl: 'app/components/device/device-detail.html',
          controller: 'DeviceDetailController as vm'
        })

      //.state('deviceDetail', {
      //
      //  url: '/device/detail/:device_id/:object_id/:page',
      //
      //  templateUrl: 'app/components/device/device-detail.html',
      //
      //  controller: 'DeviceDetailController'
      //
      //})

    /**
     * @互动应用
     */

        .state('app', {
          abstract: true,
          url: "/app",
          templateUrl: "app/main/main.html"
        })

        .state('app.pageList', {
          url: "/page/list/:page",
          templateUrl: "app/components/page/page-binded-list.html",
          controller: 'PageListController as vm'
        })


      /*
       * 页面配置
       */

      //.state('pageList', {
      //
      //  url: '/page/list/:page',
      //
      //  views: {
      //
      //    '': {
      //
      //      templateUrl: 'app/main/main.html'
      //
      //    },
      //
      //    'maingrid@pageList': {
      //
      //      templateUrl: 'app/components/page/page-binded-list.html',
      //
      //      controller: 'PageConfiguredController'
      //
      //    }
      //
      //  }
      //
      //
      //
      //})

        .state('selectCardTpl', {

          url: '/page/create/select-template/card',

          views: {

            '': {

              templateUrl: 'app/main/main.html'

            },

            'maingrid@selectCardTpl': {

              templateUrl: 'app/components/page/page-create-select-template-card.html',

              controller: 'SelectCardTplController as vm'

            }

          }

        })

        .state('selectRpTpl', {

          url: '/page/create/select-template/rp',

          views: {

            '': {

              templateUrl: 'app/main/main.html'

            },

            'maingrid@selectRpTpl': {

              templateUrl: 'app/components/page/page-create-select-template-rp.html',

              controller: 'SelectRpTplController as vm'

            }

          }

        })

        .state('createCustomPage', {
          url: '/page/create/0',
          templateUrl: 'app/components/page/page-create-custom.html',
          controller: 'CreateCustomPageController as vm'
        })


    /**
     * 关注公众号选择页面
     */

        .state('selectRpTplFollow', {

          url: '/page/create/select-template/follow',

          views: {

            '': {

              templateUrl: 'app/main/main.html'

            },

            'maingrid@selectRpTplFollow': {

              templateUrl: 'app/components/page/page-create-select-template-follow.html',

              controller: 'SelectFollowTplController as vm'

            }

          }

        })


    /**
     * 关注公众号实现页面
     *
     */

        .state('createCardFollow', {
          url: '/page/create/4',
          templateUrl: 'app/components/page/page-create-follow.html',
          controller: 'CreateFollowController as vm'
        })

    /**
     * 微现场应用
     *
     */

        .state('pageMicroSiteCreate', {

          url: '/page/microsite/create',

          templateUrl: 'app/components/page/page-microsite-create.html',

          controller: 'PageMicroSiteController as vm'

        })

    /**
     * 修改公众号页面
     *
     */
        .state('editCardFollow', {
          url: '/page/edit/4/:object_id',
          templateUrl: 'app/components/page/page-edit-follow.html',
          controller: 'EditFollowController as vm'
        })

        .state('createCardPage', {
          url: '/page/create/1',
          templateUrl: 'app/components/page/page-create-card.html',
          controller: 'CreateCardPageController as vm'
        })
        .state('createRpPage', {
          url: '/page/create/2',
          templateUrl: 'app/components/page/page-create-rp.html',
          controller: 'CreateRpPageController as vm'
        })

      /*
       * 新增卡券货架
       * */
        .state('createCardShelfPage', {
          url: '/page/create/card/shelf',
          templateUrl: 'app/components/page/page-create-card-shelf.html',
          controller: 'CreateCardShelfController as vm'
        })
      /*
       * 新增海报
       * */
        .state('createPosterPage', {
          url: '/page/create/3/:type',
          templateUrl: 'app/components/page/page-create-poster.html',
          controller: 'CreatePosterPageController as vm'
        })
        .state('editCustomPageInfo', {
          url: '/page/edit/0/:object_id',
          templateUrl: 'app/components/page/page-edit-custom.html',
          controller: 'EditCustomPageInfoController as vm'
        })
        .state('editCardPageInfo', {
          url: '/page/edit/1/:object_id',
          templateUrl: 'app/components/page/page-edit-card.html',
          controller: 'EditCardPageInfoController as vm'
        })
        .state('editRpPageInfo', {
          url: '/page/edit/2/:object_id',
          templateUrl: 'app/components/page/page-edit-rp.html',
          controller: 'EditRpPageInfoController as vm'
        })
      /*
       * 查看海报页面
       * */
        .state('editPosterPageInfo', {
          url: '/page/edit/3/:object_id',
          templateUrl: 'app/components/page/page-edit-poster.html',
          controller: 'EditPosterPageInfoController as vm'
        })


    /**
     *
     * 新增总览页面
     *
     */
        .state('applicationsquare', {
          url: "/page/square/select/app",
          templateUrl: 'app/components/page/page-square-select-app.html',
          controller: 'ApplicationSquareController as vm'
        })
      /*
       * 配置到设备
       * */

        .state('pageBind', {
          url: "/page/bind/:object_id/:page",
          templateUrl: "app/components/page/page-bind.html",
          controller: 'PageBindController as vm'
        })

    /**
     * 推广管理
     */

        .state('compaignList',{
          url: '/compaign/list/:page',
          templateUrl:'app/components/campaign/compaign-list.html',
          controller:'CompaignListController as vm'
        })

    /**
     * 查看推广
     */
        .state('compainDetail', {
          url: '/compaign/detail/:extension_id',
          views: {
            '': {
              templateUrl: 'app/main/main.html'
            },
            'maingrid@compainDetail': {
              templateUrl: 'app/components/campaign/compaign-detail.html',
              controller: 'viewPageDataCtrl as vm'
            }
          }

        })

        .state('createCompain', {

          url: '/compaign/create',

          views: {

            '': {

              templateUrl: 'app/main/main.html'

            },

            'maingrid@createCompain': {

              templateUrl: 'app/components/campaign/compaign-create.html',

              controller: 'AddPromoteManageController as vm'

            }

          }

        })


    /**
     * 编辑推广
     */

        .state('editCompaign', {

          url: '/compaign/edit/:extension_id',

          views: {

            '': {

              templateUrl: 'app/main/main.html'

            },

            'maingrid@editCompaign': {

              templateUrl: 'app/components/campaign/compaign-edit.html',

              controller: 'EditPageDataCtrl as vm'

            }

          }

        })


    /**
     * 复制推广
     */

        .state('copyCompaign', {

          url: '/compaign/copy/:extension_id',

          views: {

            '': {

              templateUrl: 'app/main/main.html'

            },

            'maingrid@copyCompaign': {

              templateUrl: 'app/components/campaign/compaign-copy.html',

              controller: 'CopyPageDataCtrl as vm'

            }

          }

        })

      /*

       * @运营商 推广

       * */

        .state('operatorList', {

          url: '/operator/list/:page',

          views: {

            '': {

              templateUrl: 'app/main/main.html'

            },

            'maingrid@operatorList': {

              templateUrl: 'app/components/campaign/operator-list.html',

              controller: 'OperatorController as vm'

            }

          }


        })

    /**
     * @数据统计
     */

      /*

       * @数据监控

       * */

        .state('statsBase', {
          url: '/stats/base',
          templateUrl: 'app/components/stats/stats-base.html',
          controller: 'StatsBaseController as vm'
        })

        .state('statsDeviceList', {
          url: '/stats/device/list/:page',
          templateUrl: 'app/components/stats/stats-device-list.html',
          controller: 'StatsDeviceListController as vm'
        })


    /**
     * 页面数据
     */
        .state('statsPageList', {

          url: '/stats/page/list/:page',
          templateUrl: 'app/components/stats/stats-page-list.html',
          controller: 'StatsPageListController as vm'
        })

    /**
     * 页面详细数据
     */
        .state('statsPageDetail', {
          url: '/stats/page/detail/:pageId/:object_id/:page',
          templateUrl: 'app/components/stats/stats-page-detail.html',
          controller: 'StatsPageDetailController as vm'
        })


    /**
     * 用户数据
     */

        .state('statsUser', {
          url: '/stats/user/list/:page',
          templateUrl: 'app/components/stats/stats-user.html',
          controller: 'StatsUserController as vm'
        })

    /**
     * 用户详细数据
     *
     */
        .state('statsUserDetail', {

          url: '/stats/user/detail/:object_id/:page',
          templateUrl: 'app/components/stats/stats-user-detail.html',
          controller: 'StatsUserDetailController as vm'
        })

    /**
     * 设备详细数据
     *
     */
        .state('statsDeviceDetail', {
          url: '/stats/device/detail/:object_id/:page',
          templateUrl: 'app/components/stats/stats-device-detail.html',
          controller: 'StatsDeviceDetailController as vm'
        })


    /**
     * 查询红包活动
     */

        .state('app.lotteryList', {
          url: '/lottery/list/:page',
          templateUrl: 'app/components/lottery/lottery-list.html',
          controller: 'LotteryListController as vm'
        })


    /**
     * 创建红包活动与绑定
     */

        .state('createLottery', {
          url: '/lottery/create',
          templateUrl: 'app/components/lottery/lottery-create.html',
          controller: 'CreateLotteryController as vm'
        })


    /**
     * 添加红包
     */

        .state('editLottery', {
          url: '/lottery/edit/:lottery_id',
          templateUrl: 'app/components/lottery/lottery-edit.html',
          controller: 'EditLotteryCtrl as vm'
        })

    /**
     * 查询活动数据
     */
        .state('lotteryDataList', {
          url: '/lottery/data/list/:page',
          templateUrl: 'app/components/lottery/lottery-data-list.html',
          controller: 'LotteryDataListController as vm'
        })

    /**
     * 卡券管理
     */

        .state('app.cardList', {
          url: '/card/list/:page',
          templateUrl: 'app/components/card/card-list.html',
          controller: 'CardListController as vm'
        })


    /**

     *创建卡券

     */

        .state('createCard', {
          url: '/card/create',
          templateUrl: 'app/components/card/card-create.html',
          controller: 'CreateCardController as vm'
        })

    /**

     * 查看卡券页面

     */
        .state('cardDetail', {
          url: '/card/detail/:card_id',
          templateUrl: 'app/components/card/card-detail.html',
          controller: 'CardDetailController as vm'
        })


    /**
     * 复制卡券
     */

        .state('copyCard', {
          url: '/card/copy/:card_id',
          templateUrl: 'app/components/card/card-copy.html',
          controller: 'CopyCardController as vm'
        })

    /**

     *卡券数据

     */
        .state('cardDataList', {
          url: '/card/data/list/:page',
          templateUrl: 'app/components/card/card-data-list.html',
          controller: 'CardDataListController as vm'
        })
    /**

     * 发出的卡券

     */
        .state('cardTaskIssuedList', {
          url: '/card/task/issued/list/:page',
          templateUrl: 'app/components/card/card-task-issued-list.html',
          controller: 'CardTaskIssuedListController as vm'
        })


    /**

     * 收到的卡券

     */

        .state('cardTaskReceivedList', {
          url: '/card/task/received/list/:page',
          templateUrl: 'app/components/card/card-task-received-list.html',
          controller: 'CardTaskReceivedListController as vm'
        })
    /**

     * 发出的卡券报表

     */
        .state('cardTaskDataIssuedList', {
          url: '/card/task/data/issued/list/:task_id/:card_id/:page',
          templateUrl: 'app/components/card/card-task-data-issued-list.html',
          controller: 'CardTaskDataIssuedListController as vm'
        })


    /**
     * 收到的卡券报表
     */
        .state('cardTaskDataReceivedList', {
          url: '/card/task/data/received/list/:task_id/:card_id/:page',
          templateUrl: 'app/components/card/card-task-data-received-list.html',
          controller: 'CardTaskDataReceivedListController as vm'
        })
    /**

     * 发出的卡券详情

     */
        .state('cardTaskDetailIssued', {
          url: '/card/task/detail/issued/:task_id',
          templateUrl: 'app/components/card/card-task-detail-issued.html',
          controller: 'CardTaskDetailIssuedController as vm'
        })

    /**

     * 收到的卡券详情

     */
        .state('cardTaskDetailReceived', {
          url: '/card/task/detail/received/:task_id',
          templateUrl: 'app/components/card/card-task-detail-received.html',
          controller: 'CardTaskDetailReceivedController as vm'
        })


    /**
     * @管理
     * */
        .state('manage', {
          abstract: true,
          url: '/manage',
          templateUrl: 'app/main/main.html'
        })

    /**
     * 商户管理
     */

        .state('manage.merchantList', {
          url: '/merchant/list/:page',
          templateUrl: 'app/components/merchant/merchant-list.html',
          controller: 'MerchantListController as vm'
        })

    /**
     * 新增商户
     */

        .state('createMerchant', {
          url: '/merchant/create',
          templateUrl: 'app/components/merchant/merchant-create.html',
          controller: 'CreateMerchantController as vm'
        })

        .state('editMerchant', {
          url: '/merchant/edit/:object_id',
          templateUrl: 'app/components/merchant/merchant-edit.html',
          controller: 'EditMerchantController as vm'
        })

    /**
     * 员工管理
     */

        .state('manage.staffList', {
          url: '/staff/list/:page',
          templateUrl: 'app/components/staff/staff-list.html',
          controller: 'StaffListController as vm'
        })


    /**
     * 员工管理 修改
     *
     * 你的账号
     */

        .state('staffSelfEdit', {
          url: '/staff/self/edit/:object_id',
          templateUrl: 'app/components/staff/staff-self-edit.html',
          controller: 'StaffEditSelfController as vm'
        })

    /**
     * 员工管理
     * 查看下级
     * 新增
     */

        .state('staffChildCreate', {
          url: '/staff/child/create',
          templateUrl: 'app/components/staff/staff-child-create.html',
          controller: 'StaffChildCreateController as vm'
        })

    /**
     * 员工管理
     * 查看
     * 修改
     * 下级
     */

        .state('staffChildEdit', {
          url: '/staff/child/edit/:object_id',
          templateUrl: 'app/components/staff/staff-child-edit.html',
          controller: 'StaffChildEditController as vm'
        })

    /**
     * 员工管理
     * 查看下级
     * 查看
     */

        .state('staffChildDetail', {
          url: '/staff/child/detail/:object_id/:page',
          templateUrl: 'app/components/staff/staff-child-detail.html',
          controller: 'StaffChildDetailController as vm'
        })


    /**
     * @LBS
     */
        .state('lbs', {
          url: '/lbs',
          templateUrl: 'app/main/main.html'
        })

      /*
       *门店管理
       */

        .state('lbs.branchList', {
          url: '/branch/list/:page',
          templateUrl: 'app/components/branch/branch-list.html',
          controller: 'BranchListController as vm'
        })


      /*
       *新增门店
       * */
        .state('createBranch', {
          url: '/branch/create/:object_id',
          templateUrl: 'app/components/branch/branch-create.html',
          controller: 'CreateBranchController as vm'
        })


      /*
       *修改门店
       * */

        .state('editBranch', {
          url: '/branch/edit/:object_id',
          templateUrl: 'app/components/branch/branch-edit.html',
          controller: 'EditBranchController as vm'
        })


      /*
       *修改微信门店
       * */

        .state('branch-edit-wechat', {
          url: '/branch/edit/wechat/:object_id',
          templateUrl: 'app/components/branch/branch-edit-wechat.html',
          controller: 'BranchEditWeChatController as vm'
        })


      /*
       *查看门店
       * */

        .state('branchDetail', {
          url: '/branch/detail/:object_id',
          templateUrl: 'app/components/branch/branch-detail.html',
          controller: 'BranchDetailController  as vm'
        })


      /*
       *公众号设置
       * */

        .state('manage.wechatpublic', {
          url: '/mp/edit',
          templateUrl: 'app/components/mp/mp-edit.html',
          controller: 'MpEditController as vm'
        })

      //应用管理数据
        .state('applicationDataList', {
          url: '/application/data/list',
          views: {
            '': {
              templateUrl: 'app/main/main.html'
            },

            'maingrid@applicationDataList': {
              templateUrl: 'app/components/application/application-data-list.html',
              controller: 'ApplicationDataListController as vm'
            }
          }
        })

      //查看应用
        .state('applicationClassesList', {
          url: '/application/classes/list/:app_id/classes/:object_id?:name',
          views: {
            '': {
              templateUrl: 'app/main/main.html'
            },
            'maingrid@applicationClassesList': {
              templateUrl: 'app/components/application/application-classes-list.html',
              controller: 'ApplicationClassesListController as vm'
            }
          }
        })

    /**
     * 智能硬件
     * 设备管理
     */

        .state('iotDeviceList', {
          url: "/iot/device/list",
          templateUrl: "app/components/iot/device/iot-device-list.html",
          controller: 'IotDeviceListController as vm'
        })

    /**
     * 智能硬件
     * 设备基本详情
     */
        .state('iotDeviceDetail', {
          url: "/iot/device/detail",
          templateUrl: "app/components/iot/device/iot-device-detail.html",
          controller: 'IotDeviceDetailController as vm'
        })

    /**
     * 编辑
     */
        .state('iotDeviceEdit', {
          url: "/iot/device/edit",
          templateUrl: "app/components/iot/device/iot-device-edit.html",
          controller: 'IotDeviceEditController as vm'
        })

    /**
     * 智能硬件
     * 服务器管理
     */
        .state('iotSeverConfigure', {
          url: "/iot/sever/configure",
          templateUrl: "app/components/iot/serve/iot-sever-configure.html",
          controller: 'IotSeverConfigureController as vm'
        })

      //数据总览
        .state('dashboardDataList', {
          url: "/dashboard",
          templateUrl: "app/components/dashboard/dashboard-data-list.html",
          controller: 'DashboardDataListController as vm'
        });

    $urlRouterProvider.otherwise('/');
  }

})();
