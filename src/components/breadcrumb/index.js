/*
 * @Descripttion: 
 * @version: 
 * @Author: 周涛
 * @Date: 2021-08-23 15:33:47
 * @LastEditors: 周涛
 * @LastEditTime: 2021-09-17 15:18:19
 */
import './breadcrumb.scss'
export default {
    name: 'breadcrumb',
    data() {
        return {}
    },
    computed: {
        matched() {
            return this.$route.matched;
        }
    },
    methods: {
        renderBreadcrumb(menus) {
            return menus.map(menu => {
                return (
                    // <el-breadcrumb-item>{menu.meta.title}</el-breadcrumb-item>
                    <el-breadcrumb-item>{this.$t(menu.meta.label)}</el-breadcrumb-item>
                )
            })
        },
    },
    render() {
        return (
            <div
                class="breadcrumb"
                style={{
                    backgroundColor: '#fff'
                }}>
                <el-breadcrumb separator-class="el-icon-arrow-right">
                    <el-breadcrumb-item to={{ path: '/' }}>{this.$t('home')}</el-breadcrumb-item>
                    {this.renderBreadcrumb(this.matched)}
                </el-breadcrumb>
                <div id="cnzz_box"></div>
            </div >
        )
    }
}