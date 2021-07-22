
<template>
  <div class="toast" v-show="isShow">{{ message }}</div>
</template>

<script>
export default {
  data() {
    return {
      message: "",
      isShow: false,
    };
  },

  methods: {
    show(message, duration) {
      this.isShow = true;
      this.message = message;

      setTimeout(() => {
        this.isShow = false;
        this.message = "";
      }, duration);
    },
  },
};
</script>

<style scoped>
.toast {
  position: fixed;
  top: 50%;
  left: 50%;
  width: 150px;
  height: 40px;
  border-radius: 20px;
  background-color: rgba(0, 0, 0, 0.8);
  color: white;
  transform: translate(-50%, -50%);
  text-align: center;
  line-height: 40px;
  z-index: 99;
}
</style>