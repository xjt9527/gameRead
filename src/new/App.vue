<template>
  <div id="app" @click="go">
    <top-head />
    <stage-show ref="stagebox" @changeAct="changeActLock" />
    <actors-show ref="actorbox" />
    <bottom-act />
  </div>
</template>

<script>
import gameData from "./scriptData/story";
import TopHead from "./components/TopHead";
import StageShow from "./components/StageShow";
import BottomAct from "./components/BottomAct";
import ActorsShow from "./components/ActorsShow";

export default {
  name: "App",
  components: { TopHead, StageShow, BottomAct, ActorsShow },
  data() {
    return {
      gameData,
      actors: {
        "1": [{ id: 1, status: "left in" }],
        "2": [{ id: 1, status: "left in" }],
        "3": [
          { id: 1, status: "left wait" },
          { id: 2, status: "right in " },
        ],
        "4": [
          { id: 1, status: "left talk" },
          { id: 2, status: "right wait" },
        ],
        "5": [
          { id: 1, status: "left wait" },
          { id: 2, status: "right talk" },
        ],
        "6": [
          { id: 1, status: "left talk" },
          { id: 2, status: "right out" },
        ],
      },
      dlgs: {
        "1": {
          type: "aside",
          auto: true,
          txt: ["我听有人说^^1.5", "太阳升起前，如果你面朝夜晚^^2.5"],
        },
        "2": {
          type: "aside",
          txt: "这么卑微的人们，是否能记得。。。",
        },
        "3": {
          type: "aside",
          txt: "这么卑微的人们，是否能记得。。。",
        },
        "4": {
          type: "aside",
          txt: "这么卑微的人们，是否能记得。。。",
        },
        "5": {
          type: "dlg",
          txt: "asdfas暗示法撒旦阿斯蒂芬阿斯蒂芬阿斯蒂芬阿斯蒂芬阿斯蒂芬",
          pos: "left",
        },
        "6": {
          type: "dlg",
          txt: "asdfasdfasdf阿斯蒂芬",
          pos: "right",
        },
        "7": {
          type: "dlg",
          txt: "asdfasdfasdf阿斯蒂芬",
          pos: "left",
        },
        "8": {
          type: "dlg",
          txt: "...",
          pos: "left",
        },
      },
      scriptIndex: 0,
      asideIndex: 0,
      script: [
        { dlgs: 1 },
        { dlgs: 2, stay: 1 },
        { dlgs: 3, stay: 1.5 },
        { dlgs: 4, stay: 2 },
        { actors: 1, dlgs: 8, stay: 2 },
        { actors: 2, dlgs: 5, stay: 2.5 },
        { actors: 3, dlgs: 6, stay: 2.5 },
        { actors: 4, dlgs: 7, stay: 2.5 },
        { actors: 5, dlgs: 6, stay: 2.5 },
        { actors: 6, dlgs: 7 },
      ],
      actData: null,
      canAct: true,
    };
  },
  methods: {
    go() {
      if (!this.canAct) {
        return;
      }
      let curS = this.script[this.scriptIndex];
      for (let key in curS) {
        if (key === "dlgs") {
          this.$refs.stagebox.add(this.dlgs[curS[key]]);
        } else if (key === "actors") {
          this.$refs.actorbox.change(this.actors[curS[key]]);
        }
      }
      if (curS.next) {
        setTimeout(() => {
          this.go();
        }, curS.stay * 1000);
      }
      this.scriptIndex++;
    },
    changeActLock(type) {
      this.canAct = type;
    },
    creatActData() {
      this.actData = this.actors[this.actIndex];
      this.actIndex++;
    },
  },
  created() {},
};
</script>

<style lang="less">
@import "../assets/css/base.less";
html,
body,
#app {
  height: 100%;
  width: 375 * @rem;
  overflow: hidden;
}

body {
  background: #fefefe;
  color: #333;
  width: 375 * @rem;
  margin: 0 auto;
  position: relative;
}

#app {
  display: flex;
  flex-direction: column;
}
</style>
