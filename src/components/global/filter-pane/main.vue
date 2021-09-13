<!--
 * @Descripttion: 
 * @version: 
 * @Author: 周涛
 * @Date: 2021-09-10 17:46:33
 * @LastEditors: 周涛
 * @LastEditTime: 2021-09-13 15:15:33
-->
<template>
  <div>
    <div class="filter-container">
      <el-date-picker
        v-if="filterData.timeSelect"
        v-model="dateRange"
        :style="{
          width: filterData.timeSelect.width
            ? filterData.timeSelect.width + 'px'
            : defaultWidth,
        }"
        type="daterange"
        start-placeholder="开始日期"
        end-placeholder="结束日期"
        :default-time="['', '']"
        :picker-options="pickerOptions"
        class="filter-item"
      />
      <template v-if="filterData.elinput">
        <el-input
          v-for="(item, index) in filterData.elinput"
          :key="item.key"
          v-model="listQuery[item.key]"
          :placeholder="item.name"
          :style="{ width: item.width ? item.width + 'px' : defaultWidth }"
          class="filter-item"
        />
      </template>
      <template v-if="filterData.elselect">
        <el-select
          v-for="(item, index) in filterData.elselect"
          :key="index"
          v-model="listQuery[item.key]"
          :placeholder="item.name"
          clearable
          :style="{ width: item.width ? item.width + 'px' : defaultWidth }"
          class="filter-item"
        >
          <el-option
            v-for="i in item.option"
            :key="i.key"
            :label="i.value"
            :value="i.key"
          />
        </el-select>
      </template>
      <div
        class="btn filter-item"
        :style="{
          width: filterData.timeSelect.width
            ? filterData.timeSelect.width + 'px'
            : defaultWidth,
        }"
      >
        <!-- class="filter-item" -->
        <el-button type="primary" @click="handleSearch"> 搜索 </el-button>
        <!-- class="filter-item" -->
        <el-button type="warning" @click="handleRest"> 重置 </el-button>
      </div>
      <!-- 下面是多添加几个空白的 -->
      <div
        class="filter-item-empty"
        :style="{
          width: filterData.timeSelect.width
            ? filterData.timeSelect.width + 'px'
            : defaultWidth,
          visibility: 'hidden',
        }"
      ></div>
      <div
        class="filter-item-empty"
        :style="{
          width: filterData.timeSelect.width
            ? filterData.timeSelect.width + 'px'
            : defaultWidth,
          visibility: 'hidden',
        }"
      ></div>
    </div>
  </div>
</template>

<script>
// 搜索栏组件
// filterData:{
//   timeSelect:true,
//   elinput:[
//     {
//       name:'姓名',
//       key:'userName'
//     }
//   ],
//   elselect:[
//     {
//       name:'部门',
//       key:'department'
//       option:[{
//         key:1,
//         value:'技术部'
//       }]
//     }
//   ]
// }
import { cloneDeep } from "lodash";
export default {
  name: "filter-pane",
  props: {
    // eslint-disable-next-line vue/require-default-prop
    filterData: {
      type: Object,
    },
  },
  data() {
    return {
      defaultWidth: "200px",
      pickerOptions: {
        disabledDate(time) {
          return time.getTime() > Date.now();
        },
      },
      dateRange: ["", ""],
      listQuery: {},
    };
  },
  watch: {
    filterData(val) {
      console.log(val);
      if (val.elinput.length > 0) {
        val.elinput.map((item) => {
          this.listQuery[item.key] = "";
        });
      }
      if (val.elselect.length > 0) {
        val.elinput.map((item) => {
          this.listQuery[item.key] = "";
        });
      }
    },
    "filterData.rest": {
      handler: function (val) {
        if (val) {
          this.handleRest();
        }
      },
      deep: true,
    },
  },
  methods: {
    handleSearch() {
      // console.log("搜索成功", this.listQuery);
      const data = cloneDeep(this.listQuery);
      if (this.dateRange && this.dateRange[0] !== "") {
        const startTime =
          this.$moment(this.dateRange[0]).format("YYYY-MM-DD") + " 00:00:00";
        const endTime =
          this.$moment(this.dateRange[1]).format("YYYY-MM-DD") + " 23:59:59";
        data.beginDate = startTime;
        data.endDate = endTime;
      }
      Object.keys(data).forEach(function (key) {
        if (data[key] === "") {
          delete data[key];
        }
      });
      this.$emit("filterMsg", data);
    },
    handleRest() {
      const data = cloneDeep(this.listQuery);
      Object.keys(data).forEach(function (key) {
        data[key] = "";
      });
      this.listQuery = data;
      this.dateRange = ["", ""];
      console.log("重置成功", this.listQuery);
    },
  },
};
</script>

<style  scoped lang='scss'>
.filter-container {
  width: 100%;
  height: auto;
  display: flex;
  display: -webkit-flex;
  justify-content: space-between;
  flex-direction: row;
  flex-wrap: wrap;
}
.filter-item {
  margin: 5px;
  // width: 20%;
  // height: 30px;
}
.filter-item-empty {
  margin: 5px;
  height: 0px;
}
// .filter-item {
//   margin-left: 10px;
//   display: inline-block;
// }
// .filter-container .filter-item:nth-of-type(1) {
//   margin-left: 0px;
// }
// .btn {
//   display: inline-block;
//   margin-left: 10px;
// }
</style>
