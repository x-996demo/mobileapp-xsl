<template>
   <div class='container'>
    <!-- 搜索组件一级路由   返回上一个页面-->
    <!-- click-left点击左侧事件 -->
    <!-- $router.go(-1) 和$router.back()-->
    <van-nav-bar left-arrow title='登录' @click-left="$router.back()"></van-nav-bar>
     <!-- 外层需要用cell-group组件来包裹提供 边框 -->
    <van-cell-group>
        <!-- 登录手机号 -->
        <!-- v-model 有一个修饰符 trim(可以帮助我们自动去除空格) -->
          <van-field :error-message="errorMessage.mobile" v-model.trim="loginFrom.mobile" label="手机号"  placeholder="请输入手机号"></van-field>
        <!-- 验证码 -->
          <van-field :error-message="errorMessage.code" v-model.trim="loginFrom.code" label="验证码"  placeholder="请输入验证码">
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
  data () {
    return {
      loginFrom: {
        mobile: '', // 手机号
        code: '' // 验证码
      },
      // 此处显示设置的信息
      errorMessage: {
        mobile: '手机号不正确', // 手机的错误信息
        code: '验证码不正确'// 验证码的错误信息

      }
    }
  },
  checkMobile () {
    //  获取手机号 判断 是否为空  满足手机号的格式
    if (!this.loginForm.mobile) {
      // 表示为空
      this.errorMessage.mobile = '手机号不能为空'
      // 此时表示没有不要再往下进行了
      return false // 返回一个false  false表示 此轮校验没通过 如果通过了 返回true
    }
    // 第二轮 手机号格式
    if (!/^1[3-9]\d{9}$/.test(this.loginForm.mobile)) {
      // 如果手机号不满足正则
      this.errorMessage.mobile = '手机号格式不正确'
      return false
    }
    // 如果到了这个位置 说明校验通过
    this.errorMessage.mobile = '' // 因为通过了 就没有消息了
    return true
  }
}
</script>

<style>
.login-box {
  padding: 20px
}
</style>
