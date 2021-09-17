/*
 * @Descripttion: 
 * @version: 
 * @Author: 周涛
 * @Date: 2021-09-16 17:02:00
 * @LastEditors: 周涛
 * @LastEditTime: 2021-09-17 14:58:44
 */
export default [
    {
        path: '/markdown',
        naem: 'Markdown',
        component: () => import(/* webpackChunkName: "markdown" */ '@/views/markdown/index.vue'),
        meta: {
            title: 'Markdown编辑器',
            label: 'markdown'
        },
        // id: 9,
        // pId: 90,
        icon: 'markdown',
        sort: 8
    }
]