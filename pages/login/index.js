// pages/login/index.js
import { getCodes, login } from '../../api/login'
import { createStoreBindings } from 'mobx-miniprogram-bindings'
import store from '../../store/index'

Page({

  /**
   * 页面的初始数据
   */
  data: {
    phone: '',
    verifyCode: '',
    errPhone: '',
    errVerifyCode: '',
    flag: false,  // 手机验证成功true
    flag2: false, // 验证码校验成功true
    countdown: true, // 点击获取倒计时为false
    count: 59
  },
  // 获取验证码
  async getCode(){
    if(this.data.flag){
      this.setData({
        "countdown": false
      })
      await getCodes(this.data.phone)

      const timer = setInterval(()=>{
        if (this.data.count >= 1){
          console.log(this.data.count);
          this.setData({
            "count": this.data.count - 1
          })
        }
        else {
          this.setData({
            "count": 0,
            "countdown": true
          })
        }
      } ,1000)
      this.setData({count: 59})
      return ()=> clearInterval(timer)
    } else {
      this.setData({
        "errPhone": '手机格式错误',
        "errVerifyCode": '验证码格式错误'
      })
    }
  },
  // 登录
  async onLogin(){
    if( this.data.flag & this.data.flag2 ) {
      const {data:{data:{token}}} = await login({mobile: this.data.phone, code: this.data.verifyCode})
      wx.setStorage({
        key: "toutiao_token",
        data: token
      })
      this.setToken(token)
      wx.showToast({
        title: '登录成功',
        icon: 'success',
        duration: 1000
      })
      setTimeout(()=>{
        wx.switchTab({
          url: '/pages/my/index'
        })
      }, 500)
    }
  },
  // 手机号校验
  checkPhone(event) {
    const reg = /^(13[0-9]|14[01456879]|15[0-35-9]|16[2567]|17[0-8]|18[0-9]|19[0-35-9])\d{8}$/
    const isTtrue = reg.test(event.detail)
    this.setData({
      "phone": event.detail
    })
    if(!isTtrue){
      this.setData({
        "errPhone": '手机格式错误',
        "flag": false
      })
    } else{
      this.setData({
        "errPhone": '',
        "flag": true
      })
    }
  },
  // 验证码校验
  checkVerifyCode(e){
    this.setData({
      "verifyCode": e.detail
    })
    const reg = /\d{6}$/
    const isTtrue = reg.test(e.detail)
    if(!isTtrue){
      this.setData({
        "errVerifyCode": '验证码格式错误',
        "flag2": false
      })
    } else{
      this.setData({
        "errVerifyCode": '',
        "flag2": true
      })
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    createStoreBindings( this ,{
      store,
      fields: ['token'],
      actions: ['setToken']
    } )
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})