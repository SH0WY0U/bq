<template>
  <router-link class="tab" :to="info.path">
    <van-icon :name="info.class"/>
    {{info.title}}
  </router-link>
</template>

<script>
export default {
  name: "tab-item",
  props: ["info"]
};
</script>

<style>
.tab {
  text-align: center;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.tab {
  font-size: 0.12rem;
  color: #999;
}
.tab .van-icon {
  font-size: 0.24rem;
}
.tab.router-link-active {
  color: #f1457c;
}
</style>
