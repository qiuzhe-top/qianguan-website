<template>
  <div>
    <!-- 应用案例 -->
    <!-- 背景大图 -->
    <div class="img-box bj1 position-abs-100">
    </div>
    <div class="img-box">
    </div>

    <div class="ArticleList">
      <div class="item bj1"
           v-for="(item,index) in list "
           :key="index">
        <div class="img bj2"></div>
        <div class="msg bj2">
          <div class="title bj3"></div>
          <div class="message bj3"></div>
          <div class="button bj3"></div>
        </div>
      </div>
    </div>

    <!-- 分页 -->
    <div class="page bj1">
      <el-pagination background
                     layout="prev, pager, next"
                     :total="1000">
      </el-pagination>
    </div>
  </div>
</template>

<script>
import goods from "@/json/goods.json";

export default {
  data () {
    return {
      list: [1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1]
    }
  },
  created:{

  }
}
</script>


<style lang="less" scoped>
.img-box {
  height: 300px;
  box-shadow: inset 1px 5px 10px #bfbfbf73;
  margin-bottom: 100px;
}
.ArticleList {
  .item {
    display: flex;
    justify-content: space-around;
    margin-bottom: 20px;
    @w: 260px;
    .img {
      width: @w;
      height: @w / 3 * 2;
    }
    .msg {
      height: @w / 3 * 2;
      flex: 0.9;
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      .title {
        height: 40px;
      }
      .message {
        height: 50px;
        // margin-top: 10px;
      }
      .button {
        width: 90px;
        height: 50px;
        // margin-top: 10px;
      }
    }
  }
}
.page {
  margin-top: 80px;
  margin-bottom: 180px;
}
</style>