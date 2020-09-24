<template>
  <div class="register">
    <div class="content flex coloum">
      <div class="loaction">
        <span>
          当前位置 : <router-link to="home">XXX平台</router-link> >>
          单位用户找回密码</span>
      </div>
      <Row class="m-b-16">
        <Col :xs="{ span: 0 }" :md="{ span: 0 }" :xl="{ span: 24 }">
          <div class="flex">
            <!-- 左侧 -->
            <div class="left flex-1">
              <div class="t-c">
                <Button style="width: 200px" to="login2">单位用户登录</Button
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
                    placeholder="请输入邮箱/手机号"
                    style="width: 100%"
                  />
                  <div class="title">
                    <p v-if="input1s" class="">邮箱/手机号格式不正确</p>
                  </div>
                </div>
              </div>
              <!-- 验证码 -->
              <div class="flex f-c m-b-16">
                <div class="p-d">
                  <p class="l-h-32">验证码 :</p>
                </div>
                <div class="flex-1">
                  <div class="flex">
                    <Input
                      v-model="input2"
                      placeholder="请输入验证码"
                      style="width: 48%; margin-right: 20px"
                    />
                    <sidentify
                      :identifyCode="identifyCode"
                      @even="even"
                    ></sidentify>
                  </div>
                  <div class="title">
                    <p v-if="input2s">验证码错误</p>
                  </div>
                </div>
              </div>
              <!-- 密码 -->
              <div class="flex f-c">
                <div class="p-d">
                  <p class="l-h-32">新密码 :</p>
                </div>
                <div class="flex-1">
                  <Input
                    v-model="input3"
                    type="password"
                    password
                    placeholder="请输入新密码"
                    style="width: 100%"
                  />
                  <div class="title"></div>
                </div>
              </div>
              <!-- 确认密码 -->
              <div class="flex f-c m-b-30">
                <div class="p-d">
                  <p class="l-h-32">确认密码 :</p>
                </div>
                <div class="flex-1">
                  <Input
                    v-model="input4"
                    type="password"
                    password
                    placeholder="请再次输入新密码"
                    style="width: 100%"
                  />
                  <div class="title"></div>
                </div>
              </div>
              <div class="button flex">
                <div class="p-d">
                  <p class="l-h-32"></p>
                </div>
                <div class="flex-1">
                  <Button
                  type="primary"
                  style="width: 100%"
                  @click="login"
                  v-preventClick
                  >确认修改</Button
                >
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
                <Button style="width: 200px" to="register2"
                  >没有账号？ 单位用户注册</Button>
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
                  placeholder="请输入邮箱/手机号"
                  style="width: 100%"
                />
                <div class="title">
                  <p v-if="input1s" class="">邮箱/手机号格式不正确</p>
                </div>
              </div>
              <!-- 验证码 -->
              <span class="spanLeft2">验证码 :</span>
              <div class="flex">
                <Input
                  v-model="input2"
                  placeholder="请输入验证码"
                  style="width: 48%; margin-right: 20px"
                />
              </div>
              <div class="title">
                <p v-if="input2s">验证码错误</p>
              </div>
              <sidentify2 class="m-b-16" :identifyCode="identifyCode"  @even="even"></sidentify2>
              <!-- 新密码 -->
              <span class="spanLeft2">新密码 :</span>
              <div class="flex-1">
                <Input
                  v-model="input3"
                  type="password"
                  password
                  placeholder="请再次输入新密码"
                  style="width: 100%"
                />
                <div class="title"></div>
              </div>
              <!-- 确认新密码 -->
              <span class="spanLeft2">确认新密码 :</span>
              <div class="flex-1 m-b-30">
                <Input
                  v-model="input4"
                  type="password"
                  password
                  placeholder="请输入确认新密码"
                  style="width: 100%"
                />
                <div class="title"></div>
              </div>
              <div class="flex-1">
                  <Button
                  type="primary"
                  style="width: 100%"
                  @click="login"
                  v-preventClick >确认修改</Button>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  </div>
</template>

<script>
import sidentify from '@/components/sidentify';
import sidentify2 from '@/components/sidentify2';

export default {
  data() {
    return {
      input1: '',
      input2: '',
      input3: '',
      input4: '',
      identifyCode: '',
      identifyCodes: '1234567890'
    };
  },
  components: {
    sidentify,
    sidentify2
  },
  mounted() {
    this.identifyCode = '';
    this.makeCode(this.identifyCodes, 4);
  },
  computed: {
    input1s() {
      if (!this.input1.trim()) return false;
      let reg1 = /^([a-zA-Z]|[0-9])(\w|-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/;
      // let reg1 = /^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/;
      let reg2 = /^1(3|4|5|6|7|8|9)\d{9}$/;
      if (reg1.test(this.input1.trim()) || reg2.test(this.input1.trim())) {
        return false;
      } else {
        return true;
      }
      // return !reg1.test(this.input1.trim()) || reg2.test(this.input1.trim());
      // return reg1.test(this.input1.trim()) || reg2.test(this.input1.trim()) ? false : true
    },
    input2s() {
      if (!this.input2.trim()) return false;
      return this.input2.trim() !== this.identifyCode;
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
        this.identifyCode += this.identifyCodes[this.randomNum(0, this.identifyCodes.length)];
      }
    },
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
