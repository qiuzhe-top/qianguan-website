<template>
  <div>

    <h1 class="index-h2">合作伙伴</h1>

    <div class="list">
      <el-image class="img"
                v-for="src in img_list"
                :key="src"
                :src="src"></el-image>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      img_list: [
        require('@/assets/logo.png'),
        require('@/assets/logo.png'),
        require('@/assets/logo.png'),
        require('@/assets/logo.png'),
        require('@/assets/logo.png'),
        require('@/assets/logo.png'),
        require('@/assets/logo.png'),
      ]
    }
  }
}
</script>

<style lang="less" scoped>
.list {
  display: flex;
  justify-content: space-around;
  align-items: center;
  // margin-top: 50px;
  margin: 50px 10px;
  .img,
  .el-image__error {
    width: 140px;
    // height: 60px;
  }
}
</style>