<template>
  <div class="box">
    <div class="nav public-width width-auto">
      <el-image class="logo"
                :src="log_src"></el-image>

      <el-menu :default-active="activeIndex"
               class="el-menu-demo"
               mode="horizontal"
               @select="handleSelect">
        <!-- horizontal / vertical -->
        <el-menu-item index="1"
                      @click="toPage('Index')">
          首页
        </el-menu-item>
        <el-menu-item index="2"
                      @click="toPage('ProductCenter')">
          产品中心
        </el-menu-item>
        <!-- <el-menu-item index="7">

          
          <router-link to="/ProductIntroduction">产品介绍</router-link>
        </el-menu-item> -->

        <!-- <el-submenu index="3">
          <template slot="title">技术支持</template>
          <el-menu-item index="2-1">选项1</el-menu-item>
          <el-menu-item index="2-2">选项2</el-menu-item>
          <el-menu-item index="2-3">选项3</el-menu-item>
          <el-submenu index="2-4">
            <template slot="title">应用案例</template>
            <el-menu-item index="2-4-1">选项1</el-menu-item>
            <el-menu-item index="2-4-2">选项2</el-menu-item>
            <el-menu-item index="2-4-3">选项3</el-menu-item>
          </el-submenu>
        </el-submenu> -->


        <el-menu-item index="4"
                      @click="toPage('ApplicationCase')">
          最新资讯
        </el-menu-item>
        <el-menu-item index="5"
                      @click="toPage('About')">
          关于我们
        </el-menu-item>
        <el-menu-item index="6"
                      @click="toPage('About')">联系我们</el-menu-item>
      </el-menu>

      <!-- <div class="tal">010-88351020</div> -->
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      activeIndex: "1",
      activeIndex2: "1",
      log_src: require('@/assets/logo.png')
    };
  },
  methods: {
    handleSelect (key, keyPath) {
      console.log(key, keyPath);
    },
    toPage (url) {
      this.$router.push({ name: url })
    }
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
  }
}
</style>