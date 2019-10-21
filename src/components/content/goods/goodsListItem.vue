<template>
    <div class="goods-item">
        <img :src="listItem.show.img">
        <div class="goods-info">
            <p>{{listItem.title}}</p>
            <span class="price">{{listItem.price}}</span>
            <span class="collect">{{listItem.cfav}}</span>
        </div>
    </div>
</template>

<script>
    export default {
        name: "goodsListItem",
        props:{
           listItem:{
               type:Object,
               default(){
                   return {}
               }
           }
        }
    }
</script>

<style scoped>
    .goods-item {
        width:48%;
        position: relative;
        padding-bottom: 40px;
        margin-bottom: 15px;
    }
    .goods-item img {
        width: 100%;
        border-radius: 5px;
    }
    .goods-info{
        font-size: 12px;
        position: absolute;
        bottom: 1px;
        left: 0;
        right: 0;
        overflow: hidden;
        text-align: center;
    }
    .goods-info p {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
    .goods-info .price {
        color:var( --comon-color);
        margin-right: 28px;
    }
    .collect{
        position:relative;
    }
    .goods-info .collect::before {
        content: '';
        position: absolute;
        left: -15px;
        top: 1px;
        width: 14px;
        height: 14px;
        background: url("~assets/img/common/collect.svg") 0 0/14px 14px;
    }
</style>
