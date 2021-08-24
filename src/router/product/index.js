/*
 * @Descripttion: ''
 * @version: ''
 * @Author: 周涛
 * @Date: 2021-07-14 21:24:06
 * @LastEditors: 周涛
 * @LastEditTime: 2021-08-25 00:34:03
 */
export default [
  {
    path: '/product',
    name: 'Product',
    // component: () => import(/* webpackChunkName: "category" */ '@/views/product/index.vue'),
    redirect: '/category',
    meta: {
      title: '产品维护'
    },
    children: [{
      path: '/product/category',
      name: 'Category',
      component: () => import(/* webpackChunkName: "category" */ '@/views/product/Category.vue'),
      meta: {
        title: '品类管理'
      }
    }, {
      path: '/product/goods',
      name: 'Goods',
      component: () => import(/* webpackChunkName: "goods" */ '@/views/product/Goods.vue'),
      meta: {
        title: '商品管理'
      }
    }]
  }
]
