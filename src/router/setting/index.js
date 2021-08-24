/*
 * @Descripttion: 
 * @version: 
 * @Author: 周涛
 * @Date: 2021-08-16 17:56:46
 * @LastEditors: 周涛
 * @LastEditTime: 2021-08-25 00:34:13
 */
export default [
  {
    path: '/setting',
    name: 'Setting',
    // component: () => import(/* webpackChunkName: "user" */ '@/views/setting/index.vue'),
    redirect: '/user',
    meta: {
      title: '系统设置'
    },
    children: [{
      path: '/setting/user',
      name: 'User',
      component: () => import(/* webpackChunkName: "user" */ '@/views/setting/User.vue'),
      meta: {
        title: '用户设置'
      }
    }, {
      path: '/setting/role',
      name: 'Role',
      component: () => import(/* webpackChunkName: "role" */ '@/views/setting/Role.vue'),
      meta: {
        title: '角色设置'
      }
    }]
  }
]
