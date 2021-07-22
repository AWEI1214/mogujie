

<template>
  <div class="bottom-bar">
    <div class="check-content">
      <check-button
        class="check-button"
        :isCheck="isCheckAll"
        @click.native="allin"
      />
      <span @click="allin">全选</span>
    </div>
    <div class="total-price">
      <span>合计：{{ totalprice + "￥" }}</span>
    </div>
    <div class="caculate" @click="calcClick">去结算({{ checkLength }})</div>
  </div>
</template>

<script>
import CheckButton from "components/content/checkbutton/CheckButton.vue";

export default {
  components: {
    CheckButton,
  },
  data() {
    return {};
  },
  methods: {
    allin() {
      if (!this.isCheckAll) {
        this.$store.state.cartList.forEach((item) => {
          item.isCheck = true;
        });
      } else {
        this.$store.state.cartList.forEach((item) => {
          item.isCheck = false;
        });
      }
    },
    calcClick() {
      if (!this.isCheckAll) {
        this.$toast.show("请选择购买的商品", 2000);
      }
    },
  },
  computed: {
    totalprice() {
      return this.$store.state.cartList
        .filter((item) => {
          return item.isCheck;
        })
        .reduce((preValue, item) => {
          return preValue + item.price * item.count;
        }, 0);
    },

    checkLength() {
      return this.$store.state.cartList.filter((item) => {
        return item.isCheck;
      }).length;
    },

    isCheckAll() {
      return !this.$store.state.cartList.some((item) => !item.isCheck);
      // return this.$store.state.cartList.find((item) => !item.checked);
    },
  },
};
</script>

<style scoped>
.bottom-bar {
  width: 100%;
  height: 40px;
  position: fixed;
  bottom: 49px;
  background: #eeeeee;
  display: flex;
  line-height: 40px;
  text-align: center;
}

.check-content {
  width: 25%;
  display: flex;
  justify-content: center;
}

.total-price {
  width: 50%;
}

.caculate {
  width: 25%;
  background-color: #ff5028;
  color: #fff;
}
</style>