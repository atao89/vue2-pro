/*
 * @Descripttion: 
 * @version: 
 * @Author: 周涛
 * @Date: 2021-09-07 14:52:40
 * @LastEditors: 周涛
 * @LastEditTime: 2021-09-07 14:59:32
 */
import router from '@/router'
import { trackPage } from '@/utils/track.js'
import { PVInfoMap } from '@/plugins/track.js'

router.beforeResolve((to, from, next) => {
    const { id, query, data } = PVInfoMap[to.path] || {}
    if (id) {
        if (query && Object.keys(query).length) {
            const isMatch = (route) => {
                if (!route) return false
                return Object.keys(query).every(key => {
                    return query[key] == route.query[key]
                })
            }
            if (isMatch(to) && !isMatch(from)) {
                trackPage(id, data || {})
            }
        } else {
            if (from.path !== to.path) {
                trackPage(id, data || {})
            }
        }
    }
    next()
})
