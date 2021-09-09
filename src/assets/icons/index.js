/*
 * @Descripttion: 
 * @version: 
 * @Author: 周涛
 * @Date: 2021-09-09 15:39:16
 * @LastEditors: 周涛
 * @LastEditTime: 2021-09-09 16:27:40
 */
import store, { types } from '../../store'
const requireAll = requireContext => requireContext.keys().map(requireContext)
const req = require.context('./svg', true, /\.svg$/)
requireAll(req)

const allSvgKeys = req.keys()
// console.log(store.state)
const svgs = []
allSvgKeys.map(svg => {
  const svgNames = svg.split('/')
  const reg = /([\w1-9A-Za-z-_]+)\.svg/

  const result = reg.exec(svgNames[svgNames.length - 1])
  if (result) {
    const svgName = result[1]
    svgs.push(svgName)
  }
  store.dispatch(types.SVG_ICON_NAME, svgs)
})
