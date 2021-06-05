<template>
  <div>
    <!-- 产品展示 -->
    <div class="header">
      <div class="goods bj1">
        <div class="img bj2"></div>
        <div class="list bj2">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
      <div class="title-box bj1">
        <div class="title bj2"></div>
        <div class="message bj2"></div>
      </div>
    </div>

    <!-- 产品参数 -->
    <div class="tab bj1">

      <el-tabs v-model="activeName"
               @tab-click="handleClick">
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

export default {
  data () {
    return {
      activeName: 'first'
    }
  },
  
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
  .title {
    // width: 100px;
    height: 50px;
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
      margin: 5px;
      background-color: rgb(156, 193, 196);
      // float: left;
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