import { mapGetters } from 'vuex'
import menuConfig from '@/config/DynamicRoutes'
import './sider.scss'
export default {
  name: 'sider',
  data () {
    return {
      menuConfig,
      defaultActive: ''
    }
  },
  computed: {
    ...mapGetters(['getMenuCollapse', 'getMenuStyle', 'getCurrentMenuStyle'])
  },
  created () {
    this.defaultActive = this.$route.path
  },
  methods: {
    handleOpen (key, keyPath) {
      // console.log(key, keyPath)
    },
    handleClose (key, keyPath) {
      // console.log(key, keyPath)
    },
    renderMenu (menus) {
      return menus.map(menu => {
        if (menu.children) {
          return (
            <div>{this.getCurrentMenuStyle}</div>
          )
          // return (
          //   <el-submenu index={menu.path}>
          //     <template slot="title">
          //       <span>{menu.label}</span>
          //     </template>
          //     {this.renderMenu(menu.children)}
          //   </el-submenu>
          // )
        } else {
          return (
            <el-menu-item index={menu.path}>
              <span slot="title">{menu.label}</span>
            </el-menu-item>
          )
        }
      })
    }
  },
  // <div
  //   class="sider-logo"
  //   style={{
  //     color: this.getMenuStyle.logoColor,
  //     backgroundColor: this.getMenuStyle.logoBackgroundColor
  //   }}>
  // </div>
  render () {
    return (
      <div
        class="sider"
        style={{
          backgroundColor: this.getMenuStyle.backgroundColor
        }}>
        <el-menu
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
        </el-menu>
      </div>
    )
  }
}
