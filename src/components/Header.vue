<template>
  <div class="box">
    <div class="nav public-width width-auto flex">
        <el-image class="logo" :src="log_src"></el-image>

        <el-menu
          :default-active="activeIndex"
          class="el-menu-demo"
          mode="horizontal"
        >
          <el-menu-item index="1" @click="toPage('Index')"> 首页 </el-menu-item>
          <el-menu-item index="2" @click="toPage('ProductCenter')">
            产品中心
          </el-menu-item>

          <el-menu-item index="4" @click="toPage('Software')">
            软件平台
          </el-menu-item>
          <el-menu-item index="5" @click="toPage('ApplicationCase')">
            最新资讯
          </el-menu-item>
        </el-menu>

        <div class="tal hover-pop">联系电话：18058189565</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeIndex: "1",
      activeIndex2: "1",
      log_src: require("@/assets/logo.png"),
    };
  },
  methods: {
    // handleSelect (key, keyPath) {
    // },
    toPage(url) {
      this.$router.push({ name: url });
    },
  },
};
</script>

<style lang="less" scoped>
.el-menu--horizontal > .el-menu-item.is-active {
  border: 0px solid white;
}
.el-menu.el-menu--horizontal {
  border: none;
}

.el-menu--horizontal > .el-menu-item {
  margin: 0 30px;
}
.nav {
  display: flex;
  align-items: center;
  justify-content: start;
  font-weight: 600;
  padding: 10px 0;
  // logo大小
  .logo {
    width: 120px;
    margin-right: 80px;
  }
  .tal {
    font-size: 14px;
    margin-left: 50px;
  color:  rgb(145, 145, 145);
  cursor: pointer;

  }
}

</style>