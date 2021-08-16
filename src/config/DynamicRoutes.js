/*
 * @Descripttion: 
 * @version: 
 * @Author: 周涛
 * @Date: 2021-07-15 23:21:11
 * @LastEditors: 周涛
 * @LastEditTime: 2021-08-16 15:49:01
 */
export default [
  {
    path: '/home',
    label: '首页'
  }, {
    path: '/news',
    label: '消息中心'
  }, {
    path: '/product',
    label: '产品维护'
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
