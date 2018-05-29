!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):e.StyleGuideWebComponent=t()}(this,function(){"use strict";var e,t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},i=function e(t,n,r){null===t&&(t=Function.prototype);var o=Object.getOwnPropertyDescriptor(t,n);if(void 0===o){var i=Object.getPrototypeOf(t);return null===i?void 0:e(i,n,r)}if("value"in o)return o.value;var a=o.get;return void 0!==a?a.call(r):void 0},a=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)},c=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},l=function e(t,n,r,o){var i=Object.getOwnPropertyDescriptor(t,n);if(void 0===i){var a=Object.getPrototypeOf(t);null!==a&&e(a,n,r,o)}else if("value"in i&&i.writable)i.value=r;else{var c=i.set;void 0!==c&&c.call(o,r)}return r},s=function(){return function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var n=[],r=!0,o=!1,i=void 0;try{for(var a,c=e[Symbol.iterator]();!(r=(a=c.next()).done)&&(n.push(a.value),!t||n.length!==t);r=!0);}catch(e){o=!0,i=e}finally{try{!r&&c.return&&c.return()}finally{if(o)throw i}}return n}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),u=function(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)},d=(function(e){!function(){var n={}.hasOwnProperty;function r(){for(var e=[],o=0;o<arguments.length;o++){var i=arguments[o];if(i){var a=void 0===i?"undefined":t(i);if("string"===a||"number"===a)e.push(i);else if(Array.isArray(i))e.push(r.apply(null,i));else if("object"===a)for(var c in i)n.call(i,c)&&i[c]&&e.push(c)}}return e.join(" ")}e.exports?e.exports=r:window.classNames=r}()}(e={exports:{}},e.exports),e.exports),h=1,p=3,f=8;function v(e,t){var n=e.nodeType,r=e.nodeName;n===h&&function(e,t){for(var n=t.attributes,r=e.attributes,o=null,i=null,a=null,c=null,l=r.length-1;l>=0;--l)if(c=r[l],a=c.name,o=c.namespaceURI,i=c.value,o){var s=c.localName;t.getAttributeNS(o,s||a)!==i&&t.setAttributeNS(o,a,i)}else t.hasAttribute(a)?t.getAttribute(a)!==i&&("null"===i||"undefined"===i?t.removeAttribute(a):t.setAttribute(a,i)):t.setAttribute(a,i);for(var u=n.length-1;u>=0;--u)!1!==(c=n[u]).specified&&(a=c.name,(o=c.namespaceURI)?(a=c.localName||a,e.hasAttributeNS(o,a)||t.removeAttributeNS(o,a)):e.hasAttributeNS(null,a)||t.removeAttribute(a))}(e,t),n!==p&&n!==f||t.nodeValue===e.nodeValue||(t.nodeValue=e.nodeValue),"INPUT"===r?function(e,t){var n=e.value,r=t.value;b(e,t,"checked"),b(e,t,"disabled"),n!==r&&(t.setAttribute("value",n),t.value=n);"null"===n&&(t.value="",t.removeAttribute("value"));e.hasAttributeNS(null,"value")?"range"===t.type&&(t.value=n):t.removeAttribute("value")}(e,t):"OPTION"===r?b(e,t,"selected"):"TEXTAREA"===r&&function(e,t){var n=e.value;n!==t.value&&(t.value=n);if(t.firstChild&&t.firstChild.nodeValue!==n){if(""===n&&t.firstChild.nodeValue===t.placeholder)return;t.firstChild.nodeValue=n}}(e,t)}function b(e,t,n){e[n]!==t[n]&&(t[n]=e[n],e[n]?t.setAttribute(n,""):t.removeAttribute(n))}var y=3;function m(e,t){return t?e?e.isSameNode&&e.isSameNode(t)?t:e.tagName!==t.tagName?e:(v(e,t),t.skipChildren&&t.skipChildren()||function(e,t){for(var n=void 0,r=void 0,o=void 0,i=void 0,a=0,c=0;n=t.childNodes[c],r=e.childNodes[c-a],n||r;c++)if(r)if(n)if(_(r,n))(o=m(r,n))!==n&&(t.replaceChild(o,n),a++);else{i=null;for(var l=c;l<t.childNodes.length;l++)if(_(t.childNodes[l],r)){i=t.childNodes[l];break}i?((o=m(r,i))!==i&&a++,t.insertBefore(o,n)):r.id||n.id?(t.insertBefore(r,n),a++):(o=m(r,n))!==n&&(t.replaceChild(o,n),a++)}else t.appendChild(r),a++;else t.removeChild(n),c--}(e,t),t):null:e}function _(e,t){return e.id?e.id===t.id:e.isSameNode?e.isSameNode(t):e.tagName===t.tagName&&(e.type===y&&e.nodeValue===t.nodeValue)}var g=[];var x=/^\s*(?:true|false|null|undefined|-?[0-9]+\.?[0-9]*|[[{](?:.|[\r\n])*[\]}])\s*$/;function C(e,t){var n=e;if(e&&t!==e){if(x.test(e))try{n=JSON.parse(e)}catch(n){console.error("Attribute "+t+" has an error:\n"+n+"\n",e)}}else n=!0;return n}var w=function(){try{var e=new window.CustomEvent("test",{cancelable:!0});if(e.preventDefault(),!0!==e.defaultPrevented)throw new Error("Could not prevent default");return window.CustomEvent}catch(e){}return t;function t(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.bubbles,r=void 0!==n&&n,o=t.cancelable,i=void 0!==o&&o,a=t.detail,c=void 0===a?void 0:a,l=document.createEvent("CustomEvent");l.initCustomEvent(e,r,i,c);var s=l.preventDefault;return l.preventDefault=function(){s.call(l);try{Object.defineProperty(this,"defaultPrevented",{get:function(){return!0}})}catch(e){this.defaultPrevented=!0}},l}}();function k(e,t,n){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},i=new w(t,o({},r,{detail:n}));return e.dispatchEvent(i)}var O=function(){var e=!1;if("undefined"!=typeof window&&"function"==typeof window.addEventListener){var t=Object.defineProperty({},"passive",{get:function(){e=!0}}),n=function(){};window.addEventListener("testPassiveEventSupport",n,t),window.removeEventListener("testPassiveEventSupport",n,t)}return e}();function A(e){for(var t=e.className,n=!1,r=!0,o=arguments.length,i=Array(o>1?o-1:0),a=1;a<o;a++)i[a-1]=arguments[a];var c=i.map(function(e){var o=(i=e,new RegExp("^"+i+"$|^"+i+"\\s|\\s"+i+"\\s|\\s"+i+"$",a)).test(t);var i,a;o?n=!0:r=!1;return{className:e,hasClass:o}});return!(!r&&!n)&&c}var N=/\s+/,E={transitionend:function(){for(var e=document.createElement("div").style,t={transition:"transitionend",OTransition:"oTransitionEnd otransitionend",MozTransition:"transitionend",WebkitTransition:"webkitTransitionEnd"},n=Object.keys(t),r=n.length,o=void 0,i=0;i<r;++i)if(void 0!==e[o=n[i]])return t[o];return""}()};function T(e,n,r,o){var i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{},a=i.capture,c=void 0!==a&&a,l=i.passive,s=void 0===l||l;if(E[n]&&(n=E[n]),!e||!n)return null;var u=void 0===r?"undefined":t(r),d=r&&"string"===u;if("function"===u){if(o){var h=o;c=h.capture,s=h.passive}o=r}for(var p=O?{capture:c,passive:s}:c,f=d?function(t){var n=t.target;for(;!A(n,r)&&n!==e;)n=n.parentNode;if(n!==e)return o(t,n)}:o,v=n.split(N),b=v.length,y=0;y<b;++y)e.addEventListener(v[y],f,p);return function t(){for(var n=0;n<b;++n)e.removeEventListener(v[n],f,p);!function(e,t){if(!e)return!1;for(var n=Object.keys(e),r=n.length,o=0;o<r;++o){var i=n[o];if(e[i]===t)return delete e[i]}}(this,t)}}function j(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=n.leading,o=void 0!==r&&r,i=n.trailing,a=void 0===i||i,c=n.maxWait,l=void 0!==c&&c,s=void 0,d=void 0,h=void 0,p=void 0,f=!1,v=t!==l,b=!1!==l;function y(){for(var n=arguments.length,r=Array(n),i=0;i<n;i++)r[i]=arguments[i];return s=r,v&&(d&&clearTimeout(d),d=setTimeout(m,t)),b&&!h&&(h=setTimeout(_,l)),o&&!f&&(f=!0,p=e.apply(void 0,u(s))),p}return y.flush=function(){(d||h)&&(p=e.apply(void 0,u(s)));return x(),p},y.cancel=x,y;function m(){h&&clearTimeout(h),g()}function _(){d&&clearTimeout(d),g()}function g(){a&&(p=e.apply(void 0,u(s))),d=null,h=null,f=!1}function x(){d&&(clearTimeout(d),d=null),h&&(clearTimeout(h),h=null),s=void 0,f=!1}}var P={};function S(e,t){var n=T(arguments.length>2&&void 0!==arguments[2]?arguments[2]:document,e,t);P[e]||(P[e]={count:0});var r,o=P[e];return o.count++,o.onsubscribe||(o.onsubscribe=j((r=e,function(){k(document,"pubsub/onsubscribe",r),k(document,"pubsub/onsubscribe/"+r,r),P[r]&&delete P[r].unsubscribe}),100)),o.onsubscribe(),function(){o.count--,n.call(this),o.count<=0&&delete P[e]}}T(document,"pubsub/onsubscribe",function(e){var t=e.detail;P[t]||(P[t]={count:0});var n=P[t],r=n.queue;Array.isArray(r)&&(r.forEach(function(e){var t=s(e,3),n=t[0],r=t[1],o=t[2];k(o,n,r)}),delete n.queue)});var R=/(?:^\w|[A-Z]|\b\w|\s+|[-_]+)/g,L=/[-_]+/g;function M(e){return e.replace(R,V)}function V(e,t){return 0==+e||L.test(e)?"":0===t?e.toLowerCase():e.toUpperCase()}var D=/[A-Z]/g;function U(e,t,n){var r=e.toLowerCase(),o=n.charAt(t+1);return 0===t||o.toUpperCase()===o?r:"-"+r}var z=function(e,t){return e===t},F=function(e){function t(e,r){var o;n(this,t);for(var i="Property >>>"+e+"<<< exists at "+r.nodeName+"#"+r._id+" and evaluates to -> "+r[e],a=arguments.length,l=Array(a>2?a-2:0),s=2;s<a;s++)l[s-2]=arguments[s];var u=c(this,(o=t.__proto__||Object.getPrototypeOf(t)).call.apply(o,[this,i].concat(l)));return Error.captureStackTrace&&Error.captureStackTrace(u,t),u.name="PropertyExistsException",u}return a(t,e),t}(Error);function I(){return Reflect.construct(HTMLElement,[],this.__proto__.constructor)}Object.setPrototypeOf(I.prototype,HTMLElement.prototype),Object.setPrototypeOf(I,HTMLElement);var W,q="throwed",H=["title","checked","disabled"],$={},K=function(e){return e in $||($[e]=0),++$[e]},B=((W=function(){var e;return(e=console).log.apply(e,arguments)},function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:z;return function(){for(var t=arguments.length,n=Array(t),r=0;r<t;r++)n[r]=arguments[r];return function(){for(var t=arguments.length,r=Array(t),o=0;o<t;o++)r[o]=arguments[o];return function(){return e.apply(void 0,[].concat(n,r))?W.apply(void 0,arguments):void 0}}}})()(!0),function(e){function o(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments[1];n(this,o);var r=c(this,(o.__proto__||Object.getPrototypeOf(o)).call(this));r._reduceProps=function(e,t){var n=e.props,i=e.shouldUpdate,a=r._hasKeys[t];if(-1===H.indexOf(t)&&a)throw new F(t,r);var c="_"+t,s=n[t],u=r[c];return i||r.shouldUpdateCallback(s,u)?(r[c]=s,r._props[t]=s,a&&l(o.prototype.__proto__||Object.getPrototypeOf(o.prototype),t,s,r),{props:n,shouldUpdate:!0}):{props:n,shouldUpdate:!1}},r._makeContextReady=function(){var e=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}).detail;r.contextNode&&(clearTimeout(r.timeoutId),r.timeoutId=setTimeout(function(){r.contextCallback(r.contextNode,e)},10)),r.unContextEnabled&&r.unContextEnabled(),r.unContextEnabled=S("context/enabled",r._makeContextReady)},r._initialise(e,t),r._id=K(r.nodeName),r._props={},r._hasKeys={},r.reRender=j(function(){return r.render()},50);var i=r.constructor.observedAttributes;return Array.isArray(i)&&i.forEach(function(e){var t,n=M(e),o=n in r;if(-1===H.indexOf(n)&&o)throw new F(n,r);r._hasKeys[n]=o,Object.defineProperty(r,n,t={get:function(){return this["_"+n]},set:function(e){var r="_"+n;this.shouldUpdateCallback(this[r],e)&&(this[r]=e,this._props[n]=e,o&&l(t.__proto__||Object.getPrototypeOf(t),n,e,this),this._isConnected&&this._hasRendered&&this.reRender())}})}),r}return a(o,I),r(o,[{key:"_initialise",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;this._styles=e,this._template=t,this._hasTemplate=!!t,this._hasRendered=!1,this._isConnected=!1}},{key:"connectedCallback",value:function(){var e=this;if(!this._isConnected){this._isConnected=!0;var t=this.constructor.observedAttributes;this.initialClassName=this.className,Array.isArray(t)&&t.forEach(function(t){var n=M(t);if(e.hasAttribute(t)){var r=function(e,t){if("function"==typeof e.hasAttribute&&!e.hasAttribute(t))return!1;var n=e.value;return t?n=e.getAttribute(t):t=e.name,n=C(n,t)}(e,t),i=e._hasKeys[n];e["_"+n]=r,e._props[n]=r,i&&l(o.prototype.__proto__||Object.getPrototypeOf(o.prototype),n,r,e)}})}this._appendStyles(),this.render(),this.contextCallback&&this._makeContextReady()}},{key:"attributeChangedCallback",value:function(e,t,n){this.shouldUpdateCallback(n,t)&&(this[M(e)]=C(n))}},{key:"batchProps",value:function(e){var t=this.constructor.observedAttributes,n=void 0===t?[]:t;Object.keys(e).filter(function(e){return n.indexOf(e.replace(D,U))>-1}).reduce(this._reduceProps,{props:e,shouldUpdate:!1}).shouldUpdate&&this._isConnected&&this._hasRendered&&this.render()}},{key:"shouldUpdateCallback",value:function(e,t){return e!==t}},{key:"disconnectedCallback",value:function(){this.unContextEnabled&&this.unContextEnabled(),this._isConnected=!1}},{key:"_appendStyles",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this;if(this._styles){var t=document.createElement("style"),n=document.createTextNode(this._styles);t.appendChild(n),e.insertAdjacentElement?e.insertAdjacentElement("afterbegin",t):e.appendChild(t)}}},{key:"render",value:function(){var e=this,n=!this._hasRendered;if(this.willRenderCallback(n),this._hasTemplate){var r=this._template;try{if(n){for(var a=document.createDocumentFragment(),c=[];this.firstChild;)c.push(this.firstChild),a.appendChild(this.firstChild);this._lightDOMRefs=c,this.childrenFragment=a}else this._lightDOMRefs.forEach(function(t){var n=t.cloneNode(!0);e.childrenFragment.appendChild(n)});var l=r(this._props,this.childrenFragment),s=document.createDocumentFragment();if(Array.isArray(l))l.forEach(function(e){s.appendChild(e)});else if(l){if("string"==typeof l){var u=new Error(q);throw console.error("\n%cWeb Component %c"+this.nodeName+"%c#"+this._id+" does not accept string as a return from a template. Maybe use bel?\n\nStack Trace: "+u.stack+"\n","color: #580000; font-size: 14px; line-height:16px;","background: #8b0000; color: #FFF; font-size: 14px; line-height:16px;","color: #580000; font-size: 14px; line-height:16px;"),u}s.appendChild(l)}if(n)i(o.prototype.__proto__||Object.getPrototypeOf(o.prototype),"appendChild",this).call(this,s);else{var d=this.cloneNode(!1);d._isMorphing=!0,d.appendChild(s),this._isMorphing=!0,function(e,n){if("object"!==(void 0===e?"undefined":t(e)))throw new Error("componentMorph: oldTree should be an object");if("object"!==(void 0===n?"undefined":t(n)))throw new Error("componentMorph: newTree should be an object");m(n,e)}(this,d),function(){for(var e=void 0;e=g.pop();)delete e.isSameNode;g=[]}(),this._isMorphing=!1}}catch(u){u.message!==q&&console.error("\n%cWeb Component %c"+this.nodeName+"%c#"+this._id+" has an error while loading its template:\n"+u+"\n\nStack Trace: "+u.stack+"\n","color: #580000; font-size: 14px; line-height:16px;","background: #8b0000; color: #FFF; font-size: 14px; line-height:16px;","color: #580000; font-size: 14px; line-height:16px;")}}this._hasRendered=!0,this.didRenderCallback(n)}},{key:"willRenderCallback",value:function(e){}},{key:"didRenderCallback",value:function(e){}},{key:"appendChild",value:function(e){!this._isMorphing&&this._hasTemplate&&this._hasRendered?(this._lightDOMRefs.push(e),this.render()):i(o.prototype.__proto__||Object.getPrototypeOf(o.prototype),"appendChild",this).call(this,e)}},{key:"skipChildren",value:function(){return!this._isMorphing}},{key:"enableContext",value:function(){var e=this.nodeName.toLowerCase();this.__isContext=!0,this.__contextName=e,function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:document;P[e]||(P[e]={count:0,queue:[]});var r=P[e].queue;Array.isArray(r)?r.push([e,t,n]):k(n,e,t)}("context/enabled",e)}},{key:"selectContext",value:function(e){this.__selectedContext=e&&e.toLowerCase()}},{key:"innerText",set:function(e){if(this._hasTemplate&&this._hasRendered){var t=document.createTextNode(e);this._lightDOMRefs=[t],this.render()}else l(o.prototype.__proto__||Object.getPrototypeOf(o.prototype),"innerText",e,this)}},{key:"textContent",set:function(e){if(this._hasTemplate&&this._hasRendered){var t=document.createTextNode(e);this._lightDOMRefs=[t],this.render()}else l(o.prototype.__proto__||Object.getPrototypeOf(o.prototype),"textContent",e,this)}},{key:"innerHTML",set:function(e){if(this._hasTemplate&&this._hasRendered){var t=document.createElement("div");t.innerHTML=e,this._lightDOMRefs=Array.from(t.children),this.render()}else l(o.prototype.__proto__||Object.getPrototypeOf(o.prototype),"innerHTML",e,this)}},{key:"contextNode",get:function(){for(var e=this.__selectedContext,t=this.parentNode;t&&(!t.__isContext||e&&e!==t.__contextName);)t=t.parentNode;return!(!t||!t.__isContext)&&t}}],[{key:"uuidv4",value:function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(e){var t=16*Math.random()|0;return("x"==e?t:3&t|8).toString(16)})}}]),o}()),G={},Z=function(e){function t(){return n(this,t),c(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return a(t,B),r(t,[{key:"_appendStyles",value:function(){t.appendGlobalStyles(this._styles,this.nodeName)}}],[{key:"appendGlobalStyles",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:B.uuidv4();if(e&&!G[e]){var n=document.createElement("style"),r=document.createTextNode(e);n.appendChild(r),n.setAttribute("data-c-name",t.toLowerCase()),document.querySelector("head").appendChild(n),G[e]=!0}}}]),t}(),J="@-webkit-keyframes fadeOutRightInLeft {\n  0% {\n    opacity: 1; }\n  50% {\n    opacity: 0;\n    -webkit-transform: translate3d(100%, 0, 0);\n            transform: translate3d(100%, 0, 0); }\n  51% {\n    opacity: 0;\n    -webkit-transform: translate3d(-100%, 0, 0);\n            transform: translate3d(-100%, 0, 0); }\n  100% {\n    opacity: 1;\n    -webkit-transform: none;\n            transform: none; } }\n\n@keyframes fadeOutRightInLeft {\n  0% {\n    opacity: 1; }\n  50% {\n    opacity: 0;\n    -webkit-transform: translate3d(100%, 0, 0);\n            transform: translate3d(100%, 0, 0); }\n  51% {\n    opacity: 0;\n    -webkit-transform: translate3d(-100%, 0, 0);\n            transform: translate3d(-100%, 0, 0); }\n  100% {\n    opacity: 1;\n    -webkit-transform: none;\n            transform: none; } }\n\n.a-choice {\n  position: relative;\n  display: -webkit-inline-box;\n  display: -ms-inline-flexbox;\n  display: inline-flex; }\n  .a-choice + .a-choice {\n    margin-left: 14px; }\n  .a-choice:hover:not(.a-choice--disabled):not(.a-choice--error) .a-choice__label, .a-choice:active:not(.a-choice--disabled):not(.a-choice--error) .a-choice__label {\n    border-color: #00008f;\n    color: #00008f;\n    background-color: #fff; }\n\n.a-choice__label {\n  /* Adds a hyphen where the word breaks, if supported (No Blink) */\n  -webkit-hyphens: auto;\n      -ms-hyphens: auto;\n          hyphens: auto;\n  /* These are technically the same, but use both */\n  overflow-wrap: break-word;\n  word-wrap: break-word;\n  font-size: 12px;\n  font-weight: 600;\n  line-height: 1.5;\n  letter-spacing: 0.02em;\n  position: relative;\n  padding: 10px 30px;\n  border-width: 2px;\n  border-style: solid;\n  text-decoration: none;\n  text-transform: uppercase;\n  vertical-align: middle;\n  font-size: 12px;\n  font-weight: 400;\n  line-height: 1.5;\n  letter-spacing: 0.02em;\n  margin: 0;\n  color: #333;\n  border: 1px solid #ccc;\n  background-color: #f5f5f5; }\n  @media (min-width: 576px) {\n    .a-choice__label {\n      font-size: 14px;\n      line-height: 1.21; } }\n  .a-choice__label:hover, .a-choice__label:active, .a-choice__label:focus {\n    cursor: pointer;\n    text-decoration: none;\n    outline: none; }\n  .a-choice__label:disabled, .a-choice__label[disabled] {\n    cursor: default !important; }\n  @media (min-width: 576px) {\n    .a-choice__label {\n      font-size: 14px;\n      line-height: 1.21; } }\n\n.a-choice--error .a-choice__label {\n  border-color: #c91432; }\n\n.a-choice__input {\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  clip: rect(0, 0, 0, 0);\n  margin: -1px;\n  overflow: hidden; }\n  .a-choice__input:checked + .a-choice__label,\n  .a-choice__input[checked] + .a-choice__label {\n    font-size: 12px;\n    font-weight: 700;\n    line-height: 1.5;\n    letter-spacing: 0.02em;\n    border-color: #00008f;\n    color: #00008f;\n    background-color: #fff; }\n    @media (min-width: 576px) {\n      .a-choice__input:checked + .a-choice__label,\n      .a-choice__input[checked] + .a-choice__label {\n        font-size: 14px;\n        line-height: 1.21; } }\n  .a-choice__input:disabled + .a-choice__label,\n  .a-choice__input[disabled] + .a-choice__label {\n    cursor: default;\n    color: #999;\n    border-color: #ccc; }\n",X=/\n[\s]+$/,Q=/^\n[\s]+/,Y=/[\s]+$/,ee=/^[\s]+/,te=/[\n\s]+/g,ne=["a","abbr","b","bdi","bdo","br","cite","data","dfn","em","i","kbd","mark","q","rp","rt","rtc","ruby","s","amp","small","span","strong","sub","sup","time","u","var","wbr"],re=["code","pre","textarea"],oe=function e(t,n){if(Array.isArray(n))for(var r,o,i=t.nodeName.toLowerCase(),a=!1,c=0,l=n.length;c<l;c++){var s=n[c];if(Array.isArray(s))e(t,s);else{("number"==typeof s||"boolean"==typeof s||"function"==typeof s||s instanceof Date||s instanceof RegExp)&&(s=s.toString());var u=t.childNodes[t.childNodes.length-1];if("string"==typeof s)a=!0,u&&"#text"===u.nodeName?u.nodeValue+=s:(s=document.createTextNode(s),t.appendChild(s),u=s),c===l-1&&(a=!1,-1===ne.indexOf(i)&&-1===re.indexOf(i)?""===(r=u.nodeValue.replace(Q,"").replace(Y,"").replace(X,"").replace(te," "))?t.removeChild(u):u.nodeValue=r:-1===re.indexOf(i)&&(o=0===c?"":" ",r=u.nodeValue.replace(Q,o).replace(ee," ").replace(Y,"").replace(X,"").replace(te," "),u.nodeValue=r));else if(s&&s.nodeType){a&&(a=!1,-1===ne.indexOf(i)&&-1===re.indexOf(i)?""===(r=u.nodeValue.replace(Q,"").replace(X,"").replace(te," "))?t.removeChild(u):u.nodeValue=r:-1===re.indexOf(i)&&(r=u.nodeValue.replace(ee," ").replace(Q,"").replace(X,"").replace(te," "),u.nodeValue=r));var d=s.nodeName;d&&(i=d.toLowerCase()),t.appendChild(s)}}}};function ie(e,t){var n,r,o,i=e.inputId,a=void 0===i?B.uuidv4():i,c=e.value,l=e.name,s=e.checked,u=void 0!==s&&s,d=e.disabled,h=void 0!==d&&d;return(o=document.createElement("label")).setAttribute("class","a-choice__wrapper"),oe(o,["\n    ",(n=document.createElement("input"),n.setAttribute("id",""+String(a)),n.setAttribute("type","radio"),n.setAttribute("name",""+String(l)),u&&n.setAttribute("checked","checked"),n.setAttribute("value",""+String(c)),h&&n.setAttribute("disabled","disabled"),n.setAttribute("class","a-choice__input"),n),"\n      ",(r=document.createElement("span"),r.setAttribute("class","a-choice__label"),oe(r,[t]),r),"\n  "]),o}var ae,ce,le,se=function(e){function t(){return n(this,t),c(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,J,ie))}return a(t,Z),r(t,null,[{key:"observedAttributes",get:function(){return["input-id","error","value","name","checked","disabled"]}}]),r(t,[{key:"willRenderCallback",value:function(){var e=this.error,t=this.checked,n=this.disabled;this.className=d(this.initialClassName,"a-choice",{"a-choice--error":e,"a-choice--checked":t,"a-choice--disabled":n})}}]),t}();return se.tagName="axa-choice",ae=function(){window.customElements.define(se.tagName,se)},ce=0,le=function(){if(0===ce)try{ae.apply(void 0,arguments),ce+=1,document.removeEventListener("DOMContentLoaded"),document.removeEventListener("WebComponentsReady")}catch(e){}},document.addEventListener("DOMContentLoaded",le,!1),document.addEventListener("WebComponentsReady",le,!1),se});
