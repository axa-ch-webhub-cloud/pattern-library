var StyleGuideWebComponent=function(){"use strict";var e=/^\s*(?:true|false|null|undefined|-?[0-9]+\.?[0-9]*|[[{](?:.|[\r\n])*[\]}])\s*$/;function t(t,n){if("function"==typeof t.hasAttribute&&!t.hasAttribute(n))return!1;var r=t.value;if(n?r=t.getAttribute(n):n=t.name,r&&n!==r){if(e.test(r))try{r=JSON.parse(r)}catch(e){console.error("Attribute "+t+" has an error:\n"+e+"\n",r)}}else r=!0;return r}var n=function(){try{var e=new window.CustomEvent("test");if(e.preventDefault(),!0!==e.defaultPrevented)throw new Error("Could not prevent default");return window.CustomEvent}catch(e){}return t;function t(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.bubbles,r=void 0!==n&&n,o=t.cancelable,i=void 0!==o&&o,a=t.detail,s=void 0===a?void 0:a,l=document.createEvent("CustomEvent");l.initCustomEvent(e,r,i,s);var u=l.preventDefault;return l.preventDefault=function(){u.call(l);try{Object.defineProperty(this,"defaultPrevented",{get:function(){return!0}})}catch(e){this.defaultPrevented=!0}},l}}(),r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},s=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)},l=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},u=function(){return function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var n=[],r=!0,o=!1,i=void 0;try{for(var a,s=e[Symbol.iterator]();!(r=(a=s.next()).done)&&(n.push(a.value),!t||n.length!==t);r=!0);}catch(e){o=!0,i=e}finally{try{!r&&s.return&&s.return()}finally{if(o)throw i}}return n}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),c=function(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)};function f(e,t,r){var o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},i=new n(t,a({},o,{detail:r}));e.dispatchEvent(i)}function p(e,t){var n,r;return(n=t,new RegExp("^"+n+"$|^"+n+"\\s|\\s"+n+"\\s|\\s"+n+"$",r)).test(e.className)}var d=/\s+/,h={transitionend:function(){for(var e=document.createElement("div").style,t={transition:"transitionend",OTransition:"oTransitionEnd otransitionend",MozTransition:"transitionend",WebkitTransition:"webkitTransitionEnd"},n=Object.keys(t),r=n.length,o=void 0,i=0;i<r;++i)if(void 0!==e[o=n[i]])return t[o];return null}()};function v(e,t,n,o){var i=arguments.length>4&&void 0!==arguments[4]&&arguments[4];if(h[t]&&(t=h[t]),!e||!t)return null;var a=void 0===n?"undefined":r(n);"function"===a&&(i=!!o,o=n);for(var s=n&&"string"===a?function(t){var r=t.target;for(;!p(r,n)&&r!==e;)r=r.parentNode;if(r!==e)return o(t,r)}:o,l=t.split(d),u=l.length,c=0;c<u;++c)e.addEventListener(l[c],s,i);return function t(){for(var n=0;n<u;++n)e.removeEventListener(l[n],s,i);!function(e,t){if(!e)return!1;for(var n=Object.keys(e),r=n.length,o=0;o<r;++o){var i=n[o];if(e[i]===t)return delete e[i]}}(this,t)}}var m={};function y(e,t){var n=v(arguments.length>2&&void 0!==arguments[2]?arguments[2]:document,e,t);m[e]||(m[e]={count:0});var r,o=m[e];return o.count++,o.onsubscribe||(o.onsubscribe=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=n.leading,o=void 0!==r&&r,i=n.trailing,a=void 0===i||i,s=n.maxWait,l=void 0!==s&&s,u=void 0,f=void 0,p=void 0,d=void 0,h=!1,v=t!==l,m=!1!==l;function y(){for(var n=arguments.length,r=Array(n),i=0;i<n;i++)r[i]=arguments[i];return u=r,v&&(f&&clearTimeout(f),f=setTimeout(g,t)),m&&!p&&(p=setTimeout(b,l)),o&&!h&&(h=!0,d=e.apply(void 0,c(u))),d}return y.flush=function(){return(f||p)&&(d=e.apply(void 0,c(u))),C(),d},y.cancel=C,y;function g(){p&&clearTimeout(p),x()}function b(){f&&clearTimeout(f),x()}function x(){a&&(d=e.apply(void 0,c(u))),f=null,p=null,h=!1}function C(){f&&(clearTimeout(f),f=null),p&&(clearTimeout(p),p=null),u=void 0,h=!1}}((r=e,function(){f(document,"pubsub/onsubscribe",r),f(document,"pubsub/onsubscribe/"+r,r),m[r]&&delete m[r].unsubscribe}),100)),o.onsubscribe(),function(){o.count--,n.call(this),o.count<=0&&delete m[e]}}function g(){return Reflect.construct(HTMLElement,[],this.__proto__.constructor)}v(document,"pubsub/onsubscribe",function(e){var t=e.detail;m[t]||(m[t]={count:0});var n=m[t],r=n.queue;Array.isArray(r)&&(r.forEach(function(e){var t=u(e,3),n=t[0],r=t[1],o=t[2];f(o,n,r)}),delete n.queue)}),Object.setPrototypeOf(g.prototype,HTMLElement.prototype),Object.setPrototypeOf(g,HTMLElement);var b={},x="throwed",C=function(e){function n(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments[1];o(this,n);var r=l(this,(n.__proto__||Object.getPrototypeOf(n)).call(this));return r._makeContextReady=r._makeContextReady.bind(r),r._initialise(e,t),r}return s(n,g),i(n,[{key:"_initialise",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;this.initialClassName=this.className,this._styles=e,this._template=t}},{key:"connectedCallback",value:function(){this._appendStyles(),this.render(),this.contextCallback&&this._makeContextReady()}},{key:"disconnectedCallback",value:function(){this.unContextEnabled&&this.unContextEnabled()}},{key:"_appendStyles",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this;if(this._styles){var t=document.createElement("style"),n=document.createTextNode(this._styles);t.appendChild(n),e.insertAdjacentElement?e.insertAdjacentElement("afterbegin",t):e.appendChild(t)}}},{key:"render",value:function(){var e=this;if(!this._hasRendered){var n=this._template;if(n)try{for(var r=document.createDocumentFragment();this.firstChild;)r.appendChild(this.firstChild);var o=n(function(e){if(!e.hasAttributes)return null;for(var n={},r=e.attributes,o=r.length,i=0;i<o;++i){var a=r[i];n[a.name]=t(a)}return n}(this),r);if(Array.isArray(o))o.forEach(function(t){e.appendChild(t)});else if(o){if("string"==typeof o){var i=new Error(x);throw console.error("\n%cWeb Component %c"+this.nodeName+"%c does not accept string as a return from a template. Maybe use bel?\n\nStack Trace: "+i.stack+"\n","color: #580000; font-size: 14px; line-height:16px;","background: #8b0000; color: #FFF; font-size: 14px; line-height:16px;","color: #580000; font-size: 14px; line-height:16px;"),i}this.appendChild(o)}this._hasRendered=!0}catch(i){i.message!==x&&console.error("\n%cWeb Component %c"+this.nodeName+"%c has an error while loading its template:\n"+i+"\n\nStack Trace: "+i.stack+"\n","color: #580000; font-size: 14px; line-height:16px;","background: #8b0000; color: #FFF; font-size: 14px; line-height:16px;","color: #580000; font-size: 14px; line-height:16px;")}}}},{key:"enableContext",value:function(){var e=this.nodeName.toLowerCase();this.__isContext=!0,this.__contextName=e,function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:document;m[e]||(m[e]={count:0,queue:[]});var r=m[e].queue;Array.isArray(r)?r.push([e,t,n]):f(n,e,t)}("context/enabled",e)}},{key:"selectContext",value:function(e){this.__selectedContext=e.toLowerCase()}},{key:"_makeContextReady",value:function(){var e=this,t=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}).detail;this.contextNode&&(clearTimeout(this.timeoutId),this.timeoutId=setTimeout(function(){e.contextCallback(e.contextNode,t)},10)),this.unContextEnabled&&this.unContextEnabled(),this.unContextEnabled=y("context/enabled",this._makeContextReady)}},{key:"contextNode",get:function(){for(var e=this.__selectedContext,t=this.parentNode;t&&(!t.__isContext||e&&e!==t.__contextName);)t=t.parentNode;return!(!t||!t.__isContext)&&t}}],[{key:"uuidv4",value:function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(e){var t=16*Math.random()|0;return("x"==e?t:3&t|8).toString(16)})}}]),n}(),w=(function(e){function t(){return o(this,t),l(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}s(t,C),i(t,[{key:"connectedCallback",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"open",t=this.attachShadow({mode:e});this._appendStyles(t),this.render()}}])}(),function(e){function t(){return o(this,t),l(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return s(t,C),i(t,[{key:"_appendStyles",value:function(){t.appendGlobalStyles(this._styles,this.nodeName)}}],[{key:"appendGlobalStyles",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:C.uuidv4();if(e&&!b[e]){var n=document.createElement("style"),r=document.createTextNode(e);n.appendChild(r),n.setAttribute("data-c-name",t.toLowerCase()),document.querySelector("head").appendChild(n),b[e]=!0}}}]),t}()),_=".a-icon {\n  width: 50px;\n  height: 50px; }\n\n.a-icon--small {\n  width: 25px;\n  height: 25px; }\n";var k=function(e){return function(t,n,r){for(var o in n)o in E&&(n[E[o]]=n[o],delete n[o]);return e(t,n,r)}},E={class:"className",for:"htmlFor","http-equiv":"httpEquiv"};var O=1,A=2,T=3,S=4,N=5,L=6,j=7,P=8,M=9,F=10,R=11,D=12,G=13;var z=RegExp("^("+["area","base","basefont","bgsound","br","col","command","embed","frame","hr","img","input","isindex","keygen","link","meta","param","source","track","wbr","!--","animate","animateTransform","circle","cursor","desc","ellipse","feBlend","feColorMatrix","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","font-face-format","font-face-name","font-face-uri","glyph","glyphRef","hkern","image","line","missing-glyph","mpath","path","polygon","polyline","rect","set","stop","tref","use","view","vkern"].join("|")+")(?:[.#][a-zA-Z0-9-￿_:-]+)*$");var $,q,V,W,B,I,H=/\n[\s]+$/,J=/^\n[\s]+/,Z=/[\s]+$/,K=/^[\s]+/,Q=/[\n\s]+/g,U=["a","abbr","b","bdi","bdo","br","cite","data","dfn","em","i","kbd","mark","q","rp","rt","rtc","ruby","s","amp","small","span","strong","sub","sup","time","u","var","wbr"],X=["code","pre"],Y=function e(t,n){if(Array.isArray(n))for(var r,o,i=t.nodeName.toLowerCase(),a=!1,s=0,l=n.length;s<l;s++){var u=n[s];if(Array.isArray(u))e(t,u);else{("number"==typeof u||"boolean"==typeof u||"function"==typeof u||u instanceof Date||u instanceof RegExp)&&(u=u.toString());var c=t.childNodes[t.childNodes.length-1];if("string"==typeof u)a=!0,c&&"#text"===c.nodeName?c.nodeValue+=u:(u=document.createTextNode(u),t.appendChild(u),c=u),s===l-1&&(a=!1,-1===U.indexOf(i)&&-1===X.indexOf(i)?""===(r=c.nodeValue.replace(J,"").replace(Z,"").replace(H,"").replace(Q," "))?t.removeChild(c):c.nodeValue=r:-1===X.indexOf(i)&&(o=0===s?"":" ",r=c.nodeValue.replace(J,o).replace(K," ").replace(Z,"").replace(H,"").replace(Q," "),c.nodeValue=r));else if(u&&u.nodeType){a&&(a=!1,-1===U.indexOf(i)&&-1===X.indexOf(i)?""===(r=c.nodeValue.replace(J,"").replace(H,"").replace(Q," "))?t.removeChild(c):c.nodeValue=r:-1===X.indexOf(i)&&(r=c.nodeValue.replace(K," ").replace(J,"").replace(H,"").replace(Q," "),c.nodeValue=r));var f=u.nodeName;f&&(i=f.toLowerCase()),t.appendChild(u)}}}},ee=(function(e){var t="http://www.w3.org/2000/svg",n="http://www.w3.org/1999/xlink",o=["autofocus","checked","defaultchecked","disabled","formnovalidate","indeterminate","readonly","required","selected","willvalidate"],i="!--",a=["svg","altGlyph","altGlyphDef","altGlyphItem","animate","animateColor","animateMotion","animateTransform","circle","clipPath","color-profile","cursor","defs","desc","ellipse","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","filter","font","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","foreignObject","g","glyph","glyphRef","hkern","image","line","linearGradient","marker","mask","metadata","missing-glyph","mpath","path","pattern","polygon","polyline","radialGradient","rect","set","stop","switch","symbol","text","textPath","title","tref","tspan","use","view","vkern"];function s(e,r,s){var l;-1!==a.indexOf(e)&&(r.namespace=t);var u=!1;if(r.namespace&&(u=r.namespace,delete r.namespace),u)l=document.createElementNS(u,e);else{if(e===i)return document.createComment(r.comment);l=document.createElement(e)}for(var c in r)if(r.hasOwnProperty(c)){var f=c.toLowerCase(),p=r[c];if("classname"===f&&(f="class",c="class"),"htmlFor"===c&&(c="for"),-1!==o.indexOf(f))if("true"===p)p=f;else if("false"===p)continue;"on"===f.slice(0,2)?l[c]=p:u?"xlink:href"===c?l.setAttributeNS(n,c,p):/^xmlns($|:)/i.test(c)||l.setAttributeNS(null,c,p):l.setAttribute(c,p)}return Y(l,s),l}e.exports=function(e,t){t||(t={});var n=t.concat||function(e,t){return String(e)+String(t)};return!1!==t.attrToProp&&(e=k(e)),function(i){for(var a=O,s="",l=arguments.length,u=[],c=0;c<i.length;c++)if(c<l-1){var f=arguments[c+1],p=k(i[c]),d=a;d===F&&(d=P),d===M&&(d=P),d===j&&(d=P),d===S&&(d=N),p.push([0,d,f]),u.push.apply(u,p)}else u.push.apply(u,k(i[c]));var h,v=[null,{},[]],m=[[v,-1]];for(c=0;c<u.length;c++){var y=m[m.length-1][0],g=(p=u[c])[0];if(g===A&&/^\//.test(p[1])){var b=m[m.length-1][1];m.length>1&&(m.pop(),m[m.length-1][0][2][b]=e(y[0],y[1],y[2].length?y[2]:void 0))}else if(g===A){var x=[p[1],{},[]];y[2].push(x),m.push([x,y[2].length-1])}else if(g===N||0===g&&p[1]===N){for(var C,w="";c<u.length;c++)if(u[c][0]===N)w=n(w,u[c][1]);else{if(0!==u[c][0]||u[c][1]!==N)break;if("object"!==r(u[c][2])||w)w=n(w,u[c][2]);else for(C in u[c][2])u[c][2].hasOwnProperty(C)&&!y[1][C]&&(y[1][C]=u[c][2][C])}u[c][0]===R&&c++;for(var _=c;c<u.length;c++)if(u[c][0]===P||u[c][0]===N)y[1][w]?""===u[c][1]||(y[1][w]=n(y[1][w],u[c][1])):y[1][w]=o(u[c][1]);else{if(0!==u[c][0]||u[c][1]!==P&&u[c][1]!==N){!w.length||y[1][w]||c!==_||u[c][0]!==T&&u[c][0]!==D||(y[1][w]=w.toLowerCase()),u[c][0]===T&&c--;break}y[1][w]?""===u[c][2]||(y[1][w]=n(y[1][w],u[c][2])):y[1][w]=o(u[c][2])}}else if(g===N)y[1][p[1]]=!0;else if(0===g&&p[1]===N)y[1][p[2]]=!0;else if(g===T)h=y[0],z.test(h)&&m.length&&(b=m[m.length-1][1],m.pop(),m[m.length-1][0][2][b]=e(y[0],y[1],y[2].length?y[2]:void 0));else if(0===g&&p[1]===O)void 0===p[2]||null===p[2]?p[2]="":p[2]||(p[2]=n("",p[2])),Array.isArray(p[2][0])?y[2].push.apply(y[2],p[2]):y[2].push(p[2]);else if(g===O)y[2].push(p[1]);else if(g!==R&&g!==D)throw new Error("unhandled: "+g)}if(v[2].length>1&&/^\s*$/.test(v[2][0])&&v[2].shift(),v[2].length>2||2===v[2].length&&/\S/.test(v[2][1]))throw new Error("multiple root elements must be wrapped in an enclosing tag");return Array.isArray(v[2][0])&&"string"==typeof v[2][0][0]&&Array.isArray(v[2][0][2])&&(v[2][0]=e(v[2][0][0],v[2][0][1],v[2][0][2])),v[2][0];function k(e){var n,r=[];a===j&&(a=S);for(var o=0;o<e.length;o++){var i=e.charAt(o);a===O&&"<"===i?(s.length&&r.push([O,s]),s="",a=A):">"===i&&(n=a)!==M&&n!==F&&a!==G?(a===A?r.push([A,s]):a===N?r.push([N,s]):a===P&&s.length&&r.push([P,s]),r.push([T]),s="",a=O):a===G&&/-$/.test(s)&&"-"===i?(t.comments&&r.push([P,s.substr(0,s.length-1)],[T]),s="",a=O):a===A&&/^!--$/.test(s)?(t.comments&&r.push([A,s],[N,"comment"],[R]),s=i,a=G):a===O||a===G?s+=i:a===A&&/\s/.test(i)?(r.push([A,s]),s="",a=S):a===A?s+=i:a===S&&/[^\s"'=/]/.test(i)?(a=N,s=i):a===S&&/\s/.test(i)?(s.length&&r.push([N,s]),r.push([D])):a===N&&/\s/.test(i)?(r.push([N,s]),s="",a=L):a===N&&"="===i?(r.push([N,s],[R]),s="",a=j):a===N?s+=i:a!==L&&a!==S||"="!==i?a!==L&&a!==S||/\s/.test(i)?a===j&&'"'===i?a=F:a===j&&"'"===i?a=M:a===F&&'"'===i?(r.push([P,s],[D]),s="",a=S):a===M&&"'"===i?(r.push([P,s],[D]),s="",a=S):a!==j||/\s/.test(i)?a===P&&/\s/.test(i)?(r.push([P,s],[D]),s="",a=S):a!==P&&a!==M&&a!==F||(s+=i):(a=P,o--):(r.push([D]),/[\w-]/.test(i)?(s+=i,a=N):a=S):(r.push([R]),a=j)}return a===O&&s.length?(r.push([O,s]),s=""):a===P&&s.length?(r.push([P,s]),s=""):a===F&&s.length?(r.push([P,s]),s=""):a===M&&s.length?(r.push([P,s]),s=""):a===N&&(r.push([N,s]),s=""),r}};function o(e){return"function"==typeof e?e:"string"==typeof e?e:e&&"object"===(void 0===e?"undefined":r(e))?e:n("",e)}}(s,{comments:!0}),e.exports.default=e.exports,e.exports.createElement=s}($={exports:{}},$.exports),$.exports),te=(ee.createElement,q=['\n  <svg class="','">\n    <use xlink:href="#src--assets--icons--','" />\n  </svg>\n'],V=['\n  <svg class="','">\n    <use xlink:href="#src--assets--icons--','" />\n  </svg>\n'],Object.freeze(Object.defineProperties(q,{raw:{value:Object.freeze(V)}}))),ne=function(e){var t=e.id,n=e.classes;return ee(te,n,t)},re=function(e){function t(){return o(this,t),l(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,_,ne))}return s(t,w),t}();return W=function(){window.customElements.define("axa-icon",re)},B=0,I=function(){if(0===B)try{W.apply(void 0,arguments),B+=1,document.removeEventListener("DOMContentLoaded"),document.removeEventListener("WebComponentsReady")}catch(e){}},document.addEventListener("DOMContentLoaded",I,!1),document.addEventListener("WebComponentsReady",I,!1),re}();
