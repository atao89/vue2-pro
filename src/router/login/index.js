/*
 * @Descripttion: 
 * @version: 
 * @Author: 周涛
 * @Date: 2021-08-16 17:56:46
 * @LastEditors: 周涛
 * @LastEditTime: 2021-09-09 18:36:31
 */
export default [
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "login" */ '@/views/login/index.vue'),
    hidden: true,
    meta: {
      layout: 'login',
      title: '登录-vue2-pro'
    },
    id: 3,
    pId: 30
  }
]
