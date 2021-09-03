/*
 * @Descripttion: 
 * @version: 
 * @Author: 周涛
 * @Date: 2021-08-23 15:33:47
 * @LastEditors: 周涛
 * @LastEditTime: 2021-08-23 17:00:50
 */
import './breadcrumb.scss'
export default {
    name: 'headers',
    data() {
        return {}
    },
    watch: {
        $route() {
            this.getBreadcrumb();
        }
    },
    created() {
        this.getBreadcrumb();
    },
    methods: {
        getBreadcrumb() {
            // console.log(this.$route)
            // let matched = this.$route.matched.filter(item=>item.name);
        },
        // renderBreadcrumb(menus) {
        //     return menus.map(menu => {
        //         return (
        //             <el-breadcrumb-item>活动详情</el-breadcrumb-item>
        //         )
        //     })
        // },
    },

    render() {
        return (
            <div
                class="breadcrumb"
                style={{
                    backgroundColor: '#fff'
                }}>
                <el-breadcrumb separator-class="el-icon-arrow-right">
                    <el-breadcrumb-item to={{ path: '/' }}>首页</el-breadcrumb-item>
                    {/* {this.renderBreadcrumb()} */}
                </el-breadcrumb>
            </div >
        )
    }
}