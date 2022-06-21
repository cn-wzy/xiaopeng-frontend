<template>
  <el-container>
    <el-header class="header">
      <div class="left float">
        <a
          class="logo"
          href="https://www.xiaopeng.com/?reserve_source=168801&fromto=PCPZ001"
        >
          <img src="../assets/xiaopeng.png" width="70px" height="80" />
        </a>
      </div>

      <div class="main-wrap">
        <div class="main"><h2>小鹏汽车智能故障处理</h2></div>
      </div>

      <div class="right">
        <div class="avatar">
          
        </div>
        <div class="phone">
          <p v-if="userName">{{ userName }}</p>
          <p v-else-if="this.$route.path === '/login'">未登录</p>

          <p v-else>
            <span>请</span><router-link to="/login">登录</router-link>
          </p>
        </div>
      </div>
    </el-header>
  </el-container>
</template>

<script>
export default {
  data() {
    return {};
  },
  computed: {
    userName() {
      return this.$store.state.user.loginForm.username;
    },
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
  padding-right: 10px;
  float: left;
}
.phone {
  padding-top: 45px;
  float: left;
}
</style>
