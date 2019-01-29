<template>
  <div id="news">
    <div class="new" :style="{backgroundImage: 'url('+bgpicurl+')', backgroundSize: 'cover'}">
      <header class="head">
        <h1>动态</h1>
        <van-icon class="cream" name="photograph" />
      </header>
      <p class="name">{{name}}</p>
      <img class="image" :src="headers">
    </div>
    
  </div>
</template>

<script>
export default {
  data(){
    return{
      name:'',
      headers:'',
      bgpicurl:''
    }
  },
  created(){
    const query = `
        query Account {
            account {
                name
                age
                bgpicurl
                header
                firend
            }
        }
        `
    // const variables = {name: '邵桂英'}
    console.log(query)
    fetch('/api/news/test',{
      method: "POST",
      headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
      },
      body: JSON.stringify({
          query: query,
          // variables: variables
      })
    })
    .then(response => response.json())
    .then(data => {
      console.log(data)
      this.name=data.data.account[1].name
      this.headers=data.data.account[1].header
      this.bgpicurl=data.data.account[1].bgpicurl
  });
    fetch('/api/news/test1')
    .then(response => response.json())
    .then(data=>{
      console.log(data)
    })
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
