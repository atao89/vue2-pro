/*
 * @Descripttion: ''
 * @version: ''
 * @Author: 周涛
 * @Date: 2021-07-15 00:30:26
 * @LastEditors: 周涛
 * @LastEditTime: 2021-07-15 00:59:49
 */
export default [
  {
    path: '/home',
    redirect: '/',
    component: () => import(/* webpackChunkName: "home" */ '@/views/home.vue')
  }
]
