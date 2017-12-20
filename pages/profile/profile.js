"use strict";

var app = getApp();

Page({
  data: {
    title: "About",
    userInfo: {
      wechat: "WEDN-NET",
      nickName: "MoreThanCoding",
      avatarUrl: "../../images/qrcode.png"
    }
  },
  getUserInfo: function () {
    var e = this;
    app.wechat.getUserInfo()
      .then(function (t) {
        return e.setData({ userInfo: t.userInfo })
      })
  },
  onLoad: function () {
    app.wechat.login().
      then(function (e) {
        e.code ? console.log("登录成功！" + e.code) : console.error("获取用户登录态失败！" + e.errMsg)
      })
  }
});
