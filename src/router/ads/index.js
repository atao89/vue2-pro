/*
 * @Descripttion: 
 * @version: 
 * @Author: 周涛
 * @Date: 2021-08-23 16:35:12
 * @LastEditors: 周涛
 * @LastEditTime: 2021-09-17 15:05:58
 */
export default [
    {
        path: '/ads',
        name: 'Ads',
        component: () => import(/* webpackChunkName: "ads" */ '@/views/ads/index.vue'),
        meta: {
            title: '广告模块',
            label: 'ads'
        },
        // id: 2,
        // pId: 20,
        sort: 2,
        icon: 'android'
    }
]