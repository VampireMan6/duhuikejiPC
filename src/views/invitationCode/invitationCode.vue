<template>
  <div class="invitationCode">
    <div class="content">
      <!-- 顶部内容 -->
      <div class="m-b-16">
        <Row>
        <Col :xs="{ span: 24 }" :md="{ span: 12}" :xl="{ span: 6}">
          <img class="w-100" src="../../assets/image/logo2.png" alt="">
        </Col>
        <Col :xs="{ span: 0}" :md="{ span: 12}" :xl="{ span: 18}">
          <div class="p-l-16 flex coloum">
            <h3 class="m-b-16">邀请码申请规则：都会漏洞响应平台（版权所有）</h3>
            <ul>
              <li class="c-04B m-b-8">1 :目前漏洞/文章审核周期为三天，节假日除外，请耐心等待并关注邮箱（尤其是垃圾箱），若未收到邀请码，请联系 cqdhxk@cqdhxk.com</li>
              <li class="m-b-8">2 :接受内容有技术性与丰富的原创文章，用户一稿一洞多投，平台将不接受</li>
              <li class="m-b-8">3 :提交漏洞请输入漏洞标题，漏洞地址，漏洞详情里面一定要加验证的图片</li>
            </ul>
          </div>
        </Col>
      </Row>
      <Row>
        <Col :xs="{ span: 24}" :md="{ span: 0}" :xl="{ span: 0}">
          <div class="p-l-16 flex coloum">
            <h3 class="m-b-16">邀请码申请规则：都会漏洞响应平台（版权所有）</h3>
            <ul>
              <li class="c-04B m-b-8">1 :目前漏洞/文章审核周期为三天，节假日除外，请耐心等待并关注邮箱（尤其是垃圾箱），若未收到邀请码，请联系 cqdhxk@cqdhxk.com</li>
              <li class="m-b-8">2 :接受内容有技术性与丰富的原创文章，用户一稿一洞多投，平台将不接受</li>
              <li class="m-b-8">3 :提交漏洞请输入漏洞标题，漏洞地址，漏洞详情里面一定要加验证的图片</li>
            </ul>
          </div>
        </Col>
      </Row>
      </div>
      <!-- 信息提交 -->
      <div class="m-b-16">
        <h3 class="f-20 text">信息提交</h3>
      </div>
      <!-- 所属单位 -->
      <div class="m-b-16">
        <Row>
          <Col :xs="{ span: 0}" :md="{ span: 0}" :xl="{ span: 24}">
            <span class="spanLeft1">* 所属单位</span>
            <Input v-model="input1" placeholder="请输入单位/公司名称" style="width: 80%" />
          </Col>
        </Row>
        <Row>
          <Col :xs="{ span: 24}" :md="{ span: 24}" :xl="{ span: 0}">
            <div class="flex coloum">
              <span class="spanLeft2">* 所属单位</span>
              <Input v-model="input1" placeholder="请输入单位 / 公司名称" style="width: 100%" />
            </div>
          </Col>
        </Row>
      </div>
      <!-- 文章/漏洞标题 -->
      <div class="m-b-16">
        <Row>
          <Col :xs="{ span: 0}" :md="{ span: 0}" :xl="{ span: 24}">
            <span class="spanLeft1">* 文章/漏洞标题</span>
            <Input v-model="input2" placeholder="请输入单位/公司名称" style="width: 80%" />
          </Col>
        </Row>
        <Row>
          <Col :xs="{ span: 24}" :md="{ span: 24}" :xl="{ span: 0}">
            <div class="flex coloum">
              <span class="spanLeft2">* 文章/漏洞标题</span>
              <Input v-model="input2" placeholder="请输入文章 / 漏洞标题,标题字数为16位" style="width: 100%" />
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
        </Row>
        <Row>
          <Col :xs="{ span: 24}" :md="{ span: 24}" :xl="{ span: 0}">
            <div class="flex coloum">
              <span class="spanLeft2">* 域名/IP</span>
              <Input v-model="input3" placeholder="请输入文章 / 漏洞标题,标题字数为16位" style="width: 100%" />
            </div>
          </Col>
        </Row>
      </div>
      <!-- 联系方式 -->
      <div class="m-b-16">
        <Row>
          <Col :xs="{ span: 0}" :md="{ span: 0}" :xl="{ span: 24}">
            <span class="spanLeft1">* 联系方式</span>
            <div class="flex f-b f-c j-c" style="width: 80%;display:inline-block">
              <Input v-model="input4" placeholder="请输入您的邮箱" style="width: 49%" />
              <Input v-model="input5" placeholder="请输入您的电话号码" style="width: 49%;margin-left:1%" />
            </div>
          </Col>
        </Row>
        <Row>
          <Col :xs="{ span: 24}" :md="{ span: 24}" :xl="{ span: 0}">
            <div class="flex coloum">
              <span class="spanLeft2">* 联系方式</span>
              <Input class="m-b-8" v-model="input4" placeholder="请输入您的邮箱" style="width: 100%" />
              <Input v-model="input5" placeholder="请输入您的电话号码" style="width: 100%" />
            </div>
          </Col>
        </Row>
      </div>
      <!-- 内容类型 -->
      <div class="m-b-16">
        <Row>
          <Col :xs="{ span: 0}" :md="{ span: 0}" :xl="{ span: 24}">
            <span class="spanLeft1">* 内容类型</span>
            <div class="flex f-b f-c j-c" style="width: 80%;display:inline-block">
              <Select v-model="select1" style="width: 49%" >
                <Option v-for="item in selectList1" :value="item" :key="item">{{ item }}</Option>
              </Select>
              <Select v-model="select2" style="width: 49%;margin-left:1%">
                <Option v-for="item in selectList2" :value="item" :key="item">{{ item }}</Option>
              </Select>
            </div>
          </Col>
        </Row>
        <Row>
          <Col :xs="{ span: 24}" :md="{ span: 24}" :xl="{ span: 0}">
            <div class="flex coloum">
              <span class="spanLeft2">* 内容类型</span>
              <Select class="m-b-8" v-model="select1" style="width: 100%" >
                <Option v-for="item in selectList1" :value='item' :key="item">{{ item }}</Option>
              </Select>
              <Select v-model="select2" style="width: 100%">
                <Option v-for="item in selectList2" :value='item' :key="item">{{ item }}</Option>
              </Select>
            </div>
          </Col>
        </Row>
      </div>
      <!-- 文章/漏洞等级 -->
      <div class="m-b-16">
        <Row>
          <Col :xs="{ span: 0}" :md="{ span: 0}" :xl="{ span: 24}">
            <span class="spanLeft1">* 文章/漏洞等级</span>
            <Select v-model="select3" style="width: 80%" >
                <Option v-for="item in selectList3" :value='item' :key="item">{{ item }}</Option>
              </Select>
          </Col>
        </Row>
        <Row>
          <Col :xs="{ span: 24}" :md="{ span: 24}" :xl="{ span: 0}">
            <div class="flex coloum">
              <span class="spanLeft2">* 文章/漏洞等级</span>
              <Select v-model="select3" style="width: 100%" >
                <Option v-for="item in selectList3" :value='item' :key="item">{{ item }}</Option>
              </Select>
            </div>
          </Col>
        </Row>
      </div>
      <!-- 文章/漏洞描述 -->
      <div class="m-b-16">
        <Row>
          <Col :xs="{ span: 0}" :md="{ span: 0}" :xl="{ span: 24}">
            <div class="flex flex-1">
              <span class="spanLeft1">* 文章/漏洞描述</span>
              <Input v-model="input6" type="textarea" :rows="6" placeholder="请输入漏洞描述，简单的介绍这是什么漏洞,字数限制30字。" style="width: 80%" />
            </div>
          </Col>
        </Row>
        <Row>
          <Col :xs="{ span: 24}" :md="{ span: 24}" :xl="{ span: 0}">
            <div class="flex coloum">
              <span class="spanLeft2">* 文章/漏洞描述</span>
              <Input v-model="input6" type="textarea" :rows="6" placeholder="请输入漏洞描述，简单的介绍这是什么漏洞,字数限制30字。" style="width: 100%" />
            </div>
          </Col>
        </Row>
      </div>
      <!-- 漏洞详情 -->
      <div class="m-b-16">
        <Row>
          <Col :xs="{ span: 0}" :md="{ span: 0}" :xl="{ span: 24}">
            <div class="flex flex-1">
              <span class="spanLeft1">* 漏洞详情</span>
              <editor-bar style="width: 80%" v-model="input7" :isClear="isClear" @change="change"></editor-bar>
            </div>
          </Col>
        </Row>
        <Row>
          <Col :xs="{ span: 24}" :md="{ span: 24}" :xl="{ span: 0}">
            <span class="spanLeft2">* 漏洞详情</span>
            <editor-bar style="width: 100%" v-model="input7" :isClear="isClear" @change="change"></editor-bar>
          </Col>
        </Row>
      </div>
      <!-- 修复方案 -->
      <div class="m-b-16">
        <Row>
          <Col :xs="{ span: 0}" :md="{ span: 0}" :xl="{ span: 24}">
            <div class="flex flex-1">
              <span class="spanLeft1">* 修复方案</span>
              <Input v-model="input8" type="textarea" :rows="6" placeholder="请输入修复方案" style="width: 80%" />
            </div>
          </Col>
        </Row>
        <Row>
          <Col :xs="{ span: 24}" :md="{ span: 24}" :xl="{ span: 0}">
            <div class="flex coloum">
              <span class="spanLeft2">* 修复方案</span>
              <Input v-model="input8" type="textarea" :rows="6" placeholder="请输入修复方案" style="width: 100%" />
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
        </Row>
        <Row>
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
      <!-- 用户协议 -->
      <div class="m-b-16">
        <Row>
          <Col :xs="{ span: 0}" :md="{ span: 0}" :xl="{ span: 24}">
            <span class="spanLeft1">* 用户协议</span>
            <input type="checkbox" :checked='checked' @change="evenSelect">
            <router-link to="">《 同意都会信息平台用户协议 》</router-link>
          </Col>
        </Row>
        <Row>
          <Col :xs="{ span: 24}" :md="{ span: 24}" :xl="{ span: 0}">
            <div class="flex coloum j-c">
              <span class="spanLeft2">* 用户协议</span>
              <div>
                <input type="checkbox" :checked='checked' @change="evenSelect">
                <router-link to="">《 同意都会信息平台用户协议 》</router-link>
              </div>
            </div>
          </Col>
        </Row>
      </div>
      <!-- 提交漏洞 -->
      <div class="m-b-16">
        <Row>
          <Col :xs="{ span: 0}" :md="{ span: 0}" :xl="{ span: 24}">
            <span class="spanLeft1">* 提交漏洞</span>
            <Button type="primary" @click="submit">提交漏洞</Button>
          </Col>
        </Row>
        <Row>
          <Col :xs="{ span: 24}" :md="{ span: 24}" :xl="{ span: 0}">
            <div class="flex coloum j-c">
              <span class="spanLeft2">* 提交漏洞</span>
              <Button type="primary" @click="submit">提交漏洞</Button>
            </div>
          </Col>
        </Row>
      </div>
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
      if (!this.input9.trim()) {
        return false
      }
      return this.input9.trim() !== this.identifyCode
    }
  },
  data () {
    return {
      mag: '',
      value: '',
      isClear: false,
      input1: '',
      input2: '',
      input3: '',
      input4: '',
      input5: '',
      input6: '',
      input7: '<p>1：请按照规范提交漏洞</p><p>2：漏洞思路 以及截图</p><p>3：关于此编辑器以做多层防护，请勿插入& 等符号及标签</p><p>4：请删除此处开始编写漏洞详情</p>',
      input8: '',
      input9: '',
      select1: '',
      select2: '',
      select3: '',
      selectList1: ['Web漏洞', '服务器漏洞', '通用漏洞', '其它', 'app程序漏洞'],
      selectList2: ['普通反射型XSS', '远程代码执行', '远程命令执行', '抓取恶意内容', '基于DOM的XSS', '基于Flash的XSS', 'HTTP头注入', '存储型XSS', '命令注入', 'SQL注入', '上传漏洞', '信息泄露', '写类型CSRF', '读类型CSRF', '文件包含', '逻辑漏洞', '权限绕过', 'URL跳转漏洞', '文章'],
      selectList3: ['高危', '中危', '低危'],
      identifyCode: '',
      identifyCodes: '1234567890',
      checked: false
    }
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
    },
    evenSelect(e) {
      this.checked = e.target.checked;
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
.invitationCode {
  width: 100%;
  padding: 16px 0;
}
.content {
  max-width: 1200px;
  /* min-width: 900px; */
  margin: 0 auto;
  padding: 0 16px;
}
.w-100 {
  width: 100%;
}
.p-l-16 {
  padding: 16px;
}
ul li {
  list-style-type: none;
}
.text {
  padding-left: 10px;
  height: 20px;
  font-size: 20px;
  line-height: 20px;
  border-left: solid 3px #3db1fa;
  margin-top: 4px;
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
</style>
