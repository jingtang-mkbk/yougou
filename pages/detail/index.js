// pages/detail/index.js
import { getDetailArticle } from '../../api/home'
Page({
  data: {
    detailArticle: {},
    isShow: false
  },
  showPopup() {
    this.setData({ isShow: true });
  },
  onClose() {
    this.setData({ isShow: false });
  },
  // 获取详情articles
  async getDetailArticles(id) {
    wx.showLoading({ title: '加载中' })
    const {data:{data}} = await getDetailArticle(id)
      this.setData({ detailArticle: data })
      wx.hideLoading()
  },
  comment(){

  },
  // 返回上一页
  goBack(){
    wx.navigateBack({ delta: 1 })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.getDetailArticles(options.id)
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