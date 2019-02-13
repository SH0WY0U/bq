<template>
<scroller>
  <div id="news">
    <div class="new" :style="{backgroundImage: 'url('+headerdata.bgpicurl+')', backgroundSize: 'cover'}">
      <header class="head">
        <h1>动态</h1>
        <van-icon class="cream" name="photograph" @click="()=>{this.$router.push('./news/public')}"/>
      </header>
      <p class="name">{{headerdata.name}}</p>
      <img class="image" :src="headerdata.header">
      
    </div>
    <maintest v-if='headerdata' :data="headerdata"/>
  </div>
</scroller>
</template>

<script>
import {mapState} from 'vuex'
import Maintest from './main'
export default {
  components:{
    Maintest
  },
  created(){
      this.$store.dispatch("news/getnewsHeader")      
  },
  computed:{
    ...mapState({
        headerdata: state=>state.news.newsHeader
    })
  },
  mounted(){

  }
};
</script>
<style lang="scss" scoped>
#news{
  
  .new{
    position: relative;
    height: 316px;
    background: silver;
    .head{
      height: 88px;
      h1{
        line-height: 88px;
        text-align: center;
        color: #fff;
      }
      .cream{
        position: absolute;
        top: 16px;
        right: 20px;
        font-size: 50px;
        color: #fff;
      }
    }
    .name{
      font-size: 42px;
      position: absolute;
      right: 200px;
      bottom: 20px;
      color: #fff;
    }
    .image{
      position: absolute;
      right: 0;
      margin: 0 30px;
      bottom: -50px;
      width: 140px;
      height: 140px;
    }
  }
}
</style>
