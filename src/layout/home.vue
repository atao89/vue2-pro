<template>
  <el-container class="container">
    <el-header>Header</el-header>
    <el-container class="main">
      <el-aside width="200px">
        <el-scrollbar class="page-scroll">
          <Sider />
        </el-scrollbar>
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
<style lang="scss">
</style>
