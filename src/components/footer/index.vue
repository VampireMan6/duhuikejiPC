<template>
  <div class="footer">
    <div class="content flex">
      <dl class="dlDiv">
        <dt class="m-b-16">白帽服务</dt>
        <dd>
          <router-link to="">法律支持</router-link>
          <router-link to="">奖励方案</router-link>
          <router-link to="">授权项目</router-link>
          <router-link to="">项目大全</router-link>
          <router-link to="">技术靶场</router-link>
        </dd>
      </dl>
      <dl class="dlDiv">
        <dt class="m-b-16">厂商服务</dt>
        <dd>
          <router-link to="">厂商了解</router-link>
          <router-link to="">定制厂商</router-link>
          <router-link to="">厂商服务</router-link>
          <router-link to="">专属服务</router-link>
          <router-link to="">检测服务</router-link>
        </dd>
      </dl>
      <dl class="dlDiv">
        <dt class="m-b-16">帮助中心</dt>
        <dd>
          <router-link to="">平台性质</router-link>
          <router-link to="">平台法律</router-link>
          <router-link to="">检测服务</router-link>
          <router-link to="">平台公告</router-link>
          <router-link to="">技术支持</router-link>
        </dd>
      </dl>
      <dl class="dlDiv">
        <dt class="m-b-16">联系我们</dt>
        <dd>023-88217282</dd>
        <dd>cqdhxk@cadhxk.com</dd>
      </dl>
      <div class="flex coloum j-c f-c divImage">
        <img class="image" src="../../assets/image/weixin.jpg" alt="">
        <span class="t-c">官方微信公众号</span>
      </div>
    </div>
    <div class="flex content2">
      <span>友情链接 : </span>
      <router-link to="">都会信息科技</router-link>
      <router-link to="">都会预警平台</router-link>
      <router-link to="">都会技术支持</router-link>
      <span class="span">友情申请邮箱：tangxuan@cqdhxk.com</span>
    </div>
    <div class="content3 flex coloum">
      <div class="t-c">
        <router-link to="">平台简介</router-link>
        <span class="span2">/</span>
        <router-link to="">联系我们</router-link>
        <span class="span2">/</span>
        <router-link to="">官网论坛</router-link>
        <span class="span2">/</span>
        <router-link to="">投诉建议</router-link>
        <span class="span2">/</span>
        <router-link to="">平台地址</router-link>
      </div>
      <div class="t-c m-t-16">
        <span class="span3">重庆都会信息科技有限公司 - 漏洞响应平台 (www.cqdhxk.com) 版权所有 </span>
        <router-link to="" class="a3">渝ICP备20002475号-1</router-link>
      </div>
      <div class="t-c m-t-16">
        <span class="span3">重庆市江北区小样青年创业社区</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      
    };
  },
  methods: {}
}
</script>

<style scoped>
.footer {
  width: 100%;
  height: 415px;
  background-color: #373d41;
}
.content {
  max-width: 1200px;
  min-width: 900px;
  margin: 0 auto;
  padding: 30px 16px 20px;
  border-bottom: 1px solid #4b5054;
}
.dlDiv {
  width: 233px;
  height: 160px;
  margin: 0 40px 20px 0;
}
dt {
  font-size: 16px;
  color: #d7d8d9;
}
dd {
  border-right: 1px solid #4b5054;
  display: flex;
  flex-direction: column;
  font-size: 20px;
  color: #9b9ea0;
}
a {
  font-size: 12px;
  color: #9b9ea0;
  margin-bottom: 6px;
}
a:hover {
  color: #ff7300
}
.image {
  width: 120px;
  height: 120px;
  margin-bottom: 6px;
}
.divImage {
  width: 120px;
}
span {
  color: #666;
  font-size: 12px;
}
.content2 {
  max-width: 1140px;
  min-width: 900px;
  margin: 0 auto;
  padding: 0 16px;
  border-bottom: 1px solid #4b5054;
  height: 45px;
  line-height: 45px;
}
.content2 a {
  color: #666;
}
.content2 a:hover {
  color: #ff7300
}
.span {
  font-size: 12px;
  color: #666;
}
.span:hover {
  color: #ff7300;
}
.content2 a {
  margin: 0 10px;
}
.content2 .span {
  margin: 0 10px;
}
.content3 {
  max-width: 1200px;
  min-width: 900px;
  margin: 0 auto;
  padding: 30px 16px 5px;
}
.content3 a {
  font-size: 14px;
  color: #9b9ea0;
}
.content3 a:hover {
  color: #ff7300
}
.content3 .span2 {
  color: #9b9ea0;
  padding: 0 8px;
  font-size: 12px;
}
.content3 .span3 {
  color: #666;
  font-size: 12px;
}
.m-t-16 {
  margin-top: 16px;
}
.content3 .a3 {
  color: #0288d1;
  font-size: 12px;
  margin-left: 16px;
}
.content3 .a3:hover {
  color: #ff7300
}
</style>