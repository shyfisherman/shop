<template>
    <div id="home">
        <topBar class="home-top">
            <div slot="mid">首页</div>
        </topBar>
        <tab-contro class="spe-tab" ref="tabContro2" :titles="titles" @tabClick="tabClick" v-show="showXd"></tab-contro>
        <!--轮播图-->
        <scroll class="wrap2" ref="scroll"
                @scroll="onContentScroll"
                :pull-up-load = "true"
                :probe-type="3"
                @pullingUp="loadMord">
            <home-swiper class="banner" :banner="banner" @swpierImgLoad="loadImgSwiper"></home-swiper>
            <!--推荐-->
            <home-recom :recommends="recommends"></home-recom>
            <tab-contro  ref="tabContro1" :titles="titles" @tabClick="tabClick"></tab-contro>
            <goods-list :goods="goodsType"></goods-list>
        </scroll>
        <back-top @click.native = "bakcTop" v-show = "isShowBack"></back-top>
    </div>


</template>

<script>

    import topBar from "components/common/topbar/topBar";
    import tabContro from "components/content/tabContro/tabContro";
    import goodsList from "components/content/goods/goodsList";
    import scroll from "components/common/scroll/scroll";
    import backTop from "components/common/backtop/backTop";
    import {fangDou} from "common/tool";


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
            goodsList,
            backTop
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
                currentType: 'pop',
                isShowBack:false,
                offsetTop:null,//距离顶部
                showXd:false,//是否显示吸顶

            }
        },
        created() {
            //请求轮播图
            this.getHome();

            //请求多个数据
            this.getHomeList('pop');
            this.getHomeList('new');
            this.getHomeList('sell');


        },
        mounted(){
            //监听图片加载完成 又因为bus没值 需要到main。js
            const refresh = fangDou(this.$refs.scroll.refresh,500);
            this.$bus.$on('itemImgLoad',() => {
                //create 拿不到$refs 还没加载  执行太频繁 使用防抖
                //解决bug 最后就是调用这个方法 不断刷新 重新设置高
                refresh();
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
                    //完成上拉加载更多
                    this.$refs.scroll.finishPullUp();
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
                this.$refs.tabContro1.currentIndex=index;
                this.$refs.tabContro2.currentIndex=index;
            },

            //回到顶部
            bakcTop(){
                this.$refs.scroll.scrollTo(0,0,500);
            },
            //滚动触发 显示隐藏按钮
            onContentScroll(position) {
                this.isShowBack =  (-position.y) > 1000;
                this.showXd = (-position.y)>this.offsetTop;//滚动的距离

            },
            //加载更多
            loadMord(){

                this.getHomeList(this.currentType);
            },
            loadImgSwiper(){
               this.offsetTop = this.$refs.tabContro1.$el.offsetTop;//吸顶效果 滚动的高度 如果大于等于这个高度 就出来
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
        width: 100%;
        left: 0px;
        right: 0px;
        top: 0px;
    }
    .spe-tab{
        position: relative;
        background-color: white;
        z-index: 9;
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
    /*.wrap2 {*/
    /*    height: calc(100%-98px);*/
    /*    overflow: hidden;*/
    /*}*/
</style>
