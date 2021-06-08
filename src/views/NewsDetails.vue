<template>
  <div>
    <div class="content">
      <h1>{{news.title}}</h1>
      <div class="message"
           v-html="news.body"></div>
    </div>
  </div>
</template>


<script>
import news from "@/json/news.json";
export default {
  data () {
    return {
      news: {}
    }
  },
  created: function () {
    var index = this.$route.query.i
    if(index){
      this.$data.news = news[this.$route.query.i]
    }
    

  },
  methods: {

  }
}
</script>

<style lang="less" scoped>
.content {
  // height: 300px;
  padding: 100px 0;
  text-align: left;
  width: 900px;
  margin: 0 auto;
  // background-color: rgba(255, 0, 0, 0.432);
  h1 {
    text-align: center;
  }
}
</style>