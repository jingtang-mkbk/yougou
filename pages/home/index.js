// pages/home/index.js
import { getChannels, getArticle, getDetailArticle } from '../../api/home'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    channels: [],
    active: 0,
    refresher: false,
    results: [],
    isDropdown: false,
    isShow: false,
    id: 0,
    myChannels: [
      {id: 1, txt: '推荐'},
      {id: 2, txt: 'html'},
      {id: 3, txt: '开发者资讯'},
      {id: 4, txt: 'c++'},
      {id: 5, txt: 'css'},
      {id: 6, txt: '数据库'},
      {id: 7, txt: '区块链'},
      {id: 8, txt: 'go'},
      {id: 9, txt: '产品'},
      {id: 10, txt: '后端'},
      {id: 11, txt: 'linux'}
    ],
    recommendChannels: [
      {id: 1, txt: '人工智能'},
      {id: 2, txt: 'php'},
      {id: 3, txt: 'javascript'},
      {id: 4, txt: '架构'},
      {id: 5, txt: '前端'},
      {id: 6, txt: 'python'},
      {id: 7, txt: 'java'},
      {id: 8, txt: '算法'},
      {id: 9, txt: '面试'},
      {id: 10, txt: '科技动态'},
      {id: 11, txt: '设计'},
      {id: 12, txt: '数码产品'},
      {id: 13, txt: '软件测试'},
    ]
  },
  showPopup() {
    this.setData({ show: true })
    wx.hideTabBar()
  },
  onClose() {
    this.setData({ show: false })
    wx.showTabBar()
  },
  clickSearch(){
    wx.navigateTo({
      url: '/pages/search/index'
    })
  },
  // 下拉
  dropdown(){
    this.getArticles(this.data.id)
  },
  // channels
  async getChannels(){
    const {data:{data:{channels}}} = await getChannels()
    this.setData({ channels })
    this.selectComponent('#tabs').resize()
  },
  // 获取articles
  async getArticles(id) {
    wx.showLoading({ title: '加载中' })
    const date = new Date().getTime()
    const {data:{data:{results}}} = await getArticle({ 
      channel_id: id,
      with_top: 1,
      timestamp: date
     })
     this.setData({ results, isDropdown: false })
     wx.hideLoading()
  },
  // 详情页数据
  articlesDetail({currentTarget:{dataset:{id}}}){
    wx.navigateTo({ url: '/pages/detail/index?id=' + id })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.getChannels()
    this.getArticles(0)
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