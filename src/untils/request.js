/**
 * request.js 请求管理工具
 * creat by xsl 2020/03/16
 */
import axios from 'axios'
// axios.defaults 是对原有默认进行修改
// axios.creat() 相当于 new了一个新的axios实例
const instance = axios.create({
  // 构造参数传入一些配置 和defaults一样
}) // 创建一个axios的新实例
export default instance
