<template>
  <div class="content">
    <!-- 项目标题 -->
    <div class="m-b-16">
      <Row>
        <Col :xs="{ span: 0}" :md="{ span: 0}" :xl="{ span: 24}">
          <span class="spanLeft1">* 项目标题</span>
          <Input v-model="input1" placeholder="请输入项目标题" style="width: 80%" />
        </Col>
        <Col :xs="{ span: 24}" :md="{ span: 24}" :xl="{ span: 0}">
          <div class="flex coloum">
            <span class="spanLeft2">* 项目标题</span>
            <Input v-model="input1" placeholder="请输入项目标题" style="width: 100%" />
          </div>
        </Col>
      </Row>
    </div>
    <!-- 项目类型 -->
    <div class="m-b-16">
      <Row>
        <Col :xs="{ span: 0}" :md="{ span: 0}" :xl="{ span: 24}">
          <span class="spanLeft1">* 项目类型</span>
          <Select v-model="select1" style="width: 80%" >
              <Option v-for="item in selectList1" :value='item' :key="item">{{ item }}</Option>
            </Select>
        </Col>
        <Col :xs="{ span: 24}" :md="{ span: 24}" :xl="{ span: 0}">
          <div class="flex coloum">
            <span class="spanLeft2">* 项目类型</span>
            <Select v-model="select1" style="width: 100%" >
              <Option v-for="item in selectList1" :value='item' :key="item">{{ item }}</Option>
            </Select>
          </div>
        </Col>
      </Row>
    </div>
    <!-- 奖励奖金 -->
    <div class="m-b-16">
      <Row>
        <Col :xs="{ span: 0}" :md="{ span: 0}" :xl="{ span: 24}">
          <span class="spanLeft1">* 奖励奖金</span>
          <Input v-model="input2" placeholder="请输入奖励奖金" style="width: 80%" />
        </Col>
        <Col :xs="{ span: 24}" :md="{ span: 24}" :xl="{ span: 0}">
          <div class="flex coloum">
            <span class="spanLeft2">* 奖励奖金</span>
            <Input v-model="input2" placeholder="请输入奖励奖金" style="width: 100%" />
          </div>
        </Col>
      </Row>
    </div>
    <!-- 项目简介 -->
    <div class="m-b-16">
      <Row>
        <Col :xs="{ span: 0}" :md="{ span: 0}" :xl="{ span: 24}">
          <div class="flex flex-1">
            <span class="spanLeft1">* 项目简介</span>
            <Input v-model="input3" type="textarea" :rows="6" placeholder="请输入项目简介" style="width: 80%" />
          </div>
        </Col>
        <Col :xs="{ span: 24}" :md="{ span: 24}" :xl="{ span: 0}">
          <div class="flex coloum">
            <span class="spanLeft2">* 项目简介</span>
            <Input v-model="input3" type="textarea" :rows="6" placeholder="请输入项目简介" style="width: 100%" />
          </div>
        </Col>
      </Row>
    </div>
    <!-- 项目介绍 -->
    <div class="m-b-16">
      <Row>
        <Col :xs="{ span: 0}" :md="{ span: 0}" :xl="{ span: 24}">
          <div class="flex flex-1">
            <span class="spanLeft1">* 项目介绍</span>
            <editor-bar style="width: 80%" v-model="input4" :isClear="false" @change="change1"></editor-bar>
          </div>
        </Col>
        <Col :xs="{ span: 24}" :md="{ span: 24}" :xl="{ span: 0}">
          <span class="spanLeft2">* 项目介绍</span>
          <editor-bar style="width: 100%" v-model="input4" :isClear="false" @change="change1"></editor-bar>
        </Col>
      </Row>
    </div>
    <!-- 项目规则 -->
    <div class="m-b-16">
      <Row>
        <Col :xs="{ span: 0}" :md="{ span: 0}" :xl="{ span: 24}">
          <div class="flex flex-1">
            <span class="spanLeft1">* 项目规则</span>
            <editor-bar style="width: 80%" v-model="input5" :isClear="false" @change="change2"></editor-bar>
          </div>
        </Col>
        <Col :xs="{ span: 24}" :md="{ span: 24}" :xl="{ span: 0}">
          <span class="spanLeft2">* 项目规则</span>
          <editor-bar style="width: 100%" v-model="input5" :isClear="false" @change="change2"></editor-bar>
        </Col>
      </Row>
    </div>
    <!-- 日期选择 -->
    <div class="m-b-16">
      <Row>
        <Col :xs="{ span: 0}" :md="{ span: 0}" :xl="{ span: 24}">
          <span class="spanLeft1">* 日期选择</span>
          <DatePicker type="daterange" placeholder="日期选择" style="width: 80%" @on-change='onChangeTime'></DatePicker>
        </Col>
        <Col :xs="{ span: 24}" :md="{ span: 24}" :xl="{ span: 0}">
          <div class="flex coloum">
            <span class="spanLeft2">* 日期选择</span>
            <DatePicker type="daterange" placeholder="日期选择" style="width: 100%" @on-change='onChangeTime'></DatePicker>
          </div>
        </Col>
      </Row>
    </div>
    <!-- 测试范围 -->
    <div class="m-b-16">
      <Row>
        <Col :xs="{ span: 0}" :md="{ span: 0}" :xl="{ span: 24}">
          <span class="spanLeft1">* 测试范围</span>
          <Input v-model="input6" placeholder="请输入测试范围" style="width: 80%" />
        </Col>
        <Col :xs="{ span: 24}" :md="{ span: 24}" :xl="{ span: 0}">
          <div class="flex coloum">
            <span class="spanLeft2">* 测试范围</span>
            <Input v-model="input6" placeholder="请输入测试范围" style="width: 100%" />
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
            <Input v-model="input7" placeholder="请输入验证码" style="width: 30%" />
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
            <Input v-model="input7" placeholder="请输入验证码" style="width: 100%" />
            <div class="title flex">
              <p v-if="input3s">验证码错误</p>
            </div>
            <sidentify2 :identifyCode='identifyCode' @even="even" style="display:inline-block;position:relative;top:13px;"></sidentify2>
          </div>
        </Col>
      </Row>
    </div>
    <!-- 提交申请 -->
    <div class="m-b-16">
      <Row>
        <Col :xs="{ span: 0}" :md="{ span: 0}" :xl="{ span: 24}">
          <span class="spanLeft1"></span>
          <Button type="primary" @click="submit">提交申请</Button>
        </Col>
        <Col :xs="{ span: 24}" :md="{ span: 24}" :xl="{ span: 0}">
          <Button type="primary" @click="submit">提交申请</Button>
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
      if (!this.input7.trim()) {
        return false
      }
      return this.input7.trim() !== this.identifyCode
    }
  },
  data () {
    return {
      input1: '',
      selectList1: ['专属项目', '公益项目'],
      select1: '',
      input2: '',
      input3: '',
      input4: '项目简介',
      input5: '项目规则',
      input6: '',
      input7: '',
      identifyCode: '',
      identifyCodes: '1234567890'
    };
  },
  methods: {
    change1(val) {
      console.log(val)
    },
    change2(val) {
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
      }
    },
    submit() {
      if (!this.input1) {
        this.$Message.error('项目标题不能为空');
        return false
      }
    },
    onChangeTime(e) {
      console.log(e)
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
</style>
