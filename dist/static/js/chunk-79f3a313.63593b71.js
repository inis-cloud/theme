(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-79f3a313"],{2803:function(t,n,a){var e=a("a2a8");e.__esModule&&(e=e.default),"string"===typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);var r=a("499e").default;r("4b6cac16",e,!0,{sourceMap:!1,shadowMode:!1})},9761:function(t,n,a){"use strict";a.r(n);var e=a("f2bf"),r=Object(e["h"])("div",{id:"astronaut"},null,-1);function o(t,n,a,o,i,c){var s=Object(e["E"])("i-link");return Object(e["x"])(),Object(e["g"])(e["a"],null,[r,(Object(e["x"])(),Object(e["e"])(e["b"],{to:"body"},[Object(e["k"])(s,{tag:"script",src:"assets/js/404/bodymovin.js"}),Object(e["k"])(s,{tag:"script",src:"assets/js/404/data.js"})]))],64)}var i=a("1157"),c=a.n(i),s=a("aac2"),u={components:{iLink:s["a"]},setup:function(){window.onload=function(){var t=document.getElementById("astronaut");bodymovin.loadAnimation({wrapper:t,animType:"svg",loop:!0,animationData:JSON.parse(animationData)});c()("#astronaut").append('<div class="flex">\n                <span class="pink mr-2">访问的页面不存在或已被删除</span>\n                <a href="/" class="text-primary">回到首页</a>\n            </div>')}}};a("e8a8");u.render=o;n["default"]=u},a2a8:function(t,n,a){var e=a("24fb");n=e(!1),n.push([t.i,"html{margin:0;padding:0;background-color:#fff}a{text-decoration:none}body,html{width:100%;height:100%;overflow:hidden}#astronaut{width:100vw;height:80vh;background-color:#fff;position:absolute;top:0;left:0;right:0;bottom:0;margin:auto}.flex{display:flex;justify-content:center;align-items:center}.pink{color:#ff83c4}.mr-2{margin-right:1em}.text-primary{color:#727cf5!important}",""]),t.exports=n},aac2:function(t,n,a){"use strict";function e(t,n,a,e,r,o){return null}var r=a("f2bf"),o={setup:function(t){var n=function(){};return n="link"==t.tag?function(){return Object(r["n"])(t.tag,{rel:"stylesheet",href:t.src})}:function(){return Object(r["n"])(t.tag,{src:t.src})},n},props:{src:{type:String,required:!0},tag:{type:String,default:"link"}}};o.render=e;n["a"]=o},e8a8:function(t,n,a){"use strict";a("2803")}}]);