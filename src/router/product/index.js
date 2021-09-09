/*
 * @Descripttion: ''
 * @version: ''
 * @Author: 周涛
 * @Date: 2021-07-14 21:24:06
 * @LastEditors: 周涛
 * @LastEditTime: 2021-09-09 22:49:31
 */
export default [
  {
    path: '/product',
    redirect: '/product/category',
    component: () => import(/* webpackChunkName: "product" */ '@/views/product/index.vue'),
    meta: {
      title: '产品中心'
    },
    // id: 6,
    // pId: 60,
    icon: 'drawer',
    sort: 5,
    children: [{
      path: '/product/category',
      name: 'Category',
      component: () => import(/* webpackChunkName: "category" */ '@/views/product/Category.vue'),
      meta: {
        title: '品类管理'
      },
      // id: 601,
      // pId: 6,
    }, {
      path: '/product/goods',
      redirect: '/product/goods/test1',
      component: () => import(/* webpackChunkName: "goods" */ '@/views/product/Goods.vue'),
      meta: {
        title: '商品管理'
      },
      // id: 602,
      // pId: 6,
      children: [{
        path: '/product/goods/test1',
        name: 'Test1',
        component: () => import(/* webpackChunkName: "test1" */ '@/views/product/Test1.vue'),
        meta: {
          title: 'Test1'
        },
        // id: 6021,
        // pId: 602,
      }, {
        path: '/product/goods/test2',
        name: 'Test2',
        component: () => import(/* webpackChunkName: "test2" */ '@/views/product/Test2.vue'),
        meta: {
          title: 'Test2'
        },
        // id: 6022,
        // pId: 602,
      }, {
        path: '/product/goods/test3',
        name: 'Test3',
        component: () => import(/* webpackChunkName: "test1" */ '@/views/product/Test1.vue'),
        meta: {
          title: 'Test3'
        },
        // id: 6021,
        // pId: 602,
      }, {
        path: '/product/goods/test4',
        name: 'Test4',
        component: () => import(/* webpackChunkName: "test2" */ '@/views/product/Test2.vue'),
        meta: {
          title: 'Test4'
        },
        // id: 6022,
        // pId: 602,
      }, {
        path: '/product/goods/test5',
        name: 'Test5',
        component: () => import(/* webpackChunkName: "test1" */ '@/views/product/Test1.vue'),
        meta: {
          title: 'Test5'
        },
        // id: 6021,
        // pId: 602,
      }, {
        path: '/product/goods/test6',
        name: 'Test6',
        component: () => import(/* webpackChunkName: "test2" */ '@/views/product/Test2.vue'),
        meta: {
          title: 'Test6'
        },
        // id: 6022,
        // pId: 602,
      }, {
        path: '/product/goods/test7',
        name: 'Test7',
        component: () => import(/* webpackChunkName: "test1" */ '@/views/product/Test1.vue'),
        meta: {
          title: 'Test7'
        },
        // id: 6021,
        // pId: 602,
      }, {
        path: '/product/goods/test8',
        name: 'Test8',
        component: () => import(/* webpackChunkName: "test2" */ '@/views/product/Test2.vue'),
        meta: {
          title: 'Test8'
        },
        // id: 6022,
        // pId: 602,
      }, {
        path: '/product/goods/test9',
        name: 'Test9',
        component: () => import(/* webpackChunkName: "test1" */ '@/views/product/Test1.vue'),
        meta: {
          title: 'Test9'
        },
        // id: 6021,
        // pId: 602,
      }, {
        path: '/product/goods/test10',
        name: 'Test10',
        component: () => import(/* webpackChunkName: "test2" */ '@/views/product/Test2.vue'),
        meta: {
          title: 'Test10'
        },
        // id: 6022,
        // pId: 602,
      }]
    }]
  }
]
