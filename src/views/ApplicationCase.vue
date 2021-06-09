<template>
  <div>
    <!-- 应用案例 -->
    <!-- 背景大图 -->
    <div class="img-box bj1 position-abs-100">
      <el-image fit="cover"
                style="width:100%"
                src="https://demosc.chinaz.net/Files/DownLoad/moban/202105/moban5479/extra-images/slide-3.jpg"></el-image>

    </div>
    <div class="img-box">
    </div>

    <div class="ArticleList">
      <div class="item "
           v-for="(item,index) in news"
           :key="index">
        <div class="img ">

          <el-image style="height:100%"
                    :src="require('@/'+item.src)"
                    @click="toGoods(index)"
                    fit="contain"></el-image>

        </div>
        <div class="msg ">
          <div class="title "
               @click="toGoods(index)">{{item.title}}</div>
          <div class="message "
               @click="toGoods(index)">{{item.message}}</div>
          <div class="button ">
            <el-button type="primary"
                       @click="toGoods(index)">查看详情</el-button>
          </div>
        </div>
      </div>
    </div>
    <div v-html="ht"></div>
    <!-- 分页 -->
    <div class="page">

      <el-pagination background
                     layout="prev, pager, next"
                     :page-size="page_size"
                     @current-change="current_change"
                     :total="total">

      </el-pagination>

    </div>
  </div>
</template>

<script>
import news from "@/json/news.json";

export default {
  data () {
    return {
      news: [],
      total: 1,
      page_size: 5,
    }
  },
  created: function () {
    this.$data.news = news
    this.$data.total = news.length
    var e = 0
    var page_size = this.$data.page_size
    this.$data.news = news.slice(e, e + page_size)
  },
  methods: {

    current_change: function (e) {
      var page_size = this.$data.page_size
      e -= 1
      this.$data.news = news.slice(e * page_size, e * page_size + page_size)
    },
    
    toGoods: function (index) {
      this.$router.push({ name: 'NewsDetails', query: { i: index } })
    }

  }
}
</script>


<style lang="less" scoped>
.img-box {
  height: 300px;
  box-shadow: inset 1px 5px 10px #e6e6e6;
  margin-bottom: 100px;
  overflow: hidden;
}
.ArticleList {
  .item {
    display: flex;
    justify-content: space-around;
    margin-bottom: 20px;
    @w: 260px;
    text-align: left;
    background-color: #f7f7f7;
    padding: 20px 0;
    .img {
      width: @w;
      background-color: #f1f0f0;
      height: @w / 3 * 2;
      cursor: pointer;
    }
    .msg {
      height: @w / 3 * 2;
      cursor: pointer;

      flex: 0.9;
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      .title {
        height: 40px;
        font-size: 20px;
        font-weight: 600;
      }
      .message {
        height: 50px;
        cursor: pointer;

        // margin-top: 10px;
      }
      .button {
        width: 90px;
        height: 50px;
        cursor: pointer;

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