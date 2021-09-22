/*
 * @Descripttion: 
 * @version: 
 * @Author: 周涛
 * @Date: 2021-08-16 17:56:46
 * @LastEditors: 周涛
 * @LastEditTime: 2021-09-22 15:47:12
 */
export default [
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "login" */ '@/views/login/index.vue'),
    hidden: true,
    meta: {
      layout: 'basic',
      title: '登录-vue2-pro'
    },
    // id: 3,
    // pId: 30
    // icon: 'avatar'
  }
]
