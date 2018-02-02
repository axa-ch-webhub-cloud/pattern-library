!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):e.StyleGuideWebComponent=t()}(this,function(){"use strict";var e=/^\s*(?:true|false|null|undefined|-?[0-9]+\.?[0-9]*|[[{](?:.|[\r\n])*[\]}])\s*$/;function t(t,n){if("function"==typeof t.hasAttribute&&!t.hasAttribute(n))return!1;var r=t.value;if(n?r=t.getAttribute(n):n=t.name,r&&n!==r){if(e.test(r))try{r=JSON.parse(r)}catch(e){console.error("Attribute "+t+" has an error:\n"+e+"\n",r)}}else r=!0;return r}var n=function(){try{var e=new window.CustomEvent("test");if(e.preventDefault(),!0!==e.defaultPrevented)throw new Error("Could not prevent default");return window.CustomEvent}catch(e){}return t;function t(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.bubbles,r=void 0!==n&&n,o=t.cancelable,i=void 0!==o&&o,a=t.detail,l=void 0===a?void 0:a,s=document.createEvent("CustomEvent");s.initCustomEvent(e,r,i,l);var u=s.preventDefault;return s.preventDefault=function(){u.call(s);try{Object.defineProperty(this,"defaultPrevented",{get:function(){return!0}})}catch(e){this.defaultPrevented=!0}},s}}(),r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},l=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)},s=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},u=function(){return function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var n=[],r=!0,o=!1,i=void 0;try{for(var a,l=e[Symbol.iterator]();!(r=(a=l.next()).done)&&(n.push(a.value),!t||n.length!==t);r=!0);}catch(e){o=!0,i=e}finally{try{!r&&l.return&&l.return()}finally{if(o)throw i}}return n}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),c=function(e,t){return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))},f=function(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)};function d(e,t,r){var o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},i=new n(t,a({},o,{detail:r}));e.dispatchEvent(i)}function h(e,t){var n,r;return(n=t,new RegExp("^"+n+"$|^"+n+"\\s|\\s"+n+"\\s|\\s"+n+"$",r)).test(e.className)}var p=/\s+/,m={transitionend:function(){for(var e=document.createElement("div").style,t={transition:"transitionend",OTransition:"oTransitionEnd otransitionend",MozTransition:"transitionend",WebkitTransition:"webkitTransitionEnd"},n=Object.keys(t),r=n.length,o=void 0,i=0;i<r;++i)if(void 0!==e[o=n[i]])return t[o];return null}()};function v(e,t,n,o){var i=arguments.length>4&&void 0!==arguments[4]&&arguments[4];if(m[t]&&(t=m[t]),!e||!t)return null;var a=void 0===n?"undefined":r(n);"function"===a&&(i=!!o,o=n);for(var l=n&&"string"===a?function(t){var r=t.target;for(;!h(r,n)&&r!==e;)r=r.parentNode;if(r!==e)return o(t,r)}:o,s=t.split(p),u=s.length,c=0;c<u;++c)e.addEventListener(s[c],l,i);return function t(){for(var n=0;n<u;++n)e.removeEventListener(s[n],l,i);!function(e,t){if(!e)return!1;for(var n=Object.keys(e),r=n.length,o=0;o<r;++o){var i=n[o];if(e[i]===t)return delete e[i]}}(this,t)}}var g={};function y(e,t){var n=v(arguments.length>2&&void 0!==arguments[2]?arguments[2]:document,e,t);g[e]||(g[e]={count:0});var r,o=g[e];return o.count++,o.onsubscribe||(o.onsubscribe=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=n.leading,o=void 0!==r&&r,i=n.trailing,a=void 0===i||i,l=n.maxWait,s=void 0!==l&&l,u=void 0,c=void 0,d=void 0,h=void 0,p=!1,m=t!==s,v=!1!==s;function g(){for(var n=arguments.length,r=Array(n),i=0;i<n;i++)r[i]=arguments[i];return u=r,m&&(c&&clearTimeout(c),c=setTimeout(y,t)),v&&!d&&(d=setTimeout(b,s)),o&&!p&&(p=!0,h=e.apply(void 0,f(u))),h}return g.flush=function(){return(c||d)&&(h=e.apply(void 0,f(u))),_(),h},g.cancel=_,g;function y(){d&&clearTimeout(d),x()}function b(){c&&clearTimeout(c),x()}function x(){a&&(h=e.apply(void 0,f(u))),c=null,d=null,p=!1}function _(){c&&(clearTimeout(c),c=null),d&&(clearTimeout(d),d=null),u=void 0,p=!1}}((r=e,function(){d(document,"pubsub/onsubscribe",r),d(document,"pubsub/onsubscribe/"+r,r),g[r]&&delete g[r].unsubscribe}),100)),o.onsubscribe(),function(){o.count--,n.call(this),o.count<=0&&delete g[e]}}function b(){return Reflect.construct(HTMLElement,[],this.__proto__.constructor)}v(document,"pubsub/onsubscribe",function(e){var t=e.detail;g[t]||(g[t]={count:0});var n=g[t],r=n.queue;Array.isArray(r)&&(r.forEach(function(e){var t=u(e,3),n=t[0],r=t[1],o=t[2];d(o,n,r)}),delete n.queue)}),Object.setPrototypeOf(b.prototype,HTMLElement.prototype),Object.setPrototypeOf(b,HTMLElement);var x={},_="throwed",w=function(e){function n(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments[1];o(this,n);var r=s(this,(n.__proto__||Object.getPrototypeOf(n)).call(this));return r._makeContextReady=r._makeContextReady.bind(r),r._initialise(e,t),r}return l(n,b),i(n,[{key:"_initialise",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;this.initialClassName=this.className,this._styles=e,this._template=t}},{key:"connectedCallback",value:function(){this._appendStyles(),this.render(),this.contextCallback&&this._makeContextReady()}},{key:"disconnectedCallback",value:function(){this.unContextEnabled&&this.unContextEnabled()}},{key:"_appendStyles",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this;if(this._styles){var t=document.createElement("style"),n=document.createTextNode(this._styles);t.appendChild(n),e.insertAdjacentElement?e.insertAdjacentElement("afterbegin",t):e.appendChild(t)}}},{key:"render",value:function(){var e=this;if(!this._hasRendered){var n=this._template;if(n)try{for(var r=document.createDocumentFragment();this.firstChild;)r.appendChild(this.firstChild);var o=n(function(e){if(!e.hasAttributes)return null;for(var n={},r=e.attributes,o=r.length,i=0;i<o;++i){var a=r[i];n[a.name]=t(a)}return n}(this),r);if(Array.isArray(o))o.forEach(function(t){e.appendChild(t)});else if(o){if("string"==typeof o){var i=new Error(_);throw console.error("\n%cWeb Component %c"+this.nodeName+"%c does not accept string as a return from a template. Maybe use bel?\n\nStack Trace: "+i.stack+"\n","color: #580000; font-size: 14px; line-height:16px;","background: #8b0000; color: #FFF; font-size: 14px; line-height:16px;","color: #580000; font-size: 14px; line-height:16px;"),i}this.appendChild(o)}this._hasRendered=!0}catch(i){i.message!==_&&console.error("\n%cWeb Component %c"+this.nodeName+"%c has an error while loading its template:\n"+i+"\n\nStack Trace: "+i.stack+"\n","color: #580000; font-size: 14px; line-height:16px;","background: #8b0000; color: #FFF; font-size: 14px; line-height:16px;","color: #580000; font-size: 14px; line-height:16px;")}}}},{key:"enableContext",value:function(){var e=this.nodeName.toLowerCase();this.__isContext=!0,this.__contextName=e,function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:document;g[e]||(g[e]={count:0,queue:[]});var r=g[e].queue;Array.isArray(r)?r.push([e,t,n]):d(n,e,t)}("context/enabled",e)}},{key:"selectContext",value:function(e){this.__selectedContext=e.toLowerCase()}},{key:"_makeContextReady",value:function(){var e=this,t=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}).detail;this.contextNode&&(clearTimeout(this.timeoutId),this.timeoutId=setTimeout(function(){e.contextCallback(e.contextNode,t)},10)),this.unContextEnabled&&this.unContextEnabled(),this.unContextEnabled=y("context/enabled",this._makeContextReady)}},{key:"contextNode",get:function(){for(var e=this.__selectedContext,t=this.parentNode;t&&(!t.__isContext||e&&e!==t.__contextName);)t=t.parentNode;return!(!t||!t.__isContext)&&t}}],[{key:"uuidv4",value:function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(e){var t=16*Math.random()|0;return("x"==e?t:3&t|8).toString(16)})}}]),n}(),C=(function(e){function t(){return o(this,t),s(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}l(t,w),i(t,[{key:"connectedCallback",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"open",t=this.attachShadow({mode:e});this._appendStyles(t),this.render()}}])}(),function(e){function t(){return o(this,t),s(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return l(t,w),i(t,[{key:"_appendStyles",value:function(){t.appendGlobalStyles(this._styles,this.nodeName)}}],[{key:"appendGlobalStyles",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:w.uuidv4();if(e&&!x[e]){var n=document.createElement("style"),r=document.createTextNode(e);n.appendChild(r),n.setAttribute("data-c-name",t.toLowerCase()),document.querySelector("head").appendChild(n),x[e]=!0}}}]),t}()),k=".m-header-logo {\n  max-width: 16.66667%;\n  -webkit-box-flex: 0;\n      -ms-flex: 0 0 16.66667%;\n          flex: 0 0 16.66667%;\n  display: block;\n  -ms-flex-item-align: center;\n      align-self: center; }\n  @media (min-width: 992px) {\n    .m-header-logo {\n      -ms-flex-item-align: start;\n          align-self: flex-start; } }\n\n.m-header-logo__link {\n  display: block;\n  width: 35px; }\n  @media (min-width: 576px) {\n    .m-header-logo__link {\n      width: 43px; } }\n  @media (min-width: 1200px) {\n    .m-header-logo__link {\n      width: 53px; } }\n\n.m-header-logo__icon,\n.m-header-logo__img {\n  width: 35px;\n  height: 35px;\n  display: block; }\n  @media (min-width: 576px) {\n    .m-header-logo__icon,\n    .m-header-logo__img {\n      width: 43px;\n      height: 43px; } }\n  @media (min-width: 1200px) {\n    .m-header-logo__icon,\n    .m-header-logo__img {\n      width: 53px;\n      height: 53px; } }\n";var O=function(e){return function(t,n,r){for(var o in n)o in E&&(n[E[o]]=n[o],delete n[o]);return e(t,n,r)}},E={class:"className",for:"htmlFor","http-equiv":"httpEquiv"};var A=1,T=2,N=3,S=4,j=5,L=6,P=7,M=8,F=9,R=10,D=11,G=12,z=13;var $=RegExp("^("+["area","base","basefont","bgsound","br","col","command","embed","frame","hr","img","input","isindex","keygen","link","meta","param","source","track","wbr","!--","animate","animateTransform","circle","cursor","desc","ellipse","feBlend","feColorMatrix","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","font-face-format","font-face-name","font-face-uri","glyph","glyphRef","hkern","image","line","missing-glyph","mpath","path","polygon","polyline","rect","set","stop","tref","use","view","vkern"].join("|")+")(?:[.#][a-zA-Z0-9-￿_:-]+)*$");var q,V=/\n[\s]+$/,W=/^\n[\s]+/,B=/[\s]+$/,I=/^[\s]+/,H=/[\n\s]+/g,X=["a","abbr","b","bdi","bdo","br","cite","data","dfn","em","i","kbd","mark","q","rp","rt","rtc","ruby","s","amp","small","span","strong","sub","sup","time","u","var","wbr"],J=["code","pre"],Z=function e(t,n){if(Array.isArray(n))for(var r,o,i=t.nodeName.toLowerCase(),a=!1,l=0,s=n.length;l<s;l++){var u=n[l];if(Array.isArray(u))e(t,u);else{("number"==typeof u||"boolean"==typeof u||"function"==typeof u||u instanceof Date||u instanceof RegExp)&&(u=u.toString());var c=t.childNodes[t.childNodes.length-1];if("string"==typeof u)a=!0,c&&"#text"===c.nodeName?c.nodeValue+=u:(u=document.createTextNode(u),t.appendChild(u),c=u),l===s-1&&(a=!1,-1===X.indexOf(i)&&-1===J.indexOf(i)?""===(r=c.nodeValue.replace(W,"").replace(B,"").replace(V,"").replace(H," "))?t.removeChild(c):c.nodeValue=r:-1===J.indexOf(i)&&(o=0===l?"":" ",r=c.nodeValue.replace(W,o).replace(I," ").replace(B,"").replace(V,"").replace(H," "),c.nodeValue=r));else if(u&&u.nodeType){a&&(a=!1,-1===X.indexOf(i)&&-1===J.indexOf(i)?""===(r=c.nodeValue.replace(W,"").replace(V,"").replace(H," "))?t.removeChild(c):c.nodeValue=r:-1===J.indexOf(i)&&(r=c.nodeValue.replace(I," ").replace(W,"").replace(V,"").replace(H," "),c.nodeValue=r));var f=u.nodeName;f&&(i=f.toLowerCase()),t.appendChild(u)}}}},K=(function(e){var t="http://www.w3.org/2000/svg",n="http://www.w3.org/1999/xlink",o=["autofocus","checked","defaultchecked","disabled","formnovalidate","indeterminate","readonly","required","selected","willvalidate"],i="!--",a=["svg","altGlyph","altGlyphDef","altGlyphItem","animate","animateColor","animateMotion","animateTransform","circle","clipPath","color-profile","cursor","defs","desc","ellipse","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","filter","font","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","foreignObject","g","glyph","glyphRef","hkern","image","line","linearGradient","marker","mask","metadata","missing-glyph","mpath","path","pattern","polygon","polyline","radialGradient","rect","set","stop","switch","symbol","text","textPath","title","tref","tspan","use","view","vkern"];function l(e,r,l){var s;-1!==a.indexOf(e)&&(r.namespace=t);var u=!1;if(r.namespace&&(u=r.namespace,delete r.namespace),u)s=document.createElementNS(u,e);else{if(e===i)return document.createComment(r.comment);s=document.createElement(e)}for(var c in r)if(r.hasOwnProperty(c)){var f=c.toLowerCase(),d=r[c];if("classname"===f&&(f="class",c="class"),"htmlFor"===c&&(c="for"),-1!==o.indexOf(f))if("true"===d)d=f;else if("false"===d)continue;"on"===f.slice(0,2)?s[c]=d:u?"xlink:href"===c?s.setAttributeNS(n,c,d):/^xmlns($|:)/i.test(c)||s.setAttributeNS(null,c,d):s.setAttribute(c,d)}return Z(s,l),s}e.exports=function(e,t){t||(t={});var n=t.concat||function(e,t){return String(e)+String(t)};return!1!==t.attrToProp&&(e=O(e)),function(i){for(var a=A,l="",s=arguments.length,u=[],c=0;c<i.length;c++)if(c<s-1){var f=arguments[c+1],d=k(i[c]),h=a;h===R&&(h=M),h===F&&(h=M),h===P&&(h=M),h===S&&(h=j),d.push([0,h,f]),u.push.apply(u,d)}else u.push.apply(u,k(i[c]));var p,m=[null,{},[]],v=[[m,-1]];for(c=0;c<u.length;c++){var g=v[v.length-1][0],y=(d=u[c])[0];if(y===T&&/^\//.test(d[1])){var b=v[v.length-1][1];v.length>1&&(v.pop(),v[v.length-1][0][2][b]=e(g[0],g[1],g[2].length?g[2]:void 0))}else if(y===T){var x=[d[1],{},[]];g[2].push(x),v.push([x,g[2].length-1])}else if(y===j||0===y&&d[1]===j){for(var _,w="";c<u.length;c++)if(u[c][0]===j)w=n(w,u[c][1]);else{if(0!==u[c][0]||u[c][1]!==j)break;if("object"!==r(u[c][2])||w)w=n(w,u[c][2]);else for(_ in u[c][2])u[c][2].hasOwnProperty(_)&&!g[1][_]&&(g[1][_]=u[c][2][_])}u[c][0]===D&&c++;for(var C=c;c<u.length;c++)if(u[c][0]===M||u[c][0]===j)g[1][w]?""===u[c][1]||(g[1][w]=n(g[1][w],u[c][1])):g[1][w]=o(u[c][1]);else{if(0!==u[c][0]||u[c][1]!==M&&u[c][1]!==j){!w.length||g[1][w]||c!==C||u[c][0]!==N&&u[c][0]!==G||(g[1][w]=w.toLowerCase()),u[c][0]===N&&c--;break}g[1][w]?""===u[c][2]||(g[1][w]=n(g[1][w],u[c][2])):g[1][w]=o(u[c][2])}}else if(y===j)g[1][d[1]]=!0;else if(0===y&&d[1]===j)g[1][d[2]]=!0;else if(y===N)p=g[0],$.test(p)&&v.length&&(b=v[v.length-1][1],v.pop(),v[v.length-1][0][2][b]=e(g[0],g[1],g[2].length?g[2]:void 0));else if(0===y&&d[1]===A)void 0===d[2]||null===d[2]?d[2]="":d[2]||(d[2]=n("",d[2])),Array.isArray(d[2][0])?g[2].push.apply(g[2],d[2]):g[2].push(d[2]);else if(y===A)g[2].push(d[1]);else if(y!==D&&y!==G)throw new Error("unhandled: "+y)}if(m[2].length>1&&/^\s*$/.test(m[2][0])&&m[2].shift(),m[2].length>2||2===m[2].length&&/\S/.test(m[2][1]))throw new Error("multiple root elements must be wrapped in an enclosing tag");return Array.isArray(m[2][0])&&"string"==typeof m[2][0][0]&&Array.isArray(m[2][0][2])&&(m[2][0]=e(m[2][0][0],m[2][0][1],m[2][0][2])),m[2][0];function k(e){var n,r=[];a===P&&(a=S);for(var o=0;o<e.length;o++){var i=e.charAt(o);a===A&&"<"===i?(l.length&&r.push([A,l]),l="",a=T):">"===i&&(n=a)!==F&&n!==R&&a!==z?(a===T?r.push([T,l]):a===j?r.push([j,l]):a===M&&l.length&&r.push([M,l]),r.push([N]),l="",a=A):a===z&&/-$/.test(l)&&"-"===i?(t.comments&&r.push([M,l.substr(0,l.length-1)],[N]),l="",a=A):a===T&&/^!--$/.test(l)?(t.comments&&r.push([T,l],[j,"comment"],[D]),l=i,a=z):a===A||a===z?l+=i:a===T&&/\s/.test(i)?(r.push([T,l]),l="",a=S):a===T?l+=i:a===S&&/[^\s"'=/]/.test(i)?(a=j,l=i):a===S&&/\s/.test(i)?(l.length&&r.push([j,l]),r.push([G])):a===j&&/\s/.test(i)?(r.push([j,l]),l="",a=L):a===j&&"="===i?(r.push([j,l],[D]),l="",a=P):a===j?l+=i:a!==L&&a!==S||"="!==i?a!==L&&a!==S||/\s/.test(i)?a===P&&'"'===i?a=R:a===P&&"'"===i?a=F:a===R&&'"'===i?(r.push([M,l],[G]),l="",a=S):a===F&&"'"===i?(r.push([M,l],[G]),l="",a=S):a!==P||/\s/.test(i)?a===M&&/\s/.test(i)?(r.push([M,l],[G]),l="",a=S):a!==M&&a!==F&&a!==R||(l+=i):(a=M,o--):(r.push([G]),/[\w-]/.test(i)?(l+=i,a=j):a=S):(r.push([D]),a=P)}return a===A&&l.length?(r.push([A,l]),l=""):a===M&&l.length?(r.push([M,l]),l=""):a===R&&l.length?(r.push([M,l]),l=""):a===F&&l.length?(r.push([M,l]),l=""):a===j&&(r.push([j,l]),l=""),r}};function o(e){return"function"==typeof e?e:"string"==typeof e?e:e&&"object"===(void 0===e?"undefined":r(e))?e:n("",e)}}(l,{comments:!0}),e.exports.default=e.exports,e.exports.createElement=l}(q={exports:{}},q.exports),q.exports);K.createElement;var Q,U,Y,ee=function(e){return"undefined"!=typeof window?((n=document.createElement("div")).innerHTML=e,r=n.childNodes,Array.isArray(r)?r:[].slice.call(r)):((t=new String(e)).__encoded=!0,t);var t,n,r},te=c(['\n  <a href="#" class="m-header-logo__link">\n    ',"\n  </a>\n"],['\n  <a href="#" class="m-header-logo__link">\n    ',"\n  </a>\n"]),ne=c(['\n      <img class="m-header-logo__img" src="','" alt="','" />\n    '],['\n      <img class="m-header-logo__img" src="','" alt="','" />\n    ']),re=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.src,n=e.alt;return K(te,t?K(ne,t,void 0===n?"AXA Logo":n):ee('<axa-icon id="logo-AXA" classes="m-header-logo__icon"></axa-icon>'))},oe=function(e){function t(){return o(this,t),s(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,k,re))}return l(t,C),i(t,[{key:"connectedCallback",value:function(){(function e(t,n,r){null===t&&(t=Function.prototype);var o=Object.getOwnPropertyDescriptor(t,n);if(void 0===o){var i=Object.getPrototypeOf(t);return null===i?void 0:e(i,n,r)}if("value"in o)return o.value;var a=o.get;return void 0!==a?a.call(r):void 0})(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"connectedCallback",this).call(this),this.className=this.initialClassName+" m-header-logo"}}]),t}();return Q=function(){window.customElements.define("axa-header-logo",oe)},U=0,Y=function(){if(0===U)try{Q.apply(void 0,arguments),U+=1,document.removeEventListener("DOMContentLoaded"),document.removeEventListener("WebComponentsReady")}catch(e){}},document.addEventListener("DOMContentLoaded",Y,!1),document.addEventListener("WebComponentsReady",Y,!1),oe});
