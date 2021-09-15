<!--
 * @Descripttion: 
 * @version: 
 * @Author: 周涛
 * @Date: 2021-09-15 13:42:02
 * @LastEditors: 周涛
 * @LastEditTime: 2021-09-15 17:25:00
-->
<template>
  <el-form-item :rules="item.rules" :label="item.label" :prop="item.key">
    <el-input
      v-if="item.type === 'input'"
      v-bind="$attrs"
      v-on="$listeners"
      :type="item.subtype"
      :placeholder="item.placeholder"
      :disabled="item.disable"
      :readonly="item.readonly"
      :autosize="item.autosize"
    ></el-input>

    <el-select
      v-else-if="item.type === 'select'"
      v-bind="$attrs"
      v-on="$listeners"
      :multiple="item.multiple"
      :disabled="item.disabled"
      :multiple-limit="item.multipleLimit"
    >
      <el-option
        v-for="o in item.options"
        :key="o.value"
        :label="o.label"
        :value="o.value"
        :disabled="o.disabled"
      >
      </el-option>
    </el-select>

    <el-radio-group
      v-else-if="item.type === 'radio'"
      v-bind="$attrs"
      v-on="$listeners"
    >
      <el-radio
        v-for="o in item.options"
        :key="o.value"
        :label="o.value"
        border
        :disabled="o.disabled"
      >
        {{ o.label }}
      </el-radio>
    </el-radio-group>

    

    <span v-else>未知控件类型</span>
  </el-form-item>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
};
</script>
