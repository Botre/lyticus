!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define("Lyticus",[],e):"object"==typeof exports?exports.Lyticus=e():t.Lyticus=e()}("undefined"!=typeof self?self:this,function(){return function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=0)}([function(t,e,n){"use strict";n.r(e),n.d(e,"default",function(){return i});n(1);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var i=function(){function t(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),e||console.error("Must provide a property id"),n.getPath||(n.getPath=function(){return window.location.pathname}),this.propertyId=e,this.options=n,this.referrerTracked=!1,this.urlReferrerTracked=!1}var e,n,i;return e=t,(n=[{key:"track",value:function(t,e){var n=this;if(null!==document.body){if(!("doNotTrack"in navigator&&"1"===navigator.doNotTrack||"visibilityState"in document&&"prerender"===document.visibilityState)){var o=function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},o=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(n).filter(function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),o.forEach(function(e){r(t,e,n[e])})}return t}({},t,{propertyId:this.propertyId});if(!this.options.development){var i=new XMLHttpRequest;i.open("POST","https://beacon.lyticus.com/event"),i.setRequestHeader("Content-Type","application/json"),i.send(JSON.stringify(o))}CustomEvent&&document.dispatchEvent(new CustomEvent("lyticus:track",{detail:o})),e&&setTimeout(e,300)}}else document.addEventListener("DOMContentLoaded",function(){n.track(t,e)})}},{key:"trackNavigator",value:function(){this.track({type:"navigator",screenWidth:window.innerWidth,language:window.navigator.language,userAgent:window.navigator.userAgent})}},{key:"trackPage",value:function(t){var e=void 0;this.referrerTracked||document.referrer.indexOf(window.location.protocol+"//"+window.location.hostname)<0&&(e=document.referrer,this.referrerTracked=!0);var n=void 0;if(!this.urlReferrerTracked)for(var r=["referrer","ref","source","utm_source"],o=new URLSearchParams(window.location.search),i=0;i<r.length;i++){var a=r[i],c=o.get(a);c&&(n=c,this.urlReferrerTracked=!0)}this.track({type:"page",path:t||this.options.getPath(),referrer:e,urlReferrer:n})}},{key:"trackClick",value:function(t,e){this.track({type:"click",path:e||this.options.getPath(),value:t})}},{key:"trackOutboundClick",value:function(t,e,n){this.track({type:"click",path:n||this.options.getPath(),value:t},function(){document.location=e})}},{key:"startHistoryMode",value:function(){var t,e,n=this,r=!1;if(Event)if(window.dispatchEvent)if(window.history)if(window.history.pushState){window.history.pushState=(t="pushState",e=window.history[t],function(){var n=e.apply(this,arguments),r=new Event(t);return r.arguments=arguments,window.dispatchEvent(r),n}),window.addEventListener("pushState",function(){n.trackPage()}),this.trackPage(),r=!0}else console.error("Unable to access window.history.pushState");else console.error("Unable to access window.history");else console.error("Unable to access window.dispatchEvent");else console.error("Unable to access Event");return r||console.error("History mode could not be enabled"),r}}])&&o(e.prototype,n),i&&o(e,i),t}()},function(t,e,n){(function(t){!function(t){"use strict";var e,n=t.URLSearchParams&&t.URLSearchParams.prototype.get?t.URLSearchParams:null,r=n&&"a=1"===new n({a:1}).toString(),o=n&&"+"===new n("s=%2B").get("s"),i="__URLSearchParams__",a=!n||((e=new n).append("s"," &"),"s=+%26"===e.toString()),c=l.prototype,u=!(!t.Symbol||!t.Symbol.iterator);if(!(n&&r&&o&&a)){c.append=function(t,e){y(this[i],t,e)},c.delete=function(t){delete this[i][t]},c.get=function(t){var e=this[i];return t in e?e[t][0]:null},c.getAll=function(t){var e=this[i];return t in e?e[t].slice(0):[]},c.has=function(t){return t in this[i]},c.set=function(t,e){this[i][t]=[""+e]},c.toString=function(){var t,e,n,r,o=this[i],a=[];for(e in o)for(n=d(e),t=0,r=o[e];t<r.length;t++)a.push(n+"="+d(r[t]));return a.join("&")};var s=!!o&&n&&!r&&t.Proxy;Object.defineProperty(t,"URLSearchParams",{value:s?new Proxy(n,{construct:function(t,e){return new t(new l(e[0]).toString())}}):l});var f=t.URLSearchParams.prototype;f.polyfill=!0,f.forEach=f.forEach||function(t,e){var n=v(this.toString());Object.getOwnPropertyNames(n).forEach(function(r){n[r].forEach(function(n){t.call(e,n,r,this)},this)},this)},f.sort=f.sort||function(){var t,e,n,r=v(this.toString()),o=[];for(t in r)o.push(t);for(o.sort(),e=0;e<o.length;e++)this.delete(o[e]);for(e=0;e<o.length;e++){var i=o[e],a=r[i];for(n=0;n<a.length;n++)this.append(i,a[n])}},f.keys=f.keys||function(){var t=[];return this.forEach(function(e,n){t.push(n)}),h(t)},f.values=f.values||function(){var t=[];return this.forEach(function(e){t.push(e)}),h(t)},f.entries=f.entries||function(){var t=[];return this.forEach(function(e,n){t.push([n,e])}),h(t)},u&&(f[t.Symbol.iterator]=f[t.Symbol.iterator]||f.entries)}function l(t){((t=t||"")instanceof URLSearchParams||t instanceof l)&&(t=t.toString()),this[i]=v(t)}function d(t){var e={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(t).replace(/[!'\(\)~]|%20|%00/g,function(t){return e[t]})}function p(t){return t.replace(/[ +]/g,"%20").replace(/(%[a-f0-9]{2})+/gi,function(t){return decodeURIComponent(t)})}function h(e){var n={next:function(){var t=e.shift();return{done:void 0===t,value:t}}};return u&&(n[t.Symbol.iterator]=function(){return n}),n}function v(t){var e={};if("object"==typeof t)for(var n in t)t.hasOwnProperty(n)&&y(e,n,t[n]);else{0===t.indexOf("?")&&(t=t.slice(1));for(var r=t.split("&"),o=0;o<r.length;o++){var i=r[o],a=i.indexOf("=");-1<a?y(e,p(i.slice(0,a)),p(i.slice(a+1))):i&&y(e,p(i),"")}}return e}function y(t,e,n){var r="string"==typeof n?n:null!=n&&"function"==typeof n.toString?n.toString():JSON.stringify(n);e in t?t[e].push(r):t[e]=[r]}}(void 0!==t?t:"undefined"!=typeof window?window:this)}).call(this,n(2))},function(t,e){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(t){"object"==typeof window&&(n=window)}t.exports=n}]).default});