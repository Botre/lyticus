!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define("Lyticus",[],t):"object"==typeof exports?exports.Lyticus=t():e.Lyticus=t()}("undefined"!=typeof self?self:this,function(){return function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}n.r(t),n.d(t,"default",function(){return i});var i=function(){function e(t){var n,o,r=this,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),i.getPath||(i.getPath=function(){return window.location.pathname}),i.historyMode){var a=!1;if(Event)if(window.dispatchEvent)if(window.history)if(window.history.pushState){a=!0;window.history.pushState=(n="pushState",o=window.history[n],function(){var e=o.apply(this,arguments),t=new Event(n);return t.arguments=arguments,window.dispatchEvent(t),e}),window.addEventListener("pushState",function(){r.trackPage()})}else console.error("Unable to access window.history.pushState");else console.error("Unable to access window.history");else console.error("Unable to access window.dispatchEvent");else console.error("Unable to access Event");a||console.error("History mode could not be enabled")}this.propertyId=t,this.options=i,this.referrerTracked=!1}var t,n,i;return t=e,(n=[{key:"track",value:function(e,t){var n=this;if(null!==document.body){var r,i,a,c=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(t){o(e,t,n[t])})}return e}({},e,{propertyId:this.propertyId});if(this.options.development)console.log(c);else{var u="doNotTrack"in navigator&&"1"===navigator.doNotTrack,s="visibilityState"in document&&"prerender"===document.visibilityState;u||s||(r="https://beacon.lyticus.com/event",i=c,(a=new XMLHttpRequest).open("POST",r),a.setRequestHeader("Content-Type","application/json"),a.send(JSON.stringify(i)))}t&&setTimeout(t,300)}else document.addEventListener("DOMContentLoaded",function(){n.track(e,t)})}},{key:"trackNavigator",value:function(){this.track({type:"navigator",screenWidth:window.innerWidth,language:window.navigator.language,userAgent:window.navigator.userAgent})}},{key:"trackPage",value:function(e){var t=void 0;this.referrerTracked||document.referrer.indexOf(window.location.protocol+"//"+window.location.hostname)<0&&(t=document.referrer,this.referrerTracked=!0);this.track({type:"page",path:e||this.options.getPath(),referrer:t})}},{key:"trackClick",value:function(e,t){this.track({type:"click",path:t||this.options.getPath(),value:e})}},{key:"trackOutboundClick",value:function(e,t,n){this.track({type:"click",path:n||this.options.getPath(),value:e},function(){document.location=t})}}])&&r(t.prototype,n),i&&r(t,i),e}()}]).default});