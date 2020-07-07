<template>
  <div id="app">
    <controller />
  </div>
</template>

<script>
import controller from "./components/controller.vue";

export default {
  name: "App",
  components: {
    controller
  }
};
</script>

<style lang="less">
@import "./assets/css/base.less";
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #224;
  font-size: 28px;
}
</style>
