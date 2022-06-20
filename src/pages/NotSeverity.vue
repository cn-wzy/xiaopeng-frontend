<template>
  <div class="home-wrap">
    <div class="button-box">
      <el-button type="warning" @click="handleClick(1)">前往维修厂</el-button>
      <el-button type="danger" @click="handleClick(2)">现场维修</el-button>
      <el-button type="primary" @click="handleClick(3)">自行解决</el-button>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    handleClick(num) {
      this.$router.push(`/fix/${num}`);
    }
  }
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
}
.button-box {
    position: absolute;
    width: 500px;
    left: 400px;
    align-items: center;
}
.el-button {
    width: 500px;
    height: 120px;
    margin: 40px 0px;
    font-size: 40px;
}
</style>
