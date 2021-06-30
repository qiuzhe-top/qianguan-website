<template>
  <div>
    <div class="content">
      <!-- <img :src="require('')" alt="" srcset="">       -->
      <div class="message" v-html="news.body"></div>

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