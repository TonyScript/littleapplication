"use strict";
var app = getApp();
Page({
  data: { title: "", loading: !0, movie: {} },
  onLoad: function (t) {
    var i = this;
    app.douban.findOne(t.id).then(function (t) {
      i.setData({ title: t.title, movie: t, loading: !1 }),
        wx.setNavigationBarTitle({ title: t.title + " « 电影 « 豆瓣" })
    })
      .catch(function (t) {
        i.setData({
          title: "获取数据异常",
          movie: {},
          loading: !1
        }),
          console.error(t)
      })
  },
  onReady: function () { wx.setNavigationBarTitle({ title: this.data.title + " « 电影 « 豆瓣" }) },     onShow: function () { },
  onHide: function () { },
  onUnload: function () { },
  onPullDownRefresh: function () { },
  onShareAppMessage: function () {
    return {
      title: "自定义分享标题",
      desc: "自定义分享描述",
      path: "/pages/item?id=" + this.data.id
    }
  }
});