/*
 * @Descripttion: ''
 * @version: ''
 * @Author: 周涛
 * @Date: 2021-07-14 21:12:54
 * @LastEditors: 周涛
 * @LastEditTime: 2021-07-15 00:08:26
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './components'
import './lib/element-ui'
import DefaultLayout from './layout/default'
import HomeLayout from './layout/home'
import LoginLayout from './layout/login'

Vue.component('default-layout', DefaultLayout)
Vue.component('home-layout', HomeLayout)
Vue.component('login-layout', LoginLayout)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
