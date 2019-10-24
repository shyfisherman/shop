<template>
    <div id="home">
        <topBar class="home-top">
            <div slot="mid">首页</div>
        </topBar>
        <!--轮播图-->
        <scroll class="wrap2" ref="scroll">
            <home-swiper class="banner" :banner="banner"></home-swiper>
            <!--推荐-->
            <home-recom :recommends="recommends"></home-recom>
            <tab-contro :titles="titles" @tabClick="tabClick"></tab-contro>
            <goods-list :goods="goodsType"></goods-list>
        </scroll>
    </div>

</template>

<script>

    import topBar from "components/common/topbar/topBar";
    import tabContro from "components/content/tabContro/tabContro";
    import goodsList from "components/content/goods/goodsList";
    import scroll from "components/common/scroll/scroll";


    import homeSwiper from './childComp/homeSwiper';
    import homeRecom from "./childComp/homeRecom";


    import {getHome, getHomeList} from "network/home";
    import GoodsList from "../../components/content/goods/goodsList";


    export default {
        name: "home",
        components: {
            scroll,
            GoodsList,
            topBar,
            homeSwiper,
            homeRecom,
            tabContro,
            goodsList


        },
        data() {
            return {
                banner: [],
                recommends: [],
                titles: ['流行', '潮流', '品牌'],
                goods: {
                    'pop': {page: 0, list: []},
                    'new': {page: 0, list: []},
                    'sell': {page: 0, list: []}
                },
                currentType: 'pop'
            }
        },
        created() {
            //请求轮播图
            this.getHome();

            //请求多个数据
            this.getHomeList('pop');
            this.getHomeList('new');
            this.getHomeList('sell');

            //监听图片加载完成
            this.$bus.$on('itemImgLoad',() => {
                this.$refs.scroll.scroll.refresh();//解决bug 最后就是调用这个方法 不断刷新 重新设置高度
            });

        },
        computed: {
            goodsType() {
                return this.goods[this.currentType].list;
            }
        },
        methods: {
            //请求轮播图
            getHome() {
                getHome().then(res => {
                    this.banner = res.data.banner.list;
                    this.recommends = res.data.recommend.list;
                })
            },
            //请求多个数据
            getHomeList(type) {
                const page = this.goods[type].page + 1;
                getHomeList(type, page).then(res => {

                    let list = res.data.list;
                    //一个一个元素塞进去 这个语法可以把数组
                    this.goods[type].list.push(...list);
                    this.goods[type].page += 1;
                }, error => {
                    console.log(error)
                })
            },

            //点击tabconro
            tabClick(index) {
                if (index == 0) {
                    this.currentType = 'pop'
                }
                if (index == 1) {
                    this.currentType = 'new'
                }
                if (index == 2) {
                    this.currentType = 'sell'
                }
            }


        }
    }
</script>

<style scoped>
    #home {
        height: 100vh;
        position: relative;
    }

    .home-top {
        background-color: pink;
        color: white;
        position: fixed;
        z-index: 999;
        width: 100%;
        left: 0px;
        right: 0px;
        top: 0px;
    }

    /*.banner {*/
    /*    margin-top: 44px;*/
    /*}*/

    .wrap2 {
        position: absolute;
        top: 44px;
        bottom: 49px;
        left: 0;
        right: 0;
        overflow:hidden;
    }

</style>
