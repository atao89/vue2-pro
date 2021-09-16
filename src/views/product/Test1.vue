<!--
 * @Descripttion: ''
 * @version: ''
 * @Author: 周涛
 * @Date: 2021-09-09 00:03:10
 * @LastEditors: 周涛
 * @LastEditTime: 2021-09-16 13:31:32
-->
<template>
  <div class="test1">
    <ul>
      <li v-for="item in 1000">{{ item }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Test1",
};
</script>