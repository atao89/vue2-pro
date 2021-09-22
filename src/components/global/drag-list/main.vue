<!--
 * @Descripttion: 
 * @version: 
 * @Author: 周涛
 * @Date: 2021-09-22 16:56:14
 * @LastEditors: 周涛
 * @LastEditTime: 2021-09-22 17:25:58
-->
<template>
  <draggable
    v-bind="$attrs"
    :move="onMove"
    class="drag-list"
    @end="handleChange($event)"
    v-model="list"
  >
    <slot></slot>
  </draggable>
</template>
<script>
import draggable from "vuedraggable";
export default {
  name: "drag-list",
  props: {
    value: {
      type: Array,
      default: () => [],
    },
  },
  components: {
    draggable,
  },
  data() {
    return {
      list: this.value,
    };
  },
  methods: {
    onMove({ relatedContext, draggedContext }) {
      const relatedElement = relatedContext.element;
      const draggedElement = draggedContext.element;
      return (
        (!relatedElement || !relatedElement.fixed) && !draggedElement.fixed
      );
    },
    handleEnd($event) {
      console.log($event);
    },
    handleChange($event) {
      this.$emit("input", this.list);
      this.$emit("change", { $event, value: this.list });
    },
  },
  watch: {
    list() {
      this.$emit("input", this.list);
    },
  },
};
</script>
</style>