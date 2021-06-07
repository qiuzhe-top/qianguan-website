<template>
  <div>
    详情
  </div>
</template>


import news from "@/json/news.json";
<script>
export default {
  data () {
    return {
      activeName: 'first',
      news: {}
    }
  },
  created: function (option) {
    this.$data.news = news[this.$route.query.i]
  },
  methods: {

  }
}
</script>