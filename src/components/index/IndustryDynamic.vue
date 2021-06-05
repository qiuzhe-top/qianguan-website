<template>
  <div class="industry_dynamic">

    <el-row>
      <h1 class="index-h2">公司动态</h1>
      <!-- 左边 -->
      <el-col :md="12"
              class="box-left">

        <el-image :src="src"
                  class="img"></el-image>
        <h2>蓝山：开展桥梁检测</h2>
        <p>”据蓝山县公路建设养护负责人介绍，当前公路养护重点是抓排查保稳定，加大公路巡查力度，对桥涵及危险路段做到勤巡路、勤排查、勤修复</p>

        <div class="line-r">
          <div></div>
        </div>

      </el-col>

      <!-- 右边 -->
      <el-col :md="8"
              class="box-right">
        <!-- 标题样式 -->
        <div class="title-box">
          <div class="square"></div>
          <div class="more">更多</div>
        </div>
        <!-- 新闻列表 -->
        <h3>蓝山：开展桥梁检测</h3>
        <p>据蓝山县公路建设养护负责人介绍，当前公路养护重点是抓排据蓝山县公路建设养护负责人介绍，当前公路养护重点是抓排</p>
        <div class="line-r">
          <div></div>
        </div>
      </el-col>

      <el-col :md="8">
        <!-- 标题样式 -->
        <div class="title-box">
          <div class="square"></div>
        </div>
        <!-- 新闻列表 -->
        <h4>蓝山：开展桥梁检测</h4>
        <p>据蓝山县公路建设养护负责人介绍，当前公路养护重点是抓排</p>
        <div class="line-r">
          <div></div>
        </div>
      </el-col>
      <el-col :md="8">
        <!-- 标题样式 -->
        <div class="title-box">
          <div class="square"></div>
        </div>
        <!-- 新闻列表 -->
        <h4>蓝山：开展桥梁检测</h4>
        <p>据蓝山县公路建设养护负责人介绍，当前公路养护重点是抓排</p>
        <div class="line-r">
          <div></div>
        </div>
      </el-col>

    </el-row>
  </div>
</template>


<script>
export default {
  data () {
    return {
      src: require('@/assets/ee3.jpg')
    }
  }
}
</script>
<style lang="less" scoped>
.industry_dynamic {
  height: 740px;
}
.img {
  width: 500px;
  height: 290px;
}
.box-left {
  text-align: left;
  padding-right: 20px;
  h2 {
    width: 100%;
    text-align: left;
    margin: 30px 0;
  }
}
.el-row {
  text-align: left;
}
.box-right {
  .title-box {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    .square {
      width: 40px;
      height: 8px;
      background-color: rgb(19, 103, 158);
    }
    .more {
      font-size: 15px;
      font-weight: 600;
      color: rgb(19, 103, 158);
      cursor: pointer;
    }
  }

  h3 {
    margin: 10px 0;
  }

  p {
    font-size: 15px;
  }
}
.line-r {
  height: 2px;
  width: 100%;
  margin-top: 40px;
  margin-bottom: 30px;
  background-color: rgba(221, 247, 250, 0.452);
  div {
    height: 2px;
    width: 60px;
    background-color: #026b72;
  }
}
</style>