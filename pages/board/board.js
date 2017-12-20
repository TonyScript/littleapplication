"use strict";
var app = getApp();
Page(
  {
    data: {
      boards: [{ key: "in_theaters" },
      { key: "coming_soon" },
      { key: "top250" }], loading: !0
    },
    onLoad: function () {
      var n = this,
        o = this.data.boards.map(function (n) {
          return app.douban.find(n.key, 1, 10)
            .then(function (o) {
              return n.title = o.title,
                n.movies = o.subjects, n
            })
        });
      Promise.all(o).then(function (o) {
        return n.setData({ boards: o, loading: !1 })
      })
    },
    onReady: function () { },
    onShow: function () { },
    onHide: function () { },
    onUnload: function () { },
    onPullDownRefresh: function () { }
  }
);