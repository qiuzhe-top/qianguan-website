(function(n){function e(e){for(var r,u,o=e[0],i=e[1],d=e[2],l=0,f=[];l<o.length;l++)u=o[l],Object.prototype.hasOwnProperty.call(a,u)&&a[u]&&f.push(a[u][0]),a[u]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(n[r]=i[r]);h&&h(e);while(f.length)f.shift()();return c.push.apply(c,d||[]),t()}function t(){for(var n,e=0;e<c.length;e++){for(var t=c[e],r=!0,u=1;u<t.length;u++){var o=t[u];0!==a[o]&&(r=!1)}r&&(c.splice(e--,1),n=i(i.s=t[0]))}return n}var r={},u={app:0},a={app:0},c=[];function o(n){return i.p+"js/"+({}[n]||n)+"."+{"chunk-04a606e1":"86682d13","chunk-0974876a":"8d57656d","chunk-0a570d10":"cebd2bc2","chunk-361c4688":"686069b1","chunk-6503bcce":"55204cf5","chunk-baaadc08":"82572acc"}[n]+".js"}function i(e){if(r[e])return r[e].exports;var t=r[e]={i:e,l:!1,exports:{}};return n[e].call(t.exports,t,t.exports,i),t.l=!0,t.exports}i.e=function(n){var e=[],t={"chunk-04a606e1":1,"chunk-0974876a":1,"chunk-0a570d10":1,"chunk-361c4688":1,"chunk-6503bcce":1,"chunk-baaadc08":1};u[n]?e.push(u[n]):0!==u[n]&&t[n]&&e.push(u[n]=new Promise((function(e,t){for(var r="css/"+({}[n]||n)+"."+{"chunk-04a606e1":"12e25a59","chunk-0974876a":"7d102fc9","chunk-0a570d10":"1887fab8","chunk-361c4688":"53298598","chunk-6503bcce":"4b396ebd","chunk-baaadc08":"4706e6a4"}[n]+".css",a=i.p+r,c=document.getElementsByTagName("link"),o=0;o<c.length;o++){var d=c[o],l=d.getAttribute("data-href")||d.getAttribute("href");if("stylesheet"===d.rel&&(l===r||l===a))return e()}var f=document.getElementsByTagName("style");for(o=0;o<f.length;o++){d=f[o],l=d.getAttribute("data-href");if(l===r||l===a)return e()}var h=document.createElement("link");h.rel="stylesheet",h.type="text/css",h.onload=e,h.onerror=function(e){var r=e&&e.target&&e.target.src||a,c=new Error("Loading CSS chunk "+n+" failed.\n("+r+")");c.code="CSS_CHUNK_LOAD_FAILED",c.request=r,delete u[n],h.parentNode.removeChild(h),t(c)},h.href=a;var s=document.getElementsByTagName("head")[0];s.appendChild(h)})).then((function(){u[n]=0})));var r=a[n];if(0!==r)if(r)e.push(r[2]);else{var c=new Promise((function(e,t){r=a[n]=[e,t]}));e.push(r[2]=c);var d,l=document.createElement("script");l.charset="utf-8",l.timeout=120,i.nc&&l.setAttribute("nonce",i.nc),l.src=o(n);var f=new Error;d=function(e){l.onerror=l.onload=null,clearTimeout(h);var t=a[n];if(0!==t){if(t){var r=e&&("load"===e.type?"missing":e.type),u=e&&e.target&&e.target.src;f.message="Loading chunk "+n+" failed.\n("+r+": "+u+")",f.name="ChunkLoadError",f.type=r,f.request=u,t[1](f)}a[n]=void 0}};var h=setTimeout((function(){d({type:"timeout",target:l})}),12e4);l.onerror=l.onload=d,document.head.appendChild(l)}return Promise.all(e)},i.m=n,i.c=r,i.d=function(n,e,t){i.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:t})},i.r=function(n){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},i.t=function(n,e){if(1&e&&(n=i(n)),8&e)return n;if(4&e&&"object"===typeof n&&n&&n.__esModule)return n;var t=Object.create(null);if(i.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var r in n)i.d(t,r,function(e){return n[e]}.bind(null,r));return t},i.n=function(n){var e=n&&n.__esModule?function(){return n["default"]}:function(){return n};return i.d(e,"a",e),e},i.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},i.p="/",i.oe=function(n){throw console.error(n),n};var d=window["webpackJsonp"]=window["webpackJsonp"]||[],l=d.push.bind(d);d.push=e,d=d.slice();for(var f=0;f<d.length;f++)e(d[f]);var h=l;c.push([0,"chunk-vendors"]),t()})({0:function(n,e,t){n.exports=t("56d7")},"23be":function(n,e,t){"use strict";t.r(e);var r=t("db8f"),u=t.n(r);for(var a in r)["default"].indexOf(a)<0&&function(n){t.d(e,n,(function(){return r[n]}))}(a);e["default"]=u.a},"3dfd":function(n,e,t){"use strict";t.r(e);var r=t("6566"),u=t("23be");for(var a in u)["default"].indexOf(a)<0&&function(n){t.d(e,n,(function(){return u[n]}))}(a);t("7c55");var c=t("cba8"),o=Object(c["a"])(u["default"],r["a"],r["b"],!1,null,null,null);e["default"]=o.exports},"41cb":function(n,e,t){"use strict";t.r(e);var r=t("430a"),u=t("ac56");r["default"].use(u["a"]),e["default"]=new u["a"]({routes:[{path:"/",name:"Index",components:{default:function(){return t.e("chunk-0a570d10").then(t.bind(null,"d504"))},Header:function(){return t.e("chunk-baaadc08").then(t.bind(null,"0418"))},Bottom:function(){return t.e("chunk-361c4688").then(t.bind(null,"bf34"))}}},{path:"/ProductCenter",name:"ProductCenter",components:{default:function(){return t.e("chunk-0a570d10").then(t.bind(null,"65c5"))},Header:function(){return t.e("chunk-baaadc08").then(t.bind(null,"0418"))},Bottom:function(){return t.e("chunk-361c4688").then(t.bind(null,"bf34"))}}},{path:"/ProductIntroduction",name:"ProductIntroduction",components:{default:function(){return t.e("chunk-0a570d10").then(t.bind(null,"ffa6"))},Header:function(){return t.e("chunk-baaadc08").then(t.bind(null,"0418"))},Bottom:function(){return t.e("chunk-361c4688").then(t.bind(null,"bf34"))}}},{path:"/ApplicationCase",name:"ApplicationCase",components:{default:function(){return t.e("chunk-0a570d10").then(t.bind(null,"5902"))},Header:function(){return t.e("chunk-baaadc08").then(t.bind(null,"0418"))},Bottom:function(){return t.e("chunk-361c4688").then(t.bind(null,"bf34"))}}},{path:"/About",name:"About",components:{default:function(){return t.e("chunk-0974876a").then(t.bind(null,"f820"))},Header:function(){return t.e("chunk-baaadc08").then(t.bind(null,"0418"))},Bottom:function(){return t.e("chunk-361c4688").then(t.bind(null,"bf34"))}}},{path:"/NewsDetails",name:"NewsDetails",components:{default:function(){return t.e("chunk-0a570d10").then(t.bind(null,"3b59"))},Header:function(){return t.e("chunk-baaadc08").then(t.bind(null,"0418"))},Bottom:function(){return t.e("chunk-361c4688").then(t.bind(null,"bf34"))}}},{path:"/software",name:"Software",components:{default:function(){return t.e("chunk-6503bcce").then(t.bind(null,"e86f"))},Header:function(){return t.e("chunk-baaadc08").then(t.bind(null,"0418"))},Bottom:function(){return t.e("chunk-361c4688").then(t.bind(null,"bf34"))}}},{path:"/describe",name:"Describe",components:{default:function(){return t.e("chunk-04a606e1").then(t.bind(null,"956f"))},Header:function(){return t.e("chunk-baaadc08").then(t.bind(null,"0418"))},Bottom:function(){return t.e("chunk-361c4688").then(t.bind(null,"bf34"))}}}]})},"56d7":function(n,e,t){"use strict";t.r(e);t("25ba"),t("5f1c"),t("6ba0"),t("b47f");var r=t("430a"),u=t("3dfd"),a=t("41cb"),c=t("c0d6"),o=t("5422"),i=t.n(o);t("e9b7"),t("8235");r["default"].config.productionTip=!1,r["default"].prototype.$b64=t("e18e").Base64,r["default"].use(i.a),new r["default"]({router:a["default"],store:c["default"],render:function(n){return n(u["default"])}}).$mount("#app")},6566:function(n,e,t){"use strict";t.d(e,"a",(function(){return r})),t.d(e,"b",(function(){return u}));var r=function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",{attrs:{id:"app"}},[t("router-view",{staticStyle:{"background-color":"white"},attrs:{name:"Header"}}),t("div",{staticClass:"public-width width-auto"},[t("router-view")],1),t("router-view",{attrs:{name:"Bottom"}})],1)},u=[]},"71a3":function(n,e,t){},"7c55":function(n,e,t){"use strict";t("71a3")},8235:function(n,e,t){},c0d6:function(n,e,t){"use strict";t.r(e);var r=t("430a"),u=t("7736");r["default"].use(u["a"]),e["default"]=new u["a"].Store({state:{},mutations:{},actions:{}})},db8f:function(n,e){}});
//# sourceMappingURL=app.7b1f132e.js.map