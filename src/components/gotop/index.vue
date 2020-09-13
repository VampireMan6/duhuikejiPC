<template>
  <div class="back-to-top" title="返回顶部" @click="backToTop" v-show="showReturnToTop" @mouseenter="show" @mouseleave="hide">
    <Icon type="ios-arrow-up" color="#fff" size="24"/>
  </div>
</template>

<script>
import { scrollIt } from '@/common/scrollIt' // 引入动画过渡的实现

export default {
  name: 'back-to-top',
  props: {
    pageY: {
      // 默认在哪个视图显示返回按钮
      type: Number,
      default: 200
    },
    transitionName: {
      // 过渡动画名称
      type: String,
      default: 'linear'
    }
  },
  data: function() {
    return {
      showTooltips: false,
      showReturnToTop: false
    }
  },
  methods: {
    show() {
      // 显示隐藏提示文字
      return (this.showTooltips = true)
    },
    hide() {
      return (this.showTooltips = false)
    },
    currentPageYOffset() {
      // 判断滚动区域大于多少的时候显示返回顶部的按钮
      window.pageYOffset > this.pageY
        ? (this.showReturnToTop = true)
        : (this.showReturnToTop = false)
    },
    backToTop() {
      scrollIt(0, 500, this.transitionName, this.currentPageYOffset)
    }
  },
  created() {
    window.addEventListener('scroll', this.currentPageYOffset, true)
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.currentPageYOffset, true)
  }
}
</script>

<style scoped>
.back-to-top {
  position: fixed;
  width: 48px;
  height: 40px;
  background-color: rgba(0,0,0,.6);
  bottom: 10%;
  right: 16px;
  z-index: 9999;
  cursor: pointer;
  text-align: center;
  line-height: 48px;
  border-radius: 2px;
  box-shadow: 0 1px 3px rgba(0,0,0,.2);
}
</style>
