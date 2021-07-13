<!--
 * @Author: your name
 * @Date: 2021-07-13 18:25:27
 * @LastEditTime: 2021-07-13 19:01:38
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \vue\supermall\src\components\common\swiper\SwiperItem.vue
-->
<template>
  <div class="slide">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "Slide",
};
</script>

<style >
.slide {
  width: 100%;
  flex-shrink: 0;
}

.slide img {
  width: 100%;
}
</style>
