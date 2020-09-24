<template>
  <div class="content">
    <div v-if="isCreatedTeam">
      <!-- 团队名称 -->
      <div class="m-b-16">
        <Row>
          <Col :xs="{ span: 0}" :md="{ span: 0}" :xl="{ span: 24}">
            <span class="spanLeft1">* 团队名称</span>
            <Input v-model="input1" placeholder="请输入团队名称" style="width: 80%" />
          </Col>
          <Col :xs="{ span: 24}" :md="{ span: 24}" :xl="{ span: 0}">
            <div class="flex coloum">
              <span class="spanLeft2">* 团队名称</span>
              <Input v-model="input1" placeholder="请输入团队名称" style="width: 100%" />
            </div>
          </Col>
        </Row>
      </div>
      <!-- 团队图标 -->
      <div class="m-b-16">
        <Row>
          <Col :xs="{ span: 0}" :md="{ span: 0}" :xl="{ span: 24}">
            <div class="flex">
              <span class="spanLeft1">* 团队图标</span>
              <div style="width: 80%;display:inline-block">
                <div class="m-b-16">
                  <img class="wh-80" :src="imageSelect" alt="">
                </div>
                <div class="w-100 flex flex-wrap">
                  <div class="wh-40" v-for="(item,i) in dataList" :key='i' @click="selectItem(i)">
                    <img class="w-100 h-100 img" :src="item.image" alt="">
                  </div>
                </div>
              </div>
            </div>
          </Col>
          <Col :xs="{ span: 24}" :md="{ span: 24}" :xl="{ span: 0}">
            <div class="flex coloum">
              <span class="spanLeft2">* 团队图标</span>
              <div class="m-b-16">
                  <img class="wh-80" :src="imageSelect" alt="">
                </div>
                <div class="w-100 flex flex-wrap">
                  <div class="wh-40" v-for="(item,i) in dataList" :key='i' @click="selectItem(i)">
                    <img class="w-100 h-100 img" :src="item.image" alt="">
                  </div>
                </div>
            </div>
          </Col>
        </Row>
      </div>
      <!-- 团队网址 -->
      <div class="m-b-16">
        <Row>
          <Col :xs="{ span: 0}" :md="{ span: 0}" :xl="{ span: 24}">
            <span class="spanLeft1">* 团队网址</span>
            <Input v-model="input2" placeholder="请输入团队网址" style="width: 80%" />
          </Col>
          <Col :xs="{ span: 24}" :md="{ span: 24}" :xl="{ span: 0}">
            <div class="flex coloum">
              <span class="spanLeft2">* 团队网址</span>
              <Input v-model="input2" placeholder="请输入团队网址" style="width: 100%" />
            </div>
          </Col>
        </Row>
      </div>
      <!-- 团队介绍 -->
      <div class="m-b-16">
        <Row>
          <Col :xs="{ span: 0}" :md="{ span: 0}" :xl="{ span: 24}">
            <div class="flex flex-1">
              <span class="spanLeft1">* 团队介绍</span>
              <Input v-model="input3" type="textarea" :rows="6" placeholder="请输入团队介绍" style="width: 80%" />
            </div>
          </Col>
          <Col :xs="{ span: 24}" :md="{ span: 24}" :xl="{ span: 0}">
            <div class="flex coloum">
              <span class="spanLeft2">* 团队介绍</span>
              <Input v-model="input3" type="textarea" :rows="6" placeholder="请输入团队介绍" style="width: 100%" />
            </div>
          </Col>
        </Row>
      </div>
      <!-- 验证码 -->
      <div class="m-b-16">
        <Row>
          <Col :xs="{ span: 0}" :md="{ span: 0}" :xl="{ span: 24}">
            <span class="spanLeft1">* 验证码</span>
            <div class="flex f-b f-c j-c" style="width: 80%;display:inline-block">
              <Input v-model="input4" placeholder="请输入验证码" style="width: 30%" />
              <sidentify :identifyCode='identifyCode' @even="even" style="display:inline-block;position:relative;top:13px;left:16px"></sidentify>
            </div>
            <div class="title flex">
              <span class="spanLeft1"></span>
              <p v-if="input4s">验证码错误</p>
            </div>
          </Col>
          <Col :xs="{ span: 24}" :md="{ span: 24}" :xl="{ span: 0}">
            <div class="flex coloum">
              <span class="spanLeft2">* 验证码</span>
              <Input v-model="input4" placeholder="请输入验证码" style="width: 100%" />
              <div class="title flex">
                <p v-if="input3s">验证码错误</p>
              </div>
              <sidentify2 :identifyCode='identifyCode' @even="even" style="display:inline-block;position:relative;top:13px;"></sidentify2>
            </div>
          </Col>
        </Row>
      </div>
      <!-- 创建团队 -->
      <div class="m-b-16">
        <Row>
          <Col :xs="{ span: 0}" :md="{ span: 0}" :xl="{ span: 24}">
            <span class="spanLeft1"></span>
            <Button type="primary" @click="submit">创建团队</Button>
          </Col>
          <Col :xs="{ span: 24}" :md="{ span: 24}" :xl="{ span: 0}">
            <Button type="primary" @click="submit">创建团队</Button>
          </Col>
        </Row>
      </div>
    </div>
    <div v-else>
      正在申请中，请耐心等待
    </div>
  </div>
</template>

<script>
import sidentify from '@/components/sidentify'
import sidentify2 from '@/components/sidentify2'
import imageList from '@/assets/js/imageList.js'

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
    input4s() {
      if (!this.input4.trim()) return false;
      return this.input4.trim() !== this.identifyCode;
    },
    imageSelect() {
      return this.dataList[this.tabClick].image;
    }
  },
  data () {
    return {
      dataList: imageList,
      input1: '',
      input2: '',
      input3: '',
      input4: '',
      identifyCode: '',
      identifyCodes: '1234567890',
      tabClick: 0,
      isCreatedTeam: true
    };
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
    selectItem(i) {
      this.tabClick = i;
    },
    submit() {
      if (!this.input1.trim()) {
        this.$Message.error('团队名称不能为空');
        return
      };
      if (!this.input2.trim()) {
        this.$Message.error('团队网址不能为空');
        return
      };
      if (!this.input3.trim()) {
        this.$Message.error('团队介绍不能为空');
        return
      };
      if (!this.input4.trim()) {
        this.$Message.error('验证码不能为空');
        return
      };
      if (this.input4s) {
        this.$Message.error('验证码错误');
        return
      };
      this.$Message.success('申请中');
      this.isCreatedTeam = false;
    }
  }
}
</script>

<style scoped>
.content {padding: 16px;}
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
.wh-80 {width: 80px;height: 80px;border-radius: 6px;}
.wh-40 {width: 40px;height: 40px;margin: 0 16px 16px 0;}
.img {border-radius: 4px;}
.img:hover {
  cursor: pointer;
  width: 44px;
  height: 44px;
}
</style>
