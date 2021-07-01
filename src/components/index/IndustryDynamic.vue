<template>
  <div class="industry_dynamic">
    <el-row>
      <h1 class="index-h2">公司动态</h1>
      <!-- 左边 -->
      <el-col :md="12" class="box-left">
        <el-image :src="src" @click="toPage(32)" class="img"></el-image>
        <h2 @click="toPage(32)">
          热烈欢迎杭州萧山环境物业领导莅临公司考察指导
        </h2>
        <p @click="toPage(32)">
          3月19日，杭州萧山环境物业领导一行莅临前冠环保参观指导，前冠环保总经理奚晓东热情接待并进行了深入的交流。
        </p>

        <div class="line-r">
          <div></div>
        </div>
      </el-col>

      <!-- 右边 -->
      <el-col :md="8" class="box-right">
        <div @click="toPage(45)">
          <!-- 标题样式 -->
          <div class="title-box">
            <div class="square"></div>
            <div class="more">
              <router-link :to="{ name: 'ApplicationCase' }">更多</router-link>
            </div>
          </div>
          <!-- 新闻列表 -->
          <h3>热烈欢迎浙江宁围环境服务有限公司来我司交流学习</h3>
          <p>
            2021年4月7日，浙江宁围环境服务有限公司一行11人来我司进行学习、交流。
          </p>
          <div class="line-r">
            <div></div>
          </div>
        </div>
      </el-col>

      <el-col :md="8">
        <div @click="toPage(59)">
          <!-- 标题样式 -->
          <div class="title-box">
            <div class="square"></div>
          </div>
          <!-- 新闻列表 -->
          <h4>杭州前冠环保团建滑雪记 | 挑战自我 凝聚力量！</h4>
          <p></p>
          <div class="line-r">
            <div></div>
          </div>
        </div>
      </el-col>
      <el-col :md="8">
        <div @click="toPage(74)">
          <!-- 标题样式 -->
          <div class="title-box">
            <div class="square"></div>
          </div>
          <!-- 新闻列表 -->
          <h4>牵手前冠|前冠环保为2020浙江大湾区自行车公开赛钱塘新区站助力！</h4>
          <p></p>
          <div class="line-r">
            <div></div>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>


<script>
export default {
  data() {
    return {
      src: require("@/assets/ee3.jpg"),
    };
  },
  methods: {
    toPage(id) {
      this.$router.push({ path: "NewsDetails", query: { i: id } });
    },
  },
};
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