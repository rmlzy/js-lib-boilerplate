/*!
 * 
 *   @hodgef/js-library-boilerplate-basic v1.5.91
 *   https://github.com/hodgef/js-library-boilerplate-basic
 *
 *   Copyright (c) Francisco Hodge (https://github.com/hodgef) and project contributors.
 *
 *   This source code is licensed under the MIT license found in the
 *   LICENSE file in the root directory of this source tree.
 *
 */
!function(e,n){"object"==typeof exports&&"object"==typeof module?module.exports=n():"function"==typeof define&&define.amd?define([],n):"object"==typeof exports?exports.MyLibrary=n():e.MyLibrary=n()}(self,(function(){return(()=>{"use strict";var e={424:(e,n,t)=>{t.d(n,{Z:()=>d});var r=t(15),o=t.n(r),a=t(645),i=t.n(a),c=t(667),u=t.n(c),s=new URL(t(204),t.b),l=i()(o()),f=u()(s);l.push([e.id,"html,\nbody {\n  margin: 0;\n  padding: 0;\n  font-family: sans-serif;\n  height: 100%;\n}\n\nh1 {\n  margin: 0;\n  font-weight: 300;\n}\n\n#root {\n  background: url("+f+") no-repeat 98% 2%;\n  padding: 20px;\n  height: 100%;\n  box-sizing: border-box;\n}\n","",{version:3,sources:["webpack://./src/index.css"],names:[],mappings:"AAAA;;EAEE,SAAS;EACT,UAAU;EACV,uBAAuB;EACvB,YAAY;AACd;;AAEA;EACE,SAAS;EACT,gBAAgB;AAClB;;AAEA;EACE,oEAA6C;EAC7C,aAAa;EACb,YAAY;EACZ,sBAAsB;AACxB",sourcesContent:['html,\nbody {\n  margin: 0;\n  padding: 0;\n  font-family: sans-serif;\n  height: 100%;\n}\n\nh1 {\n  margin: 0;\n  font-weight: 300;\n}\n\n#root {\n  background: url("image.png") no-repeat 98% 2%;\n  padding: 20px;\n  height: 100%;\n  box-sizing: border-box;\n}\n'],sourceRoot:""}]);const d=l},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t=e(n);return n[2]?"@media ".concat(n[2]," {").concat(t,"}"):t})).join("")},n.i=function(e,t,r){"string"==typeof e&&(e=[[null,e,""]]);var o={};if(r)for(var a=0;a<this.length;a++){var i=this[a][0];null!=i&&(o[i]=!0)}for(var c=0;c<e.length;c++){var u=[].concat(e[c]);r&&o[u[0]]||(t&&(u[2]?u[2]="".concat(t," and ").concat(u[2]):u[2]=t),n.push(u))}},n}},15:e=>{function n(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==t)return;var r,o,a=[],i=!0,c=!1;try{for(t=t.call(e);!(i=(r=t.next()).done)&&(a.push(r.value),!n||a.length!==n);i=!0);}catch(e){c=!0,o=e}finally{try{i||null==t.return||t.return()}finally{if(c)throw o}}return a}(e,n)||function(e,n){if(!e)return;if("string"==typeof e)return t(e,n);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return t(e,n)}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function t(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}e.exports=function(e){var t=n(e,4),r=t[1],o=t[3];if(!o)return r;if("function"==typeof btoa){var a=btoa(unescape(encodeURIComponent(JSON.stringify(o)))),i="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(a),c="/*# ".concat(i," */"),u=o.sources.map((function(e){return"/*# sourceURL=".concat(o.sourceRoot||"").concat(e," */")}));return[r].concat(u).concat([c]).join("\n")}return[r].join("\n")}},667:e=>{e.exports=function(e,n){return n||(n={}),e?(e=String(e.__esModule?e.default:e),/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),n.hash&&(e+=n.hash),/["'() \t\n]|(%20)/.test(e)||n.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e):e}},379:e=>{var n=[];function t(e){for(var t=-1,r=0;r<n.length;r++)if(n[r].identifier===e){t=r;break}return t}function r(e,r){for(var a={},i=[],c=0;c<e.length;c++){var u=e[c],s=r.base?u[0]+r.base:u[0],l=a[s]||0,f="".concat(s," ").concat(l);a[s]=l+1;var d=t(f),p={css:u[1],media:u[2],sourceMap:u[3]};-1!==d?(n[d].references++,n[d].updater(p)):n.push({identifier:f,updater:o(p,r),references:1}),i.push(f)}return i}function o(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap)return;t.update(e=n)}else t.remove()}}e.exports=function(e,o){var a=r(e=e||[],o=o||{});return function(e){e=e||[];for(var i=0;i<a.length;i++){var c=t(a[i]);n[c].references--}for(var u=r(e,o),s=0;s<a.length;s++){var l=t(a[s]);0===n[l].references&&(n[l].updater(),n.splice(l,1))}a=u}}},569:e=>{var n={};e.exports=function(e,t){var r=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n),n}},565:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},795:e=>{e.exports=function(e){var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var r=t.css,o=t.media,a=t.sourceMap;o?e.setAttribute("media",o):e.removeAttribute("media"),a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),n.styleTagTransform(r,e)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}},204:(e,n,t)=>{e.exports=t.p+"822bbfdce814d98879ba.png"}},n={};function t(r){var o=n[r];if(void 0!==o)return o.exports;var a=n[r]={id:r,exports:{}};return e[r](a,a.exports,t),a.exports}t.m=e,t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),t.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e;t.g.importScripts&&(e=t.g.location+"");var n=t.g.document;if(!e&&n&&(n.currentScript&&(e=n.currentScript.src),!e)){var r=n.getElementsByTagName("script");r.length&&(e=r[r.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=e})(),t.b=document.baseURI||self.location.href;var r={};return(()=>{t.r(r),t.d(r,{default:()=>b});var e=t(379),n=t.n(e),o=t(795),a=t.n(o),i=t(569),c=t.n(i),u=t(565),s=t.n(u),l=t(216),f=t.n(l),d=t(589),p=t.n(d),h=t(424),m={};m.styleTagTransform=p(),m.setAttributes=s(),m.insert=c().bind(null,"head"),m.domAPI=a(),m.insertStyleElement=f();n()(h.Z,m);h.Z&&h.Z.locals&&h.Z.locals;const b=function e(){var n,t,r;!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,e),r=function(){console.log("Library method fired")},(t="myMethod")in(n=this)?Object.defineProperty(n,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):n[t]=r,console.log("Library constructor loaded")}})(),r})()}));
//# sourceMappingURL=index.js.map