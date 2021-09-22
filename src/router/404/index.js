/*
 * @Descripttion: 
 * @version: 
 * @Author: 周涛
 * @Date: 2021-09-22 15:46:26
 * @LastEditors: 周涛
 * @LastEditTime: 2021-09-22 16:03:12
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
      // id: 3,
      // pId: 30
    //   icon: 'avatar'
    }
  ]