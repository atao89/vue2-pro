/*
 * @Descripttion: ''
 * @version: ''
 * @Author: 周涛
 * @Date: 2021-07-14 21:24:06
 * @LastEditors: 周涛
 * @LastEditTime: 2021-09-08 19:33:48
 */
export default [
  {
    path: '/news',
    name: 'News',
    component: () => import(/* webpackChunkName: "news" */ '@/views/news/index.vue'),
    meta: {
      title: '消息中心'
    },
    id: 4,
    pId: 40
  }
]
