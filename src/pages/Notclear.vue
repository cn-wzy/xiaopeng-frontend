<template>
  <div class="home-wrap">
    <el-button class="policePhone">
      <div><img src="../assets/phone.png" alt="" width="50px" /></div>
      <span style="color: #89b843">110</span>
    </el-button>
    <div class="crash-box">
      <img src="../assets/warn.png" alt="" class="warn-img" />
      <p class="SOS">SOS</p>
    </div>
    <div class="todo">
      <p>已报警</p>
      <p>危险报警闪光灯已打开</p>
      <p>打开车主保护机制 等待救援</p>
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
.crash-box {
  position: absolute;
  left: 100px;
  border: 1px solid;
  border-radius: 50px;
  width: 1075px;
  height: 500px;
  margin-top: 80px;
}
.policePhone {
  position: absolute;
  left: 100px;
  border: 0px;
}
.warn-img {
  float: left;
  width: 300px;
  height: 300px;
  margin-left: 100px;
}
.SOS {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-size: 100px;
  color: red;
  float: right;
  width: 250px;
  height: 250px;
  margin-right: 200px;
  margin-top: 100px;
}
.todo {
  position: absolute;
  top: 370px;
  left: 220px;
  width: 800px;
  height: 200px;
  font-size: 25px;
  font-weight: 800;
  text-align: center;
}
p {
  text-align: center;
}
</style>
