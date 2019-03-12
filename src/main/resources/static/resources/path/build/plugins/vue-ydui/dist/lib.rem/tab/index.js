/*! vue-ydui v1.2.2 by YDCSS (c) 2018 Licensed MIT */
!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.ydui=e():t.ydui=e()}(this,function(){return function(t){function e(i){if(n[i])return n[i].exports;var a=n[i]={exports:{},id:i,loaded:!1};return t[i].call(a.exports,a,a.exports,e),a.loaded=!0,a.exports}var n={};return e.m=t,e.c=n,e.p="/dist/",e(0)}({0:function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0}),e.TabPanel=e.Tab=void 0;var a=n(132),r=i(a),o=n(131),s=i(o);e.Tab=r.default,e.TabPanel=s.default},1:function(t,e){t.exports=function(t,e,n,i){var a,r=t=t||{},o=typeof t.default;"object"!==o&&"function"!==o||(a=t,r=t.default);var s="function"==typeof r?r.options:r;if(e&&(s.render=e.render,s.staticRenderFns=e.staticRenderFns),n&&(s._scopeId=n),i){var l=s.computed||(s.computed={});Object.keys(i).forEach(function(t){var e=i[t];l[t]=function(){return e}})}return{esModule:a,exports:r,options:s}}},2:function(t,e){t.exports=function(){var t=[];return t.toString=function(){for(var t=[],e=0;e<this.length;e++){var n=this[e];n[2]?t.push("@media "+n[2]+"{"+n[1]+"}"):t.push(n[1])}return t.join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var i={},a=0;a<this.length;a++){var r=this[a][0];"number"==typeof r&&(i[r]=!0)}for(a=0;a<e.length;a++){var o=e[a];"number"==typeof o[0]&&i[o[0]]||(n&&!o[2]?o[2]=n:n&&(o[2]="("+o[2]+") and ("+n+")"),t.push(o))}},t}},3:function(t,e,n){function i(t){for(var e=0;e<t.length;e++){var n=t[e],i=d[n.id];if(i){i.refs++;for(var a=0;a<i.parts.length;a++)i.parts[a](n.parts[a]);for(;a<n.parts.length;a++)i.parts.push(r(n.parts[a]));i.parts.length>n.parts.length&&(i.parts.length=n.parts.length)}else{for(var o=[],a=0;a<n.parts.length;a++)o.push(r(n.parts[a]));d[n.id]={id:n.id,refs:1,parts:o}}}}function a(){var t=document.createElement("style");return t.type="text/css",u.appendChild(t),t}function r(t){var e,n,i=document.querySelector('style[data-vue-ssr-id~="'+t.id+'"]');if(i){if(p)return h;i.parentNode.removeChild(i)}if(b){var r=v++;i=f||(f=a()),e=o.bind(null,i,r,!1),n=o.bind(null,i,r,!0)}else i=a(),e=s.bind(null,i),n=function(){i.parentNode.removeChild(i)};return e(t),function(i){if(i){if(i.css===t.css&&i.media===t.media&&i.sourceMap===t.sourceMap)return;e(t=i)}else n()}}function o(t,e,n,i){var a=n?"":i.css;if(t.styleSheet)t.styleSheet.cssText=m(e,a);else{var r=document.createTextNode(a),o=t.childNodes;o[e]&&t.removeChild(o[e]),o.length?t.insertBefore(r,o[e]):t.appendChild(r)}}function s(t,e){var n=e.css,i=e.media,a=e.sourceMap;if(i&&t.setAttribute("media",i),a&&(n+="\n/*# sourceURL="+a.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(a))))+" */"),t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}var l="undefined"!=typeof document,c=n(4),d={},u=l&&(document.head||document.getElementsByTagName("head")[0]),f=null,v=0,p=!1,h=function(){},b="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());t.exports=function(t,e,n){p=n;var a=c(t,e);return i(a),function(e){for(var n=[],r=0;r<a.length;r++){var o=a[r],s=d[o.id];s.refs--,n.push(s)}e?(a=c(t,e),i(a)):a=[];for(var r=0;r<n.length;r++){var s=n[r];if(0===s.refs){for(var l=0;l<s.parts.length;l++)s.parts[l]();delete d[s.id]}}}};var m=function(){var t=[];return function(e,n){return t[e]=n,t.filter(Boolean).join("\n")}}()},4:function(t,e){t.exports=function(t,e){for(var n=[],i={},a=0;a<e.length;a++){var r=e[a],o=r[0],s=r[1],l=r[2],c=r[3],d={id:t+":"+a,css:s,media:l,sourceMap:c};i[o]?i[o].parts.push(d):n.push(i[o]={id:o,parts:[d]})}return n}},5:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=function(){var t=function(t){t.preventDefault(),t.stopPropagation()},e=!1;return{lock:function(n){e||(e=!0,(n||document).addEventListener("touchmove",t))},unlock:function(n){e=!1,(n||document).removeEventListener("touchmove",t)}}}(),i=function(){return{lock:function(t){a&&c(t||document.body,"g-fix-ios-prevent-scroll")},unlock:function(t){a&&d(t||document.body,"g-fix-ios-prevent-scroll")}}}(),a=!!(window.navigator&&window.navigator.userAgent||"").match(/\(i[^;]+;( U;)? CPU.+Mac OS X/),r=function(t){var e=/^#([a-fA-F0-9]){3}(([a-fA-F0-9]){3})?$/,n=/^[rR][gG][bB][aA]\(\s*((25[0-5]|2[0-4]\d|1?\d{1,2})\s*,\s*){3}\s*(\.|\d+\.)?\d+\s*\)$/,i=/^[rR][gG][bB]\(\s*((25[0-5]|2[0-4]\d|1?\d{1,2})\s*,\s*){2}(25[0-5]|2[0-4]\d|1?\d{1,2})\s*\)$/;return e.test(t)||n.test(t)||i.test(t)},o=function(t){for(var e=t;e&&"HTML"!==e.tagName&&"BODY"!==e.tagName&&1===e.nodeType;){var n=document.defaultView.getComputedStyle(e).overflowY;if("scroll"===n||"auto"===n)return e;e=e.parentNode}return window},s=function(t,e){var n=t===window?document.body.offsetHeight:t.offsetHeight,i=t===window?0:t.getBoundingClientRect().top,a=e.getBoundingClientRect().top-i,r=a+e.offsetHeight;return a>=0&&a<n||r>0&&r<=n},l=function(t,e){return e=e||"",!(0===e.replace(/\s/g,"").length||!t)&&new RegExp(" "+e+" ").test(" "+t.className+" ")},c=function(t,e){l(t,e)||(t.className=""===t.className?e:t.className+" "+e)},d=function(t,e){if(l(t,e)){for(var n=" "+t.className.replace(/[\t\r\n]/g,"")+" ";n.indexOf(" "+e+" ")>=0;)n=n.replace(" "+e+" "," ");t.className=n.replace(/^\s+|\s+$/g,"")}},u=function(t){function e(n,i,a){if(n===i)return void("function"==typeof r&&r());var o=n+a>i?i:n+a;n>i&&(o=n-a<i?i:n-a),t===window?window.scrollTo(o,o):t.scrollTop=o,window.requestAnimationFrame(function(){return e(o,i,a)})}var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,i=arguments[2],a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:500,r=arguments[4];window.requestAnimationFrame||(window.requestAnimationFrame=window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.msRequestAnimationFrame||function(t){return window.setTimeout(t,1e3/60)});var o=Math.abs(n-i),s=Math.ceil(o/a*50);e(n,i,s)};e.pageScroll=n,e.preventScroll=i,e.isIOS=a,e.isColor=r,e.getScrollview=o,e.checkInview=s,e.addClass=c,e.removeClass=d,e.scrollTop=u},44:function(t,e,n){e=t.exports=n(2)(),e.push([t.id,'.yd-tab-box{overflow:auto;-webkit-overflow-scrolling:touch;background-color:#fff}.yd-tab-nav-nomal .yd-tab-nav{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex}.yd-tab-nav-nomal .yd-tab-nav .yd-tab-nav-item{width:1%;-webkit-box-flex:1;-webkit-flex:1;-ms-flex:1;flex:1;display:block}.yd-tab-nav-scoll .yd-tab-nav .yd-tab-nav-item{padding:0 20px;display:inline-block}.yd-tab-nav{position:relative;z-index:0}.yd-tab-nav:after{content:"";position:absolute;z-index:3;bottom:0;left:0;width:100%;border-bottom:1px solid #b2b2b2;-webkit-transform:scaleY(.5);transform:scaleY(.5);-webkit-transform-origin:0 0;transform-origin:0 0}.yd-tab-nav-item{position:relative;text-align:center;color:#585858;font-size:.28rem;line-height:.85rem;background-color:#fff}.yd-tab-nav-item:active{background-color:#f7f7f7}.yd-tab-nav-item>a{display:inherit;color:inherit}.yd-tab-nav-item:not(:last-child):after{position:absolute;top:35%;right:0;content:"";width:1px;height:30%;-webkit-transform:scaleX(.5);transform:scaleX(.5);border-right:1px solid #d9d9d9}.yd-tab-nav .yd-tab-active{color:currentColor;background-color:#fff}.yd-tab-nav .yd-tab-active:active{background-color:#fff}.yd-tab-nav .yd-tab-active:before{content:"";width:70%;height:2px;position:absolute;left:50%;bottom:0;margin-left:-35%;z-index:4;background-color:currentColor}.yd-tab-panel{position:relative;overflow:hidden;background-color:#fff}.yd-tab-panel-item{width:100%;position:absolute;top:0;-webkit-transform:translateX(-100%);transform:translateX(-100%)}.yd-tab-panel-item.yd-tab-active{position:relative;-webkit-transition:-webkit-transform .15s;transition:-webkit-transform .15s;transition:transform .15s;transition:transform .15s,-webkit-transform .15s;-webkit-transform:translateX(0);transform:translateX(0)}.yd-tab-panel-item.yd-tab-active~.yd-tab-panel-item{-webkit-transform:translateX(100%);transform:translateX(100%)}',""])},131:function(t,e,n){var i=n(1)(n(304),n(202),null,null);t.exports=i.exports},132:function(t,e,n){n(215);var i=n(1)(n(305),n(154),null,null);t.exports=i.exports},154:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"yd-tab"},[n("div",{staticClass:"yd-tab-box",class:t.horizontalScroll?"yd-tab-nav-scoll":"yd-tab-nav-nomal"},[n("ul",{directives:[{name:"show",rawName:"v-show",value:t.navList.length>0,expression:"navList.length > 0"}],ref:"navbox",staticClass:"yd-tab-nav",style:{color:t.activeColor,width:t.width}},t._l(t.navList,function(e,i){return n("li",{key:i,staticClass:"yd-tab-nav-item",class:e._uid==t.activeIndex||i===t.activeIndex?"yd-tab-active":"",on:{click:function(n){t.changeHandler(e.label,i,e._uid)}}},[n("a",{attrs:{href:"javascript:"}},[t._v(t._s(e.label))])])}))]),t._v(" "),n("div",{staticClass:"yd-tab-panel"},[t._t("default")],2)])},staticRenderFns:[]}},202:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"yd-tab-panel-item",class:t.classes},[t._t("default")],2)},staticRenderFns:[]}},215:function(t,e,n){var i=n(44);"string"==typeof i&&(i=[[t.id,i,""]]),i.locals&&(t.exports=i.locals);n(3)("7f8f852c",i,!0)},304:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"yd-tab-panel",data:function(){return{isCurrent:!1}},props:{label:String,active:Boolean,tabkey:[String,Number]},computed:{classes:function(){return this.$parent.activeIndex===this._uid||this.isCurrent?"yd-tab-active":""}},watch:{active:function(){this.$parent.init()},label:function(){this.$parent.init()}},mounted:function(){var t=this;this.$nextTick(function(){t.$parent.init()})}}},305:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(5);e.default={name:"yd-tab",data:function(){return{navList:[],activeIndex:this.value||0,index:0,width:"auto",currentIndex:0}},props:{value:Number,callback:Function,itemClick:Function,preventDefault:{type:Boolean,default:!0},activeColor:{validator:function(t){return!t||(0,i.isColor)(t)},default:"#FF5E53"},horizontalScroll:{type:Boolean,default:!1}},watch:{value:function(t){var e=this,n=this.$children.filter(function(t){return"yd-tab-panel"===t.$options.name});t>=n.length-1&&(t=n.length-1),t<0&&(t=0),this.activeIndex=this.index=t>n.length-1?n.length-1:t;var i="";n.forEach(function(n,a){t===a?(e.$set(n,"isCurrent",!0),i=n.label,n.tabkey&&(t=n.tabkey)):e.$set(n,"isCurrent",!1)}),this.callback&&this.callback(i,t)}},methods:{init:function(){var t=this,e=this.$children.filter(function(t){return"yd-tab-panel"===t.$options.name});if(this.navList=[],e.forEach(function(n,i){t.navList.push({_uid:n._uid,label:n.label,tabkey:n.tabkey}),n.active||t.activeIndex===i?(t.activeIndex=t.index=n._uid,t.currentIndex=i):i>=e.length&&(t.activeIndex=t.index=e[0]._uid)}),this.horizontalScroll){var n=1;this.$nextTick(function(){var e=t.getChildNodes(t.$refs.navbox);e.forEach(function(t){n+=t.offsetWidth}),t.width=n+"px"})}},getChildNodes:function(t){if(!t)return[];for(var e=t.children||t.childNodes,n=[],i=0,a=e.length;i<a;i++)1===e[i].nodeType&&n.push(e[i]);return n},changeHandler:function(t,e,n){return this.preventDefault?(this.index!==n&&(this.activeIndex=this.index=n,this.$emit("input",e)),this.value||0===this.value||this.currentIndex===e||this.callback&&this.callback(t,e),void(this.currentIndex=e)):void(this.itemClick&&this.itemClick(e))}}}}})});