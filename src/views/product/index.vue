<!--
 * @Descripttion: ''
 * @version: ''
 * @Author: 周涛
 * @Date: 2021-07-14 21:24:27
 * @LastEditors: 周涛
 * @LastEditTime: 2021-08-10 15:47:32
-->
<template>
  <div id="product">
    Product Page
    <p v-for="(item,index) in dataList" :key="index">{{item}}</p>
  </div>
</template>
<script>
export default {
  name: 'Product',
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
      for (var i = 0; i < 1000; i++) {
        this.dataList.push(i)
      }
    }
  }
}
</script>
