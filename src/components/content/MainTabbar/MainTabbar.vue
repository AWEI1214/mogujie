

<template>
  <div>
    <tabber class="tabber">
      <tabbarItem link="/home">
        <img src="@/assets/img/tabbar/home.svg" alt="" slot="item-icon" />
        <img
          src="@/assets/img/tabbar/home_active.svg"
          alt=""
          slot="item-icon_active"
        />
        <div slot="item-text">首页</div>
      </tabbarItem>
      <tabbarItem link="/category">
        <img src="@/assets/img/tabbar/category.svg" alt="" slot="item-icon" />
        <img
          src="@/assets/img/tabbar/category_active.svg"
          alt=""
          slot="item-icon_active"
        />
        <div slot="item-text">分类</div>
      </tabbarItem>
      <tabbarItem link="/cart">
        <img src="@/assets/img/tabbar/shopcart.svg" alt="" slot="item-icon" />
        <img
          src="@/assets/img/tabbar/shopcart_active.svg"
          alt=""
          slot="item-icon_active"
        />
        <div slot="item-text">购物</div>
      </tabbarItem>
      <tabbarItem link="/profile">
        <img src="@/assets/img/tabbar/profile.svg" alt="" slot="item-icon" />
        <img
          src="@/assets/img/tabbar/profile_active.svg"
          alt=""
          slot="item-icon_active"
        />
        <div slot="item-text">我的</div>
      </tabbarItem>
    </tabber>
  </div>
</template>

<script>
import tabber from "@/components/common/tabbar/tabbar.vue";
import tabbarItem from "@/components/common/tabbar/tabbaritem.vue";
export default {
  components: {
    tabber,
    tabbarItem,
  },
};
</script>

<style>
.tabber {
  z-index: 11;
}
</style>