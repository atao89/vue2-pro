/*
 * @Descripttion: ''
 * @version: ''
 * @Author: 周涛
 * @Date: 2021-07-14 21:24:06
 * @LastEditors: 周涛
 * @LastEditTime: 2021-09-08 19:34:38
 */
export default [
  {
    path: '/product',
    redirect: '/product/category',
    meta: {
      title: '产品中心'
    },
    id: 6,
    pId: 60
  },
  {
    path: 'category',
    name: 'Category',
    component: () => import(/* webpackChunkName: "category" */ '@/views/product/Category.vue'),
    meta: {
      title: '品类管理'
    },
    id: 601,
    pId: 6,
  }, {
    path: 'goods',
    name: 'Goods',
    component: () => import(/* webpackChunkName: "goods" */ '@/views/product/Goods.vue'),
    meta: {
      title: '商品管理'
    },
    id: 602,
    pId: 6,
  }
]
