

<template>
  <div class="cartlist">
    <scroll class="content" ref="scroll">
      <CartListitem
        v-for="(item, index) in cartList"
        :key="index"
        :product="item"
      />
    </scroll>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import scroll from "components/common/scroll/scroll.vue";
import CartListitem from "./CartListitem.vue";

export default {
  name: "CartList",
  components: {
    scroll,
    CartListitem,
  },
  computed: {
    ...mapGetters(["cartList"]),
  },

  activated() {
    this.$refs.scroll.refresh();
  },
};
</script>

<style scoped>
.cartlist {
  height: calc(100% - 44px - 49px - 40px);
}

.content {
  height: 100%;
  overflow: hidden;
}
</style>
