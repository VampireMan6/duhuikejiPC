<template>
  <div class="register">
    <div class="content flex coloum">
      <div class="loaction">
       <span> 当前位置 : <router-link to="home">XXX平台</router-link> >> 白帽账号注册</span>
      </div>
      <div class="flex f-b">
        <div class="left">
          <div class="t-c">
            <Button style="width: 200px" to="login1">已有注册？ 白帽登录</Button>
          </div>
        </div>
      <div class="right">
        <!-- 邮箱 -->
        <div class="flex f-c">
          <div class="p-d">
            <p class="l-h-32">邮箱 :</p>
          </div>
          <div>
            <Input v-model="email" type="text" placeholder="请输入邮箱" style="width: 300px" />
            <div class="title">
              <p v-if="emails" class="">邮箱格式不正确</p>
            </div>
          </div>
        </div>
        <!-- 用户名 -->
        <div class="flex f-c">
          <div class="p-d">
            <p class="l-h-32">用户名 :</p>
          </div>
          <div>
            <Input v-model="userName" placeholder="请输入用户名" style="width: 300px" />
            <div class="title"></div>
          </div>
        </div>
        <!-- 密码 -->
        <div class="flex f-c">
          <div class="p-d">
            <p class="l-h-32">密码 :</p>
          </div>
          <div>
            <Input v-model="psw" type="password" password placeholder="请输入密码" style="width: 300px" />
            <div class="title">

            </div>
          </div>
        </div>
        <!-- 确认密码 -->
        <div class="flex f-c">
          <div class="p-d">
            <p class="l-h-32">确认密码 :</p>
          </div>
          <div>
            <Input v-model="pswSure" type="password" password placeholder="请再次输入密码" style="width: 300px" />
            <div class="title">
              <p v-if="pswSures" class="">两次密码输入不一致</p>
            </div>
          </div>
        </div>
        <!-- 邀请码 -->
        <div class="flex f-c">
          <div class="p-d">
            <p class="l-h-32">邀请码 :</p>
          </div>
          <div>
            <Input v-model="inviteCode" placeholder="请输入邀请码（选填）" style="width: 300px" />
            <div class="title"></div>
          </div>
        </div>
        <!-- 手机号 -->
        <div class="flex f-c">
          <div class="p-d">
            <p class="l-h-32">手机号 :</p>
          </div>
          <div>
            <Input v-model="mobile" maxlength='11' placeholder="请输入手机号" style="width: 300px" />
            <div class="title">
              <p v-if="mobiles" class="">手机号格式不正确</p>
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
        <div class="button">
          <Button type="primary" style="width: 367px" @click="login">立即注册</Button>
        </div>
         <div class="t-r forgetPsw">
            <router-link to="invitationCode">没有注册邀请码 ? 点我获取</router-link>
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
      email: '',
      userName: '',
      psw: '',
      pswSure: '',
      inviteCode: '',
      mobile: '',
      code: '',
      text: '获取验证码',
      statusCode: false,
      time: 60
    };
  },
  computed: {
    emails() {
      if (!this.email.trim()) return false;
      let reg = /^([a-zA-Z]|[0-9])(\w|-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/;
      // let reg = /^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/;
      return !reg.test(this.email.trim());
    },
    pswSures() {
      if (!this.pswSure.trim()) return false;
      return this.psw !== this.pswSure;
    },
    mobiles() {
      if (!this.mobile.trim()) return false;
      let reg = /^1(3|4|5|6|7|8|9)\d{9}$/;
      return !reg.test(this.mobile.trim());
    }
  },
  methods: {
    getCode() {
      this.downTimer();
    },
    downTimer(){
      this.statusCode = true;
      let timer = null;
      timer = setInterval(() => {
        this.text = this.time + 's后重新发送';
        this.time--;
        if (this.time === 0){
          this.statusCode = false;
          this.time = 60;
          this.text = '获取验证码';
          clearInterval(timer);
        }
      }, 1000);
    },
    login() {
      if (!this.email.trim()) {
        this.$Message.error('邮箱不能为空');
        return;
      };
      if (this.emails) {
        this.$Message.error('邮箱格式不正确');
        return;
      };
      if (!this.userName.trim()) {
        this.$Message.error('用户名不能为空');
        return;
      };
      if (!this.psw.trim()) {
        this.$Message.error('密码不能为空');
        return;
      };
      if (!this.pswSure.trim()) {
        this.$Message.error('确认密码不能为空');
        return;
      };
      if (this.pswSures) {
        this.$Message.error('两次密码不一致');
        return;
      };
      if (!this.mobile.trim()) {
        this.$Message.error('手机号码不能为空');
        return;
      };
      if (this.mobiles) {
        this.$Message.error('手机号码格式不正确');
        return;
      };
      if (!this.code.trim()) {
        this.$Message.error('验证码不能为空');
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
.forgetPsw {
  margin-top: 16px;
  color: #2d8cf0;
}
</style>
