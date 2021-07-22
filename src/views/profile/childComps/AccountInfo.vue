
<template>
  <div class="account">
    <div class="account-item">
      <div class="number"><span class="balance">0.00</span>元</div>
      <div class="account-info">我的余额</div>
    </div>
    <div class="account-item" id="center">
      <div class="number"><span class="balance">0</span>个</div>
      <div class="account-info">我的优惠</div>
    </div>
    <div class="account-item">
      <div class="number"><span class="balance">0</span>分</div>
      <div class="account-info">我的积分</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AccountInfo",
};
</script>

<style scoped>
.account {
  height: 90px;
  background-color: white;
  display: flex;
}
.account-item {
  flex: 1;
  text-align: center;
  padding-top: 18px;
  /* line-height: 90px; */
}

.balance {
  color: red;
  font-size: 25px;
  font-weight: 700;
}

#center {
  border-left: 1px solid rgb(219, 219, 219);
  border-right: 1px solid rgb(219, 219, 219);
}

.number {
  margin-bottom: 5px;
}
</style>
