<template>
    <Swiper>
        <SwiperItem v-for="item in banner">
            <a :href="item.link">
                <img :src="item.image" alt="" @load="imageLoad">
            </a>
        </SwiperItem>
    </Swiper>
</template>

<script>
    import {Swiper, SwiperItem} from "components/common/swiper";
    export default {
        name: "homeSwiper",
        data(){
          return {
              isLoad:false
          }
        },
        components:{
            Swiper,
            SwiperItem
        },
        props:{
            banner:{
                type : Array,
                default () {
                    return []
                }
            }
        },
        methods:{
            imageLoad(){
                //做吸顶效果 需要一个准确的高度 监听图片加载完成 因为轮播图加载比较慢
                if(!this.isLoad){
                    this.$emit("swpierImgLoad")
                    this.isLoad = true; //只需要有一张图片就可以 不需要用到防抖
                }


            }
        }
    }
</script>

<style scoped>

</style>