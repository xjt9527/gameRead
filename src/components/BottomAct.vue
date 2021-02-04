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
.bottomAct-box {
  background: #334;
  padding: 15px 40px;
  position: relative;
  z-index: 10;
  box-shadow: 0 0 60px 20px #334;
  h3 {
    font-size: 20px;
    color: #666567;
  }
  h4 {
    font-size: 20px;
    transform-origin: left center;
    transform: scale(0.8);
    color: #888;
  }
}
</style>
