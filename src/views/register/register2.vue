<template>
  <div class="register">
    <div class="content flex coloum">
      <div class="loaction">
       <span> 当前位置 : <router-link to="home">XXX平台</router-link> >> 单位用户账号注册</span>
      </div>
      <div class="flex f-b">
        <div class="left">
        <div class="t-c">
          <Button style="width: 200px" to="login2">已有注册？ 单位用户登录</Button>
        </div>
        </div>
        <div class="right">
          <!-- 账号 -->
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
          <!-- 用户名 -->
          <div class="flex f-c">
            <div class="p-d">
              <p class="l-h-32">单位名称 :</p>
            </div>
            <div>
              <Input v-model="input2" placeholder="请输入单位名称" style="width: 300px" />
              <div class="title"></div>
            </div>
          </div>
          <!-- 单位资产/ip -->
          <div class="flex f-c">
            <div class="p-d">
              <p class="l-h-32">单位资产/ip :</p>
            </div>
            <div>
              <Input v-model="input3" maxlength='11' placeholder="请输入单位资产/ip" style="width: 300px" />
              <div class="title"></div>
            </div>
          </div>
          <!-- 密码 -->
          <div class="flex f-c">
            <div class="p-d">
              <p class="l-h-32">密码 :</p>
            </div>
            <div>
              <Input v-model="input4" type="password" password placeholder="请输入密码" style="width: 300px" />
              <div class="title"></div>
            </div>
          </div>
          <!-- 确认密码 -->
          <div class="flex f-c">
            <div class="p-d">
              <p class="l-h-32">确认密码 :</p>
            </div>
            <div>
              <Input v-model="input5" type="password" password placeholder="请再次输入密码" style="width: 300px" />
              <div class="title">
                <p v-if="input5s" class="">两次密码输入不一致</p>
              </div>
            </div>
          </div>
          <!-- 验证码 -->
          <div class="flex f-c m-b-30">
            <div class="p-d">
              <p class="l-h-32">验证码 :</p>
            </div>
            <div>
              <div class="flex">
                <Input v-model="input6" placeholder="请输入验证码" style="width: 140px;marginRight: 20px;" />
                <sidentify :identifyCode='identifyCode' @even="even"></sidentify>
              </div>
              <div class="title">
                <p v-if="input6s">验证码错误</p>
              </div>
          </div>
            </div>
          <div class="button">
            <Button type="primary" style="width: 367px" @click="login">立即注册</Button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import sidentify from '@/components/sidentify'  //**引入验证码组件**

export default {
  data () {
    return {
      input1: '',
      input2: '',
      input3: '',
      input4: '',
      input5: '',
      input6: '',
      identifyCode: '',
      identifyCodes: '1234567890'
    };
  },
  components: {
    sidentify 
  },
  mounted() {
    this.identifyCode = "";
    this.makeCode(this.identifyCodes, 4);
  },
  computed: {
    input1s() {
      if(!this.input1.trim()) return false;
      let reg1 = /^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/;
      let reg2 = /^1(3|4|5|6|7|8|9)\d{9}$/;
      return reg1.test(this.input1.trim()) || reg2.test(this.input1.trim()) ? false : true
    },
    input5s() {
      if(!this.input5.trim()) return false;
      return this.input4 !== this.input5 ? true : false;
    },
    input6s() {
      if(!this.input6.trim()) return false;
      return this.input6.trim() !== this.identifyCode ? true : false
    }
  },
  methods: {
    even() {
      this.identifyCode = "";
      this.makeCode(this.identifyCodes, 4);
    },
    randomNum(min, max) {
      return Math.floor(Math.random() * (max - min) + min);
    },
    makeCode(o, l) {
      for (let i = 0; i < l; i++) {
        this.identifyCode += this.identifyCodes[
          this.randomNum(0, this.identifyCodes.length)
        ];
      };
    },
    login() {
      if(!this.input1.trim()) {
        this.$Message.error('邮箱 / 手机号不能为空');
        return;
      };
      if(this.input1s) {
        this.$Message.error('邮箱 / 手机号格式不正确');
        return;
      };
      if(!this.input2.trim()) {
        this.$Message.error('单位名称不能为空');
        return;
      };
      if(!this.input3.trim()) {
        this.$Message.error('单位资产/ip不能为空');
        return;
      };
      if(!this.input4.trim()) {
        this.$Message.error('密码不能为空');
        return;
      };
      if(!this.input5.trim()) {
        this.$Message.error('确认密码不能为空');
        return;
      };
      if(this.input5s) {
        this.$Message.error('两次密码不一致');
        return;
      };
      if(!this.input6.trim()) {
        this.$Message.error('验证码不能为空');
        return;
      };
      if(this.input6s) {
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
  background-color: #2f2;
}
.right {
  min-width: 500px;
  padding: 20px 50px;
}
.button {
  margin-left: 50px;
}
</style>