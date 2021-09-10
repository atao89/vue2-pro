<!--
 * @Descripttion: 
 * @version: 
 * @Author: 周涛
 * @Date: 2021-09-10 15:14:22
 * @LastEditors: 周涛
 * @LastEditTime: 2021-09-10 15:47:17
-->
<template>
  <el-table-column :label="colConfig.label">
    <span slot-scope="{ row }">
      {{
        parseInt(row[colConfig.prop]) > 0
          ? "+" + row[colConfig.prop]
          : row[colConfig.prop]
      }}
    </span>
  </el-table-column>
</template>

<script>
export default {
  name: "column",
  props: ["colConfig"],
};
</script>

<style>
</style>