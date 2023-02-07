import fly from '../utils/request'

// userdata
export const getUserData = () => {
  return fly.get('/user/profile')
}
// 编辑用户个人资料（包含实名认证）
export const editProfile = data => {
  return request({
    url: 'user/profile',
    data,
    method: 'PATCH'
  })
}