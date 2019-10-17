import axios from 'axios';
export function request (config){
    return new Promise((resolve,reject)=>{
        // 配置 返回一个实例
        const init = axios.create({
            baseUrl : 'http://123.207.32.32:8000/api/v1',
            timeout: 5000
        })
        return init (config);//这里返回值就是promise
        //发送真正的网络请求 axios({url})
        // init(config)
        //     .then(res => {
        //         resolve(res)
        //     })
        //     .catch(err => {
        //         reject(err)
        //     })
    })
}