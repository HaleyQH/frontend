<template>
  <div>
    <el-container>
      <el-header>
        <div>
        </div>
      </el-header>
      <el-container>
        <el-aside width="60%">
          <div class="video">
            <video width="640" height="480" controls autoplay>
              <source :src="video" type="video/mp4">
            </video>
          </div>
          <div class="btn">
            <el-button type="primary" button @click="back" icon="el-icon-reading">pdf</el-button>
            <el-button type="primary" button @click="back" icon="el-icon-s-data">数据集</el-button>
            <el-button type="primary" button @click="back" icon="el-icon-s-release">代码</el-button>
          </div>
        </el-aside>
        <el-main>
          <div>
            数据库中的数据表之间的关系包括一对一，一对多，多对多，它们分别使用关键字OneToOneField,ForeignKey,ManyToManyFiled进行定义，之前已经写了一对多，多对多介绍以及使用，准备再找一个时间写一下它们之间的一个区别，这三种关系中比较让你不好理解的可能就是一对一和一对多的区别了，暂时按下不表
          </div>
        </el-main>
      </el-container>
    </el-container>


    <div>

    </div>


  </div>
</template>

<script>
import {getVideo} from "@/api/api";

export default {
  data() {
    return {
      video:[]
    }
  }, created() {
    let params = this.$route.params
    if (params.video !== undefined)
      this.video = params.video
    // this.Display(params)
  },
  methods: {
    async Display(params) {
      getVideo(params)
        .then(res => {
          this.video = res.data
        });
    },
    back() {
      this.$router.push({name: 'Search'})
    }
  }
}
</script>

<style lang="less" scoped>
.video {
  text-align: center;

}

.btn {
  text-align: center;

  button {
    width: 15%;
    margin: 0 10px;
  }
}
</style>
