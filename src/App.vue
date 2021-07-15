<!--
 * @Descripttion: ''
 * @version: ''
 * @Author: 周涛
 * @Date: 2021-07-14 21:12:54
 * @LastEditors: 周涛
 * @LastEditTime: 2021-07-15 00:54:29
-->
<template>
  <div id="app">
    <home />
  </div>
</template>
<script>
import home from '@/views/home.vue'
export default {
  name: 'app',
  components: { home }
}
</script>
<style lang="scss">
* {
  margin: 0;
  padding: 0;
}
html, body {
  height: 100%;
}
#app {
  height: 100%;
  display: flex;
  flex-direction: column;
}
</style>
