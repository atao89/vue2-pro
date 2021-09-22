/*
 * @Descripttion: 
 * @version: 
 * @Author: 周涛
 * @Date: 2021-09-22 16:44:10
 * @LastEditors: 周涛
 * @LastEditTime: 2021-09-22 16:45:26
 */
export default [
    {
        path: '/drag',
        naem: 'Drag',
        component: () => import(/* webpackChunkName: "Drag" */ '@/views/drag/index.vue'),
        meta: {
            title: '拖拽列表',
            label: 'drag'
        },
        // id: 11,
        // pId: 110,
        icon: 'rise',
        sort: 10
    }
]