<template>
  <div class="content">
    <div>
      <p>预留地方</p>
    </div>
    <div class="table w-100 relative" :style="{height: tableHeight + 'px'}">
      <table class="w-100" border="0" cellspacing="0" cellpadding="0" style="position: absolute;width:100%;z-index: 2;">
        <thead>
          <tr class="b-f8f">
            <th>文章标题</th>
            <th>文章简介</th>
            <th>创建时间</th>
            <th>奖励</th>
          </tr>
        </thead>
        <tbody>
          <tr :class="i%2 ==1?'b-f8f':''" v-for="(item,i) in dataList" :key='i'>
            <th>{{item.title}}</th>
            <th>{{item.introduction}}</th>
            <th>{{item.time}}</th>
            <th>{{item.reward}}</th>
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
  </div>
</template>

<script>

export default {
  computed: {
    tableHeight() {
      if (this.dataList.length === 0) {
        return 66
      } else {
        return 50 * (this.dataList.length + 1)
      }
    },
    dataTotal() {
      return this.dataList.length
    }
  },
  data () {
    return {
      dataList: [
        {
          title: 1,
          introduction: '标题1',
          time: '2020.12.12',
          reward: 100
        },
        {
          title: 2,
          introduction: '标题1',
          time: '2020.12.12',
          reward: 100
        },
        {
          title: 3,
          introduction: '标题1',
          time: '2020.12.12',
          reward: 100
        },
        {
          title: 4,
          introduction: '标题1',
          time: '2020.12.12',
          reward: 100
        },
        {
          title: 5,
          introduction: '标题1',
          time: '2020.12.12',
          reward: 100
        },
        {
          title: 6,
          introduction: '标题1',
          time: '2020.12.12',
          reward: 100
        },
        {
          title: 7,
          introduction: '标题1',
          time: '2020.12.12',
          reward: 100
        }
      ]
    }
  },
  methods: {
    changePage(e) { // 分页选择
      console.log(e)
    }
  }
}
</script>

<style scoped>
.content {padding: 16px;}
.table{ overflow-x: auto;}
tr {height: 47px;line-height: 47px;}
tr:hover {background-color: rgba(235, 247, 255);}
th {border-bottom: 1px solid #e6e6e6;min-width: 250px;text-align: center;}
.b-f8f {background-color: #f8f8f9;}
.margin-y-16 { margin: 20px 0 16px;}
tbody tr th {font-weight: 400;}
.ivu-input-small{border-radius: 12px !important;}
</style>
