<!--
 * @Author: your name
 * @Date: 2021-07-15 15:14:10
 * @LastEditTime: 2021-07-15 19:18:18
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue\supermall\src\components\common\scroll\scroll.vue
-->
<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll";
export default {
  data() {
    return {
      scroll: null,
    };
  },
  props: {
    probeType: {
      type: Number,
      default: 0,
    },
    pullUpload: {
      type: Boolean,
      default: false,
    },
  },
  mounted() {
    this.scroll = new BScroll(this.$refs.wrapper, {
      observeDOM: true,
      click: true,
      probeType: this.probeType,
      pullUpLoad: this.pullUpload,
    });

    //返回顶部
    this.scroll.scrollTo(0, 0);

    //监听滚动位置
    this.scroll.on("scroll", (position) => {
      this.$emit("scrolll", position);
    });

    //监听上拉事件
    this.scroll.on("pullingUp", () => {
      this.$emit("pullingUp");
    });
  },

  methods: {
    finishPullUp() {
      this.scroll.finishPullUp();
    },
  },
};
</script>

<style>
</style>
