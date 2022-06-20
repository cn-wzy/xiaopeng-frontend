<template>
  <div class="home-wrap">
    <div class="login-icon"><p>登录界面</p>
    <img src="../assets/xiaopeng.png" width="40px" height="40px" class="icon-img"></div>
    <div class="login_box">
      <el-form
        ref="loginFormRef"
        :model="loginForm"
        :rules="loginFormRules"
        label-width="0px"
        class="login_form"
      >
        <el-form-item prop="username">
          <el-input
            v-model="loginForm.username"
            prefix-icon="iconfont icon-user"
            class="elinput"
            placeholder="请输入账号"
          ></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input
            type="password"
            v-model="loginForm.password"
            prefix-icon="iconfont icon-3702mima"
            class="elinput"
            placeholder="请输入密码"
          ></el-input>
        </el-form-item>
        <el-form-item class="btns">
          <el-button type="primary" @click="login">登录</el-button>
          <el-button @click="toRegister" type="info">注册</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import requests from '../api/index.js'
export default {
  name: "Login",
  data() {
    return {
      loginForm: {
        carId: '',
        username: "",
        password: "",
      },
      loginFormRules: {
        username: [
          { required: true, message: "请输入用户名", trigger: "blur" },
          {
            min: 3,
            max: 10,
            message: "长度在 3 到 10 个字符",
            trigger: "blur",
          },
        ],
        password: [
          { required: true, message: "请输入密码", trigger: "blur" },
          {
            min: 6,
            max: 15,
            message: "长度在 6 到 15 个字符",
            trigger: "blur",
          },
        ],
      },
    };
  },
  methods: {
      toRegister() {
          this.$router.push('/register')
      },
      async login() {
        let result = await requests({
          url: "/login",
          method: "post",
          data: this.loginForm,
          });
          if (result.code === 200){
            this.$router.push('/home')
          } else {
            this.$message.error(result.msg)
          }
          
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
}

.login_box {
  width: 450px;
  height: 300px;
  background-color: #fff;
  border: 3px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -35%);
}

.login-icon {
  position: absolute;
  left: 100px;
  font-size: 35px;
  color: #6fbce8;
}
.icon-img {
    position: absolute;
    left: 150px;
    top: 42px;
}
.btns {
  display: flex;
  justify-content: center;
}
.el-button {
  width: 150px;
  height: 80px;
  border-radius: 100px;
  font-size: 30px;
}
 /deep/ .el-input__inner {
  /*或者 .s2>>>.el-input__inner  */ /*调整inner的背景色，透明*/ /*调整inner的高度*/
  border-radius: 100px;
  height: 75px;
  width: 476px;
  margin-top: 30px;
  font-size: 40px;
  background-color: #EFEDED;
}
.login_form {
  position: absolute;
  bottom: 0;
  width: 100%;
  padding: 0 20px;
  box-sizing: border-box;
}
</style>
