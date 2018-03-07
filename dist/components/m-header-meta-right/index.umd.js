!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):e.StyleGuideWebComponent=t()}(this,function(){"use strict";var e=/^\s*(?:true|false|null|undefined|-?[0-9]+\.?[0-9]*|[[{](?:.|[\r\n])*[\]}])\s*$/;function t(t,n){if("function"==typeof t.hasAttribute&&!t.hasAttribute(n))return!1;var r=t.value;if(n?r=t.getAttribute(n):n=t.name,r&&n!==r){if(e.test(r))try{r=JSON.parse(r)}catch(e){console.error("Attribute "+t+" has an error:\n"+e+"\n",r)}}else r=!0;return r}var n=/(?:^\w|[A-Z]|\b\w|\s+|[-_]+)/g,r=/[-_]+/g;function o(e,t){return 0==+e||r.test(e)?"":0===t?e.toLowerCase():e.toUpperCase()}var i=function(){try{var e=new window.CustomEvent("test");if(e.preventDefault(),!0!==e.defaultPrevented)throw new Error("Could not prevent default");return window.CustomEvent}catch(e){}return t;function t(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.bubbles,r=void 0!==n&&n,o=t.cancelable,i=void 0!==o&&o,a=t.detail,s=void 0===a?void 0:a,l=document.createEvent("CustomEvent");l.initCustomEvent(e,r,i,s);var u=l.preventDefault;return l.preventDefault=function(){u.call(l);try{Object.defineProperty(this,"defaultPrevented",{get:function(){return!0}})}catch(e){this.defaultPrevented=!0}},l}}(),a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},s=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},l=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},c=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)},f=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},p=function(){return function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var n=[],r=!0,o=!1,i=void 0;try{for(var a,s=e[Symbol.iterator]();!(r=(a=s.next()).done)&&(n.push(a.value),!t||n.length!==t);r=!0);}catch(e){o=!0,i=e}finally{try{!r&&s.return&&s.return()}finally{if(o)throw i}}return n}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),d=function(e,t){return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))},h=function(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)};function m(e,t,n){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},o=new i(t,u({},r,{detail:n}));e.dispatchEvent(o)}var v=function(){var e=!1;if("undefined"!=typeof window&&"function"==typeof window.addEventListener){var t=Object.defineProperty({},"passive",{get:function(){e=!0}}),n=function(){};window.addEventListener("testPassiveEventSupport",n,t),window.removeEventListener("testPassiveEventSupport",n,t)}return e}();function y(e,t){var n,r;return(n=t,new RegExp("^"+n+"$|^"+n+"\\s|\\s"+n+"\\s|\\s"+n+"$",r)).test(e.className)}var g=/\s+/,b={transitionend:function(){for(var e=document.createElement("div").style,t={transition:"transitionend",OTransition:"oTransitionEnd otransitionend",MozTransition:"transitionend",WebkitTransition:"webkitTransitionEnd"},n=Object.keys(t),r=n.length,o=void 0,i=0;i<r;++i)if(void 0!==e[o=n[i]])return t[o];return""}()};function x(e,t,n,r){var o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{},i=o.capture,s=void 0!==i&&i,l=o.passive,u=void 0===l||l;if(b[t]&&(t=b[t]),!e||!t)return null;var c=void 0===n?"undefined":a(n),f=n&&"string"===c;if("function"===c){if(r){var p=r;s=p.capture,u=p.passive}r=n}for(var d=v?{capture:s,passive:u}:s,h=f?function(t){var o=t.target;for(;!y(o,n)&&o!==e;)o=o.parentNode;if(o!==e)return r(t,o)}:r,m=t.split(g),x=m.length,_=0;_<x;++_)e.addEventListener(m[_],h,d);return function t(){for(var n=0;n<x;++n)e.removeEventListener(m[n],h,d);!function(e,t){if(!e)return!1;for(var n=Object.keys(e),r=n.length,o=0;o<r;++o){var i=n[o];if(e[i]===t)return delete e[i]}}(this,t)}}var _={};function w(e,t){var n=x(arguments.length>2&&void 0!==arguments[2]?arguments[2]:document,e,t);_[e]||(_[e]={count:0});var r,o=_[e];return o.count++,o.onsubscribe||(o.onsubscribe=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=n.leading,o=void 0!==r&&r,i=n.trailing,a=void 0===i||i,s=n.maxWait,l=void 0!==s&&s,u=void 0,c=void 0,f=void 0,p=void 0,d=!1,m=t!==l,v=!1!==l;function y(){for(var n=arguments.length,r=Array(n),i=0;i<n;i++)r[i]=arguments[i];return u=r,m&&(c&&clearTimeout(c),c=setTimeout(g,t)),v&&!f&&(f=setTimeout(b,l)),o&&!d&&(d=!0,p=e.apply(void 0,h(u))),p}return y.flush=function(){return(c||f)&&(p=e.apply(void 0,h(u))),_(),p},y.cancel=_,y;function g(){f&&clearTimeout(f),x()}function b(){c&&clearTimeout(c),x()}function x(){a&&(p=e.apply(void 0,h(u))),c=null,f=null,d=!1}function _(){c&&(clearTimeout(c),c=null),f&&(clearTimeout(f),f=null),u=void 0,d=!1}}((r=e,function(){m(document,"pubsub/onsubscribe",r),m(document,"pubsub/onsubscribe/"+r,r),_[r]&&delete _[r].unsubscribe}),100)),o.onsubscribe(),function(){o.count--,n.call(this),o.count<=0&&delete _[e]}}function C(){return Reflect.construct(HTMLElement,[],this.__proto__.constructor)}x(document,"pubsub/onsubscribe",function(e){var t=e.detail;_[t]||(_[t]={count:0});var n=_[t],r=n.queue;Array.isArray(r)&&(r.forEach(function(e){var t=p(e,3),n=t[0],r=t[1],o=t[2];m(o,n,r)}),delete n.queue)}),Object.setPrototypeOf(C.prototype,HTMLElement.prototype),Object.setPrototypeOf(C,HTMLElement);var k={},O="throwed",E=function(e){function r(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments[1];s(this,r);var n=f(this,(r.__proto__||Object.getPrototypeOf(r)).call(this));return n._makeContextReady=n._makeContextReady.bind(n),n._initialise(e,t),n}return c(r,C),l(r,[{key:"_initialise",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;this.initialClassName=this.className,this._styles=e,this._template=t}},{key:"connectedCallback",value:function(){this._appendStyles(),this.render(),this.contextCallback&&this._makeContextReady()}},{key:"disconnectedCallback",value:function(){this.unContextEnabled&&this.unContextEnabled()}},{key:"_appendStyles",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this;if(this._styles){var t=document.createElement("style"),n=document.createTextNode(this._styles);t.appendChild(n),e.insertAdjacentElement?e.insertAdjacentElement("afterbegin",t):e.appendChild(t)}}},{key:"render",value:function(){var e=this;if(!this._hasRendered){var r=this._template;if(r)try{for(var i=document.createDocumentFragment();this.firstChild;)i.appendChild(this.firstChild);var a=r(function(e){if(!e.hasAttributes)return null;for(var r,i={},a=e.attributes,s=a.length,l=0;l<s;++l){var u=a[l],c=u.name;i[(r=c,r.replace(n,o))]=t(u)}return i}(this),i);if(Array.isArray(a))a.forEach(function(t){e.appendChild(t)});else if(a){if("string"==typeof a){var s=new Error(O);throw console.error("\n%cWeb Component %c"+this.nodeName+"%c does not accept string as a return from a template. Maybe use bel?\n\nStack Trace: "+s.stack+"\n","color: #580000; font-size: 14px; line-height:16px;","background: #8b0000; color: #FFF; font-size: 14px; line-height:16px;","color: #580000; font-size: 14px; line-height:16px;"),s}this.appendChild(a)}this._hasRendered=!0}catch(s){s.message!==O&&console.error("\n%cWeb Component %c"+this.nodeName+"%c has an error while loading its template:\n"+s+"\n\nStack Trace: "+s.stack+"\n","color: #580000; font-size: 14px; line-height:16px;","background: #8b0000; color: #FFF; font-size: 14px; line-height:16px;","color: #580000; font-size: 14px; line-height:16px;")}}}},{key:"enableContext",value:function(){var e=this.nodeName.toLowerCase();this.__isContext=!0,this.__contextName=e,function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:document;_[e]||(_[e]={count:0,queue:[]});var r=_[e].queue;Array.isArray(r)?r.push([e,t,n]):m(n,e,t)}("context/enabled",e)}},{key:"selectContext",value:function(e){this.__selectedContext=e&&e.toLowerCase()}},{key:"_makeContextReady",value:function(){var e=this,t=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}).detail;this.contextNode&&(clearTimeout(this.timeoutId),this.timeoutId=setTimeout(function(){e.contextCallback(e.contextNode,t)},10)),this.unContextEnabled&&this.unContextEnabled(),this.unContextEnabled=w("context/enabled",this._makeContextReady)}},{key:"contextNode",get:function(){for(var e=this.__selectedContext,t=this.parentNode;t&&(!t.__isContext||e&&e!==t.__contextName);)t=t.parentNode;return!(!t||!t.__isContext)&&t}}],[{key:"uuidv4",value:function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(e){var t=16*Math.random()|0;return("x"==e?t:3&t|8).toString(16)})}}]),r}(),A=(function(e){function t(){return s(this,t),f(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}c(t,E),l(t,[{key:"connectedCallback",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"open",t=this.attachShadow({mode:e});this._appendStyles(t),this.render()}}])}(),function(e){function t(){return s(this,t),f(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return c(t,E),l(t,[{key:"_appendStyles",value:function(){t.appendGlobalStyles(this._styles,this.nodeName)}}],[{key:"appendGlobalStyles",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:E.uuidv4();if(e&&!k[e]){var n=document.createElement("style"),r=document.createTextNode(e);n.appendChild(r),n.setAttribute("data-c-name",t.toLowerCase()),document.querySelector("head").appendChild(n),k[e]=!0}}}]),t}()),S=".m-header-meta-right {\n  padding-right: 15px;\n  padding-left: 15px;\n  margin-left: auto; }\n  .m-header-meta-right .m-button {\n    margin-top: -2px;\n    margin-bottom: -1px; }\n\n.m-header-meta-right__list {\n  padding: 0;\n  margin: 0;\n  list-style-type: none;\n  margin-right: -15px;\n  margin-left: -15px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap; }\n\n.m-header-meta-right__list-item {\n  display: block;\n  border-right: 1px solid #ccc; }\n  .m-header-meta-right__list-item:first-child {\n    border-left: 1px solid #ccc; }\n";var T=function(e){return function(t,n,r){for(var o in n)o in L&&(n[L[o]]=n[o],delete n[o]);return e(t,n,r)}},L={class:"className",for:"htmlFor","http-equiv":"httpEquiv"};var N=1,j=2,P=3,F=4,M=5,R=6,D=7,G=8,z=9,$=10,q=11,V=12,W=13;var B=RegExp("^("+["area","base","basefont","bgsound","br","col","command","embed","frame","hr","img","input","isindex","keygen","link","meta","param","source","track","wbr","!--","animate","animateTransform","circle","cursor","desc","ellipse","feBlend","feColorMatrix","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","font-face-format","font-face-name","font-face-uri","glyph","glyphRef","hkern","image","line","missing-glyph","mpath","path","polygon","polyline","rect","set","stop","tref","use","view","vkern"].join("|")+")(?:[.#][a-zA-Z0-9-￿_:-]+)*$");var I,H,Z,J,U=/\n[\s]+$/,K=/^\n[\s]+/,Q=/[\s]+$/,X=/^[\s]+/,Y=/[\n\s]+/g,ee=["a","abbr","b","bdi","bdo","br","cite","data","dfn","em","i","kbd","mark","q","rp","rt","rtc","ruby","s","amp","small","span","strong","sub","sup","time","u","var","wbr"],te=["code","pre"],ne=function e(t,n){if(Array.isArray(n))for(var r,o,i=t.nodeName.toLowerCase(),a=!1,s=0,l=n.length;s<l;s++){var u=n[s];if(Array.isArray(u))e(t,u);else{("number"==typeof u||"boolean"==typeof u||"function"==typeof u||u instanceof Date||u instanceof RegExp)&&(u=u.toString());var c=t.childNodes[t.childNodes.length-1];if("string"==typeof u)a=!0,c&&"#text"===c.nodeName?c.nodeValue+=u:(u=document.createTextNode(u),t.appendChild(u),c=u),s===l-1&&(a=!1,-1===ee.indexOf(i)&&-1===te.indexOf(i)?""===(r=c.nodeValue.replace(K,"").replace(Q,"").replace(U,"").replace(Y," "))?t.removeChild(c):c.nodeValue=r:-1===te.indexOf(i)&&(o=0===s?"":" ",r=c.nodeValue.replace(K,o).replace(X," ").replace(Q,"").replace(U,"").replace(Y," "),c.nodeValue=r));else if(u&&u.nodeType){a&&(a=!1,-1===ee.indexOf(i)&&-1===te.indexOf(i)?""===(r=c.nodeValue.replace(K,"").replace(U,"").replace(Y," "))?t.removeChild(c):c.nodeValue=r:-1===te.indexOf(i)&&(r=c.nodeValue.replace(X," ").replace(K,"").replace(U,"").replace(Y," "),c.nodeValue=r));var f=u.nodeName;f&&(i=f.toLowerCase()),t.appendChild(u)}}}},re=(function(e){var t="http://www.w3.org/2000/svg",n="http://www.w3.org/1999/xlink",r=["autofocus","checked","defaultchecked","disabled","formnovalidate","indeterminate","readonly","required","selected","willvalidate"],o="!--",i=["svg","altGlyph","altGlyphDef","altGlyphItem","animate","animateColor","animateMotion","animateTransform","circle","clipPath","color-profile","cursor","defs","desc","ellipse","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","filter","font","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","foreignObject","g","glyph","glyphRef","hkern","image","line","linearGradient","marker","mask","metadata","missing-glyph","mpath","path","pattern","polygon","polyline","radialGradient","rect","set","stop","switch","symbol","text","textPath","title","tref","tspan","use","view","vkern"];function s(e,a,s){var l;-1!==i.indexOf(e)&&(a.namespace=t);var u=!1;if(a.namespace&&(u=a.namespace,delete a.namespace),u)l=document.createElementNS(u,e);else{if(e===o)return document.createComment(a.comment);l=document.createElement(e)}for(var c in a)if(a.hasOwnProperty(c)){var f=c.toLowerCase(),p=a[c];if("classname"===f&&(f="class",c="class"),"htmlFor"===c&&(c="for"),-1!==r.indexOf(f))if("true"===p)p=f;else if("false"===p)continue;"on"===f.slice(0,2)?l[c]=p:u?"xlink:href"===c?l.setAttributeNS(n,c,p):/^xmlns($|:)/i.test(c)||l.setAttributeNS(null,c,p):l.setAttribute(c,p)}return ne(l,s),l}e.exports=function(e,t){t||(t={});var n=t.concat||function(e,t){return String(e)+String(t)};return!1!==t.attrToProp&&(e=T(e)),function(o){for(var i=N,s="",l=arguments.length,u=[],c=0;c<o.length;c++)if(c<l-1){var f=arguments[c+1],p=k(o[c]),d=i;d===$&&(d=G),d===z&&(d=G),d===D&&(d=G),d===F&&(d=M),p.push([0,d,f]),u.push.apply(u,p)}else u.push.apply(u,k(o[c]));var h,m=[null,{},[]],v=[[m,-1]];for(c=0;c<u.length;c++){var y=v[v.length-1][0],g=(p=u[c])[0];if(g===j&&/^\//.test(p[1])){var b=v[v.length-1][1];v.length>1&&(v.pop(),v[v.length-1][0][2][b]=e(y[0],y[1],y[2].length?y[2]:void 0))}else if(g===j){var x=[p[1],{},[]];y[2].push(x),v.push([x,y[2].length-1])}else if(g===M||0===g&&p[1]===M){for(var _,w="";c<u.length;c++)if(u[c][0]===M)w=n(w,u[c][1]);else{if(0!==u[c][0]||u[c][1]!==M)break;if("object"!==a(u[c][2])||w)w=n(w,u[c][2]);else for(_ in u[c][2])u[c][2].hasOwnProperty(_)&&!y[1][_]&&(y[1][_]=u[c][2][_])}u[c][0]===q&&c++;for(var C=c;c<u.length;c++)if(u[c][0]===G||u[c][0]===M)y[1][w]?""===u[c][1]||(y[1][w]=n(y[1][w],u[c][1])):y[1][w]=r(u[c][1]);else{if(0!==u[c][0]||u[c][1]!==G&&u[c][1]!==M){!w.length||y[1][w]||c!==C||u[c][0]!==P&&u[c][0]!==V||(y[1][w]=w.toLowerCase()),u[c][0]===P&&c--;break}y[1][w]?""===u[c][2]||(y[1][w]=n(y[1][w],u[c][2])):y[1][w]=r(u[c][2])}}else if(g===M)y[1][p[1]]=!0;else if(0===g&&p[1]===M)y[1][p[2]]=!0;else if(g===P)h=y[0],B.test(h)&&v.length&&(b=v[v.length-1][1],v.pop(),v[v.length-1][0][2][b]=e(y[0],y[1],y[2].length?y[2]:void 0));else if(0===g&&p[1]===N)void 0===p[2]||null===p[2]?p[2]="":p[2]||(p[2]=n("",p[2])),Array.isArray(p[2][0])?y[2].push.apply(y[2],p[2]):y[2].push(p[2]);else if(g===N)y[2].push(p[1]);else if(g!==q&&g!==V)throw new Error("unhandled: "+g)}if(m[2].length>1&&/^\s*$/.test(m[2][0])&&m[2].shift(),m[2].length>2||2===m[2].length&&/\S/.test(m[2][1]))throw new Error("multiple root elements must be wrapped in an enclosing tag");return Array.isArray(m[2][0])&&"string"==typeof m[2][0][0]&&Array.isArray(m[2][0][2])&&(m[2][0]=e(m[2][0][0],m[2][0][1],m[2][0][2])),m[2][0];function k(e){var n,r=[];i===D&&(i=F);for(var o=0;o<e.length;o++){var a=e.charAt(o);i===N&&"<"===a?(s.length&&r.push([N,s]),s="",i=j):">"===a&&(n=i)!==z&&n!==$&&i!==W?(i===j?r.push([j,s]):i===M?r.push([M,s]):i===G&&s.length&&r.push([G,s]),r.push([P]),s="",i=N):i===W&&/-$/.test(s)&&"-"===a?(t.comments&&r.push([G,s.substr(0,s.length-1)],[P]),s="",i=N):i===j&&/^!--$/.test(s)?(t.comments&&r.push([j,s],[M,"comment"],[q]),s=a,i=W):i===N||i===W?s+=a:i===j&&"/"===a&&s.length||(i===j&&/\s/.test(a)?(r.push([j,s]),s="",i=F):i===j?s+=a:i===F&&/[^\s"'=/]/.test(a)?(i=M,s=a):i===F&&/\s/.test(a)?(s.length&&r.push([M,s]),r.push([V])):i===M&&/\s/.test(a)?(r.push([M,s]),s="",i=R):i===M&&"="===a?(r.push([M,s],[q]),s="",i=D):i===M?s+=a:i!==R&&i!==F||"="!==a?i!==R&&i!==F||/\s/.test(a)?i===D&&'"'===a?i=$:i===D&&"'"===a?i=z:i===$&&'"'===a?(r.push([G,s],[V]),s="",i=F):i===z&&"'"===a?(r.push([G,s],[V]),s="",i=F):i!==D||/\s/.test(a)?i===G&&/\s/.test(a)?(r.push([G,s],[V]),s="",i=F):i!==G&&i!==z&&i!==$||(s+=a):(i=G,o--):(r.push([V]),/[\w-]/.test(a)?(s+=a,i=M):i=F):(r.push([q]),i=D))}return i===N&&s.length?(r.push([N,s]),s=""):i===G&&s.length?(r.push([G,s]),s=""):i===$&&s.length?(r.push([G,s]),s=""):i===z&&s.length?(r.push([G,s]),s=""):i===M&&(r.push([M,s]),s=""),r}};function r(e){return"function"==typeof e?e:"string"==typeof e?e:e&&"object"===(void 0===e?"undefined":a(e))?e:n("",e)}}(s,{comments:!0}),e.exports.default=e.exports,e.exports.createElement=s}(I={exports:{}},I.exports),I.exports),oe=(re.createElement,d(['\n  <ul class="m-header-meta-right__list">\n    ',"\n  </ul>\n"],['\n  <ul class="m-header-meta-right__list">\n    ',"\n  </ul>\n"])),ie=d(['\n      <li class="m-header-meta-right__list-item">',"</li>\n    "],['\n      <li class="m-header-meta-right__list-item">',"</li>\n    "]),ae=function(e,t){var n=t.children;return re(oe,Array.from(n).map(function(e){return re(ie,e)}))},se=function(e){function t(){return s(this,t),f(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,S,ae))}return c(t,A),l(t,[{key:"connectedCallback",value:function(){(function e(t,n,r){null===t&&(t=Function.prototype);var o=Object.getOwnPropertyDescriptor(t,n);if(void 0===o){var i=Object.getPrototypeOf(t);return null===i?void 0:e(i,n,r)}if("value"in o)return o.value;var a=o.get;return void 0!==a?a.call(r):void 0})(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"connectedCallback",this).call(this),this.className=this.initialClassName+" m-header-meta-right"}}]),t}();return H=function(){window.customElements.define("axa-header-meta-right",se)},Z=0,J=function(){if(0===Z)try{H.apply(void 0,arguments),Z+=1,document.removeEventListener("DOMContentLoaded"),document.removeEventListener("WebComponentsReady")}catch(e){}},document.addEventListener("DOMContentLoaded",J,!1),document.addEventListener("WebComponentsReady",J,!1),se});
