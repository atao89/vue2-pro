<!--
 * @Descripttion: 
 * @version: 
 * @Author: 周涛
 * @Date: 2021-09-10 13:14:24
 * @LastEditors: 周涛
 * @LastEditTime: 2021-09-10 13:19:48
-->
<template>
  <div class="test">
    <el-button type="primary" v-track:click :track-params="trackData.count"
      >埋点测试</el-button
    >
  </div>
</template>

<script>
export default {
  name: "Test",
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