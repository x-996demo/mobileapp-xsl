/**
 * 需要导出一个对象
 */
module.exports = {
  // 覆盖蓝色主题
  css: {
    // css相关
    loaderOptions: {
      // 所有的关于样式loader相关的选项
      less: {
        // 这里的选项些什么
        // modifyVars 是less-loader的一个选项 通过这个选项改变 变量的值
        modifyVars: {
          // 直接覆盖变量
          blue: '#3296fa'
        }
      }
    }
  }
}
