/*
 * @Descripttion: 
 * @version: 
 * @Author: 周涛
 * @Date: 2021-08-23 16:35:12
 * @LastEditors: 周涛
 * @LastEditTime: 2021-09-08 22:20:59
 */
export default [
    {
        path: '/ads',
        name: 'Ads',
        component: () => import(/* webpackChunkName: "ads" */ '@/views/ads/index.vue'),
        meta: {
            title: '广告模块'
        },
        id: 2,
        pId: 20,
        sort: 2,
    }
]