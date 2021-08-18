/*
 * @Descripttion: 
 * @version: 
 * @Author: 周涛
 * @Date: 2021-08-18 16:06:20
 * @LastEditors: 周涛
 * @LastEditTime: 2021-08-18 17:06:08
 */
import { mapGetters } from 'vuex'
// import menuConfig from '@/config/DynamicRoutes'
import logo from "@/assets/images/logo.png";
import './headers.scss'
export default {
  name: 'headers',
  data () {
    return {
    //   menuConfig,
    //   defaultActive: ''
    }
  },
  computed: {
    ...mapGetters(['getMenuCollapse', 'getMenuStyle', 'getCurrentMenuStyle'])
  },
  created () {
    // this.defaultActive = this.$route.path
  },
  methods: {
    // renderMenu (menus) {
    //   return menus.map(menu => {
    //     if (menu.children) {
    //       return (
    //         <el-submenu index={menu.path}>
    //           <template slot="title">
    //             <span>{menu.label}</span>
    //           </template>
    //           {this.renderMenu(menu.children)}
    //         </el-submenu>
    //       )
    //     } else {
    //       return (
    //         <el-menu-item index={menu.path}>
    //           <span slot="title">{menu.label}</span>
    //         </el-menu-item>
    //       )
    //     }
    //   })
    // }
  },
  
  render () {
    return (
      <div
        class="headers"
        style={{
          backgroundColor: this.getMenuStyle.backgroundColor
        }}>
        <img src={logo} class="logo" />
        <h3 class="system-name">{process.env.VUE_APP_SYSTEM_NAME}</h3>
        
        {/* <el-menu
          default-active={this.defaultActive}
          class={[
            'el-menu-vertical-demo',
            this.getCurrentMenuStyle === 'light' ? 'menu-light' : 'menu-dark'
          ]}
          background-color={this.getMenuStyle.backgroundColor}
          text-color={this.getMenuStyle.textColor}
          active-text-color={this.getMenuStyle.activeTextColor}
          router={true}
          collapse={this.getMenuCollapse}
          open={this.handleOpen}
          close={this.handleClose}>
          {this.renderMenu(this.menuConfig)}
        </el-menu> */}
      </div>
    )
  }
}