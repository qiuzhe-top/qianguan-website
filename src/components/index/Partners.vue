<template>
  <div>

    <h1 class="index-h2">合作伙伴</h1>

    <div class="list">
      <el-image class="img hvr-grow"
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
        require('@/assets/lg1.jpg'),
        require('@/assets/lg2.jpg'),
        require('@/assets/lg3.jpg'),
        require('@/assets/lg4.jpg'),
        require('@/assets/lg5.jpg')
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