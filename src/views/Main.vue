<template>
  <div :style="style">
    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" class="ruleForm" :inline="true">
      <el-form-item prop="theme">
        <el-select v-model="ruleForm.theme" placeholder="主题">
          <el-option label="作者" value="author"></el-option>
          <el-option label="标题" value="title"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item prop="query">
        <el-input v-model="ruleForm.query" class="input"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')">搜索</el-button>
      </el-form-item>
    </el-form>

  </div>
</template>

<script>
import {getData} from "@/api/api";

export default {
  name: 'Main',
  data() {
    return {
      style: {
        width: '100%',
        height: '100%',
        backgroundImage: 'url(' + require('../assets/img/background.jpg') + ')',
        backgroundSize: '100% 100%'
      },
      ruleForm: {
        theme: '',
        query: '',
      },
      rules: {
        query: [
          {required: true, message: '请输入活动名称', trigger: 'blur'},
          {min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur'}
        ],
      },
    }
  },
  methods: {
    async Display(params) {
      getData(params)
        .then(res => {
          this.tableData = res.data
        });
    }, submitForm() {
      // this.$refs[ruleForm].validate((valid) => {
      //   if (valid) {
      let formData = JSON.stringify(this.ruleForm)
      formData = JSON.parse(formData)
      for (let key in this.ruleForm) {
        this.ruleForm[key] = ''
      }
      this.$router.push({name: "Search", params: formData});
      // } else {
      //   console.log('error submit!!');
      //   return false;
    }
    // });
  }, beforeRouteLeave(to, from, next) {
    to.meta.keepAlive = false;
    next();
  }
}
</script>

<style scoped>
.ruleForm {
  position: absolute;
  top: 50%;
  left: 30%;
}

</style>
