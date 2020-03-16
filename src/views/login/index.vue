<template>
   <div class='container'>
    <!-- 搜索组件一级路由   返回上一个页面-->
    <!-- click-left点击左侧事件 -->
    <!-- $router.go(-1) 和$router.back()-->
    <van-nav-bar left-arrow title='登录' @click-left="$router.back()"></van-nav-bar>
     <!-- 外层需要用cell-group组件来包裹提供 边框 -->
    <van-cell-group>
        <!-- 登录手机号 -->
          <van-field label="手机号"  placeholder="请输入手机号"></van-field>
        <!-- 验证码 -->
          <van-field label="验证码"  placeholder="请输入验证码">
            <!-- 插槽内容 -->
              <van-button slot="button" size="small" type="primary">发送验证码</van-button>
          </van-field>
    </van-cell-group>
    <!-- 登录按钮 -->
    <div class='login-box'>
      <van-button type="info" round size="small" block>登录</van-button>
    <!-- 导航 -->
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.login-box {
  padding: 20px
}
</style>
