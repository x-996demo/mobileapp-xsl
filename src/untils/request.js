/**
 * request.js 请求管理工具
 * creat by xsl 2020/03/16
 */
import axios from 'axios'
import JSONBig from 'json-bigint' // 引入大数字的包
import store from '@/store' // 引入vuex中的实例对象 相当于组件中的this.$store
// axios.defaults 是对原有默认进行修改
// axios.creat() 相当于 new了一个新的axios实例
const instance = axios.create({
  // 构造参数传入一些配置 和defaults一样
  //  构造参数 传入一些配置 和defaults一样
  baseURL: 'http://ttapi.research.itcast.cn/app/v1_0', // 基础的请求地址
  //   此函数是后台响应回来 但是还没进入到 axios的响应拦截器时执行 数组里可以写多个的处理函数
  transformResponse: [function (data) {
    //   data就是后端响应回来的字符串
    // JSON.parse()
    return data ? JSONBig.parse(data) : {}
  }]

}) // 创建一个axios的新实例
// token的注入  应该在请求之前啊 也就是请求拦截器
// instance是一个新的axios实例
instance.interceptors.request.use(function (config) {
  // 成功的时候 如何处理
  // 读取配置信息 给配置信息中注入token
  if (store.state.user.token) {
    config.headers.Authorization = `Bearer ${store.state.user.token}` // 将token 统一注入到headers中
  }
  // 不用 if else的用法
  // config.headers.Authorization && (config.headers.Authorization = `Bearer ${store.state.user.token}`) // 将token 统一注入到headers中
  return config // 返回配置
}, function (error) {
  // 直接返回 promise的错误
  return Promise.reject(error) // 返回错误 这样的话会直接进入到axios的catch中
})
export default instance
