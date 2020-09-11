<template>
  <div id="app">
    <nice-header></nice-header>
    <router-view/>
    <nice-footer></nice-footer>
    <back-top></back-top>
  </div>
</template>

<script>
import NiceHeader from '@/components/header/index'
import BackTop from '@/components/gotop/index'
import NiceFooter from '@/components/footer/index'

export default {
  name: 'App',
  components: {
    NiceHeader,
    BackTop,
    NiceFooter
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
