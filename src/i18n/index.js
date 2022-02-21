/*
 * @Descripttion: 
 * @version: 
 * @Author: 周涛
 * @Date: 2021-09-17 14:32:59
 * @LastEditors: 周涛
 * @LastEditTime: 2022-02-21 22:44:48
 */
import Vue from 'vue'
import VueI18n from 'vue-i18n'
import elZhCnLang from 'element-ui/lib/locale/lang/zh-CN'
import elEnLang from 'element-ui/lib/locale/lang/en'
import elZhTwLang from 'element-ui/lib/locale/lang/zh-TW'
import elJaLang from 'element-ui/lib/locale/lang/ja'
import customZhCn from './lang/zh-CN'
import customZhTw from './lang/zh-TW'
import customEnUs from './lang/en-US'
import customEnJa from './lang/en-JA'
import { ss } from '@/utils/storage'

Vue.use(VueI18n)

const messages = {
    'zh-CN': Object.assign(elZhCnLang, customZhCn),
    'zh-TW': Object.assign(elZhTwLang, customZhTw),
    'en-US': Object.assign(elEnLang, customEnUs),
    'en-JA': Object.assign(elJaLang, customEnJa)
}
const languages = ['zh-CN', 'zh-TW', 'en-US', 'en-JA']

const language = languages.includes(ss.getItem('language'))
    ? ss.getItem('language')
    : 'zh-CN'

const i18n = new VueI18n({
    messages,
    locale: language,
    silentTranslationWarn: true, // 去除国际化警告
})

export default i18n


