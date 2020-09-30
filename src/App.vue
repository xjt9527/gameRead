<template>
  <div id="app">
    <!-- <Controller /> -->
    <!-- <Aside :txtData="gameData.aside.a1"></Aside> -->
    <!-- <Aside-type2 :txtData="gameData.aside.a1" /> -->
    <Dialog />
  </div>
</template>

<script>
import Controller from "./components/Controller";
// import Aside from "./components/Aside";
// import AsideType2 from "./components/AsideType2";
import Dialog from "./components/Dialog";
import gameData from "@/assets/script/story";

export default {
  name: "App",
  components: {
    // Controller,
    // Aside,
    // AsideType2,
    Dialog,
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
body {
  background: #667;
}
ul,
li {
  list-style: none;
}
</style>
