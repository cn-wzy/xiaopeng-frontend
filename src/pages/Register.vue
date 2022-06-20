<template>
  <div class="home-wrap">
    <p class="congratulation-word">恭喜您成为尊贵的小鹏车主</p>
    <img
      src="../assets/gongxi.png"
      width="40"
      height="40"
      class="congratulation-icon"
    />
    <div class="login-icon">
      <p>注册页面</p>
      <img
        src="../assets/xiaopeng.png"
        width="40px"
        height="40px"
        class="icon-img"
      />
    </div>

    <div class="login_box">
      <el-form
        ref="loginFormRef"
        :model="loginForm"
        :rules="loginFormRules"
        label-width="0px"
        class="login_form"
      >
        <el-form-item prop="uniId">
          <el-input
            type="password"
            v-model="loginForm.uniId"
            prefix-icon="iconfont icon-3702mima"
            class="elinput"
            placeholder="请输入车辆唯一识别码"
          ></el-input>
        </el-form-item>
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
        <el-form-item prop="rePassword">
          <el-input
            type="password"
            v-model="loginForm.rePassword"
            prefix-icon="iconfont icon-3702mima"
            class="elinput"
            placeholder="请再输入一遍密码"
          ></el-input>
        </el-form-item>
        <el-form-item class="btns">
          <el-button type="primary" @click="register">注册</el-button>
          <el-button @click="returnLogin" type="info">返回</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script >
export default {
  name: "Login",
  data() {
      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else {
          if (this.loginForm.rePassword !== '') {
            this.$refs.loginForm.validateField('rePassword');
          }
          callback();
        }
      };
      var validatePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'));
        } else if (value !== this.loginForm.password) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      };
    return {
      loginForm: {
        username: "",
        password: "",
        rePassword: "",
        uniId: ""
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
          { validator: validatePass, trigger: 'blur' },
        ],
        rePassword: [
            { required: true, message: "请再次输入密码", trigger: "blur" },
            { validator: validatePass2, trigger: 'blur' }
        ],
        uniId: [
            { required: true, message: "请输入车辆唯一标识", trigger: "blur" }
        ]
      },
    };
  },
  methods: {
      register() {
          this.$router.push('/login')
      },
      returnLogin() {
          this.$router.push('/login')
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
  background-color: rgb(197, 227, 240);
}
.congratulation-word {
  position: absolute;
  left: 400px;
  top: 0px;
  font-size: 26px;
  color: red;
}
.congratulation-icon {
  position: absolute;
  left: 720px;
  top: 24px;
}
.login_box {
  width: 450px;
  height: 400px;
  background-color: #fff;
  border: 3px;
  position: absolute;
  left: 45%;
  top: 45%;
  transform: translate(-50%, -35%);
  background-color: rgb(197, 227, 240);
}

.login-icon {
  position: absolute;
  left: 100px;
  top: 30px;
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
  width: 130px;
  height: 60px;
  border-radius: 100px;
  font-size: 30px;
}
/* 设置elementui的组件样式需要找其真正的类 */
/* 在scoped中需要设置scoped 使用/deep/ ，两边要加空格。使用 >>> ，两边要加空格 。 */
 /deep/ .el-input__inner {
  /*或者 .s2>>>.el-input__inner  */ /*调整inner的背景色，透明*/ /*调整inner的高度*/
  border-radius: 100px;
  height: 45px;
  width: 350px;
  margin-top: 0px;
  font-size: 30px;
  background-color: #efeded;
}
.login_form {
  position: absolute;
  bottom: 0;
  width: 100%;
  padding: 0 20px;
  box-sizing: border-box;
}
</style>
