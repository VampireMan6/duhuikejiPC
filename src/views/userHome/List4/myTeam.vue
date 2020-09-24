<template>
  <div class="content">
    <div class="m-b-16 flex f-b">
      <Input class="search" size='small' v-model="searchText" search placeholder="请输入团队名称" @on-search='searchValue'/>
      <Button type="primary" size='small' @click="createTeam">创建团队</Button>
    </div>
    <!-- 列表 -->
    <div class="table w-100 relative" :style="{height: tableHeight + 'px'}">
      <table class="w-100" border="0" cellspacing="0" cellpadding="0" style="position: absolute;width:100%;z-index: 2;">
        <thead>
          <tr class="b-f8f">
            <th>团队名称</th>
            <th>团队排名</th>
            <th>团队网址</th>
            <th>队长</th>
            <th>总积分</th>
            <th>当前人数</th>
            <th>团队性质</th>
            <th>申请</th>
          </tr>
        </thead>
        <tbody>
          <tr :class="i%2 ==1?'b-f8f':''" v-for="(item,i) in fliterDataList" :key='i'>
            <th>{{item.name}}</th>
            <th>{{item.ranking}}</th>
            <th>{{item.website}}</th>
            <th>{{item.captain}}</th>
            <th>{{item.totalPoints}}</th>
            <th>{{item.number}}</th>
            <th>{{item.nature}}</th>
            <th><Button type="primary" size='small'>申请加入</Button></th>
          </tr>
        </tbody>
      </table>
      <div v-if="dataTotal === 0" class="t-c" style="margin-top: 70px;">
        <p>暂无数据</p>
      </div>
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
      if (this.fliterDataList.length === 0) {
        return 116
      } else {
        return 58 * (this.fliterDataList.length + 1)
      }
    },
    dataTotal() {
      return this.fliterDataList.length
    },
    fliterDataList() {
      let arr = [];
      arr = this.dataList.filter(item => item.name.indexOf(this.searchText.trim()) >= 0);
      return arr
    }
  },
  data () {
    return {
      searchText: '',
      dataList: [
        {
          name: '昵称1',
          ranking: 1,
          website: 'http://www.baidu.com',
          captain: '阿萨德发撒所多付多所发所多多多多撒付所',
          totalPoints: 160,
          number: 10,
          nature: '性质'
        },
        {
          name: '昵称2',
          ranking: 5,
          website: 'http://www.baidu.com',
          captain: '阿萨德发撒所多付多所发所多多多多撒付所',
          totalPoints: 160,
          number: 10,
          nature: '性质'
        },
        {
          name: '2名字',
          ranking: 5,
          website: 'http://www.baidu.com',
          captain: '阿萨德发撒所多付多所发所多多多多撒付所',
          totalPoints: 160,
          number: 10,
          nature: '性质'
        }
      ]
    };
  },
  methods: {
    changePage(e) { // 分页选择
      console.log(e)
    },
    searchValue(value) { // 点击搜索或按下回车键时触发
      this.searchText = value;
    },
    createTeam() {
      this.$router.push({name:'createTeam'})
    }
  }
}
</script>

<style scoped>
.content {padding: 16px;}
.search {max-width: 180px;}
.table{ overflow-x: auto;}
.th1 {min-width: 80px;text-align: center;}
.th2 {min-width: 160px;text-align: center;}
tr {height: 47px;line-height: 47px;}
tr:hover {background-color: rgba(235, 247, 255);}
tbody tr th {font-weight: 400;border-bottom: 1px solid #e6e6e6;text-align: center;min-width: 120px;max-width: 150px;white-space: nowrap;text-overflow: ellipsis;overflow: hidden;}
.b-f8f {background-color: #f8f8f9;}
.margin-y-16 { margin: 20px 0 16px;}
/* tbody tr th {font-weight: 400;} */
</style>
