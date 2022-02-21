<!--
 * @Descripttion: ''
 * @version: ''
 * @Author: 周涛
 * @Date: 2021-07-14 21:24:27
 * @LastEditors: 周涛
 * @LastEditTime: 2022-02-21 23:00:18
-->
<template>
  <div id="news">
    News Page
    <el-link type="primary" @click="toDetail">去详情页</el-link>
  </div>
</template>
<script>
export default {
  name: 'News',
  methods: {
    toDetail(){
      this.$router.push('/news/detail');
    }
  }
}
</script>
