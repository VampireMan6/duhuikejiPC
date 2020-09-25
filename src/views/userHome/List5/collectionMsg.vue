<template>
  <div class="content">
    <!-- 银行卡 -->
    <div class="bankMsg">
      <span class="p-x-16">银行卡信息</span>
    </div>
    <!-- 温馨提示 -->
    <div>
      <Row>
        <Col :xs="{ span: 0}" :md="{ span: 0}" :xl="{ span: 24}">
          <div class="m-b-16">
            <span class="spanLeft1"></span>
            <div class="top">
              <div class="top-text1 m-b-16">温馨提示：仅限绑定本人银行卡，开户姓名与真实姓名保持一致</div>
              <div class="c-F56" v-if="disabled">
                <router-link :to="{name:'certification'}">请先完成实名认证</router-link>
              </div>
            </div>
          </div>
          <div class="m-b-16">
            <span class="spanLeft1">* 银行卡号</span>
            <Input :disabled='disabled' type="number" v-model="input1" placeholder="请输入银行卡号" style="width: 80%" />
          </div>
          <div class="m-b-16">
            <span class="spanLeft1">* 银行名称</span>
            <Input :disabled='disabled' v-model="input2" placeholder="请输入银行名称" style="width: 80%" />
          </div>
          <div class="m-b-16">
            <span class="spanLeft1">* 开户省市</span>
            <div style="width: 80%;display: inline-block" >
              <Cascader :disabled='disabled' :data="dataAddress" v-model="input3" change-on-select placeholder='请选择开户省市'></Cascader>
            </div>
          </div>
          <div class="m-b-16">
            <span class="spanLeft1">* 开户支行</span>
            <Input :disabled='disabled' v-model="input4" placeholder="请输入开户支行" style="width: 80%" />
          </div>
          <div class="m-b-16">
            <span class="spanLeft1"></span>
            <Button :disabled='disabled' type="primary" @click="submit1">提交</Button>
          </div>
        </Col>
        <Col :xs="{ span: 24}" :md="{ span: 24}" :xl="{ span: 0}">
          <div class="flex coloum m-b-16">
            <div class="top-text1 m-b-16">温馨提示：仅限绑定本人银行卡，开户姓名与真实姓名保持一致</div>
            <div class="c-F56" v-if="disabled">
              <router-link :to="{name:'certification'}">请先完成实名认证</router-link>
            </div>
          </div>
          <span class="spanLeft2 m-b-16">* 银行卡号</span>
          <Input :disabled='disabled' class="m-b-16" v-model="input1" placeholder="请输入银行卡号" style="width: 100%" />
          <span class="spanLeft2 m-b-16">* 银行名称</span>
          <Input :disabled='disabled' class="m-b-16" v-model="input2" placeholder="请输入银行名称" style="width: 100%" />
          <span class="spanLeft2">* 开户省市</span>
          <div class="m-b-16" style="width: 100%;display: inline-block" >
            <Cascader :disabled='disabled' :data="dataAddress" v-model="input3" change-on-select placeholder='请选择开户省市'></Cascader>
          </div>
          <span class="spanLeft2 m-b-16">* 开户支行</span>
          <Input class="m-b-16" :disabled='disabled' v-model="input4" placeholder="请输入开户支行" style="width: 100%" />
          <div>
            <Button :disabled='disabled' type="primary" @click="submit1">提交</Button>
          </div>
        </Col>
      </Row>
    </div>
    <!-- 支付宝 -->
    <div class="bankMsg" style="margin-top: 32px">
      <span class="p-x-16">支付宝信息</span>
    </div>
    <!-- 温馨提示 -->
    <div class="m-b-16">
      <Row>
        <Col :xs="{ span: 0}" :md="{ span: 0}" :xl="{ span: 24}">
          <div class="m-b-16">
            <span class="spanLeft1"></span>
            <div class="top">
              <div class="top-text1 m-b-16">温馨提示：仅限绑定本人支付宝账号，账号信息与真实姓名保持一致</div>
              <div class="c-F56" v-if="disabled">
                <router-link :to="{name:'certification'}">请先完成实名认证</router-link>
              </div>
            </div>
          </div>
          <div class="m-b-16">
            <span class="spanLeft1">* 支付宝账号</span>
            <Input :disabled='disabled' v-model="input5" placeholder="请输入支付宝账号" style="width: 80%" />
          </div>
          <div class="m-b-16">
            <span class="spanLeft1">* 姓名</span>
            <Input :disabled='disabled' v-model="input6" placeholder="仅限绑定本人支付宝，姓名需与真实姓名一致" style="width: 80%" />
          </div>
          <div class="m-b-16">
            <span class="spanLeft1"></span>
            <Button :disabled='disabled' type="primary" @click="submit2">提交</Button>
          </div>
        </Col>
        <Col :xs="{ span: 24}" :md="{ span: 24}" :xl="{ span: 0}">
          <div class="flex coloum m-b-16">
            <div class="top-text1 m-b-16">温馨提示：仅限绑定本人支付宝账号，账号信息与真实姓名保持一致</div>
            <div class="c-F56" v-if="disabled">
              <router-link :to="{name:'certification'}">请先完成实名认证</router-link>
            </div>
          </div>
          <span class="spanLeft2 m-b-16">* 支付宝账号</span>
          <Input :disabled='disabled' class="m-b-16" v-model="input5" placeholder="请输入支付宝账号" style="width: 100%" />
          <span class="spanLeft2 m-b-16">* 姓名</span>
          <Input :disabled='disabled' class="m-b-16" v-model="input6" placeholder="仅限绑定本人支付宝，姓名需与真实姓名一致" style="width: 100%" />
          <div>
            <Button :disabled='disabled' type="primary" @click="submit2">提交</Button>
          </div>
        </Col>
      </Row>
    </div>
  </div>
</template>

<script>
import dataAddress from '../../../assets/js/provinces.js'

export default {
  data () {
    return {
      input1: '',
      input2: '',
      input3: [],
      input4: '',
      input5: '',
      input6: '',
      dataAddress,
      disabled: true
    };
  },
  methods: {
    submit1() { // 银行卡
      if (!this.input1.trim()) {
        this.$Message.error('银行卡号不能为空');
        return false
      };
      if (!this.input2.trim()) {
        this.$Message.error('银行名称不能为空');
        return false
      };
      if (this.input3.length === 0) {
        this.$Message.error('开户省市不能为空');
        return false
      };
      if (!this.input4.trim()) {
        this.$Message.error('银行开户支行不能为空');
        return false
      };
    },
    submit2() { // 支付宝
      if (!this.input5.trim()) {
        this.$Message.error('支付宝账号不能为空');
        return false
      };
      if (!this.input6.trim()) {
        this.$Message.error('支付宝账号姓名不能为空');
        return false
      };
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
.top {
  display: inline-block;
  width: 80%;
}
.top-text1 {
  width: 100%;
  border: 1px solid #f1d59f;
  color: #ee8c00;
  background-color: #fff7eb;
  height: 30px;
  line-height: 30px;
  padding-left: 16px;
  font-size: 12px;
}
a {
  color: #F56C6C !important;
}

.bankMsg span {
  display: inline-block;
  height: 16px;
  line-height: 15px;
  font-size: 16px;
  border-left: 3px solid #2d8cf0;
  padding-left: 8px;
  margin-bottom: 16px;
}
</style>
