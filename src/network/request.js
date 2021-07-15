/*
 * @Author: your name
 * @Date: 2021-07-13 14:59:52
 * @LastEditTime: 2021-07-14 13:32:35
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue\axioss\src\network\request.js
 */
import axios from 'axios'

export function request(config) {
  const instance = axios.create({
    baseURL: 'http://123.207.32.32:8000',
    timeout: 5000
  })

  instance.interceptors.request.use(config => {
    return config
  }, err => {

  })
  instance.interceptors.response.use(res => {
    return res.data
  }, err => {

  });


  return instance(config)

}



export function requestt(config) {
  const instance = axios.create({
    baseURL: 'http://152.136.185.210:7878/api/m5',
    timeout: 5000
  })

  instance.interceptors.request.use(config => {
    return config
  }, err => {

  })
  instance.interceptors.response.use(res => {
    return res.data
  }, err => {

  });


  return instance(config)

}


