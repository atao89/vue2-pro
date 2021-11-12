/*
 * @Descripttion: 
 * @version: 
 * @Author: 周涛
 * @Date: 2021-09-22 15:46:26
 * @LastEditors: 周涛
 * @LastEditTime: 2021-11-12 17:30:46
 */
export default [
  {
    path: '/404',
    name: '404',
    component: () => import(/* webpackChunkName: "404" */ '@/views/404.vue'),
    hidden: true,
    meta: {
      layout: 'basic',
      title: 'page-404',
      label: 'ads'
    },
  }, {
    path: '*',
    redirect: '/404',
    hidden: true,
  }
]