<template>
  <div class="stage-show">
    <div class="main" ref="box">
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
      h: 0,
      t: [],
      testS: true,
    };
  },
  computed: {},
  methods: {
    add(dlg) {
      if (dlg.auto && dlg.type === "aside") {
        this.autoPlay(dlg);
        return;
      }
      setTimeout(
        () => {
          this.playTxt(dlg);
        },
        dlg.type === "aside" ? 0 : 100
      );
    },
    autoPlay(data) {
      let list = data.txt;
      let tl = list.length;
      let idn = 0;
      this.$emit("changeAct", false);

      let auto = () => {
        let curD = list[idn];
        let arr = curD.split("^^");
        this.playTxt({
          type: "aside",
          txt: arr[0],
        });
        idn++;

        if (idn === tl) {
          this.$emit("changeAct", true);
          return;
        }
        setTimeout(() => {
          auto();
        }, arr[1] * 1000 || 1000);
      };

      auto();
    },
    playTxt(dlg) {
      this.t.push(dlg);
      this.scrollBottom();
    },
    scrollBottom() {
      this.$nextTick(() => {
        let sh = this.$refs.inbox.clientHeight;
        let b = parseInt(this.h - sh);
        if (b < 0) {
          this.$refs.inbox.style = `transform:translateY(${b}px)`;
        }
      });
    },
  },
  mounted() {
    let x = document.querySelector(".main").getBoundingClientRect();
    this.h = x.height;
  },
};
</script>

<style lang="less" scoped>
@rem: 0.05rem;
.stage-show {
  flex: 1;
  width: 375 * @rem;
  overflow: hidden;
  .main {
    box-sizing: border-box;
    padding: 20 * @rem;
    padding-right: 45 * @rem;
    height: 100%;
    width: 400 * @rem;
    overflow: hidden;

    .bk {
      height: 300 * @rem;
    }
  }

  .inner {
    transition: transform 0.5s;
    transform-origin: left center;
  }
}
.text-box {
  font-size: 12 * @rem;
  .ocell {
    line-height: 1.75;
    margin-bottom: 15 * @rem;
    letter-spacing: 1 * @rem;
    transform-origin: left center;
    animation: preview 0.2s both;

    &:last-child {
      animation: showlast 0.5s;
      padding-bottom: 150 * @rem;
    }

    &.odlg {
      .txt {
        background: #555558;
        display: inline-block;
        max-width: 240 * @rem;
        color: #fff;
        padding: 10 * @rem 12 * @rem;
        border-radius: 10 * @rem;
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
  }
  100% {
    opacity: 0.5;
  }
}
@keyframes showlast {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>
