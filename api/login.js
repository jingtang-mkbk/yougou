import fly from '../utils/request'

// 获取验证码
export const getCodes = (data) => {
  return fly.get(`/sms/codes/${data}`)
}
// 获取token
export const login = data => {
  return fly.post('/authorizations', data)
}
// 获取个人信息
export const user = () => {
  return fly.get('/user')
}