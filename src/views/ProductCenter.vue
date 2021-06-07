<template>
  <div class="product">

    <!-- 背景大图 -->
    <div class="img-box bj1 position-abs-100">

    </div>
    <div class="img-box">

    </div>

    <div class=" backcolor"
         style="
    position: fixed;
    height: 100vh;
    width: 100%;
    top: 0;
    left: 0;
    z-index: -2;
"></div>
    <!-- 商品列表 -->
    <div class="goods">
      <div class="goods-box "
           v-for="(item,index) in goods"
           :key="index">
        <div class="img ">
          <el-image style="height: 100%; "
                    :src="require('@/' + item.src)"
                    @click="toGoods(index)"
                    fit="contain"></el-image>
        </div>
        <div class="title "
             @click="toGoods(index)">{{item.title}}</div>
        <!-- <div class="message bj2">{{item.message}}</div> -->
        <div class="button"
             @click="toGoods(index)">查看详情</div>
      </div>
    </div>

    <!-- 分页 -->
    <div class="page ">
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
export default {
  data () {
    return {
      goods: [],
      total: 1,
      page_size: 12,
    }
  },
  created: function () {
    // `this` 指向 vm 实例
    this.$data.total = goods.length
    var e = 0
    var page_size = this.$data.page_size
    this.$data.goods = goods.slice(e, e + page_size)

  },
  methods: {

    current_change: function (e) {
      var page_size = this.$data.page_size
      // if(e==1){
      //   e = 0
      // }
      e -= 1
      // 0 1  0 2
      // 2 3  2 4
      // 4 5  4 6
      this.$data.goods = goods.slice(e * page_size, e * page_size + page_size)
    },
    toGoods: function (index) {
      this.$router.push({ name: 'ProductIntroduction', query: { i: index } })
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
.backcolor {
  background-color: rgb(243, 243, 243);
}
.goods {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
.goods-box {
  width: 350px;
  height: 370px;
  margin-bottom: 50px;
  text-align: left;
  padding-left: 10px;
  background-color: rgb(250, 250, 250);
  .img {
    height: 350px / 3 * 2;
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
    margin-top: 30px;
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
}

.page {
  margin: 80px;
  border-radius: 0px;
}
</style>