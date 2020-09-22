<template>
  <div class="register">
    <div class="content flex coloum">
      <div class="loaction">
       <span> 当前位置 : <router-link to="home"> XXX平台 </router-link> >> 单位用户登录</span>
      </div>
      <div class="flex f-b">
        <!-- 左侧 -->
        <div class="left">
          <div class="t-c">
            <Button style="width: 200px" to="register2">没有账号？ 单位用户注册</Button>
          </div>
        </div>
         <!-- 右侧 -->
         <div class="right">
          <!-- 邮箱 -->
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
          <!-- 密码 -->
          <div class="flex f-c">
            <div class="p-d">
              <p class="l-h-32">密码 :</p>
            </div>
            <div>
              <Input v-model="input2" type="password" password placeholder="请输入密码" style="width: 300px" />
              <div class="title"></div>
            </div>
          </div>
          <!-- 验证码 -->
          <div class="flex f-c m-b-30">
            <div class="p-d">
              <p class="l-h-32">验证码 :</p>
            </div>
            <div>
              <div class="flex">
                <Input v-model="input3" placeholder="请输入验证码" style="width: 140px;marginRight: 20px;" />
                <sidentify :identifyCode='identifyCode' @even="even"></sidentify>
              </div>
              <div class="title">
                <p v-if="input3s">验证码错误</p>
              </div>
          </div>
            </div>
          <div class="button">
            <Button type="primary" style="width: 367px" @click="login">立即登录</Button>
          </div>
          <div class="t-r forgetPsw">
            <router-link to="register2">忘记密码 ?</router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import sidentify from '@/components/sidentify'

export default {
  data () {
    return {
      input1: '',
      input2: '',
      input3: '',
      identifyCode: '',
      identifyCodes: '1234567890'
    };
  },
  components: {
    sidentify
  },
  mounted() {
    this.identifyCode = '';
    this.makeCode(this.identifyCodes, 4);
  },
  computed: {
    input1s() {
      if (!this.input1.trim()) {
        return false;
      };
      let reg1 = /^([a-zA-Z]|[0-9])(\w|-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/;
      let reg2 = /^1(3|4|5|6|7|8|9)\d{9}$/;
      if (reg1.test(this.input1.trim()) || reg2.test(this.input1.trim())) {
        return false
      } else {
        return true
      }
      // return reg1.test(this.input1.trim()) || reg2.test(this.input1.trim()) ? false : true
    },
    input3s() {
      if (!this.input3.trim()) {
        return false
      };
      if (this.input3.trim() !== this.identifyCode) {
        return true
      } else {
        return false
      }
      // return this.input3.trim() !== this.identifyCode ? true : false
    }
  },
  methods: {
    even() {
      this.identifyCode = '';
      this.makeCode(this.identifyCodes, 4);
    },
    randomNum(min, max) {
      return Math.floor(Math.random() * (max - min) + min);
    },
    makeCode(o, l) {
      for (let i = 0; i < l; i++) {
        this.identifyCode += this.identifyCodes[this.randomNum(0, this.identifyCodes.length)]
      }
    },
    login() {
      this.$router.push({path: '/firmHome'})
      if (!this.input1.trim()) {
        this.$Message.error('邮箱 / 手机号不能为空');
        return;
      };
      if (this.input1s) {
        this.$Message.error('邮箱 / 手机号格式不正确');
        return;
      };
      if (!this.input2.trim()) {
        this.$Message.error('密码不能为空');
        return;
      };
      if (!this.input3.trim()) {
        this.$Message.error('验证码不能为空');
        return;
      };
      if (this.input3s) {
        this.$Message.error('验证码错误');
        return;
      };
    }
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
  margin: 0 auto;
  padding: 50px 50px;
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
