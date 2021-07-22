
import axios from 'axios'

export function request(config) {
  const instance = axios.create({
    baseURL: '//123.207.32.32:8000',
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
    baseURL: '//152.136.185.210:7878/api/m5',
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


