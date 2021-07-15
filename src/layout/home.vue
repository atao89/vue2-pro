<template>
  <el-container class="container">
    <el-header>Header</el-header>
    <el-container class="main">
      <el-aside width="200px">
        <Sider />
      </el-aside>
      <el-main>
        <div class="view">
          <router-view />
        </div>
      </el-main>
    </el-container>
  </el-container>
</template>
<script>
import Sider from '@/components/sider'
export default {
  name: 'home',
  components: {
    Sider
  }
}
</script>
<style lang="scss" scoped>
.container {
  height: 100%;
  display: flex;
  flex-direction: column;
}
.el-header {
  background-color: #fff;
  color: #333;
  text-align: center;
  height: 60px;
  line-height: 60px;
}
.main {
  flex: 1;
  overflow-x: hidden;
}
.el-aside {
  background-color: #d8222a;
  overflow-x: hidden;
}
.content-header {
  height: 40px !important;
  line-height: 40px !important;
  background: #f0f2f5;
  padding-left: 20px;
  padding-right: 36px;
  .breadcrumb {
    background: #fff;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
  }
}
.el-main {
  background-color: #f0f2f5;
  overflow-x: hidden;
}
.view {
  background: #fff;
  border-radius: 5px;
  padding: 20px;
}
</style>
