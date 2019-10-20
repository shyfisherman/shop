//每个页面对应一个请求 统一管理
import {request} from './request';
export function getHome(){
    return request({
        url:'/home/multidata'
    })
}