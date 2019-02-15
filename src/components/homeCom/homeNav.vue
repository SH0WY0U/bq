<template>
<div class="nav-wrap">
    <nav class="nav">
         <div class="nav-bar" ref="bar" v-show="!showMenu">
            <ul class="nav-list" ref="list">
                <li v-for="item in list" :key="item.id" class="nav-item" ref="item">
                    {{item.name}}
                </li>
               
            </ul>
         </div>
    </nav>
</div>
</template>

<script>
import {getHomeCateList} from '../../services/homeService'
import BScroll from 'better-scroll'
export default {
    data(){
        return {
            list: [],
            showMenu: false,
            selectIndex: 0
        }
    },
    methods: {
        showAction(){
            this.showMenu = !this.showMenu;
        },
        selectTab(index){
            this.selectIndex = index;
            this.showMenu = false;
        }
    },
    created(){
        //请求分类数据
        getHomeCateList().then(data=>{
            //得到结果
            this.list = data;
            this.$nextTick(()=>{
                //识别宽度
                let width = 0;
                this.$refs.item.map(item=>{
                    width += item.offsetWidth;
                })
                //设置宽度
                this.$refs.list.style.width = (width+30)+'px';
                // console.log(this.$refs.scroller)
                //创建滚动视图
                this.scroll=new BScroll('.nav-bar', {
                    scrollX: true,
                    scrollY: false,
                    click: true
                });
               
            })
        })
    }
}
</script>

<style lang="scss" scoped>
.nav{
    width: 100%;
    position: absolute;
    top: 76px;
    left: 0;
    border-top:1px solid #eee;
    border-bottom:1px solid #eee;
    .nav-list{
        white-space: nowrap;
        line-height: 65px;
        padding: 0 20px;
    }
    .nav-item{
        display: inline-block;
        padding: 0 20px;
        font-size: 6px;
        color: #999;
        font-size: 20px;
    }
}

</style>

