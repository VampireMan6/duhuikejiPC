<template>
  <div class="content">
    <!-- 邮箱账号绑定 -->
    <div class="flex div-view m-b-16 j-c">
      <img class="image1" src="../../../assets/image/email-logo.png" alt="">
      <div class="right flex flex-1 m-l-16 ">
        <p style="margin-bottom: 4px">邮箱账号绑定</p>
        <div class="flex f-b">
          <p>已绑定邮箱 12***@163.com</p>
          <div class="flex j-c" @click="evenSelect(true)">
            <p class="c-409">去修改</p>
            <Icon color='#2d8cf0' size='14' type="md-arrow-dropright" />
          </div>
        </div>
      </div>
    </div>
    <!-- 手机号绑定 -->
    <div class="flex div-view m-b-16 j-c">
      <img class="image2" src="../../../assets/image/phone-logo.png" alt="">
      <div class="right flex flex-1 m-l-16 ">
        <p style="margin-bottom: 4px">手机号绑定</p>
        <div class="flex f-b">
          <p>已绑定手机号 13574747874</p>
          <div class="flex j-c" @click="evenSelect(false)">
            <p class="c-409">去修改</p>
            <Icon color='#2d8cf0' size='14' type="md-arrow-dropright" />
          </div>
        </div>
      </div>
    </div>
    <Modal
      v-model="modal1"
      :title="text1"
      @on-ok="ok"
      @on-cancel="cancel">
      <div class="flex f-b">
        <Input v-model="code" :placeholder="placeholder" style="marginRight: 20px;" class="flex-1"/>
        <Button class="m-l-16" type="primary" :disabled='statusCode' @click="getCode">{{text}}</Button>
      </div>
    </Modal>
  </div>
</template>

<script>
export default {
  data () {
    return {
      text1: '',
      placeholder: '',
      modal1: false,
      code: '',
      text: '获取验证码',
      statusCode: false,
      time: 60,
      status: true,
      timer: null
    };
  },
  methods: {
    evenSelect(value) {
      this.modal1 = true;
      if (value) { // 邮箱
        this.text1 = '已绑定邮箱: 1243****@qq.com';
        this.placeholder = '请输入邮箱验证码';
        this.status = true;
      } else { // 手机号
        this.text1 = '已绑定手机号: 13847478747';
        this.placeholder = '请输入手机号验证码';
        this.status = false;
      };
    },
    ok () {
      if (this.status) {
        console.log(1111)
      } else { // 手机号
        console.log(2222)
      }
    },
    cancel () {
      this.code = '';
      if (this.timer !== null) {
        clearInterval(this.timer);
        this.statusCode = false;
        this.text = '获取验证码';
        this.time = 60;
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
}
</script>

<style scoped>
.content {padding: 16px;}
.image1 {width: 48px;height: 32px;}
.image2 {width: 48px;height: 48px;}
.right {display: inline-block;}
.div-view {border-bottom: 1px solid #e6e6e6;padding: 32px;width: 100%;}
</style>
