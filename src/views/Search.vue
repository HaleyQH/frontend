<template>
  <div>
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
    <!--      "-->
    <el-table
      :data="tableData"
      @row-click="openDetail"
      style="width: 100%">
      <el-table-column
        prop="title"
        label="标题"
        width="180">
      </el-table-column>
      <el-table-column
        prop="author"
        label="作者">
      </el-table-column>
      <el-table-column
        prop="content"
        label="内容">
      </el-table-column>
    </el-table>

  </div>
</template>

<script>
import {getData} from "@/api/api";

export default {
  name: 'Search',
  data() {
    return {
      tableData: [],
      ruleForm: {
        author: '',
        title: '',
        content: ''
      },
      rules: {
        title: [
          {required: true, message: '请输入活动名称', trigger: 'blur'},
          {min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur'}
        ],
        author: [
          {required: true, message: '请输入活动名称', trigger: 'blur'},
          {min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur'}
        ],
        content: [
          {required: true, message: '请输入活动名称', trigger: 'blur'},
          {min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur'}
        ],
      },
    }
  }, created() {
    let params = this.$route.params
    if (params.query !== undefined) {
      this.Display(params)
    }
  },
  methods: {
    async Display(params) {
      getData(params)
        .then(res => {
          this.tableData = res.data
          console.log(this.tableData)
        });
    }, submitForm() {
      let formData = JSON.stringify(this.ruleForm)
      formData = JSON.parse(formData)
      for (let key in this.ruleForm) {
        this.ruleForm[key] = ''
      }
      this.Display(formData)
    }, openDetail(row) {
      if (row) {

        // window.location.href =
        // this.$router.push({name: 'Detail', params: {video: row.video}})
        let index = row.video.lastIndexOf("\\");
        let name = row.video.substring(index+1, row.video.length);
        name = "http://localhost:8090/static/"+name
        console.log("video for search", name)

        this.$router.push({name: 'Demo', params: {video: name}})

      }
    }
  }, beforeRouteEnter(to, from, next) {
    to.meta.keepAlive = true;
    next()
  }
}
</script>

<style scoped>

</style>
