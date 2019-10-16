<template>
    <div class = 'tb-bar-item' @click="isClick">
        <!--插槽全部加多一层 因为外面会替换掉 如果你插槽里面写变量或者属性都会被外面替换了-->
        <div v-if = "isActive">
            <slot name = 'tb-icon-active'></slot>
        </div>

        <div v-else>
            <slot name = "tb-icon"></slot>
        </div>

        <div :style="activeStyle">
            <slot name = "tb-text"></slot>
        </div>
    </div>
</template>

<script>
    export default {
        name: "TabBarItem",
        props:{
            path:String,
            activeColor: {
                type:String,
                default:'red'
            }
        },
        data () {
            return {

            }
        },
        computed:{
            isActive () {
                //this.route.path表示活跃的路由
                //!= -1 表示找到  等于-1表示没找到
                return this.$route.path.indexOf(this.path)!==-1;
            },

            //复杂的样式都可以通过这样 对于要传样式进来
            activeStyle () {
                return this.isActive ? {color:this.activeColor} : {};
            }
        },
        methods:{
          isClick () {
              this.$router.replace(this.path);
          }
        }
    }
</script>

<style scoped>
    .tb-bar-item {
        flex: 1;
        text-align: center;
        height: 49px;
        font-size: 14px;
    }
    .tb-bar-item img {
        width: 24px;
        height: 24px;
        vertical-align: middle;
        margin-bottom: 2px;
        margin-top: 2px;
    }

</style>