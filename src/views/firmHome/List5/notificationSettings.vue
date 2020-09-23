<template>
  <div class="content">
    <Row>
      <Col :xs="{ span: 0}" :md="{ span: 0}" :xl="{ span: 24}">
        <div class="top m-b-16">

        </div>
        <div class="flex">
          <span>你当前可添加的邮箱条数为: 12</span>
          <span class="m-l-16">你当前可添加的短信条数为: 12</span>
          <span class="m-l-16">你当前可添加的微信关注数为: 12</span>
        </div>
      </Col>
      <Col :xs="{ span: 24}" :md="{ span: 24}" :xl="{ span: 0}">
        <div class="top m-b-16">
          
        </div>
        <div class="m-b-16">你当前可添加的邮箱条数为: 12</div>
        <div class="m-b-16">你当前可添加的短信条数为: 12</div>
        <div class="m-b-16">你当前可添加的微信关注数为: 12</div>
      </Col>
    </Row>
  </div>
</template>

<script>
export default {
  data () {
    return {};
  },
  methods: {}
}
</script>

<style scoped>
.content {padding: 16px;}
.top {height: 450px;background-color: #e9e9e9;}
</style>
