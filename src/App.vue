
<template>
  <div id="app">
    <main-tabbar class="main-tabbar"></main-tabbar>
    <keep-alive exclude="detail">
      <router-view />
    </keep-alive>
  </div>
</template>

<script>
import MainTabbar from "components/content/MainTabbar/MainTabbar.vue";
export default {
  components: {
    MainTabbar,
  },
};
</script>
<style>
@import "./assets/css/base.css";
#app {
  /* margin-bottom: 50px; */
}
.main-tabbar {
  z-index: 50;
}
</style>
