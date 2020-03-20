/** **
 *  plugin.js专门负责提供小函数以及vue中常用的过滤器及函数
 *
 * ***/
import dayjs from 'dayjs' // 引入dayjs插件
import 'dayjs/locale/zh-cn'// 转换为中文
import relativeTime from 'dayjs/plugin/relativeTime' // 引入相对时间插件
dayjs.extend(relativeTime) // 相当于dayjs扩展时间的方法 这个方法写完之后 dayjs 就有了form方法
export default {
  // 导出一个默认对象
  install (Vue) {
    //   该方法会在Vue.use时调用
    // 执行此行代码时 Vue.prototype.$notify 应该已经挂载完成
    Vue.prototype.$gnotify = (params) => Vue.prototype.$notify({ duration: 800, ...params }) // 小伎俩
    // 给Vue的原型属性赋值一个函数 自定义一个函数名
    Vue.prototype.$sleep = sleep // 定义一个原型属性 $sleep 所有组件都有了这个属性

    // 要用到之前学过的 过滤器 全局过滤器 局部过滤器
    Vue.filter('relTime', relTime) // 注册一个全局过滤器
  }
}
// 休眠函数
// time  = 500 如果你传入了time 用你的 如果说你没传 time 用 500
function sleep (time = 500) {
  // 返回一个promise
  return new Promise(function (resolve, reject) {
    // 肯定是成功执行 但是有一个延迟
    setTimeout(() => resolve(), time)
  })
}
/**
 *
 *  此函数将日期转换为相对时间
 */
// 转化时间到相对时间
function relTime (date) {
  return dayjs().locale('zh-cn').from(date)
}
