<template>
   <div class='container'>
    <!-- 搜索组件一级路由   返回上一个页面-->
    <!-- click-left点击左侧事件 -->
    <!-- $router.go(-1) 和$router.back()-->
    <van-nav-bar left-arrow title='登录' @click-left="$router.back()"></van-nav-bar>
    <!-- 导航 -->
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>
