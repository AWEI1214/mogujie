
import {
  POP,
  NEW,
  SELL
} from "./const"
import {
  debounce
} from "./utils";
import BackTop from "components/content/Backtop/backtop";

export const itemListenerMixin = {
  data() {
    return {
      itemImgListener: null
    }
  },
  mounted() {
    this.itemImgListener = () => {
      refresh();
      this.getThemeTopY && this.getThemeTopY()

    };
    const refresh = debounce(this.$refs.scroll.refresh, 50);
    this.$bus.$on("itemImageLoad", this.itemImgListener);
  },
}

export const backTopMixin = {
  components: {
    BackTop,
  },
  data() {
    return {
      isShowBackTop: false,
    }
  },
  methods: {
    backClick() {
      this.$refs.scroll.scrollTo(0, 0, 500);
    },
  },
}
export const tabControlMixin = {
  data() {
    return {
      currentType: POP
    }
  },
  methods: {
    tabClick(index) {
      switch (index) {
        case 0:
          this.currentType = POP
          break
        case 1:
          this.currentType = NEW
          break
        case 2:
          this.currentType = SELL
          break
      }
      if (this.$refs.tabCotrol1) this.$refs.tabCotrol1.currentIndex = index;
      if (this.$refs.tabCotrol2) this.$refs.tabCotrol2.currentIndex = index;
    }
  }
}
