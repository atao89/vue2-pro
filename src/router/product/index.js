/*
 * @Descripttion: ''
 * @version: ''
 * @Author: 周涛
 * @Date: 2021-07-14 21:24:06
 * @LastEditors: 周涛
 * @LastEditTime: 2021-07-14 22:21:06
 */
export default [
  {
    path: '/product',
    component: () => import(/* webpackChunkName: "prodect" */ '@/views/product/index.vue')
  }
]
