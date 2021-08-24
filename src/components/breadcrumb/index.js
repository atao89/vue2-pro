/*
 * @Descripttion: 
 * @version: 
 * @Author: 周涛
 * @Date: 2021-08-23 15:33:47
 * @LastEditors: 周涛
 * @LastEditTime: 2021-08-24 23:45:52
 */
import './breadcrumb.scss'
import menuConfig from '@/config/DynamicRoutes'
export default {
    name: 'headers',
    data() {
        return {
            menuConfig,
            levelList: null,
        }
    },
    created() {
        this.getBreadList();
    },
    watch: {
        $route() {
            this.getBreadList();
        }
    },
    methods: {
        getBreadList() {
            let matched = this.$route.matched.filter(item => item.name); // $route.matched 将会是一个包含从上到下的所有对象 (副本)。
            const first = matched[0];
            if (first && first.name !== 'Home') {
                matched = [{ path: '/home', meta: { title: '首页' } }].concat(matched);
            }
            this.levelList = matched;
        },
        renderBreadcrumb(menus) {
            // console.log('menus', menus)
            if (menus && menus.length) {
                return menus.map(menu => {
                    if (menu.redirect && menu.redirect == 'home' || menu.path == '/home') {
                        return (
                            <el-breadcrumb-item to={{ path: '/home' }}>
                                {menu.meta.title}
                            </el-breadcrumb-item>
                        )
                    } else {
                        return (
                            <el-breadcrumb-item>
                                {menu.meta.title}
                            </el-breadcrumb-item>
                        )
                    }

                })
            }
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
                    {this.renderBreadcrumb(this.levelList)}
                </el-breadcrumb>
            </div >
        )
    }
}