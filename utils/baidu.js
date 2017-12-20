"use strict";

function fetchApi(t, e) {
  return fetch(URI, t, e)
}

function getCityName() {
  return fetchApi("geocoder/v2/",
    {
      location: (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 39.90403) + "," + (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 116.407526),
      output: "json",
      ak: "B61195334f65b9e4d02ae75d24fa2c53"
    })
    .then(function (t) {
      return t.data.result.addressComponent.city
    })
}

var URI = "https://api.map.baidu.com",
  fetch = require("./fetch");
module.exports = { getCityName: getCityName };