import http from 'wechat-http'
import { getToken } from '.././utils/util'


// 接口基础地址
http.baseURL = 'http://toutiao.itheima.net/v1_0'

// 请求拦截器
http.intercept.request = (options) => {
  const token = getToken()
  // 指定默认的头信息
  const defaultHeader = {}
  // 权限认证
  if(token){
    defaultHeader.Authorization = 'Bearer ' + token
  }
  // 合并头信息
  options.header = Object.assign({}, defaultHeader, options.header)
  // 拦截器处理后的请求参数
  return options
}

// 响应拦截器
http.intercept.response = (data) => {
  // console.log(statusCode) // http 响应状态码
  // console.log(config) // 发起请求时的参数
  // 拦截器处理后的响应结果
  return data
}

// 挂载到 wx 全局命名空间
wx.http = http

// 也可作为模块导出
export default http