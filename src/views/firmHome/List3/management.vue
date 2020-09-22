<template>
  <div class="content">
    <Row>
      <Col :xs="{ span: 0}" :md="{ span: 24}" :xl="{ span: 24}">
        <div class="flex f-b">
          <div class="top flex flex-wrap m-b-16">
            <div class="item1" :class="tabClick == i?'b-409 c-w':''" v-for="(item,i) in dataType" :key="i" @click="selectItem(i)">
              {{item}}
            </div>
          </div>
          <div>
            <Select v-model="model1" style="width:160px" placeholder='漏洞等级选择'>
              <Option v-for="item in loopholeList" :value="item" :key="item" >{{ item }}</Option>
            </Select>
            <Select class="m-l-16" v-model="model1" style="width:160px" placeholder='漏洞类型选择'>
              <Option v-for="item in loopholeList" :value="item" :key="item">{{ item }}</Option>
            </Select>
          </div>
        </div>
        <!-- 批量删除 批量确认 -->
        <div class="m-b-16">
          <Button type="primary" size='small'>批量删除</Button>
          <Button type="primary" size='small' class="m-l-16">批量确认</Button>
        </div>
      </Col>
      <Col :xs="{ span: 24}" :md="{ span: 0}" :xl="{ span: 0}">
        <div class="top flex flex-wrap m-b-16">
          <div class="item1" :class="tabClick == i?'b-409 c-w':''" v-for="(item,i) in dataType" :key="i" @click="selectItem(i)">
            {{item}}
          </div>
        </div>
        <!-- 批量删除 批量确认 -->
        <div class="m-b-16">
          <Button type="primary" size='small'>批量删除</Button>
          <Button type="primary" size='small' class="m-l-16">批量确认</Button>
        </div>
        <div class="m-b-16">
          <Select v-model="model1" style="width:160px" placeholder='漏洞等级选择'>
            <Option v-for="item in loopholeList" :value="item" :key="item" >{{ item }}</Option>
          </Select>
          <Select class="m-l-16" v-model="model1" style="width:160px" placeholder='漏洞类型选择'>
            <Option v-for="item in loopholeList" :value="item" :key="item">{{ item }}</Option>
          </Select>
        </div>
        <!-- 列表 -->
      </Col>
    </Row>
    <!-- 列表 -->
    <div class="table w-100 relative" :style="{height: tableHeight + 'px'}">
      <table class="w-100" border="0" cellspacing="0" cellpadding="0" style="position: absolute;width:100%;z-index: 2;">
        <thead>
          <tr class="b-f8f">
            <th class="th1">选择框</th>
            <th class="th3">漏洞标题</th>
            <th class="th2">类型</th>
            <th class="th1">等级</th>
            <th class="th1">用户积分</th>
            <th class="th1">状态</th>
            <th class="th1">审核状态</th>
            <th class="th1">一级审核</th>
            <th class="th1">二级审核</th>
            <th class="th2">提交用户</th>
            <th class="th2">创建时间</th>
            <th class="th3">操作</th>
          </tr>
        </thead>
        <tbody>
          <tr :class="i%2 ==1?'b-f8f':''" v-for="(item,i) in dataList" :key='i'>
            <th class="th1">{{item.select}}</th>
            <th class="th3">{{item.title}}</th>
            <th class="th2">{{item.type}}</th>
            <th class="th1">{{item.level}}</th>
            <th class="th1">{{item.integral}}</th>
            <th v-if="item.status == 1" class="th1">正常</th>
            <th v-else class="th1">
              <Button type="error" size='small' @click="errorMsg(item.msg)">异常</Button>
            </th>
            <th v-if="item.status2 == 1" class="th1">通过</th>
            <th v-else class="th1">
              <Button type="error" size='small' @click="handleRender">未通过</Button>
            </th>
            <th class="th1">{{item.examine1}}</th>
            <th class="th1">{{item.examine2}}</th>
            <th class="th2">{{item.userName}}</th>
            <th class="th2">{{item.time}}</th>
            <th class="th3">{{item.operation}}</th>
          </tr>
        </tbody>
      </table>
      <div v-if="dataList.length === 0" class="t-c" style="margin-top: 70px;">
        <p>暂无数据</p>
      </div>
    </div>
    <div class="t-c margin-y-16">
      <Page :total="dataTotal" :page-size="10" @on-change='changePage'/>
    </div>
    <!-- 异常显示的提示框 -->
    <Modal v-model="modal3">
      <p>{{text}}</p>
    </Modal>
  </div>
</template>

<script>
export default {
  computed: {
    tableHeight() {
      if (this.dataList.length === 0) {
        return 100
      } else {
        return 56 * (this.dataList.length + 1)
      }
    },
    dataTotal() {
      return this.dataList.length
    }
  },
  data () {
    return {
      dataType: ['通用漏洞', '事件漏洞'],
      tabClick: 0,
      loopholeList: ['严重', '高危', '中危', '低危'],
      text: '',
      modal3: false,
      dataList: [
        {
          select: 1,
          title: '发卡束带结发',
          type: 'web',
          level: '高危',
          integral: 120,
          status: 2, // 1:正常 2: 异常
          status2: 2, // 1:通过 2: 未通过
          examine1: 1, // 1:通过 2: 未通过
          examine2: 1, // 1:通过 2: 未通过
          examine: 1, // 1:通过 2: 未通过
          userName: 'user',
          time: '2020.10.10',
          operation: 1, // 1: 查看  2: 确认漏洞 3: 驳回漏洞
          msg: '返回错误信息的内容'
        }
      ]
    };
  },
  methods: {
    selectItem(i) {
      this.tabClick = i;
    },
    errorMsg(value) {
      this.modal3 = true;
      this.text = value;
    },
    handleRender () {
      this.$Modal.confirm({
        render: (h) => {
          return h('Input', {
            props: {
              value: this.value,
              autofocus: true,
              placeholder: '请输入文字'
            },
            on: {
              input: (val) => {
                this.value = val;
              }
            }
          })
        }
      })
    }
  }
}
</script>

<style scoped>
.content {padding: 16px;}
.item1 {padding: 4px 8px;border-radius: 4px; margin-right: 16px}
.item2 {padding: 4px 8px;border-radius: 4px; margin-right: 16px;display: inline-block;}
.item1:hover { background-color: #2d8cf0;color: #fff;}
.th1 {min-width: 100px;text-align: center;}
.th2 {min-width: 100px;text-align: center;}
.th3 {min-width: 150px;text-align: center;}
tr {height: 47px;line-height: 47px;}
tr:hover {background-color: rgba(235, 247, 255);}
th {border-bottom: 1px solid #e6e6e6}
.b-f8f {background-color: #f8f8f9;}
.margin-y-16 { margin: 20px 0 16px;}
tbody tr th {font-weight: 400;}
.ivu-input-small{border-radius: 12px !important;}
.table{ overflow-x: auto;z-index: 100;}
</style>
