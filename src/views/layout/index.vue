<template>
  <div class="layout">
    <div class="top"></div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data() {
    return {

    }
  }
}
</script>

<style scoped>
.layout {
  width: 100%;
  min-height: calc(100vh - 415px);
  z-index: 998;
  width: auto;
}
.top {
  height: 60px;
  background-color: #000;
}
</style>
