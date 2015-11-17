!function e(t,n,r){function i(s,a){if(!n[s]){if(!t[s]){var u="function"==typeof require&&require;if(!a&&u)return u(s,!0);if(o)return o(s,!0);var c=new Error("Cannot find module '"+s+"'");throw c.code="MODULE_NOT_FOUND",c}var l=n[s]={exports:{}};t[s][0].call(l.exports,function(e){var n=t[s][1][e];return i(n?n:e)},l,l.exports,e,t,n,r)}return n[s].exports}for(var o="function"==typeof require&&require,s=0;s<r.length;s++)i(r[s]);return i}({1:[function(e,t,n){function r(e,t){for(var n=t.length-1,r=t[0].length,i=t.map(function(e){return e.slice()}),o=n;o>0;o--)for(var s=0;n>s;s++)for(k=0;k<r;k++)i[s][k]=(1-e)*i[s][k]+e*i[s+1][k];return i[0]}t.exports=r},{}],2:[function(e,t,n){},{}],3:[function(e,t,n){function r(){this._events=this._events||{},this._maxListeners=this._maxListeners||void 0}function i(e){return"function"==typeof e}function o(e){return"number"==typeof e}function s(e){return"object"==typeof e&&null!==e}function a(e){return void 0===e}t.exports=r,r.EventEmitter=r,r.prototype._events=void 0,r.prototype._maxListeners=void 0,r.defaultMaxListeners=10,r.prototype.setMaxListeners=function(e){if(!o(e)||0>e||isNaN(e))throw TypeError("n must be a positive number");return this._maxListeners=e,this},r.prototype.emit=function(e){var t,n,r,o,u,c;if(this._events||(this._events={}),"error"===e&&(!this._events.error||s(this._events.error)&&!this._events.error.length)){if(t=arguments[1],t instanceof Error)throw t;throw TypeError('Uncaught, unspecified "error" event.')}if(n=this._events[e],a(n))return!1;if(i(n))switch(arguments.length){case 1:n.call(this);break;case 2:n.call(this,arguments[1]);break;case 3:n.call(this,arguments[1],arguments[2]);break;default:o=Array.prototype.slice.call(arguments,1),n.apply(this,o)}else if(s(n))for(o=Array.prototype.slice.call(arguments,1),c=n.slice(),r=c.length,u=0;r>u;u++)c[u].apply(this,o);return!0},r.prototype.addListener=function(e,t){var n;if(!i(t))throw TypeError("listener must be a function");return this._events||(this._events={}),this._events.newListener&&this.emit("newListener",e,i(t.listener)?t.listener:t),this._events[e]?s(this._events[e])?this._events[e].push(t):this._events[e]=[this._events[e],t]:this._events[e]=t,s(this._events[e])&&!this._events[e].warned&&(n=a(this._maxListeners)?r.defaultMaxListeners:this._maxListeners,n&&n>0&&this._events[e].length>n&&(this._events[e].warned=!0,console.error("(node) warning: possible EventEmitter memory leak detected. %d listeners added. Use emitter.setMaxListeners() to increase limit.",this._events[e].length),"function"==typeof console.trace&&console.trace())),this},r.prototype.on=r.prototype.addListener,r.prototype.once=function(e,t){function n(){this.removeListener(e,n),r||(r=!0,t.apply(this,arguments))}if(!i(t))throw TypeError("listener must be a function");var r=!1;return n.listener=t,this.on(e,n),this},r.prototype.removeListener=function(e,t){var n,r,o,a;if(!i(t))throw TypeError("listener must be a function");if(!this._events||!this._events[e])return this;if(n=this._events[e],o=n.length,r=-1,n===t||i(n.listener)&&n.listener===t)delete this._events[e],this._events.removeListener&&this.emit("removeListener",e,t);else if(s(n)){for(a=o;a-->0;)if(n[a]===t||n[a].listener&&n[a].listener===t){r=a;break}if(0>r)return this;1===n.length?(n.length=0,delete this._events[e]):n.splice(r,1),this._events.removeListener&&this.emit("removeListener",e,t)}return this},r.prototype.removeAllListeners=function(e){var t,n;if(!this._events)return this;if(!this._events.removeListener)return 0===arguments.length?this._events={}:this._events[e]&&delete this._events[e],this;if(0===arguments.length){for(t in this._events)"removeListener"!==t&&this.removeAllListeners(t);return this.removeAllListeners("removeListener"),this._events={},this}if(n=this._events[e],i(n))this.removeListener(e,n);else if(n)for(;n.length;)this.removeListener(e,n[n.length-1]);return delete this._events[e],this},r.prototype.listeners=function(e){var t;return t=this._events&&this._events[e]?i(this._events[e])?[this._events[e]]:this._events[e].slice():[]},r.prototype.listenerCount=function(e){if(this._events){var t=this._events[e];if(i(t))return 1;if(t)return t.length}return 0},r.listenerCount=function(e,t){return e.listenerCount(t)}},{}],4:[function(e,t,n){function r(){l=!1,a.length?c=a.concat(c):f=-1,c.length&&i()}function i(){if(!l){var e=setTimeout(r);l=!0;for(var t=c.length;t;){for(a=c,c=[];++f<t;)a&&a[f].run();f=-1,t=c.length}a=null,l=!1,clearTimeout(e)}}function o(e,t){this.fun=e,this.array=t}function s(){}var a,u=t.exports={},c=[],l=!1,f=-1;u.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];c.push(new o(e,t)),1!==c.length||l||setTimeout(i,0)},o.prototype.run=function(){this.fun.apply(null,this.array)},u.title="browser",u.browser=!0,u.env={},u.argv=[],u.version="",u.versions={},u.on=s,u.addListener=s,u.once=s,u.off=s,u.removeListener=s,u.removeAllListeners=s,u.emit=s,u.binding=function(e){throw new Error("process.binding is not supported")},u.cwd=function(){return"/"},u.chdir=function(e){throw new Error("process.chdir is not supported")},u.umask=function(){return 0}},{}],5:[function(e,t,n){"use strict";function r(e,t){return Object.prototype.hasOwnProperty.call(e,t)}t.exports=function(e,t,n,o){t=t||"&",n=n||"=";var s={};if("string"!=typeof e||0===e.length)return s;var a=/\+/g;e=e.split(t);var u=1e3;o&&"number"==typeof o.maxKeys&&(u=o.maxKeys);var c=e.length;u>0&&c>u&&(c=u);for(var l=0;c>l;++l){var f,p,d,h,m=e[l].replace(a,"%20"),v=m.indexOf(n);v>=0?(f=m.substr(0,v),p=m.substr(v+1)):(f=m,p=""),d=decodeURIComponent(f),h=decodeURIComponent(p),r(s,d)?i(s[d])?s[d].push(h):s[d]=[s[d],h]:s[d]=h}return s};var i=Array.isArray||function(e){return"[object Array]"===Object.prototype.toString.call(e)}},{}],6:[function(e,t,n){"use strict";function r(e,t){if(e.map)return e.map(t);for(var n=[],r=0;r<e.length;r++)n.push(t(e[r],r));return n}var i=function(e){switch(typeof e){case"string":return e;case"boolean":return e?"true":"false";case"number":return isFinite(e)?e:"";default:return""}};t.exports=function(e,t,n,a){return t=t||"&",n=n||"=",null===e&&(e=void 0),"object"==typeof e?r(s(e),function(s){var a=encodeURIComponent(i(s))+n;return o(e[s])?r(e[s],function(e){return a+encodeURIComponent(i(e))}).join(t):a+encodeURIComponent(i(e[s]))}).join(t):a?encodeURIComponent(i(a))+n+encodeURIComponent(i(e)):""};var o=Array.isArray||function(e){return"[object Array]"===Object.prototype.toString.call(e)},s=Object.keys||function(e){var t=[];for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.push(n);return t}},{}],7:[function(e,t,n){"use strict";n.decode=n.parse=e(5),n.encode=n.stringify=e(6)},{5:5,6:6}],8:[function(e,t,n){var r=e(9),i=e(11);t.exports=function(e,t){function n(){o();var t=e.width,n=e.height;a[0]=t/o.scale,a[1]=n/o.scale}if(!e)throw new TypeError("must specify a canvas element");t=t||{};var o=r(e,t.parent,t.scale),s=i(),a=[0,0];return n(),window.addEventListener("resize",function(){n(),s.emit("resize")},!1),Object.defineProperties(s,{scale:{get:function(){return o.scale},set:function(e){o.scale=e}},shape:{get:function(){return a}},parent:{get:function(){return o.parent},set:function(e){o.parent=e}}}),s}},{11:11,9:9}],9:[function(e,t,n){function r(e,t,n){function r(){var t=r.parent||e.parentNode;if("function"==typeof t)var n=t(o)||o,a=n[0],u=n[1];else if(t&&t!==document.body)var c=i(t),a=0|c[0],u=0|c[1];else var a=window.innerWidth,u=window.innerHeight;return s?(e.setAttribute("width",a*r.scale+"px"),e.setAttribute("height",u*r.scale+"px")):(e.width=a*r.scale,e.height=u*r.scale),e.style.width=a+"px",e.style.height=u+"px",r}var s="SVG"===e.nodeName.toUpperCase();return e.style.position=e.style.position||"absolute",e.style.top=0,e.style.left=0,r.scale=parseFloat(n||1),r.parent=t,r()}var i=e(10);t.exports=r;var o=new Float32Array(2)},{10:10}],10:[function(e,t,n){function r(e){if(e===window||e===document.body)return[window.innerWidth,window.innerHeight];if(!e.parentNode){var t=!0;document.body.appendChild(e)}var n=e.getBoundingClientRect(),r=getComputedStyle(e),o=(0|n.height)+i(r.getPropertyValue("margin-top"))+i(r.getPropertyValue("margin-bottom")),s=(0|n.width)+i(r.getPropertyValue("margin-left"))+i(r.getPropertyValue("margin-right"));return t&&document.body.removeChild(e),[s,o]}function i(e){return parseFloat(e)||0}t.exports=r},{}],11:[function(e,t,n){function r(e){return this instanceof r?(this.running=!1,this.last=s(),this._frame=0,this._tick=this.tick.bind(this),void(e&&this.on("tick",e))):new r(e)}var i=e(23),o=e(3).EventEmitter,s=e(14),a=e(12);t.exports=r,i(r,o),r.prototype.start=function(){return this.running?void 0:(this.running=!0,this.last=s(),this._frame=a(this._tick),this)},r.prototype.stop=function(){return this.running=!1,0!==this._frame&&a.cancel(this._frame),this._frame=0,this},r.prototype.tick=function(){this._frame=a(this._tick);var e=s(),t=e-this.last;this.emit("tick",t),this.last=e}},{12:12,14:14,23:23,3:3}],12:[function(e,t,n){for(var r=e(13),i="undefined"==typeof window?{}:window,o=["moz","webkit"],s="AnimationFrame",a=i["request"+s],u=i["cancel"+s]||i["cancelRequest"+s],c=0;c<o.length&&!a;c++)a=i[o[c]+"Request"+s],u=i[o[c]+"Cancel"+s]||i[o[c]+"CancelRequest"+s];if(!a||!u){var l=0,f=0,p=[],d=1e3/60;a=function(e){if(0===p.length){var t=r(),n=Math.max(0,d-(t-l));l=n+t,setTimeout(function(){var e=p.slice(0);p.length=0;for(var t=0;t<e.length;t++)if(!e[t].cancelled)try{e[t].callback(l)}catch(n){setTimeout(function(){throw n},0)}},Math.round(n))}return p.push({handle:++f,callback:e,cancelled:!1}),f},u=function(e){for(var t=0;t<p.length;t++)p[t].handle===e&&(p[t].cancelled=!0)}}t.exports=function(e){return a.call(i,e)},t.exports.cancel=function(){u.apply(i,arguments)}},{13:13}],13:[function(e,t,n){(function(e){(function(){var n,r,i;"undefined"!=typeof performance&&null!==performance&&performance.now?t.exports=function(){return performance.now()}:"undefined"!=typeof e&&null!==e&&e.hrtime?(t.exports=function(){return(n()-i)/1e6},r=e.hrtime,n=function(){var e;return e=r(),1e9*e[0]+e[1]},i=n()):Date.now?(t.exports=function(){return Date.now()-i},i=Date.now()):(t.exports=function(){return(new Date).getTime()-i},i=(new Date).getTime())}).call(this)}).call(this,e(4))},{4:4}],14:[function(e,t,n){(function(e){t.exports=e.performance&&e.performance.now?function(){return performance.now()}:Date.now||function(){return+new Date}}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{}],15:[function(e,t,n){function r(e,t,n){return n>t?t>e?t:e>n?n:e:n>e?n:e>t?t:e}t.exports=r},{}],16:[function(e,t,n){function r(e,t,n){var r=c[t];if("undefined"==typeof r&&(r=o(t)),r){if(void 0===n)return e.style[r];"number"==typeof n&&(n+=l[r]||""),e.style[r]=n}}function i(e,t){for(var n in t)t.hasOwnProperty(n)&&r(e,n,t[n])}function o(e){var t=u(e),n=a(t);return c[t]=c[e]=c[n]=n,n}function s(){2===arguments.length?i(arguments[0],arguments[1]):r(arguments[0],arguments[1],arguments[2])}var a=e(17),u=e(18),c={"float":"cssFloat"},l={};["top","right","bottom","left","width","height","fontSize","paddingLeft","paddingRight","paddingTop","paddingBottom","marginLeft","marginRight","marginTop","marginBottom","padding","margin","perspective"].forEach(function(e){l[e]="px"}),t.exports=s,t.exports.set=s,t.exports.get=function(e,t){return Array.isArray(t)?t.reduce(function(t,n){return t[n]=r(e,n||""),t},{}):r(e,t||"")}},{17:17,18:18}],17:[function(e,t,n){var r=null;t.exports=function(e){var t=["Moz","Khtml","Webkit","O","ms"],n=e.charAt(0).toUpperCase()+e.slice(1);if(r||(r=document.createElement("div")),e in r.style)return e;for(var i=t.length;i--;)if(t[i]+n in r.style)return t[i]+n;return!1}},{}],18:[function(e,t,n){function r(e){return i(e).replace(/\s(\w)/g,function(e,t){return t.toUpperCase()})}var i=e(19);t.exports=r},{19:19}],19:[function(e,t,n){function r(e){return i(e).replace(/[\W_]+(.|$)/g,function(e,t){return t?" "+t:""})}var i=e(20);t.exports=r},{20:20}],20:[function(e,t,n){function r(e){return s.test(e)?e.toLowerCase():(u.test(e)&&(e=i(e)),a.test(e)&&(e=o(e)),e.toLowerCase())}function i(e){return e.replace(c,function(e,t){return t?" "+t:""})}function o(e){return e.replace(l,function(e,t,n){return t+" "+n.toLowerCase().split("").join(" ")})}t.exports=r;var s=/\s/,a=/[a-z][A-Z]/,u=/[\W_]/,c=/[\W_]+(.|$)/g,l=/(.)([A-Z]+)/g},{}],21:[function(e,t,n){function r(e,t){if("string"!=typeof e)throw new TypeError("String expected");t||(t=document);var n=/<([\w:]+)/.exec(e);if(!n)return t.createTextNode(e);e=e.replace(/^\s+|\s+$/g,"");var r=n[1];if("body"==r){var i=t.createElement("html");return i.innerHTML=e,i.removeChild(i.lastChild)}var o=s[r]||s._default,a=o[0],u=o[1],c=o[2],i=t.createElement("div");for(i.innerHTML=u+e+c;a--;)i=i.lastChild;if(i.firstChild==i.lastChild)return i.removeChild(i.firstChild);for(var l=t.createDocumentFragment();i.firstChild;)l.appendChild(i.removeChild(i.firstChild));return l}t.exports=r;var i,o=!1;"undefined"!=typeof document&&(i=document.createElement("div"),i.innerHTML='  <link/><table></table><a href="/a">a</a><input type="checkbox"/>',o=!i.getElementsByTagName("link").length,i=void 0);var s={legend:[1,"<fieldset>","</fieldset>"],tr:[2,"<table><tbody>","</tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],_default:o?[1,"X<div>","</div>"]:[0,"",""]};s.td=s.th=[3,"<table><tbody><tr>","</tr></tbody></table>"],s.option=s.optgroup=[1,'<select multiple="multiple">',"</select>"],s.thead=s.tbody=s.colgroup=s.caption=s.tfoot=[1,"<table>","</table>"],s.polyline=s.ellipse=s.polygon=s.circle=s.text=s.line=s.path=s.rect=s.g=[1,'<svg xmlns="http://www.w3.org/2000/svg" version="1.1">',"</svg>"]},{}],22:[function(e,t,n){function r(e){var t=o(e);return'<link href="'+t+'" rel="stylesheet" type="text/css">'}function i(e){var t=o(e),n=document.createElement("link");return n.setAttribute("href",t),n.setAttribute("rel","stylesheet"),n.setAttribute("type","text/css"),n}function o(e){var t=Object.keys(e).map(function(t){var n=e[t];return t=t.replace(/\s+/,"+"),"boolean"==typeof n?t:t+":"+a(n).join(",")}).join("|");return"http://fonts.googleapis.com/css?family="+t}function s(e){var t=i(e);return document.head.appendChild(t),t}function a(e){return Array.isArray(e)?e:[e]}t.exports=r,t.exports.add=s},{}],23:[function(e,t,n){"function"==typeof Object.create?t.exports=function(e,t){e.super_=t,e.prototype=Object.create(t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}})}:t.exports=function(e,t){e.super_=t;var n=function(){};n.prototype=t.prototype,e.prototype=new n,e.prototype.constructor=e}},{}],24:[function(e,t,n){var r={};t.exports=function(e,t){if(!r[e]){r[e]=!0;var n=document.createElement("style");n.setAttribute("type","text/css"),"textContent"in n?n.textContent=e:n.styleSheet.cssText=e;var i=document.getElementsByTagName("head")[0];t&&t.prepend?i.insertBefore(n,i.childNodes[0]):i.appendChild(n)}}},{}],25:[function(e,t,n){"use strict";function r(e){if(null===e||void 0===e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}var i=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable;t.exports=Object.assign||function(e,t){for(var n,s,a=r(e),u=1;u<arguments.length;u++){n=Object(arguments[u]);for(var c in n)i.call(n,c)&&(a[c]=n[c]);if(Object.getOwnPropertySymbols){s=Object.getOwnPropertySymbols(n);for(var l=0;l<s.length;l++)o.call(n,s[l])&&(a[s[l]]=n[s[l]])}}return a}},{}],26:[function(e,t,n){function r(e,t){function n(){for(var t=new Array(arguments.length),n=0;n<t.length;n++)t[n]=arguments[n];var r=e.apply(this,t),i=t[t.length-1];return"function"==typeof r&&r!==i&&Object.keys(i).forEach(function(e){r[e]=i[e]}),r}if(e&&t)return r(e)(t);if("function"!=typeof e)throw new TypeError("need wrapper function");return Object.keys(e).forEach(function(t){n[t]=e[t]}),n}t.exports=r},{}],27:[function(e,t,n){function r(e){var t=function(){return t.called?t.value:(t.called=!0,t.value=e.apply(this,arguments))};return t.called=!1,t}var i=e(26);t.exports=i(r),r.proto=r(function(){Object.defineProperty(Function.prototype,"once",{value:function(){return r(this)},configurable:!0})})},{26:26}],28:[function(e,t,n){arguments[4][11][0].apply(n,arguments)},{11:11,23:23,29:29,3:3,31:31}],29:[function(e,t,n){arguments[4][12][0].apply(n,arguments)},{12:12,30:30}],30:[function(e,t,n){arguments[4][13][0].apply(n,arguments)},{13:13,4:4}],31:[function(e,t,n){arguments[4][14][0].apply(n,arguments)},{14:14}],32:[function(e,t,n){function r(e){if(e)throw e}function i(e,t){l||(u(".npm-scb-wrap {\n  font-family: 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;\n  font-weight: 200;\n  position: absolute;\n  top: 0;\n  left: 0;\n  z-index: 999;\n}\n\n.npm-scb-wrap a {\n  text-decoration: none;\n  color: #000;\n}\n.npm-scb-white\n.npm-scb-wrap a {\n  color: #fff;\n}\n\n.npm-scb-inner {\n  position: absolute;\n  top: -120px; left: 0;\n  padding: 8px;\n  width: 100%;\n  height: 150px;\n  z-index: 2;\n  -webkit-transition: width 0.5s cubic-bezier(1, 0, 0, 1), top 0.5s;\n     -moz-transition: width 0.5s cubic-bezier(1, 0, 0, 1), top 0.5s;\n      -ms-transition: width 0.5s cubic-bezier(1, 0, 0, 1), top 0.5s;\n       -o-transition: width 0.5s cubic-bezier(1, 0, 0, 1), top 0.5s;\n          transition: width 0.5s cubic-bezier(1, 0, 0, 1), top 0.5s;\n}\n.npm-scb-wrap:hover\n.npm-scb-inner {\n  top: 0;\n}\n\n.npm-scb-artwork {\n  position: absolute;\n  top: 16px; left: 16px;\n  width: 104px; height: 104px;\n  box-shadow: 0 0 8px -3px #000;\n  outline: 1px solid rgba(0,0,0,0.1);\n  z-index: 2;\n}\n.npm-scb-white\n.npm-scb-artwork {\n  outline: 1px solid rgba(255,255,255,0.1);\n  box-shadow: 0 0 10px -2px rgba(255,255,255,0.9);\n}\n\n.npm-scb-info {\n  position: absolute;\n  top: 16px;\n  left: 120px;\n  width: 300px;\n  z-index: 1;\n}\n\n.npm-scb-info > a {\n  display: block;\n}\n\n.npm-scb-now-playing {\n  font-size: 12px;\n  line-height: 12px;\n  position: absolute;\n  width: 500px;\n  z-index: 1;\n  padding: 15px 0;\n  top: 0; left: 138px;\n  opacity: 1;\n  -webkit-transition: opacity 0.25s;\n     -moz-transition: opacity 0.25s;\n      -ms-transition: opacity 0.25s;\n       -o-transition: opacity 0.25s;\n          transition: opacity 0.25s;\n}\n\n.npm-scb-wrap:hover\n.npm-scb-now-playing {\n  opacity: 0;\n}\n\n.npm-scb-white\n.npm-scb-now-playing {\n  color: #fff;\n}\n.npm-scb-now-playing > a {\n  font-weight: bold;\n}\n\n.npm-scb-info > a > p {\n  margin: 0;\n  padding-bottom: 0.25em;\n  line-height: 1.35em;\n  margin-left: 1em;\n  font-size: 1em;\n}\n\n.npm-scb-title {\n  font-weight: bold;\n}\n\n.npm-scb-icon {\n  position: absolute;\n  top: 120px;\n  padding-top: 0.75em;\n  left: 16px;\n}\n"),l=!0),p||(p=a.compile('<div class="npm-scb-wrap">\n  <div class="npm-scb-inner">\n    <a target="_blank" href="{{!urls.song}}">\n      <img class="npm-scb-icon" src="{{!icon}}">\n      <img class="npm-scb-artwork" src="{{!artwork}}">\n    </a>\n    <div class="npm-scb-info">\n      <a target="_blank" href="{{!urls.song}}">\n        <p class="npm-scb-title">{{!title}}</p>\n      </a>\n      <a target="_blank" href="{{!urls.artist}}">\n        <p class="npm-scb-artist">{{!artist}}</p>\n      </a>\n    </div>\n  </div>\n  <div class="npm-scb-now-playing">\n    Now Playing:\n    <a href="{{!urls.song}}">{{!title}}</a>\n    by\n    <a href="{{!urls.artist}}">{{!artist}}</a>\n  </div>\n</div>')),!f&&e.getFonts&&(s.add({"Open Sans":[300,600]}),f=!0),e=e||{},t=t||r;var n=e.el||document.createElement("div"),i="dark"in e&&!e.dark?"white":"black",d=e.client_id,h=e.song;return o(d,h,function(e,r){if(e)return t(e);if("track"!==r.kind)throw new Error("soundcloud-badge only supports individual tracks at the moment");n.classList["black"===i?"remove":"add"]("npm-scb-white"),n.innerHTML=p({artwork:r.artwork_url||r.user.avatar_url,artist:r.user.username,title:r.title,icon:c[i],urls:{song:r.permalink_url,artist:r.user.permalink_url}}),document.body.appendChild(n),t(null,r.stream_url+"?client_id="+d,r,n)}),n}var o=e(36),s=e(33),a=e(35),u=e(34),c=(e(2),{black:"https://developers.soundcloud.com/assets/logo_black.png",white:"https://developers.soundcloud.com/assets/logo_white.png"});t.exports=i;var l=!1,f=!1,p=null},{2:2,33:33,34:34,35:35,36:36}],33:[function(e,t,n){arguments[4][22][0].apply(n,arguments)},{22:22}],34:[function(e,t,n){var r=[];t.exports=function(e){if(!(r.indexOf(e)>=0)){r.push(e);var t=document.createElement("style"),n=document.createTextNode(e);t.appendChild(n),document.head.childNodes.length?document.head.insertBefore(t,document.head.childNodes[0]):document.head.appendChild(t)}}},{}],35:[function(e,t,n){function r(e,t){t=t||{};var n=i(e);return n(t)}function i(e){for(var t,n=[],r=s(e),i=0;i<r.length;++i)if(t=r[i],i%2==0)n.push('"'+t.replace(/"/g,'\\"')+'"');else switch(t[0]){case"/":t=t.slice(1),n.push(") + ");break;case"^":t=t.slice(1),o(t),n.push(' + section(obj, "'+t+'", true, ');break;case"#":t=t.slice(1),o(t),n.push(' + section(obj, "'+t+'", false, ');break;case"!":t=t.slice(1),o(t),n.push(" + obj."+t+" + ");break;default:o(t),n.push(" + escape(obj."+t+") + ")}return n="\n"+a(c.toString())+";\n\n"+a(u.toString())+";\n\n  return "+n.join("").replace(/\n/g,"\\n"),new Function("obj",n)}function o(e){if(!e.match(/^[\w.]+$/))throw new Error('invalid property "'+e+'"')}function s(e){return e.split(/\{\{|\}\}/)}function a(e){return e.replace(/^/gm,"  ")}function u(e,t,n,r){var i=e[t];return"function"==typeof i?i.call(e,r):(n&&(i=!i),i?r:"")}function c(e){return String(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}n=t.exports=r,n.compile=i},{}],36:[function(e,t,n){function r(e,t,n){var r="https://api.soundcloud.com/resolve.json?"+i.stringify({url:t,client_id:e});o({uri:r,method:"GET"},function(t,r,i){if(t)return n(t);try{i=JSON.parse(i)}catch(o){return n(o)}if(i.errors)return n(new Error(i.errors[0].error_message));var s="track"===i.kind&&i.stream_url+"?client_id="+e;return n(null,i,s)})}var i=e(7),o=e(37);t.exports=r},{37:37,7:7}],37:[function(e,t,n){function r(e,t){function n(){4===l.readyState&&r()}function r(){var e=null,n=l.statusCode=l.status,r=l.body=l.response||l.responseText||l.responseXML;if(0===n||n>=400&&600>n){var i=l.responseText||a[String(l.status).charAt(0)];e=new Error(i),e.statusCode=l.status}if(m)try{r=l.body=JSON.parse(r)}catch(o){}t(e,l,r)}function o(e){t(e,l)}"string"==typeof e&&(e={uri:e}),e=e||{},t=s(t);var l;l=e.cors?new c:new u;var f=l.url=e.uri,p=l.method=e.method||"GET",d=e.body||e.data,h=l.headers=e.headers||{},m=!1;return"json"in e&&(m=!0,h["Content-Type"]="application/json",d=JSON.stringify(e.json)),l.onreadystatechange=n,l.onload=r,l.onerror=o,l.onprogress=function(){},l.ontimeout=i,l.open(p,f),e.cors&&(l.withCredentials=!0),l.timeout="timeout"in e?e.timeout:5e3,l.setRequestHeader&&Object.keys(h).forEach(function(e){l.setRequestHeader(e,h[e])}),l.send(d),l}function i(){}var o=e(38),s=e(39),a={0:"Internal XMLHttpRequest Error",4:"4xx Client Error",5:"5xx Server Error"},u=o.XMLHttpRequest||i,c="withCredentials"in new u?o.XMLHttpRequest:o.XDomainRequest;t.exports=r},{38:38,39:39}],38:[function(e,t,n){(function(e){"undefined"!=typeof window?t.exports=window:"undefined"!=typeof e?t.exports=e:t.exports={}}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{}],39:[function(e,t,n){function r(e){var t=!1;return function(){return t?void 0:(t=!0,e.apply(this,arguments))}}t.exports=r,r.proto=r(function(){Object.defineProperty(Function.prototype,"once",{value:function(){return r(this)},configurable:!0})})},{}],40:[function(e,t,n){t.exports=function(e,t,n){return(n-e)/(t-e)}},{}],41:[function(e,t,n){function r(e,t,n){if(!(this instanceof r))return new r(e,t,n);if(t instanceof i||(n=t,t=null),n=n||{},this.ctx=t=t||new i,e instanceof AudioNode||(e=e instanceof Audio?t.createMediaElementSource(e):t.createMediaStreamSource(e)),this.analyser=t.createAnalyser(),this.stereo=!!n.stereo,this.audible=n.audible!==!1,this.wavedata=null,this.freqdata=null,this.splitter=null,this.merger=null,this.source=e,this.stereo){this.analyser=[this.analyser],this.analyser.push(t.createAnalyser()),this.splitter=t.createChannelSplitter(2),this.merger=t.createChannelMerger(2),this.output=this.merger,this.source.connect(this.splitter);for(var o=0;2>o;o++)this.splitter.connect(this.analyser[o],o,0),this.analyser[o].connect(this.merger,0,o);this.audible&&this.merger.connect(t.destination)}else this.output=this.source,this.source.connect(this.analyser),this.audible&&this.analyser.connect(t.destination)}var i=window.AudioContext||window.webkitAudioContext;t.exports=r,r.prototype.waveform=function(e,t){e||(e=this.wavedata||(this.wavedata=new Uint8Array((this.analyser[0]||this.analyser).frequencyBinCount)));var n=this.stereo?this.analyser[t||0]:this.analyser;return n.getByteTimeDomainData(e),e},r.prototype.frequencies=function(e,t){e||(e=this.freqdata||(this.freqdata=new Uint8Array((this.analyser[0]||this.analyser).frequencyBinCount)));var n=this.stereo?this.analyser[t||0]:this.analyser;return n.getByteFrequencyData(e),e}},{}],42:[function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function i(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}var o=function(){function e(e,t){var n=[],r=!0,i=!1,o=void 0;try{for(var s,a=e[Symbol.iterator]();!(r=(s=a.next()).done)&&(n.push(s.value),!t||n.length!==t);r=!0);}catch(u){i=!0,o=u}finally{try{!r&&a["return"]&&a["return"]()}finally{if(i)throw o}}return n}return function(t,n){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return e(t,n);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),s=e(47),a=r(s),u=e(43),c=e(1),l=r(c),f=[[-.9,0],[-.5,-.5],[.5,-.5],[.9,0]],p=f.slice(1).reduce(function(e,t){return e.concat(t)},[]),d=["https://soundcloud.com/roman-mars/99-invisible-161-show-of-force","https://soundcloud.com/roman-mars/184-rajneeshpuram","https://soundcloud.com/roman-mars/99-invisible-110-structural-integrity","https://soundcloud.com/roman-mars/99-invisible-167-voices-in-the-wire","https://soundcloud.com/roman-mars/99-invisible-162-mystery-house"],h=d[Math.floor(Math.random()*d.length)],m=(0,a["default"])(h);m.on("render",function(e,t){var n=o(m.shape,2),r=n[0],s=n[1],a=(0,u.getAnalyserAverages)(t,85,180);e.translate(r/2,s/2);var c=Math.min(200,Math.min(r,s)/2);e.scale(c,c);var d=(0,l["default"])(a,f);e.beginPath(),e.lineWidth=3/c,e.lineCap="round",e.strokeStyle="#ca211d",e.moveTo(0,.35),e.lineTo.apply(e,i(d)),e.stroke(),e.lineWidth=5/c,e.beginPath(),e.moveTo.apply(e,i(f[0])),e.bezierCurveTo.apply(e,i(p)),e.strokeStyle="#000",e.stroke()})},{1:1,43:43,47:47}],43:[function(e,t,n){"use strict";function r(e,t,n){return e*t/n}function i(e,t,n){return u(Math.floor(e/(t/n)),0,n/2)}function o(e,t,n){var r=Array.isArray(e.analyser)?e.analyser[0]:e.analyser,i=e.ctx.sampleRate,o=r.fftSize,s=e.frequencies();return a(s,t,n,i,o)}function s(e,t){return function(n,r,i){return a(n,r,i,e,t)}}function a(e,t,n,r,o){for(var s=i(t,r,o),a=i(n,r,o),u=a-s,c=0;a>s;s++)c+=e[s]/255;return 0===u?0:c/u}Object.defineProperty(n,"__esModule",{value:!0}),n.index2freq=r,n.freq2index=i,n.getAnalyserAverages=o,n.frequencyAverages=s;var u=e(15)},{15:15}],44:[function(e,t,n){"use strict";function r(e){return e&&console.error(e),i('\n    <div>Only supported on Desktop Chrome & FireFox.</div>\n    <div>See my other <strong>#codevember</strong> demos at\n    <a href="https://github.com/mattdesl/codevember">\n    https://github.com/mattdesl/codevember</a>.</div>\n  ')}var i=e(45)();t.exports=r},{45:45}],45:[function(e,t,n){"use strict";function r(e,t){return null!=t&&t[Symbol.hasInstance]?t[Symbol.hasInstance](e):e instanceof t}function i(e){function t(){h();var e=document.createElement("div");return e.setAttribute("id","fatal-error"),document.body.appendChild(e),s(e.style,{font:f?"16px monospace":'15px "Open Sans", Helvetica, sans-serif',background:i?"#313131":"#fff",color:i?"#e9e9e9":"#000","word-wrap":f?"break-word":void 0}),e}function n(e){return e.map(function(e){return'<div class="fatal-error-stack-line">'+e+"</div>"}).join("\n")}e=e||{};var i=e.dark,f=e.pre,p=e.googleFonts!==!1,d=e.stack,h=u(function(){p&&c.add({"Open Sans":[300,600]}),o(l)});return function(e){var i=e;if(r(e,Error)&&(i=d?e.stack:e.message),"string"==typeof i&&(i=(i||"").trim(),d)){var o=i.split("\n");o.length>0&&(i=n(o))}var s=document.querySelector("#fatal-error");for(s||(s=t());s.firstChild;)s.removeChild(s.firstChild);return Array.isArray(i)?i.forEach(function(e){s.appendChild(a(e))}):s.appendChild(a(i)),s}}var o=e(24),s=e(25),a=e(21),u=e(27),c=e(22),l="\n#fatal-error {\n  position: fixed;\n  width: 100%;\n  height: 100%;\n  z-index: 100000;\n  top: 0;\n  left: 0;\n  padding: 20px;\n  box-sizing: border-box;\n  font-size: 16px;\n  margin: 0;\n  color: #000;\n}\n.fatal-error-stack-line {\n  padding-left: 20px;\n}\n.fatal-error-stack-line:first-child {\n  padding-left: 0px;\n  font-weight: bold;\n}\na, a:visited, a:active {\n  text-decoration: none;\n  color: #48a0cd;\n}\na:hover {\n  text-decoration: underline;\n}\n";t.exports=i},{21:21,22:22,24:24,25:25,27:27}],46:[function(e,t,n){"use strict";t.exports=function(){return/(iPad|iPhone|Android)/i.test(navigator.userAgent)}},{}],47:[function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function i(e,t,n){function r(e,n,r){function a(e){var t=o(u.shape,2),n=t[0],r=t[1];s.save(),s.scale(u.scale,u.scale),s.clearRect(0,0,n,r),u.emit("render",s,f,e),s.restore()}function c(){var e=o(u.shape,2),t=e[0],n=e[1];(0,w["default"])(i,{left:(window.innerWidth-t)/2,top:(window.innerHeight-n)/2})}var l=new Audio;l.crossOrigin="Anonymous",l.src=e,l.play();var f=(0,m["default"])(l,{stereo:!1});u.emit("ready",{analyser:f,audio:l,data:n,div:r}),t.center&&(u.once("tick",c),u.on("resize",c)),u.on("tick",a),u.start()}"function"==typeof t&&(n=t,t={}),t=t||{},n=n||C;var i=t.canvas;i||(document.body.style.margin="0",document.body.style.overflow="hidden",i=document.body.appendChild(document.createElement("canvas")));var s=i.getContext("2d"),u=(0,g["default"])(i,(0,k["default"])({scale:window.devicePixelRatio},t));return(0,f["default"])()||!E?(0,c["default"])():(0,a["default"])({client_id:"b95f61a90da961736c03f659c03cb0cc",song:e,dark:t.dark!==!1,getFonts:!0},function(e,t,n,i){return e?A(e):void r(t,n,i)}),u}var o=function(){function e(e,t){var n=[],r=!0,i=!1,o=void 0;try{for(var s,a=e[Symbol.iterator]();!(r=(s=a.next()).done)&&(n.push(s.value),!t||n.length!==t);r=!0);}catch(u){i=!0,o=u}finally{try{!r&&a["return"]&&a["return"]()}finally{if(i)throw o}}return n}return function(t,n){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return e(t,n);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}();Object.defineProperty(n,"__esModule",{value:!0}),n["default"]=i;var s=e(32),a=r(s),u=e(44),c=r(u),l=e(46),f=r(l),p=e(45),d=r(p),h=e(41),m=r(h),v=e(28),y=(r(v),e(8)),g=r(y),b=e(16),w=r(b),x=e(40),_=(r(x),e(25)),k=r(_),C=(e(43),function(){}),A=(0,d["default"])(),E=window.AudioContext||window.webkitAudioContext},{16:16,25:25,28:28,32:32,40:40,41:41,43:43,44:44,45:45,46:46,8:8}]},{},[42]);