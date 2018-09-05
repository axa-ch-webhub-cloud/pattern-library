var StyleGuideWebComponent=function(){"use strict";var e,b="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},d=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},o=function(){function i(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(e,t,n){return t&&i(e.prototype,t),n&&i(e,n),e}}(),r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},c=function e(t,n,i){null===t&&(t=Function.prototype);var o=Object.getOwnPropertyDescriptor(t,n);if(void 0===o){var r=Object.getPrototypeOf(t);return null===r?void 0:e(r,n,i)}if("value"in o)return o.value;var a=o.get;return void 0!==a?a.call(i):void 0},i=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)},a=function(e,t){var n={};for(var i in e)0<=t.indexOf(i)||Object.prototype.hasOwnProperty.call(e,i)&&(n[i]=e[i]);return n},h=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},p=function e(t,n,i,o){var r=Object.getOwnPropertyDescriptor(t,n);if(void 0===r){var a=Object.getPrototypeOf(t);null!==a&&e(a,n,i,o)}else if("value"in r&&r.writable)r.value=i;else{var s=r.set;void 0!==s&&s.call(o,i)}return i},s=function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var n=[],i=!0,o=!1,r=void 0;try{for(var a,s=e[Symbol.iterator]();!(i=(a=s.next()).done)&&(n.push(a.value),!t||n.length!==t);i=!0);}catch(e){o=!0,r=e}finally{try{!i&&s.return&&s.return()}finally{if(o)throw r}}return n}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")},x=function(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)},f=(function(e){!function(){var r={}.hasOwnProperty;function a(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var i=void 0===n?"undefined":b(n);if("string"===i||"number"===i)e.push(n);else if(Array.isArray(n))e.push(a.apply(null,n));else if("object"===i)for(var o in n)r.call(n,o)&&n[o]&&e.push(o)}}return e.join(" ")}e.exports?e.exports=a:window.classNames=a}()}(e={exports:{}},e.exports),e.exports),n="@-webkit-keyframes fadeOutRightInLeft {\n  0% {\n    opacity: 1; }\n  50% {\n    opacity: 0;\n    -webkit-transform: translate3d(100%, 0, 0);\n            transform: translate3d(100%, 0, 0); }\n  51% {\n    opacity: 0;\n    -webkit-transform: translate3d(-100%, 0, 0);\n            transform: translate3d(-100%, 0, 0); }\n  100% {\n    opacity: 1;\n    -webkit-transform: none;\n            transform: none; } }\n\n@keyframes fadeOutRightInLeft {\n  0% {\n    opacity: 1; }\n  50% {\n    opacity: 0;\n    -webkit-transform: translate3d(100%, 0, 0);\n            transform: translate3d(100%, 0, 0); }\n  51% {\n    opacity: 0;\n    -webkit-transform: translate3d(-100%, 0, 0);\n            transform: translate3d(-100%, 0, 0); }\n  100% {\n    opacity: 1;\n    -webkit-transform: none;\n            transform: none; } }\n\n.m-header-sub-navigation {\n  display: none;\n  background: #fff;\n  border-bottom: 2px solid #ccc;\n  -webkit-box-shadow: 0 3px 10px -2px rgba(0, 0, 0, 0.3);\n          box-shadow: 0 3px 10px -2px rgba(0, 0, 0, 0.3);\n  text-align: left; }\n  .is-header-sub-navigation-open .m-header-sub-navigation {\n    display: block; }\n\n.m-header-sub-navigation--flyout {\n  position: absolute;\n  top: 100%;\n  left: 0;\n  z-index: 1050;\n  width: 100%;\n  margin-top: 2px; }\n\n.m-header-sub-navigation__index {\n  background: #fafafa; }\n\n.m-header-sub-navigation__index-box {\n  padding-right: 15px;\n  padding-left: 15px;\n  width: 100%;\n  margin-right: auto;\n  margin-left: auto;\n  max-width: auto;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  height: 60px;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center; }\n  @media (min-width: 576px) {\n    .m-header-sub-navigation__index-box {\n      max-width: 540px; } }\n  @media (min-width: 768px) {\n    .m-header-sub-navigation__index-box {\n      max-width: 720px; } }\n  @media (min-width: 992px) {\n    .m-header-sub-navigation__index-box {\n      max-width: 960px; } }\n  @media (min-width: 1200px) {\n    .m-header-sub-navigation__index-box {\n      max-width: 1140px; } }\n\n.m-header-sub-navigation__index-link {\n  /* Adds a hyphen where the word breaks, if supported (No Blink) */\n  -webkit-hyphens: auto;\n      -ms-hyphens: auto;\n          hyphens: auto;\n  /* These are technically the same, but use both */\n  overflow-wrap: break-word;\n  word-wrap: break-word;\n  font-size: 16px;\n  font-weight: 400;\n  line-height: 1.5;\n  letter-spacing: 0.01em; }\n  @media (min-width: 576px) {\n    .m-header-sub-navigation__index-link {\n      font-size: 18px; } }\n  .m-header-sub-navigation__index-link:hover, .m-header-sub-navigation__index-link:active, .m-header-sub-navigation__index-link:focus {\n    text-decoration: none;\n    font-weight: 600; }\n\n.m-header-sub-navigation__index-close {\n  /* Adds a hyphen where the word breaks, if supported (No Blink) */\n  -webkit-hyphens: auto;\n      -ms-hyphens: auto;\n          hyphens: auto;\n  /* These are technically the same, but use both */\n  overflow-wrap: break-word;\n  word-wrap: break-word;\n  font-size: 12px;\n  font-weight: 600;\n  line-height: 1.5;\n  letter-spacing: 0.02em;\n  position: relative;\n  padding-right: 44px;\n  margin-left: auto;\n  text-transform: uppercase;\n  border: none;\n  background: transparent;\n  color: #00008f; }\n  @media (min-width: 576px) {\n    .m-header-sub-navigation__index-close {\n      font-size: 13px;\n      line-height: 1.38; } }\n  .m-header-sub-navigation__index-close:hover, .m-header-sub-navigation__index-close:active, .m-header-sub-navigation__index-close:focus {\n    color: #00005b;\n    cursor: pointer;\n    outline: none; }\n\n.m-header-sub-navigation__index-close__icon {\n  width: 23px;\n  height: 23px;\n  display: block;\n  fill: currentColor;\n  position: absolute;\n  top: 50%;\n  right: 0;\n  margin-top: -11.5px; }\n\n.m-header-sub-navigation__box {\n  padding-right: 15px;\n  padding-left: 15px;\n  width: 100%;\n  margin-right: auto;\n  margin-left: auto;\n  max-width: auto;\n  padding-top: 30px;\n  padding-bottom: 40px; }\n  @media (min-width: 576px) {\n    .m-header-sub-navigation__box {\n      max-width: 540px; } }\n  @media (min-width: 768px) {\n    .m-header-sub-navigation__box {\n      max-width: 720px; } }\n  @media (min-width: 992px) {\n    .m-header-sub-navigation__box {\n      max-width: 960px; } }\n  @media (min-width: 1200px) {\n    .m-header-sub-navigation__box {\n      max-width: 1140px; } }\n\n.m-header-sub-navigation__row {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  margin-right: -30px;\n  margin-left: -30px;\n  -webkit-box-pack: start;\n      -ms-flex-pack: start;\n          justify-content: flex-start; }\n  .m-header-sub-navigation__row + .m-header-sub-navigation__row > .m-header-sub-navigation__block {\n    padding-top: 30px; }\n\n.m-header-sub-navigation__block {\n  max-width: 25%;\n  -webkit-box-flex: 0;\n      -ms-flex: 0 0 25%;\n          flex: 0 0 25%;\n  padding: 0 30px;\n  border-right: 1px solid #ccc; }\n  .m-header-sub-navigation__block:last-child {\n    border: none; }\n  .m-header-sub-navigation__row--col-2 .m-header-sub-navigation__block {\n    max-width: 50%;\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 50%;\n            flex: 0 0 50%;\n    padding-right: 45px;\n    padding-left: 45px; }\n    .m-header-sub-navigation__row--col-2 .m-header-sub-navigation__block:nth-child(n + 3) {\n      padding-top: 30px;\n      border-right: 1px solid #ccc; }\n    .m-header-sub-navigation__row--col-2 .m-header-sub-navigation__block:nth-child(2n) {\n      border: none; }\n  .m-header-sub-navigation__row--col-3 .m-header-sub-navigation__block {\n    max-width: 33.33333%;\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 33.33333%;\n            flex: 0 0 33.33333%;\n    padding-right: 65px;\n    padding-left: 65px; }\n    .m-header-sub-navigation__row--col-3 .m-header-sub-navigation__block:nth-child(n + 4) {\n      padding-top: 30px;\n      border-right: 1px solid #ccc; }\n    .m-header-sub-navigation__row--col-3 .m-header-sub-navigation__block:nth-child(3n) {\n      border: none; }\n  .m-header-sub-navigation__row--col-4 .m-header-sub-navigation__block:nth-child(n + 5) {\n    padding-top: 30px;\n    border-right: 1px solid #ccc; }\n  .m-header-sub-navigation__row--col-4 .m-header-sub-navigation__block:nth-child(4n) {\n    border: none; }\n  .m-header-sub-navigation__row:not(.m-header-sub-navigation__row--col-2):not(.m-header-sub-navigation__row--col-3):not(.m-header-sub-navigation__row--col-4) .m-header-sub-navigation__block:nth-last-child(1):first-child,\n  .m-header-sub-navigation__row:not(.m-header-sub-navigation__row--col-2):not(.m-header-sub-navigation__row--col-3):not(.m-header-sub-navigation__row--col-4) .m-header-sub-navigation__block:nth-last-child(1):first-child ~ * {\n    max-width: 33.33333%;\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 33.33333%;\n            flex: 0 0 33.33333%; }\n  .m-header-sub-navigation__row:not(.m-header-sub-navigation__row--col-2):not(.m-header-sub-navigation__row--col-3):not(.m-header-sub-navigation__row--col-4) .m-header-sub-navigation__block:nth-last-child(2):first-child,\n  .m-header-sub-navigation__row:not(.m-header-sub-navigation__row--col-2):not(.m-header-sub-navigation__row--col-3):not(.m-header-sub-navigation__row--col-4) .m-header-sub-navigation__block:nth-last-child(2):first-child ~ * {\n    max-width: 25%;\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 25%;\n            flex: 0 0 25%;\n    padding-right: 45px;\n    padding-left: 45px; }\n  .m-header-sub-navigation__row:not(.m-header-sub-navigation__row--col-2):not(.m-header-sub-navigation__row--col-3):not(.m-header-sub-navigation__row--col-4) .m-header-sub-navigation__block:nth-last-child(3n):first-child,\n  .m-header-sub-navigation__row:not(.m-header-sub-navigation__row--col-2):not(.m-header-sub-navigation__row--col-3):not(.m-header-sub-navigation__row--col-4) .m-header-sub-navigation__block:nth-last-child(3n):first-child ~ * {\n    max-width: 33.33333%;\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 33.33333%;\n            flex: 0 0 33.33333%;\n    padding-right: 65px;\n    padding-left: 65px; }\n\n.m-header-sub-navigation__row--col-2 {\n  margin-right: -45px;\n  margin-left: -45px; }\n\n.m-header-sub-navigation__row--col-3 {\n  margin-right: -65px;\n  margin-left: -65px; }\n\n.m-header-sub-navigation__block--wide:nth-last-child(2):first-child,\n.m-header-sub-navigation__block--wide:nth-last-child(2):first-child ~ * {\n  max-width: 50%;\n  -webkit-box-flex: 0;\n      -ms-flex: 0 0 50%;\n          flex: 0 0 50%; }\n  .m-header-sub-navigation__block--wide:nth-last-child(2):first-child .m-header-sub-navigation__list,\n  .m-header-sub-navigation__block--wide:nth-last-child(2):first-child ~ * .m-header-sub-navigation__list {\n    -webkit-column-count: 2;\n            column-count: 2; }\n\n.m-header-sub-navigation__category {\n  /* Adds a hyphen where the word breaks, if supported (No Blink) */\n  -webkit-hyphens: auto;\n      -ms-hyphens: auto;\n          hyphens: auto;\n  /* These are technically the same, but use both */\n  overflow-wrap: break-word;\n  word-wrap: break-word;\n  font-size: 20px;\n  font-weight: 700;\n  line-height: 1.5;\n  letter-spacing: 0;\n  color: #00008f;\n  text-transform: uppercase; }\n  @media (min-width: 576px) {\n    .m-header-sub-navigation__category {\n      font-size: 24px;\n      line-height: 1.2; } }\n\n.m-header-sub-navigation__list {\n  padding: 0;\n  margin: 0;\n  list-style-type: none;\n  margin-top: 15px; }\n\n.m-header-sub-navigation__list-item {\n  display: block; }\n\n.m-header-sub-navigation__link {\n  /* Adds a hyphen where the word breaks, if supported (No Blink) */\n  -webkit-hyphens: auto;\n      -ms-hyphens: auto;\n          hyphens: auto;\n  /* These are technically the same, but use both */\n  overflow-wrap: break-word;\n  word-wrap: break-word;\n  font-size: 16px;\n  font-weight: 400;\n  line-height: 1.5;\n  letter-spacing: 0.01em;\n  display: inline-block;\n  width: 100%;\n  padding: 4px 0;\n  line-height: 1.3 !important; }\n  @media (min-width: 576px) {\n    .m-header-sub-navigation__link {\n      font-size: 18px; } }\n  .m-header-sub-navigation__link.is-header-sub-navigation-active, .m-header-sub-navigation__link:hover, .m-header-sub-navigation__link:active, .m-header-sub-navigation__link:focus {\n    color: #00005b;\n    text-decoration: none;\n    font-weight: 600;\n    letter-spacing: -0.005em; }\n",v=/\n[\s]+$/,_=/^\n[\s]+/,m=/[\s]+$/,g=/^[\s]+/,y=/[\n\s]+/g,w=["a","abbr","b","bdi","bdo","br","cite","data","dfn","em","i","kbd","mark","q","rp","rt","rtc","ruby","s","amp","small","span","strong","sub","sup","time","u","var","wbr"],k=["code","pre","textarea"],C=function e(t,n){if(Array.isArray(n))for(var i,o,r=t.nodeName.toLowerCase(),a=!1,s=0,l=n.length;s<l;s++){var u=n[s];if(Array.isArray(u))e(t,u);else{("number"==typeof u||"boolean"==typeof u||"function"==typeof u||u instanceof Date||u instanceof RegExp)&&(u=u.toString());var d=t.childNodes[t.childNodes.length-1];if("string"==typeof u)a=!0,d&&"#text"===d.nodeName?d.nodeValue+=u:(u=document.createTextNode(u),t.appendChild(u),d=u),s===l-1&&(a=!1,-1===w.indexOf(r)&&-1===k.indexOf(r)?""===(i=d.nodeValue.replace(_,"").replace(m,"").replace(v,"").replace(y," "))?t.removeChild(d):d.nodeValue=i:-1===k.indexOf(r)&&(o=0===s?"":" ",i=d.nodeValue.replace(_,o).replace(g," ").replace(m,"").replace(v,"").replace(y," "),d.nodeValue=i));else if(u&&u.nodeType){a&&(a=!1,-1===w.indexOf(r)&&-1===k.indexOf(r)?""===(i=d.nodeValue.replace(_,"").replace(v,"").replace(y," "))?t.removeChild(d):d.nodeValue=i:-1===k.indexOf(r)&&(i=d.nodeValue.replace(g," ").replace(_,"").replace(v,"").replace(y," "),d.nodeValue=i));var c=u.nodeName;c&&(r=c.toLowerCase()),t.appendChild(u)}}}};var u=function(e){var t,n=document.createElement("div");return n.innerHTML=e,t=n.childNodes,Array.isArray(t)?t:[].slice.call(t)},O=function(e){var t,n,i=e.url,o=void 0===i?"":i,r=e.name,a=e.isActive,s=e.preventDefault,l=void 0===s?"false":s;return(n=document.createElement("li")).setAttribute("class","m-header-sub-navigation__list-item"),C(n,["\n    ",(t=document.createElement("a"),t.setAttribute("data-prevent-default",""+String(l)),t.setAttribute("href",""+String(o)),t.setAttribute("class",""+String(f("m-header-sub-navigation__link","js-header-navigation-close",{"is-header-sub-navigation-active":a}))),C(t,[u(r)]),t),"\n  "]),n},A=function(e){var t,n,i=e.columns,o=e.col,u=e.isWide;return(t=document.createElement("div")).setAttribute("class","m-header-sub-navigation__row m-header-sub-navigation__row--col-"+String(o||(2===(n=i.length)?n:n%3==0&&n%4!=0?3:4))),C(t,["\n\n  ",Array.isArray(i)&&i.map(function(e){var t,n,i,o,r=e.links,a=e.title,s=e.url,l=void 0===s?"":s;return(i=document.createElement("div")).setAttribute("class",""+String(f("m-header-sub-navigation__block",{"m-header-sub-navigation__block--wide":u}))),C(i,["\n      ",(t=document.createElement("strong"),t.setAttribute("class","m-header-sub-navigation__category"),C(t,["\n        ",l?(o=document.createElement("a"),o.setAttribute("href",""+String(l)),o.setAttribute("class","m-header-sub-navigation__category__link"),C(o,[a]),o):a,"\n      "]),t),"\n\n      ",(n=document.createElement("ul"),n.setAttribute("class","m-header-sub-navigation__list"),C(n,["\n        ",r&&r.map(O),"\n      "]),n),"\n    "]),i}),"\n  "]),t},l=function(e){var t=e.items,n=e.indexUrl,i=e.indexTitle,o=[];if(Array.isArray(t)){var r,a,s,l,u,d;if(i&&n)o.push(((d=document.createElement("div")).setAttribute("class","m-header-sub-navigation__index"),C(d,["\n          ",(u=document.createElement("div"),u.setAttribute("class","m-header-sub-navigation__index-box"),C(u,["\n            ",(a=document.createElement("a"),a.setAttribute("href",""+String(n)),a.setAttribute("class","m-header-sub-navigation__index-link js-header-navigation-close"),C(a,[i]),a),"\n            ",(l=document.createElement("button"),l.setAttribute("type","button"),l.setAttribute("class","m-header-sub-navigation__index-close js-header-navigation-close"),C(l,["\n              Close\n              ",(s=document.createElement("axa-icon"),s.setAttribute("icon","cross-gap"),s.setAttribute("classes","m-header-sub-navigation__index-close__icon"),s),"\n            "]),l),"\n          "]),u),"\n        "]),d));o.push(((r=document.createElement("div")).setAttribute("class","m-header-sub-navigation__box"),C(r,["\n        ",t&&t.map(A),"\n      "]),r))}return o},t={},E=function(e){return e in t||(t[e]=0),++t[e]},N=function(){try{var e=new window.CustomEvent("test",{cancelable:!0});if(e.preventDefault(),!0!==e.defaultPrevented)throw new Error("Could not prevent default");return window.CustomEvent}catch(e){}return t;function t(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{},n=t.bubbles,i=void 0!==n&&n,o=t.cancelable,r=void 0!==o&&o,a=t.detail,s=void 0===a?void 0:a,l=document.createEvent("CustomEvent");l.initCustomEvent(e,i,r,s);var u=l.preventDefault;return l.preventDefault=function(){u.call(l);try{Object.defineProperty(this,"defaultPrevented",{get:function(){return!0}})}catch(e){this.defaultPrevented=!0}},l}}();function T(e,t,n){var i=3<arguments.length&&void 0!==arguments[3]?arguments[3]:{},o=new N(t,r({},i,{detail:n}));return e.dispatchEvent(o)}var P=function(){var e=!1;if("undefined"!=typeof window&&"function"==typeof window.addEventListener){var t=Object.defineProperty({},"passive",{get:function(){e=!0}}),n=function(){};window.addEventListener("testPassiveEventSupport",n,t),window.removeEventListener("testPassiveEventSupport",n,t)}return e}();function j(e){for(var o=e.className,r=!1,a=!0,t=arguments.length,n=Array(1<t?t-1:0),i=1;i<t;i++)n[i-1]=arguments[i];var s=n.map(function(e){var t=(n=e,new RegExp("^"+n+"$|^"+n+"\\s|\\s"+n+"\\s|\\s"+n+"$",i)).test(o);var n,i;t?r=!0:a=!1;return{className:e,hasClass:t}});return!(!a&&!r)&&s}var S=/\s+/,R={transitionend:function(){for(var e=document.createElement("div").style,t={transition:"transitionend",OTransition:"oTransitionEnd otransitionend",MozTransition:"transitionend",WebkitTransition:"webkitTransitionEnd"},n=Object.keys(t),i=n.length,o=void 0,r=0;r<i;++r)if(void 0!==e[o=n[r]])return t[o];return""}()};function D(n,e,i,o){var t=4<arguments.length&&void 0!==arguments[4]?arguments[4]:{},r=t.capture,a=void 0!==r&&r,s=t.passive,l=void 0===s||s;if(R[e]&&(e=R[e]),!n||!e)return null;var u=void 0===i?"undefined":b(i),d=i&&"string"===u;if("function"===u){if(o){var c=o;a=c.capture,l=c.passive}o=i}for(var h=P?{capture:a,passive:l}:a,p=d?function(e){var t=e.target;for(;!j(t,i)&&t!==n;)t=t.parentNode;if(t!==n)return o(e,t)}:o,f=e.split(S),v=f.length,_=0;_<v;++_)n.addEventListener(f[_],p,h);return function e(){for(var t=0;t<v;++t)n.removeEventListener(f[t],p,h);!function(e,t){if(!e)return;for(var n=Object.keys(e),i=n.length,o=0;o<i;++o){var r=n[o];if(e[r]===t)return delete e[r]}}(this,e)}}function L(i){var o=1<arguments.length&&void 0!==arguments[1]?arguments[1]:0,e=2<arguments.length&&void 0!==arguments[2]?arguments[2]:{},t=e.leading,r=void 0!==t&&t,n=e.trailing,a=void 0===n||n,s=e.maxWait,l=void 0!==s&&s,u=void 0,d=void 0,c=void 0,h=void 0,p=!1,f=o!==l,v=!1!==l;function _(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return u=t,f&&(d&&clearTimeout(d),d=setTimeout(b,o)),v&&!c&&(c=setTimeout(m,l)),r&&!p&&(p=!0,h=i.apply(void 0,x(u))),h}return _.flush=function(){(d||c)&&(h=i.apply(void 0,x(u)));return y(),h},_.cancel=y,_;function b(){c&&clearTimeout(c),g()}function m(){d&&clearTimeout(d),g()}function g(){a&&(h=i.apply(void 0,x(u))),c=d=null,p=!1}function y(){d&&(clearTimeout(d),d=null),c&&(clearTimeout(c),c=null),u=void 0,p=!1}}window.__subscriptions=window.__subscriptions||{};var M=window.__subscriptions;function U(e,t){var n=D(2<arguments.length&&void 0!==arguments[2]?arguments[2]:document,e,t);M[e]||(M[e]={count:0});var i,o=M[e];return o.count++,o.onsubscribe||(o.onsubscribe=L((i=e,function(){T(document,"pubsub/onsubscribe",i),T(document,"pubsub/onsubscribe/"+i,i),M[i]&&delete M[i].unsubscribe}),100)),o.onsubscribe(),function(){o.count--,n.call(this),o.count<=0&&delete M[e]}}D(document,"pubsub/onsubscribe",function(e){var t=e.detail;M[t]||(M[t]={count:0});var n=M[t],i=n.queue;Array.isArray(i)&&(i.forEach(function(e){var t=s(e,3),n=t[0],i=t[1],o=t[2];T(o,n,i)}),delete n.queue)});var I,V=function(e,t){return e===t},z=((I=function(){var e;return(e=console).log.apply(e,arguments)},function(){var o=0<arguments.length&&void 0!==arguments[0]?arguments[0]:V;return function(){for(var e=arguments.length,i=Array(e),t=0;t<e;t++)i[t]=arguments[t];return function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(){return o.apply(void 0,[].concat(i,t))?I.apply(void 0,arguments):void 0}}}})()(!0),function(e){function l(e,t){var n;d(this,l);for(var i="\n    Native Property >>>"+e+"<<< exists already at "+t.nodeName+"#"+t._id+" and evaluates to -> "+t[e]+".\n    Please consult the HTML spec for inherited DOM properties:\n    - Element Interface https://developer.mozilla.org/en-US/docs/Web/API/Element#Properties\n    - Node Interface https://developer.mozilla.org/en-US/docs/Web/API/Node#Properties",o=arguments.length,r=Array(2<o?o-2:0),a=2;a<o;a++)r[a-2]=arguments[a];var s=h(this,(n=l.__proto__||Object.getPrototypeOf(l)).call.apply(n,[this,i].concat(r)));return Error.captureStackTrace&&Error.captureStackTrace(s,l),s.name="PropertyExistsException",s}return i(l,e),l}(Error)),F=/[A-Z]/g;function K(e,t,n){var i=e.toLowerCase(),o=n.charAt(t+1);return 0===t||o.toUpperCase()===o?i:"-"+i}var H=/^\s*(?:true|false|null|undefined|-?[0-9]+\.?[0-9]*|[[{](?:.|[\s])*[\]}])\s*$/;function W(t,n){var e=t;if(t&&n!==t){if(H.test(t))try{e=JSON.parse(t)}catch(e){console.error("Attribute "+n+" has an error:\n"+e+"\n",t)}}else e=!0;return e}var q=/(?:^\w|[A-Z]|\b\w|\s+|[-_]+)/g,B=/[-_]+/g;function $(e){return e.replace(q,G)}function G(e,t){return 0==+e||B.test(e)?"":0===t?e.toLowerCase():e.toUpperCase()}function Z(e,t){if("function"==typeof e.hasAttribute&&!e.hasAttribute(t))return!1;var n=e.value;return t?n=e.getAttribute(t):t=e.name,n=W(n,t)}var J=/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream;function X(n,e,i){var t,o=3<arguments.length&&void 0!==arguments[3]?arguments[3]:{},r=o.capture,a=void 0===r||r,s=o.passive,l=void 0===s||s,u=n.ownerDocument.documentElement,d=D(u,e,function(e){var t=e.target;if(!n.contains(t)&&n!==t)return i(e)},{capture:a,passive:l});return t=u,J&&(t.style.cursor="pointer"),d}var Y=function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];for(var i=t.length,o={},r=0;r<i;++r){var a=t[r];o[a.toUpperCase()]=a}return o}("click","keyup","enter","move","leave","Escape","Esc","touchstart","touchmove","touchend","resize"),Q="axa-change",ee="data-prevent-default";(function(){function i(e){var r=this,t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{};d(this,i),this._handleClick=function(e,t){r.shouldPreventDefault(t||e.currentTarget)&&e.preventDefault();var n=!r._lastToggleNode,i=t!==r._lastToggleNode,o=!n&&!i;n?(r._notify(Y.ENTER,t),r._onInteractive()):i&&r._notify(Y.MOVE,t,r._lastToggleNode),r._lastToggleNode=t,o&&r._options.sameClickClose&&r._close()},this._handleClose=function(e,t){r.shouldPreventDefault(t||e.currentTarget)&&e.preventDefault(),r._close()},this._handleKeyUp=function(e){(e.key===Y.ESCAPE||e.key===Y.ESC||27===e.keyCode)&&(e.preventDefault(),r._close())},this._init(e,t)}return o(i,[{key:"_init",value:function(e,t){e&&(this._wcNode=e),t&&(this._options=r({},i.DEFAULTS,t));var n=this._options.containerClass;this._container=n?this._wcNode.querySelector(n):this._wcNode,this._on()}},{key:"_on",value:function(){this._off(),this._unClick=D(this._container,Y.CLICK,this._options.toggleClass,this._handleClick,{passive:!this._options.preventDefault})}},{key:"_off",value:function(){this._unClick&&this._unClick(),this._offInteractive()}},{key:"_onInteractive",value:function(){this._offInteractive(),this._options.closeClass&&(this._unCloseClick=D(this._container,Y.CLICK,this._options.closeClass,this._handleClose,{passive:!this._options.preventDefault})),this._options.outerClose&&(this._unOuterClick=X(this._container,Y.CLICK,this._handleClose,{passive:!this._options.preventDefault})),this._options.escapeClose&&(this._unCloseEscape=D(this._container.ownerDocument,Y.KEYUP,this._handleKeyUp,{passive:!1}))}},{key:"shouldPreventDefault",value:function(e){return e.hasAttribute(ee)?Z(e,ee):this._options.preventDefault}},{key:"_offInteractive",value:function(){this._unOuterClick&&this._unOuterClick(),this._unCloseClick&&this._unCloseClick(),this._unCloseEscape&&this._unCloseEscape(),this.deleteLastToggleNode()}},{key:"_close",value:function(){this._lastToggleNode&&(this._notify(Y.LEAVE,this._lastToggleNode),this._offInteractive(),this.deleteLastToggleNode())}},{key:"_notify",value:function(e,t,n){e in this&&"function"==typeof this[e]&&this[e](t,n)}},{key:"enter",value:function(e){throw new Error("UiEvent.enter method not overwritten")}},{key:"move",value:function(e,t){}},{key:"leave",value:function(e){throw new Error("UiEvent.leave method not overwritten")}},{key:"destroy",value:function(){this._off(),delete this._wcNode,delete this._options}},{key:"deleteLastToggleNode",value:function(){delete this._lastToggleNode}},{key:"lastToggleNode",get:function(){return this._lastToggleNode}}]),i}()).DEFAULTS={containerClass:".js-ui-container",toggleClass:"js-ui-toggle",closeClass:"js-ui-close",escapeClose:!0,outerClose:!0,sameClickClose:!0,preventDefault:!0};var te=["title","checked","disabled"],ne=[];var ie=1,oe=3,re=8;function ae(e,t){var n=e.nodeType,i=e.nodeName;n===ie&&function(e,t){for(var n=t.attributes,i=e.attributes,o=null,r=null,a=null,s=null,l=i.length-1;0<=l;--l)if(s=i[l],a=s.name,o=s.namespaceURI,r=s.value,o){var u=s.localName;t.getAttributeNS(o,u||a)!==r&&t.setAttributeNS(o,a,r)}else t.hasAttribute(a)?t.getAttribute(a)!==r&&("null"===r||"undefined"===r?t.removeAttribute(a):t.setAttribute(a,r)):t.setAttribute(a,r);for(var d=n.length-1;0<=d;--d)!1!==(s=n[d]).specified&&(a=s.name,(o=s.namespaceURI)?(a=s.localName||a,e.hasAttributeNS(o,a)||t.removeAttributeNS(o,a)):e.hasAttributeNS(null,a)||t.removeAttribute(a))}(e,t),n!==oe&&n!==re||t.nodeValue===e.nodeValue||(t.nodeValue=e.nodeValue),"INPUT"===i?function(e,t){var n=e.value,i=t.value;se(e,t,"checked"),se(e,t,"disabled"),n!==i&&(t.setAttribute("value",n),t.value=n);"null"===n&&(t.value="",t.removeAttribute("value"));e.hasAttributeNS(null,"value")?"range"===t.type&&(t.value=n):t.removeAttribute("value")}(e,t):"OPTION"===i?se(e,t,"selected"):"TEXTAREA"===i&&function(e,t){var n=e.value;n!==t.value&&(t.value=n);if(t.firstChild&&t.firstChild.nodeValue!==n){if(""===n&&t.firstChild.nodeValue===t.placeholder)return;t.firstChild.nodeValue=n}}(e,t)}function se(e,t,n){e[n]!==t[n]&&(t[n]=e[n],e[n]?t.setAttribute(n,""):t.removeAttribute(n))}var le=3;function ue(e,t){return t?e?e.isSameNode&&e.isSameNode(t)?t:e.tagName!==t.tagName?e:(ae(e,t),t.skipChildren&&t.skipChildren()||function(e,t){for(var n=void 0,i=void 0,o=void 0,r=void 0,a=0,s=0;n=t.childNodes[s],i=e.childNodes[s-a],n||i;s++)if(i)if(n)if(de(i,n))(o=ue(i,n))!==n&&(t.replaceChild(o,n),a++);else{r=null;for(var l=s;l<t.childNodes.length;l++)if(de(t.childNodes[l],i)){r=t.childNodes[l];break}r?((o=ue(i,r))!==r&&a++,t.insertBefore(o,n)):i.id||n.id?(t.insertBefore(i,n),a++):(o=ue(i,n))!==n&&(t.replaceChild(o,n),a++)}else t.appendChild(i),a++;else t.removeChild(n),s--}(e,t),t):null:e}function de(e,t){return e.id?e.id===t.id:e.isSameNode?e.isSameNode(t):e.tagName===t.tagName&&(e.type===le&&e.nodeValue===t.nodeValue)}var ce=function(e){function s(e){var t;d(this,s);for(var n="\n    Web Component "+e.nodeName+"%c#"+e._id+" does not accept string as a return from a template. Maybe use bel?}",i=arguments.length,o=Array(1<i?i-1:0),r=1;r<i;r++)o[r-1]=arguments[r];var a=h(this,(t=s.__proto__||Object.getPrototypeOf(s)).call.apply(t,[this,n].concat(o)));return Error.captureStackTrace&&Error.captureStackTrace(a,s),a.name="TemplateNoStringReturnException",a}return i(s,e),s}(Error),he=!!document.createDocumentFragment().children;function pe(){return Reflect.construct(HTMLElement,[],this.__proto__.constructor)}Object.setPrototypeOf(pe.prototype,HTMLElement.prototype),Object.setPrototypeOf(pe,HTMLElement);var fe=function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(e){return t.reduceRight(function(e,t){return t(e)},e)}}(function(t){return function(e){function a(){var e,t,n;d(this,a);for(var i=arguments.length,o=Array(i),r=0;r<i;r++)o[r]=arguments[r];return(t=n=h(this,(e=a.__proto__||Object.getPrototypeOf(a)).call.apply(e,[this].concat(o))))._makeContextReady=function(){var e=(0<arguments.length&&void 0!==arguments[0]?arguments[0]:{}).detail;n.contextNode&&(clearTimeout(n.timeoutId),n.timeoutId=setTimeout(function(){n.contextCallback(n.contextNode,e)},10)),n.unContextEnabled&&n.unContextEnabled(),n.unContextEnabled=U("context/available",n._makeContextReady)},h(n,t)}return i(a,t),o(a,[{key:"connectedCallback",value:function(){c(a.prototype.__proto__||Object.getPrototypeOf(a.prototype),"connectedCallback",this)&&c(a.prototype.__proto__||Object.getPrototypeOf(a.prototype),"connectedCallback",this).call(this),this.contextCallback&&this._makeContextReady()}},{key:"disconnectedCallback",value:function(){c(a.prototype.__proto__||Object.getPrototypeOf(a.prototype),"disconnectedCallback",this)&&c(a.prototype.__proto__||Object.getPrototypeOf(a.prototype),"disconnectedCallback",this).call(this),this.unContextEnabled&&this.unContextEnabled()}},{key:"provideContext",value:function(){var e=this.nodeName.toLowerCase();this.__isContext=!0,function(e,t){var n=2<arguments.length&&void 0!==arguments[2]?arguments[2]:document;M[e]||(M[e]={count:0,queue:[]});var i=M[e].queue;Array.isArray(i)?i.push([e,t,n]):T(n,e,t)}("context/available",this.__contextName=e)}},{key:"consumeContext",value:function(e){this.__consumedContext=e&&e.toLowerCase()}},{key:"contextNode",get:function(){for(var e=this.__consumedContext,t=this.parentNode;t&&(!t.__isContext||e&&e!==t.__contextName);)t=t.parentNode;return!(!t||!t.__isContext)&&t}}]),a}()},function(t){return function(e){function n(){return d(this,n),h(this,(n.__proto__||Object.getPrototypeOf(n)).apply(this,arguments))}return i(n,t),o(n,[{key:"appendChild",value:function(e){!this._isMorphing&&this._hasTemplate&&this._hasRendered?(this._lightDOMRefs.push(e),this.render()):c(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"appendChild",this).call(this,e)}},{key:"innerText",set:function(e){if(this._hasTemplate&&this._hasRendered){var t=document.createTextNode(e);this._lightDOMRefs=[t],this.render()}else p(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"innerText",e,this)}},{key:"textContent",set:function(e){if(this._hasTemplate&&this._hasRendered){var t=document.createTextNode(e);this._lightDOMRefs=[t],this.render()}else p(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"textContent",e,this)}},{key:"innerHTML",set:function(e){if(this._hasTemplate&&this._hasRendered){var t=document.createElement("div");t.innerHTML=e,this._lightDOMRefs=Array.from(t.children),this.render()}else p(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"innerHTML",e,this)}}]),n}()},function(t){return function(e){function u(e){d(this,u);var l=h(this,(u.__proto__||Object.getPrototypeOf(u)).call(this,e));l._reduceProps=function(e,t){var n=e.props,i=e.shouldUpdate,o=l._hasKeys[t];if(-1===te.indexOf(t)&&o)throw new z(t,l);var r="_"+t,a=n[t],s=l[r];return i||l.shouldUpdateCallback(a,s)?(l[r]=a,l._props[t]=a,o&&p(u.prototype.__proto__||Object.getPrototypeOf(u.prototype),t,a,l),{props:n,shouldUpdate:!0}):{props:n,shouldUpdate:!1}},l._isConnected=!1,l._props={},l._hasKeys={},l.updatedDebounced=L(function(){return l.updated&&l.updated()},50);var t=l.constructor.observedAttributes;return Array.isArray(t)&&t.forEach(function(e){var t,n=$(e),i=n in l;if(-1===te.indexOf(n)&&i)throw new z(n,l);l._hasKeys[n]=i,Object.defineProperty(l,n,t={get:function(){return this._props[n]},set:function(e){this.shouldUpdateCallback(this._props[n],e)&&(this._props[n]=e,i&&p(t.__proto__||Object.getPrototypeOf(t),n,e,this),this._isConnected&&this._hasRendered&&this.updatedDebounced())}})}),l}return i(u,t),o(u,[{key:"connectedCallback",value:function(){var o=this;if(c(u.prototype.__proto__||Object.getPrototypeOf(u.prototype),"connectedCallback",this)&&c(u.prototype.__proto__||Object.getPrototypeOf(u.prototype),"connectedCallback",this).call(this),!this._isConnected){this._isConnected=!0;var e=this.constructor.observedAttributes;this.initialClassName=this.className,Array.isArray(e)&&e.forEach(function(e){var t=$(e);if(o.hasAttribute(e)){var n=Z(o,e),i=o._hasKeys[t];o._props[t]=n,i&&p(u.prototype.__proto__||Object.getPrototypeOf(u.prototype),t,n,o)}})}this.updated&&this.updated()}},{key:"attributeChangedCallback",value:function(e,t,n){if(this.shouldUpdateCallback(n,t)){var i=$(e);this.hasAttribute(e)?this[i]=W(n):this[i]=null,"value"===e&&null!==n&&T(this,Q,n,{bubbles:!0,cancelable:!0,composed:!0})}}},{key:"setProps",value:function(e){var t=this.constructor.observedAttributes,n=void 0===t?[]:t;Object.keys(e).filter(function(e){return-1<n.indexOf(e.replace(F,K))}).reduce(this._reduceProps,{props:e,shouldUpdate:!1}).shouldUpdate&&this._isConnected&&this._hasRendered&&this.updated&&this.updated()}},{key:"shouldUpdateCallback",value:function(e,t){return e!==t}},{key:"disconnectedCallback",value:function(){this._isConnected=!1}}]),u}()},function(t){return function(e){function l(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{},t=e.template,n=a(e,["template"]);d(this,l);var i=h(this,(l.__proto__||Object.getPrototypeOf(l)).call(this,n));return i._template=t,i._hasTemplate=!!t,i._hasRendered=!1,i.updated=i.render,i}return i(l,t),o(l,[{key:"render",value:function(){var n=this,e=!this._hasRendered;if(this.willRenderCallback(e),this._hasTemplate){var t=this._template;try{if(e){for(var i=document.createDocumentFragment(),o=[];this.firstChild;)o.push(this.firstChild),i.appendChild(this.firstChild);this._lightDOMRefs=o,this.childrenFragment=i}else this._lightDOMRefs.forEach(function(e){var t=e.cloneNode(!0);n.childrenFragment.appendChild(t)});he||(this.childrenFragment.children=Array.from(this.childrenFragment.childNodes).filter(function(e){return 1===e.nodeType}));var r=t(this._props,this.childrenFragment,this),a=document.createDocumentFragment();if(Array.isArray(r))r.forEach(function(e){a.appendChild(e)});else if(r){if("string"==typeof r)throw new ce(this);a.appendChild(r)}if(e)c(l.prototype.__proto__||Object.getPrototypeOf(l.prototype),"appendChild",this).call(this,a);else{var s=this.cloneNode(!1);s._isMorphing=!0,s.appendChild(a),this._isMorphing=!0,function(e,t){if("object"!==(void 0===e?"undefined":b(e)))throw new Error("componentMorph: oldTree should be an object");if("object"!==(void 0===t?"undefined":b(t)))throw new Error("componentMorph: newTree should be an object");ue(t,e)}(this,s),function(){for(var e=void 0;e=ne.pop();)delete e.isSameNode;ne=[]}(),this._isMorphing=!1}}catch(e){console.error(e)}}this._hasRendered=!0,this.didRenderCallback(e)}},{key:"skipChildren",value:function(){return!this._isMorphing}},{key:"willRenderCallback",value:function(e){}},{key:"didRenderCallback",value:function(e){}}]),l}()},function(t){return function(e){function r(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{},t=e.styles,n=void 0===t?"":t,i=a(e,["styles"]);d(this,r);var o=h(this,(r.__proto__||Object.getPrototypeOf(r)).call(this,i));return o._styles=n,o}return i(r,t),o(r,[{key:"connectedCallback",value:function(){c(r.prototype.__proto__||Object.getPrototypeOf(r.prototype),"connectedCallback",this)&&c(r.prototype.__proto__||Object.getPrototypeOf(r.prototype),"connectedCallback",this).call(this),this._appendStyles()}},{key:"_appendStyles",value:function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:this;if(this._styles){var t=document.createElement("style"),n=document.createTextNode(this._styles);t.appendChild(n),e.insertAdjacentElement?e.insertAdjacentElement("afterbegin",t):e.appendChild(t)}}}]),r}()})(function(e){function n(e){d(this,n);var t=h(this,(n.__proto__||Object.getPrototypeOf(n)).call(this,e));return t._id=E(t.nodeName),t}return i(n,pe),o(n,null,[{key:"uuidv4",value:function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(e){var t=16*Math.random()|0;return("x"==e?t:3&t|8).toString(16)})}}]),n}()),ve={},_e=function(e){function a(){var e,t,n;d(this,a);for(var i=arguments.length,o=Array(i),r=0;r<i;r++)o[r]=arguments[r];return(t=n=h(this,(e=a.__proto__||Object.getPrototypeOf(a)).call.apply(e,[this].concat(o))))._appendStyles=function(){a.appendGlobalStyles(n._styles,n.nodeName)},h(n,t)}return i(a,fe),o(a,null,[{key:"appendGlobalStyles",value:function(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:fe.uuidv4();if(e&&!ve[t]){var n=document.createElement("style"),i=document.createTextNode(e);ve[t]=!0,n.appendChild(i),n.setAttribute("data-c-name",t.toLowerCase()),document.head.appendChild(n)}}}]),a}();var be,me,ge=function(e){function t(){return d(this,t),h(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,{styles:n,template:l}))}return i(t,_e),o(t,null,[{key:"observedAttributes",get:function(){return["flyout","index-title","index-url","items"]}}]),o(t,[{key:"willRenderCallback",value:function(){var e=this.flyout;this.className=f(this.initialClassName,"m-header-sub-navigation js-header-sub-navigation",{"m-header-sub-navigation--flyout":e})}}]),t}();return ge.tagName="axa-header-sub-navigation",be=ge.tagName,me=ge,customElements.get(be)||customElements.define(be,me),ge}();
