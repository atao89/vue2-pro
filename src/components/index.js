/*
 * @Descripttion: ''
 * @version: ''
 * @Author: 周涛
 * @Date: 2021-07-14 22:23:00
 * @LastEditors: 周涛
 * @LastEditTime: 2021-09-09 16:32:35
 */
// components/index.js
import Vue from 'vue'

// 自动加载 global 目录下的 .js 结尾的文件
const componentsContext = require.context('./global', true, /\.js$/)

componentsContext.keys().forEach(component => {
  const componentConfig = componentsContext(component)
  /**
  * 兼容 import export 和 require module.export 两种规范
  */
  const ctrl = componentConfig.default || componentConfig
  // console.log('ctrl.name', ctrl.name)
  Vue.component(ctrl.name, ctrl)
})
