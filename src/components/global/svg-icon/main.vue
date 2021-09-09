<!--
 * @Descripttion: 
 * @version: 
 * @Author: 周涛
 * @Date: 2021-09-09 15:30:07
 * @LastEditors: 周涛
 * @LastEditTime: 2021-09-10 00:55:05
-->
<template>
  <svg v-on="$listeners" class="svgicon" :class="svgClass" aria-hidden="true">
    <use :xlink:href="iconName"></use>
  </svg>
</template>
<script>
export default {
  name: "svg-icon",
  props: {
    iconClass: {
      type: String,
    },
    className: {
      type: String,
    },
  },
  computed: {
    iconName() {
      return `#icon-${this.iconClass}`;
    },
    svgClass() {
      if (this.className) {
        return `svg-icon ${this.className}`;
      }
      return `svg-icon`;
    },
  },
};
</script>
<style lang="scss" scoped>
.svgicon {
  width: 16px;
  height: 16px;
  margin-right: 10px;
  vertical-align: middle;
  fill: currentColor;
  overflow: hidden;
}
</style>
