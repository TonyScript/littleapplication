"use strict";
var app = getApp();
Page({
  data: {
    title: "",
    subtitle: "加载中...",
    type: "in_theaters",
    loading: !0,
    hasMore: !0, page: 1, size: 20, movies: []
  },
  loadMore: function () {
    var t = this;
    if (this.data.hasMore)
      return this.setData({
        subtitle: "加载中...",
        loading: !0
      }),
        app.douban.find(this.data.type, this.data.page++, this.data.size)
          .then(function (a) {
            a.subjects.length ? t.setData({
              subtitle: a.title,
              movies: t.data.movies.concat(a.subjects), loading: !1
            }) : t.setData({
              subtitle: a.title, hasMore: !1, loading: !1
            })
          })
          .catch(function (a) {
            t.setData({
              subtitle: "获取数据异常", loading: !1
            }),
              console.error(a)
          })
  },
  onLoad: function (t) {
    this.data.title = t.title || this.data.title, this.data.type = t.type || this.data.type, this.loadMore()
  },
  onReady: function () {
    wx.setNavigationBarTitle({
      title: this.data.title + " « 电影 « 豆瓣"
    })
  },
  onPullDownRefresh: function () {
    this.setData({
      movies: [],
      page: 1,
      hasMore: !0
    }),
      this.loadMore()
        .then(function () {
          return app.wechat.original.stopPullDownRefresh()
        })
  },
  onReachBottom: function () { this.loadMore() }
});