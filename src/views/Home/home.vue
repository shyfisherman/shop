<template>
    <div id="home">
        <topBar class="home-top"><div  slot="mid">首页</div></topBar>
        <!--轮播图-->
        <home-swiper class="banner" :banner="banner"></home-swiper>
        <!--推荐-->
        <home-recom :recommends="recommends"></home-recom>
        <tab-contro :titles="titles"></tab-contro>

        <ul>
            <li>立标</li>
            <li>立标</li>
            <li>立标</li>
            <li>立标</li>
            <li>立标</li>
            <li>立标</li>
            <li>立标</li>
            <li>立标</li>
            <li>立标</li>
            <li>立标</li>
            <li>立标</li>
            <li>立标</li>
            <li>立标</li>
            <li>立标</li>
            <li>立标</li>
            <li>立标</li>
            <li>立标</li>
            <li>立标</li>
            <li>立标</li>
            <li>立标</li>
            <li>立标</li>
            <li>立标</li>
            <li>立标</li>
            <li>立标</li>
            <li>立标</li>
            <li>立标</li>
            <li>立标</li>
            <li>立标</li>
            <li>立标</li>
            <li>立标</li>
            <li>立标</li>
            <li>立标</li>
            <li>立标</li>
            <li>立标</li>
            <li>立标</li>
            <li>立标</li>
            <li>立标</li>
            <li>立标</li>
            <li>立标</li>
            <li>立标</li>
            <li>立标</li>
            <li>立标</li>
            <li>立标</li>
            <li>立标</li>
            <li>立标</li>
            <li>立标</li>
            <li>立标</li>
            <li>立标</li>
            <li>立标</li>
            <li>立标</li>
            <li>立标</li>
            <li>立标</li>
            <li>立标</li>
            <li>立标</li>
            <li>立标</li>
            <li>立标</li>
            <li>立标</li>
            <li>立标</li>
            <li>立标</li>
            <li>立标</li>
            <li>立标</li>
            <li>立标</li>
            <li>立标</li>
            <li>立标</li>
            <li>立标</li>
            <li>立标</li>
            <li>立标</li>
            <li>立标</li>
            <li>立标</li>
            <li>立标</li>
            <li>立标</li>
            <li>立标</li>

        </ul>



    </div>

</template>

<script>

    import topBar from "components/common/topbar/topBar";
    import tabContro from "components/content/tabContro/tabContro";


    import homeSwiper from './childComp/homeSwiper';
    import homeRecom  from "./childComp/homeRecom";


    import {getHome} from "network/home";

    export default {
        name: "home",
        components: {
            topBar,
           homeSwiper,
            homeRecom,
            tabContro

        },
        data() {
            return {
                banner:[],
                recommends:[],
                titles:['流行','潮流','品牌']
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
    background-color: pink;
    color: white;
    position: fixed;
    z-index: 999;
    width: 100%;
    left: 0px;
    right: 0px;
    top: 0px;
}
    .banner{
        margin-top: 44px;
    }

</style>
