/*
 * @Descripttion: ''
 * @version: ''
 * @Author: 周涛
 * @Date: 2021-07-14 22:48:58
 * @LastEditors: 周涛
 * @LastEditTime: 2021-07-14 22:49:22
 */
module.exports = {
  vueTemplate: compoenntName => {
    return `<template>
    <div class="${compoenntName}">
      ${compoenntName}组件
    </div>
  </template>
  <script>
  export default {
    name: '${compoenntName}'
  }
  </script>
  <style lang="scss" scoped>
  .${compoenntName} {
  
  }
  </style>
  `
  },
  entryTemplate: `import Main from './main.vue'
  export default Main`
}
