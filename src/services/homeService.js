import API from '../api/homeApi.js'
import {FetchGet, FetchPost} from '../common/fetch'

// 请求首页的分类
export function getHomeCateList(){
    // 使用async， await
    return new Promise((resolve, reject)=>{
        FetchGet(API.CATELIST_URL)
        .then(
            (data)=>{
                // 过滤数据
                resolve(data.map(({name, id})=>({name,id})));
                // this.list = data.map((item)=>{
                //     return {
                //         name: item.name,
                //         id: item.id
                //     }
                // })
            }
        )
    })
    
}