<template>
  <div class="product">
    <!-- 背景大图 -->
    <div class="img-box bj1 position-abs-100">
      <el-image
        fit="cover"
        style="width: 100%"
        src="https://demosc.chinaz.net/Files/DownLoad/moban/202105/moban5479/extra-images/slide-1.jpg"
      ></el-image>
    </div>

    <div class="img-box"></div>

    <div
      class="backcolor"
      style="
        position: fixed;
        height: 100vh;
        width: 100%;
        top: 0;
        left: 0;
        z-index: -2;
      "
    ></div>

    <!-- 商品分类 -->
    <div class="classify flex">

      <div class="title">类型:</div>

      <div class="list flex">
        <div class="type-title" v-bind:class="{ active: index == nav1_index }" v-for="(item,index) in nav_list" :key="index" @click="switch_nav(index)">{{item.title}}</div>
      </div>

    </div>
    <!-- 商品列表 -->
    <div class="goods p-r">
      <div class="nav p-a">
        <div class="type-title" v-bind:class="{ active: index == nav2_index }"  v-for="(item,index) in nav_list[nav1_index].child" :key="index" @click="switch_nav2(index)">{{item.title}}</div>
      </div>

      <div class="goods-box" v-for="(item, index) in goods" :key="index">
        <div class="img">
          <el-image
            style="height: 100%"
            :src="require('@/' + item.src)"
            @click="toGoods(index)"
            fit="contain"
          ></el-image>
        </div>
        <div class="title" @click="toGoods(index)">{{ item.title }}</div>
        <!-- <div class="message bj2">{{item.message}}</div> -->
        <div class="button" @click="toGoods(index)">查看详情</div>
      </div>
    </div>

    <!-- 分页 -->
    <div class="page">
      <el-pagination
        background
        layout="prev, pager, next"
        :page-size="page_size"
        @current-change="current_change"
        :total="total"
      >
      </el-pagination>
    </div>
  </div>
</template>


<script>
import goods from "@/json/goods.json";
import nav_list from "@/json/goods/nav.json";
export default {
  data() {
    return {
      goods: [],
      total: 1,
      page_size: 12,
      nav1_index:0,
      nav2_index:0,
      
      nav_list:nav_list
    };
  },
  created: function () {
    // `this` 指向 vm 实例
    this.$data.total = goods.length;
    var e = 0;
    var page_size = this.$data.page_size;
    this.$data.goods = goods.slice(e, e + page_size);
    var id = this.$route.query.id;
  },
  methods: {
    get_goods(){
        console.log(11)

      const f = this.nav_list[this.nav1_index].id
      const c = f.child[this.nav2_index].id
      goods.forEach(e => {
        console.log(e.type[0])
        // if(e.type[0]==f && e.type[1]==f){
        // }
      });

    },
    current_change: function (e) {
      var page_size = this.$data.page_size;
      // if(e==1){
      //   e = 0
      // }
      e -= 1;
      // 0 1  0 2
      // 2 3  2 4
      // 4 5  4 6
      this.$data.goods = goods.slice(e * page_size, e * page_size + page_size);
    },
    toGoods: function (index) {
      this.$router.push({ name: "ProductIntroduction", query: { i: index } });
    },
    switch_nav: function(index){
      this.nav1_index = index
      this.nav2_index = 0
      this.get_goods()
    },
    switch_nav2: function(index){
      this.nav2_index = index
      this.get_goods()
    }
  }
};
</script>

<style lang="less" scoped>
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
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
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
  @w: 90px;
  .nav {

    padding: 20px 0;
    width: @w;
    background: #ffffff;
    left: -@w - 20;
    cursor: pointer;
    white-space: nowrap;
    zoom: 1;
    margin-bottom: 4px;

    div {
      margin-bottom: 10px;
    }

  }
}
.type-title{
  text-align: center;
}
.type-title:hover{
    color: #ffffff;
    background-color: yellowgreen;
}
.active{
    color: #ffffff;
    background-color: yellowgreen;
}
</style>