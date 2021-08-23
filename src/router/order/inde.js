/*
 * @Descripttion: 
 * @version: 
 * @Author: 周涛
 * @Date: 2021-08-23 16:34:15
 * @LastEditors: 周涛
 * @LastEditTime: 2021-08-23 17:37:50
 */
export default [
    {
        path: '/order',
        name: 'Order',
        component: () => import(/* webpackChunkName: "order" */ '@/views/order/index.vue'),
        meta: {
          title: '订单管理'
        }
    }
]