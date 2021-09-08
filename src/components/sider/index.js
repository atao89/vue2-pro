/*
 * @Descripttion: ''
 * @version: ''
 * @Author: 周涛
 * @Date: 2021-08-16 18:53:16
 * @LastEditors: 周涛
 * @LastEditTime: 2021-09-08 19:38:13
 */
import { mapGetters } from 'vuex'
// import menuConfig from '@/config/DynamicRoutes'
import './sider.scss'
export default {
  name: 'sider',
  data() {
    return {
      // menuConfig,
      defaultActive: ''
    }
  },
  computed: {
    ...mapGetters(['getMenuCollapse', 'getMenuStyle', 'getCurrentMenuStyle']),
    routes() {
      // console.log('menu中:', this.$router.options.routes)
      let routes = this.generateRoute(this.$router.options.routes);
      // console.log('routes====', routes)
      return routes;
    },
  },
  created() {
    this.defaultActive = this.$route.path;
  },
  methods: {
    handleOpen(key, keyPath) {
      // console.log(key, keyPath)
    },
    handleClose(key, keyPath) {
      // console.log(key, keyPath)
    },
    renderMenu(menus) {
      return menus.map(menu => {
        if (menu.children) {
          return (
            <el-submenu index={menu.path}>
              <template slot="title">
                <span>{menu.meta.title}</span>
              </template>
              {this.renderMenu(menu.children)}
            </el-submenu>
          )
        } else {
          return (
            <el-menu-item index={menu.path}>
              <span slot="title">{menu.meta.title}</span>
            </el-menu-item>
          )
        }
      })
    },
    // 递归处理树形数据
    generateRoute(data = []) {
      // console.log(data);
      // 删除 所有 children,以防止多次调用
      data.forEach(function (item) {
        delete item.children;
      });

      // 将数据存储为 以 id 为 KEY 的 map 索引数据列
      var map = {};
      data.forEach(function (item) {
        map[item.id] = item;
      });
      //        console.log(map);
      var val = [];
      data.forEach(function (item) {
        // 以当前遍历项，的pid,去map对象中找到索引的id
        var parent = map[item.pId];
        // 好绕啊，如果找到索引，那么说明此项不在顶级当中,那么需要把此项添加到，他对应的父级中
        if (parent) {
          (parent.children || (parent.children = [])).push(item);
        } else {
          //如果没有在map中找到对应的索引ID,那么直接把 当前的item添加到 val结果集中，作为顶级
          val.push(item);
        }
      });
      return val;
    }
  },
  // <div
  //   class="sider-logo"
  //   style={{
  //     color: this.getMenuStyle.logoColor,
  //     backgroundColor: this.getMenuStyle.logoBackgroundColor
  //   }}>
  // </div>
  render() {
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
          {this.renderMenu(this.routes)}
        </el-menu>
      </div>
    )
  }
}
// {this.renderMenu(this.menuConfig)}