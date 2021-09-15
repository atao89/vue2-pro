<!--
 * @Descripttion: 
 * @version: 
 * @Author: 周涛
 * @Date: 2021-08-23 17:35:56
 * @LastEditors: 周涛
 * @LastEditTime: 2021-09-15 17:25:05
-->
<template>
  <div class="ads">
    {{ someData }}
    <dynamic-form :formConfig="someConfig" v-model="someData" />
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
        ],
      },
      someData: {
        name: "",
        hobby: "",
        gender: "",
      },
    };
  },
};
</script>