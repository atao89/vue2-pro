export default [
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "login" */ '@/views/login/index.vue'),
    meta: {
      layout: 'login',
      titile: '登录-vue2-pro'
    }
  }
]
