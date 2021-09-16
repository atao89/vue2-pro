<!--
 * @Descripttion: 
 * @version: 
 * @Author: 周涛
 * @Date: 2021-09-10 10:42:02
 * @LastEditors: 周涛
 * @LastEditTime: 2021-09-10 17:29:27
-->
<template>
  <el-row :gutter="12" class="card-view">
    <el-col
      :span="8"
      v-for="(item, index) in cardData"
      :key="item.id"
      :offset="index > 0 ? 2 : 0"
    >
      <el-card
        :body-style="{ padding: '0px' }"
        shadow="hover"
        @click.native="loadData(item.type)"
      >
        <img
          src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
          class="image"
        />
        <div style="padding: 14px; text-align: center">{{ item.name }}</div>
      </el-card>
    </el-col>
  </el-row>
</template>

<script>
export default {
  name: "CardView",
  props: {
    cardData: {
      type: Array,
      required: true,
    },
  },
  methods: {
    loadData(type) {
      this.$emit("getCurrentComponent", type);
    },
  },
};
</script>

<style lang="scss" scoped>
.card-view.el-row {
  display: flex;
  justify-content: space-around;
  margin-bottom: 20px;
}
.card-view.el-row .el-col {
  width: 30%;
  cursor: pointer;
  .image {
    width: 100%;
    height: 60px;
    display: block;
  }
}
</style>