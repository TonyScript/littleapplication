"use strict";

var app = getApp();

Page({
  data: {
    page: 1,
    size: 20,
    subtitle: "请在此输入搜索内容",
    movies: [],
    search: "",
    loading: !1,
    hasMore: !1
  },
  loadMore: function () {
    var t = this;
    if (this.data.hasMore)
      return this.setData({
        subtitle: "加载中...",
        loading: !0
      }),
        app.douban.find("search", this.data.page++, this.data.size, this.data.search)
          .then(function (a) {
            a.subjects.length ? t.setData({
              subtitle: a.title,
              movies: t.data.movies.concat(a.subjects),
              loading: !1
            }) : t.setData({
              hasMore: !1,
              loading: !1
            })
          })
          .catch(function (a) {
            t.setData({ subtitle: "获取数据异常", loading: !1 }),
              console.error(a)
          })
  },

  handleSearch: function (t) {
    t.detail.value && (this.setData({ movies: [], page: 1 }),
      this.setData({
        subtitle: "加载中...",
        hasMore: !0,
        loading: !0,
        search: t.detail.value
      }), this.loadMore())
  },
  onPullDownRefresh: function () {
    this.setData({
      movies: [],
      page: 1
    }),
      this.loadMore().then(function () {
        return app.wechat.original.stopPullDownRefresh()
      })
  },
  onReachBottom: function () { this.loadMore() }
});
