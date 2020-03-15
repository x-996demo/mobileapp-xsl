<template>
  <div class="container">
      <!-- 可以采用vant的导航组件 来实现  fixed固定在顶部-->
      <van-nav-bar @click-right="$router.push('/search')" fixed v-if="$route.path!=='/user'" title="黑马头条" right-text="搜索"></van-nav-bar>
      <!-- 二级路由容器  -->
    <div class="my-wrapper" :class="{ noTop: $route.path=='/user' }">
      <router-view></router-view>
    </div>
    <!-- 标签栏  开启路由模式 route :route="true"(布尔)  route="true"(字符串)-->
    <van-tabbar route>
      <!-- router-link  to  -->
      <van-tabbar-item to="/" icon="home-o">首页</van-tabbar-item>
      <van-tabbar-item to="/question" icon="chat-o">问答</van-tabbar-item>
      <van-tabbar-item to="/video" icon="video-o">视频</van-tabbar-item>
      <van-tabbar-item to="/user" icon="user-o">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped lang='less'>
.container{
  width: 100%;
  height: 100%;
  position: relative;
  //控制二级路由容器的高宽
  .my-wrapper{
    width: 100%;
    height: 100%;
    overflow: hidden;
    padding-top: 46px;
    padding-bottom: 50px;
    box-sizing: border-box;
    &.noTop{
      padding-top: 0;
    }
  }
}
</style>
