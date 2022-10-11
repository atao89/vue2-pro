<!--
 * @Descripttion: ''
 * @version: ''
 * @Author: 周涛
 * @Date: 2021-09-09 00:03:10
 * @LastEditors: 周涛
 * @LastEditTime: 2022-10-11 13:39:36
-->
<template>
  <div class="test1">
    <h3>虚拟列表：</h3>
    <virtual-list :listData="data" :itemSize="50" />
  </div>
</template>

<script>
export default {
  name: "Test1",
};
</script>

<script>
let d = [];
for (let i = 1; i <= 100000; i++) {
  d.push({ id: i, value: i });
}

export default {
  name: "App",
  data() {
    return {
      data: d,
    };
  },
};
</script>

<style>
.test1 {
  height: 500px;
}
</style>