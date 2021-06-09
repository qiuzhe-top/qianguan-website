<template>
  <!-- 产品中心 -->
  <div class="pro-min">
    <div class="back-box1 position-abs-100 bj1"></div>
    <div class="back-box2 position-abs-100 bj2"></div>

    <h1 class="index-h2">产品中心</h1>
    <div class="product-list width-auto">
      <el-tabs class="list width-auto"
               v-model="activeName"
               @tab-click="handleClick">
        <!-- 切换模块 -->
        <el-tab-pane v-for="(item, index) in product_list"
                     :key="index"
                     :label="item.name"
                     :name="item.type">
          <el-row>
            <!-- 左边大图 -->
            <el-col :xs="24"
                    :md="9">
              <div class="grid-content bg-purple box-1">
                <el-image :src="require('@/' + item.url)"
                          @click="toGoods(item.id)"
                          fit="contain"
                          class="img-box">
                  <div slot="placeholder"
                       class="image-slot">
                    加载中<span class="dot">...</span>
                  </div>
                </el-image>
                <div class="title"
                     @click="toGoods(item.id)">{{ item.name }}</div>
              </div>
            </el-col>
            <!-- 右边4张图片 -->
            <el-col :xs="24"
                    :md="15">
              <div class="grid-content bg-purple-light box-2">
                <div v-for="(item2, index2) in item.list"
                     :key="index2">
                  <el-image :src="require('@/' + item2.url)"
                            fit="contain"
                            class="img-box"
                            @click="toGoods(item2.id)">
                    <div slot="placeholder"
                         class="image-slot">
                      加载中<span class="dot">...</span>
                    </div>
                  </el-image>
                  <div class="title"
                       @click="toGoods(item2.id)">{{ item2.name }}</div>
                </div>
              </div>
            </el-col>
          </el-row>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>
<script>
import data_list from "@/json/indexgoods.json";

export default {
  data () {
    return {
      activeName: "c1",
      src: "https://tse1-mm.cn.bing.net/th/id/OIP.V7n5XtfDiI7oeKPz1oxD1gHaLG?w=192&h=288&c=7&o=5&pid=1.7",
      product_list: data_list,
    };
  },

  methods: {
    handleClick (tab, event) {
      console.log(tab, event);
    },
    toGoods: function (index) {
      this.$router.push({ name: 'ProductIntroduction', query: { id: index } })
    }
  },
};
</script>

<style lang="less" >
// 产品中心小导航间隔
@tabs__item_padding: 80px;
// 小导航选中颜色
@tabs__item_font_active_color: #4dc22a;
// 商品展示右边正方形大小 右边
@goods_size: 240px;
// 商品展示右边图片大小 右边
@goods_img_size: 180px;
// 商品展示左边 图片 大小
@goods_right_w_size: 270px;
@goods_right_h_size: 370px;
// .index-h2 {
//   padding-top: 80px;
//   padding-bottom: 30px;
// }
.back-box1,
.back-box2 {
  z-index: -1;
}
.back-box1 {
  height: 840px;
  background-color: rgb(249 249 249);
}
.back-box2 {
  height: 400px;
  background-color: white;
}

.pro-min {
  margin: 0;
  .el-tabs__nav-wrap::after {
    background-color: rgba(255, 255, 255, 0);
  }
  // .pro-min .el-tabs__nav-scroll
  .el-tabs__active-bar {
    height: 5px;
    background-color: @tabs__item_font_active_color;
  }
  .el-tabs__nav-scroll {
    display: flex;
    justify-content: center;
    .el-tabs__item {
      padding: 0 @tabs__item_padding;
    }

    .el-tabs__item.is-active {
      color: @tabs__item_font_active_color;
    }
  }

  .product-list {
    max-width: 900px;
    .pro-min .el-tabs__nav-scroll .el-tabs__item {
      width: 40px;
    }
    .tabs__item {
      width: 40px;
    }
    .el-tabs__header {
      margin-bottom: 80px;
    }
  }

  .box-2 {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;

    .img-box {
      cursor: pointer;
      width: @goods_img_size;
      height: @goods_img_size;
    }
    .title {
      cursor: pointer;

      padding-top: 10px;
    }
  }
  .box-2 > div {
    background-color: rgb(255, 255, 255);
    width: 50%;
    // margin: 1px;
    height: @goods_size;
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .box-2 > div:nth-child(2) {
    background-color: rgb(248, 248, 240);
  }
  .box-2 > div:nth-child(3) {
    background-color: rgb(245, 245, 248);
  }
  .box-1 {
    height: @goods_size*2;
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: rgb(240, 240, 240);

    .img-box {
      cursor: pointer;
      width: 100%;
      height: @goods_right_h_size;
      overflow: hidden;
      img {
        width: 100%;
      }
    }
    .title {
      padding-top: 10px;
      cursor: pointer;
    }
  }

  .box-2 {
  }
}
</style>