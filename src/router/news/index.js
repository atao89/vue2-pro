/*
 * @Descripttion: ''
 * @version: ''
 * @Author: 周涛
 * @Date: 2021-07-14 21:24:06
 * @LastEditors: 周涛
 * @LastEditTime: 2022-02-21 22:34:32
 */
export default [
  {
    path: '/news',
    name: 'News',
    component: () => import(/* webpackChunkName: "news" */ '@/views/news/index.vue'),
    meta: {
      title: '消息中心',
      label: 'news'
    },
    // id: 4,
    // pId: 40,
    sort: 3,
    icon: 'notice'
  },
  {
    path: '/news/detail',
    name: 'NewsDetail',
    component: () => import(/* webpackChunkName: "detail" */ '@/views/news/detail.vue'),
    hidden: true,
    meta: {
      title: '消息详情',
      label: 'detail'
    },
  }
]
