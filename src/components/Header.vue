<template>
  <el-container>
    <el-header class="header">
      <div class="left float">
        <a class="logo" href="https://www.xiaopeng.com/?reserve_source=168801&fromto=PCPZ001">
          <img src="../assets/xiaopeng.png" width="70px" height="80" />
        </a>
      </div>

      <div class="main-wrap"><div class="main"><h2>小鹏汽车智能故障处理</h2></div></div>

      <div class="right">
        <div class="avatar">
          <el-avatar :size="50" :src="circleUrl"></el-avatar>
        </div>
        <div class="phone">
          <p  v-if="this.$route.path === '/login'">未登录</p>
          <p v-else-if="this.phoneNumber">{{this.phoneNumber}}</p>
          <p v-else ><span>请</span><router-link to="/login">登录</router-link></p>
        </div>
      </div>
    </el-header>
  </el-container>
</template>

<script>
export default {
  data() {
    return {
      circleUrl:
        "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fblog%2F202107%2F17%2F20210717232533_2edcf.thumb.1000_0.jpg&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1656864226&t=b493190a44e065bee31789d33a7c1b2b",
      phoneNumber: 1,
    };
  },
};
</script>

<style>

.main {
 position: absolute;
 left: 650px;
}
/* .main-wrap {
  margin: 0 190px 0 190px;
} */
.left {
  position: absolute;
 left: 0;
 top: 0;
 width: 200px;
}
.right {
  position: absolute;
 left: 1330px;
 top: 0;
 width: 200px;
}
.avatar {
  padding-top: 30px;
  padding-right:10px;
  float: left
}
.phone {
  padding-top: 45px;
  float:left
}
</style>
