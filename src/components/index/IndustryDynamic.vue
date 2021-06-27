<template>
  <div class="industry_dynamic">

    <el-row>
      <h1 class="index-h2">公司动态</h1>
      <!-- 左边 -->
      <el-col :md="12"
              class="box-left">

        <el-image :src="src"
                  class="img"></el-image>
        <h2>Helix干湿两用喷砂系统~喷砂机 | 走“斜”道</h2>
        <p>HELIX专利喷枪锥形出口的特殊构造产生的文丘里效应的组合螺旋旋转运动系统相比传统喷枪效率提高30%</p>

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
          <div class="more">
            <router-link :to="{ name: 'ApplicationCase'}">更多</router-link>

          </div>
        </div>
        <!-- 新闻列表 -->
        <h3>3D打印为什么需要工业吸尘器？</h3>
        <p>elfin为易爆导电性粉尘处理提供两种选择：

第一个是与工业吸尘器相关的独家Atex Z20认证，作为安全收集可燃粉尘的保证。 双重优势：高性能和筛选后重复使用粉尘的可能性。

第二种选择是可燃粉尘的惰化：一旦粉尘进入容器与惰性液体接触，就会被中和惰化</p>
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
        <h4>喜讯 丨 荣获2020年金钻奖 最佳清洁品牌奖</h4>
        <p>“金钻奖”作为亚洲范围清洁产品和品牌高水准、高品质的标志，2020年清洁行业的“金钻奖”，采用国内外权威协会、专家和终端用户共同组成评委团，旨在评选、表彰年度优秀清洁品牌和创新产品，帮助其在亚洲乃至世界舞台上脱颖而出。</p>
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
        <h4>得风吸尘器—食品加工烤箱清洁解决方案分享：</h4>
        <p>清洁烘焙工具和防止食物污染最有效的方法就是采用工业真空吸尘</p>
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
  },
  methods:{
    toPage(id){
      router.push({ path: 'NewsDetails', query: { id: id }})
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