!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):e.StyleGuideWebComponent=t()}(this,function(){"use strict";function e(e,t){return e(t={exports:{}},t.exports),t.exports}var t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},o=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},r=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)},a=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},l=function(){return function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var n=[],o=!0,i=!1,r=void 0;try{for(var a,l=e[Symbol.iterator]();!(o=(a=l.next()).done)&&(n.push(a.value),!t||n.length!==t);o=!0);}catch(e){i=!0,r=e}finally{try{!o&&l.return&&l.return()}finally{if(i)throw r}}return n}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),s=function(e,t){return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))},c=function(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)},f=e(function(e){!function(){var n={}.hasOwnProperty;function o(){for(var e=[],i=0;i<arguments.length;i++){var r=arguments[i];if(r){var a=void 0===r?"undefined":t(r);if("string"===a||"number"===a)e.push(r);else if(Array.isArray(r))e.push(o.apply(null,r));else if("object"===a)for(var l in r)n.call(r,l)&&r[l]&&e.push(l)}}return e.join(" ")}e.exports?e.exports=o:window.classNames=o}()}),u=/^\s*(?:true|false|null|undefined|-?[0-9]+\.?[0-9]*|[[{](?:.|[\r\n])*[\]}])\s*$/;function p(e,t){if("function"==typeof e.hasAttribute&&!e.hasAttribute(t))return!1;var n=e.value;if(t?n=e.getAttribute(t):t=e.name,n&&t!==n){if(u.test(n))try{n=JSON.parse(n)}catch(t){console.error("Attribute "+e+" has an error:\n"+t+"\n",n)}}else n=!0;return n}var d=/(?:^\w|[A-Z]|\b\w|\s+|[-_]+)/g,h=/[-_]+/g;function m(e,t){return 0==+e||h.test(e)?"":0===t?e.toLowerCase():e.toUpperCase()}var v=function(){try{var e=new window.CustomEvent("test");if(e.preventDefault(),!0!==e.defaultPrevented)throw new Error("Could not prevent default");return window.CustomEvent}catch(e){}return t;function t(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.bubbles,o=void 0!==n&&n,i=t.cancelable,r=void 0!==i&&i,a=t.detail,l=void 0===a?void 0:a,s=document.createEvent("CustomEvent");s.initCustomEvent(e,o,r,l);var c=s.preventDefault;return s.preventDefault=function(){c.call(s);try{Object.defineProperty(this,"defaultPrevented",{get:function(){return!0}})}catch(e){this.defaultPrevented=!0}},s}}();function g(e,t,n){var o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},r=new v(t,i({},o,{detail:n}));e.dispatchEvent(r)}var y=function(){var e=!1;if("undefined"!=typeof window&&"function"==typeof window.addEventListener){var t=Object.defineProperty({},"passive",{get:function(){e=!0}}),n=function(){};window.addEventListener("testPassiveEventSupport",n,t),window.removeEventListener("testPassiveEventSupport",n,t)}return e}();function x(e,t){var n,o;return(n=t,new RegExp("^"+n+"$|^"+n+"\\s|\\s"+n+"\\s|\\s"+n+"$",o)).test(e.className)}var b=/\s+/,_={transitionend:function(){for(var e=document.createElement("div").style,t={transition:"transitionend",OTransition:"oTransitionEnd otransitionend",MozTransition:"transitionend",WebkitTransition:"webkitTransitionEnd"},n=Object.keys(t),o=n.length,i=void 0,r=0;r<o;++r)if(void 0!==e[i=n[r]])return t[i];return""}()};function w(e,n,o,i){var r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{},a=r.capture,l=void 0!==a&&a,s=r.passive,c=void 0===s||s;if(_[n]&&(n=_[n]),!e||!n)return null;var f=void 0===o?"undefined":t(o),u=o&&"string"===f;if("function"===f){if(i){var p=i;l=p.capture,c=p.passive}i=o}for(var d=y?{capture:l,passive:c}:l,h=u?function(t){var n=t.target;for(;!x(n,o)&&n!==e;)n=n.parentNode;if(n!==e)return i(t,n)}:i,m=n.split(b),v=m.length,g=0;g<v;++g)e.addEventListener(m[g],h,d);return function t(){for(var n=0;n<v;++n)e.removeEventListener(m[n],h,d);!function(e,t){if(!e)return!1;for(var n=Object.keys(e),o=n.length,i=0;i<o;++i){var r=n[i];if(e[r]===t)return delete e[r]}}(this,t)}}var k={};function C(e,t){var n=w(arguments.length>2&&void 0!==arguments[2]?arguments[2]:document,e,t);k[e]||(k[e]={count:0});var o,i=k[e];return i.count++,i.onsubscribe||(i.onsubscribe=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},o=n.leading,i=void 0!==o&&o,r=n.trailing,a=void 0===r||r,l=n.maxWait,s=void 0!==l&&l,f=void 0,u=void 0,p=void 0,d=void 0,h=!1,m=t!==s,v=!1!==s;function g(){for(var n=arguments.length,o=Array(n),r=0;r<n;r++)o[r]=arguments[r];return f=o,m&&(u&&clearTimeout(u),u=setTimeout(y,t)),v&&!p&&(p=setTimeout(x,s)),i&&!h&&(h=!0,d=e.apply(void 0,c(f))),d}return g.flush=function(){return(u||p)&&(d=e.apply(void 0,c(f))),_(),d},g.cancel=_,g;function y(){p&&clearTimeout(p),b()}function x(){u&&clearTimeout(u),b()}function b(){a&&(d=e.apply(void 0,c(f))),u=null,p=null,h=!1}function _(){u&&(clearTimeout(u),u=null),p&&(clearTimeout(p),p=null),f=void 0,h=!1}}((o=e,function(){g(document,"pubsub/onsubscribe",o),g(document,"pubsub/onsubscribe/"+o,o),k[o]&&delete k[o].unsubscribe}),100)),i.onsubscribe(),function(){i.count--,n.call(this),i.count<=0&&delete k[e]}}function O(){return Reflect.construct(HTMLElement,[],this.__proto__.constructor)}w(document,"pubsub/onsubscribe",function(e){var t=e.detail;k[t]||(k[t]={count:0});var n=k[t],o=n.queue;Array.isArray(o)&&(o.forEach(function(e){var t=l(e,3),n=t[0],o=t[1],i=t[2];g(i,n,o)}),delete n.queue)}),Object.setPrototypeOf(O.prototype,HTMLElement.prototype),Object.setPrototypeOf(O,HTMLElement);var E={},A="throwed",T=function(e){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",o=arguments[1];n(this,t);var i=a(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return i._makeContextReady=i._makeContextReady.bind(i),i._initialise(e,o),i}return r(t,O),o(t,[{key:"_initialise",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;this.initialClassName=this.className,this._styles=e,this._template=t}},{key:"connectedCallback",value:function(){this._appendStyles(),this.render(),this.contextCallback&&this._makeContextReady()}},{key:"disconnectedCallback",value:function(){this.unContextEnabled&&this.unContextEnabled()}},{key:"_appendStyles",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this;if(this._styles){var t=document.createElement("style"),n=document.createTextNode(this._styles);t.appendChild(n),e.insertAdjacentElement?e.insertAdjacentElement("afterbegin",t):e.appendChild(t)}}},{key:"render",value:function(){var e=this;if(!this._hasRendered){var t=this._template;if(t)try{for(var n=document.createDocumentFragment();this.firstChild;)n.appendChild(this.firstChild);var o=t(function(e){if(!e.hasAttributes)return null;for(var t,n={},o=e.attributes,i=o.length,r=0;r<i;++r){var a=o[r],l=a.name;n[(t=l,t.replace(d,m))]=p(a)}return n}(this),n);if(Array.isArray(o))o.forEach(function(t){e.appendChild(t)});else if(o){if("string"==typeof o){var i=new Error(A);throw console.error("\n%cWeb Component %c"+this.nodeName+"%c does not accept string as a return from a template. Maybe use bel?\n\nStack Trace: "+i.stack+"\n","color: #580000; font-size: 14px; line-height:16px;","background: #8b0000; color: #FFF; font-size: 14px; line-height:16px;","color: #580000; font-size: 14px; line-height:16px;"),i}this.appendChild(o)}this._hasRendered=!0}catch(i){i.message!==A&&console.error("\n%cWeb Component %c"+this.nodeName+"%c has an error while loading its template:\n"+i+"\n\nStack Trace: "+i.stack+"\n","color: #580000; font-size: 14px; line-height:16px;","background: #8b0000; color: #FFF; font-size: 14px; line-height:16px;","color: #580000; font-size: 14px; line-height:16px;")}}}},{key:"enableContext",value:function(){var e=this.nodeName.toLowerCase();this.__isContext=!0,this.__contextName=e,function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:document;k[e]||(k[e]={count:0,queue:[]});var o=k[e].queue;Array.isArray(o)?o.push([e,t,n]):g(n,e,t)}("context/enabled",e)}},{key:"selectContext",value:function(e){this.__selectedContext=e&&e.toLowerCase()}},{key:"_makeContextReady",value:function(){var e=this,t=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}).detail;this.contextNode&&(clearTimeout(this.timeoutId),this.timeoutId=setTimeout(function(){e.contextCallback(e.contextNode,t)},10)),this.unContextEnabled&&this.unContextEnabled(),this.unContextEnabled=C("context/enabled",this._makeContextReady)}},{key:"contextNode",get:function(){for(var e=this.__selectedContext,t=this.parentNode;t&&(!t.__isContext||e&&e!==t.__contextName);)t=t.parentNode;return!(!t||!t.__isContext)&&t}}],[{key:"uuidv4",value:function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(e){var t=16*Math.random()|0;return("x"==e?t:3&t|8).toString(16)})}}]),t}(),N=(function(e){function t(){return n(this,t),a(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}r(t,T),o(t,[{key:"connectedCallback",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"open",t=this.attachShadow({mode:e});this._appendStyles(t),this.render()}}])}(),function(e){function t(){return n(this,t),a(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return r(t,T),o(t,[{key:"_appendStyles",value:function(){t.appendGlobalStyles(this._styles,this.nodeName)}}],[{key:"appendGlobalStyles",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:T.uuidv4();if(e&&!E[e]){var n=document.createElement("style"),o=document.createTextNode(e);n.appendChild(o),n.setAttribute("data-c-name",t.toLowerCase()),document.querySelector("head").appendChild(n),E[e]=!0}}}]),t}()),S=".m-footer-social {\n  padding-right: 15px;\n  padding-left: 15px;\n  position: relative;\n  width: 100%;\n  min-height: 1px;\n  max-width: 33.33333%;\n  -webkit-box-flex: 0;\n      -ms-flex: 0 0 33.33333%;\n          flex: 0 0 33.33333%;\n  display: block; }\n  .m-footer-social:first-child:last-child {\n    position: static;\n    width: auto;\n    max-width: none;\n    -webkit-box-flex: 1;\n        -ms-flex: auto;\n            flex: auto;\n    -webkit-box-flex: 0;\n        -ms-flex: 0 1 auto;\n            flex: 0 1 auto; }\n  @media (max-width: 991px) {\n    .m-footer-social {\n      position: static;\n      width: auto;\n      max-width: none;\n      -webkit-box-flex: 1;\n          -ms-flex: auto;\n              flex: auto;\n      margin-bottom: -10px; }\n      .m-footer-social:first-child {\n        margin-bottom: 0; } }\n  @media (max-width: 575px) {\n    .m-footer-social {\n      padding: 25px 30px;\n      margin-bottom: 0; } }\n\n.m-footer-social__title {\n  /* Adds a hyphen where the word breaks, if supported (No Blink) */\n  -webkit-hyphens: auto;\n      -ms-hyphens: auto;\n          hyphens: auto;\n  /* These are technically the same, but use both */\n  overflow-wrap: break-word;\n  word-wrap: break-word;\n  font-size: 14px;\n  font-weight: 700;\n  line-height: 1.5;\n  letter-spacing: 0.02em;\n  color: #fff;\n  text-transform: uppercase; }\n  @media (min-width: 576px) {\n    .m-footer-social__title {\n      font-size: 16px; } }\n  @media (max-width: 991px) {\n    .m-footer-social__title {\n      display: none !important; } }\n\n.m-footer-social__list {\n  padding: 0;\n  margin: 0;\n  list-style-type: none;\n  *zoom: 1;\n  margin: 15px -10px 0 -10px; }\n  .m-footer-social__list::before, .m-footer-social__list::after {\n    display: table;\n    content: \" \"; }\n  .m-footer-social__list::after {\n    clear: both; }\n  .m-footer-social__list:first-child {\n    margin-top: 0; }\n  @media (max-width: 991px) {\n    .m-footer-social__list {\n      margin-top: 25px; } }\n  @media (max-width: 575px) {\n    .m-footer-social__list {\n      margin: -10px; } }\n\n.m-footer-social__list-item {\n  display: block;\n  float: left;\n  margin-right: 10px; }\n  .m-footer-social__list-item:last-child {\n    margin-right: 0; }\n\n.m-footer-social__link {\n  display: block;\n  padding: 10px; }\n\n.m-footer-social__icon {\n  width: 25px;\n  height: 25px;\n  display: block;\n  fill: currentColor;\n  color: #fff; }\n\n.m-footer-social--inline .m-footer-social__box {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center; }\n\n.m-footer-social--inline .m-footer-social__title {\n  display: block;\n  margin-right: 20px; }\n  .m-footer-social--inline .m-footer-social__title::after {\n    content: ':'; }\n\n.m-footer-social--inline .m-footer-social__list {\n  margin-top: 0; }\n\n.m-footer-social--light {\n  position: static;\n  width: auto;\n  max-width: none;\n  -webkit-box-flex: 1;\n      -ms-flex: auto;\n          flex: auto; }\n  .m-footer-social--light .m-footer-social__title {\n    font-size: 12px;\n    font-weight: 700;\n    line-height: 1.5;\n    letter-spacing: 0.02em; }\n    @media (min-width: 576px) {\n      .m-footer-social--light .m-footer-social__title {\n        font-size: 14px;\n        line-height: 1.21; } }\n  .m-footer-social--light .m-footer-social__icon {\n    width: 20px;\n    height: 20px; }\n",j=function(e){return function(t,n,o){for(var i in n)i in L&&(n[L[i]]=n[i],delete n[i]);return e(t,n,o)}},L={class:"className",for:"htmlFor","http-equiv":"httpEquiv"};var P=1,F=2,M=3,R=4,z=5,D=6,G=7,$=8,q=9,V=10,B=11,W=12,I=13;var H=RegExp("^("+["area","base","basefont","bgsound","br","col","command","embed","frame","hr","img","input","isindex","keygen","link","meta","param","source","track","wbr","!--","animate","animateTransform","circle","cursor","desc","ellipse","feBlend","feColorMatrix","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","font-face-format","font-face-name","font-face-uri","glyph","glyphRef","hkern","image","line","missing-glyph","mpath","path","polygon","polyline","rect","set","stop","tref","use","view","vkern"].join("|")+")(?:[.#][a-zA-Z0-9-￿_:-]+)*$");var Z=/\n[\s]+$/,J=/^\n[\s]+/,U=/[\s]+$/,K=/^[\s]+/,Q=/[\n\s]+/g,X=["a","abbr","b","bdi","bdo","br","cite","data","dfn","em","i","kbd","mark","q","rp","rt","rtc","ruby","s","amp","small","span","strong","sub","sup","time","u","var","wbr"],Y=["code","pre"],ee=function e(t,n){if(Array.isArray(n))for(var o,i,r=t.nodeName.toLowerCase(),a=!1,l=0,s=n.length;l<s;l++){var c=n[l];if(Array.isArray(c))e(t,c);else{("number"==typeof c||"boolean"==typeof c||"function"==typeof c||c instanceof Date||c instanceof RegExp)&&(c=c.toString());var f=t.childNodes[t.childNodes.length-1];if("string"==typeof c)a=!0,f&&"#text"===f.nodeName?f.nodeValue+=c:(c=document.createTextNode(c),t.appendChild(c),f=c),l===s-1&&(a=!1,-1===X.indexOf(r)&&-1===Y.indexOf(r)?""===(o=f.nodeValue.replace(J,"").replace(U,"").replace(Z,"").replace(Q," "))?t.removeChild(f):f.nodeValue=o:-1===Y.indexOf(r)&&(i=0===l?"":" ",o=f.nodeValue.replace(J,i).replace(K," ").replace(U,"").replace(Z,"").replace(Q," "),f.nodeValue=o));else if(c&&c.nodeType){a&&(a=!1,-1===X.indexOf(r)&&-1===Y.indexOf(r)?""===(o=f.nodeValue.replace(J,"").replace(Z,"").replace(Q," "))?t.removeChild(f):f.nodeValue=o:-1===Y.indexOf(r)&&(o=f.nodeValue.replace(K," ").replace(J,"").replace(Z,"").replace(Q," "),f.nodeValue=o));var u=c.nodeName;u&&(r=u.toLowerCase()),t.appendChild(c)}}}},te=e(function(e){var n="http://www.w3.org/2000/svg",o="http://www.w3.org/1999/xlink",i=["autofocus","checked","defaultchecked","disabled","formnovalidate","indeterminate","readonly","required","selected","willvalidate"],r="!--",a=["svg","altGlyph","altGlyphDef","altGlyphItem","animate","animateColor","animateMotion","animateTransform","circle","clipPath","color-profile","cursor","defs","desc","ellipse","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","filter","font","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","foreignObject","g","glyph","glyphRef","hkern","image","line","linearGradient","marker","mask","metadata","missing-glyph","mpath","path","pattern","polygon","polyline","radialGradient","rect","set","stop","switch","symbol","text","textPath","title","tref","tspan","use","view","vkern"];function l(e,t,l){var s;-1!==a.indexOf(e)&&(t.namespace=n);var c=!1;if(t.namespace&&(c=t.namespace,delete t.namespace),c)s=document.createElementNS(c,e);else{if(e===r)return document.createComment(t.comment);s=document.createElement(e)}for(var f in t)if(t.hasOwnProperty(f)){var u=f.toLowerCase(),p=t[f];if("classname"===u&&(u="class",f="class"),"htmlFor"===f&&(f="for"),-1!==i.indexOf(u))if("true"===p)p=u;else if("false"===p)continue;"on"===u.slice(0,2)?s[f]=p:c?"xlink:href"===f?s.setAttributeNS(o,f,p):/^xmlns($|:)/i.test(f)||s.setAttributeNS(null,f,p):s.setAttribute(f,p)}return ee(s,l),s}e.exports=function(e,n){n||(n={});var o=n.concat||function(e,t){return String(e)+String(t)};return!1!==n.attrToProp&&(e=j(e)),function(r){for(var a=P,l="",s=arguments.length,c=[],f=0;f<r.length;f++)if(f<s-1){var u=arguments[f+1],p=C(r[f]),d=a;d===V&&(d=$),d===q&&(d=$),d===G&&(d=$),d===R&&(d=z),p.push([0,d,u]),c.push.apply(c,p)}else c.push.apply(c,C(r[f]));var h,m=[null,{},[]],v=[[m,-1]];for(f=0;f<c.length;f++){var g=v[v.length-1][0],y=(p=c[f])[0];if(y===F&&/^\//.test(p[1])){var x=v[v.length-1][1];v.length>1&&(v.pop(),v[v.length-1][0][2][x]=e(g[0],g[1],g[2].length?g[2]:void 0))}else if(y===F){var b=[p[1],{},[]];g[2].push(b),v.push([b,g[2].length-1])}else if(y===z||0===y&&p[1]===z){for(var _,w="";f<c.length;f++)if(c[f][0]===z)w=o(w,c[f][1]);else{if(0!==c[f][0]||c[f][1]!==z)break;if("object"!==t(c[f][2])||w)w=o(w,c[f][2]);else for(_ in c[f][2])c[f][2].hasOwnProperty(_)&&!g[1][_]&&(g[1][_]=c[f][2][_])}c[f][0]===B&&f++;for(var k=f;f<c.length;f++)if(c[f][0]===$||c[f][0]===z)g[1][w]?""===c[f][1]||(g[1][w]=o(g[1][w],c[f][1])):g[1][w]=i(c[f][1]);else{if(0!==c[f][0]||c[f][1]!==$&&c[f][1]!==z){!w.length||g[1][w]||f!==k||c[f][0]!==M&&c[f][0]!==W||(g[1][w]=w.toLowerCase()),c[f][0]===M&&f--;break}g[1][w]?""===c[f][2]||(g[1][w]=o(g[1][w],c[f][2])):g[1][w]=i(c[f][2])}}else if(y===z)g[1][p[1]]=!0;else if(0===y&&p[1]===z)g[1][p[2]]=!0;else if(y===M)h=g[0],H.test(h)&&v.length&&(x=v[v.length-1][1],v.pop(),v[v.length-1][0][2][x]=e(g[0],g[1],g[2].length?g[2]:void 0));else if(0===y&&p[1]===P)void 0===p[2]||null===p[2]?p[2]="":p[2]||(p[2]=o("",p[2])),Array.isArray(p[2][0])?g[2].push.apply(g[2],p[2]):g[2].push(p[2]);else if(y===P)g[2].push(p[1]);else if(y!==B&&y!==W)throw new Error("unhandled: "+y)}if(m[2].length>1&&/^\s*$/.test(m[2][0])&&m[2].shift(),m[2].length>2||2===m[2].length&&/\S/.test(m[2][1]))throw new Error("multiple root elements must be wrapped in an enclosing tag");return Array.isArray(m[2][0])&&"string"==typeof m[2][0][0]&&Array.isArray(m[2][0][2])&&(m[2][0]=e(m[2][0][0],m[2][0][1],m[2][0][2])),m[2][0];function C(e){var t,o=[];a===G&&(a=R);for(var i=0;i<e.length;i++){var r=e.charAt(i);a===P&&"<"===r?(l.length&&o.push([P,l]),l="",a=F):">"===r&&(t=a)!==q&&t!==V&&a!==I?(a===F?o.push([F,l]):a===z?o.push([z,l]):a===$&&l.length&&o.push([$,l]),o.push([M]),l="",a=P):a===I&&/-$/.test(l)&&"-"===r?(n.comments&&o.push([$,l.substr(0,l.length-1)],[M]),l="",a=P):a===F&&/^!--$/.test(l)?(n.comments&&o.push([F,l],[z,"comment"],[B]),l=r,a=I):a===P||a===I?l+=r:a===F&&"/"===r&&l.length||(a===F&&/\s/.test(r)?(o.push([F,l]),l="",a=R):a===F?l+=r:a===R&&/[^\s"'=/]/.test(r)?(a=z,l=r):a===R&&/\s/.test(r)?(l.length&&o.push([z,l]),o.push([W])):a===z&&/\s/.test(r)?(o.push([z,l]),l="",a=D):a===z&&"="===r?(o.push([z,l],[B]),l="",a=G):a===z?l+=r:a!==D&&a!==R||"="!==r?a!==D&&a!==R||/\s/.test(r)?a===G&&'"'===r?a=V:a===G&&"'"===r?a=q:a===V&&'"'===r?(o.push([$,l],[W]),l="",a=R):a===q&&"'"===r?(o.push([$,l],[W]),l="",a=R):a!==G||/\s/.test(r)?a===$&&/\s/.test(r)?(o.push([$,l],[W]),l="",a=R):a!==$&&a!==q&&a!==V||(l+=r):(a=$,i--):(o.push([W]),/[\w-]/.test(r)?(l+=r,a=z):a=R):(o.push([B]),a=G))}return a===P&&l.length?(o.push([P,l]),l=""):a===$&&l.length?(o.push([$,l]),l=""):a===V&&l.length?(o.push([$,l]),l=""):a===q&&l.length?(o.push([$,l]),l=""):a===z&&(o.push([z,l]),l=""),o}};function i(e){return"function"==typeof e?e:"string"==typeof e?e:e&&"object"===(void 0===e?"undefined":t(e))?e:o("",e)}}(l,{comments:!0}),e.exports.default=e.exports,e.exports.createElement=l}),ne=(te.createElement,s(['<aside class="m-footer-social__box">\n    ','\n\n    <ul class="m-footer-social__list">\n      ',"\n    </ul>\n  </aside>"],['<aside class="m-footer-social__box">\n    ','\n\n    <ul class="m-footer-social__list">\n      ',"\n    </ul>\n  </aside>"])),oe=s(['<strong class="m-footer-social__title">',"</strong>"],['<strong class="m-footer-social__title">',"</strong>"]),ie=s(['\n        <li class="m-footer-social__list-item">\n          <a href="','" class="m-footer-social__link">\n            <axa-icon id="','" classes="m-footer-social__icon"></axa-icon>\n          </a>\n        </li>\n      '],['\n        <li class="m-footer-social__list-item">\n          <a href="','" class="m-footer-social__link">\n            <axa-icon id="','" classes="m-footer-social__icon"></axa-icon>\n          </a>\n        </li>\n      ']);function re(e){var t=e.title,n=e.items;return te(ne,t&&te(oe,t),n.map(function(e){var t=e.name,n=e.url;return te(ie,n,t)}))}var ae,le,se,ce=function(e){function t(){return n(this,t),a(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,S,re))}return r(t,N),o(t,[{key:"connectedCallback",value:function(){(function e(t,n,o){null===t&&(t=Function.prototype);var i=Object.getOwnPropertyDescriptor(t,n);if(void 0===i){var r=Object.getPrototypeOf(t);return null===r?void 0:e(r,n,o)}if("value"in i)return i.value;var a=i.get;return void 0!==a?a.call(o):void 0})(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"connectedCallback",this).call(this);var e=p(this,"inline"),n=p(this,"light");this.className=f(this.initialClassName,"m-footer-social",{"m-footer-social--inline":e,"m-footer-social--light":n})}}]),t}();return ae=function(){window.customElements.define("axa-footer-social",ce)},le=0,se=function(){if(0===le)try{ae.apply(void 0,arguments),le+=1,document.removeEventListener("DOMContentLoaded"),document.removeEventListener("WebComponentsReady")}catch(e){}},document.addEventListener("DOMContentLoaded",se,!1),document.addEventListener("WebComponentsReady",se,!1),ce});
