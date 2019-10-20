<template>
  <div id="app">
  <TabBar>
    <TabBarItem path="/home">
      <img slot="tb-icon-active" src = '~/assets/img/tabbar/a_index.png'>
      <img slot="tb-icon" src = '~/assets/img/tabbar/index.png'>
      <div slot="tb-text">首页</div>
    </TabBarItem>
    <TabBarItem  path="/cate">
      <img slot="tb-icon-active" src = '~/assets/img/tabbar/a_cate.png'>
      <img slot="tb-icon" src = '~/assets/img/tabbar/cate.png'>
      <div slot="tb-text">分类</div>
    </TabBarItem>
    <TabBarItem>
      <img slot="tb-icon-active" src = '~/assets/img/tabbar/a_cart.png'>
      <img slot="tb-icon" src = './assets/img/tabbar/cart.png'>
      <div slot="tb-text">购物车</div>
    </TabBarItem>
    <TabBarItem>
      <img slot="tb-icon-active" src = '~/assets/img/tabbar/a_my.png'>
      <img slot="tb-icon" src = '~/assets/img/tabbar/my.png'>
      <div slot="tb-text">我的</div>
    </TabBarItem>
  </TabBar>
    <router-view></router-view>
  </div>
</template>

<script>
import TabBar from "components/common/tabbar/TabBar";
import TabBarItem from "components/common/tabbar/TabBarItem";

export default {

  name: 'app',
  components: {
    TabBar,
    TabBarItem
  }
}
</script>

<style>
@import "assets/css/base.css";
</style>
