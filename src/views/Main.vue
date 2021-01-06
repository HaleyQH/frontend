<template>
  <div class="row">
    <!-- 左右两屏 -->
    <div class="col-md-4">
      <!-- 左边是编辑部分 -->
      <div class="form-group">
        <input type="text" v-model="title" class="form-control" placeholder="标题">
      </div>
      <div class="form-group">
        <textarea class="form-control" v-model="content" placeholder="内容"></textarea>
      </div>
      <div class="form-group">
        <button class='btn btn-block btn-success' @click="save()">保存</button>
      </div>

    </div>
    <div class="col-md-8">
      <!-- 右边是博客内容表格部分 -->
      <table class="table table-bordered table-hover">
        <thead>
        <th class="text-center">标题</th>
        <th class="text-center">内容</th>
        <th class="text-center">编辑</th>
        <th class="text-center">删除</th>
        </thead>

      </table>
    </div>
  </div>
</template>

<script>
import {getAll, save} from "@/api/api";

export default {
  name: 'Main',
  props: {},
  data() {
    return {
      title: '',
      content: ''
    }
  },
  methods: {
    getAll() {
      getAll()
        .then(res => {
          this.title = ''
          this.content = ''
        });
    },
    save() {
      save({title: this.title, content: this.content})
        .then(() => {
          this.getAll();
        })

    }
  },
  mounted() {
    this.getAll();g
  }
}
</script>

<style scoped>

</style>
