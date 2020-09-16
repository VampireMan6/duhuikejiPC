<template>
  <div class="content">
    <!-- 项目列表 -->
    <Row>
      <Col :xs="{ span: 0}" :md="{ span: 0}" :xl="{ span: 24}">
        <div class="m-b-16">
          <div class="w-100 flex">
          <div class="selectTitle">项目类型</div>
          <div class="flex flex-1">
            <div class="m-l-16" v-for="(item,i) in projectType" :key="i">
              {{item}}
            </div>
          </div>
        </div>
        </div>
        <div class="flex flex-wrap f-b">
          <div v-for="(item,i) in dataList" :key="i" class="item m-b-16 w-30">
            {{item}}
          </div>
          <div class="w-30"></div>
        </div>
      </Col>
      <Col :xs="{ span: 0}" :md="{ span: 24}" :xl="{ span: 0}">
        <div class="flex flex-wrap f-b">
          <div v-for="(item,i) in dataList" :key="i" class="item m-b-16 w-45">
            {{item}}
          </div>
          <div class="w-45"></div>
        </div>
      </Col>
      <Col :xs="{ span: 24}" :md="{ span: 0}" :xl="{ span: 0}">
        <div class="flex flex-wrap f-b">
          <div v-for="(item,i) in dataList" :key="i" class="item m-b-16 w-100">
            {{item}}
          </div>
          <div class="w-100"></div>
        </div>
      </Col>
    </Row>
    <div class="t-c margin-y-16">
      <Page :total="50" :page-size="9" @on-change='changePage'/>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      dataList: [1, 2, 3, 4, 5],
      projectType: ['全部', '专属测试项目', '公益测试项目'],
      tabClick1: 0,
      projectTime: ['长期项目', '短期项目']
    };
  },
  methods: {
    changePage(e) { // 分页选择
      console.log(e)
    },
    selectItem1(checked, name) { // 项目类型选择
      this.tabClick1 = name;
    }
  }
}
</script>

<style scoped>
.content {
  padding: 16px;
}
.item {
  height: 200px;
  background-color: #666;
}
.w-30 {
  width: 20%;
}
.w-45 {
  width: 45%;
}
.margin-y-16 {
  margin: 20px 0 16px;
}
.selectTitle {
  margin-right: 16px;
}
.m-l-16 {
  margin-right: 12px;
}
</style>
