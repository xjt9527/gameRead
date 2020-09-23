<template>
  <div id="app">
    <Controller />
    <Aside :txtData="gameData.aside.a1"></Aside>
  </div>
</template>

<script>
import Controller from "./components/Controller";
import Aside from "./components/Aside";
import gameData from "@/assets/script/story";

export default {
  name: "App",
  components: {
    Controller,
    Aside,
  },
  data() {
    return {
      gameData,
    };
  },
  created() {
    console.log(this.gameData);
  },
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
