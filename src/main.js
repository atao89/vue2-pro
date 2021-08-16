/*
 * @Descripttion: ''
 * @version: ''
 * @Author: 周涛
 * @Date: 2021-07-14 21:12:54
 * @LastEditors: 周涛
 * @LastEditTime: 2021-08-10 15:38:10
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/stylues/common.scss'
import './components'
import './lib/element-ui'
import DefaultLayout from './layout/default'
import HomeLayout from './layout/home'
import LoginLayout from './layout/login'

Vue.component('default-layout', DefaultLayout)
Vue.component('home-layout', HomeLayout)
Vue.component('login-layout', LoginLayout)

Vue.config.productionTip = false
// 对将要进入的路由进行权判断
router.beforeEach((to, from, next) => {
  // console.log(to,from);
  if (to.path.indexOf('login') < 0 && !window.sessionStorage.getItem('USER_INFO')) {
      router.replace('login');
      next();
  }
  next();
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
