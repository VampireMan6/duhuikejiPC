
const layout = ()=>import("@/views/layout")
const home = ()=>import("@/views/home")
const login1 = ()=>import("@/views/login/index1.vue")
const login2 = ()=>import("@/views/login/index2.vue")
const register1 = ()=>import("@/views/register/register1.vue")
const register2 = ()=>import("@/views/register/register2.vue")
const forgetPsw1 = ()=> import("@/views/forgetPsw/forgetPsw1.vue")
const forgetPsw2 = ()=> import("@/views/forgetPsw/forgetPsw2.vue")
const invitationCode = ()=> import("@/views/invitationCode/invitationCode.vue")
const userhome = ()=> import("@/views/userHome/userHome.vue")
const user1 = ()=> import("@/views/userHome/user1.vue")

const routes = [
  {
    path: '/',
    redirect: '/home',
    meta: {
      title: '首页',
      isLogin: false
    },
    component: layout,
    children: [
      {
        path: '/login1',
        name: 'login1',
        meta: {
          title: '白帽登录',
          isLogin: false
        },
        component: login1
      },
      {
        path: '/login2',
        name: 'login2',
        meta: {
          title: '单位用户登录',
          isLogin: false
        },
        component: login2
      },
      {
        path: '/register1',
        name: 'register1',
        meta: {
          title: '白帽注册',
          isLogin: false
        },
        component: register1
      },
      {
        path: '/register2',
        name: 'register2',
        meta: {
          title: '单位用户注册',
          isLogin: false
        },
        component: register2
      },
      {
        path: '/home',
        name: 'home',
        meta: {
          title: '首页',
          isLogin: false
        },
        component: home
      },
      {
        path: '/forgetPsw1',
        name: 'forgetPsw1',
        meta: {
          title: '白帽账户找回密码',
          isLogin: false
        },
        component: forgetPsw1
      },
      {
        path: '/forgetPsw2',
        name: 'forgetPsw2',
        meta: {
          title: '单位用户找回密码',
          isLogin: false
        },
        component: forgetPsw2
      },
      {
        path: '/invitationCode',
        name: 'invitationCode',
        meta: {
          title: '邀请码',
          isLogin: false
        },
        component: invitationCode
      },
      {
        path: '/userhome',
        name: 'userhome',
        meta: {
          title: '主页',
          isLogin: false
        },
        redirect: '/userhome/user1',
        component: userhome,
        children: [
          {
            path: 'user1',
            name: 'user1',
            meta: {
              title: '111',
              isLogin: false
            },
            component: user1
          },
        ]
      },
    ]
  }
]
export default routes