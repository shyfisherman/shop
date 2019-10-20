<template>
    <topBar class="home-top">
        <div slot="mid">购物车</div>
    </topBar>
</template>

<script>
    import topBar from 'components/common/topbar/topBar';
    export default {
        name: "cate",
        components:{
            topBar
        }
    }
</script>

<style scoped>

.home-top{
    background-color: pink;
    color: white;
}
</style>