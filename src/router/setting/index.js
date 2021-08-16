export default [
  {
    path: '/setting',
    name: 'Setting',
    component: () => import(/* webpackChunkName: "prodect" */ '@/views/setting/index.vue')
  }
]
