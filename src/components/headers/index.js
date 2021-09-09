/*
 * @Descripttion: 
 * @version: 
 * @Author: 周涛
 * @Date: 2021-08-18 16:06:20
 * @LastEditors: 周涛
 * @LastEditTime: 2021-09-10 01:01:02
 */
import store, { types } from '../../store'
import { mapGetters } from 'vuex'
// import menuConfig from '@/config/DynamicRoutes'
import logo from "@/assets/images/logo.png";
import './headers.scss'
export default {
  name: 'headers',
  data() {
    return {
      //   menuConfig,
      //   defaultActive: ''
    }
  },
  computed: {
    ...mapGetters(['getMenuCollapse', 'getMenuStyle', 'getCurrentMenuStyle'])
  },
  created() {
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
    handleCommand(command) {
      this.$router.push('/' + command);
    },
    loginout() {
      this.$confirm('此操作将退出系统, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.$router.push('/login');
        this.ls.clearAll();
      }).catch(() => { });
    },
    goHome() {
      this.$router.push('/');
    },
    openOrCloseMenu() {
      store.dispatch(types.MENU_COLLAPSE, !store.state[types.MENU_COLLAPSE])
    },
  },

  render() {
    const icon =<svg-icon icon-class={'menu-fold'} class-name={'menu-fold'} onclick={this.openOrCloseMenu} />
    return (
      <div
        class="headers"
        style={{
          backgroundColor: this.getMenuStyle.backgroundColor
        }}>
        <div class="logo" style={{ 'width': this.getMenuCollapse ? '64px' : '200px' }}>
          <img src={logo} class="logo-img" onclick={this.goHome} />
        </div>
        <div class="header-info">
          <div class="header-info-left">
            {icon}
            <h3 class="system-name">{process.env.VUE_APP_SYSTEM_NAME}</h3>
          </div>
          <div class="header-info-right">
            <el-dropdown class="dropdown" oncommand={this.handleCommand} placement={'bottom-start'}>
              <span class="el-dropdown-link">
                快捷入口
              </span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item divided command={'news'}>消息中心</el-dropdown-item>
                <el-dropdown-item divided command={'setting'}>系统设置</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
            <i class="el-icon-user"></i>
            <span>{this.ls.getStore('USER_INFO') ? '欢迎您, ' + this.ls.getStore('USER_INFO') : ''}</span>
            <span class="loginout" onclick={this.loginout}>{this.ls.getStore('USER_INFO') ? ' 退出' : ''}</span>
          </div>
        </div>
      </div >
    )
  }
}