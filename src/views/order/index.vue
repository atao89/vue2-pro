<!--
 * @Descripttion: 
 * @version: 
 * @Author: 周涛
 * @Date: 2021-08-23 17:36:05
 * @LastEditors: 周涛
 * @LastEditTime: 2021-09-16 13:32:04
-->
<template>
  <div id="home">
    <card-view
      :cardData="cardData"
      @getCurrentComponent="getCurrentComponent"
    />
    <component :is="currentComponent"></component>
  </div>
</template>

<script>
import CardView from "./components/CardView.vue";
import Vv from "./components/Vv.vue";
import Uv from "./components/Uv.vue";
import Pv from "./components/Pv.vue";
export default {
  name: "Home",
  components: {
    CardView,
    Vv,
    Uv,
    Pv,
  },
  data() {
    return {
      cardData: [
        {
          id: 1,
          name: "访问次数（VV）",
          type: "Vv",
        },
        {
          id: 2,
          name: "独立访客（UV）",
          type: "Uv",
        },
        {
          id: 3,
          name: "网站浏览量（PV）",
          type: "Pv",
        },
      ],
      currentComponent: "Vv",
    };
  },
  methods: {
    getCurrentComponent(type) {
      this.currentComponent = type;
    },
  },
};
</script>
<style>
</style>
