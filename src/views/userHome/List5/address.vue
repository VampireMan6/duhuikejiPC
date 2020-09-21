<template>
  <div class="content">
    <!-- 地址列表 -->
    <div class="" v-if="addRessStatus">
      <div class="table w-100 relative" :style="{height: tableHeight + 'px'}">
        <table class="w-100" border="0" cellspacing="0" cellpadding="0" style="position: absolute;width:100%;z-index: 2;">
          <thead>
            <tr class="b-f8f">
              <th>收货人姓名</th>
              <th>收货人手机号</th>
              <th>所在地区</th>
              <th>操作</th>
            </tr>
          </thead>
          <tbody>
            <tr :class="i%2 ==1?'b-f8f':''" v-for="(item,i) in dataList" :key='i'>
              <th>{{item.name}}</th>
              <th>{{item.phoneNumber}}</th>
              <th>{{item.address}}</th>
              <th>
                <Button size='small' type="primary">编辑</Button>
                <Button size='small' type="error">删除</Button>
                <Button size='small' type="primary">设为默认</Button>
              </th>
            </tr>
          </tbody>
        </table>
      </div>
      <div v-if="dataList.length === 0" class="t-c">
        <p>暂无数据</p>
      </div>
      <div class="t-c margin-y-16">
        <Page :total="dataTotal" :page-size="10" @on-change='changePage'/>
      </div>
      <Button type="primary" @click="addRessStatus = !addRessStatus">添加地址</Button>
    </div>
    <!-- 添加列表 -->
    <div v-else>
      <div class="flex f-e m-b-16">
        <Icon type="md-close" size='22' @click='addRessStatus = !addRessStatus'/>
      </div>
      <div class="m-b-16">
        <Row>
          <Col :xs="{ span: 0}" :md="{ span: 0}" :xl="{ span: 24}">
            <div class="m-b-16">
              <span class="spanLeft1">* 收货人姓名</span>
              <Input v-model="input1" placeholder="请输入收货人姓名" style="width: 80%" />
            </div>
            <div class="m-b-16">
              <span class="spanLeft1">* 收货人手机号</span>
              <Input v-model="input2" placeholder="请输入收货人手机号" style="width: 80%" />
            </div>
            <div class="m-b-16">
              <span class="spanLeft1">* 收货地址</span>
              <div style="width: 80%;display: inline-block" >
                <Cascader :data="dataAddress" v-model="input3" change-on-select placeholder='请选择收货地址'></Cascader>
              </div>
            </div>
            <div class="flex flex-1 m-b-16">
              <span class="spanLeft1">* 详细地址</span>
              <Input v-model="input4" type="textarea" :rows="6" placeholder="请输入详细地址" style="width: 80%" />
            </div>
            <div class="m-b-16">
              <span class="spanLeft1"></span>
              <input type="checkbox" v-model="input5" id="isTrue" class="relative defaultAddress" style="top: 2px">
              <label for="isTrue" class="defaultAddress">是否添加为默认地址</label>
            </div>
            <div class="m-b-16">
              <span class="spanLeft1"></span>
              <Button type="primary">保存</Button>
            </div>
          </Col>
          <Col :xs="{ span: 24}" :md="{ span: 24}" :xl="{ span: 0}">
            <div class="flex coloum">
              <span class="spanLeft2">* 收货人姓名</span>
              <Input class="m-b-16" v-model="input1" placeholder="请输入收货人姓名" style="width: 100%" />
              <span class="spanLeft2">* 收货人手机号</span>
              <Input class="m-b-16" v-model="input2" placeholder="请输入收货人手机号" style="width: 100%" />
              <span class="spanLeft2">* 收货地址</span>
              <div class="m-b-16" style="width: 100%;display: inline-block" >
                <Cascader :data="dataAddress" v-model="input3" change-on-select placeholder='请选择收货地址'></Cascader>
              </div>
              <span class="spanLeft2">* 详细地址</span>
              <Input class="m-b-16" v-model="input4" type="textarea" :rows="6" placeholder="请输入详细地址" style="width: 100%" />
              <div>
                <Button type="primary" @click='preserve'>保存</Button>
              </div>
              <span class="spanLeft1"></span>
              <div>
                <input type="checkbox" v-model="input5" id="isTrue" class="relative defaultAddress" style="top: 2px">
                <label for="isTrue" class="defaultAddress">是否添加为默认地址</label>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  </div>
</template>

<script>
import dataAddress from '../../../assets/js/provinces.js'

export default {
  computed: {
    tableHeight() {
      if (this.dataList.length === 0) {
        return 66
      } else {
        return 48 * (this.dataList.length + 1)
      }
    },
    dataTotal() {
      return this.dataList.length
    }
  },
  data () {
    return {
      addRessStatus: true,
      dataList: [],
      dataAddress,
      input1: '',
      input2: '',
      input3: ['北京', '北京市'],
      input4: '',
      input5: false
    };
  },
  methods: {
    changePage(e) { // 分页选择
      console.log(e)
    },
    preserve() {
      console.log(11111)
    }
  }
}
</script>

<style scoped>
.content {padding: 16px;}
tr {height: 47px;line-height: 47px;}
tr:hover {background-color: rgba(235, 247, 255);}
th {border-bottom: 1px solid #e6e6e6;min-width: 250px;text-align: center;}
.b-f8f {background-color: #f8f8f9;}
.margin-y-16 { margin: 20px 0 16px;}
tbody tr th {font-weight: 400;}
.ivu-input-small{border-radius: 12px !important;}
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
.defaultAddress {
  cursor: pointer;
}
</style>
