<!--
 * @Descripttion: 
 * @version: 
 * @Author: 周涛
 * @Date: 2021-08-23 16:39:29
 * @LastEditors: 周涛
 * @LastEditTime: 2021-09-09 12:33:13
-->
<template>
    <div class="category">
        <div>category</div>
        <ul>
            <li v-for="item in 1000">{{item}}</li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'Category'
}
</script>