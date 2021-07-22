
<template>
  <navbar>
    <div slot="left" class="back1" @click="back">
      <img src="~assets/img/common/back.svg" alt="" />
    </div>
    <div slot="center" class="center">
      <div
        v-for="(item, index) in titles"
        :key="index"
        class="item"
        :class="{ active: index === currentIndex }"
        @click="titleClick(index)"
      >
        {{ item }}
      </div>
    </div>
  </navbar>
</template>

<script>
import navbar from "components/common/navbar/navbar.vue";
export default {
  components: {
    navbar,
  },
  data() {
    return {
      titles: ["商品", "参数", "评论", "推荐"],
      currentIndex: 0,
    };
  },
  methods: {
    titleClick(index) {
      this.currentIndex = index;
      this.$emit("titleClick", index);
    },
    back() {
      this.$router.back();
    },
  },
};
</script>

<style scoped>
.back1 {
  text-align: center;
}
.back1 img {
  margin-top: 10px;
}
.center {
  display: flex;
  font-size: 14px;
}
.item {
  flex: 1;
}
.active {
  color: var(--color-high-text);
}
</style>
