/*
 * @Author: your name
 * @Date: 2021-07-13 17:37:16
 * @LastEditTime: 2021-07-13 18:01:49
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue\supermall\src\network\home.js
 */
import { request } from "./request";

export function getHomeMultidata() {
  return request({
    url: '/home/multidata'
  })
}
