
<template>
  <div id="profile">
    <nav-bar class="nav-bar">
      <div slot="center">我的信息</div>
    </nav-bar>
    <user-info />
    <account-info />
    <normal-list-view :list-data="orderList" />
    <normal-list-view :list-data="serviceList" />
  </div>
</template>

<script>
import NavBar from "components/common/navbar/navbar.vue";
import AccountInfo from "./childComps/AccountInfo.vue";
import UserInfo from "./childComps/UserInfo.vue";
import NormalListView from "./childComps/NormalListView.vue";
export default {
  components: { NavBar, AccountInfo, UserInfo, NormalListView },
  name: "Profile",
  data() {
    return {
      orderList: [
        { icon: "message.svg", info: "我的消息" },
        { icon: "pointer.svg", info: "积分商城" },
        { icon: "vip.svg", info: "会员卡" },
      ],
      serviceList: [
        { icon: "cart.svg", info: "我的购物车" },
        { icon: "shopping.svg", info: "下载购物APP" },
      ],
    };
  },
};
</script>

<style scoped>
#profile {
  background: #f2f2f2;
}
.nav-bar {
  background: var(--color-tint);
  color: #fff;
}
</style>
