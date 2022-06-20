<template>
  <div class="home-wrap">
    <div class="button-box">
      <el-button type="warning">应急方案</el-button>
      <el-button type="danger">自救方案</el-button>
      <el-button type="primary">保险流程</el-button>
    </div>
  </div>
</template>

<script>
export default {};
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
