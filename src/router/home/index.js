/*
 * @Descripttion: ''
 * @version: ''
 * @Author: 周涛
 * @Date: 2021-07-15 00:30:26
 * @LastEditors: 周涛
 * @LastEditTime: 2021-08-16 20:03:17
 */
export default [
  {
    path: '/home',
    name: 'Home',
    component: () => import(/* webpackChunkName: "home" */ '@/views/Home.vue'),
    meta: {
      layout: 'home',
      titile: '首页'
    }
  }
]