"use strict";
function fetchApi(t, n) {
  return fetch(URI, t, n)
}

function find(t) {
  var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
    e = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 20,
    i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "",
    r = {
      start: (n - 1) * e, count: e,
      city: getApp().data.currentCity
    };
    
  return fetchApi(t, i ? Object.assign(r, { q: i }) : r)
    .then(function (t) {
      return t.data
    })
}

function findOne(t) {
  return fetchApi("subject/" + t)
    .then(function (t) {
      return t.data
    })
}

var URI = "https://api.douban.com/v2/movie",
fetch = require("./fetch");
module.exports = { find: find, findOne: findOne };