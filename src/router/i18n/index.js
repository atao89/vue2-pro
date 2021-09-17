/*
 * @Descripttion: 
 * @version: 
 * @Author: 周涛
 * @Date: 2021-09-17 14:20:56
 * @LastEditors: 周涛
 * @LastEditTime: 2021-09-17 14:58:25
 */
export default [
    {
        path: '/i18n',
        naem: 'I18n',
        component: () => import(/* webpackChunkName: "I18n" */ '@/views/i18n/index.vue'),
        meta: {
            title: 'i18n-多语言',
            label: 'i18n'
        },
        // id: 10,
        // pId: 100,
        icon: 'rise',
        sort: 9
    }
]