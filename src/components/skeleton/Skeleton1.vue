<!--
 * @Descripttion: 
 * @version: 
 * @Author: 周涛
 * @Date: 2021-08-30 18:04:35
 * @LastEditors: 周涛
 * @LastEditTime: 2021-09-02 17:29:58
-->
<template>
  <div class="skeleton">
    <div class="skeleton-head"></div>
    <div class="skeleton-body">
      <div class="skeleton-title"></div>
      <div class="skeleton-content"></div>
    </div>
  </div>
</template>

<style>
.skeleton {
  padding: 10px;
}

.skeleton .skeleton-head,
.skeleton .skeleton-title,
.skeleton .skeleton-content {
  background: rgb(194, 207, 214);
}

.skeleton-head {
  width: 100px;
  height: 100px;
  float: left;
}

.skeleton-body {
  margin-left: 110px;
}

.skeleton-title {
  width: 500px;
  height: 60px;
  transform-origin: left;
  animation: skeleton-stretch 0.5s linear infinite alternate;
}

.skeleton-content {
  width: 260px;
  height: 30px;
  margin-top: 10px;
  transform-origin: left;
  animation: skeleton-stretch 0.5s -0.3s linear infinite alternate;
}

@keyframes skeleton-stretch {
  from {
    transform: scalex(1);
  }
  to {
    transform: scalex(0.3);
  }
}
</style>
