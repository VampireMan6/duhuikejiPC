import Vue from 'vue'
import App from './App'
import router from './router'//路由
import store from './store/store'//vuex 状态管理
import { Button,Menu,MenuItem,Submenu,Icon,Input,Row,Col,Option,Select,Message } from 'view-design';//引入 view ui库
import 'view-design/dist/styles/iview.css';//引入view ui样式
import './assets/css/common.css'//css全局样式
import 'babel-polyfill' //ie 浏览器不支持es6新语法问题

Vue.config.productionTip = false
Vue.component('Button', Button)
Vue.component('Menu', Menu)
Vue.component('MenuItem', MenuItem)
Vue.component('Submenu', Submenu)
Vue.component('Icon', Icon)
Vue.component('Input', Input)
Vue.component('Row', Row)
Vue.component('Col', Col)
Vue.component('Option',Option)
Vue.component('Select', Select)

Vue.prototype.$Message = Message

new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
