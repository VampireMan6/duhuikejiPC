<template>
  <div class="content">
    <Row>
          <Col :xs="{ span: 0}" :md="{ span: 0}" :xl="{ span: 24}">
            <div class="m-b-16">
              <!-- 账户名 -->
              <span class="spanLeft1">账户名</span>
              <Input v-model="input1" placeholder="请输入账户名" style="width: 80%" />
            </div>
            <!-- 头像 -->
            <div class="m-b-16 flex">
              <span class="spanLeft1">头像 </span>
              <div class="relative flex-1">
                <div class="flex w-100">
                  <img class="imageHead m-b-16" src="../../../assets/image/baseData1.jpg" alt="">
                  <div class="flex f-b coloum" style="padding: 26px 0 28px 16px">
                    <div class="m-b-16">
                      <span>登录账号 :</span>
                      <span class="m-l-10">13587474847</span>
                    </div>
                    <div>
                      <span>注册时间 :</span>
                      <span class="m-l-10"> 2020.10.10</span>
                    </div>
                  </div>
                </div>
                <Upload action="//jsonplaceholder.typicode.com/posts/" :show-upload-list='false'>
                  <Button type="primary" icon="ios-cloud-upload-outline">上传图片</Button>
                </Upload>
                <p class="absolute" style="top: 121px;left: 124px;font-size: 13px">仅支持JPG、PNG图片文件，且文件大小小于2M</p>
              </div>
            </div>
            <!-- 性别 -->
            <div class="m-b-16">
              <!-- 性别 -->
              <span class="spanLeft1">性别</span>
              <label for="male">男</label>
              <input type="radio" v-model="sex" value="male" id='male'/>
              <label for="female" class="m-l-16">女</label>
              <input type="radio" v-model="sex" value="female" id='female'/>
            </div>
            <!-- 生日 -->
            <div class="m-b-16">
              <span class="spanLeft1">生日</span>
              <span>1999.10.10</span>
            </div>
            <!-- 所属团队 -->
            <div class="m-b-16">
              <span class="spanLeft1">所属团队</span>
              <span>无</span>
            </div>
            <!-- 所属地 -->
            <div class="m-b-16">
              <span class="spanLeft1">所属地</span>
              <span>中国</span>
            </div>
            <!-- 个性签名 -->
            <div class="m-b-16">
              <span class="spanLeft1">个性签名</span>
              <Input v-model="input1" placeholder="请输入个性签名" style="width: 80%" />
            </div>
          </Col>
          <Col :xs="{ span: 24}" :md="{ span: 24}" :xl="{ span: 0}">
            <div class="flex coloum">
              <span class="spanLeft2">账户名</span>
              <Input class="m-b-16" v-model="input1" placeholder="请输入账户名" style="width: 100%" />
              <span class="spanLeft2">头像 </span>
              <div class="relative flex-1 m-b-16">
                <div class="flex w-100">
                  <img class="imageHead m-b-16" src="../../../assets/image/baseData1.jpg" alt="">
                  <div class="flex f-b coloum" style="padding: 26px 0 28px 16px">
                    <div class="m-b-16">
                      <span>登录账号 :</span>
                      <span class="m-l-10">13587474847</span>
                    </div>
                    <div>
                      <span>注册时间 :</span>
                      <span class="m-l-10"> 2020.10.10</span>
                    </div>
                  </div>
                </div>
                <Upload action="//jsonplaceholder.typicode.com/posts/" :show-upload-list='false'>
                  <Button type="primary" icon="ios-cloud-upload-outline">上传图片</Button>
                </Upload>
                <p class="absolute" style="top: 121px;left: 124px;font-size: 13px">仅支持JPG、PNG图片文件，且文件大小小于2M</p>
              </div>
              <span class="spanLeft2">性别</span>
              <div class="m-b-16">
                <label for="male">男</label>
                <input type="radio" v-model="sex" value="male" id='male' />
                <label for="female" class="m-l-16">女</label>
                <input type="radio" v-model="sex" value="female" id='female' />
              </div>
              <div class="m-b-16">
                <span>生日</span>
                 <span class="m-l-16">1999.10.10</span>
              </div>
              <div class="m-b-16">
                <span>所属团队</span>
                <span class="m-l-16">无</span>
              </div>
              <!-- 所属地 -->
              <div class="m-b-16">
                <span>所属地</span>
                <span class="m-l-16">中国</span>
              </div>
            </div>
          </Col>
        </Row>
  </div>
</template>

<script>
export default {
  data () {
    return {
      sex: 'female',
      input1: ''
    };
  },
  methods: {}
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
.imageHead {width: 100px;height: 100px;}
</style>
