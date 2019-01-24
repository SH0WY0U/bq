import axios from 'axios'
import { Notify } from "vant";
export function FetchGet(url, params = {}) {
    return new Promise((resolve, reject) => {
        axios.get(url, {
            params
        })
            .then(response => {
                // console.log(response);
                if (response.data.status) {
                    // Notify("请求错误");
                    Notify({
                        message: '请求错误',
                        duration: 2000,
                        // background: '#1989fa'
                    });
                } else {
                    // console.log(response);
                    resolve(response.data.data);
                }
            })
            .catch(error => {
                // console.log(error);
                Notify({
                    message: '请求错误',
                    duration: 2000,
                    // background: '#1989fa'
                });
                reject(error)
            })
    })
}
export function FetchPost(url, params = {}) {
    return new Promise((resolve, reject) => {
        axios.post(url, params)
            .then(response => {
                // console.log(response);
                if (response.data.status) {
                    // Notify("请求错误");
                    Notify({
                        message: '请求错误',
                        duration: 2000,
                        // background: '#1989fa'
                    });
                } else {
                    // console.log(response);
                    resolve(response.data.data);
                }
            })
            .catch(error => {
                // console.log(error);
                Notify({
                    message: '请求错误',
                    duration: 2000,
                    // background: '#1989fa'
                });
                reject(error)
            })
    })
}