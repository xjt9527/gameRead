<template>
  <div class="aside-type2">
    <p class="cur" ref="aaa">{{ curTxt.txt }}</p>

    <div class="inner" :class="{ move: move }" ref="upper">
      <p v-for="(item, index) in showData" :key="index">
        <span class="text">{{ item }}</span>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "AsideType2",
  props: { txtData: Array },
  data() {
    return {
      txtIndex: 0,
      show: false,
      out: false,
      move: false,
      showData: [],
      showTime: 0,
    };
  },
  computed: {
    curTxt() {
      return this.txtData[this.txtIndex];
    },
  },
  methods: {
    next() {
      let curH = this.$refs.aaa.offsetHeight;
      this.$refs.upper.style = "transform: translateY(" + curH + "px)";
      this.showData.push(this.curTxt.txt);
      this.showTime = this.curTxt.t;
      setTimeout(() => {
        if (this.txtIndex === this.txtData.length - 1) {
          this.over = true;
        }
        this.move = true;
        this.$refs.upper.style = "transform: translateY(0px)";
      }, 100);
    },
  },
  mounted() {
    this.next();

    this.$refs.upper.addEventListener("transitionend", () => {
      this.move = false;
      if (this.over) {
        return;
      }
      this.txtIndex++;

      setTimeout(() => {
        this.next();
      }, this.showTime * 1000);
    });
  },
};
</script>

<style lang="less" scoped>
.aside-type2 {
  position: fixed;
  bottom: 0;
  left: 0;
  box-sizing: border-box;
  width: 100%;
  padding: 20px;
  p {
    text-align: right;
    padding: 20px 0;
    &:last-child {
      animation: outit 1.4s both;
    }
  }

  .inner {
    &.move {
      transform: translateY(0);
      transition: transform 0.4s;
    }
  }

  .cur {
    opacity: 0;
  }
}

@keyframes showit {
  0% {
    transform: translateY(100px);
  }
  100% {
    transform: translateY(0);
  }
}

@keyframes outit {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>

