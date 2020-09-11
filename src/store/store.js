import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
	state:{//全局保存的值
		isLogin: false,//登录状态
		UserToken: {},//用户token
		UserInfo: {},//用户信息
	},
	getters:{//只是用来装饰state中的值，不能去改变state中的值
		
	},
	mutations:{//唯一能更改state中的值
		getState(state) {
			state.haslogin = true;
		},
		logIn(state,provider) {//登录token
			state.haslogin = true;
			state.userToken = provider;
			uni.setStorage({
				key: "userToken",
				data: provider
			})
		},
		logOut(state) {//退出账号
			state.haslogin = false;
			uni.clearStorage();
		}
	},
	actions:{//异步地 调用 mutations 去更改state中的对应值
		
	}
})

export default store;