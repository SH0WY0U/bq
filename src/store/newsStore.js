import {fetchPost} from '../api/newsfetch'

const state = {
    newsHeader:[],
    newsBody:[]
}

const mutations ={
    setHeader(state,params){
        state.newsHeader=params.data.account[0]
    },
    setBody(state,params){
        for(let i=0;i<params.data.account2.length;i++){
            if(params.data.account2[i].type==3){
                params.data.account2[i].smallimg=params.data.account2[i].smallimg.split(',');
            }
        }
        state.newsBody=params.data.account2
    }
}

const actions={
    // 请求动态页头部数据
    async getnewsHeader({commit}){
        const query = `
        query Account($id:Int) {
          account(id:$id) {
              id
              name
              age
              bgpicurl
              header
              firend
          }
        }
      `
        const variables = {id: 123121}
        let newsHeader = await fetchPost('/api/news/test',{
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                query: query,
                variables: variables
            })
        })
        commit('setHeader',newsHeader)
        
    },
    // 请求动态页主体数据
    async getnewsBody({commit},{id}){
        const query2 = `
        query Account2($userid:Int) {
          account2(userid:$userid){
            userid
            type
            url
            bigimg
            smallimg
            title
            name
            header
          }
        }
    `
        const variables2 = {userid: id}
        let newsBody = await fetchPost('/api/news/qq',{
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                query: query2,
                variables: variables2
            })
        })
        commit('setBody',newsBody)
    }
}
export default {
    namespaced: true,
    state,
    mutations,
    actions
}