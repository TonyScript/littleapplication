"use strict";
var wechat = require("./utils/wechat.js"),
    douban = require("./utils/douban.js"),
    baidu = require("./utils/baidu.js");
App({
    data: {
        name: "Douban Movie",
        version: "0.1.0",
        currentCity: "上海"
    },
    wechat: wechat,
    douban: douban,
    baidu: baidu,
    onLaunch: function () {
        var t = this;
        wechat.getLocation()
            .then(function (t) {
                var a = t.latitude,
                    e = t.longitude;
                return baidu.getCityName(a, e)
            })
            .then(function (a) {
                t.data.currentCity = a.replace("市", ""),
                    console.log("currentCity : " + t.data.currentCity)
            })
            .catch(function (a) {
                t.data.currentCity = "上海",
                    console.error(a)
            })
    }
});