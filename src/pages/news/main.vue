<template>
    <div>
        <!-- <ul>
            <li v-for="item in data" :key="item.title">
                <img>
                <h3>美美</h3>
                <span>{{item.title}}</span>
                <img>
                <van-icon name="comment-o" />
            </li>
        </ul> -->
    </div>
</template>

<script>

export default {
   porps:['data'],
   created(){
       console.log(data)
    //    let arr=this.data.firend.split(',')
    //    this.$store.dispatch("news/gestnewsBody",{})
   }
}
</script>

<style>

</style>
