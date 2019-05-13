!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define("Lyticus",[],t):"object"==typeof exports?exports.Lyticus=t():e.Lyticus=t()}("undefined"!=typeof self?self:this,function(){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=1)}([function(e){e.exports={a:"1.0.18"}},function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return c});n(2),n(3);var r=n(0);function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(t){i(e,t,n[t])})}return e}function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var c=function(){function e(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),t||console.error("Must provide a property id"),n.getPath||(n.getPath=function(){return window.location.pathname}),this.version=r.a,this.propertyId=t,this.options=n,this.referrerTracked=!1,this.urlReferrerTracked=!1,this.events=[];var i=JSON.parse(JSON.stringify(o({},this,{events:void 0,referrerTracked:void 0,urlReferrerTracked:void 0})));window.__LYTICUS__=i,document.dispatchEvent(new CustomEvent("lyticus:configuration",{detail:i}))}var t,n,i;return t=e,(n=[{key:"track",value:function(e,t){var n=this;if(null!==document.body){if(!("doNotTrack"in navigator&&"1"===navigator.doNotTrack||"visibilityState"in document&&"prerender"===document.visibilityState)){var r=o({},e,{propertyId:this.propertyId,time:(new Date).getTime(),development:this.options.development});if(!this.options.development){var i=new XMLHttpRequest;i.open("POST","https://beacon.lyticus.com/event"),i.setRequestHeader("Content-Type","application/json"),i.send(JSON.stringify(r))}this.events.push(r),document.dispatchEvent(new CustomEvent("lyticus:track",{detail:r})),t&&setTimeout(t,300)}}else document.addEventListener("DOMContentLoaded",function(){n.track(e,t)})}},{key:"trackNavigator",value:function(){this.track({type:"navigator",screenWidth:window.innerWidth,language:window.navigator.language,userAgent:window.navigator.userAgent})}},{key:"trackPage",value:function(e){var t=void 0;this.referrerTracked||document.referrer.indexOf(window.location.protocol+"//"+window.location.hostname)<0&&(t=document.referrer,this.referrerTracked=!0);var n=void 0;if(!this.urlReferrerTracked)for(var r=["referrer","ref","source","utm_source"],o=new URLSearchParams(window.location.search),i=0;i<r.length;i++){var a=r[i],c=o.get(a);c&&(n=c,this.urlReferrerTracked=!0)}this.track({type:"page",path:e||this.options.getPath(),referrer:t,urlReferrer:n})}},{key:"trackClick",value:function(e,t){this.track({type:"click",path:t||this.options.getPath(),value:e})}},{key:"trackOutboundClick",value:function(e,t,n){this.track({type:"click",path:n||this.options.getPath(),value:e},function(){document.location=t})}},{key:"startHistoryMode",value:function(){var e,t,n=this,r=!1;if(Event)if(window.dispatchEvent)if(window.history)if(window.history.pushState){window.history.pushState=(e="pushState",t=window.history[e],function(){var n=t.apply(this,arguments),r=new Event(e);return r.arguments=arguments,window.dispatchEvent(r),n}),window.addEventListener("pushState",function(){n.trackPage()}),this.trackPage(),r=!0}else console.error("Unable to access window.history.pushState");else console.error("Unable to access window.history");else console.error("Unable to access window.dispatchEvent");else console.error("Unable to access Event");return r||console.error("History mode could not be enabled"),r}},{key:"getEvents",value:function(){return this.events}},{key:"getVersion",value:function(){return this.version}}])&&a(t.prototype,n),i&&a(t,i),e}()},function(e,t){!function(){if("undefined"!=typeof window)try{var e=new window.CustomEvent("test",{cancelable:!0});if(e.preventDefault(),!0!==e.defaultPrevented)throw new Error("Could not prevent default")}catch(e){var t=function(e,t){var n,r;return(t=t||{}).bubbles=!!t.bubbles,t.cancelable=!!t.cancelable,(n=document.createEvent("CustomEvent")).initCustomEvent(e,t.bubbles,t.cancelable,t.detail),r=n.preventDefault,n.preventDefault=function(){r.call(this);try{Object.defineProperty(this,"defaultPrevented",{get:function(){return!0}})}catch(e){this.defaultPrevented=!0}},n};t.prototype=window.Event.prototype,window.CustomEvent=t}}()},function(e,t,n){(function(e){!function(e){"use strict";var t,n=e.URLSearchParams&&e.URLSearchParams.prototype.get?e.URLSearchParams:null,r=n&&"a=1"===new n({a:1}).toString(),o=n&&"+"===new n("s=%2B").get("s"),i="__URLSearchParams__",a=!n||((t=new n).append("s"," &"),"s=+%26"===t.toString()),c=l.prototype,u=!(!e.Symbol||!e.Symbol.iterator);if(!(n&&r&&o&&a)){c.append=function(e,t){y(this[i],e,t)},c.delete=function(e){delete this[i][e]},c.get=function(e){var t=this[i];return e in t?t[e][0]:null},c.getAll=function(e){var t=this[i];return e in t?t[e].slice(0):[]},c.has=function(e){return e in this[i]},c.set=function(e,t){this[i][e]=[""+t]},c.toString=function(){var e,t,n,r,o=this[i],a=[];for(t in o)for(n=d(t),e=0,r=o[t];e<r.length;e++)a.push(n+"="+d(r[e]));return a.join("&")};var s=!!o&&n&&!r&&e.Proxy;Object.defineProperty(e,"URLSearchParams",{value:s?new Proxy(n,{construct:function(e,t){return new e(new l(t[0]).toString())}}):l});var f=e.URLSearchParams.prototype;f.polyfill=!0,f.forEach=f.forEach||function(e,t){var n=v(this.toString());Object.getOwnPropertyNames(n).forEach(function(r){n[r].forEach(function(n){e.call(t,n,r,this)},this)},this)},f.sort=f.sort||function(){var e,t,n,r=v(this.toString()),o=[];for(e in r)o.push(e);for(o.sort(),t=0;t<o.length;t++)this.delete(o[t]);for(t=0;t<o.length;t++){var i=o[t],a=r[i];for(n=0;n<a.length;n++)this.append(i,a[n])}},f.keys=f.keys||function(){var e=[];return this.forEach(function(t,n){e.push(n)}),h(e)},f.values=f.values||function(){var e=[];return this.forEach(function(t){e.push(t)}),h(e)},f.entries=f.entries||function(){var e=[];return this.forEach(function(t,n){e.push([n,t])}),h(e)},u&&(f[e.Symbol.iterator]=f[e.Symbol.iterator]||f.entries)}function l(e){((e=e||"")instanceof URLSearchParams||e instanceof l)&&(e=e.toString()),this[i]=v(e)}function d(e){var t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'\(\)~]|%20|%00/g,function(e){return t[e]})}function p(e){return e.replace(/[ +]/g,"%20").replace(/(%[a-f0-9]{2})+/gi,function(e){return decodeURIComponent(e)})}function h(t){var n={next:function(){var e=t.shift();return{done:void 0===e,value:e}}};return u&&(n[e.Symbol.iterator]=function(){return n}),n}function v(e){var t={};if("object"==typeof e)for(var n in e)e.hasOwnProperty(n)&&y(t,n,e[n]);else{0===e.indexOf("?")&&(e=e.slice(1));for(var r=e.split("&"),o=0;o<r.length;o++){var i=r[o],a=i.indexOf("=");-1<a?y(t,p(i.slice(0,a)),p(i.slice(a+1))):i&&y(t,p(i),"")}}return t}function y(e,t,n){var r="string"==typeof n?n:null!=n&&"function"==typeof n.toString?n.toString():JSON.stringify(n);t in e?e[t].push(r):e[t]=[r]}}(void 0!==e?e:"undefined"!=typeof window?window:this)}).call(this,n(4))},function(e,t){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(e){"object"==typeof window&&(n=window)}e.exports=n}]).default});