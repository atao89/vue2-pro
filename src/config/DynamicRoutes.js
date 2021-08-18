/*
 * @Descripttion: 
 * @version: 
 * @Author: 周涛
 * @Date: 2021-07-15 23:21:11
 * @LastEditors: 周涛
 * @LastEditTime: 2021-08-18 15:39:29
 */
export default [
  {
    path: '/home',
    label: '首页'
  }, {
    path: '/product',
    label: '产品维护',
    children: [{
      path: '/category',
      label: '品类管理',
    }, {
      path: '/goods',
      label: '商品管理',
    }]
  },
  {
    path: '/order',
    label: '订单管理'
  }, {
    path: '/ads',
    label: '广告模块'
  }, {
    path: '/news',
    label: '消息中心'
  }, {
    path: '/setting',
    label: '系统设置',
    children: [{
      path: '/user',
      label: '用户设置'
    }, {
      path: '/role',
      label: '角色设置'
    }]
  }
]
