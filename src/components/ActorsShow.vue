<template>
  <div class="actors-box" v-show="actData.length">
    <template v-if="actData.length">
      <div
        class="oactor"
        :class="item.status"
        v-for="(item, index) in actData"
        :key="index"
      >
        <div class="mode" :class="{ ['act-' + item.id]: true }"></div>
      </div>
    </template>
  </div>
</template>

<script>
export default {
  name: "stage-show",
  props: { actData2: Object },
  data() {
    return {
      actData: {},
    };
  },
  computed: {},
  methods: {
    change(data) {
      this.actData = data;
    },
  },
  mounted() {},
};
</script>

<style lang="less" scoped>
.actors-box {
  position: absolute;
  width: 100%;
  height: 420px;
  bottom: 0;
  left: 0;
  .oactor {
    position: absolute;
    width: 260px;
    height: 400px;
    &.left {
      left: 20px;
      transform-origin: left bottom;
    }
    &.right {
      transform-origin: right bottom;
      right: 20px;
    }
    &.talk {
      animation: cur 0.4s both;
    }

    &.in {
      animation: in 0.4s both;
    }
    &.wait {
      animation: wait 0.4s both;
    }

    &.out {
      animation: out 0.4s both;
    }

    .mode {
      width: 260px;
      height: 400px;

      background-size: 100% auto;
      background-position: center bottom;
      background-repeat: no-repeat;
      &.act-1 {
        background-image: url(../assets/img/pic-p1-2.png);
      }
      &.act-2 {
        background-image: url(../assets/img/pic-p2-1.png);
      }
    }
  }
}

@keyframes in {
  0% {
    opacity: 0;
    transform: translateY(40px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
@keyframes wait {
  0% {
    opacity: 1;
    transform: scale(1);
  }
  100% {
    opacity: 0.6;
    transform: scale(0.95);
  }
}

@keyframes cur {
  0% {
    opacity: 0.8;
    transform: scale(0.95);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}

@keyframes out {
  0% {
    opacity: 1;
    transform: translateY(0);
  }
  100% {
    opacity: 0;
    transform: translateY(40px);
  }
}
</style>
