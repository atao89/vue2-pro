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
    <component :is="layout">
      <router-view v-if="isRouterAlive"/>
    </component>
  </div>
</template>
<script>
export default {
  name: 'App',
  provide () {
    return {
      reload: this.reload
    }
  },
  data () {
    return {
      // 设置layout
      default_layout: 'default',
      isRouterAlive: true
    }
  },
  computed: {
    layout () {
      return this.$route.meta.layout ? (this.$route.meta.layout) + '-layout' : 'default-layout'
    }
  },
  methods: {
    // 通过声明reload方法，控制router-view的显示或隐藏，从而控制页面的再次加载
    reload () {
      this.isRouterAlive = false
      this.$nextTick(function () {
        this.isRouterAlive = true
      })
    }
  }
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
  overflow: hidden;
}
</style>
