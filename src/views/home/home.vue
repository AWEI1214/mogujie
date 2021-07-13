<!--
 * @Author: your name
 * @Date: 2021-07-08 16:54:38
 * @LastEditTime: 2021-07-13 21:46:03
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue\tabbar\src\views\home\home.vue
-->
<template>
  <div id="home">
    <navbar class="home">
      <div slot="center">购物街</div>
    </navbar>
    <home-swiper :banners="banners"></home-swiper>
  </div>
</template>

<script>
import { getHomeMultidata } from "@/network/home.js";
import navbar from "components/common/navbar/navbar.vue";
import homeSwiper from "./childComps/homeSwiper.vue";

export default {
  components: {
    navbar,
    homeSwiper,
  },
  data() {
    return {
      result: null,
      banners: [],
      recommends: [],
    };
  },
  created() {
    getHomeMultidata().then((res) => {
      // console.log(res);
      this.banners = res.data.banner.list;
      this.recommends = res.data.recommend.list;
    });
  },
};
</script>

<style>
.home {
  background-color: var(--color-tint);
  color: #fff;
}
</style>
