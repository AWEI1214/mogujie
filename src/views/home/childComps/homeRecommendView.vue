<!--
 * @Author: your name
 * @Date: 2021-07-13 21:50:38
 * @LastEditTime: 2021-07-13 22:22:34
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue\supermall\src\views\home\childComps\homeRecommendView.vue
-->
<template>
  <div class="recommend">
    <div
      v-for="(item, index) in recommends"
      :key="index"
      class="recommend-item"
    >
      <a :href="item.link">
        <img :src="item.image" alt="" />
        <div>{{ item.title }}</div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    recommends: {
      type: Array,
      default() {
        return [];
      },
    },
  },
};
</script>

<style>
.recommend {
  display: flex;
  width: 100%;
  text-align: center;
  font-size: 12px;
  padding: 10px 0 20px 0;

  border-bottom: 10px solid #eee;
}

.recommend-item {
  flex: 1;
}

.recommend-item img {
  width: 85%;
  margin-bottom: 10px;
}
</style>