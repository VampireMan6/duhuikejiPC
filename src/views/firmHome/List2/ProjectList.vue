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
        </div>
      </Col>
      <Col :xs="{ span: 24}" :md="{ span: 0}" :xl="{ span: 0}">
        <div class="top flex flex-wrap m-b-16">
          <div class="item1" :class="tabClick == i?'b-409 c-w':''" v-for="(item,i) in dataType" :key="i" @click="selectItem(i)">
            {{item}}
          </div>
        </div>
      </Col>
    </Row>
    <!-- 列表 -->
    <div class="table w-100 relative" :style="{height: tableHeight + 'px'}">
      <table class="w-100" border="0" cellspacing="0" cellpadding="0" style="position: absolute;width:100%;z-index: 2;">
        <thead>
          <tr class="b-f8f">
            <th class="th1">项目编号</th>
            <th class="th3">项目名称</th>
            <th class="th2">项目类型</th>
            <th class="th1">项目状态</th>
            <th class="th1">创建时间</th>
            <th class="th1">操作</th>
          </tr>
        </thead>
        <tbody>
          <tr :class="i%2 ==1?'b-f8f':''" v-for="(item,i) in dataList" :key='i'>
            <th class="th1">{{item.select}}</th>
            <th class="th3">{{item.title}}</th>
            <th class="th2">{{item.type}}</th>
            <th v-if="item.status == 1" class="th1">审核中</th>
            <th v-else-if="item.status == 2" class="th1">进行中</th>
            <th v-else class="th1">
              <Button type="error" size='small' @click="errorMsg(item.msg)">已驳回</Button>
            </th>
            <th class="th2">{{item.time}}</th>
            <th class="th3">
              <Button v-if="item.status !==2 " type="primary" size='small'>编辑</Button>
              <Button v-else type="primary" size='small'>查看</Button>
              <Button type="error" size='small'>删除</Button>
            </th>
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
      dataType: ['web类型', 'app类型', '工控类型', '系统类型', '中间件类型', '进行中', '审核中'],
      tabClick: 0,
      text: '',
      modal3: false,
      dataList: [
        {
          select: 1,
          title: '发卡束带结发',
          type: 'web',
          status: 3, // 1:审核中 2: 进行中 3: 已驳回
          time: '2020.10.10',
          msg: '返回驳回信息的内容'
        },
        {
          select: 2,
          title: '发卡束带结发',
          type: 'web',
          status: 2, // 1:审核中 2: 进行中 3: 已驳回
          time: '2020.10.10',
          msg: '返回驳回信息的内容'
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
    }
  }
}
</script>

<style scoped>
.content {padding: 16px;}
.item1 {padding: 4px 8px;border-radius: 4px; margin: 0 16px 16px 0}
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
