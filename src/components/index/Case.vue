<template>
  <div class="case">

    <div class="bj position-abs-100">

    </div>

    <h1 class="index-h2 ">应用案例</h1>

    <el-row :gutter="10">

      <el-col :xs="24"
              class="el-col-box"
              v-for="(item,index) in case_list"
              
              :key="index"
              :md="8">
        <div class="grid-content bg-purple">
          <el-image :src="item.src"
                    flt="cover"
                    class="image hvr-shrink"></el-image>
          <span>{{item.title}}</span>
          <span>{{item.msg}}</span>
        </div>
      </el-col>

    </el-row>

  </div>

</template>

<script>
export default {
  data () {
    return {
      case_list: [
        {
          id: 52,
          src: require('@/assets/news_image/wz3-t.png'),
          title: '精准测温智能体温检测机',
          msg: '近日，国内疫情出现反弹...'
        },
        {
          id: 66,
          src: require('@/assets/news_image/wz5-t.png'),
          title: '智能垃圾柜',
          msg: '社区智能垃圾柜的“时尚生活”'
        },
        {
          id: 121,
          src: require('@/assets/cc3.jpg'),
          title: '智能分类垃圾收集箱',
          msg: '智能分类垃圾收集箱系列，适用于医院、农村社区...'
        },
      ]
    }
  }
}
</script>

<style lang="less" scoped>
// 方框大小
@box-size: 260px;
@case-h: 650px;
.case {
  height: @case-h;
}
.bj {
  background-color: #f9f9f9;
  height: @case-h;
  z-index: -1;
}
.grid-content {
  margin: 0 auto;
  width: @box-size+20;
  height: @box-size;
  position: relative;
  .image {
    // width: @box-size - 50;
    height: 100%;
  }
  .image::before {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    background-color: rgba(0, 0, 0, 0.13);
    z-index: 2;
  }
  span {
    position: absolute; 
    bottom: 10px;
    left: 30px;
    font-size: 14px;
    color: rgb(232, 232, 232);
    z-index: 2;
  }
  span:nth-child(2) {
    position: absolute;
    bottom: 30px;
    left: 30px;
    font-weight: 600;
    color: white;
    z-index: 2;
  }
}
</style>