<template>
  <div class="content">
    <!-- 轮播图 -->
    <Carousel class="m-b-16" v-model="tabClick" :height='450' loop :radius-dot='true' :autoplay-speed='4000' trigger='hover' autoplay>
      <CarouselItem>
        <div class="demo-carousel">1</div>
      </CarouselItem>
      <CarouselItem>
        <div class="demo-carousel">2</div>
      </CarouselItem>
      <CarouselItem>
        <div class="demo-carousel">3</div>
      </CarouselItem>
      <CarouselItem>
        <div class="demo-carousel">4</div>
      </CarouselItem>
    </Carousel>
    <!-- 漏洞认领 -->
    <Row class="m-b-16 p-x-16">
      <Col :xs="{ span: 0}" :md="{ span: 24}" :xl="{ span: 24}">
        <!-- 列表 -->
        <div class="flex f-b">
          <div class="flex-1 left">
            <div class="flex m-b-16">
              <div class="search flex">
                <Input size='small' search placeholder="请输入漏洞名称/厂商名称" @on-search='searchValue'/>
              </div>
              <Select class="m-l-16" v-model="selectText1" size="small" style="width:120px" placeholder='漏洞等级选择' @on-change='selectItem(true)'>
                <Option v-for="item in selectList1" :value='item' :key="item">{{ item }}</Option>
              </Select>
              <Select class="m-l-16" v-model="selectText2" size="small" style="width:120px" placeholder='漏洞类型选择' @on-change='selectItem(false)'>
                <Option v-for="item in selectList2" :value='item' :key="item">{{ item }}</Option>
              </Select>
            </div>
            <div class="table w-100 relative" :style="{height: tableHeight + 'px'}">
              <table class="w-100" border="0" cellspacing="0" cellpadding="0" style="position: absolute;width:100%;z-index: 2;table-layout: fixed;">
                <thead>
                  <tr class="b-f8f">
                    <th>漏洞标题</th>
                    <th>所属厂商</th>
                    <th>提交者</th>
                    <th>创建时间</th>
                    <th>漏洞编号</th>
                    <th>操作</th>
                  </tr>
                </thead>
                <tbody>
                  <tr :class="i%2 ==1?'b-f8f':''" v-for="(item,i) in dataList" :key='i'>
                    <th>{{item.title}}</th>
                    <th>{{item.name}}</th>
                    <th>{{item.userName}}</th>
                    <th>{{item.time}}</th>
                    <th>{{item.numberId}}</th>
                    <th><Button type="primary" size='small'>认领漏洞</Button></th>
                  </tr>
                </tbody>
              </table>
            </div>
            <div v-if="dataList.length === 0" class="t-c" style="margin-top: 16px;">
              <p>暂无数据</p>
            </div>
            <div class="t-c margin-y-16">
              <Page :total="dataTotal" :page-size="10" @on-change='changePage'/>
            </div>
          </div>
          <div class="right m-l-16">
            <!-- 漏洞认领流程 -->
            <div class="border-div m-b-16">
              <h3 class="m-b-16">漏洞认领流程</h3>
              <p>文字介绍</p>
            </div>
            <!-- 关注我们 -->
            <div class="border-div">
              <h3 class="m-b-16">关注我们</h3>
              <div class="t-c">
                <img style="width: 80%;" src="../../../assets/image/weixin.jpg" alt="">
              </div>
            </div>
          </div>
        </div>
      </Col>
      <Col :xs="{ span: 24}" :md="{ span: 0}" :xl="{ span: 0}">
        <div class="flex m-b-16">
          <div class="search flex">
            <Input size='small' search placeholder="请输入漏洞名称/厂商名称" @on-search='searchValue'/>
          </div>
          <Select class="m-l-16" v-model="selectText1" size="small" style="width:120px" placeholder='漏洞等级选择' @on-change='selectItem(true)'>
            <Option v-for="item in selectList1" :value='item' :key="item">{{ item }}</Option>
          </Select>
          <Select class="m-l-16" v-model="selectText2" size="small" style="width:120px" placeholder='漏洞类型选择' @on-change='selectItem(false)'>
            <Option v-for="item in selectList2" :value='item' :key="item">{{ item }}</Option>
          </Select>
        </div>
        <div class="w-100 m-b-16">
          <!-- 漏洞认领流程 -->
          <div class="border-div m-b-16">
            <h3 class="m-b-16">漏洞认领流程</h3>
            <p>文字介绍</p>
          </div>
          <!-- 关注我们 -->
          <div class="border-div">
            <h3 class="m-b-16">关注我们</h3>
            <div class="t-c">
              <img style="width: 60%;" src="../../../assets/image/weixin.jpg" alt="">
            </div>
          </div>
        </div>
        <!-- 列表 -->
        <div class="table w-100 relative" :style="{height: tableHeight + 'px'}">
          <table class="w-100" border="0" cellspacing="0" cellpadding="0" style="position: absolute;width:100%;z-index: 2;table-layout: fixed;">
            <thead>
              <tr class="b-f8f">
                <th>漏洞标题</th>
                <th>所属厂商</th>
                <th>提交者</th>
                <th>创建时间</th>
                <th>漏洞编号</th>
                <th>操作</th>
              </tr>
            </thead>
            <tbody>
              <tr :class="i%2 ==1?'b-f8f':''" v-for="(item,i) in dataList" :key='i'>
                <th>{{item.title}}</th>
                <th>{{item.name}}</th>
                <th>{{item.userName}}</th>
                <th>{{item.time}}</th>
                <th>{{item.numberId}}</th>
                <th><Button type="primary" size='small'>认领漏洞</Button></th>
              </tr>
            </tbody>
          </table>
        </div>
        <div v-if="dataList.length === 0" class="t-c" style="margin-top: 16px;">
          <p>暂无数据</p>
        </div>
        <div class="t-c margin-y-16">
          <Page :total="dataTotal" :page-size="10" @on-change='changePage'/>
        </div>
      </Col>
    </Row>
  </div>
</template>

<script>
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
      tabClick: 0,
      dataList: [
        {
          title: '重庆某某某公司存在某某漏洞',
          name: '我双方均萨达撒旦法撒旦法萨达撒旦法大是发送到发生',
          userName: '我的圣诞节阿双方均萨达',
          time: '2020.10.10',
          numberId: 'dhbox-2020.10.10'
        },
        {
          title: '重庆某某某公司存在某某漏洞',
          name: '我双方均萨达撒旦法撒旦法萨达撒旦法大是发送到发生',
          userName: '我的圣诞节阿双方均萨达',
          time: '2020.10.10',
          numberId: 'dhbox-2020.10.10'
        },
        {
          title: '重庆某某某公司存在某某漏洞',
          name: '我双方均萨达撒旦法撒旦法萨达撒旦法大是发送到发生',
          userName: '我的圣诞节阿双方均萨达',
          time: '2020.10.10',
          numberId: 'dhbox-2020.10.10'
        },
        {
          title: '重庆某某某公司存在某某漏洞',
          name: '我双方均萨达撒旦法撒旦法萨达撒旦法大是发送到发生',
          userName: '我的圣诞节阿双方均萨达',
          time: '2020.10.10',
          numberId: 'dhbox-2020.10.10'
        }
      ],
      selectList1: ['严重', '高危', '中危', '低危'],
      selectText1: '',
      selectList2: ['事件漏洞', '通用漏洞'],
      selectText2: ''
    }
  },
  methods: {
    searchValue(value) { // 搜索
      console.log(value)
    },
    selectItem(value) { // 项目选择
      console.log(value);
    },
    changePage(e) { // 分页选择
      console.log(e)
    }
  }
}
</script>

<style scoped>
.demo-carousel {
  width: 100%;
  height: 100%;
  background-color: #e6e6e6;
}
.right {width: 20%;}
tr {height: 47px;}
tr:hover {background-color: rgba(235, 247, 255);}
th {border-bottom: 1px solid #e6e6e6;text-align: center;min-width: 120px;white-space: nowrap;text-overflow: ellipsis;overflow: hidden;}
.b-f8f {background-color: #f8f8f9;}
.margin-y-16 { margin: 20px 0 16px;}
tbody tr th {font-weight: 400;}
.ivu-input-small{border-radius: 12px !important;}
.p-y-16 {padding: 16px 0;}
.p-16 {padding: 16px;}
.item1 {text-align: center; padding: 2px 8px;border-radius: 4px;margin: 0 16px 16px 0;font-size: 18px;}
.item2 {text-align: center; padding: 2px 8px;margin-left: 16px;font-size: 18px;}
.item1:hover { background-color: #409EFF;color: #fff;}
.f-18 {font-size: 18px;padding: 2px;}
.search {max-width: 260px;}
.border-div {border: 1px solid #e6e6e6;padding: 16px;border-radius: 4px;}
</style>
