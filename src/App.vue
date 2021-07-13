<!--
 * @Author:
  components: { MainTabbar }, your name
 * @Date: 2021-07-12 21:14:02
 * @LastEditTime: 2021-07-13 10:44:09
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue\supermall\src\App.vue
-->
<template>
  <div id="app">
    <main-tabbar></main-tabbar>
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
</style>
