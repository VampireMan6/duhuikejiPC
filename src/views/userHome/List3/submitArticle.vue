<template>
  <div class="content">
    <div class="m-b-16">
      <p>这里是预留的位置</p>
    </div>
    <!-- 文章标题 -->
    <div class="m-b-16">
      <Row>
        <Col :xs="{ span: 0}" :md="{ span: 0}" :xl="{ span: 24}">
          <span class="spanLeft1">* 文章标题</span>
          <Input v-model="input1" placeholder="请输入文章标题" style="width: 80%" />
        </Col>
        <Col :xs="{ span: 24}" :md="{ span: 24}" :xl="{ span: 0}">
          <div class="flex coloum">
            <span class="spanLeft2">* 文章标题</span>
            <Input v-model="input1" placeholder="请输入文章标题" style="width: 100%" />
          </div>
        </Col>
      </Row>
    </div>
    <!-- 联系方式 -->
    <div class="m-b-16">
      <Row>
        <Col :xs="{ span: 0}" :md="{ span: 0}" :xl="{ span: 24}">
          <span class="spanLeft1">* 联系方式</span>
          <div class="flex f-b" style="width: 80%;display:inline-block">
            <Input v-model="input2" placeholder="请输入您的邮箱" style="width: 49%" />
            <Input v-model="input3" placeholder="请输入您的电话号码" style="width: 49%;margin-left:1%" />
          </div>
        </Col>
        <Col :xs="{ span: 24}" :md="{ span: 24}" :xl="{ span: 0}">
          <div class="flex coloum">
            <span class="spanLeft2">* 联系方式</span>
            <Input class="m-b-8" v-model="input2" placeholder="请输入您的邮箱" style="width: 100%" />
            <Input v-model="input3" placeholder="请输入您的电话号码" style="width: 100%" />
          </div>
        </Col>
      </Row>
    </div>
    <!-- 文章描述 -->
      <div class="m-b-16">
        <Row>
          <Col :xs="{ span: 0}" :md="{ span: 0}" :xl="{ span: 24}">
            <div class="flex flex-1">
              <span class="spanLeft1">* 文章描述</span>
              <Input v-model="input4" type="textarea" :rows="6" placeholder="请输入文章描述，简单的介绍这是什么漏洞,字数限制30字。" style="width: 80%" />
            </div>
          </Col>
          <Col :xs="{ span: 24}" :md="{ span: 24}" :xl="{ span: 0}">
            <div class="flex coloum">
              <span class="spanLeft2">* 文章描述</span>
              <Input v-model="input4" type="textarea" :rows="6" placeholder="请输入文章描述，简单的介绍这是什么漏洞,字数限制30字。" style="width: 100%" />
            </div>
          </Col>
        </Row>
      </div>
    <!-- 文章内容 -->
      <div class="m-b-16">
        <Row>
          <Col :xs="{ span: 0}" :md="{ span: 0}" :xl="{ span: 24}">
            <div class="flex flex-1">
              <span class="spanLeft1">* 文章内容</span>
              <editor-bar style="width: 80%" v-model="input5" :isClear="false" @change="change"></editor-bar>
            </div>
          </Col>
          <Col :xs="{ span: 24}" :md="{ span: 24}" :xl="{ span: 0}">
            <span class="spanLeft2">* 文章内容</span>
            <editor-bar style="width: 100%" v-model="input5" :isClear="false" @change="change"></editor-bar>
          </Col>
        </Row>
      </div>
    <!-- 验证码 -->
      <div class="m-b-16">
        <Row>
          <Col :xs="{ span: 0}" :md="{ span: 0}" :xl="{ span: 24}">
            <span class="spanLeft1">* 验证码</span>
            <div class="flex f-b f-c j-c" style="width: 80%;display:inline-block">
              <Input v-model="input6" placeholder="请输入验证码" style="width: 30%" />
              <sidentify :identifyCode='identifyCode' @even="even" style="display:inline-block;position:relative;top:13px;left:16px"></sidentify>
            </div>
            <div class="title flex">
              <span class="spanLeft1"></span>
              <p v-if="input3s">验证码错误</p>
            </div>
          </Col>
          <Col :xs="{ span: 24}" :md="{ span: 24}" :xl="{ span: 0}">
            <div class="flex coloum">
              <span class="spanLeft2">* 验证码</span>
              <Input v-model="input6" placeholder="请输入验证码" style="width: 100%" />
              <div class="title flex">
                <p v-if="input3s">验证码错误</p>
              </div>
              <sidentify2 class="m-b-16" :identifyCode='identifyCode' @even="even" style="display:inline-block;position:relative;top:13px;"></sidentify2>
            </div>
          </Col>
        </Row>
      </div>
    <!-- 提交文章 -->
      <div class="m-b-16">
        <Row>
          <Col :xs="{ span: 0}" :md="{ span: 0}" :xl="{ span: 24}">
            <span class="spanLeft1"></span>
            <Button type="primary" @click="submit">提交文章</Button>
          </Col>
          <Col :xs="{ span: 24}" :md="{ span: 24}" :xl="{ span: 0}">
            <Button type="primary" @click="submit">提交文章</Button>
          </Col>
        </Row>
      </div>
  </div>
</template>

<script>
import EditorBar from '@/components/wangEnduit'
import sidentify from '@/components/sidentify'
import sidentify2 from '@/components/sidentify2'

export default {
  components: {
    EditorBar,
    sidentify,
    sidentify2
  },
  mounted() {
    this.identifyCode = ''
    this.makeCode(this.identifyCodes, 4)
  },
  computed: {
    input3s() {
      if (!this.input6.trim()) {
        return false
      }
      return this.input6.trim() !== this.identifyCode
    }
  },
  data () {
    return {
      input1: '',
      input2: '',
      input3: '',
      input4: '',
      input5: '<p>请输入文章内容</p>',
      input6: '',
      identifyCode: '',
      identifyCodes: '1234567890'
    };
  },
  methods: {
    change(val) {
      console.log(val)
    },
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
      if (!this.input1) {
        this.$Message.error('所属单位不能为空');
        return false
      }
    }
  }
}
</script>

<style scoped>
.content {padding: 16px;}
.spanLeft1{
  width: 120px;
  display:inline-block;
  text-align: right;
  margin-right: 16px;
  margin-bottom: 8px;
}
.spanLeft2 {
  width: 120px;
  display:inline-block;
  text-align: left;
  margin-right: 16px;
  margin-bottom: 8px;
}
</style>
