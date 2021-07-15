/*
 * @Descripttion: ''
 * @version: ''
 * @Author: 周涛
 * @Date: 2021-07-14 21:12:54
 * @LastEditors: 周涛
 * @LastEditTime: 2021-07-14 23:37:46
 */
module.exports = {
  presets: [
    "@vue/app",
    [
      "@babel/preset-env", {
        modules: false
      }
    ]
  ],
  "plugins": [
    [
      "component", {
        "libraryName": "element-ui",
        "styleLibraryName": "theme-chalk"
      }
    ]
  ]
}
