/*
 * @Descripttion: 
 * @version: 
 * @Author: 周涛
 * @Date: 2021-08-16 17:56:46
 * @LastEditors: 周涛
 * @LastEditTime: 2021-09-17 15:00:50
 */
export default [
  {
    path: '/setting',
    redirect: '/setting/user',
    component: () => import(/* webpackChunkName: "setting" */ '@/views/setting/index.vue'),
    meta: {
      title: '系统设置',
      label: 'setting'
    },
    // id: 7,
    // pId: 70,
    icon: 'mac',
    sort: 6,
    children: [{
      path: '/setting/user',
      name: 'User',
      component: () => import(/* webpackChunkName: "user" */ '@/views/setting/User.vue'),
      meta: {
        title: '用户设置',
        label: 'user'
      },
      // id: 701,
      // pId: 7
    }, {
      path: '/setting/role',
      name: 'Role',
      component: () => import(/* webpackChunkName: "role" */ '@/views/setting/Role.vue'),
      meta: {
        title: '角色设置',
        label: 'role'
      },
      // id: 702,
      // pId: 7
    }]
  }
]
