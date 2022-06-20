<template>
  <div>
    <div class="home-left"></div>
    <div class="home-wrap">
      <el-button class="policePhone">
        <div><img src="../assets/phone.png" alt="" width="50px"></div>
        <span style="color: #89B843">110</span>
      </el-button>
      <div class="crashBox">
        <div class="crashInfo">
          尊敬的p7车主您好，您的车辆发生了巨大车祸，车辆轮胎损坏、电机报废、a柱完全变形，已经为您<span
            style="color: red"
            >自动报警</span
          >并传递您所在位置。
        </div>
        <div class="question">请问您现在<span style="color: red">意识清醒</span>嘛？</div>
        <div class="countdown-icon"><img src="../assets/clock.png" alt="" width="40px" style="font-color: red"></div>
        <div class="countdown">{{this.times}}</div>
        <div class="button-box">
          <el-button type="success" class="crash-button" @click="toClear">是</el-button>
          <el-button type="danger" class="crash-button" @click="toNotClear">否</el-button>
        </div>
        <div class="crash-tips">{{this.times}}s后自动认为不清醒</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      times: 10
    }
  },
  created() {
    this.getTime()
  },
  updated() {
    if (this.times === 0) {
      this.$router.push('/severity/notclear')
    }
  },
  methods: {
    getTime() {
      // this.timer = setInterval(() => {
      //   this.times--;
      //   if (this.times === 0) {
      //     clearInterval(this.timer)
      //     this.$router.push('/severity/notclear')
      //   }
      // }, 1000)
    },
    toClear() {
      this.$router.push('/severity/clear')
    },
    toNotClear() {
      // this.$router.push('/severity/notclear')
      this.times = 0
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
.policePhone {
  position: absolute;
  left: 100px;
  margin-top: 10px;
  border: 0px;
}
.crashBox {
  position: absolute;
  left: 100px;
  border: 1px solid;
  border-radius: 50px;
  width: 1075px;
  height: 500px;
  margin-top: 80px;
}
.crashInfo {
  position: absolute;
  width: 950px;
  left: 50px;
  top: 25px;
  text-align: left;
  font-size: 32px;
  font-weight: bold;
}
.question {
  position: absolute;
  left: 250px;
  top: 145px;
  
  font-size: 40px;
  font-weight: 900;
}
.countdown {
  position: absolute;
  right: 300px;
  top: 155px;
  font-size: 40px;
  color: red;
}
.countdown-icon {
  position: absolute;
  right: 340px;
  top: 155px;
  color: red;
  font-size: 40px;

}
.crash-button {
  position: absolute;
  left: 300px;
  top: 245px;
  border-radius: 25px;
  width: 151px;
  height: 70px;
  font-size: 40px;
  margin-right: 200px;
}

.el-button:nth-child(n + 1) {
  margin: 0px 300px;
}
.el-button:first-child {
  margin-left: 0px;
}
.crash-tips {
  position: absolute;
  left: 400px;
  color: red;
  font-size: 24px;
  top: 345px;
}
</style>
