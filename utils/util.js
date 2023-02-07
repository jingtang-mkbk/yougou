const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return `${[year, month, day].map(formatNumber).join('/')} ${[hour, minute, second].map(formatNumber).join(':')}`
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : `0${n}`
}

const setToken = (token) => {
  return wx.setStorage({
    key: 'toutiao_token',
    data: token
  })
}
const getToken = () => {
  return wx.getStorageSync('toutiao_token')
}
const removeToken = () => {
  wx.removeStorageSync('toutiao_token')
}

module.exports = {
  formatTime,
  setToken,
  getToken,
  removeToken
}

