
// const layout = () => import('@/views/layout')
// const home = () => import('@/views/home')
// const login1 = () => import('@/views/login/index1.vue')
// const login2 = () => import('@/views/login/index2.vue')
// const register1 = () => import('@/views/register/register1.vue')
// const register2 = () => import('@/views/register/register2.vue')
// const forgetPsw1 = () => import('@/views/forgetPsw/forgetPsw1.vue')
// const forgetPsw2 = () => import('@/views/forgetPsw/forgetPsw2.vue')
// const invitationCode = () => import('@/views/invitationCode/invitationCode.vue')
// const userhome = () => import('@/views/userHome/userHome.vue')
// const user1 = () => import('@/views/userHome/user1.vue')

const routes = [
  {
    path: '/',
    redirect: '/home',
    meta: {
      title: '首页',
      isLogin: false
    },
    component: () => import('@/views/layout'),
    children: [
      {
        path: '/login1',
        name: 'login1',
        meta: {
          title: '白帽登录',
          isLogin: false
        },
        component: () => import('@/views/login/index1.vue')
      },
      {
        path: '/login2',
        name: 'login2',
        meta: {
          title: '单位用户登录',
          isLogin: false
        },
        component: () => import('@/views/login/index2.vue')
      },
      {
        path: '/register1',
        name: 'register1',
        meta: {
          title: '白帽注册',
          isLogin: false
        },
        component: () => import('@/views/register/register1.vue')
      },
      {
        path: '/register2',
        name: 'register2',
        meta: {
          title: '单位用户注册',
          isLogin: false
        },
        component: () => import('@/views/register/register2.vue')
      },
      { // 首页
        path: '/home',
        name: 'home',
        meta: {
          title: '首页',
          isLogin: false
        },
        component: () => import('@/views/home')
      },
      {
        path: '/forgetPsw1',
        name: 'forgetPsw1',
        meta: {
          title: '白帽账户找回密码',
          isLogin: false
        },
        component: () => import('@/views/forgetPsw/forgetPsw1.vue')
      },
      {
        path: '/forgetPsw2',
        name: 'forgetPsw2',
        meta: {
          title: '单位用户找回密码',
          isLogin: false
        },
        component: () => import('@/views/forgetPsw/forgetPsw2.vue')
      },
      {
        path: '/invitationCode',
        name: 'invitationCode',
        meta: {
          title: '邀请码',
          isLogin: false
        },
        component: () => import('@/views/invitationCode/invitationCode.vue')
      },
      {// 个人主页 白帽登录
        path: '/userhome',
        name: 'userhome',
        meta: {
          title: '主页',
          isLogin: false
        },
        redirect: '/userhome/homePage',
        component: () => import('@/views/userHome/userHome.vue'),
        children: [
          {// 默认主页
            path: 'homePage',
            name: 'homePage',
            meta: {
              title: '主页',
              isLogin: false
            },
            component: () => import('@/views/userHome/homePage.vue')
          },
          {// 项目管理 项目池
            path: 'project/projectPool',
            name: 'projectPool',
            meta: {
              title: '项目池',
              isLogin: false
            },
            component: () => import('@/views/userHome/List1/projectPool.vue')
          },
          {// 项目管理 我的项目
            path: 'project/myProject',
            name: 'myProject',
            meta: {
              title: '项目池',
              isLogin: false
            },
            component: () => import('@/views/userHome/List1/myProject.vue')
          },
          // {// 项目管理 项目申请
          //   path: 'project/projectApplication',
          //   name: 'projectApplication',
          //   meta: {
          //     title: '项目池',
          //     isLogin: false
          //   },
          //   component: () => import('@/views/userHome/List1/projectApplication.vue')
          // }
          {// 漏洞管理 我的漏洞
            path: 'loophole/myLoophole',
            name: 'myLoophole',
            meta: {
              title: '我的漏洞',
              isLogin: false
            },
            component: () => import('@/views/userHome/List2/myLoopholes.vue')
          },
          {// 漏洞管理 提交漏洞
            path: 'loophole/submitLoophole',
            name: 'submitLoophole',
            meta: {
              title: '我的漏洞',
              isLogin: false
            },
            component: () => import('@/views/userHome/List2/submitLoophole.vue')
          },
          {// 文章管理 提交文章
            path: 'article/submitArticle',
            name: 'submitArticle',
            meta: {
              title: '提交文章',
              isLogin: false
            },
            component: () => import('@/views/userHome/List3/submitArticle.vue')
          },
          {// 文章管理 我的文章
            path: 'article/myArticle',
            name: 'myArticle',
            meta: {
              title: '我的漏洞',
              isLogin: false
            },
            component: () => import('@/views/userHome/List3/myArticle.vue')
          },
          {// 团队管理 我的团队
            path: 'team/myTeam',
            name: 'myTeam',
            meta: {
              title: '团队列表',
              isLogin: false
            },
            component: () => import('@/views/userHome/List4/myTeam.vue')
          },
          {// 我的团队 创建团队
            path: 'team/createTeam',
            name: 'createTeam',
            meta: {
              title: '创建团队',
              isLogin: false
            },
            component: () => import('@/views/userHome/List4/createTeam.vue')
          },
          {// 我的团队 团队管理
            path: 'team/teamManage',
            name: 'teamManage',
            meta: {
              title: '团队管理',
              isLogin: false
            },
            component: () => import('@/views/userHome/List4/teamManage.vue')
          },
          {// 我的团队 团队活动
            path: 'team/teamActivity',
            name: 'teamActivity',
            meta: {
              title: '团队活动',
              isLogin: false
            },
            component: () => import('@/views/userHome/List4/teamActivity.vue')
          },
          {// 个人中心 收货地址
            path: 'personalCenter/address',
            name: 'address',
            meta: {
              title: '收货地址',
              isLogin: false
            },
            component: () => import('@/views/userHome/List5/address.vue')
          },
          {// 个人中心 基本资料
            path: 'personalCenter/baseData',
            name: 'baseData',
            meta: {
              title: '基本资料',
              isLogin: false
            },
            component: () => import('@/views/userHome/List5/baseData.vue')
          },
          {// 个人中心 我的积分
            path: 'personalCenter/myIntegral',
            name: 'myIntegral',
            meta: {
              title: '我的积分',
              isLogin: false
            },
            component: () => import('@/views/userHome/List5/myIntegral.vue')
          },
          {// 个人中心 账号绑定
            path: 'personalCenter/accountBinding',
            name: 'accountBinding',
            meta: {
              title: '账号绑定',
              isLogin: false
            },
            component: () => import('@/views/userHome/List5/accountBinding.vue')
          },
          {// 个人中心 修改密码
            path: 'personalCenter/changePassword',
            name: 'changePassword',
            meta: {
              title: '修改密码',
              isLogin: false
            },
            component: () => import('@/views/userHome/List5/changePassword.vue')
          },
          {// 实名认证
            path: 'certification',
            name: 'certification',
            meta: {
              title: '实名认证',
              isLogin: false
            },
            component: () => import('@/views/userHome/List6/certification.vue')
          }
        ]
      },
      { // 白帽登录 我的项目 详情
        path: '/myProjectDetail',
        name: 'myProjectDetail',
        meta: {
          title: '项目详情',
          isLogin: false
        },
        component: () => import('@/views/userHome/myProjectDetail')
      },
      {// 厂商主页 厂商登录
        path: '/firmHome',
        name: 'firmHome',
        meta: {
          title: '主页',
          isLogin: false
        },
        redirect: '/firmHome/firmHomePage',
        component: () => import('@/views/firmHome/firmHome.vue'),
        children: [
          {// 默认主页
            path: 'firmHomePage',
            name: 'firmHomePage',
            meta: {
              title: '主页',
              isLogin: false
            },
            component: () => import('@/views/firmHome/firmHomePage.vue')
          },
          {// 项目添加
            path: 'firm/projectAddition',
            name: 'projectAddition',
            meta: {
              title: '项目添加',
              isLogin: false
            },
            component: () => import('@/views/firmHome/List1/projectAddition.vue')
          },
          {// 项目列表
            path: 'firm/ProjectList',
            name: 'ProjectList',
            meta: {
              title: '项目列表',
              isLogin: false
            },
            component: () => import('@/views/firmHome/List2/ProjectList.vue')
          },
          {// 漏洞管理
            path: 'firm/management',
            name: 'management',
            meta: {
              title: '漏洞管理',
              isLogin: false
            },
            component: () => import('@/views/firmHome/List3/management.vue')
          },
          {// 资料设置
            path: 'firm/dataSettings',
            name: 'dataSettings',
            meta: {
              title: '资料设置',
              isLogin: false
            },
            component: () => import('@/views/firmHome/List4/dataSettings.vue')
          },
          {// 通知设置
            path: 'firm/notificationSettings',
            name: 'notificationSettings',
            meta: {
              title: '通知设置',
              isLogin: false
            },
            component: () => import('@/views/firmHome/List5/notificationSettings.vue')
          }
        ]
      },
      { // 主页 漏洞认领
        path: '/home/loopholeClaim',
        name: 'homeLoopholeClaim',
        meta: {
          title: '漏洞认领',
          isLogin: false
        },
        component: () => import('@/views/home/loopholeClaim/loopholeClaim.vue')
      },
      {// 主页 项目池
        path: '/home/projectPool',
        name: 'homeProjectPool',
        meta: {
          title: '项目池',
          isLogin: false
        },
        component: () => import('@/views/userHome/List1/projectPool.vue')
      },
      {// 主页 白帽服务 兑换区
        path: '/home/exchange',
        name: 'homeExchange',
        meta: {
          title: '项目池',
          isLogin: false
        },
        component: () => import('@/views/home/exchange/exchange.vue')
      }
    ]
  }
]
export default routes
