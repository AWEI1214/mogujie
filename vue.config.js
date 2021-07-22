/*
 * @Author: your name
 * @Date: 2021-07-13 09:44:50
 * @LastEditTime: 2021-07-22 20:38:34
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue\supermall\vue.config.js
 */
const path = require('path');        //引入path模块
function resolve(dir) {
  return path.join(__dirname, dir)  //path.join(__dirname)设置绝对路径
}
module.exports = {
  chainWebpack: (config) => {
    config.resolve.alias
      //set第一个参数：设置的别名，第二个参数：设置的路径
      .set('@', resolve('./src'))
      .set('assets', resolve('./src/assets'))
      .set('components', resolve('./src/components'))
      .set('views', resolve('src/views'))
      .set('network', resolve('src/network'))
      .set('img', resolve('./src/assets/img'))


  },

  publicPath: './'



}
