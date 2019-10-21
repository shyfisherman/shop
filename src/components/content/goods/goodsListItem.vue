<template>
    <div class="goods-item">
        <img :src="listItem.show.img">
        <div class="goods_info">
            <p>{{listItem.title}}</p>
            <span>{{listItem.price}}</span>
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
.goods-item img{
    width:30%;
}
</style>
