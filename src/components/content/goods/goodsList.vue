<!--
 * @Author: your name
 * @Date: 2021-07-14 14:18:18
 * @LastEditTime: 2021-07-14 15:03:09
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue\supermall\src\components\content\goods\goodsList.vue
-->
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

<style>
.goods {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;

  padding: 2px;
}
</style>
