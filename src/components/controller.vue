<template>
  <div class="controller"></div>
</template>

<script>
import story from "../assets/script/story";
export default {
  name: "controller",
  data() {
    return {
      count: 12,
    };
  },
  mounted() {
    console.log("mm");
  },
  created() {
    console.log(story);
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
</style>
