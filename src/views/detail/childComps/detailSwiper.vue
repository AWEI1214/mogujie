
<template>
  <div class="detailSwiper">
    <Swiper class="swiper1">
      <SwiperItem v-for="(item, index) in topImages" :key="index">
        <img :src="item" alt="" />
      </SwiperItem>
    </Swiper>
  </div>
</template>

<script>
import { Swiper, SwiperItem } from "components/common/swiper/index.js";

export default {
  components: {
    Swiper,
    SwiperItem,
  },

  props: {
    topImages: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  created() {
    // console.log(this.topImages);
  },
};
</script>

<style scoped>
.swiper1 {
  height: 300px;
  overflow: hidden;
}
</style>
