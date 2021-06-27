<template>
  <div class="case">

    <div class="bj position-abs-100">

    </div>

    <h1 class="index-h2">应用案例</h1>

    <el-row :gutter="10">

      <el-col :xs="24"
              class="el-col-box"
              v-for="(item,index) in case_list"
              
              :key="index"
              :md="8">
        <div class="grid-content bg-purple">
          <el-image :src="item.src"
                    flt="cover"
                    class="image"></el-image>
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
          src: require('@/assets/cc1.jpg'),
          title: '高压水清洗系统在船舶行业中的应用',
          msg: '船舶建造 船舶维修'
        },
        {
          src: require('@/assets/cc2.jpg'),
          title: '积碳焦油：超高压微水清洗解决方案',
          msg: '绿色环保 积碳清洗'


        },
        {
          src: require('@/assets/cc3.jpg'),
          title: '铸件清砂：高压水清砂解决方案',
          msg: '技术创新 效率清砂'
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
    // height: 100%;
  }
  .image::before {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    background-color: rgba(0, 0, 0, 0.3);
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