
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
        component: import('@/views/forgetPsw/forgetPsw2.vue')
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
        redirect: '/userhome/user',
        component: () => import('@/views/userHome/userHome.vue'),
        children: [
          {// 默认主页
            path: 'user',
            name: 'user',
            meta: {
              title: '主页',
              isLogin: false
            },
            component: () => import('@/views/userHome/user1.vue')
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
            component: () => import('@/views/userHome/List2/myLoophole.vue')
          },
          {// 漏洞管理 提交漏洞
            path: 'loophole/submitLoophole',
            name: 'submitLoophole',
            meta: {
              title: '我的漏洞',
              isLogin: false
            },
            component: () => import('@/views/userHome/List2/submitLoophole.vue')
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
      }
    ]
  }
]
export default routes
