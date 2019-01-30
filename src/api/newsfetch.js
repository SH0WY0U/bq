import { Toast } from 'vant';


export function fetchPost(url, params = {}){
    return new Promise((resolve,reject)=>{
        fetch(url,params)
        .then(response => response.json())
        .then(data=>{
            resolve(data)
        })
        .catch(error=>{
            //请求失败
            Toast({
                message: '请求失败',
                duration: 1000
            });
        })
    })
}
//     return new Promise((resolve, reject)=>{
//         axios.post(url, params)
//         .then(response=>{
//             if(response.status == 200 && response.data.status == 0){
//                 // 后台数据可以使用
//                 resolve(response.data.data);
//             }
//             else{
//                 // 后台数据无效
//                 Toast({
//                     message: '请求错误',
//                     duration: 1000
//                 });
//             }
//         })
//         .catch(error=>{
//             //请求失败
//             Toast({
//                 message: '请求失败',
//                 duration: 1000
//             });
//         })
//     })
// }