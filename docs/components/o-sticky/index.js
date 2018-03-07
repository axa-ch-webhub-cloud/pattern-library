var StyleGuideWebComponent=function(){"use strict";function e(e,t){return e(t={exports:{}},t.exports),t.exports}var t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},i=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},r=function e(t,n,i){null===t&&(t=Function.prototype);var o=Object.getOwnPropertyDescriptor(t,n);if(void 0===o){var r=Object.getPrototypeOf(t);return null===r?void 0:e(r,n,i)}if("value"in o)return o.value;var s=o.get;return void 0!==s?s.call(i):void 0},s=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)},a=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},c=function(){return function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var n=[],i=!0,o=!1,r=void 0;try{for(var s,a=e[Symbol.iterator]();!(i=(s=a.next()).done)&&(n.push(s.value),!t||n.length!==t);i=!0);}catch(e){o=!0,r=e}finally{try{!i&&a.return&&a.return()}finally{if(o)throw r}}return n}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),l=function(e,t){return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))},u=function(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)},f=e(function(e){!function(){var n={}.hasOwnProperty;function i(){for(var e=[],o=0;o<arguments.length;o++){var r=arguments[o];if(r){var s=void 0===r?"undefined":t(r);if("string"===s||"number"===s)e.push(r);else if(Array.isArray(r))e.push(i.apply(null,r));else if("object"===s)for(var a in r)n.call(r,a)&&r[a]&&e.push(a)}}return e.join(" ")}e.exports?e.exports=i:window.classNames=i}()}),d=/^\s*(?:true|false|null|undefined|-?[0-9]+\.?[0-9]*|[[{](?:.|[\r\n])*[\]}])\s*$/;function h(e,t){if("function"==typeof e.hasAttribute&&!e.hasAttribute(t))return!1;var n=e.value;if(t?n=e.getAttribute(t):t=e.name,n&&t!==n){if(d.test(n))try{n=JSON.parse(n)}catch(t){console.error("Attribute "+e+" has an error:\n"+t+"\n",n)}}else n=!0;return n}var p=/(?:^\w|[A-Z]|\b\w|\s+|[-_]+)/g,y=/[-_]+/g;function v(e,t){return 0==+e||y.test(e)?"":0===t?e.toLowerCase():e.toUpperCase()}var b=function(){try{var e=new window.CustomEvent("test");if(e.preventDefault(),!0!==e.defaultPrevented)throw new Error("Could not prevent default");return window.CustomEvent}catch(e){}return t;function t(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.bubbles,i=void 0!==n&&n,o=t.cancelable,r=void 0!==o&&o,s=t.detail,a=void 0===s?void 0:s,c=document.createEvent("CustomEvent");c.initCustomEvent(e,i,r,a);var l=c.preventDefault;return c.preventDefault=function(){l.call(c);try{Object.defineProperty(this,"defaultPrevented",{get:function(){return!0}})}catch(e){this.defaultPrevented=!0}},c}}();function m(e,t,n){var i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},r=new b(t,o({},i,{detail:n}));e.dispatchEvent(r)}var g=function(){var e=!1;if("undefined"!=typeof window&&"function"==typeof window.addEventListener){var t=Object.defineProperty({},"passive",{get:function(){e=!0}}),n=function(){};window.addEventListener("testPassiveEventSupport",n,t),window.removeEventListener("testPassiveEventSupport",n,t)}return e}(),_=/^\s+|\s{2,}|\s+$/g;function k(e,t){return new RegExp("^"+e+"$|^"+e+"\\s|\\s"+e+"\\s|\\s"+e+"$",t)}function x(e,t){w(e,t)||(e.className+=" "+t)}function w(e,t){return k(t).test(e.className)}function C(e,t){if(w(e,t)){var n=k(t,"g");e.className=e.className.replace(n," ").replace(_," ")}}var S=/\s+/,A={transitionend:function(){for(var e=document.createElement("div").style,t={transition:"transitionend",OTransition:"oTransitionEnd otransitionend",MozTransition:"transitionend",WebkitTransition:"webkitTransitionEnd"},n=Object.keys(t),i=n.length,o=void 0,r=0;r<i;++r)if(void 0!==e[o=n[r]])return t[o];return""}()};function E(e,n,i,o){var r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{},s=r.capture,a=void 0!==s&&s,c=r.passive,l=void 0===c||c;if(A[n]&&(n=A[n]),!e||!n)return null;var u=void 0===i?"undefined":t(i),f=i&&"string"===u;if("function"===u){if(o){var d=o;a=d.capture,l=d.passive}o=i}for(var h=g?{capture:a,passive:l}:a,p=f?function(t){var n=t.target;for(;!w(n,i)&&n!==e;)n=n.parentNode;if(n!==e)return o(t,n)}:o,y=n.split(S),v=y.length,b=0;b<v;++b)e.addEventListener(y[b],p,h);return function t(){for(var n=0;n<v;++n)e.removeEventListener(y[n],p,h);!function(e,t){if(!e)return!1;for(var n=Object.keys(e),i=n.length,o=0;o<i;++o){var r=n[o];if(e[r]===t)return delete e[r]}}(this,t)}}var T={};function O(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:document;T[e]||(T[e]={count:0,queue:[]});var i=T[e].queue;Array.isArray(i)?i.push([e,t,n]):m(n,e,t)}function N(e,t){var n=E(arguments.length>2&&void 0!==arguments[2]?arguments[2]:document,e,t);T[e]||(T[e]={count:0});var i,o=T[e];return o.count++,o.onsubscribe||(o.onsubscribe=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},i=n.leading,o=void 0!==i&&i,r=n.trailing,s=void 0===r||r,a=n.maxWait,c=void 0!==a&&a,l=void 0,f=void 0,d=void 0,h=void 0,p=!1,y=t!==c,v=!1!==c;function b(){for(var n=arguments.length,i=Array(n),r=0;r<n;r++)i[r]=arguments[r];return l=i,y&&(f&&clearTimeout(f),f=setTimeout(m,t)),v&&!d&&(d=setTimeout(g,c)),o&&!p&&(p=!0,h=e.apply(void 0,u(l))),h}return b.flush=function(){return(f||d)&&(h=e.apply(void 0,u(l))),k(),h},b.cancel=k,b;function m(){d&&clearTimeout(d),_()}function g(){f&&clearTimeout(f),_()}function _(){s&&(h=e.apply(void 0,u(l))),f=null,d=null,p=!1}function k(){f&&(clearTimeout(f),f=null),d&&(clearTimeout(d),d=null),l=void 0,p=!1}}((i=e,function(){m(document,"pubsub/onsubscribe",i),m(document,"pubsub/onsubscribe/"+i,i),T[i]&&delete T[i].unsubscribe}),100)),o.onsubscribe(),function(){o.count--,n.call(this),o.count<=0&&delete T[e]}}function D(){return Reflect.construct(HTMLElement,[],this.__proto__.constructor)}E(document,"pubsub/onsubscribe",function(e){var t=e.detail;T[t]||(T[t]={count:0});var n=T[t],i=n.queue;Array.isArray(i)&&(i.forEach(function(e){var t=c(e,3),n=t[0],i=t[1],o=t[2];m(o,n,i)}),delete n.queue)}),Object.setPrototypeOf(D.prototype,HTMLElement.prototype),Object.setPrototypeOf(D,HTMLElement);var L={},F="throwed",j=function(e){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",i=arguments[1];n(this,t);var o=a(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return o._makeContextReady=o._makeContextReady.bind(o),o._initialise(e,i),o}return s(t,D),i(t,[{key:"_initialise",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;this.initialClassName=this.className,this._styles=e,this._template=t}},{key:"connectedCallback",value:function(){this._appendStyles(),this.render(),this.contextCallback&&this._makeContextReady()}},{key:"disconnectedCallback",value:function(){this.unContextEnabled&&this.unContextEnabled()}},{key:"_appendStyles",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this;if(this._styles){var t=document.createElement("style"),n=document.createTextNode(this._styles);t.appendChild(n),e.insertAdjacentElement?e.insertAdjacentElement("afterbegin",t):e.appendChild(t)}}},{key:"render",value:function(){var e=this;if(!this._hasRendered){var t=this._template;if(t)try{for(var n=document.createDocumentFragment();this.firstChild;)n.appendChild(this.firstChild);var i=t(function(e){if(!e.hasAttributes)return null;for(var t,n={},i=e.attributes,o=i.length,r=0;r<o;++r){var s=i[r],a=s.name;n[(t=a,t.replace(p,v))]=h(s)}return n}(this),n);if(Array.isArray(i))i.forEach(function(t){e.appendChild(t)});else if(i){if("string"==typeof i){var o=new Error(F);throw console.error("\n%cWeb Component %c"+this.nodeName+"%c does not accept string as a return from a template. Maybe use bel?\n\nStack Trace: "+o.stack+"\n","color: #580000; font-size: 14px; line-height:16px;","background: #8b0000; color: #FFF; font-size: 14px; line-height:16px;","color: #580000; font-size: 14px; line-height:16px;"),o}this.appendChild(i)}this._hasRendered=!0}catch(o){o.message!==F&&console.error("\n%cWeb Component %c"+this.nodeName+"%c has an error while loading its template:\n"+o+"\n\nStack Trace: "+o.stack+"\n","color: #580000; font-size: 14px; line-height:16px;","background: #8b0000; color: #FFF; font-size: 14px; line-height:16px;","color: #580000; font-size: 14px; line-height:16px;")}}}},{key:"enableContext",value:function(){var e=this.nodeName.toLowerCase();this.__isContext=!0,this.__contextName=e,O("context/enabled",e)}},{key:"selectContext",value:function(e){this.__selectedContext=e&&e.toLowerCase()}},{key:"_makeContextReady",value:function(){var e=this,t=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}).detail;this.contextNode&&(clearTimeout(this.timeoutId),this.timeoutId=setTimeout(function(){e.contextCallback(e.contextNode,t)},10)),this.unContextEnabled&&this.unContextEnabled(),this.unContextEnabled=N("context/enabled",this._makeContextReady)}},{key:"contextNode",get:function(){for(var e=this.__selectedContext,t=this.parentNode;t&&(!t.__isContext||e&&e!==t.__contextName);)t=t.parentNode;return!(!t||!t.__isContext)&&t}}],[{key:"uuidv4",value:function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(e){var t=16*Math.random()|0;return("x"==e?t:3&t|8).toString(16)})}}]),t}(),I=(function(e){function t(){return n(this,t),a(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}s(t,j),i(t,[{key:"connectedCallback",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"open",t=this.attachShadow({mode:e});this._appendStyles(t),this.render()}}])}(),function(e){function t(){return n(this,t),a(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return s(t,j),i(t,[{key:"_appendStyles",value:function(){t.appendGlobalStyles(this._styles,this.nodeName)}}],[{key:"appendGlobalStyles",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:j.uuidv4();if(e&&!L[e]){var n=document.createElement("style"),i=document.createTextNode(e);n.appendChild(i),n.setAttribute("data-c-name",t.toLowerCase()),document.querySelector("head").appendChild(n),L[e]=!0}}}]),t}()),P=".o-sticky-container {\n  position: relative;\n  display: block; }\n\n.o-sticky-container--debug {\n  background: rgba(255, 255, 0, 0.5); }\n  .o-sticky-container--debug::before {\n    content: ''; }\n  .o-sticky-container--debug.is-sticky-container-active {\n    background: green; }\n    .o-sticky-container--debug.is-sticky-container-active::before {\n      content: 'is-active'; }\n  .o-sticky-container--debug.is-sticky-container-idle::before {\n    content: 'is-idle'; }\n",R=".o-sticky {\n  display: block; }\n\n.o-sticky__placeholder {\n  display: block;\n  height: 0; }\n\n.o-sticky__box {\n  display: block; }\n  .is-sticky-sticky > .o-sticky__box {\n    position: fixed;\n    top: 0;\n    z-index: 1020; }\n  .is-sticky-bottom > .o-sticky__box {\n    position: absolute;\n    bottom: 0;\n    z-index: 1020; }\n  .is-sticky-in-flow > .o-sticky__box {\n    position: static; }\n\n.o-sticky--debug > .o-sticky__box {\n  background: rgba(0, 0, 255, 0.5);\n  color: #fff; }\n  .o-sticky--debug > .o-sticky__box::before, .o-sticky--debug > .o-sticky__box::after {\n    content: '';\n    color: yellow; }\n\n.o-sticky--debug.is-sticky-sticky > .o-sticky__box {\n  background: rgba(255, 0, 0, 0.7); }\n  .o-sticky--debug.is-sticky-sticky > .o-sticky__box::before {\n    content: 'is-sticky'; }\n\n.o-sticky--debug.is-sticky-bottom > .o-sticky__box {\n  background: rgba(255, 165, 0, 0.7); }\n  .o-sticky--debug.is-sticky-bottom > .o-sticky__box::before {\n    content: 'is-bottom'; }\n\n.o-sticky--debug.is-sticky-in-flow > .o-sticky__box::before {\n  content: 'is-in-flow'; }\n\n.o-sticky--debug.is-sticky-scroll-up > .o-sticky__box::after {\n  content: 'is-scroll-up'; }\n\n.o-sticky--debug.is-sticky-scroll-down > .o-sticky__box::after {\n  content: 'is-scroll-down'; }\n",z=function(e){return function(t,n,i){for(var o in n)o in M&&(n[M[o]]=n[o],delete n[o]);return e(t,n,i)}},M={class:"className",for:"htmlFor","http-equiv":"httpEquiv"};var U=1,B=2,q=3,W=4,G=5,V=6,$=7,Y=8,H=9,K=10,X=11,Z=12,J=13;var Q=RegExp("^("+["area","base","basefont","bgsound","br","col","command","embed","frame","hr","img","input","isindex","keygen","link","meta","param","source","track","wbr","!--","animate","animateTransform","circle","cursor","desc","ellipse","feBlend","feColorMatrix","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","font-face-format","font-face-name","font-face-uri","glyph","glyphRef","hkern","image","line","missing-glyph","mpath","path","polygon","polyline","rect","set","stop","tref","use","view","vkern"].join("|")+")(?:[.#][a-zA-Z0-9-￿_:-]+)*$");var ee=/\n[\s]+$/,te=/^\n[\s]+/,ne=/[\s]+$/,ie=/^[\s]+/,oe=/[\n\s]+/g,re=["a","abbr","b","bdi","bdo","br","cite","data","dfn","em","i","kbd","mark","q","rp","rt","rtc","ruby","s","amp","small","span","strong","sub","sup","time","u","var","wbr"],se=["code","pre"],ae=function e(t,n){if(Array.isArray(n))for(var i,o,r=t.nodeName.toLowerCase(),s=!1,a=0,c=n.length;a<c;a++){var l=n[a];if(Array.isArray(l))e(t,l);else{("number"==typeof l||"boolean"==typeof l||"function"==typeof l||l instanceof Date||l instanceof RegExp)&&(l=l.toString());var u=t.childNodes[t.childNodes.length-1];if("string"==typeof l)s=!0,u&&"#text"===u.nodeName?u.nodeValue+=l:(l=document.createTextNode(l),t.appendChild(l),u=l),a===c-1&&(s=!1,-1===re.indexOf(r)&&-1===se.indexOf(r)?""===(i=u.nodeValue.replace(te,"").replace(ne,"").replace(ee,"").replace(oe," "))?t.removeChild(u):u.nodeValue=i:-1===se.indexOf(r)&&(o=0===a?"":" ",i=u.nodeValue.replace(te,o).replace(ie," ").replace(ne,"").replace(ee,"").replace(oe," "),u.nodeValue=i));else if(l&&l.nodeType){s&&(s=!1,-1===re.indexOf(r)&&-1===se.indexOf(r)?""===(i=u.nodeValue.replace(te,"").replace(ee,"").replace(oe," "))?t.removeChild(u):u.nodeValue=i:-1===se.indexOf(r)&&(i=u.nodeValue.replace(ie," ").replace(te,"").replace(ee,"").replace(oe," "),u.nodeValue=i));var f=l.nodeName;f&&(r=f.toLowerCase()),t.appendChild(l)}}}},ce=e(function(e){var n="http://www.w3.org/2000/svg",i="http://www.w3.org/1999/xlink",o=["autofocus","checked","defaultchecked","disabled","formnovalidate","indeterminate","readonly","required","selected","willvalidate"],r="!--",s=["svg","altGlyph","altGlyphDef","altGlyphItem","animate","animateColor","animateMotion","animateTransform","circle","clipPath","color-profile","cursor","defs","desc","ellipse","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","filter","font","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","foreignObject","g","glyph","glyphRef","hkern","image","line","linearGradient","marker","mask","metadata","missing-glyph","mpath","path","pattern","polygon","polyline","radialGradient","rect","set","stop","switch","symbol","text","textPath","title","tref","tspan","use","view","vkern"];function a(e,t,a){var c;-1!==s.indexOf(e)&&(t.namespace=n);var l=!1;if(t.namespace&&(l=t.namespace,delete t.namespace),l)c=document.createElementNS(l,e);else{if(e===r)return document.createComment(t.comment);c=document.createElement(e)}for(var u in t)if(t.hasOwnProperty(u)){var f=u.toLowerCase(),d=t[u];if("classname"===f&&(f="class",u="class"),"htmlFor"===u&&(u="for"),-1!==o.indexOf(f))if("true"===d)d=f;else if("false"===d)continue;"on"===f.slice(0,2)?c[u]=d:l?"xlink:href"===u?c.setAttributeNS(i,u,d):/^xmlns($|:)/i.test(u)||c.setAttributeNS(null,u,d):c.setAttribute(u,d)}return ae(c,a),c}e.exports=function(e,n){n||(n={});var i=n.concat||function(e,t){return String(e)+String(t)};return!1!==n.attrToProp&&(e=z(e)),function(r){for(var s=U,a="",c=arguments.length,l=[],u=0;u<r.length;u++)if(u<c-1){var f=arguments[u+1],d=C(r[u]),h=s;h===K&&(h=Y),h===H&&(h=Y),h===$&&(h=Y),h===W&&(h=G),d.push([0,h,f]),l.push.apply(l,d)}else l.push.apply(l,C(r[u]));var p,y=[null,{},[]],v=[[y,-1]];for(u=0;u<l.length;u++){var b=v[v.length-1][0],m=(d=l[u])[0];if(m===B&&/^\//.test(d[1])){var g=v[v.length-1][1];v.length>1&&(v.pop(),v[v.length-1][0][2][g]=e(b[0],b[1],b[2].length?b[2]:void 0))}else if(m===B){var _=[d[1],{},[]];b[2].push(_),v.push([_,b[2].length-1])}else if(m===G||0===m&&d[1]===G){for(var k,x="";u<l.length;u++)if(l[u][0]===G)x=i(x,l[u][1]);else{if(0!==l[u][0]||l[u][1]!==G)break;if("object"!==t(l[u][2])||x)x=i(x,l[u][2]);else for(k in l[u][2])l[u][2].hasOwnProperty(k)&&!b[1][k]&&(b[1][k]=l[u][2][k])}l[u][0]===X&&u++;for(var w=u;u<l.length;u++)if(l[u][0]===Y||l[u][0]===G)b[1][x]?""===l[u][1]||(b[1][x]=i(b[1][x],l[u][1])):b[1][x]=o(l[u][1]);else{if(0!==l[u][0]||l[u][1]!==Y&&l[u][1]!==G){!x.length||b[1][x]||u!==w||l[u][0]!==q&&l[u][0]!==Z||(b[1][x]=x.toLowerCase()),l[u][0]===q&&u--;break}b[1][x]?""===l[u][2]||(b[1][x]=i(b[1][x],l[u][2])):b[1][x]=o(l[u][2])}}else if(m===G)b[1][d[1]]=!0;else if(0===m&&d[1]===G)b[1][d[2]]=!0;else if(m===q)p=b[0],Q.test(p)&&v.length&&(g=v[v.length-1][1],v.pop(),v[v.length-1][0][2][g]=e(b[0],b[1],b[2].length?b[2]:void 0));else if(0===m&&d[1]===U)void 0===d[2]||null===d[2]?d[2]="":d[2]||(d[2]=i("",d[2])),Array.isArray(d[2][0])?b[2].push.apply(b[2],d[2]):b[2].push(d[2]);else if(m===U)b[2].push(d[1]);else if(m!==X&&m!==Z)throw new Error("unhandled: "+m)}if(y[2].length>1&&/^\s*$/.test(y[2][0])&&y[2].shift(),y[2].length>2||2===y[2].length&&/\S/.test(y[2][1]))throw new Error("multiple root elements must be wrapped in an enclosing tag");return Array.isArray(y[2][0])&&"string"==typeof y[2][0][0]&&Array.isArray(y[2][0][2])&&(y[2][0]=e(y[2][0][0],y[2][0][1],y[2][0][2])),y[2][0];function C(e){var t,i=[];s===$&&(s=W);for(var o=0;o<e.length;o++){var r=e.charAt(o);s===U&&"<"===r?(a.length&&i.push([U,a]),a="",s=B):">"===r&&(t=s)!==H&&t!==K&&s!==J?(s===B?i.push([B,a]):s===G?i.push([G,a]):s===Y&&a.length&&i.push([Y,a]),i.push([q]),a="",s=U):s===J&&/-$/.test(a)&&"-"===r?(n.comments&&i.push([Y,a.substr(0,a.length-1)],[q]),a="",s=U):s===B&&/^!--$/.test(a)?(n.comments&&i.push([B,a],[G,"comment"],[X]),a=r,s=J):s===U||s===J?a+=r:s===B&&"/"===r&&a.length||(s===B&&/\s/.test(r)?(i.push([B,a]),a="",s=W):s===B?a+=r:s===W&&/[^\s"'=/]/.test(r)?(s=G,a=r):s===W&&/\s/.test(r)?(a.length&&i.push([G,a]),i.push([Z])):s===G&&/\s/.test(r)?(i.push([G,a]),a="",s=V):s===G&&"="===r?(i.push([G,a],[X]),a="",s=$):s===G?a+=r:s!==V&&s!==W||"="!==r?s!==V&&s!==W||/\s/.test(r)?s===$&&'"'===r?s=K:s===$&&"'"===r?s=H:s===K&&'"'===r?(i.push([Y,a],[Z]),a="",s=W):s===H&&"'"===r?(i.push([Y,a],[Z]),a="",s=W):s!==$||/\s/.test(r)?s===Y&&/\s/.test(r)?(i.push([Y,a],[Z]),a="",s=W):s!==Y&&s!==H&&s!==K||(a+=r):(s=Y,o--):(i.push([Z]),/[\w-]/.test(r)?(a+=r,s=G):s=W):(i.push([X]),s=$))}return s===U&&a.length?(i.push([U,a]),a=""):s===Y&&a.length?(i.push([Y,a]),a=""):s===K&&a.length?(i.push([Y,a]),a=""):s===H&&a.length?(i.push([Y,a]),a=""):s===G&&(i.push([G,a]),a=""),i}};function o(e){return"function"==typeof e?e:"string"==typeof e?e:e&&"object"===(void 0===e?"undefined":t(e))?e:i("",e)}}(a,{comments:!0}),e.exports.default=e.exports,e.exports.createElement=a}),le=(ce.createElement,l(['<div class="o-sticky__placeholder js-sticky__placeholder"></div>'],['<div class="o-sticky__placeholder js-sticky__placeholder"></div>'])),ue=l(['<div class="o-sticky__box js-sticky__box">',"</div>"],['<div class="o-sticky__box js-sticky__box">',"</div>"]);function fe(e,t){return[ce(le),ce(ue,t)]}var de="pageYOffset"in window?function(){return window.pageYOffset}:function(){var e=document,t=e.body;return e.documentElement.scrollTop||t.scrollTop||0};var he,pe=function(){if(!window.getComputedStyle)return null;var e=window.getComputedStyle(document.documentElement,""),t=(Array.prototype.slice.call(e).join("").match(/-(moz|webkit|ms)-/)||""===e.OLink&&["","o"])[1];return{dom:"WebKit|Moz|MS|O".match(new RegExp("("+t+")","i"))[1],lowercase:t,css:"-"+t+"-",js:t[0].toUpperCase()+t.slice(1)}}().lowercase,ye=function(){var e=window.requestAnimationFrame||window[pe+"RequestAnimationFrame"];if(e)e=e.bind(window);else{var t=0;e=function(e){var n=Date.now(),i=Math.max(0,16-(n-t)),o=setTimeout(function(){e(n+i)},i);return t=n+i,o}}return e}(),ve=(he=(he=window.cancelAnimationFrame||window[pe+"CancelAnimationFrame"]||window[pe+"CancelRequestAnimationFrame"])?he.bind(window):function(e){clearTimeout(e)},void 0),be=0,me=["resize","orientationchange"].join(" "),ge=[me,"scroll","touchstart","touchmove","touchend","pageshow","load"].join(" "),_e=function(){function e(){n(this,e),this.forceRepaint=!1,this.framePending=!1,this.lastScrollTop=0,this.isDirectionFrozen=!1,this.containerNodes=[],this._change=this._change.bind(this),this._freezeDirection=this._freezeDirection.bind(this),this._thawDirection=this._thawDirection.bind(this),this._on()}return i(e,[{key:"addContainer",value:function(e){this.containerNodes.push(e),this._change()}},{key:"_on",value:function(){this._off(),this._unChange=E(window,ge,this._change),this._unFreezeDirection=N("sticky-container/freeze-direction",this._freezeDirection),this._unThawDirection=N("sticky-container/thaw-direction",this._thawDirection)}},{key:"_off",value:function(){this._unChange&&this._unChange(),this._unFreezeDirection&&this._unFreezeDirection(),this._unThawDirection&&this._unThawDirection()}},{key:"_change",value:function(){var e=this,t=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}).type;me.indexOf(t)>=0&&(this.forceRepaint=!0),this.framePending||ye(function(){for(var t=e.containerNodes,n=e.forceRepaint,i=e.lastScrollTop,o=e.isDirectionFrozen,r=e.lastDirection,s=de(),a=s-i,c=o?r:a>0?1:a<0?-1:r,l=0,u=t.length;l<u;l++){var f=t[l],d=f.getBoundingClientRect(),h=d.top,p=d.bottom;O("sticky-container/"+(h<=0&&p>=0?"active":"idle"),{containerTop:h,containerBottom:p,direction:c,forceRepaint:n},f)}e.lastScrollTop=s,e.lastDirection=c,e.framePending=!1,e.forceRepaint=!1})}},{key:"_freezeDirection",value:function(){this.isDirectionFrozen=!0,this.lastDirection=-1}},{key:"_thawDirection",value:function(){this.isDirectionFrozen=!1}},{key:"remove",value:function(e){var t,n,i;e&&(t=this.containerNodes,n=e,(i=t.indexOf(n))>-1&&t.splice(i,1)),--be<=0&&ve&&(this._off(),delete this.containerNodes,ve=null)}}]),e}();function ke(){return ve||(ve=new _e),be++,ve}function xe(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];for(var i=t.length,o={},r=0;r<i;++r){var s=t[r];o[s.toUpperCase()]=s}return o}function we(e,t){for(var n=[],i=Object.keys(t),o=i.length,r=0;r<o;++r){var s=i[r];n.push(s+":"+t[s]+";")}e.style.cssText=n.join("")}var Ce=xe("IS_IN_FLOW","IS_STICKY","IS_BOTTOM"),Se=function(){function e(t){n(this,e),this.wcNode=t,this.state=Ce.IS_IN_FLOW,this.lastDirection=0,this._update=this._update.bind(this),this.placeholder=t.querySelector(e.DEFAULTS.placeholderClass),this.box=t.querySelector(e.DEFAULTS.boxClass),this.spy=ke()}return i(e,[{key:"_on",value:function(){this._off(),this._unActive=N("sticky-container/active",this._update,this._contextNode),this._unIdle=N("sticky-container/idle",this._update,this._contextNode)}},{key:"_off",value:function(){this._unActive&&this._unActive(),this._unIdle&&this._unIdle()}},{key:"_update",value:function(t){var n=t.detail,i=n.containerBottom,o=n.direction,r=n.forceRepaint,s=this.wcNode,a=this.state,c=o!==this.lastDirection,l=s.offsetHeight,u=s.offsetWidth,f=s.getBoundingClientRect(),d=f.left,h=f.top,p=h>0,y=h<=0&&i>=l,v=h<=0&&i<l;c&&1===o?(x(s,e.DEFAULTS.isScrollDown),C(s,e.DEFAULTS.isScrollUp)):c&&-1===o&&(x(s,e.DEFAULTS.isScrollUp),C(s,e.DEFAULTS.isScrollDown)),y&&(r||a!==Ce.IS_STICKY)&&(this.state=Ce.IS_STICKY,x(s,e.DEFAULTS.isStickyClass),C(s,e.DEFAULTS.isBottomClass),we(this.placeholder,{height:l+"px"}),we(this.box,{left:d+"px",width:u+"px"})),v&&(r||a!==Ce.IS_BOTTOM)&&(this.state=Ce.IS_BOTTOM,C(s,e.DEFAULTS.isStickyClass),x(s,e.DEFAULTS.isBottomClass),we(this.placeholder,{height:l+"px"}),we(this.box,{left:d+"px",width:u+"px"})),p&&(r||a!==Ce.IS_IN_FLOW)&&(this.state=Ce.IS_IN_FLOW,C(s,e.DEFAULTS.isStickyClass),C(s,e.DEFAULTS.isBottomClass),we(this.placeholder,{height:""}),we(this.box,{left:"",width:""}))}},{key:"destroy",value:function(){this._off(),this.spy.remove(),delete this.spy,delete this.roodNode,delete this.placeholder,delete this.box,delete this._contextNode}},{key:"contextNode",set:function(e){this._contextNode=e,this._on()}}]),e}();Se.DEFAULTS={placeholderClass:".js-sticky__placeholder",boxClass:".js-sticky__box",isStickyClass:"is-sticky-sticky",isBottomClass:"is-sticky-bottom",isScrollUp:"is-sticky-scroll-up",isScrollDown:"is-sticky-scroll-down"};var Ae=xe("IS_IDLE","IS_ACTIVE"),Ee=function(){function e(t){n(this,e),this.roodNode=t,this.state=Ae.IS_IDLE,this._active=this._active.bind(this),this._idle=this._idle.bind(this),this.spy=ke(),this.spy.addContainer(t),this._on()}return i(e,[{key:"_on",value:function(){this._off(),this._unActive=N("sticky-container/active",this._active,this.roodNode),this._unIdle=N("sticky-container/idle",this._idle,this.roodNode)}},{key:"_off",value:function(){this._unActive&&this._unActive(),this._unIdle&&this._unIdle()}},{key:"_active",value:function(){this.state!==Ae.IS_ACTIVE&&(this.state=Ae.IS_ACTIVE,x(this.roodNode,e.DEFAULTS.isActiveClass),C(this.roodNode,e.DEFAULTS.isIdleClass))}},{key:"_idle",value:function(){this.state!==Ae.IS_IDLE&&(this.state=Ae.IS_IDLE,x(this.roodNode,e.DEFAULTS.isIdleClass),C(this.roodNode,e.DEFAULTS.isActiveClass))}},{key:"destroy",value:function(){this._off(),this.spy.remove(this.roodNode),delete this.spy,delete this.roodNode}}]),e}();Ee.DEFAULTS={isActiveClass:"is-sticky-container-active",isIdleClass:"is-sticky-container-idle"};var Te,Oe,Ne,De=function(e){function t(){n(this,t);var e=a(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,P));return e.enableContext(),e}return s(t,I),i(t,[{key:"connectedCallback",value:function(){r(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"connectedCallback",this).call(this);var e=h(this,"debug");this.className=f(this.initialClassName,"o-sticky-container js-sticky-container",{"o-sticky-container--debug":e}),this.stickyContainer=new Ee(this)}},{key:"disconnectedCallback",value:function(){this.stickyContainer.destroy(),delete this.stickyContainer}}]),t}(),Le=function(e){function t(){n(this,t);var e=a(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,R,fe));return e.selectContext("axa-sticky-container"),e}return s(t,I),i(t,[{key:"connectedCallback",value:function(){r(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"connectedCallback",this).call(this);var e=h(this,"debug");this.className=f(this.initialClassName,"o-sticky js-sticky",{"o-sticky--debug":e}),this.sticky=new Se(this)}},{key:"contextCallback",value:function(e){this.sticky.contextNode=e}},{key:"disconnectedCallback",value:function(){this.sticky.destroy(),delete this.sticky}}]),t}();return Te=function(){window.customElements.define("axa-sticky-container",De),window.customElements.define("axa-sticky",Le)},Oe=0,Ne=function(){if(0===Oe)try{Te.apply(void 0,arguments),Oe+=1,document.removeEventListener("DOMContentLoaded"),document.removeEventListener("WebComponentsReady")}catch(e){}},document.addEventListener("DOMContentLoaded",Ne,!1),document.addEventListener("WebComponentsReady",Ne,!1),{AXASticky:Le,AXAStickyContainer:De}}();
