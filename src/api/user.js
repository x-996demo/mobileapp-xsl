/**
 * 专门处理用户相关的请求
 */
/***
 * 登录方法
 * ***/
import request from '@/untils/request'
// request 相当于axios的一个实例和axios有同样的方法和属性
export function login (data) {
  return request({
    //   配置选项
    url: '/authorizations', // 请求地址
    method: 'post',
    data // 接收传入的data
    // axios 中body参数放置在data中
  })
  // 返回一个promise对象
}
