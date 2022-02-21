<!--
 * @Descripttion: 
 * @version: 
 * @Author: 周涛
 * @Date: 2021-08-23 17:35:56
 * @LastEditors: 周涛
 * @LastEditTime: 2022-02-21 22:16:30
-->
<template>
  <div class="ads">
    <div class="searchbar">
      <dynamic-form :formConfig="someConfig" v-model="someData" />
      <el-button type="primary" @click="searchHandle">查 询</el-button>
    </div>
    <div v-if="isSearch">{{ someData }}</div>
  </div>
</template>

<script>
export default {
  name: "Ads",
  data() {
    return {
      someConfig: {
        inline: true,
        labelPosition: "right",
        labelWidth: "",
        size: "small",
        statusIcon: true,
        formItemList: [
          {
            type: "input",
            label: "姓名",
            disable: false,
            readonly: false,
            value: "",
            placeholder: "请输入姓名",
            rules: [],
            key: "name",
            subtype: "text",
          },
          {
            type: "select",
            label: "爱好",
            value: "",
            multiple: false,
            rules: [],
            key: "hobby",
            options: [
              {
                value: "1",
                label: "唱歌",
                disabled: false,
              },
              {
                value: "2",
                label: "跳舞",
                disabled: false,
              },
              {
                value: "3",
                label: "游泳",
                disabled: false,
              },
            ],
          },
          {
            type: "radio",
            label: "性别",
            value: "",
            border: true,
            rules: [],
            key: "gender",
            options: [
              {
                value: "1",
                label: "男",
                disabled: false,
              },
              {
                value: "0",
                label: "女",
                disabled: false,
              },
            ],
          },
          {
            type: "input",
            label: "备注",
            disable: false,
            readonly: false,
            value: "",
            placeholder: "请输入备注",
            rules: [],
            key: "remark",
            subtype: "aa",
          },
        ],
      },
      someData: {},
      isSearch: false,
    };
  },
  methods: {
    searchHandle() {
      this.isSearch = true;
    },
  },
};
</script>

<style lang="scss" scoped>
.ads {
  .searchbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    /deep/ .el-form .el-form-item {
      margin-bottom: 0;
    }
  }
}
</style>