/*
 * @Descripttion: 
 * @version: 
 * @Author: 周涛
 * @Date: 2021-09-07 14:03:45
 * @LastEditors: 周涛
 * @LastEditTime: 2021-09-07 14:03:46
 */
import Vue from "vue";

Vue.use((Vue) => {
    ((requireContext) => {
        const arr = requireContext.keys().map(requireContext);
        (arr || []).forEach((directive) => {
            directive = directive.__esModule && directive.default ? directive.default : directive;
            Object.keys(directive).forEach((key) => {
                Vue.directive(key, directive[key]);
            });
        });
    })(require.context('../directives', false, /^\.\/.*\.js$/));
});