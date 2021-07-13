<!--
 * @Author: your name
 * @Date: 2021-07-13 14:17:24
 * @LastEditTime: 2021-07-13 14:43:37
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue\supermall\src\components\common\navbar\navbar.vue
-->
<template>
  <div class="nav-bar">
    <div class="left"><slot name="left"></slot></div>
    <div class="center"><slot name="center"></slot></div>
    <div class="right"><slot name="right"></slot></div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.nav-bar {
  display: flex;
  height: 44px;
  line-height: 44px;
}
.left,
.right {
  width: 60px;
  /* background-color: tomato; */
}
.center {
  flex: 1;
  /* background-color: blue; */
  text-align: center;
}
</style>