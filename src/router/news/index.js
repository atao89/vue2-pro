/*
 * @Descripttion: ''
 * @version: ''
 * @Author: 周涛
 * @Date: 2021-07-14 21:24:06
 * @LastEditors: 周涛
 * @LastEditTime: 2021-07-14 22:04:48
 */
export default [
  {
    path: '/news',
    component: () => import(/* webpackChunkName: "news" */ '@/views/news/index.vue')
  }
]
