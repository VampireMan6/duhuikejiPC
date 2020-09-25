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
  </div>
</template>

<script>
export default {
  data () {
    return {
      tabClick: 0,
      dataList: ['总排行', '年排行', '月排行'],
      selectList: ['月度奖励', '年度奖励'],
      selectText: '',
      tabClick2: 0
    }
  },
  methods: {}
}
</script>

<style scoped>
.demo-carousel {
  width: 100%;
  height: 100%;
  background-color: #e6e6e6;
}
</style>
