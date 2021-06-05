<template>
  <div class="introduce">

    <h1 class="index-h2">公司介绍</h1>

    <el-row>
      <el-col class="col"
              :xs="24"
              :md="12">

        <h3>杭州前冠环保设备有限公司</h3>
        <span class="msg">Sunpp Waskk Sunpp Waskk </span>
        <div class="hr"></div>
        <p>
          杭州前冠环保设备有限公司成立于2016年，是一家专注于垃圾分类产品的设计、开发、销售为一体化的环保类高科技企业。
        </p>
        <p>
          公司座落于江干区华丰中路977号协同金座数字创业社区，注册资金一千万，具备政府采购平台供应商资质，具体垃圾分类产品及相关系统的开发设计和生产能力
          公司座落于江干区华丰中路977号协同金座数字创业社区，注册资金一千万，具备政府采购平台供应商资质，具体垃圾分类产品及相关系统的开发设计和生产能力
          公司座落于江干区华丰中路977号协同金座数字创业社区，注册资金一千万，具备政府采购平台供应商资质，具体垃圾分类产品及相关系统的开发设计和生产能力
          公司座落于江干区华丰中路977号协同金座数字创业社区，注册资金一千万，具备政府采购平台供应商资质，具体垃圾分类产品及相关系统的开发设计和生产能力
          公司座落于江干区华丰中路977号协同金座数字创业社区，注册资金一千万，具备政府采购平台供应商资质，具体垃圾分类产品及相关系统的开发设计和生产能力
        </p>
      </el-col>

      <el-col :xs="24"
              :md="12">

        <div class="img-box">
          <el-image :src="url"
                    fit="none"
                    class="img-box">
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