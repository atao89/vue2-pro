<!--
 * @Descripttion: ''
 * @version: ''
 * @Author: 周涛
 * @Date: 2021-07-14 21:12:54
 * @LastEditors: 周涛
 * @LastEditTime: 2021-09-14 17:52:43
-->
<template>
  <div id="app">
    <div id="aaa"></div>
    <Snowf
      :amount="50"
      :size="5"
      :speed="1.5"
      :wind="0"
      :opacity="0.8"
      :swing="1"
      :image="null"
      :zIndex="null"
      :resize="true"
      color="#fff"
    />
    <component :is="layout">
      <router-view v-if="isRouterAlive" />
    </component>
  </div>
</template>

<script>
import Snowf from "vue-snowf";

export default {
  name: "App",
  components: {
    Snowf,
  },
  provide() {
    return {
      reload: this.reload,
    };
  },
  data() {
    return {
      // 设置layout
      default_layout: "default",
      isRouterAlive: true,
      src: "https://v1.cnzz.com/z_stat.php?id=1280321259&online=1&show=line",
      id: "cnzz_stat_icon_1280321259",
    };
  },
  watch: {
    $route: {
      handler(to, from) {
        // console.log("to - - -  ", to);
        // console.log("from - - -  ", from);
        setTimeout(() => {
          if (window._czc) {
            const location = window.location;
            const contentUrl = location.pathname + location.hash;
            const refererUrl = "/";
            // console.log("location - - -    ", location);
            // console.log("contentUrl - - -    ", contentUrl);
            window._czc.push(["_setAutoPageview", false]);
            window._czc.push(["_trackPageview", contentUrl, refererUrl]);
          }
        }, 300);
      },
      immediate: true,
    },
  },
  computed: {
    layout() {
      // if (this.$route.meta.layout) {
      //   console.log('this.$route', this.$route)
      // }
      return this.$route.meta.layout
        ? this.$route.meta.layout + "-layout"
        : "default-layout";
    },
  },
  methods: {
    // 通过声明reload方法，控制router-view的显示或隐藏，从而控制页面的再次加载
    reload() {
      this.isRouterAlive = false;
      this.$nextTick(function () {
        this.isRouterAlive = true;
      });
    },

    initCNZZ() {
      //添加脚本
      const script = document.createElement("script");
      script.src = this.src;
      script.id = this.id;
      script.language = "JavaScript";
      // console.log(script);
      // const spans = htmlStr.match(/<span (.*?)>(.*?)<\/span>/g);
      let span = document.createElement("span");
      span.id = this.id;
      document.getElementById("cnzz_box").appendChild(span);
      document.body.appendChild(script);
    },
  },
  mounted() {
    this.initCNZZ();

    // 现这种方式控制台会有警告
    // document.write(
    //   unescape(
    //     "%3Cspan id='cnzz_stat_icon_1280321259'%3E%3C/span%3E%3Cscript src='https://v1.cnzz.com/z_stat.php%3Fid%3D1280321259%26online%3D1%26show%3Dline' type='text/javascript'%3E%3C/script%3E"
    //   )
    // );
    // document
    //   .getElementById("cnzz_stat_icon_1280321259")
    //   .classList.add("cnzz_atao89");

    // console.log(unescape("%3Cspan id='cnzz_stat_icon_1280321259'%3E%3C/span%3E%3Cscript src='https://v1.cnzz.com/z_stat.php%3Fid%3D1280321259%26online%3D1%26show%3Dline' type='text/javascript'%3E%3C/script%3E"))
  },
};
</script>
<style lang="scss">
* {
  margin: 0;
  padding: 0;
}
html,
body {
  height: 100%;
}
#app {
  height: 100%;
  overflow: hidden;
}
// .cnzz_atao89 {
//   position: absolute;
//   right: 20px;
//   top: 75px;
// }
// span#cnzz_stat_icon_1280321259 a {
//   color: rgba(0, 0, 255, 1);
// }
</style>
