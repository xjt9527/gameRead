<template>
  <div id="app">
    <top-head />
    <stage-show />
    <div class="actor-box">
      <div class="oactor show"></div>
      <div class="oactor"></div>
    </div>
    <bottom-act />
  </div>
</template>

<script>
import gameData from "@/scriptData/story";
import TopHead from "./components/TopHead";
import stageShow from "./components/stage-show";
import BottomAct from "./components/BottomAct";

export default {
  name: "App",
  components: { TopHead, stageShow, BottomAct },
  data() {
    return {
      gameData,
    };
  },
  created() {},
};
</script>

<style lang="less">
@import "./assets/css/base.less";
html,
body,
#app {
  height: 100%;
}

body {
  background: #242428;
  color: #ccc;
  width: 750px;
  margin: 0 auto;
  position: relative;
}

#app {
  display: flex;
  flex-direction: column;
}

.actor-box {
  position: absolute;
  width: 100%;
  height: 420px;
  bottom: 0;
  left: 0;
  .oactor {
    position: absolute;
    width: 280px;
    height: 400px;
    background: #88888a;
    left: 60px;
  }
}
</style>
