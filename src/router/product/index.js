/*
 * @Descripttion: ''
 * @version: ''
 * @Author: 周涛
 * @Date: 2021-07-14 21:24:06
 * @LastEditors: 周涛
 * @LastEditTime: 2021-09-09 00:16:10
 */
export default [
  {
    path: '/product',
    redirect: '/product/category',
    component: () => import(/* webpackChunkName: "product" */ '@/views/product/index.vue'),
    meta: {
      title: '产品中心'
    },
    id: 6,
    pId: 60,
    sort: 5,
    children: [{
      path: '/product/category',
      name: 'Category',
      component: () => import(/* webpackChunkName: "category" */ '@/views/product/Category.vue'),
      meta: {
        title: '品类管理'
      },
      id: 601,
      pId: 6,
    }, {
      path: '/product/goods',
      redirect: '/product/goods/test1',
      component: () => import(/* webpackChunkName: "goods" */ '@/views/product/Goods.vue'),
      meta: {
        title: '商品管理'
      },
      id: 602,
      pId: 6,
      children: [{
        path: '/product/goods/test1',
        name: 'Test1',
        component: () => import(/* webpackChunkName: "test1" */ '@/views/product/Test1.vue'),
        meta: {
          title: 'Test1'
        },
        id: 6021,
        pId: 602,
      }, {
        path: '/product/goods/test2',
        name: 'Test2',
        component: () => import(/* webpackChunkName: "test2" */ '@/views/product/Test2.vue'),
        meta: {
          title: 'Test2'
        },
        id: 6022,
        pId: 602,
      }]
    }]
  }
]
