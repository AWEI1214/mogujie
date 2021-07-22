
<template>
  <div id="home">
    <navbar class="home">
      <div slot="center" class="gw">蘑菇街</div>
    </navbar>
    <tab-control
      v-show="isTabFixed"
      :title="['流行', '新款', '精选']"
      class="tab-control1"
      @tabClick="tabClick"
      ref="tabcontrol1"
    ></tab-control>
    <scroll
      class="content"
      ref="scroll"
      :probeType="3"
      @scroll="scroll"
      :pullUpLoad="true"
      @pullingUp="pullingUp"
    >
      <home-swiper
        :banners="banners"
        @swiperImageLoad="swiperImageLoad"
      ></home-swiper>
      <recommend-view :recommends="recommends"></recommend-view>
      <feature></feature>
      <tab-control
        :title="['流行', '新款', '精选']"
        class="tab-control"
        @tabClick="tabClick"
        ref="tabcontrol"
      ></tab-control>
      <goods-list :goods="showGoods"></goods-list>
    </scroll>

    <backtop @click.native="backtop" v-show="btnFlag"></backtop>
  </div>
</template>

<script>
import { getHomeMultidata, getHomeGoods } from "@/network/home.js";
import navbar from "components/common/navbar/navbar.vue";
import homeSwiper from "./childComps/homeSwiper.vue";
import RecommendView from "./childComps/homeRecommendView.vue";
import feature from "./childComps/featureView.vue";
import tabControl from "components/content/tabControl/tabControl.vue";
import GoodsList from "../../components/content/goods/goodsList.vue";
import Backtop from "../../components/content/Backtop/backtop.vue";
import Scroll from "../../components/common/scroll/scroll.vue";
export default {
  components: {
    navbar,
    homeSwiper,
    RecommendView,
    feature,
    tabControl,
    GoodsList,
    Backtop,
    Scroll,
  },
  data() {
    return {
      result: null,
      banners: [],
      recommends: [],
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] },
      },
      currentType: "pop",
      btnFlag: false,
      tabOffsetTop: 0,
      saveY: 0,
      isTabFixed: false,
    };
  },
  created() {
    //  请求多个数据
    this.getHomeMultidata();
    //请求商品数据
    this.getHomeGoods("pop");
    this.getHomeGoods("new");
    this.getHomeGoods("sell");

    // this.$bus.$on("itemImageLoad", () => {
    //   console.log(123);
    // });
  },

  mounted() {},
  updated() {},
  computed: {
    showGoods() {
      return this.goods[this.currentType].list;
    },
  },
  activated() {
    this.$refs.scroll.scrollTo(0, this.saveY, 1);
    this.$refs.scroll.refresh();
  },
  deactivated() {
    this.saveY = this.$refs.scroll.getScrollY();
    // this.$bus.$off("imgLoad", this.imgListener);
  },
  methods: {
    /**
     * 网络请求相关方法
     */
    getHomeMultidata() {
      getHomeMultidata().then((res) => {
        // console.log(res);
        this.banners = res.data.banner.list;
        this.recommends = res.data.recommend.list;
      });
    },
    getHomeGoods(type) {
      const page = this.goods[type].page + 1;
      getHomeGoods(type, page).then((res) => {
        // console.log(res);
        this.goods[type].list.push(...res.data.list);
        this.goods[type].page += 1;

        this.$refs.scroll.finishPullUp();
      });
    },

    /**
     * 事件监听相关方法
     */

    //切换商品
    tabClick(index) {
      switch (index) {
        case 0:
          this.currentType = "pop";
          break;
        case 1:
          this.currentType = "new";
          break;
        case 2:
          this.currentType = "sell";
          break;
      }
      this.$refs.tabcontrol1.currentIndex = index;
      this.$refs.tabcontrol.currentIndex = index;
    },

    //返回顶部
    backtop() {
      this.$refs.scroll.scroll.scrollTo(0, 0, 500);
    },

    //返回顶部按钮显示
    scroll(position) {
      // console.log(position);
      if (-position.y > 1000) {
        this.btnFlag = true;
      } else {
        this.btnFlag = false;
      }

      this.isTabFixed = -position.y > this.tabOffsetTop;
    },

    //上拉加载
    pullingUp() {
      this.getHomeGoods(this.currentType);
    },

    swiperImageLoad() {
      this.tabOffsetTop = this.$refs.tabcontrol.$el.offsetTop;
      // console.log(this.tabOffsetTop);
    },
  },
};
</script>

<style scoped>
.home {
  background-color: var(--color-tint);
  color: #fff;
  /* position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 10; */
}

#home {
  /* padding-top: 44px; */
  height: 100vh;
  position: relative;
}

/* .tab-control {
  background-color: #fff;
  z-index: 10;
} */

.tab-control1 {
  position: relative;
  z-index: 99;
  background-color: #fff;
}
.content {
  /* height: 300px; */
  overflow: hidden;
  position: absolute;
  top: 44px;
  bottom: 48px;
  left: 0;
  right: 0;
}
</style>
