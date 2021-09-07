<!--
 * @Descripttion: ''
 * @version: ''
 * @Author: 周涛
 * @Date: 2021-07-15 00:28:46
 * @LastEditors: 周涛
 * @LastEditTime: 2021-09-07 14:36:31
-->
<template>
  <div>
    <h3>Inde Page</h3>
    <el-button type="primary" v-track:click :track-params="trackData.count"
      >点击测试</el-button
    >
  </div>
</template>
<script>
export default {
  name: "Home",
  data() {
    return {
      trackData: {
        id: "1001",
        props: "测试按钮",
        count: 0,
      },
    };
  },
};
</script>
<style>
</style>
