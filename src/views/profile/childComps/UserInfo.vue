<template>
  <div class="bg">
    <div class="avatar-img">
      <img src="~assets/img/profile/avatar.svg" alt="" />
    </div>
    <div class="avatar-font">
      <span class="dl">登录/注册</span><br />
      <img src="~assets/img/profile/phone.svg" alt="" />
      <span class="phone">暂无绑定手机号</span>
    </div>
    <div class="right">
      <img src="~assets/img/common/arrow-left.svg" alt="" />
    </div>
  </div>
</template>

<script>
export default {
  name: "UserInfo",
};
</script>

<style scoped>
.bg {
  height: 100px;
  width: 100%;
  background-color: var(--color-tint);
}
.avatar-img {
  /* background-color: tomato; */
  height: 100%;
  width: 90px;
  float: left;
  /* line-height: 100px; */
}
.avatar-img img {
  height: 80px;
  margin-left: 7px;
  margin-top: 10px;
  /* margin-trim: 10px; */
}
.avatar-font {
  float: left;
  margin-top: 24px;
}
.avatar-font .dl {
  font-size: 18px;
  color: white;
}

.avatar-font img {
  height: 25px;
  margin-top: 5px;
  margin-left: -5px;
  vertical-align: middle;
}
.phone {
  font-size: 13px;
  color: white;
  margin-left: -3px;
}
.right {
  float: right;
  height: 100%;
  line-height: 100px;
  text-align: center;
}
.right img {
  height: 25px;
}
</style>
