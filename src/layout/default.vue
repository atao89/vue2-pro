<!--
 * @Descripttion: 
 * @version: 
 * @Author: 周涛
 * @Date: 2021-08-16 17:56:46
 * @LastEditors: 周涛
 * @LastEditTime: 2021-08-19 18:20:09
-->
<template>
  <el-container class="container">
    <el-header>
      <Headers />
    </el-header>
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
import Headers from '@/components/headers'
import Sider from '@/components/sider'
export default {
  name: 'default',
  components: {
    Sider,
    Headers
  },
  data () {
    return {}
  },
  methods: {}
}
</script>
<style lang="scss" scoped>
</style>
