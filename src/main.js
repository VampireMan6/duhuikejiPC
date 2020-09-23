import Vue from 'vue'
import App from './App'
import router from './router'// 路由
import store from './store/store'// vuex 状态管理
import { Button, Menu, MenuItem, Submenu, Icon, Input, Row, Col, Option, Select, Message, MenuGroup, Drawer, Tag, Dropdown, DropdownMenu, DropdownItem, Page, Table, Tooltip, Switch, Upload, Cascader, Carousel, CarouselItem, Modal, DatePicker } from 'view-design';// 引入 view ui库
import 'view-design/dist/styles/iview.css';// 引入view ui样式
import './assets/css/common.css'// css全局样式
import 'babel-polyfill' // ie 浏览器不支持es6新语法问题
import 'element-ui/lib/theme-chalk/index.css'// 引入element-ui样式
import ElementUI from 'element-ui'
import './assets/icon/iconfont.css'
import echarts from 'echarts'// 引入图表
import preventClick from './assets/js/clickStatefrom.js'

Vue.use(preventClick)
Vue.prototype.$echarts = echarts
Vue.use(ElementUI);
Vue.config.productionTip = false
Vue.component('Button', Button)
Vue.component('Menu', Menu)
Vue.component('MenuItem', MenuItem)
Vue.component('Submenu', Submenu)
Vue.component('Icon', Icon)
Vue.component('Input', Input)
Vue.component('Row', Row)
Vue.component('Col', Col)
Vue.component('Option', Option)
Vue.component('Select', Select)
Vue.component('MenuGroup', MenuGroup)
Vue.component('Drawer', Drawer)
Vue.component('Tag', Tag)
Vue.component('Dropdown', Dropdown)
Vue.component('DropdownMenu', DropdownMenu)
Vue.component('DropdownItem', DropdownItem)
Vue.component('Page', Page)
Vue.component('Table', Table)
Vue.component('Tooltip', Tooltip)
Vue.component('Switchs', Switch)
Vue.component('Upload', Upload)
Vue.component('Cascader', Cascader)
Vue.component('Carousel', Carousel)
Vue.component('CarouselItem', CarouselItem)
Vue.component('Modal', Modal)
Vue.component('DatePicker', DatePicker)

Vue.prototype.$Message = Message
Vue.prototype.$Modal = Modal

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
