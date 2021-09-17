<!--
 * @Descripttion: 
 * @version: 
 * @Author: 周涛
 * @Date: 2021-09-16 17:00:50
 * @LastEditors: 周涛
 * @LastEditTime: 2021-09-17 13:41:29
-->
<template>
  <div class="markdown">
    <markdown-editor v-model="markdown"></markdown-editor>
  </div>
</template>

<script>
export default {
  name: "Markdown",
  data() {
    return {
      markdown: {
        markdown:
          "# markdown 编辑器\n基于 [mavon-editor](https://www.npmjs.com/package/mavon-editor) 插件",
        html: "",
      },
    };
  },
};
</script>