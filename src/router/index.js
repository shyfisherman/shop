import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const Home = () => import('../views/Home/home');
const Cate = () => import('../views/Cate/cate');

//定义路由
const routes = [
    {
        path:'',
        component:Home,
    },
    {
        path:'/home',
        component:Home,
    },
    {
        path:'/cate',
        component:Cate,
    }
];

//创建路由对象
const router = new VueRouter({
    routes,
    mode:"history"

})

export default  router;