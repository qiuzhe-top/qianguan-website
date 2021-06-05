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
      <div class="title bj1"></div>
      <div class="message bj1"></div>
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
  }
}
</style>