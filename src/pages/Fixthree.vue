<template>
  <div class="home-wrap">
    <el-button size="mini" round>←</el-button>
    处理方案
    <div class="crash-box">
      <div class="button1-box">
        <button class="button-ex" @click="solution(0)">方案一</button>
      </div>
      <div class="button2-box">
        <button class="button-ex" @click="solution(1)">方案二</button>
      </div>
      <div class="button3-box">
        <button class="button-ex" @click="solution(2)">方案三</button>
      </div>
      <div class="article-ex">
        {{this.desc}}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      desc: ""
    };
  },
  methods: {
    solution(num) {
      this.desc = this.$store.state.error.errSolution[num].desc
      console.log(this.desc);
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
  font-size: 20px;
  font-weight: 500;
  width: 500px;
  height: 500px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}
</style>
