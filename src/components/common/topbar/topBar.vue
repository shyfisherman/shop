<template>
    <div class="top-bar">
        <div class = 'left'><slot name ='left'></slot></div>
        <div class = 'middle'><slot name ='mid'></slot></div>
        <div class = 'right'><slot name ='right'></slot></div>
    </div>
</template>

<script>
    export default {
        name: "topBar"
    }
</script>

<style scoped>
    .top-bar {
        display: flex;
        height: 44px;
        line-height: 44px;
        text-align: center;
        box-shadow:0 1px 1px rgba(100,100,100,0.06);
    }
    .left,.right {
        width:60px;

    }
    .middle{
        flex: 1;
    }

</style>
