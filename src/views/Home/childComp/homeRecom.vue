<template>
    <div class="recom">
        <div class="recom-item" v-for="item in recommends">
            <img :src="item.image">
            <div>{{item.title}}</div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "homeRecom",
        props:{
            recommends:{
                type:Array,
                default (){ //默认值是对象或者数组时候 要返回函数
                    return []
                }
            }

        }
    }
</script>

<style scoped>
    .recom{
        display: flex;
    }
    .recom-item{
        flex: 1;
        text-align: center;
        padding: 15px 0;
        border-bottom: 10px solid rgb(245,245,245);
    }
    .recom-item img {
        width:60px;
        height: 60px;
        margin-bottom: 5px;
    }
</style>