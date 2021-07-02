<template>
  <div class="bottom">
    <el-row class="public-width width-auto box">

      <el-col :md="18">
        <div class="msg-list">
          <p>手机：18058189565</p>
          <p>电话：0571-87332057</p>
          <p>邮政编码：310000</p>
          <p>
            单位地址：杭州市江干区同协金座15幢102室
          </p>
          <p >
            杭州前冠环保设备有限公司 版权所有 Copyright ©2021  All Right Reserved 京ICP备10207363号-1
          </p>
       
        </div>
      </el-col>


      <el-col :md="4">
        <div class="msg-list">
          <h3>微信公众号</h3>
          <el-image :src="require('@/assets/qr.png')" class="wx-img"></el-image>
        </div>
      </el-col>
    </el-row>

  </div>
</template>

<script>
export default {
  methods: {
    toGoods: function (index) {
      this.$router.push({ name: "Describe", query: { index: index } });
    },
  },
};
</script>
<style lang="less" scoped>
.bottom {
  background-color: rgb(24, 24, 24);
  padding: 25px 0;
  .box{
    display: flex;
        align-items: center;
  }
}
.wx-img {
  width: 110px;
  height: 110px;
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