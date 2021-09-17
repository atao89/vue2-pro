/*
 * @Descripttion: 
 * @version: 
 * @Author: 周涛
 * @Date: 2021-09-10 13:17:07
 * @LastEditors: 周涛
 * @LastEditTime: 2021-09-17 15:15:04
 */
export default [
    {
        path: '/test',
        naem: 'Test',
        component: () => import(/* webpackChunkName: "test" */ '@/views/test/index.vue'),
        meta: {
            title: '测试模块',
            label: 'test'
        },
        // id: 8,
        // pId: 80,
        icon: 'compression',
        sort: 7
    }
]