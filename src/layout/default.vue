<!--
 * @Descripttion: 
 * @version: 
 * @Author: 周涛
 * @Date: 2021-08-16 17:56:46
 * @LastEditors: 周涛
 * @LastEditTime: 2021-09-10 00:35:09
-->
<template>
  <el-container class="container">
    <el-header>
      <Headers />
    </el-header>
    <el-container class="main">
      <!-- <el-aside width="200px"> -->
      <el-aside :style="{'width': (getMenuCollapse ? '64px' : '200px')}">
        <el-scrollbar class="page-scroll">
          <Sider />
        </el-scrollbar>
      </el-aside>
      <el-main>
        <Breadcrumb />
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
import { mapGetters } from 'vuex'
import Headers from '@/components/headers'
import Sider from '@/components/sider'
import Breadcrumb from '@/components/breadcrumb'
export default {
  name: 'default',
  components: {
    Sider,
    Headers,
    Breadcrumb
  },
  data () {
    return {}
  },
  computed: {
    ...mapGetters(['getMenuCollapse'])
  },
  methods: {}
}
</script>
<style lang="scss" scoped>
</style>
