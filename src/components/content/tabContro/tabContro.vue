<template>
    <div class="tab-contro">
        <div class="tab-contro-item" v-for="(item,index) in titles"
        :class="{active:index==currentIndex}"
             @click="itemClick(index)"
        >
            <span>{{item}}</span>
        </div>
    </div>
</template>

<script>
    export default {
        name: "tabContro",
        data(){
            return {
                currentIndex:0
            }
        },
        methods:{
            //点击切换
            itemClick(index){
                this.currentIndex=index;
                //组件传递
                this.$emit('tabClick',index);
            }
        },
        props:{
            titles:{
                type:Array,
                default(){
                    return []
                }
            }
        }
    }
</script>

<style scoped>
    .tab-contro{
        display: flex;
        height: 44px;
        line-height: 44px;
    }
    .tab-contro-item{
        flex: 1;
        text-align: center;
    }
    .tab-contro-item span {
        padding:5px;
    }
    .active{
        color: deeppink;
    }

    .active span {
        border-bottom: 1px solid deeppink;
    }
    .tab-contro{
        position: sticky;
        top: 44px;
        background-color: white;
        z-index: 999;

    }



</style>
