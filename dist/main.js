(()=>{"use strict";var n,e,t,o,r,a,i,s,c,p,l,d,f,u,m={607:(n,e,t)=>{t.d(e,{Z:()=>m});var o=t(81),r=t.n(o),a=t(645),i=t.n(a),s=t(667),c=t.n(s),p=new URL(t(679),t.b),l=new URL(t(465),t.b),d=i()(r()),f=c()(p),u=c()(l);d.push([n.id,`* {\n    margin: 0;\n    padding:0;\n    border: 0px;\n}\n\nheader{ \n    display: flex;\n    flex-wrap: wrap;\n    padding-bottom: 2em;\n}\nmain {\n    padding: 1.3em;\n    padding-top: 4em;\n    padding-bottom: 4em;\n\n}\n.about {\n    display: flex;\n    align-items: center;\n    flex-direction: column;\n    padding-left: 2em;\n    padding-right:2em;\n    gap:1em;\n}\n.name{\n    position: absolute;\n    bottom:0%;\n    font-size: 5em;\n    color: white;\n    padding: .1em;\n    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);\n}\n.pic {\n    position: relative;\n}\n.profile-pic {\n    position: absolute;\n    width: 20em;\n    min-height: 30em;\n    top:50%;\n    left:50%;\n    transform: translate(-50%,-50%);\n    box-shadow: 4px 8px 8px 4px black;\n    background-image: url(${f});\n    background-size: cover;\n    \n}\n.square {\n    height: 20em;\n    background-color: #0891b2;\n    border: 0px;\n}\n.triangle {\n    border: 0px;\n    border-top: 20em solid #0891b2;\n    border-right: 100vw solid transparent;\n  }\n.projects {\n    display: flex;\n    flex-wrap: wrap;\n    gap: 1em;\n}\n.about-paragraph {\n    font-size: 2em;\n    opacity: 70%;\n}\n.icons {\n    display: flex;\n    justify-content: space-around;\n    font-size: 2em;\n    color: black;\n    width: 60%;\n}\n.text{\n    display: flex;\n    justify-content: center;\n}\n.my-projects{\n    display: flex;\n    flex-wrap: wrap;\n    gap: 5em;\n}\n.card {\n    display: flex; \n    flex-direction: column;\n    box-shadow: 3px 3px 5px 2px rgb(153, 152, 152);\n    min-width: 21em;\n    min-height: 28em;\n}\n.screenshot {\n    flex:1.4;\n    background-color: blue;\n}\n.description {\n    flex:1;\n    padding: 1em;\n}\n.project-name {\n    display: flex;\n    justify-content: center;\n    gap: 4em;\n}\n.icons-card {\n    display: flex;\n    justify-content: space-around;\n    gap: .4em;\n    font-size: 2em;\n}\n.contacts {\n    display: flex;\n    flex-direction: column;\n}\n\n.main-contacts {\n    display: flex;\n    flex-direction: column;\n    gap: 1.5em;\n    font-size: 1.2em;\n    color: white ;\n    background-color: #0891b2;\n    padding: 1.3em;\n}\n.center\n{\n    display: flex;\n    justify-content: center;\n    font-weight: 100;\n}\n.last-pic {\n    background-image: url(${u});\n    background-size: cover;\n    width: 100%;\n    min-height: 20em;\n}\n.last-icons{\n    display: flex;\n    justify-content: space-around;\n    font-size: 2em;\n    color: black;\n}\n.footer {\n}\n.desktop-only {\n    display: none;\n}\n@media screen and (min-width: 1200px) {\n    \n.profile-pic {\n    position: absolute;\n    width: 25em;\n    min-height: 35em;\n    top:50%;\n    left:30%;\n    transform: translate(-50%,-50%);\n    background-image: url(${f});\n    background-size: cover;\n    z-index: 3;\n    box-shadow: 5px 5px 4px rgba(0, 0, 0, 0.5);\n    \n}\n.about {\n    display: flex;\n    align-items: flex-start;\n    position: absolute;\n    width: 35em;\n    background-color: white;\n    top:40%;\n    left:65%;\n    transform: translate(-50%,-50%);\n    padding: 2em;\n    padding-left: 10em;\n    z-index: 2;\n    box-shadow: 5px 5px 4px rgba(0, 0, 0, 0.5);\n}\n.icons{\n    display: flex;\n    justify-content: flex-end;\n    width: 100%;\n    gap:1em\n}\n.card {\n    width: 25em;\n}\nmain {\n    padding: 4em;\n}\n.my-projects{\n    gap: 4em;\n}\n.contacts {\n    display: flex;\n    flex-direction: row;\n    padding: 4em;\n    background-color: #0891b2;\n}\n.main-contacts {\n    flex: 1;\n    max-width: 30em;\n    padding: 0;\n    width: 100%;\n    padding-right: 3em;\n}\n.last-pic {\n    display: none;\n}\n.desktop-only {\n    display: block;\n    flex:2;\n}\n.last-icons{\n    display: flex;\n    justify-content: flex-start;\n    font-size: 2em;\n    gap: 1em;\n    color: black;\n}\n}\n@media screen and (min-width: 600px) and (max-width: 1200px){\n       \n.profile-pic {\n    position: absolute;\n    width: 25em;\n    min-height: 30em;\n    top:40%;\n    left:30%;\n    transform: translate(-50%,-50%);\n    background-image: url(${f});\n    background-size: cover;\n    z-index: 3;\n    box-shadow: 5px 5px 4px rgba(0, 0, 0, 0.5);\n    float: left;\n    \n}\n.name {\n    font-size: 3em;\n}\n.about {\n    display: flex;\n    align-items: flex-start;\n    position: absolute;\n    width: 30em;\n    background-color: white;\n    top:40%;\n    left:75%;\n    transform: translate(-50%,-50%);\n    padding: 2em;\n    padding-left: 10em;\n    z-index: 2;\n    box-shadow: 5px 5px 4px rgba(0, 0, 0, 0.5);\n    font-size:.8em;\n    overflow: scroll;\n}\n}`,""]);const m=d},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",o=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),o&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),o&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,o,r,a){"string"==typeof n&&(n=[[null,n,void 0]]);var i={};if(o)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(i[c]=!0)}for(var p=0;p<n.length;p++){var l=[].concat(n[p]);o&&i[l[0]]||(void 0!==a&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=a),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),r&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=r):l[4]="".concat(r)),e.push(l))}},e}},667:n=>{n.exports=function(n,e){return e||(e={}),n?(n=String(n.__esModule?n.default:n),/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),e.hash&&(n+=e.hash),/["'() \t\n]|(%20)/.test(n)||e.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n):n}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var e=[];function t(n){for(var t=-1,o=0;o<e.length;o++)if(e[o].identifier===n){t=o;break}return t}function o(n,o){for(var a={},i=[],s=0;s<n.length;s++){var c=n[s],p=o.base?c[0]+o.base:c[0],l=a[p]||0,d="".concat(p," ").concat(l);a[p]=l+1;var f=t(d),u={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==f)e[f].references++,e[f].updater(u);else{var m=r(u,o);o.byIndex=s,e.splice(s,0,{identifier:d,updater:m,references:1})}i.push(d)}return i}function r(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,r){var a=o(n=n||[],r=r||{});return function(n){n=n||[];for(var i=0;i<a.length;i++){var s=t(a[i]);e[s].references--}for(var c=o(n,r),p=0;p<a.length;p++){var l=t(a[p]);0===e[l].references&&(e[l].updater(),e.splice(l,1))}a=c}}},569:n=>{var e={};n.exports=function(n,t){var o=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(t)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var o="";t.supports&&(o+="@supports (".concat(t.supports,") {")),t.media&&(o+="@media ".concat(t.media," {"));var r=void 0!==t.layer;r&&(o+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),o+=t.css,r&&(o+="}"),t.media&&(o+="}"),t.supports&&(o+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleTagTransform(o,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}},465:(n,e,t)=>{n.exports=t.p+"ce51f6b03382df4ce5c1.jpg"},679:(n,e,t)=>{n.exports=t.p+"979dda0cdfd716605b21.jpg"}},g={};function x(n){var e=g[n];if(void 0!==e)return e.exports;var t=g[n]={id:n,exports:{}};return m[n](t,t.exports,x),t.exports}x.m=m,x.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return x.d(e,{a:e}),e},x.d=(n,e)=>{for(var t in e)x.o(e,t)&&!x.o(n,t)&&Object.defineProperty(n,t,{enumerable:!0,get:e[t]})},x.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),x.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n;x.g.importScripts&&(n=x.g.location+"");var e=x.g.document;if(!n&&e&&(e.currentScript&&(n=e.currentScript.src),!n)){var t=e.getElementsByTagName("script");if(t.length)for(var o=t.length-1;o>-1&&!n;)n=t[o--].src}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),x.p=n})(),x.b=document.baseURI||self.location.href,x.nc=void 0,n=x(379),e=x.n(n),t=x(795),o=x.n(t),r=x(569),a=x.n(r),i=x(565),s=x.n(i),c=x(216),p=x.n(c),l=x(589),d=x.n(l),f=x(607),(u={}).styleTagTransform=d(),u.setAttributes=s(),u.insert=a().bind(null,"head"),u.domAPI=o(),u.insertStyleElement=p(),e()(f.Z,u),f.Z&&f.Z.locals&&f.Z.locals})();