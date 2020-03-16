/**
 * request.js 请求管理工具
 * creat by xsl 2020/03/16
 */
import axios from 'axios'
import JSONBig from 'json-bigint' // 引入大数字的包
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
export default instance
