<!--
 * @Author:
  components: { MainTabbar }, your name
 * @Date: 2021-07-12 21:14:02
 * @LastEditTime: 2021-07-15 16:11:14
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue\supermall\src\App.vue
-->
<template>
  <div id="app">
    <main-tabbar class="main-tabbar"></main-tabbar>
    <router-view />
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
