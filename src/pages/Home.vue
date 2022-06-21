<template>
  <div class="container-wrap">
    <link
      rel="stylesheet"
      href="//at.alicdn.com/t/font_3449839_vu7y25bx3j.css"
    />
    <div class="home-left"></div>
    <div class="home-wrap">
      <!-- <div :class="bcimg"></div> -->
      <div class="cls-title">
        <h2>轮胎信息</h2>
      </div>
      <div id="container-chart"></div>
      <div class="bottom-button">
        <el-button
          class="iconfont icon-luntai"
          circle
          @click="wheelHandle"
        ></el-button>
        <el-button
          class="iconfont icon-zhongkong"
          type="primary"
          circle
          @click="airbagHandle"
        ></el-button>
        <el-button
          class="iconfont icon-youxiang"
          type="success"
          circle
          @click="refrigerantHandle"
        ></el-button>
        <el-button
          class="iconfont icon-dianchi"
          type="info"
          circle
          @click="engineHandle"
        ></el-button>
        <el-button
          class="iconfont icon-VIP"
          type="warning"
          circle
          @click="wheelRevHandle"
        ></el-button>
      </div>
      <div class="bottom-button-title">
        <p class="first-button-title">轮胎</p>
        <p>气囊</p>
        <p>制冷</p>
        <p>引擎</p>
        <p>转速</p>
      </div>
    </div>
  </div>
</template>
<script>
import * as echarts from "echarts";
export default {
  name: "App",
  components: {},
  data() {
    return {
      
      serie: {
        name: "胎压",
        type: "gauge",
        min: 0,
        max: 5,
        detail: { formatter: "{value}kpa" },
        data: [
          { value: this.$store.state.car.carInfo.wheelPressure, name: "胎压" },
        ],
      },
    };
  },
  computed: {
    // bcimg() {
    //   if (this.carName === "p7") return "bc-img-p7";
    //   if (this.carName === "p5") return "bc-img-p5";
    //   if (this.carName === "g3i") return "bc-img-g3i";
    //   if (this.carName === "g9") return "bc-img-g9";
    //   return "bc-img-p7";
    // },
  },
  mounted() {
    this.$store.dispatch("getCarInfo");
    this.getEchartLoad();
  },
  methods: {
    wheelHandle() {
      this.serie = {
        name: "胎压",
        type: "gauge",
        min: 0,
        max: 5,
        detail: { formatter: "{value}kpa" },
        data: [
          { value: this.$store.state.car.carInfo.wheelPressure, name: "胎压" },
        ],
      };
      this.getEchartLoad()
    },
    engineHandle() {
      // console.log(this.$store.state.car.carInfo.engineTemperature);
      this.serie = {
        name: "引擎温度",
        type: "gauge",
        min: 0,
        max: 100,
        detail: { formatter: "{value}℃" },
        data: [
          {
            value: this.$store.state.car.carInfo.engineTemperature,
            name: "引擎温度",
          },
        ],
      };
      this.getEchartLoad();
    },
    refrigerantHandle() {
      this.serie = {
        name: "制冷系统温度",
        type: "gauge",
        min: 0,
        max: 100,
        detail: { formatter: "{value}℃" },
        data: [
          {
            value: this.$store.state.car.carInfo.refrigerantTTemperature,
            name: "制冷系统温度",
          },
        ],
      };
      this.getEchartLoad();
    },
    airbagHandle() {
      this.serie = {
        name: "气囊压力",
        type: "gauge",
        min: 0,
        max: 100,
        detail: { formatter: "{value}%" },
        data: [
          {
            value: this.$store.state.car.carInfo.airBagPressure,
            name: "气囊压力",
          },
        ],
      };
      this.getEchartLoad();
    },
    wheelRevHandle() {
      this.serie = {
        name: "轮子转速",
        type: "gauge",
        min: 0,
        max: 10000,
        detail: { formatter: "{value}RPM" },
        data: [{ value: this.$store.state.car.carInfo.wheelRev, name: "转速" }],
      };
      this.getEchartLoad();
    },
    getEchartLoad() {
      this.$nextTick(() => {
        let myChart = echarts.init(document.getElementById("container-chart"));
        let option = {
          tooltip: {
            formatter: "{a} <br/>{b} : {c}%",
          },
          toolbox: {},
          series: [this.serie],
        };
        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
      });
    },
  },
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
#container-chart {
  position: absolute;
  left: 10px;
  top: 50px;
  width: 1250px;
  height: 500px;
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
