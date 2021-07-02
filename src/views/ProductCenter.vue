<template>
  <div class="product">
    <!-- 背景大图 -->
    <div class="img-box bj1 position-abs-100 ">
      <el-image fit="cover"

                style="width: 100%"

                :src="require('@/assets/bander3.jpg')"></el-image>
    </div>

    <div class="img-box"></div>

    <div class="backcolor"
         style="
        position: fixed;
        height: 100vh;
        width: 100%;
        top: 0;
        left: 0;
        z-index: -2;
      "></div>

    <!-- 商品导航 -->
    <div class="goods p-r">
      <div class="nav p-a animate__animated animate__bounceInLeft">
        <el-tree :data="nav_list"
                 :props="defaultProps"
                 :default-expand-all="true"
                 :highlight-current="true"
                 :default-expanded-keys="[0,0]"
                 @node-click="handleNodeClick"></el-tree>
      </div>

      <!-- 商品列表 -->
      <div class="goods-box animate__animated animate__headShake"
           v-for="(item, index) in goods"
           :key="index">
        <div class="img ">
          <el-image style="height: 100%"
          class=" hvr-bob"
                    :src="require('@/' + item.src)"
                    @click="toGoods(item.id)"
                    fit="contain"></el-image>
        </div>

        <div class="title"
             @click="toGoods(item.id)">{{ item.title }}</div>

        <div class="message  flex jus-sb">
          <span>{{item.message}}</span>
          <span>￥{{item.price}}</span>
        </div>

        <div class="button"
             @click="toGoods(item.id)">查看详情</div>
      </div>
    </div>

    <!-- 分页 -->
    <div class="page">
      <el-pagination background
                     layout="prev, pager, next"
                     :page-size="page_size"
                     @current-change="current_change"
                     :total="total">
      </el-pagination>
    </div>

  </div>
</template>


<script>
import goods from "@/json/goods.json";
import nav_data from "@/json/goods/nav.json";
export default {
  data () {
    return {
      // 经过分页后 展示的商品列表
      goods: [],
      // 经过分类后得到的商品列表
      goods_type: [],
      total: 1,
      page_size: 12,
      goods_type_id: 0,
      nav_list: nav_data,
      defaultProps: {
        children: 'children',
        label: 'label'
      }
    };
  },
  created: function () {
    // `this` 指向 vm 实例
    this.$data.total = goods.length;
    var e = 0;
    var page_size = this.$data.page_size;
    this.$data.goods = goods.slice(e, e + page_size);
    this.goods_type = goods
    // var id = this.$route.query.id;
  },
  methods: {
    get_goods () {
      this.goods_type = []
      goods.forEach((e) => {
        if (e.type == this.goods_type_id) {
          this.goods_type.push(e)
        }
      });
      this.current_change(1)
    },
    current_change: function (e) {
      this.$data.total = this.goods_type.length
      var page_size = this.$data.page_size;
      e -= 1;
      // 把分过类的商品进行分页 0 11  12  23
      this.$data.goods = this.goods_type.slice(e * page_size, e * page_size + page_size-1);
    },
    toGoods: function (id) { 
      // 
      this.$router.push({ path: "ProductIntroduction", query: { id: id } });
    },
    // 点击导航
    handleNodeClick: function (e1) {
      this.goods_type_id = e1.id
      this.get_goods()
    },
  },
};
</script>

<style lang="less" scoped>
.product{
  min-height: 800px;
}
.img-box {
  height: 300px;
  box-shadow: inset 1px 5px 10px #bfbfbf73;
  margin-bottom: 100px;
  overflow: hidden;
}
.backcolor {
  background-color: rgb(243, 243, 243);
}
.goods {
  width: 100%;
  min-height: 800px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.goods-box:hover {
  box-shadow: 0px 0px 15px rgba(221, 221, 221, 0.664);
}
.goods-box {
  width: 350px;
  min-height: 440px;
  max-height: 500px;
  margin-bottom: 50px;
  text-align: left;
  padding: 10px;
  background-color: rgb(255, 255, 255);
  box-shadow: 0px 0px 8px rgba(221, 221, 221, 0.664);

  .img {
    height: 280px;
    border-bottom: 1px solid rgb(228, 228, 228);
    cursor: pointer;
  }
  .title {
    margin-top: 20px;
    font-size: 18px;
    font-weight: 600;
    cursor: pointer;
  }
  .button {
    width: 130px;
    height: 40px;
    line-height: 40px;
    margin-top: 20px;
    border-radius: 5px;
    text-align: center;
    background-color: rgb(243, 243, 243);
    border: 1px solid rgb(236, 236, 236);
  }
  .button:hover {
    background-color: rgb(98, 179, 33);
    color: white;
    cursor: pointer;
  }
  .message {
    margin-top: 10px;
    height: 4em;
  
    span:nth-child(1) {
      display: block;
      width: 65%;
    }
    span:nth-child(2) {
      color: rgb(212, 9, 9);
      font-size: 30px;
      font-weight: 600;
    }
  }
}

.page {
  margin: 80px;
  border-radius: 0px;
}

.classify {
  margin-bottom: 20px;
  border: 1px solid #ddd;
  background-color: white;
  height: 38px;
  line-height: 38px;
  font-size: 14px;
  .title {
    width: 100px;
    padding-left: 10px;
    margin-right: 10px;
    white-space: nowrap;
    overflow: hidden;
    background: #f3f3f3;
  }
  .list {
    div {
      height: 100%;
      cursor: pointer;
      white-space: nowrap;
      zoom: 1;
      margin-right: 10px;
      margin-bottom: 4px;
      padding: 0 50px;
    }
  }
}

.goods {
  font-size: 14px;
  @w: 160px;

  .nav {
    padding: 20px 0;
    width: @w;
    background: #ffffff;
    left: -@w - 20;
    cursor: pointer;
    white-space: nowrap;
    zoom: 1;
    margin-bottom: 4px;
    box-shadow: 0px 0px 8px rgba(221, 221, 221, 0.664);

    div {
      margin-bottom: 10px;
    }
  }
}
.type-title {
  text-align: center;
}
.type-title:hover {
  color: #ffffff;
  background-color: yellowgreen;
}
.active {
  color: #ffffff;
  background-color: yellowgreen;
}
// 类型导航
</style>

<style >
.el-tree-node__content {
  height: auto;
}

.el-tree-node__label {
  /* font-size: 18px; */
  padding: 20px 0;
}
</style>