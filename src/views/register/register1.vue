<template>
  <div class="register">
    <div class="content flex coloum">
      <div class="loaction">
        <span>
          当前位置 : <router-link to="home">XXX平台</router-link> >>
          白帽注册</span
        >
      </div>
      <Row class="m-b-16">
        <Col :xs="{ span: 0 }" :md="{ span: 0 }" :xl="{ span: 24 }">
          <div class="flex">
            <!-- 左侧 -->
            <div class="left flex-1">
              <div class="t-c">
                <Button style="width: 200px" to="login1"
                  >已有注册？ 白帽登录</Button
                >
              </div>
            </div>
            <!-- 右侧 -->
            <div class="right flex-1">
              <!-- 邮箱 -->
              <div class="flex f-c">
                <div class="p-d">
                  <p class="l-h-32">账号 :</p>
                </div>
                <div class="flex-1">
                  <Input
                    v-model="input1"
                    type="text"
                    placeholder="请输入邮箱"
                    style="width: 100%"
                  />
                  <div class="title">
                    <p v-if="input1s" class="">邮箱格式不正确</p>
                  </div>
                </div>
              </div>
              <!-- 用户名 -->
              <div class="flex f-c m-b-16">
                <div class="p-d">
                  <p class="l-h-32">用户名 :</p>
                </div>
                <div class="flex-1">
                  <Input
                    v-model="input2"
                    type="text"
                    placeholder="请输入用户名"
                    style="width: 100%"
                  />
                </div>
              </div>
              <!-- 密码 -->
              <div class="flex f-c">
                <div class="p-d">
                  <p class="l-h-32">密码 :</p>
                </div>
                <div class="flex-1">
                  <Input
                    v-model="input3"
                    type="password"
                    password
                    placeholder="请输入密码"
                    style="width: 100%"
                  />
                  <div class="title"></div>
                </div>
              </div>
              <!-- 确认密码 -->
              <div class="flex f-c">
                <div class="p-d">
                  <p class="l-h-32">确认密码 :</p>
                </div>
                <div class="flex-1">
                  <Input
                    v-model="input4"
                    type="password"
                    password
                    placeholder="请再次输入密码"
                    style="width: 100%"
                  />
                  <div class="title">
                    <p v-if="input4s">两次密码输入不一致</p>
                  </div>
                </div>
              </div>
              <!-- 邀请码 -->
              <div class="flex f-c">
                <div class="p-d">
                  <p class="l-h-32">邀请码 :</p>
                </div>
                <div class="flex-1">
                  <Input
                    v-model="input5"
                    type="text"
                    placeholder="请输入邀请码"
                    style="width: 100%"
                  />
                  <div class="title"></div>
                </div>
              </div>
              <!-- 手机号 -->
              <div class="flex f-c">
                <div class="p-d">
                  <p class="l-h-32">手机号 :</p>
                </div>
                <div class="flex-1">
                  <Input
                    v-model="input6"
                    type="text"
                    placeholder="请输入手机号"
                    style="width: 100%"
                  />
                  <div class="title"></div>
                </div>
              </div>
              <!-- 验证码 -->
              <div class="flex f-c m-b-30">
                <div class="p-d">
                  <p class="l-h-32">验证码 :</p>
                </div>
                <div class="flex-1">
                  <div class="flex">
                    <Input v-model="input7" placeholder="请输入验证码" style="width: 48%; margin-right: 20px"/>
                    <Button class="m-l-16" type="primary" :disabled='statusCode' @click="getCode">{{text}}</Button>
                  </div>
                </div>
              </div>
              <div class="button flex">
                <div class="p-d">
                  <p class="l-h-32"></p>
                </div>
                <div class="flex-1">
                  <Button type="primary" style="width: 100%" @click="login" v-preventClick>立即注册</Button>
                </div>
              </div>
            </div>
          </div>
        </Col>
        <Col :xs="{ span: 24 }" :md="{ span: 24 }" :xl="{ span: 0 }">
          <div class="flex coloum">
            <!-- 左侧 -->
            <div class="left flex-1 m-b-16">
              <div class="t-c">
                <Button style="width: 200px" to="register1"
                  >没有账号？ 白帽注册</Button>
              </div>
            </div>
            <!-- 右侧 -->
            <div class="flex-1">
              <!-- 邮箱 -->
              <span class="spanLeft2">账号 :</span>
              <div class="flex-1">
                <Input
                  v-model="input1"
                  type="text"
                  placeholder="请输入邮箱"
                  style="width: 100%"
                />
                <div class="title">
                  <p v-if="input1s" class="">邮箱格式不正确</p>
                </div>
              </div>
              <!-- 用户名 -->
              <span class="spanLeft2">用户名 :</span>
              <div class="flex-1 m-b-16">
                <Input
                  v-model="input2"
                  type="text"
                  placeholder="请输入用户名"
                  style="width: 100%"
                />
              </div>
              <!-- 密码 -->
              <span class="spanLeft2">密码 :</span>
              <div class="flex-1">
                <Input
                  v-model="input3"
                  type="password"
                  password
                  placeholder="请输入密码"
                  style="width: 100%"
                />
                <div class="title"></div>
              </div>
              <!-- 确认密码 -->
              <span class="spanLeft2">确认密码 :</span>
              <div class="flex-1">
                <Input
                  v-model="input4"
                  type="password"
                  password
                  placeholder="请再次输入密码"
                  style="width: 100%"
                />
                <div class="title">
                  <p v-if="input4s">验证码错误</p>
                </div>
              </div>
              <!-- 邀请码 -->
              <span class="spanLeft2">邀请码 :</span>
              <div class="flex-1 m-b-16">
                <Input
                  v-model="input5"
                  type="text"
                  placeholder="请输入邀请码"
                  style="width: 100%"
                />
              </div>
              <!-- 手机号 -->
              <span class="spanLeft2">手机号 :</span>
              <div class="flex-1 m-b-16">
                <Input
                  v-model="input6"
                  type="text"
                  placeholder="请输入手机号"
                  style="width: 100%"
                />
              </div>
              <!-- 验证码 -->
              <span class="spanLeft2">验证码 :</span>
              <div class="flex m-b-16">
                <Input
                  v-model="input7"
                  placeholder="请输入验证码"
                  style="width: 48%; margin-right: 20px"
                />
                <Button type="primary" :disabled='statusCode' @click="getCode">{{text}}</Button>
              </div>
              <div class="flex-1">
                <Button type="primary" style="width: 100%" @click="login" v-preventClick >立即注册</Button>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
      input1: '',
      input2: '',
      input3: '',
      input4: '',
      input5: '',
      input6: '',
      input7: '',
      identifyCode: '',
      identifyCodes: '1234567890',
      statusCode: false,
      time: 60,
      text: '获取验证码'
    };
  },
  computed: {
    input1s() {
      if (!this.input1.trim()) return false;
      let reg1 = /^([a-zA-Z]|[0-9])(\w|-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/;
      // let reg1 = /^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/;
      // let reg2 = /^1(3|4|5|6|7|8|9)\d{9}$/;
      if (reg1.test(this.input1.trim())) {
        return false;
      } else {
        return true;
      }
      // return !reg1.test(this.input1.trim()) || reg2.test(this.input1.trim());
      // return reg1.test(this.input1.trim()) || reg2.test(this.input1.trim()) ? false : true
    },
    input4s() {
      if (!this.input3.trim()) return false;
      return this.input3.trim() !== this.input4.trim();
    }
  },
  methods: {
    login() {
      localStorage.setItem('status', 'sssssssss');
      this.$router.push({ path: '/userhome' });
      if (!this.input1.trim()) {
        this.$Message.error('邮箱/手机号不能为空');
        return;
      }
      if (this.input1s) {
        this.$Message.warning('邮箱/手机号格式不正确');
        return;
      }
      if (!this.input2.trim()) {
        this.$Message.error('密码不能为空');
        return;
      }
      if (!this.input3.trim()) {
        this.$Message.error('验证码不能为空');
        return;
      }
      if (this.input3s) {
        this.$Message.warning('验证码错误');
        return false
      }
    },
    getCode() {
      this.downTimer();
    },
    downTimer(){
      this.statusCode = true;
      this.timer = setInterval(() => {
        this.text = this.time + 's后重新发送';
        this.time--;
        if (this.time === 0){
          this.statusCode = false;
          this.time = 60;
          this.text = '获取验证码';
          clearInterval(this.timer);
        }
      }, 1000);
    }
  }
};
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
  width: 80%;
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
  height: 500px;
  background-color: #f1f;
}
.right {
  padding: 50px 50px;
}
.forgetPsw {
  margin-top: 16px;
  color: #2d8cf0;
}
.spanLeft1{
  width: 160px;
  display:inline-block;
  text-align: right;
  margin-right: 16px;
  margin-bottom: 8px;
}
.spanLeft2 {
  width: 160px;
  display:inline-block;
  text-align: left;
  margin-right: 16px;
  margin-bottom: 8px;
}
.p-16 {padding: 16px;}
</style>
