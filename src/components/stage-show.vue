<template>
  <div class="stage-show" @click="add">
    <div class="main scroll" ref="box">
      <div class="inner" ref="inbox">
        <div class="bk"></div>
        <div class="text-box">
          <template v-for="(item, index) in t">
            <div
              class="ocell"
              v-if="!item.type"
              v-html="item"
              :key="index"
            ></div>
            <div
              class="ocell odlg"
              :class="item.pos"
              v-if="item.type === 'dlg'"
              :key="index"
            >
              <span class="txt">{{ item.txt }}</span>
            </div>
          </template>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "stage-show",
  props: { txtData: Array },
  data() {
    return {
      t: [
        "此前台媒援引《纽约时报》报道称，<span class='shake red'>美</span>国环保署长惠勒计划12月率团访台，推动海洋保护合作。惠勒如果成行，将是继美国卫生部长阿扎、美国副国务卿克拉奇后，四个月内第三位访台的美国内阁官员。",
      ],
    };
  },
  computed: {},
  methods: {
    add() {
      let dlg = {
        type: "dlg",
        txt: "asdfas暗示法撒旦阿斯蒂芬阿斯蒂芬阿斯蒂芬阿斯蒂芬阿斯蒂芬",
        pos: "right",
      };
      this.t.push(dlg);
      this.scrollBottom();
    },
    scrollBottom() {
      this.$nextTick(() => {
        let sh = this.$refs.inbox.clientHeight;
        this.$refs.box.scrollTo(0, sh);
      });
    },
  },
  mounted() {
    this.scrollBottom();
  },
};
</script>

<style lang="less" scoped>
.stage-show {
  flex: 1;
  width: 750px;
  overflow: hidden;
  .main {
    box-sizing: border-box;
    padding: 40px;
    width: 780px;
    padding-right: 80px;
    height: 100%;
    overflow: auto;

    .bk {
      height: 1000px;
    }
  }
}
.text-box {
  font-size: 20px;
  .ocell {
    line-height: 2;
    margin-bottom: 40px;
    letter-spacing: 1px;
    transform-origin: left center;
    animation: preview 0.4s both;

    &:last-child {
      animation: showlast 1s;
      padding-bottom: 340px;
    }

    &.odlg {
      .txt {
        background: #444;
        display: inline-block;
        max-width: 80%;
        padding: 30px;
        border-radius: 30px;
        text-align: left;
      }
      &.right {
        text-align: right;
      }
    }
  }
}

@keyframes preview {
  0% {
    opacity: 1;
    transform: scale(1);
  }
  100% {
    opacity: 0.4;
    transform: scale(0.9);
  }
}
@keyframes showlast {
  0% {
    opacity: 0;
    transform: translateY(10px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
