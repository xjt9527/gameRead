<template>
  <div class="topHead-box">
    <h3>《书名》</h3>
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
.topHead-box {
  background: #334;
  padding: 15px 40px;
  position: relative;
  z-index: 10;
  box-shadow: 0 0 60px 20px #334;
  display: flex;
  align-items: center;
  color: #888;

  h3 {
    font-size: 20px;
    margin-right: 10px;
  }
  h4 {
    font-size: 20px;
    transform-origin: left center;
    transform: scale(0.8);
  }
}
</style>
