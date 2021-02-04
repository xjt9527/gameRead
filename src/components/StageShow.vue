<template>
  <div class="stage-show">
    <div class="main scroll" ref="box">
      <div class="inner" ref="inbox">
        <div class="bk"></div>
        <div class="text-box">
          <template v-for="(item, index) in t">
            <div class="ocell" v-if="item.type === 'aside'" :key="index">
              {{ item.txt }}
            </div>
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
      t: [],
      testS: true,
    };
  },
  computed: {},
  methods: {
    add(dlg) {
      setTimeout(
        () => {
          this.t.push(dlg);
          this.scrollBottom();
        },
        dlg.type === "aside" ? 0 : 200
      );
    },
    scrollBottom() {
      this.$nextTick(() => {
        let sh = this.$refs.inbox.clientHeight;
        this.$refs.box.scrollTo(0, sh);
      });
    },
  },
  mounted() {},
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
    animation: preview 0.2s both;

    &:last-child {
      animation: showlast 0.8s;
      padding-bottom: 340px;
    }

    &.odlg {
      .txt {
        background: #555558;
        display: inline-block;
        max-width: 80%;
        color: #fff;
        padding: 30px;
        border-radius: 30px;
        text-align: left;
      }
      &.right {
        text-align: right;
        transform-origin: right center;
      }
      &.left {
        text-align: left;
        transform-origin: left center;
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
