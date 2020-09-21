<template>
  <div class="content">
    <div class="m-b-16">
      <Row>
        <Col :xs="{ span: 0}" :md="{ span: 0}" :xl="{ span: 24}">
          <div class="m-b-16">
            <span class="spanLeft1">* 当前密码</span>
            <Input v-model="input1" placeholder="请输入当前密码" style="width: 80%" />
          </div>
          <div class="m-b-16">
            <span class="spanLeft1">* 新密码</span>
            <Input v-model="input2" placeholder="请输入新密码" style="width: 80%" />
          </div>
          <div class="m-b-16">
            <span class="spanLeft1">* 确认密码</span>
            <Input v-model="input3" placeholder="请再次输入新密码" style="width: 80%" />
          </div>
          <div class="m-b-16">
            <span class="spanLeft1"></span>
            <Button type="primary" @click='submit'>提交</Button>
          </div>
        </Col>
        <Col :xs="{ span: 24}" :md="{ span: 24}" :xl="{ span: 0}">
          <div class="flex coloum">
            <span class="spanLeft2">* 当前密码</span>
            <Input class="m-b-16" v-model="input1" placeholder="请输入当前密码" style="width: 100%" />
            <span class="spanLeft2">* 新密码</span>
            <Input class="m-b-16" v-model="input2" placeholder="请输入新密码" style="width: 100%" />
            <span class="spanLeft2">* 确认密码</span>
            <Input class="m-b-16" v-model="input3" placeholder="请再次输入新密码" style="width: 100%" />
            <div>
              <Button type="primary" @click='submit'>提交</Button>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      input1: '',
      input2: '',
      input3: ''
    };
  },
  methods: {
    submit() {
      console.log(1111)
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
