<!--
 * @Author: your name
 * @Date: 2021-07-08 12:49:59
 * @LastEditTime: 2021-07-08 13:32:51
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue\tabbar\src\components\tabbar\tabbar.vue
-->
<template>
  <div id="tab-bar">
    <slot> </slot>
  </div>
</template>

<script>
export default {};
</script>

<style>
#tab-bar {
  display: flex;
  background-color: #f6f6f6;
  position: fixed;
  left: 0;
  right: 0;
  /* width: 100%; */
  bottom: 0;

  box-shadow: 0 -2px 10px rgba(100, 100, 100, 0.2);
}
.tab-bar-item {
  flex: 1;
  text-align: center;
  height: 49px;
}
.tab-bar-item img {
  width: 24px;
  height: 24px;
}
</style>
