<template>
  <!--登录表单的容器-->
  <div class="login_container">
    <!--  登陆区域-->
    <div class="login_box">
      <div class="avatar_box">
        <!-- 头像-->
        <img src="../assets/img/1.gif">
      </div>

      <el-form ref="loginForm" :rules="loginRules" :model="loginForm" class="login_form" label-width="0px">
        <el-form-item prop="username">
          <el-input v-model="loginForm.username" prefix-icon="el-icon-user"></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input v-model="loginForm.password" prefix-icon="el-icon-lock"></el-input>
        </el-form-item>

        <el-form-item prop="verifyCode">
          <div class="verifyCode_box">
            <el-input v-model="loginForm.verifyCode" placeholder="请输入手机验证码" prefix-icon="el-icon-mobile"
                      class="verifyCode"></el-input>
            <img src="../assets/img/images.gif" alt="" class="verifyCode_img">
          </div>
        </el-form-item>


        <el-form-item class="login_btn">
          <el-button type="primary" @click="submitForm('loginForm')">立即创建</el-button>
          <el-button @click="resetForm('loginForm')">取消</el-button>
        </el-form-item>
      </el-form>

    </div>
    <!--  表单-->
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: "Login",
  data() {
    return {
      baseURL:'http://127.0.0.1:8090/polls/',
      loginForm: {
        username: '',
        password: '',
        verifyCode: ''
      }, loginRules: {
        username: [
          {required: true, message: '请输入用户名称', trigger: 'blur'},
          {min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur'}
        ], password: [
          {required: true, message: '请输入登录密码', trigger: 'blur'},
          {min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur'}
        ], verifyCode: [
          {required: true, message: '请输入验证码', trigger: 'blur'},

        ]
      }

    }
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {


        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  }
}
</script>

<style scoped lang="less">
.login_container {
  height: 100%;
  background-color: aqua;
}

.login_box {
  width: 450px;
  height: 380px;
  background-color: azure;
  border-radius: 3px;
  position: absolute;
  left: 50%;
  top: 50%;
  //这里的left和top指的是左上角的点离上和左50%，此时加transform让点居中
  transform: translate(-50%, -50%);

  .avatar_box {
    width: 130px;
    height: 130px;
    border: 1px solid #2c3e50;
    border-radius: 50%;
    margin: -65px auto;
    background-color: azure;

    img {
      width: 100%;
      height: 100%;
      border-radius: 50%;
    }
  }
}

.login_form {
  position: absolute;
  bottom: 0px;
  width: 100%;
  padding: 0px 20px;
  box-sizing: border-box;

  .login_btn {
    display: flex;
    justify-content: flex-end;
  }

  .verifyCode_box {
    display: flex;

    .verifyCode {
      width: 70%;
      justify-content: left;
    }

    .verifyCode_img {
      width: 30%;
      justify-content: flex-end;
    }
  }
}
</style>
