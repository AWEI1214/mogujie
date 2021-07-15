<!--
 * @Author: your name
 * @Date: 2021-07-08 16:54:38
 * @LastEditTime: 2021-07-15 19:17:33
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue\tabbar\src\views\home\home.vue
-->
<template>
  <div id="home">
    <navbar class="home">
      <div slot="center">购物街</div>
    </navbar>
    <scroll
      class="content"
      ref="scroll"
      :probeType="3"
      @scrolll="scrolll"
      :pullUpload="true"
      @pullingUp="pullingUp"
    >
      <home-swiper :banners="banners"></home-swiper>
      <recommend-view :recommends="recommends"></recommend-view>
      <feature></feature>
      <tab-control
        :title="['流行', '新款', '精选']"
        class="tab-control"
        @tabClick="tabClick"
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
    };
  },
  created() {
    //  请求多个数据
    this.getHomeMultidata();
    //请求商品数据
    this.getHomeGoods("pop");
    this.getHomeGoods("new");
    this.getHomeGoods("sell");
  },

  mounted() {},

  computed: {
    showGoods() {
      return this.goods[this.currentType].list;
    },
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
    },

    //返回顶部
    backtop() {
      this.$refs.scroll.scroll.scrollTo(0, 0, 500);
    },

    //返回顶部按钮显示
    scrolll(position) {
      // console.log(position);
      if (-position.y > 1000) {
        this.btnFlag = true;
      } else {
        this.btnFlag = false;
      }
    },

    //上拉加载
    pullingUp() {
      this.getHomeGoods(this.currentType);
    },
  },
};
</script>

<style scoped>
.home {
  background-color: var(--color-tint);
  color: #fff;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 10;
}

#home {
  /* padding-top: 44px; */
  height: 100vh;
  position: relative;
}

.tab-control {
  background-color: #fff;
  /* position: sticky; */
  /* top: 44px; */
  z-index: 10;
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
