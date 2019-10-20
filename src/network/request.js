import axios from 'axios';
export function request (config){
        // 配置 返回一个实例
        const instance = axios.create({
            baseURL : 'http://123.207.32.32:8000/api/v1',
            timeout: 5000
        })

        //拦截器 请求拦截
        instance.interceptors.request.use(config => {
            //请求之前做些什么 比如验证token
            return config;
        },err => {
            //对请求错误做些什么
        })

        //拦截器 响应拦截
        instance.interceptors.response.use( res =>{
            //可以添加比如状态吗判断
            return res.data;
        }, err => {

        })

    //这个instance相当于axios({}) 只是可以灵活一点这样创建实例 后面可以设置不同的请求地址
        return instance (config);//这里返回值就是promise对象
}