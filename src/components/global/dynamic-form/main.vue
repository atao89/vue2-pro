<!--
 * @Descripttion: 
 * @version: 
 * @Author: 周涛
 * @Date: 2021-09-15 13:35:41
 * @LastEditors: 周涛
 * @LastEditTime: 2021-09-15 17:28:37
-->
<template>
  <el-form
    class="dynamic-form"
    :inline="formConfig.inline"
    :model="value"
    :label-position="formConfig.labelPosition"
    :label-width="formConfig.labelWidth"
    :size="formConfig.size"
    :status-icon="formConfig.statusIcon"
  >
    <dynamic-form-item
      v-for="item in formConfig.formItemList"
      :key="item.key"
      v-if="value[item.key] !== undefined"
      :item="item"
      :value="value[item.key]"
      :style="{ 'min-width': columnMinWidth }"
      @input="handleInput($event, item.key)"
    />
    <slot></slot>
  </el-form>
</template>

<script>
import DynamicFormItem from "./DynamicFormItem.vue";
export default {
  name: "dynamic-form",
  components: {
    DynamicFormItem,
  },
  props: {
    formConfig: {
      type: Object,
      required: true,
    },
    value: {
      type: Object,
      required: true,
    },
    columnMinWidth: {
      type: String,
    },
  },
  methods: {
    setDefaultValue() {
      const formData = { ...this.value };
      // 设置默认值
      this.formConfig.formItemList.forEach(({ key, value }) => {
        if (formData[key] === undefined || formData[key] === null) {
          formData[key] = value;
        }
      });
      this.$emit("input", formData);
    },

    handleInput(val, key) {
      // 这里element-ui没有上报event，直接就是value了
      this.$emit("input", { ...this.value, [key]: val });
    },
  },
  mounted() {
    this.setDefaultValue();
  },
};
</script>