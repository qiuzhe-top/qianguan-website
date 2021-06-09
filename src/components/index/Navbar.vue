<template>
  <!-- 轮番图 -->
  <div>
    <div class="block box-sh-i"
         :style="carousel_height_str">
      <el-carousel :height="carousel_height"
                   class="position-abs-100">
        <el-carousel-item v-for="item in carousel_img_list"
                          :key="item">
          <el-image class="logo"
                    fit="cover"
                    :src="item"></el-image>
        </el-carousel-item>

      </el-carousel>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      // 轮番图高度
      carousel_height: "550px",
      carousel_height_str: "height: 550px",
      carousel_img_list: [
        'https://demosc.chinaz.net/Files/DownLoad/moban/202105/moban5479/extra-images/slide-1.jpg',
        'https://demosc.chinaz.net/Files/DownLoad/moban/202105/moban5479/extra-images/slide-2.jpg',
        'https://demosc.chinaz.net/Files/DownLoad/moban/202105/moban5479/extra-images/slide-3.jpg',
      ]
    };
  },
};
</script>

<style  scoped>
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 150px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
.logo {
  height: 100%;
}
</style>