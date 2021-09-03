<!--
 * @Descripttion: ''
 * @version: ''
 * @Author: 周涛
 * @Date: 2021-07-14 21:24:27
 * @LastEditors: 周涛
 * @LastEditTime: 2021-08-23 17:44:39
-->
<template>
  <div id="product">
     <router-view />
</template>
<script>
export default {
  name: "Product",
  data() {
    return {
      dataList: [],
    };
  },
  mounted() {
    this.getData();
  },
  methods: {
    getData() {
      for (var i = 0; i < 1000; i++) {
        this.dataList.push(i);
      }
    },
  },
};
</script>
