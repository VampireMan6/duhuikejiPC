<template>
  <div class="content">
    <!-- 项目列表 -->
    <Row>
      <Col :xs="{ span: 0}" :md="{ span: 0}" :xl="{ span: 24}">
        <!-- 项目类型 -->
        <div class="m-b-16">
          <div class="w-100 flex">
            <div class="selectTitle">类型</div>
            <div class="flex flex-1">
              <div class="m-l-16 item1" :class="tabClick1 == i?'b-409 c-w':''" v-for="(item,i) in projectType" :key="i" @click="selectItem1(i)">
                {{item}}
              </div>
            </div>
           </div>
        </div>
        <!-- 项目时间 -->
        <div class="m-b-16">
          <div class="w-100 flex">
            <div class="selectTitle">时间</div>
            <div class="flex flex-1">
              <div class="m-l-16 item1" :class="tabClick2 == i?'b-409 c-w':''" v-for="(item,i) in projectTime" :key="i" @click="selectItem2(i)">
                {{item}}
              </div>
            </div>
           </div>
        </div>
        <div class="flex flex-wrap f-b">
          <div v-for="(item,i) in dataList" :key="i" class="item m-b-16 w-24">
            {{item}}
          </div>
          <div class="w-24"></div>
          <div class="w-24"></div>
        </div>
      </Col>
      <Col :xs="{ span: 0}" :md="{ span: 24}" :xl="{ span: 0}">
        <!-- 项目类型 -->
        <div class="m-b-16">
          <div class="w-100 flex">
            <div class="selectTitle">类型</div>
            <div class="flex flex-1">
              <div class="m-l-16 item1" :class="tabClick1 == i?'b-409 c-w':''" v-for="(item,i) in projectType" :key="i" @click="selectItem1(i)">
                {{item}}
              </div>
            </div>
           </div>
        </div>
        <!-- 项目时间 -->
        <div class="m-b-16">
          <div class="w-100 flex">
            <div class="selectTitle">时间</div>
            <div class="flex flex-1">
              <div class="m-l-16 item1" :class="tabClick2 == i?'b-409 c-w':''" v-for="(item,i) in projectTime" :key="i" @click="selectItem2(i)">
                {{item}}
              </div>
            </div>
           </div>
        </div>
        <div class="flex flex-wrap f-b">
          <div v-for="(item,i) in dataList" :key="i" class="item m-b-16 w-32">
            {{item}}
          </div>
          <div class="w-45"></div>
        </div>
      </Col>
      <Col :xs="{ span: 24}" :md="{ span: 0}" :xl="{ span: 0}">
        <!-- 项目类型 -->
        <div class="m-b-16">
          <div class="w-100 flex">
            <div class="selectTitle">类型</div>
            <div class="flex flex-1">
              <div class="m-l-16 item1" :class="tabClick1 == i?'b-409 c-w':''" v-for="(item,i) in projectType" :key="i" @click="selectItem1(i)">
                {{item}}
              </div>
            </div>
           </div>
        </div>
        <!-- 项目时间 -->
        <div class="m-b-16">
          <div class="w-100 flex">
            <div class="selectTitle">时间</div>
            <div class="flex flex-1">
              <div class="m-l-16 item1" :class="tabClick2 == i?'b-409 c-w':''" v-for="(item,i) in projectTime" :key="i" @click="selectItem2(i)">
                {{item}}
              </div>
            </div>
           </div>
        </div>
        <div class="flex flex-wrap f-b">
          <div v-for="(item,i) in dataList" :key="i" class="item m-b-16 w-48">
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
      dataList: [1, 2, 3, 4, 5, 6, 7],
      projectType: ['全部', '专属测试项目', '公益测试项目'],
      projectTime: ['全部', '长期项目', '短期项目'],
      tabClick1: 0,
      tabClick2: 0
    };
  },
  methods: {
    changePage(e) { // 分页选择
      console.log(e)
    },
    selectItem1(i) { // 项目类型选择
      this.tabClick1 = i;
    },
    selectItem2(i) { // 项目时间选择
      this.tabClick2 = i;
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
.w-24 {
  width: 24%;
}
.w-32 {
  width: 32%;
}
.w-48 {
  width: 48%;
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
.item1 {
  padding: 2px 6px;
  border-radius: 4px;
}
.item1:hover {
  background-color: #409EFF;
  color: #fff;
}
</style>
