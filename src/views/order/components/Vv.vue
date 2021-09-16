<!--
 * @Descripttion: 
 * @version: 
 * @Author: 周涛
 * @Date: 2021-09-10 11:25:32
 * @LastEditors: 周涛
 * @LastEditTime: 2021-09-10 17:41:10
-->
<template>
  <div class="vv">
    <general-table
      :tableData="tableData"
      :col-configs="colConfigs"
      :stripe="true"
      :border="false"
    >
      <el-table-column slot="options" label="操作" align="center">
        <el-button size="mini" slot-scope="{ row }">查看</el-button>
      </el-table-column>
      <el-table-column
        slot="number"
        type="index"
        align="center"
        width="60"
      ></el-table-column>
    </general-table>
  </div>
</template>

<script>
import Column from "@/components/global/general-table/column";

export default {
  name: "Vv",
  data() {
    return {
      colConfigs: [
        { slot: "number" },
        { prop: "date", label: "日期", width: 150 },
        { prop: "name", label: "姓名", width: 150 },
        { prop: "address", label: "地址", width: 400 },
        { prop: "change", label: "变化", width: 150, component: Column },
        { prop: "trend", label: "趋势", width: 150 },
        { slot: "options" },
      ],
      tableData: [
        {
          id: "1",
          date: "2021-09-10",
          name: "张三",
          address: "北京市朝阳区绿地中心c座",
          change: "8%",
          trend: "6%",
        },
        {
          id: "2",
          date: "2021-09-21",
          name: "李四",
          address: "上海市闵行区申长路1398弄1-4号",
          change: "-10%",
          trend: "-12%",
        },
        {
          id: "3",
          date: "2021-09-21",
          name: "王五",
          address: "广州市海珠区鼎新路88号",
          change: "22%",
          trend: "15%",
        },
        {
          id: "4",
          date: "2021-09-21",
          name: "赵六",
          address: " 深圳市龙岗区园湖路嶂背村南侧约250米",
          change: "-24%",
          trend: "-16%",
        },
      ],
    };
  },
};
</script>