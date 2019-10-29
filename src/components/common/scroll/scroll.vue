<!--better-scroll https://github.com/ustbhuangyi/better-scroll/blob/v2.0.0-beta.2/README_zh-CN.md-->
<!--所有第三方插件都要在封装一次 防止不维护 然后每个页面依赖性高 如果不维护 只改这里就可以-->
<!--滚动的部分是content 但是外层必须有一层wrapper-->
<template>
    <div class="wrapper" ref="wrapper">
        <div class="content">
            <slot></slot>
        </div>
    </div>
</template>

<script>
    import BScroll  from 'better-scroll'
    export default {
        name: "scroll",
        data(){
            return {
                scroll:null,
            }
        },
        props:{
            probeType:{
                type:Number,
                default:0
            }
        },
        mounted() {
           // let wrapper = document.querySelector('.wrapper') 不要使用这个获取 怕获取到其他同一个类名
            //不能再create  绑定最外层的 需要给高度 超过了这个高度就会滚动 而且里面必须只有一个子级 如content 子级里面可以放其他
            //click true 那么他里面的div 这样的元素才能被点击
            let wrapper = this.$refs.wrapper;
            this.scroll = new BScroll(wrapper,{
                click:true,
                probeType:this.probeType
            });
            //bug  他能不能滚动式根据this.scroll.scrollerHeight 看是否大于设定的高度 但是有时候网页加载的时候 比如图片 没加载出来 这个高度他已经算好了 导致
            //这个高度不是真实的高度 无法滚动 解决这个bug  1 事件总线
            //2 监听滚动位置  上面需要设置probetype= 3才会滚动 这里为了性能 按需加载
            this.scroll.on('scroll',(position) => {
                this.$emit('scroll',position);
            })
        },

        methods:{
            //其他地方都可以用 跳转到指定位置
            scrollTo(x,y,time=500){
                this.scroll.scrollTo(x,y,time);
            }
        }
    }
</script>

<style scoped>

</style>