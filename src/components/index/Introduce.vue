<template>
  <div class="introduce">

    <h1 class="index-h2">公司介绍</h1>

    <el-row>
      <el-col class="col"
              :xs="24"
              :md="12">

        <h3 class="">杭州前冠环保设备有限公司</h3>
        <span class="msg">Hangzhou Qianguan</span>
        <div class="hr"></div>
        <p>
          杭州前冠环保设备有限公司成立于2016年，是一家专注于垃圾分类产品的设计、开发、销售为一体化的环保类高科技企业。
        </p>
        <br>
        <p>
          杭州前冠环保设备有限公司 经销批发的分类垃圾柜、垃圾桶、垃圾桶畅销消费者市场，
          在消费者当中享有较高的地位，公司与多家零售商和代理商建立了长期稳定的合作关系。
          杭州前冠环保设备有限公司经销的分类垃圾柜、垃圾桶、垃圾桶品种齐全、价格合理。
          杭州前冠环保设备有限公司实力雄厚，重信用、守合同、保证产品质量，
          以多品种经营特色和薄利多销的原则，赢得了广大客户的信任。
        </p>
      </el-col>

      <el-col :xs="24"
              :md="12">

        <div class="img-box hvr-grow">
          <el-image :src="url"
                    fit="none"
                    class="img-box ">
            <div slot="placeholder"
                 class="image-slot">
              加载中<span class="dot">...</span>
            </div>
          </el-image>
        </div>

      </el-col>

    </el-row>

  </div>
</template>


<script>
export default {
  data () {
    return {
      url: require('@/assets/ee3.jpg')

    }
  },
  methods: {

  },
  //   components: {

  //   },
}
</script>

<style lang="less" scoped>
.introduce {
  padding-bottom: 100px;
}
.el-row {
  display: flex;
  align-items: center;
}
.col {
  text-align: left;
  h3 {
    margin-bottom: 5px;
  }
  .hr {
    margin-top: 20px;
    margin-bottom: 20px;
    height: 2px;
    background-color: whitesmoke;
  }
  .msg {
    font-size: 14px;
  }

  p {
    font-size: 15px;
    line-height: 1.5em;
  }
}
</style>
<style lang="less" >
</style>