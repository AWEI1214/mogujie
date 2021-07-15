/*
 * @Author: your name
 * @Date: 2021-07-13 17:37:16
 * @LastEditTime: 2021-07-14 13:34:53
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue\supermall\src\network\home.js
 */
import { request } from "./request";
import { requestt } from "./request";


export function getHomeMultidata() {
  return request({
    url: '/home/multidata'
  })
}

export function getHomeGoods(type, page) {
  return requestt({
    url: '/home/data',
    params: {
      type,
      page,
    }
  })
}