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


    import {getHome,getHomeList} from "network/home";


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
                titles:['流行','潮流','品牌'],
                goods:{
                    'pop':{page:0,list:[]},
                    'news':{page:0,list:[]},
                    'sell':{page:0,list:[]}
                }
            }
        },
        created() {
            //请求轮播图
            this.getHome();

            //请求多个数据
            this.getHomeList('pop');
            this.getHomeList('news');
            this.getHomeList('sell');

        },
        methods:{
            //请求轮播图
            getHome(){
                getHome().then(res =>{
                    this.banner = res.data.banner.list;
                    this.recommends = res.data.recommend.list;
                })
            },
            //请求多个数据
            getHomeList(type){
                const page = this.goods[type].page+1;
                getHomeList(type,page).then(res =>{
                    //一个一个元素塞进去
                    this.goods[type].list(...res.data.list);
                    this.goods[type].page += 1;
                },error => {
                    console.log(error)
                })
            }

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
