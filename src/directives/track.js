/*
 * @Descripttion: 
 * @version: 
 * @Author: 周涛
 * @Date: 2021-09-07 13:56:14
 * @LastEditors: 周涛
 * @LastEditTime: 2021-09-07 14:02:09
 */
import { Click } from '../utils/point'
const cli = new Click()
export default {
    track: {
        bind(el, binding) {
            const { arg } = binding
            arg.split('|').forEach(item => {
                if (item == 'click') {
                    cli.add({ el })
                } else if (item == 'exposure') {
                    // 曝光埋点
                }
            })
        }
    }
}
