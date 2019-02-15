<template>
  <div id="home" class="page">
    <header class="header">
      <van-icon name="wap-nav" class="wap-nav"/>
      <ul class="header-list">
        <li v-for="(list,index) in headerList" :key="index" class="header-item" :class="{active:selectindex === index}" @click="selectHeader(index)"> 
          {{list.title}}
        </li>
      </ul>
      <van-icon name="search" class="fdj"/>
    </header>
    
    <homeNav/> 

  </div>
</template>

<script>
import homeNav from '../../components/homeCom/homeNav'
export default {
  data() {
    return {
      headerList: [
        { title: "关注"},
        { title: "发现"},
        { title: "附近"}
      ],
      selectindex: 0
    };
  },
  components: {
      homeNav
  },
  methods: {
    selectHeader(index){
      this.selectindex = index;
  }
  },
}
</script>
<style lang="scss" scoped>
  .header{
        width: 100%;
        height: 22px;
        position: absolute;
        top: 0;
        left: 0;
        display: flex;
        padding: 6px 4px;
        box-sizing: border-box;  
        .wap-nav{
          padding-top: 10px;
          padding-left: 100px;
        }
        .header-list{
          margin: 0 auto;
          .header-item{
            padding-top: 5px;
            &.active{
              color: #f1457c;
              border-bottom: 1px solid #f1457c;
            }
          }
        }
        .header-list li{
          float: left;
          padding: 10px 50px;
        }
        .fdj{
          padding-top: 10px;
          padding-right: 100px;
        }
  }
</style>
