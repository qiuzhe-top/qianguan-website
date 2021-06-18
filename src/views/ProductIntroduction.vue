<template>
  <div>
    <!-- 产品展示 -->
    <div class="header">

      <div class="goods ">

        <div class="img ">
          <!-- <pic-zoom :url="require('@/'+goods.src)"
                    :scale="3"></pic-zoom> -->
          <el-image :src="require('@/'+goods.src)"
                    style="height:100%"
                    :preview-src-list="get_img_src(goods.img_list)"
                    fit="contain"></el-image>
        </div>

        <div class="list ">
          <div v-for="(src,index) in goods.img_list"
               :key="index"
               :class="{ 'active' : index == goods_img_list_index }"
               @click="switch_img(src,index)">
            <el-image :src="require('@/'+src)"
                      style="height:100%"
                      fit="contain"></el-image>
          </div>
        </div>

      </div>

      <div class="title-box ">
        <div class="title ">{{goods.title}}</div>
        <div class="message ">{{goods.message}}</div>
        <div class="price ">￥{{goods.price}}</div>
      </div>

    </div>

    <!-- 产品参数 -->
    <div class="tab ">
      <!-- @tab-click="handleClick" -->
      <el-tabs v-model="activeName">
        <el-tab-pane label="产品简介"
                     name="first">
          <div class="tab-pane">
            <div class="parameter flex wrap jus-sb">
              <div class="ps"
                   v-for="(item,index) in goods.parameter"
                   :key="index">
                {{item}}
              </div>
            </div>
            <el-image v-for="(item,index) in goods.goods_img_list1"
                      :key="index"
                      :src="require('@/'+item)">

            </el-image>
          </div>
        </el-tab-pane>
        <el-tab-pane label="
                      技术参数"
                     name="second">
          <div class="tab-pane">技术参数</div>
        </el-tab-pane>
        <el-tab-pane label="运用案例"
                     name="third">
          <div class="tab-pane">运用案例</div>
        </el-tab-pane>

      </el-tabs>
    </div>

  </div>
</template>

<script>
import goods from "@/json/goods.json";
export default {
  data () {
    return {
      activeName: 'first',
      srcList: [
        'https://fuss10.elemecdn.com/8/27/f01c15bb73e1ef3793e64e6b7bbccjpeg.jpeg',
        'https://fuss10.elemecdn.com/1/8e/aeffeb4de74e2fde4bd74fc7b4486jpeg.jpeg'
      ],
      goods: {},
      // 选中的预览图
      goods_img_list_index: 0,
    }
  },
  created: function () {
    this.$data.goods = goods[this.$route.query.i]


    var id = this.$route.query.id
    if (id) {

      goods.forEach((element) => {
        var id_d = element["id"];
        if (id + "" == id_d + "") {
          this.$data.goods = element;
        }
      });

    }


  },
  methods: {
    switch_img (src, index) {
      this.$data.goods_img_list_index = index
      this.$data.goods.src = src
    },
    // 返回大图预览的方法
    get_img_src (list) {
      var l = []
      list.forEach(element => {
        l.push(require('@/' + element))
      });
      return l
    }
  }
}
</script>

<style lang="less" scoped>
@goods_width: 380px;
.header {
  display: flex;
  justify-content: start;
  border-bottom: solid 2px rgb(238, 238, 238);
  margin-bottom: 60px;
}

.title-box {
  margin-top: 100px;
  margin-left: 100px;
  height: @goods_width / 3 * 2.5;
  flex: 1;
  text-align: left;
  .title {
    // width: 100px;
    height: 50px;
    font-size: 25px;
    font-weight: 600;
  }
  .message {
    // width: 100px;
    margin-top: 10px;
    min-height: 100px;
  }
  .price {
    color: rgb(197, 26, 26);
    font-size: 38px;
    font-weight: 600;
  }
}

.goods {
  margin-top: 100px;
  margin-bottom: 50px;
  width: @goods_width;
  height: @goods_width / 3 * 2.5;
  border: rgb(238, 238, 238) solid 2px;
  .img {
    width: @goods_width * 0.7;
    height: @goods_width * 0.6;
    margin: 0 auto;
  }
  .list {
    margin-top: @goods_width * 0.1;
    height: 50px;
    display: flex;
    justify-content: space-around;
    .active {
      border: rgba(37, 207, 22, 0.993) 2px solid;
    }
    div {
      width: 80px;
      height: 40px;
      // margin: 5px;
      // background-color: rgb(156, 193, 196);
      border: rgba(197, 197, 197, 0.418) 1px solid;
      // float: left;
      cursor: pointer;
    }
  }
}

.tab {
  .tab-pane {
    min-height: 800px;
  }
  margin-bottom: 80px;
  .parameter {
    padding: 20px 0;
    font-size: 14px;
    .ps {
      width: 25%;
      text-align: left;
      margin-bottom: 5px;
    }
  }
}
</style>

<style lang="less">
.el-tabs__nav-wrap::after {
  background-color: rgba(255, 255, 255, 0);
}
.el-tabs__active-bar {
  height: 5px;
  background-color: rgba(107, 214, 45, 0.966);
}

.el-tabs__nav-scroll {
  display: flex;
  // justify-content: center;
  .el-tabs__item {
    padding: 0 20px;
    color: rgba(46, 92, 19, 0.966);
  }
}
.el-tabs__item.is-active {
  color: rgba(46, 92, 19, 0.966);
}
</style>