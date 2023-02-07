// pages/my/index.js
import { user } from '../../api/login'
import { removeToken, getToken } from '../../utils/util'

Page({

  /**
   * 页面的初始数据
   */
  data: {
    userData: {},
    isLogin: false
  },
  async getUser(){
    const {data:{data}} = await user()
    if(getToken()){
      this.setData({ userData: data, isLogin: true})
    }
  },
  handleLogout(){
    wx.showModal({
      title: 'jhhhhh',
      content: '这是一个模态弹窗',
      success: (res)=> {
        if (res.confirm) {
          removeToken()
          this.setData({ isLogin: false})
        } else if (res.cancel) {
          console.log('用户点击取消')
        }
      }
    })
    // removeToken()
    // this.setData({ isLogin: false})
  },
  editUserData(){
    wx.navigateTo({
      url: '/pages/userData/index'
    })
  },
  toLogin(){
    wx.navigateTo({
      url: '/pages/login/index',
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.getUser()
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