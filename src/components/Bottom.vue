<template>
  <div class="bottom">

    <el-row class="public-width width-auto">

      <el-col :md="4">
        <div class="msg-list ">
          <h3>关于前冠</h3>
          <p>公司概况</p>
          <p>公司资讯</p>
          <p>管理体系</p>
        </div>
      </el-col>

      <el-col :md="4">
        <div class="msg-list ">
          <h3>技术服务</h3>
          <p>服务支持</p>
          <p>售后政策</p>
          <p>售后服务</p>
        </div>
      </el-col>

      <el-col :md="4">
        <div class="msg-list ">
          <h3>了解前冠</h3>
          <p>了解前冠</p>
          <p>加入前冠</p>
          <p>前冠动态</p>
        </div>
      </el-col>

      <el-col :md="6">
        <div class="msg-list ">
          <h3>联系我们</h3>
          <p>010-88351020</p>
          <p>simote001@sina.com</p>
          <p>浙江省杭州市下城区</p>
        </div>

      </el-col>
      <el-col :md="4">
        <div class="msg-list ">
          <h3>微信公众号</h3>
          <el-image :src="require('@/assets/qr.png')"
                    class="wx-img"></el-image>
        </div>

      </el-col>
    </el-row>

    <div class="icp">
      Coptingt @ 2013-2020 @ 北京
    </div>

  </div>
</template>

<script>
export default {
  methods: {
    toGoods: function (index) {
      this.$router.push({ name: 'NewsDetails', query: { i: index } })
    }
  }
}
</script>
<style lang="less" scoped>
.bottom {
  background-color: rgb(24, 24, 24);
  padding: 25px 0;
}
.wx-img {
  width: 100px;
  height: 100px;
}
.msg-list {
  text-align: left;
  h3 {
    color: rgb(197, 197, 197);
    font-weight: 400;
    font-size: 16px;
    margin-bottom: 10px;
    cursor: pointer;
  }
  p {
    font-size: 14px;
    color: rgb(197, 197, 197);
    margin: 5px 0;
    cursor: pointer;
  }
}
.icp {
  color: rgb(148, 148, 148);
  font-size: 13px;
}
</style>