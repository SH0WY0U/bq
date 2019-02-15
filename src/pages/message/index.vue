<template>
  <div id="message">
    <van-nav-bar title="消息"/>

    <ul>
      <li class="border-bottom">消息列表
        <van-icon name="arrow"/>
      </li>
      <li class="border-topbottom">好友
        <van-icon name="arrow"/>
      </li>
      <li class="border-topbottom">好友名片
        <van-icon name="arrow"/>
      </li>
      <li class="border-top">关注列表
        <van-icon name="arrow"/>
      </li>
    </ul>
  </div>
</template>

<script>
import Vue from "vue";
import { NavBar } from "vant";
Vue.use(NavBar);
export default {
  methods: {}
};
</script>
<style lang="scss" >
#message {
  .van-nav-bar {
    background: #f1457c;
    .van-nav-bar__title {
      color: white;
    }
  }
  ul {
    padding-top: 30px;
    width: 100%;
    li {
      width: 100%;
      background: white;
      height: 80px;
      line-height: 80px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-size: 32px;
      padding: 0 20px;
      box-sizing: border-box;
    }
  }
}
</style>
