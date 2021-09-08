/*
 * @Descripttion: ''
 * @version: ''
 * @Author: 周涛
 * @Date: 2021-07-15 00:30:26
 * @LastEditors: 周涛
 * @LastEditTime: 2021-09-08 22:21:10
 */
export default [
  {
    path: '/',
    redirect: '/home',
    // name: 'Home',
    // component: () => import(/* webpackChunkName: "home" */ '@/views/Home.vue'),
    // meta: {
    //   layout: 'home',
    //   title: '首页'
    // }
  }
  ,
  {
    path: '/home',
    name: 'Home',
    component: () => import(/* webpackChunkName: "home" */ '@/views/Home.vue'),
    meta: {
      layout: 'home',
      title: '首页'
    },
    id: 1,
    pId: 10,
    sort: 1,
  }
]
