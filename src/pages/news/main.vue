<template>
    <ul class="new_child">
      <li v-for="item in list" :key="item.title" class="item" border-bottom>
        <img :src="item.header" class="tou">
        <h3 class="name">{{item.name}}</h3>
        <span class="title">{{item.title}}</span>
        <a v-if="item.type==1" :href="item.url" class="url">
          <img class="urlimg">
          <span class="url-content">{{item.url}}</span>
        </a>
        <div class="bigimg" v-if="item.type==2">
          <img class="big" :src="item.bigimg" @click="showImg2()">
        </div>

        <ul v-if="item.type==3" class="ninepic">
          <li v-for="(kk,index) in item.smallimg" :key="index" class="nine-item">
            <img :src="kk" class="nineimg" @click="showImg(index)" >
          </li>
        </ul>
        <van-icon name="comment-o" class="icon"/>
      </li>
    </ul>
</template>

<script>
import { mapState } from "vuex";
import { ImagePreview } from 'vant';
export default {
  name: "maintest",
  props: ["data"],
  data() {
    return {
      arr: []
    };
  },
  created() {
    setTimeout(() => {
      this.arr = this.data.firend.split(",");
      return this.arr;
    }, 500);
  },
  methods:{
    showImg(index){
      for(let i=0;i<this.list.length;i++){
          if(this.list[i].type==3){
            ImagePreview({
              images:this.list[i].smallimg,
              startPosition: index
            });
          }
      }
    },
    showImg2(){
      for(let i=0;i<this.list.length;i++){
          if(this.list[i].type==2){
            ImagePreview([this.list[i].bigimg]);
          }
      }
    }
  },
  computed: {
    ...mapState({
      list: state => state.news.newsBody
      
    })
  },
  watch: {
    arr: {
      handler(newVal) {
        let val = newVal.map(item => {
          return Number(item);
        });
        for (let i = 0; i < val.length; i++) {
          this.$store.dispatch("news/getnewsBody", { id: val[i] });
        }
      }
    }
  },
  mounted() {
  }
};
</script>

<style lang="scss" scoped>
.new_child {
  width: 100%;
  // position: absolute;
  top: 316px;
  bottom: 0;
  // overflow: auto;
  .item {
    padding: 0 24px 0 24px;
    margin-top: 30px;
    box-sizing: border-box;
    .tou {
      width: 100px;
      height: 100px;
    }
    .name {
      display: inline-block;
      vertical-align: top;
      padding: 10px 18px;
      font-size: 30px;
      font-weight: 900;
    }
    .title {
      display: inline-block;
      vertical-align: top;
      font-size: 18px;
      margin-left: -80px;
      margin-top: 60px;
    }
    .url {
      display: block;
      width: 578px;
      height: 120px;
      line-height: 120px;
      background: #ebebeb;
      margin-left: 118px;
      .urlimg {
        display: inline-block;
        vertical-align: middle;
        line-height: 120px;
        width: 100px;
        height: 100px;
        background: silver;
        margin-left: 10px;
        margin-top: -5px;
      }
      .url-content {
        margin-left: 10px;
      }
    }
    .bigimg {
      width: 100%;
      height: 224px;
      .big {
        margin-left: 118px;
        width: 378px;
        height: 224px;
      }
    }
    .ninepic {
      padding-left: 118px;
      width: 580px;
      display: flex;
      flex-wrap: wrap;
      justify-content: flex-start;
      .nine-item {
        margin-top: 10px;
        margin-left: 10px;
        width: 32%;
        height: 188px;
      }
      .nine-item:nth-child(1) {
        margin-left: 0;
      }
      .nine-item:nth-child(4) {
        margin-left: 0;
      }
      .nine-item:nth-child(7) {
        margin-left: 0;
      }
      .nineimg {
        width: 188px;
        height: 188px;
      }
    }
    .icon {
      display: block;
      margin-top: 10px;
      text-align: right;
    }
  }
}

</style>
