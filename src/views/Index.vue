<template>
  <div class="home">
    <Navbar />
    <ProductCenterMin />
    <Introduce />
    <Case />
    <IndustryDynamic />
    <Partners />
    <TechnicalSupport />
  </div>
</template>


<script>
// import Nav from '@/components/Nav.vue'
import Navbar from '@/components/index/Navbar.vue'
import Introduce from '@/components/index/Introduce.vue'
import Case from '@/components/index/Case.vue'
import ProductCenterMin from '@/components/index/ProductCenterMin.vue'
import IndustryDynamic from '@/components/index/IndustryDynamic'
import Partners from '@/components/index/Partners.vue'
import TechnicalSupport from '@/components/index/TechnicalSupport.vue'
export default {
  components: {
    Navbar,
    Introduce,
    Case,
    ProductCenterMin,
    IndustryDynamic,
    Partners,
    TechnicalSupport,
  }
}
</script>

<style lang="less" scoped>
.home div {
  // margin: 120px 0;1
  // ad
}
.home div:nth-child(1) {
  margin: 0 0;
}
</style>