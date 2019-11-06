export function fangDou(func,delay) {
    let timer = null;
    // 时间循环 这个会最后才执行的 在整个流程中
    return function (...args){
        if (timer) clearTimeout(timer);
        timer = setTimeout(()=>{
            func.apply(this,args)
        },delay)
    }
}