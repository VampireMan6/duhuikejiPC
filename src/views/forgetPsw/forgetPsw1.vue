<template>
  <div class="register">
    <div class="content flex coloum">
      <div class="loaction">
       <span> 当前位置 : <router-link to="/home">XXX平台</router-link> >> 白帽账号找回密码</span>
      </div>
      <div class="flex f-b">
        <!-- 左侧 -->
        <div class="left">
          <div class="t-c">
            <Button style="width: 200px" to="login1">白帽登录</Button>
          </div>
        </div>
        <!-- 右侧 -->
        <div class="right">
          <!-- 邮箱/手机号 -->
          <div class="flex f-c">
            <div class="p-d">
              <p class="l-h-32">账号 :</p>
            </div>
            <div>
              <Input v-model="input1" type="text" placeholder="请输入邮箱 / 手机号" style="width: 300px" />
              <div class="title">
                <p v-if="input1s" class="">邮箱 / 手机号格式不正确</p>
              </div>
            </div>
          </div>
          <!-- 验证码 -->
        <div class="flex f-c m-b-30">
          <div class="p-d">
            <p class="l-h-32">验证码 :</p>
          </div>
          <Input v-model="code" placeholder="请输入验证码" style="width: 140px;marginRight: 20px;" />
          <Button type="primary" style="width: 140px" :disabled='statusCode' @click="getCode">{{text}}</Button>
        </div>
          <!-- 新密码 -->
          <div class="flex f-c">
            <div class="p-d">
              <p class="l-h-32">新密码 :</p>
            </div>
            <div>
              <Input v-model="input2" placeholder="请输入新密码" style="width: 300px" />
              <div class="title"></div>
            </div>
          </div>
          <!-- 确认新密码 -->
          <div class="flex f-c">
            <div class="p-d">
              <p class="l-h-32">确认新密码 :</p>
            </div>
            <div>
              <Input v-model="input3" placeholder="请再次输入新密码" style="width: 300px" />
              <div class="title">
                <p v-if="input3s" class="">两次密码输入不一致</p>
              </div>
          </div>
          </div>
          <div class="button">
            <Button type="primary" style="width: 367px">确认修改</Button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  data () {
    return {
      input1: '',
      input2: '',
      input3: '',
      code: '',
      text: '获取验证码',
      statusCode: false,
      time: 60,
    };
  },
  computed: {
    input1s() {
      if(!this.input1.trim()) return false;
      let reg1 = /^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/;
      let reg2 = /^1(3|4|5|6|7|8|9)\d{9}$/;
      return reg1.test(this.input1.trim()) || reg2.test(this.input1.trim()) ? false : true
    },
    input3s() {
      if(!this.input3.trim()) return false;
      return this.input2 !== this.input3 ? true:false;
    },
  },
  methods: {
    getCode() {
      this.downTimer();
    },
    downTimer(){
      this.statusCode = true;
			let timer = setInterval(() => {
				this.text = this.time +"s后重新发送";
        this.time--;
				if(this.time == 0){
					this.statusCode = false;
					this.time = 60;
					this.text = "获取验证码";
					clearInterval(timer);
				}
			},1000);
		},
  }
}
</script>

<style scoped>
.register {
  width: 100%;
  padding: 50px 0;
  background-color: #e6e6e6;
}
.loaction {
  margin-bottom: 16px;
}
.content {
  max-width: 1200px;
  min-width: 900px;
  border-radius: 8px;
  padding: 50px 50px;
  margin: 0 auto;
  background-color: #fff;
}
.getCode {
  width: 140px;
  line-height: 32px;
  text-align: center;
  margin-left: 20px;
}

.left {
  min-width: 500px;
  height: 500px;
  background-color: #f1f;
}
.right {
  min-width: 500px;
  padding: 50px 50px;
}
.button {
  margin-left: 50px;
}
.forgetPsw {
  margin-top: 16px;
  color: #2d8cf0;
}
</style>