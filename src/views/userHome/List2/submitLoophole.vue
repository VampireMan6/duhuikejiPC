<template>
  <div class="content">
    <!-- 所属单位 -->
      <div class="m-b-16">
        <Row>
          <Col :xs="{ span: 0}" :md="{ span: 0}" :xl="{ span: 24}">
            <span class="spanLeft1">* 所属单位</span>
            <Input v-model="input1" placeholder="请输入单位/公司名称" style="width: 80%" />
          </Col>
          <Col :xs="{ span: 24}" :md="{ span: 24}" :xl="{ span: 0}">
            <div class="flex coloum">
              <span class="spanLeft2">* 所属单位</span>
              <Input v-model="input1" placeholder="请输入单位/公司名称" style="width: 100%" />
            </div>
          </Col>
        </Row>
      </div>
    <!-- 漏洞标题 -->
      <div class="m-b-16">
        <Row>
          <Col :xs="{ span: 0}" :md="{ span: 0}" :xl="{ span: 24}">
            <span class="spanLeft1">* 漏洞标题</span>
            <Input v-model="input2" placeholder="请输入漏洞标题" style="width: 80%" />
          </Col>
          <Col :xs="{ span: 24}" :md="{ span: 24}" :xl="{ span: 0}">
            <div class="flex coloum">
              <span class="spanLeft2">* 漏洞标题</span>
              <Input v-model="input2" placeholder="请输入漏洞标题" style="width: 100%" />
            </div>
          </Col>
        </Row>
      </div>
    <!-- 域名/IP -->
      <div class="m-b-16">
        <Row>
          <Col :xs="{ span: 0}" :md="{ span: 0}" :xl="{ span: 24}">
            <span class="spanLeft1">* 域名/IP</span>
            <Input v-model="input3" placeholder="请输入域名或者IP" style="width: 80%" />
          </Col>
          <Col :xs="{ span: 24}" :md="{ span: 24}" :xl="{ span: 0}">
            <div class="flex coloum">
              <span class="spanLeft2">* 域名/IP</span>
              <Input v-model="input3" placeholder="请输入域名或者IP" style="width: 100%" />
            </div>
          </Col>
        </Row>
      </div>
    <!-- 漏洞url -->
      <div class="m-b-16">
        <Row>
          <Col :xs="{ span: 0}" :md="{ span: 0}" :xl="{ span: 24}">
            <span class="spanLeft1">* 漏洞url</span>
            <Input v-model="input4" placeholder="请输入漏洞url" style="width: 80%" />
          </Col>
          <Col :xs="{ span: 24}" :md="{ span: 24}" :xl="{ span: 0}">
            <div class="flex coloum">
              <span class="spanLeft2">* 漏洞url</span>
              <Input v-model="input4" placeholder="请输入漏洞url" style="width: 100%" />
            </div>
          </Col>
        </Row>
      </div>
    <!-- 漏洞类型 -->
      <div class="m-b-16">
        <Row>
          <Col :xs="{ span: 0}" :md="{ span: 0}" :xl="{ span: 24}">
            <span class="spanLeft1">* 漏洞类型</span>
            <Select v-model="select1" style="width: 80%" >
                <Option v-for="item in selectList1" :value='item' :key="item">{{ item }}</Option>
              </Select>
          </Col>
          <Col :xs="{ span: 24}" :md="{ span: 24}" :xl="{ span: 0}">
            <div class="flex coloum">
              <span class="spanLeft2">* 漏洞类型</span>
              <Select v-model="select1" style="width: 100%" >
                <Option v-for="item in selectList1" :value='item' :key="item">{{ item }}</Option>
              </Select>
            </div>
          </Col>
        </Row>
      </div>
    <!-- 漏洞级别 -->
      <div class="m-b-16">
        <Row>
          <Col :xs="{ span: 0}" :md="{ span: 0}" :xl="{ span: 24}">
            <span class="spanLeft1">* 漏洞级别</span>
            <Select v-model="select2" style="width: 80%" >
                <Option v-for="item in selectList1" :value='item' :key="item">{{ item }}</Option>
              </Select>
          </Col>
          <Col :xs="{ span: 24}" :md="{ span: 24}" :xl="{ span: 0}">
            <div class="flex coloum">
              <span class="spanLeft2">* 漏洞级别</span>
              <Select v-model="select2" style="width: 100%" >
                <Option v-for="item in selectList1" :value='item' :key="item">{{ item }}</Option>
              </Select>
            </div>
          </Col>
        </Row>
      </div>
    <!-- 漏洞描述 -->
      <div class="m-b-16">
        <Row>
          <Col :xs="{ span: 0}" :md="{ span: 0}" :xl="{ span: 24}">
            <div class="flex flex-1">
              <span class="spanLeft1">* 漏洞描述</span>
              <Input v-model="input5" type="textarea" :rows="6" placeholder="请输入漏洞描述，简单的介绍这是什么漏洞,字数限制30字。" style="width: 80%" />
            </div>
          </Col>
          <Col :xs="{ span: 24}" :md="{ span: 24}" :xl="{ span: 0}">
            <div class="flex coloum">
              <span class="spanLeft2">* 漏洞描述</span>
              <Input v-model="input5" type="textarea" :rows="6" placeholder="请输入漏洞描述，简单的介绍这是什么漏洞,字数限制30字。" style="width: 100%" />
            </div>
          </Col>
        </Row>
      </div>
    <!-- 复现过程 -->
      <div class="m-b-16">
        <Row>
          <Col :xs="{ span: 0}" :md="{ span: 0}" :xl="{ span: 24}">
            <div class="flex flex-1">
              <span class="spanLeft1">* 复现过程</span>
              <editor-bar style="width: 80%" v-model="input6" :isClear="false" @change="change"></editor-bar>
            </div>
          </Col>
          <Col :xs="{ span: 24}" :md="{ span: 24}" :xl="{ span: 0}">
            <span class="spanLeft2">* 复现过程</span>
            <editor-bar style="width: 100%" v-model="input6" :isClear="false" @change="change"></editor-bar>
          </Col>
        </Row>
      </div>
    <!-- 修复方案 -->
      <div class="m-b-16">
        <Row>
          <Col :xs="{ span: 0}" :md="{ span: 0}" :xl="{ span: 24}">
            <div class="flex flex-1">
              <span class="spanLeft1">* 修复方案</span>
              <Input v-model="input7" type="textarea" :rows="6" placeholder="请输入修复方案" style="width: 80%" />
            </div>
          </Col>
          <Col :xs="{ span: 24}" :md="{ span: 24}" :xl="{ span: 0}">
            <div class="flex coloum">
              <span class="spanLeft2">* 修复方案</span>
              <Input v-model="input7" type="textarea" :rows="6" placeholder="请输入修复方案" style="width: 100%" />
            </div>
          </Col>
        </Row>
      </div>
    <!-- 附件上传 -->
      <div class="m-b-16">
        <Row>
          <Col :xs="{ span: 0}" :md="{ span: 0}" :xl="{ span: 24}">
             <div class="flex flex-1">
              <span class="spanLeft1">* 附件上传</span>
              <Upload action="//jsonplaceholder.typicode.com/posts/"  :max-size='maxSize' @on-error='onError' @on-success='successUpload'>
                <Button icon="ios-cloud-upload-outline">附件上传</Button>
              </Upload>
            </div>
          </Col>
        </Row>
        <Row>
          <Col :xs="{ span: 24}" :md="{ span: 24}" :xl="{ span: 0}">
            <div class="flex coloum">
              <span class="spanLeft2">* 附件上传</span>
            </div>
            <Upload action="//jsonplaceholder.typicode.com/posts/">
              <Button icon="ios-cloud-upload-outline">附件上传</Button>
            </Upload>
          </Col>
        </Row>
      </div>
    <!-- 所属行业 -->
      <div class="m-b-16">
        <Row>
          <Col :xs="{ span: 0}" :md="{ span: 0}" :xl="{ span: 24}">
            <span class="spanLeft1">* 所属行业</span>
            <Select v-model="select3" style="width: 80%" >
                <Option v-for="item in selectList1" :value='item' :key="item">{{ item }}</Option>
              </Select>
          </Col>
          <Col :xs="{ span: 24}" :md="{ span: 24}" :xl="{ span: 0}">
            <div class="flex coloum">
              <span class="spanLeft2">* 所属行业</span>
              <Select v-model="select3" style="width: 100%" >
                <Option v-for="item in selectList1" :value='item' :key="item">{{ item }}</Option>
              </Select>
            </div>
          </Col>
        </Row>
      </div>
    <!-- 联系方式 -->
      <div class="m-b-16">
        <Row>
          <Col :xs="{ span: 0}" :md="{ span: 0}" :xl="{ span: 24}">
            <span class="spanLeft1">* 联系方式</span>
            <Input v-model="input8" placeholder="请输入联系方式" style="width: 80%" />
          </Col>
          <Col :xs="{ span: 24}" :md="{ span: 24}" :xl="{ span: 0}">
            <div class="flex coloum">
              <span class="spanLeft2">* 联系方式</span>
              <Input v-model="input8" placeholder="请输入联系方式" style="width: 100%" />
            </div>
          </Col>
        </Row>
      </div>
    <!-- 是否匿名 -->
      <div class="m-b-16">
        <Row>
          <Col :xs="{ span: 0}" :md="{ span: 0}" :xl="{ span: 24}">
            <span class="spanLeft1">* 是否匿名</span>
            <Switchs v-model='input11'>
              <span slot="open" vlaue=true>是</span>
              <span slot="close" vlaue=false>否</span>
            </Switchs>
          </Col>
          <Col :xs="{ span: 24}" :md="{ span: 24}" :xl="{ span: 0}">
            <div class="flex coloum">
              <span class="spanLeft2">* 提交方式</span>
              <!-- <Input v-model="input2" placeholder="请输入提交方式" style="width: 100%" /> -->
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
              <Input v-model="input9" placeholder="请输入验证码" style="width: 30%" />
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
              <Input v-model="input9" placeholder="请输入验证码" style="width: 100%" />
              <div class="title flex">
                <p v-if="input3s">验证码错误</p>
              </div>
              <sidentify2 :identifyCode='identifyCode' @even="even" style="display:inline-block;position:relative;top:13px;"></sidentify2>
            </div>
          </Col>
        </Row>
      </div>
    <!-- 提交协议 -->
      <div class="m-b-16">
        <Row>
          <Col :xs="{ span: 0}" :md="{ span: 0}" :xl="{ span: 24}">
            <span class="spanLeft1">* 提交协议</span>
            <input type="checkbox" v-model="input10" :value="true" class="relative" style="top: 2px">
            <router-link to="">《 同意都会信息平台提交协议 》</router-link>
          </Col>
          <Col :xs="{ span: 24}" :md="{ span: 24}" :xl="{ span: 0}">
            <div class="flex coloum j-c">
              <span class="spanLeft2">* 提交协议</span>
              <div>
                <input type="checkbox" v-model="input10" :value="true" class="relative" style="top: 2px">
                <router-link to="">《 同意都会信息平台提交协议 》</router-link>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    <!-- 提交漏洞 -->
      <div class="m-b-16">
        <Row>
          <Col :xs="{ span: 0}" :md="{ span: 0}" :xl="{ span: 24}">
            <span class="spanLeft1"></span>
            <Button type="primary" @click="submit">提交漏洞</Button>
          </Col>
        </Row>
        <Row>
          <Col :xs="{ span: 24}" :md="{ span: 24}" :xl="{ span: 0}">
            <Button type="primary" @click="submit">提交漏洞</Button>
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
    this.$nextTick(function () {
      this.identifyCode = '';
      this.makeCode(this.identifyCodes, 4)
    })
  },
  computed: {
    input3s() {
      if (!this.input9.trim()) {
        return false
      }
      return this.input9.trim() !== this.identifyCode
    }
  },
  data () {
    return {
      input1: '', // 所属单位
      input2: '', // 漏洞标题
      input3: '', // 域名/IP
      input4: '', // 漏洞url
      select1: '', // 漏洞类型
      select2: '', // 漏洞级别
      input5: '', // 漏洞描述
      input6: '111111', // 复现过程
      input7: '', // 修复方案
      select3: '', // 所属行业
      input8: '', // 联系方式
      input9: '', // 验证码
      input10: false, // 用户协议
      input11: false, // 是否匿名
      selectList1: ['事件漏洞', '通用漏洞'], // 漏洞类型
      identifyCode: '',
      identifyCodes: '1234567890',
      formatList: ['zip', 'rar'], // 文件上传类型
      maxSize: 30720 // 文件上传最大值
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
    change(val) {
      console.log(val)
    },
    submit() {
      if (!this.input1) {
        this.$Message.error('所属单位不能为空');
        return false
      }
    },
    successUpload(value) {
      console.log(value)
    },
    onError(value) {
      console.log(value)
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
