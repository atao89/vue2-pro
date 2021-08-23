/*
 * @Descripttion: ''
 * @version: ''
 * @Author: 周涛
 * @Date: 2021-07-14 21:24:06
 * @LastEditors: 周涛
 * @LastEditTime: 2021-08-23 17:33:30
 */
export default [
  {
    path: '/news',
    name: 'News',
    component: () => import(/* webpackChunkName: "news" */ '@/views/news/index.vue'),
    meta: {
      title: '消息中心'
    }
  }
]
