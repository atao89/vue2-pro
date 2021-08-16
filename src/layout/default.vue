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
        <el-scrollbar class="page-scroll">
          <div class="view">
            <router-view />
          </div>
        </el-scrollbar>
      </el-main>
    </el-container>
  </el-container>
</template>
<script>
import Sider from '@/components/sider'
export default {
  name: 'default',
  components: {
    Sider
  },
  data () {
    return {}
  },
  methods: {}
}
</script>
<style lang="scss" scoped>
</style>
