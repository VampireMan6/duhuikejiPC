<template>
  <div class="">
    <!-- 顶部 -->
    <div class="top m-b-16"></div>
    <div class="m-b-16 flex j-c f-c">
      <span style="padding: 2px 0;" class="m-l-16">你当前可用的虚拟币余额为: 12</span>
      <div class="item1" :class="tabClick == i?'b-409 c-w':''" v-for="(item,i) in buttonList" :key="i" @click="selectType(i)">
        {{item}}
      </div>
    </div>
    <div class="content">
      <!-- 项目列表 -->
      <Row>
        <Col :xs="{ span: 0}" :md="{ span: 0}" :xl="{ span: 24}">
          <div class="flex flex-wrap f-b">
            <div v-for="(item,i) in dataList" :key="i" class="item m-b-16 w-24">
              <div class="w-100" style="height: 174px">
                <img class="w-100 h-100" src="../../../assets/image/logo2.png" alt="">
              </div>
              <div class="">
                dfasdssa
              </div>
            </div>
            <div class="w-24"></div>
            <div class="w-24"></div>
          </div>
        </Col>
        <Col :xs="{ span: 0}" :md="{ span: 24}" :xl="{ span: 0}">
          <div class="flex flex-wrap f-b">
            <div v-for="(item,i) in dataList" :key="i" class="item m-b-16 w-32">
              <div class="w-100" style="height: 174px">
                <img class="w-100 h-100" src="../../../assets/image/weixin.jpg" alt="">
              </div>
              <div class="">
                dfasdssa
              </div>
            </div>
            <div class="w-32"></div>
          </div>
        </Col>
        <Col :xs="{ span: 24}" :md="{ span: 0}" :xl="{ span: 0}">
          <div class="flex flex-wrap f-b">
            <div v-for="(item,i) in dataList" :key="i" class="item m-b-16 w-48">
              <div class="w-100" style="height: 174px">
                <img class="w-100 h-100" src="../../../assets/image/weixin.jpg" alt="">
              </div>
              <div class="">
                dfasdssa
              </div>
            </div>
            <div class="w-48"></div>
          </div>
        </Col>
      </Row>
      <div class="t-c margin-y-16">
        <Page :total="50" :page-size="12" @on-change='changePage'/>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      dataList: [1, 2, 3, 4, 5, 6, 7],
      buttonList: ['虚拟兑换区', '实物兑换区'],
      tabClick: 0
    };
  },
  methods: {
    changePage(e) { // 分页选择
      console.log(e)
    },
    selectType(i) {
      this.tabClick = i
    }
  }
}
</script>

<style scoped>
.top {height: 400px;background-color: #e6e6e6;}
.content {
  padding: 16px;
}
.img {width: 50px;height: 50px;background-color: #1f1;}
.item {
  height: 246px;
  padding: 8px;
  border: 1px solid #e6e6e6;
  border-radius: 4px;
  /* background-color: #666; */
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
.m-r-32 {
  margin-right: 32px;
}
/* .item1 {
  padding: 2px 6px;
  border-radius: 4px;
}
.item1:hover {
  background-color: #409EFF;
  color: #fff;
} */
.item1 {
  min-width: 74px;
  height: 22px;
  text-align: center;
  padding: 2px 0;
  border-radius: 4px;
  margin-left: 16px;
}
.item1:hover { background-color: #409EFF;
  color: #fff;
}
</style>
