<!--
 * @Descripttion: ''
 * @version: ''
 * @Author: 周涛
 * @Date: 2021-08-16 18:53:16
 * @LastEditors: 周涛
 * @LastEditTime: 2021-08-19 17:23:14
-->
<template>
  <div class="login">
    <h3 class="login-title">登 录</h3>
    <div class="login-box">
      <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="80px" class="demo-ruleForm">
        <el-form-item label="账号" prop="account">
          <el-input type="text" v-model="ruleForm.account" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input type="password" v-model="ruleForm.password" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
          <el-button @click="resetForm('ruleForm')">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    var validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        let reg = new RegExp(/^(?![0-9]+$)(?![a-zA-Z]+$)[0-9a-zA-Z]{6,16}$/);
        if(!reg.test(value)){
          callback(new Error("请密码格式不正确"));
        }else{
          callback();
        }
      }
    };
    return {
      ruleForm: {
        account: "",
        password: "",
      },
      rules: {
        account: [
          {
            required: true, 
            message: '请输入账号',
            trigger: "blur",
          },
        ],
        password: [
          {
            validator: validatePass,
            trigger: "blur",
          },
        ],
      },
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.ls.setStore('USER_INFO', this.$refs[formName].model.account);
          this.$router.push("/home");
        } else {
          // console.log(this.$refs[formName].model);
          if(this.$refs[formName].model.account && this.$refs[formName].model.password){
            this.$message.error('账号或密码错误!');
          } else {
            this.$message.error('账号或密码不能为空!');
          }
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
  },
};
</script>

<style lang="scss" scoped>
.login {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .login-title {
    font-size: 26px;
    font-weight: bold;
    margin-bottom: 30px;
  }

  .login-box {
    width: 25%;
    min-height: 25%;
    padding: 20px;
    padding-top: 50px;
    background: #fff;
    box-shadow: 0px -5px 3px 3px #999, /*上边阴影*/ -5px 0px 3px 3px #999,
      /*左边阴影*/ 5px 0px 3px 3px #999, /*右边阴影*/ 0px 5px 3px 3px #999;
    /*下边阴影*/
  }
}
</style>
