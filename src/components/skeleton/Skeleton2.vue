<template>
  <div class="skeleton page">
    <div class="skeleton-nav"></div>
    <div class="skeleton-swiper"></div>
    <ul class="skeleton-tabs">
      <li v-for="i in 8" class="skeleton-tabs-item"><span></span></li>
    </ul>
    <div class="skeleton-banner"></div>
    <div v-for="i in 6" class="skeleton-productions"></div>
  </div>
</template>

<script>
export default {
  name: "Skeleton2",
};
</script>

<style>
ul, li {
  list-style: none;
}
.skeleton {
  position: relative;
  height: 100%;
  overflow: hidden;
  padding: 15px;
  box-sizing: border-box;
}
.skeleton-nav {
  height: 45px;
  background: #ccc;
  margin-bottom: 15px;
}
.skeleton-swiper {
  height: 160px;
  background: #ccc;
  margin-bottom: 15px;
}
.skeleton-tabs {
  padding: 0;
  margin: 0 -15px;
  display: flex;
  flex-wrap: wrap;
}
.skeleton-tabs-item {
  width: 25%;
  height: 55px;
  box-sizing: border-box;
  text-align: center;
  margin-bottom: 15px;
}
.skeleton-tabs-item span {
  display: inline-block;
  width: 55px;
  height: 55px;
  border-radius: 55px;
  background: #ccc;
}
.skeleton-banner {
  height: 60px;
  background: #ccc;
  margin-bottom: 15px;
}
.skeleton-productions {
  height: 20px;
  margin-bottom: 15px;
  background: #ccc;
}

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