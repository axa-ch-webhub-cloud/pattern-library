!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):e.StyleGuideWebComponent=t()}(this,function(){"use strict";var e=/^\s*(?:true|false|null|undefined|-?[0-9]+\.?[0-9]*|[[{](?:.|[\r\n])*[\]}])\s*$/;function t(t,n){if("function"==typeof t.hasAttribute&&!t.hasAttribute(n))return!1;var r=t.value;if(n?r=t.getAttribute(n):n=t.name,r&&n!==r){if(e.test(r))try{r=JSON.parse(r)}catch(e){console.error("Attribute "+t+" has an error:\n"+e+"\n",r)}}else r=!0;return r}var n=function(){try{var e=new window.CustomEvent("test");if(e.preventDefault(),!0!==e.defaultPrevented)throw new Error("Could not prevent default");return window.CustomEvent}catch(e){}return t;function t(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.bubbles,r=void 0!==n&&n,o=t.cancelable,i=void 0!==o&&o,a=t.detail,l=void 0===a?void 0:a,s=document.createEvent("CustomEvent");s.initCustomEvent(e,r,i,l);var u=s.preventDefault;return s.preventDefault=function(){u.call(s);try{Object.defineProperty(this,"defaultPrevented",{get:function(){return!0}})}catch(e){this.defaultPrevented=!0}},s}}(),r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},l=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)},s=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},u=function(){return function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var n=[],r=!0,o=!1,i=void 0;try{for(var a,l=e[Symbol.iterator]();!(r=(a=l.next()).done)&&(n.push(a.value),!t||n.length!==t);r=!0);}catch(e){o=!0,i=e}finally{try{!r&&l.return&&l.return()}finally{if(o)throw i}}return n}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),c=function(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)};function f(e,t,r){var o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},i=new n(t,a({},o,{detail:r}));e.dispatchEvent(i)}function d(e,t){var n,r;return(n=t,new RegExp("^"+n+"$|^"+n+"\\s|\\s"+n+"\\s|\\s"+n+"$",r)).test(e.className)}var p=/\s+/,h={transitionend:function(){for(var e=document.createElement("div").style,t={transition:"transitionend",OTransition:"oTransitionEnd otransitionend",MozTransition:"transitionend",WebkitTransition:"webkitTransitionEnd"},n=Object.keys(t),r=n.length,o=void 0,i=0;i<r;++i)if(void 0!==e[o=n[i]])return t[o];return null}()};function m(e,t,n,o){var i=arguments.length>4&&void 0!==arguments[4]&&arguments[4];if(h[t]&&(t=h[t]),!e||!t)return null;var a=void 0===n?"undefined":r(n);"function"===a&&(i=!!o,o=n);for(var l=n&&"string"===a?function(t){var r=t.target;for(;!d(r,n)&&r!==e;)r=r.parentNode;if(r!==e)return o(t,r)}:o,s=t.split(p),u=s.length,c=0;c<u;++c)e.addEventListener(s[c],l,i);return function t(){for(var n=0;n<u;++n)e.removeEventListener(s[n],l,i);!function(e,t){if(!e)return!1;for(var n=Object.keys(e),r=n.length,o=0;o<r;++o){var i=n[o];if(e[i]===t)return delete e[i]}}(this,t)}}var v={};function y(e,t){var n=m(arguments.length>2&&void 0!==arguments[2]?arguments[2]:document,e,t);v[e]||(v[e]={count:0});var r,o=v[e];return o.count++,o.onsubscribe||(o.onsubscribe=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=n.leading,o=void 0!==r&&r,i=n.trailing,a=void 0===i||i,l=n.maxWait,s=void 0!==l&&l,u=void 0,f=void 0,d=void 0,p=void 0,h=!1,m=t!==s,v=!1!==s;function y(){for(var n=arguments.length,r=Array(n),i=0;i<n;i++)r[i]=arguments[i];return u=r,m&&(f&&clearTimeout(f),f=setTimeout(b,t)),v&&!d&&(d=setTimeout(g,s)),o&&!h&&(h=!0,p=e.apply(void 0,c(u))),p}return y.flush=function(){return(f||d)&&(p=e.apply(void 0,c(u))),_(),p},y.cancel=_,y;function b(){d&&clearTimeout(d),x()}function g(){f&&clearTimeout(f),x()}function x(){a&&(p=e.apply(void 0,c(u))),f=null,d=null,h=!1}function _(){f&&(clearTimeout(f),f=null),d&&(clearTimeout(d),d=null),u=void 0,h=!1}}((r=e,function(){f(document,"pubsub/onsubscribe",r),f(document,"pubsub/onsubscribe/"+r,r),v[r]&&delete v[r].unsubscribe}),100)),o.onsubscribe(),function(){o.count--,n.call(this),o.count<=0&&delete v[e]}}function b(){return Reflect.construct(HTMLElement,[],this.__proto__.constructor)}m(document,"pubsub/onsubscribe",function(e){var t=e.detail;v[t]||(v[t]={count:0});var n=v[t],r=n.queue;Array.isArray(r)&&(r.forEach(function(e){var t=u(e,3),n=t[0],r=t[1],o=t[2];f(o,n,r)}),delete n.queue)}),Object.setPrototypeOf(b.prototype,HTMLElement.prototype),Object.setPrototypeOf(b,HTMLElement);var g={},x="throwed",_=function(e){function n(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments[1];o(this,n);var r=s(this,(n.__proto__||Object.getPrototypeOf(n)).call(this));return r._makeContextReady=r._makeContextReady.bind(r),r._initialise(e,t),r}return l(n,b),i(n,[{key:"_initialise",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;this.initialClassName=this.className,this._styles=e,this._template=t}},{key:"connectedCallback",value:function(){this._appendStyles(),this.render(),this.contextCallback&&this._makeContextReady()}},{key:"disconnectedCallback",value:function(){this.unContextEnabled&&this.unContextEnabled()}},{key:"_appendStyles",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this;if(this._styles){var t=document.createElement("style"),n=document.createTextNode(this._styles);t.appendChild(n),e.insertAdjacentElement?e.insertAdjacentElement("afterbegin",t):e.appendChild(t)}}},{key:"render",value:function(){var e=this;if(!this._hasRendered){var n=this._template;if(n)try{for(var r=document.createDocumentFragment();this.firstChild;)r.appendChild(this.firstChild);var o=n(function(e){if(!e.hasAttributes)return null;for(var n={},r=e.attributes,o=r.length,i=0;i<o;++i){var a=r[i];n[a.name]=t(a)}return n}(this),r);if(Array.isArray(o))o.forEach(function(t){e.appendChild(t)});else if(o){if("string"==typeof o){var i=new Error(x);throw console.error("\n%cWeb Component %c"+this.nodeName+"%c does not accept string as a return from a template. Maybe use bel?\n\nStack Trace: "+i.stack+"\n","color: #580000; font-size: 14px; line-height:16px;","background: #8b0000; color: #FFF; font-size: 14px; line-height:16px;","color: #580000; font-size: 14px; line-height:16px;"),i}this.appendChild(o)}this._hasRendered=!0}catch(i){i.message!==x&&console.error("\n%cWeb Component %c"+this.nodeName+"%c has an error while loading its template:\n"+i+"\n\nStack Trace: "+i.stack+"\n","color: #580000; font-size: 14px; line-height:16px;","background: #8b0000; color: #FFF; font-size: 14px; line-height:16px;","color: #580000; font-size: 14px; line-height:16px;")}}}},{key:"enableContext",value:function(){var e=this.nodeName.toLowerCase();this.__isContext=!0,this.__contextName=e,function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:document;v[e]||(v[e]={count:0,queue:[]});var r=v[e].queue;Array.isArray(r)?r.push([e,t,n]):f(n,e,t)}("context/enabled",e)}},{key:"selectContext",value:function(e){this.__selectedContext=e.toLowerCase()}},{key:"_makeContextReady",value:function(){var e=this,t=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}).detail;this.contextNode&&(clearTimeout(this.timeoutId),this.timeoutId=setTimeout(function(){e.contextCallback(e.contextNode,t)},10)),this.unContextEnabled&&this.unContextEnabled(),this.unContextEnabled=y("context/enabled",this._makeContextReady)}},{key:"contextNode",get:function(){for(var e=this.__selectedContext,t=this.parentNode;t&&(!t.__isContext||e&&e!==t.__contextName);)t=t.parentNode;return!(!t||!t.__isContext)&&t}}],[{key:"uuidv4",value:function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(e){var t=16*Math.random()|0;return("x"==e?t:3&t|8).toString(16)})}}]),n}(),w=(function(e){function t(){return o(this,t),s(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}l(t,_),i(t,[{key:"connectedCallback",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"open",t=this.attachShadow({mode:e});this._appendStyles(t),this.render()}}])}(),function(e){function t(){return o(this,t),s(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return l(t,_),i(t,[{key:"_appendStyles",value:function(){t.appendGlobalStyles(this._styles,this.nodeName)}}],[{key:"appendGlobalStyles",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:_.uuidv4();if(e&&!g[e]){var n=document.createElement("style"),r=document.createTextNode(e);n.appendChild(r),n.setAttribute("data-c-name",t.toLowerCase()),document.querySelector("head").appendChild(n),g[e]=!0}}}]),t}()),C=".m-header-meta {\n  display: block;\n  background: #fafafa;\n  border-top: 2px solid #00008f;\n  border-bottom: 1px solid #ccc; }\n  @media (max-width: 991px) {\n    .m-header-meta {\n      display: none; } }\n\n.m-header-meta__box {\n  padding-right: 15px;\n  padding-left: 15px;\n  width: 100%;\n  margin-right: auto;\n  margin-left: auto;\n  max-width: auto; }\n  @media (min-width: 576px) {\n    .m-header-meta__box {\n      max-width: 540px; } }\n  @media (min-width: 768px) {\n    .m-header-meta__box {\n      max-width: 720px; } }\n  @media (min-width: 992px) {\n    .m-header-meta__box {\n      max-width: 960px; } }\n  @media (min-width: 1200px) {\n    .m-header-meta__box {\n      max-width: 1140px; } }\n\n.m-header-meta__row {\n  margin-right: -15px;\n  margin-left: -15px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center; }\n";var k=function(e){return function(t,n,r){for(var o in n)o in O&&(n[O[o]]=n[o],delete n[o]);return e(t,n,r)}},O={class:"className",for:"htmlFor","http-equiv":"httpEquiv"};var E=1,A=2,T=3,N=4,S=5,j=6,L=7,P=8,F=9,M=10,R=11,D=12,G=13;var z=RegExp("^("+["area","base","basefont","bgsound","br","col","command","embed","frame","hr","img","input","isindex","keygen","link","meta","param","source","track","wbr","!--","animate","animateTransform","circle","cursor","desc","ellipse","feBlend","feColorMatrix","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","font-face-format","font-face-name","font-face-uri","glyph","glyphRef","hkern","image","line","missing-glyph","mpath","path","polygon","polyline","rect","set","stop","tref","use","view","vkern"].join("|")+")(?:[.#][a-zA-Z0-9-￿_:-]+)*$");var $,q,V,W,B,I,H=/\n[\s]+$/,J=/^\n[\s]+/,Z=/[\s]+$/,K=/^[\s]+/,Q=/[\n\s]+/g,U=["a","abbr","b","bdi","bdo","br","cite","data","dfn","em","i","kbd","mark","q","rp","rt","rtc","ruby","s","amp","small","span","strong","sub","sup","time","u","var","wbr"],X=["code","pre"],Y=function e(t,n){if(Array.isArray(n))for(var r,o,i=t.nodeName.toLowerCase(),a=!1,l=0,s=n.length;l<s;l++){var u=n[l];if(Array.isArray(u))e(t,u);else{("number"==typeof u||"boolean"==typeof u||"function"==typeof u||u instanceof Date||u instanceof RegExp)&&(u=u.toString());var c=t.childNodes[t.childNodes.length-1];if("string"==typeof u)a=!0,c&&"#text"===c.nodeName?c.nodeValue+=u:(u=document.createTextNode(u),t.appendChild(u),c=u),l===s-1&&(a=!1,-1===U.indexOf(i)&&-1===X.indexOf(i)?""===(r=c.nodeValue.replace(J,"").replace(Z,"").replace(H,"").replace(Q," "))?t.removeChild(c):c.nodeValue=r:-1===X.indexOf(i)&&(o=0===l?"":" ",r=c.nodeValue.replace(J,o).replace(K," ").replace(Z,"").replace(H,"").replace(Q," "),c.nodeValue=r));else if(u&&u.nodeType){a&&(a=!1,-1===U.indexOf(i)&&-1===X.indexOf(i)?""===(r=c.nodeValue.replace(J,"").replace(H,"").replace(Q," "))?t.removeChild(c):c.nodeValue=r:-1===X.indexOf(i)&&(r=c.nodeValue.replace(K," ").replace(J,"").replace(H,"").replace(Q," "),c.nodeValue=r));var f=u.nodeName;f&&(i=f.toLowerCase()),t.appendChild(u)}}}},ee=(function(e){var t="http://www.w3.org/2000/svg",n="http://www.w3.org/1999/xlink",o=["autofocus","checked","defaultchecked","disabled","formnovalidate","indeterminate","readonly","required","selected","willvalidate"],i="!--",a=["svg","altGlyph","altGlyphDef","altGlyphItem","animate","animateColor","animateMotion","animateTransform","circle","clipPath","color-profile","cursor","defs","desc","ellipse","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","filter","font","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","foreignObject","g","glyph","glyphRef","hkern","image","line","linearGradient","marker","mask","metadata","missing-glyph","mpath","path","pattern","polygon","polyline","radialGradient","rect","set","stop","switch","symbol","text","textPath","title","tref","tspan","use","view","vkern"];function l(e,r,l){var s;-1!==a.indexOf(e)&&(r.namespace=t);var u=!1;if(r.namespace&&(u=r.namespace,delete r.namespace),u)s=document.createElementNS(u,e);else{if(e===i)return document.createComment(r.comment);s=document.createElement(e)}for(var c in r)if(r.hasOwnProperty(c)){var f=c.toLowerCase(),d=r[c];if("classname"===f&&(f="class",c="class"),"htmlFor"===c&&(c="for"),-1!==o.indexOf(f))if("true"===d)d=f;else if("false"===d)continue;"on"===f.slice(0,2)?s[c]=d:u?"xlink:href"===c?s.setAttributeNS(n,c,d):/^xmlns($|:)/i.test(c)||s.setAttributeNS(null,c,d):s.setAttribute(c,d)}return Y(s,l),s}e.exports=function(e,t){t||(t={});var n=t.concat||function(e,t){return String(e)+String(t)};return!1!==t.attrToProp&&(e=k(e)),function(i){for(var a=E,l="",s=arguments.length,u=[],c=0;c<i.length;c++)if(c<s-1){var f=arguments[c+1],d=k(i[c]),p=a;p===M&&(p=P),p===F&&(p=P),p===L&&(p=P),p===N&&(p=S),d.push([0,p,f]),u.push.apply(u,d)}else u.push.apply(u,k(i[c]));var h,m=[null,{},[]],v=[[m,-1]];for(c=0;c<u.length;c++){var y=v[v.length-1][0],b=(d=u[c])[0];if(b===A&&/^\//.test(d[1])){var g=v[v.length-1][1];v.length>1&&(v.pop(),v[v.length-1][0][2][g]=e(y[0],y[1],y[2].length?y[2]:void 0))}else if(b===A){var x=[d[1],{},[]];y[2].push(x),v.push([x,y[2].length-1])}else if(b===S||0===b&&d[1]===S){for(var _,w="";c<u.length;c++)if(u[c][0]===S)w=n(w,u[c][1]);else{if(0!==u[c][0]||u[c][1]!==S)break;if("object"!==r(u[c][2])||w)w=n(w,u[c][2]);else for(_ in u[c][2])u[c][2].hasOwnProperty(_)&&!y[1][_]&&(y[1][_]=u[c][2][_])}u[c][0]===R&&c++;for(var C=c;c<u.length;c++)if(u[c][0]===P||u[c][0]===S)y[1][w]?""===u[c][1]||(y[1][w]=n(y[1][w],u[c][1])):y[1][w]=o(u[c][1]);else{if(0!==u[c][0]||u[c][1]!==P&&u[c][1]!==S){!w.length||y[1][w]||c!==C||u[c][0]!==T&&u[c][0]!==D||(y[1][w]=w.toLowerCase()),u[c][0]===T&&c--;break}y[1][w]?""===u[c][2]||(y[1][w]=n(y[1][w],u[c][2])):y[1][w]=o(u[c][2])}}else if(b===S)y[1][d[1]]=!0;else if(0===b&&d[1]===S)y[1][d[2]]=!0;else if(b===T)h=y[0],z.test(h)&&v.length&&(g=v[v.length-1][1],v.pop(),v[v.length-1][0][2][g]=e(y[0],y[1],y[2].length?y[2]:void 0));else if(0===b&&d[1]===E)void 0===d[2]||null===d[2]?d[2]="":d[2]||(d[2]=n("",d[2])),Array.isArray(d[2][0])?y[2].push.apply(y[2],d[2]):y[2].push(d[2]);else if(b===E)y[2].push(d[1]);else if(b!==R&&b!==D)throw new Error("unhandled: "+b)}if(m[2].length>1&&/^\s*$/.test(m[2][0])&&m[2].shift(),m[2].length>2||2===m[2].length&&/\S/.test(m[2][1]))throw new Error("multiple root elements must be wrapped in an enclosing tag");return Array.isArray(m[2][0])&&"string"==typeof m[2][0][0]&&Array.isArray(m[2][0][2])&&(m[2][0]=e(m[2][0][0],m[2][0][1],m[2][0][2])),m[2][0];function k(e){var n,r=[];a===L&&(a=N);for(var o=0;o<e.length;o++){var i=e.charAt(o);a===E&&"<"===i?(l.length&&r.push([E,l]),l="",a=A):">"===i&&(n=a)!==F&&n!==M&&a!==G?(a===A?r.push([A,l]):a===S?r.push([S,l]):a===P&&l.length&&r.push([P,l]),r.push([T]),l="",a=E):a===G&&/-$/.test(l)&&"-"===i?(t.comments&&r.push([P,l.substr(0,l.length-1)],[T]),l="",a=E):a===A&&/^!--$/.test(l)?(t.comments&&r.push([A,l],[S,"comment"],[R]),l=i,a=G):a===E||a===G?l+=i:a===A&&/\s/.test(i)?(r.push([A,l]),l="",a=N):a===A?l+=i:a===N&&/[^\s"'=/]/.test(i)?(a=S,l=i):a===N&&/\s/.test(i)?(l.length&&r.push([S,l]),r.push([D])):a===S&&/\s/.test(i)?(r.push([S,l]),l="",a=j):a===S&&"="===i?(r.push([S,l],[R]),l="",a=L):a===S?l+=i:a!==j&&a!==N||"="!==i?a!==j&&a!==N||/\s/.test(i)?a===L&&'"'===i?a=M:a===L&&"'"===i?a=F:a===M&&'"'===i?(r.push([P,l],[D]),l="",a=N):a===F&&"'"===i?(r.push([P,l],[D]),l="",a=N):a!==L||/\s/.test(i)?a===P&&/\s/.test(i)?(r.push([P,l],[D]),l="",a=N):a!==P&&a!==F&&a!==M||(l+=i):(a=P,o--):(r.push([D]),/[\w-]/.test(i)?(l+=i,a=S):a=N):(r.push([R]),a=L)}return a===E&&l.length?(r.push([E,l]),l=""):a===P&&l.length?(r.push([P,l]),l=""):a===M&&l.length?(r.push([P,l]),l=""):a===F&&l.length?(r.push([P,l]),l=""):a===S&&(r.push([S,l]),l=""),r}};function o(e){return"function"==typeof e?e:"string"==typeof e?e:e&&"object"===(void 0===e?"undefined":r(e))?e:n("",e)}}(l,{comments:!0}),e.exports.default=e.exports,e.exports.createElement=l}($={exports:{}},$.exports),$.exports),te=(ee.createElement,q=['\n  <div class="m-header-meta__box">\n    <div class="m-header-meta__row">\n      ',"\n    </div>\n  </div>\n"],V=['\n  <div class="m-header-meta__box">\n    <div class="m-header-meta__row">\n      ',"\n    </div>\n  </div>\n"],Object.freeze(Object.defineProperties(q,{raw:{value:Object.freeze(V)}}))),ne=function(e,t){return ee(te,t)},re=function(e){function t(){return o(this,t),s(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,C,ne))}return l(t,w),i(t,[{key:"connectedCallback",value:function(){(function e(t,n,r){null===t&&(t=Function.prototype);var o=Object.getOwnPropertyDescriptor(t,n);if(void 0===o){var i=Object.getPrototypeOf(t);return null===i?void 0:e(i,n,r)}if("value"in o)return o.value;var a=o.get;return void 0!==a?a.call(r):void 0})(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"connectedCallback",this).call(this),this.className=this.initialClassName+" m-header-meta"}}]),t}();return W=function(){window.customElements.define("axa-header-meta",re)},B=0,I=function(){if(0===B)try{W.apply(void 0,arguments),B+=1,document.removeEventListener("DOMContentLoaded"),document.removeEventListener("WebComponentsReady")}catch(e){}},document.addEventListener("DOMContentLoaded",I,!1),document.addEventListener("WebComponentsReady",I,!1),re});
