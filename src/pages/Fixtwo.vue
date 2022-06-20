<template>
  <div class="home-wrap">
    现场处理
    <div class="crash-box">
      <div class="time">
        预约时间选择

        <div class="time-box">
          <p class="date-picker-title">选择时间</p>
          <div class="block">
            <el-date-picker
              v-model="value1"
              type="datetimerange"
              range-separator="至"
              start-placeholder="开始日期"
              end-placeholder="结束日期"
              class="time-picker"
              time-arrow-control
            >
            </el-date-picker>
          </div>
        </div>
      </div>
      <div class="worker">
        维修人员名片
        <div class="worker-box">
          <div class="work-avatar-box">
            <el-avatar
              class="worker-avatar"
              shape="circle"
              :size="50"
              :src="circleUrl"
              >xxx</el-avatar
            >
            <el-avatar
              class="sub-avatar"
              :src="subCircleUrl"
              :size="25"
            ></el-avatar>
            <span class="worker-avatar">xxx</span>
          </div>
        </div>
        <div class="phone-info">
          <el-button circle size="mini" class="phone-info-icon">
            <div><img src="../assets/phone.png" alt="" width="30px" /></div>
          </el-button>
          <span class="phone-info-num">{{ this.workPhoneNum }}</span>
        </div>
        <div class="starbox">
          <el-rate
            v-model="value"
            disabled
            show-score
            text-color="#ff9900"
            score-template="{value}"
          >
          </el-rate>
        </div>
        <div class="worker-info">擅长xxx，xxx，xxx，好评无数......</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      circleUrl:
        "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fblog%2F202107%2F17%2F20210717232533_2edcf.thumb.1000_0.jpg&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1656864226&t=b493190a44e065bee31789d33a7c1b2b",
      subCircleUrl:
        "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Finews.gtimg.com%2Fnewsapp_bt%2F0%2F14182013103%2F1000&refer=http%3A%2F%2Finews.gtimg.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1657973210&t=18af0ec7d59a13ed15ca43b2677e02e9",
      workPhoneNum: "13123444777",
      value: 3.7,
      value1: [],
    };
  },
};
</script>

<style>
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
.time {
  position: absolute;
  width: 500px;
  height: 450px;
  left: 100px;
  top: 30px;
  text-align: left;
}
.worker {
  position: absolute;
  width: 300px;
  height: 450px;
  left: 700px;
  top: 30px;
  text-align: left;
}
.time-box {
  position: absolute;
  border: 1px solid;
  width: 500px;
  height: 400px;
  border-radius: 30px;
  margin-top: 20px;
}
.worker-box {
  position: absolute;
  border: 1px solid;
  width: 300px;
  height: 400px;
  border-radius: 30px;
  margin-top: 20px;
}
.worker-avatar {
  float: left;
  margin-left: 10px;
  margin-top: 10px;
  text-align: bottom;
}
.sub-avatar {
  position: absolute;
  left: 42px;
  top: 37px;
  text-align: bottom;
  opacity: 0.7;
}
.phone-info-icon {
  position: absolute;
  left: 20px;
  top: 100px;
  margin-top: 20px;
}
.phone-info-num {
  position: absolute;
  left: 70px;
  top: 110px;
  font-size: 30px;
  font-weight: bold;
  margin-top: 270px;
}
.starbox {
  position: absolute;
  left: 10px;
  top: 150px;
  margin-top: 15px;
  font-size: 40px;
}
.el-rate__icon {
  font-size: 40px;
}
.el-rate__text {
  font-size: 30px;
}
.worker-info {
  position: absolute;
  left: 20px;
  top: 200px;
  margin-top: 30px;
  font-size: 30px;
}
.date-picker {
  position: absolute;
  left: 50px;
  top: 50px;
  margin-top: 20px;
}
.date-picker-title {
  position: absolute;
  left: 50px;
  top: -20px;
  font-size: 30px;
}
.time-picker {
  position: absolute;
  left: 50px;
  top: 50px;
  margin-top: 20px;
}
</style>
