<!--
 * @Author: your name
 * @Date: 2021-07-14 09:49:10
 * @LastEditTime: 2021-07-14 16:27:36
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue\supermall\src\components\content\tabControl\tabControl.vue
-->
<template>
  <div class="tab-control">
    <div
      v-for="(item, index) in title"
      :key="index"
      class="tab-control-item"
      :class="{ active: index === currentIndex }"
      @click="itemClick(index)"
    >
      <span>{{ item }}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  data() {
    return {
      currentIndex: 0,
    };
  },
  methods: {
    itemClick(index) {
      this.currentIndex = index;
      this.$emit("tabClick", index);
    },
  },
};
</script>

<style>
.tab-control {
  display: flex;
  text-align: center;
  font-size: 17px;
  height: 40px;
  line-height: 40px;
}
.tab-control-item {
  flex: 1;
}

.active {
  color: var(--color-high-text);
}

.active span {
  border-bottom: 3px solid var(--color-tint);
  padding: 5px;
}
</style>