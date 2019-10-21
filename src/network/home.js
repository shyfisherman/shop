//每个页面对应一个请求 统一管理
import {request} from './request';
/*获取轮播图*/
export function getHome(){
    return request({
        url:'/home/multidata'
    })
}
/*获取首页商品*/
export function getHomeList(type,page){
    return request({
        url:'/home/data',
        params:{
            type,
            page,
        }
    })
}
