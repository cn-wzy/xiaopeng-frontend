<template>
  <div class="home-wrap">
    <el-button size="mini" round>←</el-button>
    处理方案
    <div class="crash-box">
      <div class="button1-box">
        <button class="button-ex" @click="handle(0)">故障一</button>
      </div>
      <div class="button2-box">
        <button class="button-ex" @click="handle(1)">故障二</button>
      </div>
      <div class="button3-box">
        <button class="button-ex" @click="handle(2)">故障三</button>
      </div>
      <div class="article-ex">
        {{carError}}
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
      carError: ''
    };
  },
  methods: {
    handle(x) {
      this.carError = this.$store.state.car.carError.exceptions[x].desc
    },
  },
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
.el-button:first-child {
  position: absolute;
  left: 120px;
  top: 10px;
  font-size: 20px;
  font-weight: 100000;
  padding-top: 2px;
  border: 0;
}
.button1-box {
  position: absolute;
  left: 170px;
  top: 45px;
  border-radius: 25px;
  width: 151px;
  height: 70px;
  font-size: 40px;
  margin-right: 200px;
}
.button2-box {
  position: absolute;
  left: 170px;
  top: 195px;
  border-radius: 25px;
  width: 151px;
  height: 70px;
  font-size: 40px;
  margin-right: 200px;
}
.button3-box {
  position: absolute;
  left: 170px;
  top: 340px;
  border-radius: 25px;
  width: 151px;
  height: 70px;
  font-size: 40px;
  margin-right: 200px;
}
.button-ex {
  width: 200px;
  height: 80px;
  font-size: 36px;
  background-color: #a8f406;
  border: 1px;
  border-radius: 20px;
}
.article-ex {
  float: right;
  margin-top: 45px;
  margin-right: 80px;
  font-size: 40px;
  font-weight: 800;
  width: 500px;
  height: 500px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}
</style>
