
<template>
  <div class="cart">
    <navbar class="navbar">
      <div slot="center">购物车({{ cartLength }})</div>
    </navbar>
    <Cartlist />
    <cart-bottom-bar></cart-bottom-bar>
  </div>
</template>

<script>
import navbar from "components/common/navbar/navbar.vue";
import { mapGetters } from "vuex";
import Cartlist from "./childComps/CartList.vue";
import CartBottomBar from "./childComps/CartBottomBar.vue";

export default {
  data() {
    return {
      number: 5,
    };
  },
  components: {
    navbar,
    Cartlist,
    CartBottomBar,
  },
  computed: {
    ...mapGetters(["cartLength"]),
  },
};
</script>

<style scoped>
.cart {
  height: 100vh;
}

.navbar {
  background-color: var(--color-tint);
  color: #fff;
  font-weight: 500;
}
</style>

