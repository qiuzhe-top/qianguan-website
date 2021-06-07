<template>
  <div>
    <!-- 关于我们 -->

    <!-- 背景大图 -->
    <div class="img-box bj1 position-abs-100">
    </div>
    <div class="img-box ">
    </div>

    <div class="box1">
      <div class="title bj1"></div>
      <div class="message bj1"></div>
    </div>

    <div class="box1">
      <div class="title ">
        <h1>联系我们</h1>
      </div>
      <div class="message ">
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
    return {

    }
  }
}
</script>

<style lang="less" scoped>
.img-box {
  height: 300px;
  box-shadow: inset 1px 5px 10px #bfbfbf73;
  margin-bottom: 100px;
}

.box1 {
  margin-bottom: 50px;
  .title {
    width: 300px;
    height: 60px;
    margin: 0 auto;
  }
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
</style>