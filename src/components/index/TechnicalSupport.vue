<template>
  <div class="support">
    <h1 class="index-h2">技术支持</h1>
    <el-row>

      <el-col :md="12">

        <div class="service">

          <div class="img ">
            <el-image :src="require('@/assets/js-1.jpg')"></el-image>
          </div>

          <div class="title">
            专业售后服务团队
          </div>

          <div class="msg">
            实现最快的服务——和许诺的一样!
          </div>

          <div class="button"></div>

        </div>

      </el-col>

      <el-col :md="12">
        <div class="service">
          <div class="img">
            <el-image :src="require('@/assets/js-2.jpg')"></el-image>
          </div>
          <div class="title">
            维修服务
          </div>

          <div class="msg">
            提供全方位的咨询、技术人员经验丰富
          </div>

          <div class="button"></div>

        </div>

      </el-col>

    </el-row>
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
.support {
  padding-top: 100px;
  padding-bottom: 180px;
}

.service {
  color: white;
  width: 520px;
  height: 280px;
  margin-bottom: 20px;
  // margin: 0 auto;
  background-color: rgba(63, 63, 63, 0.452);
  .img {
    width: 520px;
    height: 280px;
    position: absolute;
    z-index: -1;
    // background-color: red;
    // width: 100%;
    // margin-left: -50%;
  }
  // .img::before {
  //   content: '';
  //   position: absolute;
  //   left: 0;
  //   right: 0;
  //   bottom: 0;
  //   top: 0;
  //   background-color: rgba(0, 0, 0, 0.3);
  //   z-index: 2;
  // }
  .title {
    font-size: 25px;
    font-weight: 600;
    padding-top: 60px;
  }

  .msg {
    margin-top: 30px;
  }
}
</style>