<template>
  <div>
    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
      <el-form-item label="Video" prop="video">
        <el-input v-model="ruleForm.video"></el-input>
      </el-form-item>
      <el-form-item label="Title" prop="title">
        <el-input v-model="ruleForm.title"></el-input>
      </el-form-item>
      <el-form-item label="Author" prop="author">
        <el-input v-model="ruleForm.author"></el-input>
      </el-form-item>
      <el-form-item label="Content" prop="content">
        <el-input v-model="ruleForm.content"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')">立即创建</el-button>
      </el-form-item>
    </el-form>


    <el-table
      :data="tableData"
      style="width: 100%">
      <el-table-column
        prop="video"
        label="地址"
        width="180">
      </el-table-column>
      <el-table-column
        prop="title"
        label="标题"
        width="180">
        <!--        <router-link :to="`supplyList/id/0`"></router-link>-->
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
import {getData, save} from "@/api/api";

export default {
  data() {
    return {
      tableData: [],
      ruleForm: {
        video: '',
        author: '',
        title: '',
        content: ''
      },
      rules: {
        video: [
          {required: true, message: '请输入活动名称', trigger: 'blur'},
          {min: 3, max: 50, message: '长度在 3 到 5 个字符', trigger: 'blur'}
        ],
        title: [
          {required: true, message: '请输入活动名称', trigger: 'blur'},
          {min: 3, max: 50, message: '长度在 3 到 5 个字符', trigger: 'blur'}
        ],
        author: [
          {required: true, message: '请输入活动名称', trigger: 'blur'},
          {min: 3, max: 50, message: '长度在 3 到 5 个字符', trigger: 'blur'}
        ],
        content: [
          {required: true, message: '请输入活动名称', trigger: 'blur'},
          {min: 3, max: 50, message: '长度在 3 到 5 个字符', trigger: 'blur'}
        ],
      },
    }
  }, created() {
    let params = this.$route.params
    if (params.query !== undefined)
      this.Display(params)
  },
  methods: {
    async Display(params) {
      getData(params)
        .then(res => {
          this.tableData = res.data
        });
    },
    submitForm() {
      let formData = new FormData()
      for (let key in this.ruleForm) {
        formData.append(key, this.ruleForm[key]);
        this.ruleForm[key] = ''
      }
      let headers =
        {
          'Content-Type': 'multipart/form-data'
        };
      save(headers, formData)
        .then((res) => {
          console.log(res.data)
        })
    }
  }
}
</script>

<style scoped>

</style>
