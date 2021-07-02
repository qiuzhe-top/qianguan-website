<template>
  <div>
    <!-- 关于我们 -->

    <!-- 背景大图 -->
    <div class="img-box bj1 position-abs-100">
      <el-image fit="cover"
                style="width:100%"
                :src="require('@/assets/gywm.jpg')"></el-image>

    </div>
    <div class="img-box"></div>

    <div class="box box2">
      <h1 class="title">公司概况</h1>
      <div class="body ">
        <el-row>
          <el-col :md="12"
                  class="text">
            <h2>杭州前冠环保设备有限公司</h2>
            <p>杭州前冠环保设备有限公司2016年成立至今，已发展成是一家面向全国，专业从事各种垃 圾分类产品销售，方案设计， 解决等一体化的环保类高科技企业。公司座落于杭州市江干区。公司致力于推动中国垃圾分类行业做实、做大、做强，现已形成垃圾分类专用设施设备制造、设计、销售、维护的企业。 杭州前冠秉持“市场为导向，创新为动力”的经营理念，顺应全球绿色、节能、环保、低碳大趋势，不断强化自身发展；注重自主研发、自主创新， 提升企业核心竞争；</p>
          </el-col>
          <el-col :md="12">
            <div class="img">
              <div>
                <el-image style="height:100%" :src="require('@/assets/gonstu1.jpg')"></el-image>
              </div>
              <div>
                <el-image style="height:100%" :src="require('@/assets/gonstu2.jpg')"></el-image>
              </div>
            </div>
          </el-col>
        </el-row>
      </div>
    </div>

    <div class="box box1"
         v-for="i in '222'"
         :key="i">
      <div class="title">
        <h1>联系我们</h1>
      </div>
      <div class="message">
        <el-row>
          <el-col :md="12">
            <div class="list">
              <div>网址：www.baidu.com</div>
              <div>手机：13811311670</div>
              <div>电话：010-88351020</div>
              <div>邮政编码：100044</div>
              <div>单位地址：浙江省杭州市下城区</div>
            </div>
          </el-col>
          <el-col :md="12">
            <el-image style="width: 300px; height: 300px"
                      src="https://p1.ssl.qhimg.com/dr/220__/t01d5b17ca014945a00.jpg"
                      fit="contain"></el-image>
          </el-col>
        </el-row>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {};
  },
};
</script>

<style lang="less" scoped>
.img-box {
  height: 300px;
  box-shadow: inset 1px 5px 10px #bfbfbf73;
  margin-bottom: 100px;
  overflow: hidden;
}
.box {
  margin-bottom: 50px;
  .title {
    width: 300px;
    height: 60px;
    margin: 0 auto;
  }
  .body {
    margin-top: 20px;
    height: 400px;
    text-align: left;
    .text {
      div {
        margin-bottom: 20px;
      }
    }
  }
}
.box1 {
  .message {
    margin-top: 20px;
    height: 400px;

    .list {
      padding-top: 100px;
      div {
        margin-bottom: 10px;
        font-size: 14px;
      }
    }
  }
}
.box2 {
  .text {
    padding: 10px;
  }
  h2 {
  }
  p {
    margin: 20px 0 10px 0;
  }
  span {
    font-size: 14px;
  }
  .img {
    display: flex;
    justify-content: center;
    div {
      width: 100%;
      background-color: rgb(247, 247, 247);
      margin-right: 10px;
    }
  }
  
}
</style>