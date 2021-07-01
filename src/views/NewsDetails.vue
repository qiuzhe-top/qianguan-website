<template>
  <div>
    <div class="content">
      <div class="message" v-html="news.body"></div>

      <img
        v-for="(url, index) in news.url_list"
        :key="index"
        :src="require('@/' + url)"
        alt="center"
        srcset=""
      />

    </div>
  </div>
</template>


<script>
import new_json from "@/json/news.json";
export default {
  data() {
    return {
      news: {},
    };
  },
  created: function () {
    const id = this.$route.query.i;
    // var _this = this
    new_json.forEach((e) => {
      if (e.id + "" == id) {
        this.$data.news = e;
      }
    });
    this.$data.news.body = this.$b64.decode(this.$data.news.body);
  },
  methods: {},
};
</script>

<style lang="less" scoped>
.content {
  padding: 100px 0;
  text-align: left;
  width: 900px;
  margin: 0 auto;
  text-align: center;
  img{
    width: 100%;
  }
}
</style>