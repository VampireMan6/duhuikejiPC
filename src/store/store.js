import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
	state : {// 全局保存的值
		haslogin: false, // 登录状态
		UserToken: {}, // 用户token
		UserInfo: {} // 用户信息
	},
	getters:{
		
	},
	mutations:{
		getState(state) {
			state.haslogin = true;
		},
		logIn(state, provider) { // 登录token
			state.haslogin = true;
			state.userToken = provider;
		},
		logOut(state) { // 退出账号
			state.haslogin = false;
		}
	},
	actions:{// 异步地 调用 mutations 去更改state中的对应值
		
	}
})

export default store;