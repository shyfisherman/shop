<template>
    <div id="home">
        <topBar class="home-top"><div  slot="mid">首页</div></topBar>
        <!--轮播图-->
        <home-swiper :banner="banner"></home-swiper>
        <!--推荐-->
        <home-recom :recommends="recommends"></home-recom>
    </div>

</template>

<script>
    <!--公共组件-->
    import topBar from "components/common/topbar/topBar";

    <!--页面组件-->
    import homeSwiper from './childComp/homeSwiper';
    import homeRecom  from "./childComp/homeRecom";

    <!--请求数据-->
    import {getHome} from "network/home";

    export default {
        name: "home",
        components: {
            topBar,
           homeSwiper,
            homeRecom

        },
        data() {
            return {
                banner:[],
                recommends:[]
            }
        },
        created() {
            getHome().then(res =>{
                this.banner = res.data.banner.list;
                this.recommends = res.data.recommend.list;
            })
        }
    }
</script>

<style scoped>
.home-top{
    background-color: white;
}
</style>