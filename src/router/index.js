import Vue from 'vue'
import Router from 'vue-router'
import routes from './routes'

const originalPush = Router.prototype.push
Router.prototype.push = function push(location, onResolve, onReject) {
  if (onResolve || onReject) return originalPush.call(this, location, onResolve, onReject)
  return originalPush.call(this, location).catch(err => err)
}

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes,
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  }
})

// 路由守卫
router.beforeEach((to, from, next) => {
  if(to.meta.title) {
    document.title = to.meta.title
  };
  if (to.meta.isLogin) {//验证是否需要登录认证
    if (to.path !== '/login1' || to.path !== '/login2') {
      next({path: '/login1'});
    } else {
      next();
    }
  } else {
    next();
  }
});

export default router