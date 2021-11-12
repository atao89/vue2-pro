<!--
 * @Descripttion: 
 * @version: 
 * @Author: 周涛
 * @Date: 2021-09-22 15:44:26
 * @LastEditors: 周涛
 * @LastEditTime: 2021-11-12 17:34:35
-->
<template>
  <div class="page-404">
    <div>404 Not Found</div>
    <el-button @click="$router.go(-1)">返 回</el-button>
  </div>
</template>

<script>
export default {
  name: "page404",
};
</script>

<style lang="scss" scoped>
.page-404 {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 100px;
  div {
    color: #fff;
    background: #8080ff;
    margin-bottom: 30px;
  }
}
</style>