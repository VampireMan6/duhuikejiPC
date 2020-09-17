<template>
  <div class="content">
    <Row>
      <Col :xs="{ span: 0}" :md="{ span: 0}" :xl="{ span: 24}">
        <div class="top m-b-16 flex flex-wrap">
          <div class="item1" :class="tabClick == i?'b-409 c-w':''" v-for="(item,i) in projectType" :key="i" @click="selectType(i)">
            {{item}}
          </div>
          <div class="search flex">
            <Input size='small' search placeholder="请输入搜索项目名称" @on-search='searchValue'/>
          </div>
        </div>
      </Col>
      <Col :xs="{ span: 24}" :md="{ span: 24}" :xl="{ span: 0}">
        <div class="top m-b-16 flex flex-wrap">
          <div class="item1" :class="tabClick == i?'b-409 c-w':''" v-for="(item,i) in projectType" :key="i" @click="selectType(i)">
            {{item}}
          </div>
        </div>
        <div class="search2">
          <Input size='small' search placeholder="请输入搜索项目名称" @on-search='searchValue'/>
        </div>
      </Col>
    </Row>
    <div class="table w-100 relative" :style="{height: tableHeight + 'px'}">
      <table class="w-100" border="0" cellspacing="0" cellpadding="0" style="position: absolute;width:100%;z-index: 2;">
        <thead>
          <tr class="b-f8f" style="border-bottom: 1px solid #e6e6e6">
            <th class="th1">漏洞级别</th>
            <th class="th2">漏洞标题</th>
            <th class="th2">所属厂商</th>
            <th class="th1">漏洞类型</th>
            <th class="th2">提交时间</th>
            <th class="th1">审核状态</th>
            <th class="th1">积分</th>
            <th class="th1">虚拟币</th>
            <th class="th2">操作</th>
          </tr>
        </thead>
        <tbody>
          <tr :class="i%2 ==1?'b-f8f':''" v-for="(item,i) in dataList" :key='i'>
            <th class="th1">{{item.level}}</th>
            <th class="th2">{{item.title}}</th>
            <th class="th2">{{item.mill}}</th>
            <th class="th1">{{item.status}}</th>
            <th class="th2">{{item.time}}</th>
            <th class="th1">{{item.status2}}</th>
            <th class="th1">{{item.integral}}</th>
            <th class="th1">{{item.coin}}</th>
            <th class="th2">{{item.operation}}</th>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="t-c margin-y-16">
      <Page :total="dataTotal" :page-size="10" @on-change='changePage'/>
    </div>
  </div>
</template>

<script>

export default {
  computed: {
    tableHeight() {
      if (this.dataList.length === 0) {
        return 100
      } else {
        return 40 * (this.dataList.length + 1)
      }
    },
    dataTotal() {
      return this.dataList.length
    }
  },
  data () {
    return {
      projectType: ['全部', '等待审核', '等待确认', '等待修改', '已确认', '已完结'],
      tabClick: 0,
      dataList: [
        {
          level: 1,
          title: '标题',
          mill: '厂家',
          tyle: '类型',
          status: 'true',
          time: '2020.12.12',
          status2: 'false',
          integral: 200,
          coin: 300,
          operation: 1
        },
        {
          level: 2,
          title: '标题',
          mill: '厂家',
          tyle: '类型',
          status: 'true',
          time: '2020.12.12',
          status2: 'false',
          integral: 200,
          coin: 300,
          operation: 1
        },
        {
          level: 3,
          title: '标题',
          mill: '厂家',
          tyle: '类型',
          status: 'true',
          time: '2020.12.12',
          status2: 'false',
          integral: 200,
          coin: 300,
          operation: 1
        }
      ]
    }
  },
  methods: {
    selectType(i) {
      this.tabClick = i
    },
    searchValue(value) { // 搜索
      console.log(value)
    },
    changePage(e) { // 分页选择
      console.log(e)
    }
  }
}
</script>

<style scoped>
.content {padding: 16px;}
.item1 {
  height: 22px;
  line-height: 22px;
  text-align: center;
  padding: 2px 8px;
  border-radius: 4px;
  margin: 0 16px 16px 0;
}
.item1:hover { background-color: #409EFF;
  color: #fff;
}
.search {max-width: 260px;margin-left: 16px;}
.search2 {max-width: 260px;margin-bottom: 16px;}
.table{
  /* border: 1px solid #e6e6e6; */
  overflow-x: auto;
}
.th1 {min-width: 80px;text-align: center;}
.th2 {min-width: 160px;text-align: center;}
tr {height: 39px;line-height: 39px;}
tr:hover {background-color: rgba(235, 247, 255);}
th {border-bottom: 1px solid #e6e6e6}
.b-f8f {background-color: #f8f8f9;}
.margin-y-16 { margin: 20px 0 16px;}
</style>
