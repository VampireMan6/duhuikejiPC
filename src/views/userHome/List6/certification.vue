<template>
  <div class="content">
    <div class="data">
      <!-- 实名认证 -->
      <div class="item1 flex f-b j-c">
        <div class="flex j-c">
          <img class="image1" src="../../../assets/image/certification1.png" alt="">
          <div class="text1">实名认证</div>
          <div class="c-F56">未认证</div>
        </div>
        <Button type="primary" @click="item1Status = !item1Status">填写资料</Button>
      </div>
      <div class="item2" v-show="item1Status">
        <Row>
          <Col :xs="{ span: 0}" :md="{ span: 0}" :xl="{ span: 24}">
            <div class="m-b-16">
              <span class="spanLeft1"></span>
              <span class="c-F56">温馨提示：仅限绑定本人信息。一但认证将无法修改。</span>
            </div>
            <div class="m-b-16">
              <span class="spanLeft1">* 姓名</span>
              <Input v-model="input1" placeholder="请输入身份证姓名" style="width: 80%" />
            </div>
            <div>
              <span class="spanLeft1">* 身份证号码</span>
              <Input v-model="input1" placeholder="请输入身份证号码" style="width: 80%" />
            </div>
          </Col>
          <Col :xs="{ span: 24}" :md="{ span: 24}" :xl="{ span: 0}">
            <div class="flex coloum">
              <span class="c-F56 m-b-16">温馨提示：仅限绑定本人信息。一但认证将无法修改。</span>
              <span class="spanLeft2">* 姓名</span>
              <Input class="m-b-16" v-model="input1" placeholder="请输入身份证姓名" style="width: 100%" />
              <span class="spanLeft2">* 身份证号码</span>
              <Input v-model="input1" placeholder="请输入身份证号码" style="width: 100%" />
            </div>
          </Col>
        </Row>
      </div>
      <!-- 身份证拍照认证 -->
      <div class="item1 flex f-b j-c">
        <div class="flex j-c">
          <img class="image1" src="../../../assets/image/certification1.png" alt="">
          <div class="text1">身份证拍照认证</div>
          <div class="c-F56">未认证</div>
        </div>
        <Button type="primary" @click="item2Status = !item2Status">填写资料</Button>
      </div>
      <div class="item2" v-show="item2Status">
        <Row>
          <Col :xs="{ span: 0}" :md="{ span: 0}" :xl="{ span: 24}">
            <div class="m-b-16 flex">
              <span class="spanLeft1"></span>
              <div class="c-F56 flex-1">注意：申请高级项目可不上传手持身份证，证件必须是清晰彩色原件电子版本。可以使扫描件或者数码拍摄照片。支持jpg、png等图片格式三张图片的类型必须一致，且一次上传后不可更改</div>
            </div>
            <div class="m-b-16 flex">
              <span class="spanLeft1">* 身份证正面 :</span>
              <div class="left flex-1">
                <div class="certificationDiv1">
                  <Upload type="drag" action="//jsonplaceholder.typicode.com/posts/" @on-success='onSuccess' @on-error='onError' @on-preview='onPreview'>
                    <div style="padding: 28px 0">
                      <Icon type="ios-cloud-upload" size="52" style="color: #3399ff"></Icon>
                      <p>点击上传或将文件拖拽到此处</p>
                    </div>
                </Upload>
                </div>
              </div>
              <span class="">示例 :</span>
              <div class="right flex-1">
                <div class="flex j-c f-c certificationDiv2">
                  <img class="certificationImg" src="../../../assets/image/certification3.png" alt="">
                </div>
              </div>
            </div>
            <div class="m-b-16 flex">
              <span class="spanLeft1">* 身份证反面 :</span>
              <div class="left flex-1">
                <div class="certificationDiv1">
                  <Upload type="drag" action="//jsonplaceholder.typicode.com/posts/" @on-success='onSuccess' @on-error='onError' @on-preview='onPreview'>
                    <div style="padding: 28px 0">
                      <Icon type="ios-cloud-upload" size="52" style="color: #3399ff"></Icon>
                      <p>点击上传或将文件拖拽到此处</p>
                    </div>
                </Upload>
                </div>
              </div>
              <span class="">示例 :</span>
              <div class="right flex-1">
                <div class="flex j-c f-c certificationDiv2">
                  <img class="certificationImg" src="../../../assets/image/certification4.png" alt="">
                </div>
              </div>
            </div>
            <div class="m-b-16 flex">
              <span class="spanLeft1">* 手持身份证照 :</span>
              <div class="left flex-1">
                <div class="certificationDiv1">
                  <Upload type="drag" action="//jsonplaceholder.typicode.com/posts/" @on-success='onSuccess' @on-error='onError' @on-preview='onPreview'>
                    <div style="padding: 28px 0">
                      <Icon type="ios-cloud-upload" size="52" style="color: #3399ff"></Icon>
                      <p>点击上传或将文件拖拽到此处</p>
                    </div>
                </Upload>
                </div>
              </div>
              <span class="">示例 :</span>
              <div class="right flex-1">
                <div class="flex j-c f-c certificationDiv2">
                  <img class="certificationImg" src="../../../assets/image/certification5.png" alt="">
                </div>
              </div>
            </div>
          </Col>
          <Col :xs="{ span: 24}" :md="{ span: 24}" :xl="{ span: 0}">
            <div class="flex coloum">
              <span class="c-F56 m-b-16">注意：申请高级项目可不上传手持身份证，证件必须是清晰彩色原件电子版本。可以使扫描件或者数码拍摄照片。支持jpg、png等图片格式三张图片的类型必须一致，且一次上传后不可更改</span>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      input1: '',
      item1Status: false,
      item2Status: false
    };
  },
  methods: {
    onSuccess(file) {
      console.log(file)
    },
    onError(value) {
      console.log(value)
    },
    onPreview(value) {
      console.log(value)
    }
  }
}
</script>

<style scoped>
.content {padding: 16px;}
.data {border: 1px solid #e6e6e6}
.item1 {height: 80px;background-color: #f4f4f4;padding: 18px 20px;}
.item2 {background-color: #fff;padding: 18px 20px;}
.image1 {width: 36px;height: 45px;margin-right: 30px;}
.text1 {width: 130px;font-size: 18px;margin-right: 60px;}
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
.certificationDiv1 {width: 260px;height: 178px;border-radius: 4px;}
.certificationDiv2 {width: 260px;height: 178px;border:1px solid #e6e6e6;margin-left: 16px;border-radius: 4px;}
.certificationImg {width: 220px;}
.ivu-upload-drag {border: 0px dashed #dcdee2 !important}
</style>
