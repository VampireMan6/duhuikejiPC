<template>
  <div class="back-to-top" @click="backToTop" v-show="showReturnToTop" @mouseenter="show" @mouseleave="hide">
    <p class="">返回顶部</p>
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
  bottom: 10%;
  right: 30px;
  z-index: 9999;
  cursor: pointer;
  width: auto;
}
</style>
