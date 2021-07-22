

<template>
  <div class="goods">
    <goods-listitem
      v-for="(item, index) in goods"
      :key="index"
      :goodsItem="item"
    ></goods-listitem>
  </div>
</template>

<script>
import goodsListitem from "./goodsListitem.vue";

export default {
  components: { goodsListitem },
  props: {
    goods: {
      type: Array,
      default() {
        return [];
      },
    },
  },
};
</script>

<style scoped>
.goods {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;

  padding: 2px;
}
</style>
