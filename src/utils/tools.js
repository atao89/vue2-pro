/*
 * @Descripttion: 
 * @version: 
 * @Author: 周涛
 * @Date: 2021-09-13 15:48:30
 * @LastEditors: 周涛
 * @LastEditTime: 2021-09-13 16:20:26
 */
import moment from 'moment'

// 格式化时间戳
export const timeFormat = (dataStr, pattern = 'YYYY-MM-DD') => {
    if (dataStr) {
        return moment(dataStr).format(pattern)
    } else {
        return dataStr
    }
}

// 生成一个范围内的随机时间
export const randomDate = (startDate, endDate) => {
    let date = new Date(+startDate + Math.random() * (endDate - startDate));
    let hour = 0 + Math.random() * (23 - 0) | 0;
    let minute = 0 + Math.random() * (59 - 0) | 0;
    let second = 0 + Math.random() * (59 - 0) | 0;
    date.setHours(hour);
    date.setMinutes(minute);
    date.setSeconds(second);
    return date;
};

// 金额数字3位分割
export const MoneyFormat = (value) => {
    if (!value) {
        return '0'
    }
    let intPartFormat = value.toString().replace(/(\d)(?=(?:\d{3})+$)/g, '$1,') // 将整数部分逢三一断
    return intPartFormat
}