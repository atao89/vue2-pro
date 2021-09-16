/*
 * @Descripttion: 
 * @version: 
 * @Author: 周涛
 * @Date: 2021-09-16 14:04:17
 * @LastEditors: 周涛
 * @LastEditTime: 2021-09-16 15:45:27
 */
import Mock from 'mockjs'
import { login } from './login'
import { getNetworkPerformanceStatus, getServerStatus, getPvDataStatus, getVisitStatus } from './home'

Mock.setup({
  // 配置Ajax请求延时
  timeout: 1500
})
Mock.mock(/\/login/, login)
Mock.mock(/\/loadNetworkData/, getNetworkPerformanceStatus)
Mock.mock(/\/loadServerData/, getServerStatus)
Mock.mock(/\/loadPvData/, getPvDataStatus)
Mock.mock(/\/loadVisitData/, getVisitStatus)
export default Mock
