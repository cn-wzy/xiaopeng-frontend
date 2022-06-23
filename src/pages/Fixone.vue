<template>
  <div class="home-wrap">
    前往维修厂
    <div class="crash-box">
      <div id="container">
        <MAP></MAP>
      </div>
    </div>
  </div>
</template>

<script>
import MAP from "./map.vue";

// import { BMPGL } from "@/bmpgl.js";
export default {
  name: "fixone",
  components: { MAP },
  mounted() {},

  methods: {},
};
</script>

<style scoped>
.home-wrap {
  position: absolute;
  left: 250px;
  margin-top: 30px;
  border: solid 1px;
  border-radius: 100px;
  height: 600px;
  width: 1250px;
  font-size: 25px;
  font-weight: 600;
  text-align: center;
}
.crash-box {
  position: absolute;
  left: 130px;
  border: 1px solid;
  border-radius: 50px;
  width: 1075px;
  height: 530px;
  margin-top: 20px;
}
#container {
  width: 1075px;
  height: 530px;
  border-radius: 50px;
}
</style>
