<template>
  <div class="aside-box" @click="next">
    <span ref="box" class="txt" :class="{'show': show, 'out': out}">{{curTxt.txt}}</span>
  </div>
</template>

<script>
export default {
  name: "Aside",
  props: { txtData: Array },
  data() {
    return {
      txtIndex: 0,
      show: false,
      out: false,
    };
  },
  computed: {
    curTxt() {
      return this.txtData[this.txtIndex];
    },
  },
  methods: {
    next() {
      this.txtIndex++;
    },
  },
  mounted() {
    this.show = true;

    this.$refs.box.addEventListener("webkitAnimationEnd", () => {
      if (this.show) {
        setTimeout(() => {
          this.show = false;
          this.out = true;
        }, this.curTxt.t * 1000);
      }
      if (this.out) {
        this.next();
        this.show = true;
        this.out = false;
      }
    });
  },
};
</script>

<style lang="less" scoped>
.txt {
  display: block;
  text-align: center;
  margin: 120px 0;
  opacity: 0;
  &.show {
    animation: showit 0.5s both;
  }
  &.out {
    animation: outit 0.4s both;
  }
}

@keyframes showit {
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes outit {
  0% {
    opacity: 1;
    transform: translateY(0);
  }
  100% {
    opacity: 0;
    transform: translateY(-20px);
  }
}
</style>

