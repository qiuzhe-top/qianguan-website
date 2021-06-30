<template>
  <div class="bottom">

    <el-row class="public-width width-auto">

      <el-col :md="4">
        <div class="msg-list">
          <h3>关于前冠</h3>
          <p @click="toGoods(1)">公司概况</p>
          <p @click="toGoods(2)">公司资讯</p>
          <p @click="toGoods(3)">管理体系</p>
        </div>
      </el-col>

      <el-col :md="4">
        <div class="msg-list ">
          <h3>技术服务</h3>
          <p @click="toGoods(4)">服务支持</p>
          <p @click="toGoods(5)">售后政策</p>
          <p @click="toGoods(6)">售后服务</p>
        </div>
      </el-col>

      <el-col :md="4">
        <div class="msg-list ">
          <h3>了解前冠</h3>
          <p @click="toGoods(7)">了解前冠</p>
          <p @click="toGoods(8)">加入前冠</p>
          <p @click="toGoods(9)">前冠动态</p>
        </div>
      </el-col>

      <el-col :md="6">
        <div class="msg-list ">
          <h3>联系我们</h3>
          <p @click="toGoods(10)">010-88351020</p>
          <p @click="toGoods(11)">simote001@sina.com</p>
          <p @click="toGoods(12)">浙江省杭州市下城区</p>
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
      this.$router.push({ name: "Describe" ,query: { index: index }})
    },
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
  border: 3px solid rgb(139, 139, 139);
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