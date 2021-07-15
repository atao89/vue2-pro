/*
 * @Descripttion: ''
 * @version: ''
 * @Author: 周涛
 * @Date: 2021-07-12 23:15:09
 * @LastEditors: 周涛
 * @LastEditTime: 2021-07-14 22:19:59
 */
import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

let routes = []

const routerContext = require.context('./', true, /index\.js$/)
routerContext.keys().forEach(route => {
  // 如果是根目录的index.js、 不处理
  if (route.startsWith('./index')) {
    return
  }
  const routerModule = routerContext(route)
  /*
    * 兼容import export 和 require module.export 两种规范
  */
  routes = [...routes, ...(routerModule.default || routerModule)]
  // console.log('+++++++++routes', routes)
})

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: routes
})
