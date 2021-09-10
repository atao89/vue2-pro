<!--
 * @Descripttion: 
 * @version: 
 * @Author: 周涛
 * @Date: 2021-09-10 14:54:04
 * @LastEditors: 周涛
 * @LastEditTime: 2021-09-10 17:33:56
-->
<template>
  <el-table :data="tableData" :stripe="stripe" :border="border" row-key="id">
    <template v-for="colConfig in colConfigs">
      <slot v-if="colConfig.slot" :name="colConfig.slot"></slot>
      <component
        :key="colConfig.id"
        v-else-if="colConfig.component"
        :is="colConfig.component"
        :col-config="colConfig"
      >
      </component>
      <el-table-column
        v-else
        v-bind="colConfig"
        :key="colConfig.id"
        :width="colConfig.width ? colConfig.width : ''"
        align="center"
      />
    </template>
  </el-table>
</template>

<script>
export default {
  name: "general-table",
  props: {
    colConfigs: Array,
    tableData: Array,
    stripe: Boolean,
    border: Boolean,
  },
};
</script>