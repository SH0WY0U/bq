<template>
    <div class="wrap">
        <header>
            <span class="back" @click="()=>{this.$router.go(-1)}">取消</span>
            <h2 class="title">动态</h2>
            <span class="public">发表</span>
        </header>
        <van-panel class="main">
            <div class="now">
                <h2>这一刻的想法</h2>
            </div>
            <van-uploader :after-read="onRead" class="img-box">
                <img class="head-img" src='./xiangji.jpg' ref="img">
                <span class="photo" ref="photo">照片/视频</span>
            </van-uploader>
            <van-uploader :after-read="onRead2" class="img-box2">
                <img class="head-img" src='./add.jpg' ref="img2">
            </van-uploader> 
        </van-panel>
    </div>
</template> 

<script>
import { Panel } from 'vant';
import Vue from 'vue'
import { Uploader } from 'vant';
Vue.use(Panel);
Vue.use(Uploader)
export default {
    methods: {
        onRead(file) {
            this.$refs.img.src=file.content
            this.$refs.photo.innerHTML=''
        },
        onRead2(file) {
            this.$refs.img2.src=file.content
        }
  }
}
</script>

<style lang="scss" scoped>
.wrap{
    position: absolute;
    header{
        height: 88px;
        display: flex;
        padding: 0 30px;
        box-sizing: border-box;
        justify-content: space-between;
        background: #fff;
        .back{
            display: inline-block;
            line-height: 88px;
            font-size: 30px;
        }
        .title{
            margin: 0;
            padding: 0;
            text-align: center;
            line-height: 88px;
            display: inline-block;
        }
        .public{
            line-height: 88px;
            display: inline-block;
            font-size: 30px;
            color: #7ed321;
        }
    }
    .main{
        width: 100%;
        height: 100%;
        padding: 0px 60px;
        box-sizing: border-box;
        .now{
            padding: 100px 0px;
            h2{
                font-weight: normal;
                color: #999;
            }
        }
        .img-box{
            width: 200px;
            height: 200px;
            position: absolute;
        }
        .head-img{
            width: 200px;
            height: 200px;
        }
        .photo{
            font-size: 28px;
            position: absolute;
            left: 40px;
            bottom: 14px;
        }
        .img-box2{
            width: 200px;
            height: 200px;
            position: absolute;
            left: 270px;

        }
    }
    
}
</style>
