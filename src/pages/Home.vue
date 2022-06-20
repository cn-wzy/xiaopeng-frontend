<template>
  <div class="container-wrap">
    <link
      rel="stylesheet"
      href="//at.alicdn.com/t/font_3449839_vu7y25bx3j.css"
    />
    <div class="home-left"></div>
    <div class="home-wrap">
      <div :class="bcimg"></div>
      <div class="cls-title">
        <h2>轮胎信息</h2>
      </div>
      <div>{{this.carInfo}}</div>
      <div class="bottom-button">
        <el-button class="iconfont icon-luntai" circle></el-button>
        <el-button
          class="iconfont icon-zhongkong"
          type="primary"
          circle
        ></el-button>
        <el-button
          class="iconfont icon-youxiang"
          type="success"
          circle
        ></el-button>
        <el-button class="iconfont icon-dianchi" type="info" circle></el-button>
        <el-button class="iconfont icon-VIP" type="warning" circle></el-button>
      </div>
      <div class="bottom-button-title">
        <p class="first-button-title">轮胎</p>
        <p>中控</p>
        <p>油箱</p>
        <p>电机</p>
        <p>权益</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "App",
  components: {},
  data() {
    return {
      carName: 'p5',
      carInfo: "轮胎耐久度100"
    }
  },
  computed: {
    bcimg() {
      if (this.carName === 'p7') return 'bc-img-p7'
      if (this.carName === 'p5') return 'bc-img-p5'
      if (this.carName === 'g3i') return 'bc-img-g3i'
      if (this.carName === 'g9') return 'bc-img-g9'
      return 'bc-img-p7'
    }
  }
};
</script>
<style scoped>
.home-left {
  float: left;
  width: 50px;
}
.home-wrap {
  position: absolute;
  left: 250px;
  margin-top: 30px;
  border: solid 1px;
  border-radius: 100px;
  height: 600px;
  width: 1250px;
}
.bc-img-p7 {
  position: absolute;
  border: solid 1px;
  border-radius: 100px;
  height: 600px;
  width: 1250px;
  background-image: url(../assets/background.jpg);
  opacity: 0.2;
}
.bc-img-p5 {
  position: absolute;
  border: solid 1px;
  border-radius: 100px;
  height: 600px;
  width: 1250px;
  background-image: url(../assets/p5.png);
  opacity: 0.2;
}
.bc-img-g3i {
  position: absolute;
  border: solid 1px;
  border-radius: 100px;
  height: 600px;
  width: 1250px;
  background-image: url(../assets/background.jpg);
  opacity: 0.2;
}
.bc-img-g9 {
  position: absolute;
  border: solid 1px;
  border-radius: 100px;
  height: 600px;
  width: 1250px;
  background-image: url(../assets/background.jpg);
  opacity: 0.2;
}

.cls-title {
  margin-left: 80px;
  padding-left: 0px;
  text-align: left;
  float: left;
  width: 100%;
}
.bottom-button {
  position: fixed;
  bottom: 40px;
  margin-left: 80px;
  margin-bottom: 10px;
}
.bottom-button-title {
  position: fixed;
  bottom: 0px;
  margin-left: 80px;
  margin-bottom: 10px;
  height: 50px;
}
.el-button {
  width: 80px;
  height: 80px;
  font-size: 50px;
}
p {
  width: 35px;
  height: 20px;
  font-size: 16px;
  float: left;
  margin-left: 145px;
}
.el-button:nth-child(n + 1) {
  margin: 0px 50px;
}
.el-button:first-child {
  margin-left: 200px;
}
.first-button-title {
  margin-left: 222px;
}
</style>
