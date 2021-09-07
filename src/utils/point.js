/*
 * @Descripttion: 
 * @version: 
 * @Author: 周涛
 * @Date: 2021-09-07 13:54:52
 * @LastEditors: 周涛
 * @LastEditTime: 2021-09-07 14:30:34
 */
export class Click {
    add(entry) {
        const tp = entry.el.attributes['track-params'].value;
        entry.el.addEventListener('click', function () {
            console.log('add一次, tp: ', tp);
            console.log('tpJSON: ', JSON.stringify(tp));
        })
    }
}
