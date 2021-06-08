<template>
  <div>
    <!-- 产品展示 -->
    <div class="header">

      <div class="goods ">

        <div class="img ">
          <el-image :src="require('@/'+goods.src)"
                    style="height:100%"
                    fit="contain"></el-image>
        </div>

        <div class="list ">
          <div v-for="(src,index) in goods.img_list"
               :key="index"
               @click="switch_img(src)">
            <el-image :src="require('@/'+src)"
                      style="height:100%"
                      fit="contain"></el-image>
          </div>
        </div>

      </div>

      <div class="title-box ">
        <div class="title ">{{goods.title}}</div>
        <div class="message ">{{goods.message}}</div>
      </div>
    </div>

    <!-- 产品参数 -->
    <div class="tab ">
      <!-- @tab-click="handleClick" -->
      <el-tabs v-model="activeName">
        <el-tab-pane label="产品简介"
                     name="first">
          <div class="tab-pane">产品简介</div>
        </el-tab-pane>
        <el-tab-pane label="技术参数"
                     name="second">
          <div class="tab-pane">技术参数</div>
        </el-tab-pane>
        <el-tab-pane label="运用案例"
                     name="third">
          <div class="tab-pane">运用案例</div>
        </el-tab-pane>

      </el-tabs>
    </div>

  </div>
</template>

<script>
import goods from "@/json/goods.json";

export default {
  data () {
    return {
      activeName: 'first',
      goods: {}
    }
  },
  created: function () {
    this.$data.goods = goods[this.$route.query.i]


    var id = this.$route.query.id
    if (id) {

      goods.forEach((element) => {
        var id_d = element["id"];
        if (id + "" == id_d + "") {
          this.$data.goods = element;
        }
      });

    }


  },
  methods: {
    switch_img (src) {
      this.$data.goods.src = src
    }
  }
}
</script>

<style lang="less" scoped>
@goods_width: 380px;
.header {
  display: flex;
  justify-content: start;
}

.title-box {
  margin-top: 100px;
  margin-left: 100px;
  height: @goods_width / 3 * 2.5;
  flex: 1;
  text-align: left;
  .title {
    // width: 100px;
    height: 50px;
    font-size: 25px;
    font-weight: 600;
  }
  .message {
    // width: 100px;
    margin-top: 10px;
    height: 40px;
  }
}

.goods {
  margin-top: 100px;
  margin-bottom: 100px;
  width: @goods_width;
  height: @goods_width / 3 * 2.5;
  .img {
    width: @goods_width * 0.7;
    height: @goods_width * 0.6;
    margin: 0 auto;
  }
  .list {
    margin-top: @goods_width * 0.1;
    height: 50px;
    display: flex;
    justify-content: space-around;
    div {
      width: 80px;
      height: 40px;
      // margin: 5px;
      // background-color: rgb(156, 193, 196);
      border: rgba(197, 197, 197, 0.418) 1px solid;
      // float: left;
      cursor: pointer;
    }
  }
}

.tab {
  .tab-pane {
    min-height: 800px;
  }
  margin-bottom: 80px;
}
</style>

<style lang="less">
.el-tabs__nav-wrap::after {
  background-color: rgba(255, 255, 255, 0);
}
.el-tabs__active-bar {
  height: 5px;
  background-color: rgba(107, 214, 45, 0.966);
}

.el-tabs__nav-scroll {
  display: flex;
  // justify-content: center;
  .el-tabs__item {
    padding: 0 20px;
    color: rgba(46, 92, 19, 0.966);
  }
}
.el-tabs__item.is-active {
  color: rgba(46, 92, 19, 0.966);
}
</style>