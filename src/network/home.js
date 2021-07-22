
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