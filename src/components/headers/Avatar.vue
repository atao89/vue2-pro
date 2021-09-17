<!--
 * @Descripttion: 
 * @version: 
 * @Author: 周涛
 * @Date: 2021-09-17 15:39:11
 * @LastEditors: 周涛
 * @LastEditTime: 2021-09-17 16:19:18
-->
<template>
  <el-dropdown
    class="dropdown"
    @visible-change="dropdownVivibleHandle"
    @command="handleDropdownCommand"
  >
    <div
      class="icon-item"
      :class="{
        opened: dropdownVivible,
      }"
    >
      <el-avatar size="small" :src="this.avatarUrl"></el-avatar>
    </div>
    <el-dropdown-menu slot="dropdown">
      <el-dropdown-item
        v-for="item in dropdownList"
        :key="item.name"
        :divided="item.divided"
        :command="item"
      >
        <svg-icon :icon-class="item.icon"></svg-icon>
        {{ item.name }}
      </el-dropdown-item>
    </el-dropdown-menu>
  </el-dropdown>
</template>

<script>
export default {
  name: "avatar",
  data() {
    return {
      dropdownVivible: false,
      dropdownList: [
        {
          name: "个人中心",
          icon: "person",
        },
        {
          name: "个人设置",
          icon: "setting",
        },
        // {
        //   name: "退出登录",
        //   divided: true,
        //   icon: "login-out",
        // },
      ],
      avatarUrl:
        "https://img0.baidu.com/it/u=1900407639,2242425156&fm=26&fmt=auto&gp=0.jpg",
    };
  },
  methods: {
    dropdownVivibleHandle(visible) {
      this.dropdownVivible = visible;
    },
    handleDropdownCommand(dropdownItem) {
      switch (dropdownItem.name) {
        case "退出登录":
          this.$router.replace("/login");
          break;
        default:
          this.$message.info(`click on item ${dropdownItem.name}`);
          break;
      }
    },
  },
};
</script>