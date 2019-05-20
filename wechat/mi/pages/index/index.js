//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    indicatorDots: true,
    autoplay: true,
    interval: 3000,
    duration: 1000,
    isTap: false,
    index_slides: [],
    nav_data: [],
    index_activity: [],
    index_block: [],
    isLoading: false
  },
  onLoad: function () {
    const index_slides = app.globalData.index_slides,
      nav_data = app.globalData.nav_data,
      index_activity = app.globalData.index_activity,
      index_block = app.globalData.index_block,
      sectionList = index_block.map((section) => {
        return section.section;
      })
    this.setData({
      index_slides,
      nav_data,
      index_activity,
      index_block,
    });
  },
  onShow: function () {
    this.setData({
      isTap: false
    })
  },
  toSearch(e) {
    this.setData({
      isTap: true
    });
    console.log('搜索');
  },
  showDetail(e) {
    const id = e.currentTarget.dataset.pid;
    console.log(id);
    // wx.navigateTo({
    //   url: `/pages/goods/show?id=${id}`
    // })
  },
  showcDetail(e) {
    const id = e.currentTarget.dataset.cid;
    console.log(id);
    // wx.navigateTo({
    //   url: `/pages/goods/show?id=${id}`
    // })
  }
})
