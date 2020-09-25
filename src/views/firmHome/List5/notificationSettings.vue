<template>
  <div class="content">
    <Row>
      <Col :xs="{ span: 0}" :md="{ span: 0}" :xl="{ span: 24}">
        <div class="top m-b-16"></div>
        <div class="flex m-b-16">
          <span>你当前可添加的邮箱条数为: 12</span>
          <span class="m-l-16">你当前可添加的短信条数为: 12</span>
          <span class="m-l-16">你当前可添加的微信关注数为: 12</span>
        </div>
        <div class="flex">
          <span class="spanLeft1">* 邮箱账号</span>
          <div class="flex-1">
            <Input v-model="input1" placeholder="请输入你需要接受的邮箱账号" style="width: 100%" />
            <div class="title">
              <p v-if="input1s" class="">邮箱格式不正确</p>
            </div>
          </div>
        </div>
        <div class="flex">
          <span class="spanLeft1">* 短信号码</span>
          <div class="flex-1">
            <Input v-model="input2" placeholder="请输入你需要接受的短信号码" style="width: 100%" />
            <div class="title">
              <p v-if="input2s" class="">手机格式不正确</p>
            </div>
          </div>
        </div>
        <div class="m-b-16">
          <span class="spanLeft1">* 验证码</span>
          <div class="flex f-b f-c j-c" style="width: 80%;display:inline-block">
            <Input v-model="input3" placeholder="请输入验证码" style="width: 30%" />
            <sidentify :identifyCode='identifyCode' @even="even" style="display:inline-block;position:relative;top:13px;left:16px"></sidentify>
          </div>
          <div class="title flex">
            <span class="spanLeft1"></span>
            <p v-if="input3s">验证码错误</p>
          </div>
        </div>
        <div class="m-b-16">
          <span class="spanLeft1"></span>
          <Button type="primary" @click="submit">提交修改</Button>
        </div>
      </Col>
      <Col :xs="{ span: 24}" :md="{ span: 24}" :xl="{ span: 0}">
        <div class="top m-b-16"></div>
        <div class="m-b-16">你当前可添加的邮箱条数为: 12</div>
        <div class="m-b-16">你当前可添加的短信条数为: 12</div>
        <div class="m-b-16">你当前可添加的微信关注数为: 12</div>
        <span class="spanLeft2">* 邮箱账号</span>
        <Input v-model="input1" placeholder="请输入你需要接受的邮箱账号" style="width: 100%" />
        <div class="title">
          <p v-if="input1s" class="">邮箱格式不正确</p>
        </div>
        <span class="spanLeft2">* 短信号码</span>
        <Input v-model="input2" placeholder="请输入你需要接受的短信号码" style="width: 100%" />
        <div class="title">
          <p v-if="input2s" class="">手机格式不正确</p>
        </div>
        <span class="spanLeft2">* 验证码</span>
        <Input v-model="input3" placeholder="请输入验证码" style="width: 100%" />
        <div class="title flex">
          <p v-if="input3s">验证码错误</p>
        </div>
        <sidentify2 class="m-b-16" :identifyCode='identifyCode' @even="even" style="display:inline-block;"></sidentify2>
        <div>
          <Button type="primary" @click="submit">提交修改</Button>
        </div>
      </Col>
    </Row>
  </div>
</template>

<script>
import sidentify from '@/components/sidentify'
import sidentify2 from '@/components/sidentify2'

export default {
  components: {
    sidentify,
    sidentify2
  },
  mounted() {
    this.identifyCode = ''
    this.makeCode(this.identifyCodes, 4)
  },
  computed: {
    input1s() {
      if (!this.input1.trim()) return false;
      let reg1 = /^([a-zA-Z]|[0-9])(\w|-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/;
      if (reg1.test(this.input1.trim())) {
        return false;
      } else {
        return true;
      }
    },
    input2s() {
      if (!this.input2.trim()) return false;
      let reg2 = /^1(3|4|5|6|7|8|9)\d{9}$/;
      if (reg2.test(this.input2.trim())) {
        return false;
      } else {
        return true;
      }
    },
    input3s() {
      if (!this.input3.trim()) {
        return false
      }
      return this.input3.trim() !== this.identifyCode
    }
  },
  data () {
    return {
      input1: '',
      input2: '',
      input3: '',
      identifyCode: '',
      identifyCodes: '1234567890'
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
      };
      console.log(this.identifyCode)
    },
    submit() {
      console.log(11111)
    }
  }
}
</script>

<style scoped>
.content {padding: 16px;}
.top {height: 450px;background-color: #e9e9e9;}
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
</style>
