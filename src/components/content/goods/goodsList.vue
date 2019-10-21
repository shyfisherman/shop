<template>
<div class="goods_list">
    <goods-list-item v-for="item in goods" :listItem="item"></goods-list-item>
</div>
</template>

<script>
    import goodsListItem from "./goodsListItem";
    export default {
        name: "goodsList",
        props:{
            goods:{
                type:Array,
                default(){
                    return []
                }
            }
        },
        components:{
            goodsListItem
        }
    }
</script>

<style scoped>
    .goods_list{
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
    }
</style>
