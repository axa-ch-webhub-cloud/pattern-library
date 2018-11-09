var StyleGuideWebComponent=function(){"use strict";function e(e,t){return e(t={exports:{}},t.exports),t.exports}var t=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable;(function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map(function(e){return t[e]}).join(""))return!1;var o={};return"abcdefghijklmnopqrst".split("").forEach(function(e){o[e]=e}),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},o)).join("")}catch(e){return!1}})()&&Object.assign;var s="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},u=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},r=function(){function o(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(e,t,n){return t&&o(e.prototype,t),n&&o(e,n),e}}(),a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},d=function e(t,n,o){null===t&&(t=Function.prototype);var r=Object.getOwnPropertyDescriptor(t,n);if(void 0===r){var i=Object.getPrototypeOf(t);return null===i?void 0:e(i,n,o)}if("value"in r)return r.value;var a=r.get;return void 0!==a?a.call(o):void 0},p=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)},c=function(e,t){var n={};for(var o in e)0<=t.indexOf(o)||Object.prototype.hasOwnProperty.call(e,o)&&(n[o]=e[o]);return n},h=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},f=function e(t,n,o,r){var i=Object.getOwnPropertyDescriptor(t,n);if(void 0===i){var a=Object.getPrototypeOf(t);null!==a&&e(a,n,o,r)}else if("value"in i&&i.writable)i.value=o;else{var s=i.set;void 0!==s&&s.call(r,o)}return o},i=function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var n=[],o=!0,r=!1,i=void 0;try{for(var a,s=e[Symbol.iterator]();!(o=(a=s.next()).done)&&(n.push(a.value),!t||n.length!==t);o=!0);}catch(e){r=!0,i=e}finally{try{!o&&s.return&&s.return()}finally{if(r)throw i}}return n}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")},k=function(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)};function l(){}var v=e(function(e){e.exports=function(){function e(e,t,n,o,r,i){if(i!==s){var a=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw a.name="Invariant Violation",a}}function t(){return e}var n={array:e.isRequired=e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t};return n.checkPropTypes=l,n.PropTypes=n}()}),b=0;function y(e,t){var n=e[t];return"function"==typeof n&&(e[t]=function(t){function n(){return t.apply(void 0,arguments)}return 0===b&&(b++,Object.keys(t).map(function(e){return n[e]=t[e],e}).reduce(y,n),b--),n}(n)),e}var _=v;Object.keys(_).reduce(y,_);var g=_.oneOf(["left","center","right"]),C=_.oneOfType([_.string,_.number]),O=_.oneOfType([_.arrayOf(P),_.shape({cells:_.arrayOf(P)})]),x=_.oneOfType([_.arrayOf(S),_.shape({cells:_.arrayOf(S),action:_.bool})]),w=_.oneOfType([_.arrayOf(R),_.shape({cells:_.arrayOf(R)})]),N=(_.oneOf(["row","col","rowgroup","colgroup","auto"]),_.oneOfType([_.arrayOf(P),_.arrayOf(O)]),_.oneOfType([_.arrayOf(S),_.arrayOf(x)]),_.oneOfType([_.arrayOf(R),_.arrayOf(w)]),_.oneOf(["up","down"])),A=_.oneOf(["left","right"]),T=_.oneOf(["ok","pending","error","unknown"]),E={text:C,value:_.any,rowspan:_.number,colspan:_.number,scope:null,align:g,dense:_.bool},j=_.oneOfType([_.string,_.number,_.shape(E)]),P=_.oneOfType([j,_.shape(a({},E,{sort:N,sortActive:_.bool}))]),S=_.oneOfType([j,_.shape(a({},E,{float:A,action:_.bool,strong:_.bool,bold:_.bool,state:T}))]),R=_.oneOfType([j,_.shape(a({},E,{float:A}))]);function D(o){function e(e,t,n){return null==e[t]?null:o(e,t,n)}return e.isRequired=o,e}var L=/^[a-z]{2,4}(-([A-Z][a-z]{3}|[0-9]{3}))?(-([A-Z]{2}|[0-9]{3}))?$/;D(function(e,t,n){if(!L.test(e[t]))return new Error("Invalid prop `"+t+"` supplied to `"+n+"`, expected a valid locale.")});_.oneOf(["top","bottom"]);var U=D(function(e,t,n){try{new window.URL(e[t],function(){if(document.baseURI)return document.baseURI;var e=document.getElementsByName("base");return e.length&&e[0].href?e[0].href:window.location.href}())}catch(e){return new Error("Invalid prop `"+t+"` supplied to `"+n+"`, expected a valid URL. "+e.message)}return null}),M=e(function(e){!function(){var i={}.hasOwnProperty;function a(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var o=void 0===n?"undefined":m(n);if("string"===o||"number"===o)e.push(n);else if(Array.isArray(n))e.push(a.apply(null,n));else if("object"===o)for(var r in n)i.call(n,r)&&n[r]&&e.push(r)}}return e.join(" ")}e.exports?e.exports=a:window.classNames=a}()}),I="@-webkit-keyframes fadeOutRightInLeft {\n  0% {\n    opacity: 1; }\n  50% {\n    opacity: 0;\n    -webkit-transform: translate3d(100%, 0, 0);\n            transform: translate3d(100%, 0, 0); }\n  51% {\n    opacity: 0;\n    -webkit-transform: translate3d(-100%, 0, 0);\n            transform: translate3d(-100%, 0, 0); }\n  100% {\n    opacity: 1;\n    -webkit-transform: none;\n            transform: none; } }\n\n@keyframes fadeOutRightInLeft {\n  0% {\n    opacity: 1; }\n  50% {\n    opacity: 0;\n    -webkit-transform: translate3d(100%, 0, 0);\n            transform: translate3d(100%, 0, 0); }\n  51% {\n    opacity: 0;\n    -webkit-transform: translate3d(-100%, 0, 0);\n            transform: translate3d(-100%, 0, 0); }\n  100% {\n    opacity: 1;\n    -webkit-transform: none;\n            transform: none; } }\n\n.m-header-mobile-navigation {\n  display: block;\n  text-align: left; }\n  .m-header-mobile-navigation:first-child {\n    margin-top: -20px; }\n\n.m-header-mobile-navigation--relative {\n  position: relative;\n  overflow: hidden; }\n\n.m-header-mobile-navigation__nav {\n  display: block;\n  background: #fff; }\n  .m-header-mobile-navigation__nav .m-header-mobile-navigation__nav {\n    position: absolute;\n    left: 0;\n    right: 0;\n    top: 0;\n    z-index: 1050;\n    min-height: 100%;\n    -webkit-transform: translateX(110%);\n            transform: translateX(110%);\n    -webkit-transition: -webkit-transform 0.2s ease;\n    transition: -webkit-transform 0.2s ease;\n    transition: transform 0.2s ease;\n    transition: transform 0.2s ease, -webkit-transform 0.2s ease; }\n    @media (min-width: 576px) {\n      .m-header-mobile-navigation__nav .m-header-mobile-navigation__nav {\n        left: 10px;\n        -webkit-box-shadow: -5px 0 10px -5px rgba(0, 0, 0, 0.3);\n                box-shadow: -5px 0 10px -5px rgba(0, 0, 0, 0.3); } }\n  .is-header-mobile-navigation-nav-open > .m-header-mobile-navigation__nav {\n    -webkit-transform: translateX(0);\n            transform: translateX(0); }\n\n.m-header-mobile-navigation--gpu .m-header-mobile-navigation__nav .m-header-mobile-navigation--gpu .m-header-mobile-navigation__nav {\n  -webkit-transform: translate3d(0, 0, 0);\n          transform: translate3d(0, 0, 0);\n  -webkit-backface-visibility: hidden;\n          backface-visibility: hidden;\n  -webkit-transform: translate3d(110%, 0, 0);\n          transform: translate3d(110%, 0, 0); }\n\n.is-header-mobile-navigation-nav-open > .m-header-mobile-navigation--gpu .m-header-mobile-navigation__nav {\n  -webkit-transform: translate3d(0, 0, 0);\n          transform: translate3d(0, 0, 0); }\n\n.m-header-mobile-navigation__list {\n  padding: 0;\n  margin: 0;\n  list-style-type: none; }\n\n.m-header-mobile-navigation__list-item {\n  display: block;\n  border-bottom: 1px solid #ccc; }\n  .m-header-mobile-navigation__list-item:first-child {\n    border-top: 1px solid #ccc; }\n\n.m-header-mobile-navigation__category,\n.m-header-mobile-navigation__back,\n.m-header-mobile-navigation__list-link {\n  padding-right: 15px;\n  padding-left: 15px;\n  width: 100%;\n  margin-right: auto;\n  margin-left: auto;\n  /* Adds a hyphen where the word breaks, if supported (No Blink) */\n  -webkit-hyphens: auto;\n      -ms-hyphens: auto;\n          hyphens: auto;\n  /* These are technically the same, but use both */\n  overflow-wrap: break-word;\n  word-wrap: break-word;\n  color: #00008f;\n  cursor: pointer;\n  position: relative;\n  display: block;\n  padding-left: 60px;\n  padding-right: 40px;\n  text-transform: uppercase; }\n  .m-header-mobile-navigation__category.is-header-mobile-navigation-active, .m-header-mobile-navigation__category:hover, .m-header-mobile-navigation__category:active, .m-header-mobile-navigation__category:focus,\n  .m-header-mobile-navigation__back.is-header-mobile-navigation-active,\n  .m-header-mobile-navigation__back:hover,\n  .m-header-mobile-navigation__back:active,\n  .m-header-mobile-navigation__back:focus,\n  .m-header-mobile-navigation__list-link.is-header-mobile-navigation-active,\n  .m-header-mobile-navigation__list-link:hover,\n  .m-header-mobile-navigation__list-link:active,\n  .m-header-mobile-navigation__list-link:focus {\n    color: #00005b; }\n\n.m-header-mobile-navigation__category,\n.m-header-mobile-navigation__back {\n  background: transparent;\n  border: none;\n  background: transparent;\n  text-align: left; }\n  .m-header-mobile-navigation__category:hover, .m-header-mobile-navigation__category:active, .m-header-mobile-navigation__category:focus,\n  .m-header-mobile-navigation__back:hover,\n  .m-header-mobile-navigation__back:active,\n  .m-header-mobile-navigation__back:focus {\n    outline: none;\n    cursor: pointer; }\n\n.m-header-mobile-navigation__category,\n.m-header-mobile-navigation__list-link {\n  font-size: 14px;\n  font-weight: 600;\n  line-height: 1.5;\n  letter-spacing: 0.02em;\n  padding-top: 20px;\n  padding-bottom: 20px; }\n  @media (min-width: 576px) {\n    .m-header-mobile-navigation__category,\n    .m-header-mobile-navigation__list-link {\n      font-size: 16px; } }\n\n.m-header-mobile-navigation__category {\n  padding-right: 70px; }\n\n.m-header-mobile-navigation__back {\n  font-size: 20px;\n  font-weight: 700;\n  line-height: 1.5;\n  letter-spacing: 0;\n  padding-top: 30px;\n  padding-bottom: 30px;\n  padding-left: 105px; }\n  @media (min-width: 576px) {\n    .m-header-mobile-navigation__back {\n      font-size: 24px;\n      line-height: 1.2; } }\n\n.m-header-mobile-navigation__icon-next,\n.m-header-mobile-navigation__icon-back {\n  width: 15px;\n  height: 15px;\n  display: block;\n  fill: currentColor;\n  position: absolute;\n  top: 50%;\n  margin-top: -7.5px;\n  pointer-events: none; }\n\n.m-header-mobile-navigation__icon-next {\n  right: 40px;\n  -webkit-transform: rotate(-90deg);\n          transform: rotate(-90deg); }\n\n.m-header-mobile-navigation__icon-back {\n  left: 60px;\n  -webkit-transform: rotate(90deg);\n          transform: rotate(90deg); }\n",V=/\n[\s]+$/,F=/^\n[\s]+/,q=/[\s]+$/,B=/^[\s]+/,z=/[\n\s]+/g,H=["a","abbr","b","bdi","bdo","br","cite","data","dfn","em","i","kbd","mark","q","rp","rt","rtc","ruby","s","amp","small","span","strong","sub","sup","time","u","var","wbr"],K=["code","pre","textarea"],$=function e(t,n){if(Array.isArray(n))for(var o,r,i=t.nodeName.toLowerCase(),a=!1,s=0,l=n.length;s<l;s++){var c=n[s];if(Array.isArray(c))e(t,c);else{("number"==typeof c||"boolean"==typeof c||"function"==typeof c||c instanceof Date||c instanceof RegExp)&&(c=c.toString());var u=t.childNodes[t.childNodes.length-1];if("string"==typeof c)a=!0,u&&"#text"===u.nodeName?u.nodeValue+=c:(c=document.createTextNode(c),t.appendChild(c),u=c),s===l-1&&(a=!1,-1===H.indexOf(i)&&-1===K.indexOf(i)?""===(o=u.nodeValue.replace(F,"").replace(q,"").replace(V,"").replace(z," "))?t.removeChild(u):u.nodeValue=o:-1===K.indexOf(i)&&(r=0===s?"":" ",o=u.nodeValue.replace(F,r).replace(B," ").replace(q,"").replace(V,"").replace(z," "),u.nodeValue=o));else if(c&&c.nodeType){a&&(a=!1,-1===H.indexOf(i)&&-1===K.indexOf(i)?""===(o=u.nodeValue.replace(F,"").replace(V,"").replace(z," "))?t.removeChild(u):u.nodeValue=o:-1===K.indexOf(i)&&(o=u.nodeValue.replace(B," ").replace(F,"").replace(V,"").replace(z," "),u.nodeValue=o));var d=c.nodeName;d&&(i=d.toLowerCase()),t.appendChild(c)}}}};function W(e){var t,n,o,r,i=e.name,a=e.url,s=void 0===a?"":a,l=e.isActive,c=e.items,u=!!c,d={"is-header-mobile-navigation-active":l},p=M("m-header-mobile-navigation__category","js-header-mobile-navigation__category",d),h=M("m-header-mobile-navigation__list-link","js-header-mobile-navigation__list-link","js-header-mobile-close",d);return(t=document.createElement("li")).setAttribute("class","m-header-mobile-navigation__list-item"),$(t,["\n      ",u?[(o=document.createElement("button"),o.setAttribute("type","button"),o.setAttribute("class",""+String(p)),$(o,["\n          ",i,"\n          ",(n=document.createElement("axa-icon"),n.setAttribute("icon","angle-bracket-down"),n.setAttribute("classes","m-header-mobile-navigation__icon-next"),n),"\n        "]),o),X(c,e)]:(r=document.createElement("a"),r.setAttribute("href",""+String(s)),r.setAttribute("class",""+String(h)),$(r,[i]),r),"\n    "]),t}function X(e,t){var n,o,r,i;return(o=document.createElement("div")).setAttribute("class",""+String(M("m-header-mobile-navigation__nav",{"js-header-mobile-navigation__nav":!t}))),$(o,["\n      ",t&&(i=document.createElement("button"),i.setAttribute("type","button"),i.setAttribute("class","m-header-mobile-navigation__back js-header-mobile-navigation__back"),$(i,["\n          ",(r=document.createElement("axa-icon"),r.setAttribute("icon","angle-bracket-down"),r.setAttribute("classes","m-header-mobile-navigation__icon-back"),r),"\n          ",t.name,"\n        "]),i),"\n      ",(n=document.createElement("ul"),n.setAttribute("class","m-header-mobile-navigation__list"),$(n,["\n        ",t&&W(a({},t,{name:"index page",items:null})),"\n        ",Array.isArray(e)&&e.map(W),"\n      "]),n),"\n    "]),o}var Z=function(e){return X(e.items)},G={},J=function(e){return e in G||(G[e]=0),++G[e]},Y=function(){try{var e=new window.CustomEvent("test",{cancelable:!0});if(e.preventDefault(),!0!==e.defaultPrevented)throw new Error("Could not prevent default");return window.CustomEvent}catch(e){}return t;function t(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{},n=t.bubbles,o=void 0!==n&&n,r=t.cancelable,i=void 0!==r&&r,a=t.detail,s=void 0===a?void 0:a,l=document.createEvent("CustomEvent");l.initCustomEvent(e,o,i,s);var c=l.preventDefault;return l.preventDefault=function(){c.call(l);try{Object.defineProperty(this,"defaultPrevented",{get:function(){return!0}})}catch(e){this.defaultPrevented=!0}},l}}();function Q(e,t,n){var o=3<arguments.length&&void 0!==arguments[3]?arguments[3]:{},r=new Y(t,a({},o,{detail:n}));return e.dispatchEvent(r)}var ee=function(){var e=!1;if("undefined"!=typeof window&&"function"==typeof window.addEventListener){var t=Object.defineProperty({},"passive",{get:function(){e=!0}}),n=function(){};window.addEventListener("testPassiveEventSupport",n,t),window.removeEventListener("testPassiveEventSupport",n,t)}return e}(),te=/^\s+|\s{2,}|\s+$/g;function ne(e,t){return new RegExp("^"+e+"$|^"+e+"\\s|\\s"+e+"\\s|\\s"+e+"$",t)}function oe(e,t){var n=t.className;return t.hasClass||e.push(n),e}function re(e){for(var n=e.className,o=!1,r=!0,t=arguments.length,i=Array(1<t?t-1:0),a=1;a<t;a++)i[a-1]=arguments[a];var s=i.map(function(e){var t=ne(e).test(n);t?o=!0:r=!1;return{className:e,hasClass:t}});return!(!r&&!o)&&s}function ie(e){for(var t=arguments.length,n=Array(1<t?t-1:0),o=1;o<t;o++)n[o-1]=arguments[o];var r=re.apply(void 0,[e].concat(n));if(!1!==r){var i=[].concat(n);if(Array.isArray(r)&&(i=r.reduce(ae,[])),i){var a=e.className;e.className=i.reduce(se,a)}}}function ae(e,t){var n=t.className;return t.hasClass&&e.push(n),e}function se(e,t){var n=ne(t,"g");return e.replace(n," ").replace(te," ")}var le=/\s+/,ce={transitionend:function(){for(var e=document.createElement("div").style,t={transition:"transitionend",OTransition:"oTransitionEnd otransitionend",MozTransition:"transitionend",WebkitTransition:"webkitTransitionEnd"},n=Object.keys(t),o=n.length,r=void 0,i=0;i<o;++i)if(void 0!==e[r=n[i]])return t[r];return""}()};function ue(n,e,o,r){var t=4<arguments.length&&void 0!==arguments[4]?arguments[4]:{},i=t.capture,a=void 0!==i&&i,s=t.passive,l=void 0===s||s;if(ce[e]&&(e=ce[e]),!n||!e)return null;var c=void 0===o?"undefined":m(o),u=o&&"string"===c;if("function"===c){if(r){var d=r;a=d.capture,l=d.passive}r=o}for(var p=ee?{capture:a,passive:l}:a,h=u?function(e){var t=e.target;for(;!re(t,o)&&t!==n;)t=t.parentNode;if(t!==n)return r(e,t)}:r,f=e.split(le),v=f.length,b=0;b<v;++b)n.addEventListener(f[b],h,p);return function e(){for(var t=0;t<v;++t)n.removeEventListener(f[t],h,p);!function(e,t){if(!e)return;for(var n=Object.keys(e),o=n.length,r=0;r<o;++r){var i=n[r];if(e[i]===t)return delete e[i]}}(this,e)}}function de(o){var r=1<arguments.length&&void 0!==arguments[1]?arguments[1]:0,e=2<arguments.length&&void 0!==arguments[2]?arguments[2]:{},t=e.leading,i=void 0!==t&&t,n=e.trailing,a=void 0===n||n,s=e.maxWait,l=void 0!==s&&s,c=void 0,u=void 0,d=void 0,p=void 0,h=!1,f=r!==l,v=!1!==l;function b(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return c=t,f&&(u&&clearTimeout(u),u=setTimeout(m,r)),v&&!d&&(d=setTimeout(y,l)),i&&!h&&(h=!0,p=o.apply(void 0,k(c))),p}return b.flush=function(){(u||d)&&(p=o.apply(void 0,k(c)));return g(),p},b.cancel=g,b;function m(){d&&clearTimeout(d),_()}function y(){u&&clearTimeout(u),_()}function _(){a&&(p=o.apply(void 0,k(c))),d=u=null,h=!1}function g(){u&&(clearTimeout(u),u=null),d&&(clearTimeout(d),d=null),c=void 0,h=!1}}window.__subscriptions=window.__subscriptions||{};var pe=window.__subscriptions;function he(e,t){var n=ue(2<arguments.length&&void 0!==arguments[2]?arguments[2]:document,e,t);pe[e]||(pe[e]={count:0});var o,r=pe[e];return r.count++,r.onsubscribe||(r.onsubscribe=de((o=e,function(){Q(document,"pubsub/onsubscribe",o),Q(document,"pubsub/onsubscribe/"+o,o),pe[o]&&delete pe[o].unsubscribe}),100)),r.onsubscribe(),function(){r.count--,n.call(this),r.count<=0&&delete pe[e]}}ue(document,"pubsub/onsubscribe",function(e){var t=e.detail;pe[t]||(pe[t]={count:0});var n=pe[t],o=n.queue;Array.isArray(o)&&(o.forEach(function(e){var t=i(e,3),n=t[0],o=t[1],r=t[2];Q(r,n,o)}),delete n.queue)});var fe,ve=function(e,t){return e===t},be=((fe=function(){var e;return(e=console).log.apply(e,arguments)},function(){var r=0<arguments.length&&void 0!==arguments[0]?arguments[0]:ve;return function(){for(var e=arguments.length,o=Array(e),t=0;t<e;t++)o[t]=arguments[t];return function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(){return r.apply(void 0,[].concat(o,t))?fe.apply(void 0,arguments):void 0}}}})()(!0),/[A-Z]/g);function me(e){return e.replace(be,ye)}function ye(e,t,n){var o=e.toLowerCase(),r=n.charAt(t+1);return 0===t||r.toUpperCase()===r?o:"-"+o}var _e=/^\s*(?:true|false|null|undefined|-?[0-9]+\.?[0-9]*|[[{](?:.|[\s])*[\]}])\s*$/;function ge(t,n,e){var o=t;if(e)return function(t,n,e){var o=t;switch(e){case _.string:case _.string.isRequired:return t;case _.bool:case _.bool.isRequired:if(!t||n===t)return!0;case _.number:case _.number.isRequired:case _.object:case _.object.isRequired:case _.array:case _.array.isRequired:default:if(_e.test(t))try{o=JSON.parse(t)}catch(e){console.error("Attribute "+n+" has an error:\n"+e+"\n",t)}}return o}(t,n,e);if(t&&n!==t){if(_e.test(t))try{o=JSON.parse(t)}catch(e){console.error("Attribute "+n+" has an error:\n"+e+"\n",t)}}else o=!0;return o}var ke=/(?:^\w|[A-Z]|\b\w|\s+|[-_]+)/g,Ce=/[-_]+/g;function Oe(e){return e.replace(ke,xe)}function xe(e,t){return 0==+e||Ce.test(e)?"":0===t?e.toLowerCase():e.toUpperCase()}function we(e,t,n){var o=1===e.nodeType,r=e.constructor.propTypes,i=n;!n&&o&&(i=(void 0===r?{}:r)[Oe(t)]);if(o&&!e.hasAttribute(t))return i!==_.bool&&i!==_.bool.isRequired&&void 0;var a=e.value;return t?a=e.getAttribute(t):t=e.name,a=ge(a,t,i)}var Ne=/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream;function Ae(n,e,o){var t,r=3<arguments.length&&void 0!==arguments[3]?arguments[3]:{},i=r.capture,a=void 0===i||i,s=r.passive,l=void 0===s||s,c=n.ownerDocument.documentElement,u=ue(c,e,function(e){var t=e.target;if(!n.contains(t)&&n!==t)return o(e)},{capture:a,passive:l});return t=c,Ne&&(t.style.cursor="pointer"),u}var Te=function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];for(var o=t.length,r={},i=0;i<o;++i){var a=t[i];r[a.toUpperCase()]=a}return r}("click","change","keyup","enter","move","leave","Escape","Esc","touchstart","touchmove","touchend","input","resize"),Ee="axa-change",je="data-prevent-default";(function(){function o(e){var i=this,t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{};u(this,o),this._handleClick=function(e,t){i.shouldPreventDefault(t||e.currentTarget)&&e.preventDefault();var n=!i._lastToggleNode,o=t!==i._lastToggleNode,r=!n&&!o;n?(i._notify(Te.ENTER,t),i._onInteractive()):o&&i._notify(Te.MOVE,t,i._lastToggleNode),i._lastToggleNode=t,r&&i._options.sameClickClose&&i._close()},this._handleClose=function(e,t){i.shouldPreventDefault(t||e.currentTarget)&&e.preventDefault(),i._close()},this._handleKeyUp=function(e){(e.key===Te.ESCAPE||e.key===Te.ESC||27===e.keyCode)&&(e.preventDefault(),i._close())},this._init(e,t)}return r(o,[{key:"_init",value:function(e,t){e&&(this._wcNode=e),t&&(this._options=a({},o.DEFAULTS,t));var n=this._options.containerClass;this._container=n?this._wcNode.querySelector(n):this._wcNode,this._on()}},{key:"_on",value:function(){this._off(),this._unClick=ue(this._container,Te.CLICK,this._options.toggleClass,this._handleClick,{passive:!this._options.preventDefault})}},{key:"_off",value:function(){this._unClick&&this._unClick(),this._offInteractive()}},{key:"_onInteractive",value:function(){this._offInteractive(),this._options.closeClass&&(this._unCloseClick=ue(this._container,Te.CLICK,this._options.closeClass,this._handleClose,{passive:!this._options.preventDefault})),this._options.outerClose&&(this._unOuterClick=Ae(this._container,Te.CLICK,this._handleClose,{passive:!this._options.preventDefault})),this._options.escapeClose&&(this._unCloseEscape=ue(this._container.ownerDocument,Te.KEYUP,this._handleKeyUp,{passive:!1}))}},{key:"shouldPreventDefault",value:function(e){return e.hasAttribute(je)?we(e,je):this._options.preventDefault}},{key:"_offInteractive",value:function(){this._unOuterClick&&this._unOuterClick(),this._unCloseClick&&this._unCloseClick(),this._unCloseEscape&&this._unCloseEscape(),this.deleteLastToggleNode()}},{key:"_close",value:function(){this._lastToggleNode&&(this._notify(Te.LEAVE,this._lastToggleNode),this._offInteractive(),this.deleteLastToggleNode())}},{key:"_notify",value:function(e,t,n){e in this&&"function"==typeof this[e]&&this[e](t,n)}},{key:"enter",value:function(e){throw new Error("UiEvent.enter method not overwritten")}},{key:"move",value:function(e,t){}},{key:"leave",value:function(e){throw new Error("UiEvent.leave method not overwritten")}},{key:"destroy",value:function(){this._off(),delete this._wcNode,delete this._options}},{key:"deleteLastToggleNode",value:function(){delete this._lastToggleNode}},{key:"lastToggleNode",get:function(){return this._lastToggleNode}}]),o}()).DEFAULTS={containerClass:".js-ui-container",toggleClass:"js-ui-toggle",closeClass:"js-ui-close",escapeClose:!0,outerClose:!0,sameClickClose:!0,preventDefault:!0};var Pe=[];var Se=1,Re=3,De=8;function Le(e,t){var n=e.nodeType,o=e.nodeName;n===Se&&function(e,t){for(var n=t.skipChildren&&t.skipChildren(),o=t.constructor.observedAttributes,r=o&&Array.isArray(o)&&o.length,i=function(e){return n&&r&&-1===o.indexOf(e)},a=t.attributes,s=e.attributes,l=null,c=null,u=null,d=null,p=s.length-1;0<=p;--p)if(d=s[p],u=d.name,l=d.namespaceURI,c=d.value,!i(u))if(l){var h=d.localName;t.getAttributeNS(l,h||u)!==c&&t.setAttributeNS(l,u,c)}else t.hasAttribute(u)?t.getAttribute(u)!==c&&("null"===c||"undefined"===c?t.removeAttribute(u):t.setAttribute(u,c)):t.setAttribute(u,c);for(var f=a.length-1;0<=f;--f)if(!1!==(d=a[f]).specified){if(u=d.name,l=d.namespaceURI,i(u))continue;l?(u=d.localName||u,e.hasAttributeNS(l,u)||t.removeAttributeNS(l,u)):e.hasAttributeNS(null,u)||t.removeAttribute(u)}}(e,t),n!==Re&&n!==De||t.nodeValue===e.nodeValue||(t.nodeValue=e.nodeValue),"INPUT"===o?function(e,t){var n=e.value,o=t.value;Ue(e,t,"checked"),Ue(e,t,"disabled"),n!==o&&(t.setAttribute("value",n),t.value=n);"null"===n&&(t.value="",t.removeAttribute("value"));e.hasAttributeNS(null,"value")?"range"===t.type&&(t.value=n):t.removeAttribute("value")}(e,t):"OPTION"===o?Ue(e,t,"selected"):"TEXTAREA"===o&&function(e,t){var n=e.value;n!==t.value&&(t.value=n);if(t.firstChild&&t.firstChild.nodeValue!==n){if(""===n&&t.firstChild.nodeValue===t.placeholder)return;t.firstChild.nodeValue=n}}(e,t)}function Ue(e,t,n){e[n]!==t[n]&&(t[n]=e[n],e[n]?t.setAttribute(n,""):t.removeAttribute(n))}var Me=3;function Ie(e,t){return t?e?e.isSameNode&&e.isSameNode(t)?t:e.tagName!==t.tagName?e:(Le(e,t),t.skipChildren&&t.skipChildren()||function(e,t){for(var n=void 0,o=void 0,r=void 0,i=void 0,a=0,s=0;n=t.childNodes[s],o=e.childNodes[s-a],n||o;s++)if(o)if(n)if(Ve(o,n))(r=Ie(o,n))!==n&&(t.replaceChild(r,n),a++);else{i=null;for(var l=s;l<t.childNodes.length;l++)if(Ve(t.childNodes[l],o)){i=t.childNodes[l];break}i?((r=Ie(o,i))!==i&&a++,t.insertBefore(r,n)):o.id||n.id?(t.insertBefore(o,n),a++):(r=Ie(o,n))!==n&&(t.replaceChild(r,n),a++)}else t.appendChild(o),a++;else t.removeChild(n),s--}(e,t),t):null:e}function Ve(e,t){return e.id?e.id===t.id:e.isSameNode?e.isSameNode(t):e.tagName===t.tagName&&(e.type===Me&&e.nodeValue===t.nodeValue)}var Fe=function(e){function s(e){var t;u(this,s);for(var n="\n    Web Component "+e.nodeName+"%c#"+e._id+" does not accept string as a return from a template. Maybe use bel?}",o=arguments.length,r=Array(1<o?o-1:0),i=1;i<o;i++)r[i-1]=arguments[i];var a=h(this,(t=s.__proto__||Object.getPrototypeOf(s)).call.apply(t,[this,n].concat(r)));return Error.captureStackTrace&&Error.captureStackTrace(a,s),a.name="TemplateNoStringReturnException",a}return p(s,e),s}(Error),qe=!!document.createDocumentFragment().children;function Be(){return Reflect.construct(HTMLElement,[],this.__proto__.constructor)}Object.setPrototypeOf(Be.prototype,HTMLElement.prototype),Object.setPrototypeOf(Be,HTMLElement);var ze=function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(e){return t.reduceRight(function(e,t){return t(e)},e)}}(function(t){return function(e){function a(){var e,t,n;u(this,a);for(var o=arguments.length,r=Array(o),i=0;i<o;i++)r[i]=arguments[i];return(t=n=h(this,(e=a.__proto__||Object.getPrototypeOf(a)).call.apply(e,[this].concat(r))))._makeContextReady=function(){var e=(0<arguments.length&&void 0!==arguments[0]?arguments[0]:{}).detail;n.contextNode&&(clearTimeout(n.timeoutId),n.timeoutId=setTimeout(function(){n.contextCallback(n.contextNode,e)},10)),n.unContextEnabled&&n.unContextEnabled(),n.unContextEnabled=he("context/available",n._makeContextReady)},h(n,t)}return p(a,t),r(a,[{key:"connectedCallback",value:function(){d(a.prototype.__proto__||Object.getPrototypeOf(a.prototype),"connectedCallback",this)&&d(a.prototype.__proto__||Object.getPrototypeOf(a.prototype),"connectedCallback",this).call(this),this.contextCallback&&this._makeContextReady()}},{key:"disconnectedCallback",value:function(){d(a.prototype.__proto__||Object.getPrototypeOf(a.prototype),"disconnectedCallback",this)&&d(a.prototype.__proto__||Object.getPrototypeOf(a.prototype),"disconnectedCallback",this).call(this),this.unContextEnabled&&this.unContextEnabled()}},{key:"provideContext",value:function(){var e=this.nodeName.toLowerCase();this.__isContext=!0,function(e,t){var n=2<arguments.length&&void 0!==arguments[2]?arguments[2]:document;pe[e]||(pe[e]={count:0,queue:[]});var o=pe[e].queue;Array.isArray(o)?o.push([e,t,n]):Q(n,e,t)}("context/available",this.__contextName=e)}},{key:"consumeContext",value:function(e){this.__consumedContext=e&&e.toLowerCase()}},{key:"contextNode",get:function(){for(var e=this.__consumedContext,t=this.parentNode;t&&(!t.__isContext||e&&e!==t.__contextName);)t=t.parentNode;return!(!t||!t.__isContext)&&t}}]),a}()},function(t){return function(e){function n(){return u(this,n),h(this,(n.__proto__||Object.getPrototypeOf(n)).apply(this,arguments))}return p(n,t),r(n,[{key:"appendChild",value:function(e){!this._isMorphing&&this._hasTemplate&&this._hasRendered?(this._lightDOMRefs.push(e),this.render()):d(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"appendChild",this).call(this,e)}},{key:"innerText",set:function(e){if(this._hasTemplate&&this._hasRendered){var t=document.createTextNode(e);this._lightDOMRefs=[t],this.render()}else f(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"innerText",e,this)}},{key:"textContent",set:function(e){if(this._hasTemplate&&this._hasRendered){var t=document.createTextNode(e);this._lightDOMRefs=[t],this.render()}else f(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"textContent",e,this)}},{key:"innerHTML",set:function(e){if(this._hasTemplate&&this._hasRendered){var t=document.createElement("div");t.innerHTML=e,this._lightDOMRefs=Array.from(t.children),this.render()}else f(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"innerHTML",e,this)}}]),n}()},function(t){return function(e){function c(e){u(this,c);var l=h(this,(c.__proto__||Object.getPrototypeOf(c)).call(this,e));l._reduceProps=function(e,t){var n=e.props,o=e.shouldUpdate,r=l._hasKeys[t],i="_"+t,a=n[t],s=l[i];return o||l.shouldUpdateCallback(a,s)?(l.props[t]=a,r&&f(c.prototype.__proto__||Object.getPrototypeOf(c.prototype),t,a,l),{props:n,shouldUpdate:!0}):{props:n,shouldUpdate:!1}},l._isConnected=!1,l.props={},l.updatedDebounced=de(function(){return l.updated&&l.updated()},50);var t=l.constructor.observedAttributes;return Array.isArray(t)&&t.forEach(function(e){Oe(e)}),l}return p(c,t),r(c,null,[{key:"observedAttributes",get:function(){var e=this.propTypes;return e&&Object.keys(e).map(me)}}]),r(c,[{key:"connectedCallback",value:function(){var o=this;if(d(c.prototype.__proto__||Object.getPrototypeOf(c.prototype),"connectedCallback",this)&&d(c.prototype.__proto__||Object.getPrototypeOf(c.prototype),"connectedCallback",this).call(this),!this._isConnected){this._isConnected=!0;var e=this.constructor.observedAttributes;if(this.initialClassName=this.className,Array.isArray(e)){var r=this.constructor.propTypes;e.forEach(function(e){var t=Oe(e);if(o.hasAttribute(e)){var n=we(o,e,r[t]);o.props[t]=n}}),this.checkPropTypes()}}this.updated&&this.updated()}},{key:"attributeChangedCallback",value:function(e,t,n){if(this.shouldUpdateCallback(n,t)){var o=Oe(e);if(this.hasAttribute(e)){var r=this.constructor.propTypes;this.props[o]=ge(n,e,r[o])}else this.props[o]=null;this.checkPropTypes(),"value"===e&&null!==n&&Q(this,Ee,n,{bubbles:!0,cancelable:!0,composed:!0}),this.updatedDebounced()}}},{key:"setProps",value:function(e){var t=this.constructor.observedAttributes,n=void 0===t?[]:t,o=Object.keys(e).filter(function(e){return-1<n.indexOf(me(e))}).reduce(this._reduceProps,{props:e,shouldUpdate:!1}).shouldUpdate;this.checkPropTypes(),o&&this._isConnected&&this.updated&&this.updated()}},{key:"checkPropTypes",value:function(){var e=this.constructor,t=e.propTypes,n=e.tagName;t&&_.checkPropTypes(t,this.props,"prop",n)}},{key:"shouldUpdateCallback",value:function(e,t){return e!==t}},{key:"disconnectedCallback",value:function(){this._isConnected=!1}}]),c}()},function(t){return function(e){function l(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{},t=e.template,n=c(e,["template"]);u(this,l);var o=h(this,(l.__proto__||Object.getPrototypeOf(l)).call(this,n));return o._template=t,o._hasTemplate=!!t,o._hasRendered=!1,o.updated=o.render,o}return p(l,t),r(l,[{key:"render",value:function(){var n=this,e=!this._hasRendered;if(this.willRenderCallback(e),this._hasTemplate){var t=this._template;try{if(e){for(var o=document.createDocumentFragment(),r=[];this.firstChild;)r.push(this.firstChild),o.appendChild(this.firstChild);this._lightDOMRefs=r,this.childrenFragment=o}else this._lightDOMRefs.forEach(function(e){var t=e.cloneNode(!0);n.childrenFragment.appendChild(t)});qe||(this.childrenFragment.children=Array.from(this.childrenFragment.childNodes).filter(function(e){return 1===e.nodeType}));var i=t(this.props,this.childrenFragment,this),a=document.createDocumentFragment();if(Array.isArray(i))i.forEach(function(e){a.appendChild(e)});else if(i){if("string"==typeof i)throw new Fe(this);a.appendChild(i)}if(e)d(l.prototype.__proto__||Object.getPrototypeOf(l.prototype),"appendChild",this).call(this,a);else{var s=this.cloneNode(!1);s._isMorphing=!0,s.appendChild(a),this._isMorphing=!0,function(e,t){if("object"!==(void 0===e?"undefined":m(e)))throw new Error("componentMorph: oldTree should be an object");if("object"!==(void 0===t?"undefined":m(t)))throw new Error("componentMorph: newTree should be an object");Ie(t,e)}(this,s),function(){for(var e=void 0;e=Pe.pop();)delete e.isSameNode;Pe=[]}(),this._isMorphing=!1}}catch(e){console.error(e)}}this._hasRendered=!0,this.didRenderCallback(e)}},{key:"skipChildren",value:function(){return!this._isMorphing}},{key:"willRenderCallback",value:function(e){}},{key:"didRenderCallback",value:function(e){}}]),l}()},function(t){return function(e){function i(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{},t=e.styles,n=void 0===t?"":t,o=c(e,["styles"]);u(this,i);var r=h(this,(i.__proto__||Object.getPrototypeOf(i)).call(this,o));return r._styles=n,r}return p(i,t),r(i,[{key:"connectedCallback",value:function(){d(i.prototype.__proto__||Object.getPrototypeOf(i.prototype),"connectedCallback",this)&&d(i.prototype.__proto__||Object.getPrototypeOf(i.prototype),"connectedCallback",this).call(this),this._appendStyles()}},{key:"_appendStyles",value:function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:this;if(this._styles){var t=document.createElement("style"),n=document.createTextNode(this._styles);t.appendChild(n),e.insertAdjacentElement?e.insertAdjacentElement("afterbegin",t):e.appendChild(t)}}}]),i}()})(function(e){function n(e){u(this,n);var t=h(this,(n.__proto__||Object.getPrototypeOf(n)).call(this,e));return t._id=J(t.nodeName),t}return p(n,Be),r(n,null,[{key:"uuidv4",value:function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(e){var t=16*Math.random()|0;return("x"==e?t:3&t|8).toString(16)})}}]),n}()),He={},Ke=function(e){function a(){var e,t,n;u(this,a);for(var o=arguments.length,r=Array(o),i=0;i<o;i++)r[i]=arguments[i];return(t=n=h(this,(e=a.__proto__||Object.getPrototypeOf(a)).call.apply(e,[this].concat(r))))._appendStyles=function(){a.appendGlobalStyles(n._styles,n.nodeName)},h(n,t)}return p(a,ze),r(a,null,[{key:"appendGlobalStyles",value:function(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:ze.uuidv4();if(e&&!He[t]){var n=document.createElement("style"),o=document.createTextNode(e);He[t]=!0,n.appendChild(o),n.setAttribute("data-c-name",t.toLowerCase()),document.head.appendChild(n)}}}]),a}();var $e=function(){function n(e,t){var i=this;u(this,n),this.open=function(){i.isOpen=!0},this.close=function(){i.isOpen=!1},this.fadeFinish=function(){if(!i.isOpen&&i.opened)for(var e=i.opened.pop();e;){ie(e.parentNode,i.options.isSubMenuOpenClass),e=i.opened.pop()}},this.handleCategoryClick=function(e,t){i.options.preventDefault||e.preventDefault();var n=t.parentNode;if(n.lastChild!==t){var o=i.wcNode.parentNode.parentNode,r=o.scrollTop;!function(e){for(var t=arguments.length,n=Array(1<t?t-1:0),o=1;o<t;o++)n[o-1]=arguments[o];var r=re.apply(void 0,[e].concat(n));if(!0!==r){var i=[].concat(n);Array.isArray(r)&&(i=r.reduce(oe,[])),i&&(e.className+=" "+i.join(" "))}}(n,i.options.isSubMenuOpenClass),o.scrollTop=0,i.opened.push({parentNode:n,scrollTop:r})}},this.handleBackClick=function(e){i.options.preventDefault||e.preventDefault();var t=i.opened.pop(),n=t.parentNode,o=t.scrollTop,r=i.wcNode.parentNode.parentNode;ie(n,i.options.isSubMenuOpenClass),r.scrollTop=o},this.wcNode=e,this.options=a({},n.DEFAULTS,t),this.isOpen=!1,this.opened=[],this.init()}return r(n,[{key:"init",value:function(){this.nav=this.wcNode.querySelector(this.options.nav),this.on()}},{key:"on",value:function(){this.off(),this.unCategoryClick=ue(this.nav,"click",this.options.category,this.handleCategoryClick,{passive:!1}),this.unBackClick=ue(this.nav,"click",this.options.back,this.handleBackClick,{passive:!1})}},{key:"off",value:function(){this.unCategoryClick&&this.unCategoryClick(),this.unBackClick&&this.unBackClick(),this.offContextEnabled()}},{key:"onContextEnabled",value:function(){this._contextNode&&(this.offContextEnabled(),this.unSubscribeOpen=he("header-mobile/open",this.open,this._contextNode),this.unSubscribeClose=he("header-mobile/close",this.close,this._contextNode),this.unSubscribeFadeFinish=he("header-mobile/fade-finish",this.fadeFinish,this._contextNode))}},{key:"offContextEnabled",value:function(){this.unSubscribeOpen&&this.unSubscribeOpen(),this.unSubscribeClose&&this.unSubscribeClose()}},{key:"destroy",value:function(){this.off(),delete this.wcNode,delete this.nav,delete this._contextNode,delete this.opened}},{key:"contextNode",set:function(e){this._contextNode=e,this.onContextEnabled()}}]),n}();$e.DEFAULTS={nav:".js-header-mobile-navigation__nav",category:"js-header-mobile-navigation__category",back:"js-header-mobile-navigation__back",isSubMenuOpenClass:"is-header-mobile-navigation-nav-open"};var We,Xe,Ze,Ge=(We=function(){return Je},function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return We.apply(this,t)}),Je=_.shape({name:_.string,url:U,isActive:_.bool,items:Ge}),Ye=function(e){function t(){u(this,t);var e=h(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,{styles:I,template:Z}));return e.consumeContext("axa-header"),e}return p(t,Ke),r(t,[{key:"contextCallback",value:function(e){this.interaction&&(this.interaction.contextNode=e)}},{key:"willRenderCallback",value:function(){var e=this.props,t=e.gpu,n=e.relative;this.className=M(this.initialClassName,"m-header-mobile-navigation",{"m-header-mobile-navigation--gpu":t,"m-header-mobile-navigation--relative":n})}},{key:"didRenderCallback",value:function(){var e=this.contextNode;this.interaction&&this.interaction.destroy(),this.interaction=new $e(this),e&&this.contextCallback(e)}},{key:"disconnectedCallback",value:function(){d(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"disconnectedCallback",this).call(this),this.interaction.destroy(),delete this.interaction}}]),t}();return Ye.tagName="axa-header-mobile-navigation",Ye.propTypes={items:_.arrayOf(Je),relative:_.bool},Xe=Ye.tagName,Ze=Ye,customElements.get(Xe)||customElements.define(Xe,Ze),Ye}();
