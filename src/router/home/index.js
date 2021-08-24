/*
 * @Descripttion: ''
 * @version: ''
 * @Author: 周涛
 * @Date: 2021-07-15 00:30:26
 * @LastEditors: 周涛
 * @LastEditTime: 2021-08-24 23:34:14
 */
export default [
  {
    path: '/',
    name: 'Home',
    redirect: '/home',
  },
  {
    path: '/home',
    name: 'Home',
    component: () => import(/* webpackChunkName: "home" */ '@/views/Home.vue'),
    meta: {
      layout: 'home',
      title: '首页'
    }
  }
]
