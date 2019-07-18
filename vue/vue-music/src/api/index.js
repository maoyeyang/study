import Vue from 'vue'
import axios from 'axios'

const vue = new Vue()

axios.defaults.timeout = 5000
axios.defaults.baseURL = ''

axios.interceptors.response.use((res) => {
  if (res.data.code !== 200) {
    window.alert('网络异常')
    return Promise.reject(res)
  }
  return res
}, (error) => {
  window.alert('网络异常')
  return Promise.reject(error)
})



export function fetchGet(url, param) {
  return new Promise((resolve, reject) => {
    axios.get(url, {
        params: param
      })
      .then(res => {
        resolve(res.data)
      })
      .catch(err => {
        reject(err)
      })
  })
}

export default {
  Login(params) {
    return fetchGet('/login', params)
  }
}
