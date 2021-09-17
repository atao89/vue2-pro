<!--
 * @Descripttion: 
 * @version: 
 * @Author: 周涛
 * @Date: 2021-09-17 15:25:16
 * @LastEditors: 周涛
 * @LastEditTime: 2021-09-17 15:32:41
-->
<template>
  <el-dropdown class="dropdown" trigger="click" @command="selectLang">
    <span class="el-dropdown-link">
      {{ langList[lang] }}<i class="el-icon-arrow-down el-icon--right"></i>
    </span>
    <el-dropdown-menu slot="dropdown">
      <el-dropdown-item
        v-for="(value, key) in localList"
        :command="key"
        :key="key"
        >{{ value }}</el-dropdown-item
      >
    </el-dropdown-menu>
  </el-dropdown>
</template>

<script>
import { ss } from "@/utils/storage";
export default {
  name: "language",
  data() {
    return {
      langList: {
        "zh-CN": "语言",
        "zh-TW": "語言",
        "en-US": "Lang",
        "en-JA": "言語",
      },
      localList: {
        "zh-CN": "中文简体",
        "zh-TW": "中文繁体",
        "en-US": "English",
        "en-JA": "日语",
      },
      lang: ss.getItem("language") ? ss.getItem("language") : "zh-CN",
    };
  },
  methods: {
    selectLang(lang) {
      this.$i18n.locale = lang;
      this.lang = lang;
      ss.setItem("language", lang);
    },
  },
};
</script>