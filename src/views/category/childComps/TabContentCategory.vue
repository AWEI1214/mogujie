
<template>
  <div>
    <grid-view :cols="3" :lineSpace="15" :v-margin="10">
      <div
        class="item"
        v-for="(item, index) in subcategories.list"
        :key="index"
      >
        <a :href="item.link">
          <img :src="item.image" alt="" class="item-img" @load="imagesload" />
          <div class="item-text">{{ item.title }}</div>
        </a>
      </div>
    </grid-view>
  </div>
</template>

<script>
import GridView from "components/common/gridView/GridView";
export default {
  components: { GridView },
  name: "TabContentCategory",
  props: {
    subcategories: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  data() {
    return {
      isLoad: false,
    };
  },
  methods: {
    imagesload() {
      if (!this.isLoad) {
        this.$emit("imagesLoad");
        this.isLoad = true;
      }
    },
  },
};
</script>

<style scoped>
.panel img {
  width: 100%;
}

.item {
  text-align: center;
  font-size: 0.12rem;
}
.item-img {
  width: 80%;
}
.item-text {
  margin-top: 0.1rem;
}
</style>
