
<template>
  <div id="detail">
    <detailNavbar
      class="datanav"
      @titleClick="titleClick"
      ref="nav"
    ></detailNavbar>
    <scroll
      class="content"
      ref="scroll"
      @scroll="contentScroll"
      :probe-type="3"
    >
      <detailSwiper :topImages="topImages"></detailSwiper>
      <detail-base-info :goods="goods"></detail-base-info>
      <detail-shop-info :shop="shop"></detail-shop-info>
      <detail-goods-info :detail-info="detailInfo" @imageLoad="imageLoad" />
      <detail-param-info ref="param" :param-info="paramInfo" />
      <detail-comment-info
        ref="comment"
        :commentInfo="commentInfo"
      ></detail-comment-info>
      <goodsList ref="goodslist" :goods="recommends"></goodsList>
    </scroll>
    <backtop @click.native="backtop" v-show="btnFlag"></backtop>
    <detailbottombar @cartClick="cartClick"></detailbottombar>
    <toast :message="message" :show="show"></toast>
  </div>
</template>

<script>
import detailNavbar from "./childComps/detailNavbar.vue";
import {
  getDetail,
  Goods,
  Shop,
  GoodsParam,
  getRecommend,
} from "network/detail.js";
import detailSwiper from "./childComps/detailSwiper.vue";
import DetailBaseInfo from "./childComps/DetailBaseInfo.vue";
import DetailShopInfo from "./childComps/DetailShopInfo.vue";
import DetailGoodsInfo from "./childComps/DetailGoodsInfo";
import DetailParamInfo from "./childComps/DetailParamInfo";
import Scroll from "components/common/scroll/scroll.vue";
import DetailCommentInfo from "./childComps/DetailCommentInfo.vue";
import goodsList from "components/content/goods/goodsList.vue";
import Detailbottombar from "./childComps/Datailbottombar.vue";
import Backtop from "../../components/content/Backtop/backtop.vue";
import Toast from "../../components/common/toast/Toast.vue";

export default {
  name: "detail",
  components: {
    detailNavbar,
    detailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    DetailGoodsInfo,
    DetailParamInfo,
    Scroll,
    DetailCommentInfo,
    goodsList,
    Detailbottombar,
    Backtop,
    Toast,
  },
  data() {
    return {
      iid: null,
      topImages: [],
      goods: {},
      shop: {},
      detailInfo: {},
      paramInfo: {},
      commentInfo: {},
      recommends: [],
      themeTopYs: [],
      btnFlag: false,
      message: "",
      show: false,
    };
  },
  created() {
    this.iid = this.$route.params.iid;

    //详情数据
    getDetail(this.iid).then((res) => {
      // console.log(res);
      //获取顶部图片轮播图数据
      const data = res.result;
      this.topImages = res.result.itemInfo.topImages;

      //获取商品信息
      this.goods = new Goods(
        data.itemInfo,
        data.columns,
        data.shopInfo.services
      );

      //创建店铺信息
      this.shop = new Shop(data.shopInfo);

      //商品详情
      this.detailInfo = data.detailInfo;

      //参数
      this.paramInfo = new GoodsParam(
        data.itemParams.info,
        data.itemParams.rule
      );

      //评论
      if (data.rate.cRate !== 0) {
        this.commentInfo = data.rate.list[0];
      }
      // this.$nextTick(() => {
      //   this.themeTopYs = [];
      //   this.themeTopYs.push(0);
      //   this.themeTopYs.push(this.$refs.param.$el.offsetTop);
      //   this.themeTopYs.push(this.$refs.comment.$el.offsetTop);
      //   this.themeTopYs.push(this.$refs.goodslist.$el.offsetTop);
      //   console.log(this.themeTopYs);
      // });
    });

    //推荐数据
    getRecommend().then((res) => {
      this.recommends = res.data.list;
    });
  },
  updated() {},
  methods: {
    imageLoad() {
      this.$refs.scroll.refresh();
      this.themeTopYs = [];
      this.themeTopYs.push(0);
      this.themeTopYs.push(this.$refs.param.$el.offsetTop);
      this.themeTopYs.push(this.$refs.comment.$el.offsetTop);
      this.themeTopYs.push(this.$refs.goodslist.$el.offsetTop);
      // console.log(this.themeTopYs);
    },
    titleClick(index) {
      // console.log(index);
      // console.log(this.themeTopYs[index]);
      this.$refs.scroll.scrollTo(0, -this.themeTopYs[index] + 44, 300);
    },
    contentScroll(position) {
      //返回顶部
      if (-position.y > 800) {
        this.btnFlag = true;
      } else {
        this.btnFlag = false;
      }

      //滚动内容显示对应区域
      const positionY = -position.y;
      let length = this.themeTopYs.length;
      for (let i = 0; i < length; i++) {
        if (
          (i < length - 1 &&
            positionY + 50 > this.themeTopYs[i] &&
            positionY + 50 < this.themeTopYs[i + 1]) ||
          (i === length - 1 && positionY + 50 > this.themeTopYs[i])
        ) {
          this.$refs.nav.currentIndex = i;
        }
      }
    },
    backtop() {
      this.$refs.scroll.scroll.scrollTo(0, 0, 500);
    },

    cartClick() {
      //获取购物车需要展示的信息
      const product = {};
      product.image = this.topImages[0];
      product.title = this.goods.title;
      product.desc = this.goods.desc;
      product.price = this.goods.realPrice;
      product.iid = this.iid;
      //将商品添加到购物车
      this.$store.dispatch("addCart", product).then((res) => {
        // this.show = true;
        // this.message = res;
        // setTimeout(() => {
        //   this.show = false;
        // }, 3000);
        this.$toast.show(res, 2000);
      });
    },
  },
};
</script>

<style scoped>
#detail {
  position: relative;
  z-index: 11;
  background-color: #fff;
  height: 100vh;
}

.content {
  height: calc(100% - 44px - 49px);
  overflow: hidden;
}

.detanav {
  position: relative;
  z-index: 20;
  background-color: #fff;
}
</style>
