<template>
  <div class="topHead-box">
    <h3>【书名】</h3>
    <h4>第一章 章节名</h4>
  </div>
</template>

<script>
export default {
  name: "topHead",
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
.topHead-box {
  background: #223;
  padding: 8 * @rem 20 * @rem;
  position: relative;
  z-index: 10;
  box-shadow: 0 0 30 * @rem 10 * @rem #223;
  display: flex;
  align-items: center;
  color: #888;

  h3 {
    font-size: 12 * @rem;
    margin-right: 6 * @rem;
  }
  h4 {
    font-size: 12 * @rem;
    transform-origin: left center;
    transform: scale(0.8);
  }
}
</style>
