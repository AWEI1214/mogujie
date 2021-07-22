<template>
  <div id="category">
    <nav-bar class="goory-nav">
      <div slot="center">商品分类</div>
    </nav-bar>
    <div class="content">
      <Scroll id="tab-content" ref="scroll" :probe-type="3">
        <div>
          <tab-content-category
            :subcategories="showSubcategory"
            @imagesLoad="imagesLoad"
          />
        </div>
      </Scroll>
    </div>
  </div>
</template>

<script>
import Scroll from "components/common/scroll/scroll.vue";
import NavBar from "components/common/navbar/navbar.vue";
import TabContentCategory from "./childComps/TabContentCategory.vue";

import { getCategory, getSubcategory } from "network/category";

export default {
  components: {
    NavBar,
    Scroll,
    TabContentCategory,
  },

  data() {
    return {
      categories: [],
      categoryData: [],
      currentIndex: -1,
    };
  },
  created() {
    this._getCategory();
  },
  updated() {
    this.$refs.scroll.refresh();
  },
  computed: {
    showSubcategory() {
      if (this.currentIndex === -1) return {};
      return this.categoryData[this.currentIndex].subcategories;
    },
  },
  // mixins: [tabControlMixin, backTopMixin, itemListenerMixin],
  methods: {
    _getCategory() {
      getCategory().then((res) => {
        this.categories = res.data.category.list;
        // 初始化每个类别的子数据
        for (let i = 0; i < this.categories.length; i++) {
          this.categoryData[i] = {
            subcategories: {},
          };
        }
        this._getSubcategories(0);
      });
    },
    _getSubcategories(index) {
      this.currentIndex = index;
      const maitKey = this.categories[index].maitKey;
      getSubcategory(maitKey).then((res) => {
        this.categoryData[index].subcategories = res.data;
        this.categoryData = { ...this.categoryData };
      });
    },

    imagesLoad() {
      this.$refs.scroll.refresh();
    },
  },
};
</script>

<style scoped>
#category {
  height: 100vh;
}
.goory-nav {
  background: var(--color-tint);
  color: white;
}
.content {
  position: absolute;
  left: 0;
  right: 0;
  top: 44px;
  bottom: 49px;
  display: flex;
  overflow: hidden;
}
#tab-content {
  height: 100%;
  flex: 1;
}
.tab-cotrol {
  background: white;
  color: #000;
}
</style>
