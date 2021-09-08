/*
 * @Descripttion: 
 * @version: 
 * @Author: 周涛
 * @Date: 2021-08-16 17:56:46
 * @LastEditors: 周涛
 * @LastEditTime: 2021-09-08 19:41:45
 */
export default [
  {
    path: '/setting',
    redirect: '/setting/user',
    component: () => import(/* webpackChunkName: "setting" */ '@/views/setting/index.vue'),
    meta: {
      title: '系统设置'
    },
    id: 7,
    pId: 70
  },
  {
    path: 'user',
    name: 'User',
    component: () => import(/* webpackChunkName: "user" */ '@/views/setting/User.vue'),
    meta: {
      title: '用户设置'
    },
    id: 701,
    pId: 7
  }, {
    path: 'role',
    name: 'Role',
    component: () => import(/* webpackChunkName: "role" */ '@/views/setting/Role.vue'),
    meta: {
      title: '角色设置'
    },
    id: 702,
    pId: 7
  }
]
