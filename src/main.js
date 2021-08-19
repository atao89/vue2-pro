/*
 * @Descripttion: ''
 * @version: ''
 * @Author: 周涛
 * @Date: 2021-07-14 21:12:54
 * @LastEditors: 周涛
 * @LastEditTime: 2021-08-19 18:08:03
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './components'
import './lib/element-ui'
import ls from './utils/storage'
import DefaultLayout from './layout/default'
import HomeLayout from './layout/home'
import LoginLayout from './layout/login'
import './assets/stylues/common.scss'

Vue.component('default-layout', DefaultLayout)
Vue.component('home-layout', HomeLayout)
Vue.component('login-layout', LoginLayout)

Vue.prototype.ls = ls;

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
