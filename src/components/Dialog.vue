<template>
  <div class="dialog-box">
    <div class="actor l" :class="{ cur: curD === 'l' }">
      <div class="face"></div>
    </div>
    <div class="actor r" :class="{ cur: curD === 'r' }">
      <div class="face"></div>
    </div>
    <div class="dialog-list">
      <ul class="the-list" ref="dlgList" :class="{ show: showit }">
        <li v-for="(item, index) in pageList" :key="index" :class="item.d">
          <p :class="{ show: showit }">{{ item.txt }}</p>
        </li>
      </ul>
      <!-- <div class="waiting" v-show="showWait">···</div> -->
    </div>
  </div>
</template>

<script>
export default {
  name: "Dialog",
  props: { pageData: Array },
  data() {
    return {
      showWait: true,
      pageList: [],
      indexNum: 0,
      showit: false,
      curD: "l",
      originData: [
        {
          txt: "喂喂喂~ 我说",
          d: "l",
          t: 0.8,
        },
        {
          txt: "你这杀马特的发型是怎么回事啊~ 喂",
          d: "l",
          t: 2.5,
        },
        {
          txt: "这个嘛... 嘿嘿嘿...",
          d: "r",
          t: 1.8,
        },
        {
          txt: "你没发现这个发型和我的衣服很搭么？",
          d: "r",
          t: 2.5,
        },
        {
          txt: "喂 这不是重点好吧",
          d: "l",
          t: 1.5,
        },
        {
          txt: "不要在意这些细节",
          d: "r",
          t: 1.5,
        },
      ],
    };
  },
  computed: {},
  methods: {
    next() {
      let curData = this.originData[this.indexNum];
      if (!curData) {
        return;
      }
      this.pageList.push(curData);
      this.showit = false;
      this.$nextTick(() => {
        let dom = this.$refs.dlgList.lastChild;

        this.$refs.dlgList.style =
          "transform: translateY(" + dom.offsetHeight + "px)";
        setTimeout(() => {
          this.showit = true;
          this.curD = curData.d;

          this.$refs.dlgList.style = "transform: translateY(0px)";
          this.indexNum++;
          setTimeout(() => {
            this.next();
          }, curData.t * 1000);
        }, 150);
      });
    },
  },
  mounted() {
    this.next();
  },
};
</script>

<style lang="less" scoped>
.dialog-box {
  position: fixed;
  bottom: 60px;
  left: 0;
  width: 100%;
  .actor {
    position: absolute;
    bottom: 0;
    z-index: 10;

    opacity: 0.6;
    transform: scale(0.92);
    transition: all 0.2s;
    transform-origin: center bottom;

    &.cur {
      opacity: 1;
      transform: scale(1);
    }
    .face {
      width: 300px;
      height: 380px;
      background-size: 100%;
      background-repeat: no-repeat;
    }
    &.l {
      left: 60px;
      .face {
        background-image: url(../assets/img/pic-p1-2.png);
      }
    }
    &.r {
      right: 60px;
      .face {
        background-image: url(../assets/img/pic-p2-1.png);
      }
    }
  }
  .dialog-list {
    position: absolute;
    bottom: 420px;
    padding: 0 60px;
    width: 100%;
    box-sizing: border-box;

    .the-list {
      &.show {
        transition: all 0.15s;
      }
      li {
        padding-top: 24px;
        p {
          display: inline-block;
          min-width: 80px;
          max-width: 480px;
          padding: 14px 20px;
          background: #000;
          color: #fff;
          border-radius: 36px 12px 36px 14px;
          opacity: 0.5;
          position: relative;
          transition: all 0.2s;
          font-size: 12px;
          line-height: 1.75;
          letter-spacing: 2px;
          &::after {
            content: "";
            position: absolute;
            width: 18px;
            height: 18px;
            background: #000;
            transform: rotate(45deg);
            bottom: -6px;
            border-radius: 4px;
          }
        }

        &:last-child {
          opacity: 1;
          p {
            opacity: 0;
            &.show {
              opacity: 1;
            }
          }
          p::after {
            display: block;
          }
        }
        &.l {
          p::after {
            left: 5px;
          }
        }
        &.r {
          text-align: right;
          p {
            text-align: left;

            border-radius: 12px 24px 12px 24px;
            &::after {
              right: 6px;
            }
          }
        }
      }
    }
  }

  .waiting {
    display: inline-block;
    padding: 4px 16px;
    background: #fafafa;
    border-radius: 6px;
    font-weight: bold;
  }
}
</style>

