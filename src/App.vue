<template>
  <div id="app">
    <router-view class="page"></router-view>
    <tab-bar>
      <tab-item v-for="tabItem in tabList" :key="tabItem.title" :info="tabItem"></tab-item>
    </tab-bar>
    <!-- <router-view name="kid"></router-view> -->
  </div>
</template>
<script>
export default {
  data() {
    return {
      tabList: [
        { title: "首页", path: "/home", class: "wap-home" },
        { title: "动态", path: "/news", class: "hot-o" },
        { title: "消息", path: "/message", class: "chat-o" },
        { title: "我", path: "/mine", class: "contact" }
      ]
    };
  },
  created() {
    // this.$store.dispatch("getUser", "000");
  }
};
</script>
<style lang="scss">
html,
body,
#app {
  height: 100%;
  width: 100%;
  position: relative;
  background: #f5f5f5;
}
.page {
  position: absolute;
  top: 0;
  bottom: 49px;
  width: 100%;
  // background: orange;
}
</style>
