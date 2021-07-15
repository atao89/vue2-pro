<!--
 * @Descripttion: ''
 * @version: ''
 * @Author: 周涛
 * @Date: 2021-07-14 21:24:27
 * @LastEditors: 周涛
 * @LastEditTime: 2021-07-14 22:22:06
-->
<template>
  <div id="product">
    <p v-for="(item,index) in dataList" :key="index">{{item}}</p>
  </div>
</template>
<script>
export default {
  name: 'product',
  data () {
    return {
      dataList: []
    }
  },
  mounted () {
    this.getData()
  },
  methods: {
    getData () {
      for (var i = 0; i < 100; i++) {
        this.dataList.push(i)
      }
    }
  }
}
</script>
