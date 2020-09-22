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
    <!-- 排行 -->
    <Row class="m-b-16">
      <Col :xs="{ span: 0}" :md="{ span: 0}" :xl="{ span: 24}">
        <div class="flex flex-wrap p-x-16">
          <div class="item1" :class="tabClick2 == i?'b-409 c-w':''" v-for="(item,i) in dataList" :key="i" @click="selectItem(i)">
            {{item}}
          </div>
          <div class="item1"><span>白帽总数: 10</span></div>
          <div class="item1"><span>发现漏洞: 10</span></div>
        </div>
        <div class="flex">
          <!-- 左侧 -->
          <div class="flex-1 left">
            <div class="t-c f-20 f-w-600 m-b-16"><span>财富榜</span></div>
            <div class="table w-100 relative" :style="{height: tableHeight + 'px'}">
              <table class="w-100" border="0" cellspacing="0" cellpadding="0" style="position: absolute;width:100%;z-index: 2;">
                <thead>
                  <tr class="b-f8f">
                    <th>排名</th>
                    <th>白帽子</th>
                    <th>所属团队</th>
                    <th>积分</th>
                    <th>权益</th>
                  </tr>
                </thead>
                <tbody>
                  <tr :class="i%2 ==1?'b-f8f':''" v-for="(item,i) in dwealthList" :key='i'>
                    <th>{{item.ranking}}</th>
                    <th>{{item.userName}}</th>
                    <th>{{item.team}}</th>
                    <th>{{item.integral}}</th>
                    <th>{{item.interests}}</th>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <!-- 右侧 -->
          <div class="flex-1 m-l-16 right">
            <div class="t-c f-20 f-w-600 m-b-16"><span>能力榜</span></div>
            <div class="table w-100 relative" :style="{height: tableHeight + 'px'}">
              <table class="w-100" border="0" cellspacing="0" cellpadding="0" style="position: absolute;width:100%;z-index: 2;">
                <thead>
                  <tr class="b-f8f">
                    <th>排名</th>
                    <th>白帽子</th>
                    <th>所属团队</th>
                    <th>漏洞总数</th>
                    <th>权益</th>
                  </tr>
                </thead>
                <tbody>
                  <tr :class="i%2 ==1?'b-f8f':''" v-for="(item,i) in abilityList" :key='i'>
                    <th>{{item.ranking}}</th>
                    <th>{{item.userName}}</th>
                    <th>{{item.team}}</th>
                    <th>{{item.integral}}</th>
                    <th>{{item.interests}}</th>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </Col>
      <Col :xs="{ span: 24}" :md="{ span: 24}" :xl="{ span: 0}">
        <div class="flex flex-wrap p-x-16">
          <div class="item1" :class="tabClick2 == i?'b-409 c-w':''" v-for="(item,i) in dataList" :key="i" @click="selectItem(i)">
            {{item}}
          </div>
          <div class="item2"><span>白帽总数: 10</span></div>
          <div class="item2"><span>发现漏洞: 10</span></div>
        </div>
        <!-- 财富榜 -->
          <div class="p-y-16">
            <div class="t-c f-20 f-w-600 m-b-16"><span>财富榜</span></div>
            <div class="table w-100 relative" :style="{height: tableHeight + 'px'}">
              <table class="w-100" border="0" cellspacing="0" cellpadding="0" style="position: absolute;width:100%;z-index: 2;">
                <thead>
                  <tr class="b-f8f">
                    <th>排名</th>
                    <th>白帽子</th>
                    <th>所属团队</th>
                    <th>积分</th>
                    <th>权益</th>
                  </tr>
                </thead>
                <tbody>
                  <tr :class="i%2 ==1?'b-f8f':''" v-for="(item,i) in dwealthList" :key='i'>
                    <th>{{item.ranking}}</th>
                    <th>{{item.userName}}</th>
                    <th>{{item.team}}</th>
                    <th>{{item.integral}}</th>
                    <th>{{item.interests}}</th>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <!-- 能力榜 -->
          <div class="flex-1 m-l-16 right p-y-16">
            <div class="t-c f-20 f-w-600 m-b-16"><span>能力榜</span></div>
            <div class="table w-100 relative" :style="{height: tableHeight + 'px'}">
              <table class="w-100" border="0" cellspacing="0" cellpadding="0" style="position: absolute;width:100%;z-index: 2;">
                <thead>
                  <tr class="b-f8f">
                    <th>排名</th>
                    <th>白帽子</th>
                    <th>所属团队</th>
                    <th>漏洞总数</th>
                    <th>权益</th>
                  </tr>
                </thead>
                <tbody>
                  <tr :class="i%2 ==1?'b-f8f':''" v-for="(item,i) in abilityList" :key='i'>
                    <th>{{item.ranking}}</th>
                    <th>{{item.userName}}</th>
                    <th>{{item.team}}</th>
                    <th>{{item.integral}}</th>
                    <th>{{item.interests}}</th>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
      </Col>
    </Row>
  </div>
</template>

<script>
export default {
  computed: {
    tableHeight() {
      if (this.dwealthList.length === 0) {
        return 66
      } else {
        return 48 * 8
      }
    }
  },
  data () {
    return {
      tabClick: 0,
      dataList: ['总排行', '年排行', '月排行'],
      tabClick2: 0,
      dwealthList: [
        {
          ranking: 1,
          userName: '我的圣诞节阿双方均萨达',
          team: '我的圣诞节阿双方均萨达',
          integral: 100,
          interests: '月度奖励'
        },
        {
          ranking: 2,
          userName: '标题1',
          team: '2020.12.12',
          integral: 100,
          interests: '年度奖励'
        },
        {
          ranking: 3,
          userName: '标题1',
          team: '2020.12.12',
          integral: 100,
          interests: '年度奖励'
        },
        {
          ranking: 4,
          userName: '标题1',
          team: '2020.12.12',
          integral: 100,
          interests: '年度奖励'
        },
        {
          ranking: 5,
          userName: '标题1',
          team: '2020.12.12',
          integral: 100,
          interests: '年度奖励'
        },
        {
          ranking: 6,
          userName: '标题1',
          team: '2020.12.12',
          integral: 100,
          interests: '年度奖励'
        },
        {
          ranking: 7,
          userName: '标题1',
          team: '2020.12.12',
          integral: 100,
          interests: '年度奖励'
        }
      ],
      abilityList: [
        {
          ranking: 1,
          userName: '标题1',
          team: '2020.12.12',
          integral: 100,
          interests: '月度奖励'
        },
        {
          ranking: 2,
          userName: '标题1',
          team: '2020.12.12',
          integral: 100,
          interests: '年度奖励'
        },
        {
          ranking: 3,
          userName: '标题1',
          team: '2020.12.12',
          integral: 100,
          interests: '年度奖励'
        },
        {
          ranking: 4,
          userName: '标题1',
          team: '2020.12.12',
          integral: 100,
          interests: '年度奖励'
        }
      ]
    }
  },
  methods: {
    selectItem(i) {
      this.tabClick2 = i
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
.w-50 {width: 50%;}
.f-w-600 {font-weight: 600;}
tr {height: 47px;line-height: 47px;}
tr:hover {background-color: rgba(235, 247, 255);}
th {border-bottom: 1px solid #e6e6e6;text-align: center;}
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
</style>
