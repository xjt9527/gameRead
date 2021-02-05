<template>
  <div class="bottomAct-box">
    <h3>bottom</h3>
  </div>
</template>

<script>
export default {
  name: "bottomAct",
  props: { txtData: Array },
  data() {
    return {};
  },
  computed: {},
  methods: {},
  mounted() {},
};
</script>

<style lang="less" scoped>
@rem: 0.05rem;
.bottomAct-box {
  background: #223;
  padding: 6 * @rem 20 * @rem;
  position: relative;
  z-index: 10;
  box-shadow: 0 0 30 * @rem 10 * @rem #334;
  h3 {
    font-size: 10 * @rem;
    color: #666567;
  }
  h4 {
    font-size: 12 * @rem;
    transform-origin: left center;
    transform: scale(0.8);
    color: #888;
  }
}
</style>
