!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):e.StyleGuideWebComponent=t()}(this,function(){"use strict";var e=Object.getOwnPropertySymbols,t=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable;(function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map(function(e){return t[e]}).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach(function(e){r[e]=e}),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(e){return!1}})()&&Object.assign;var s="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",_="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},u=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},l=function(){function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,t,n){return t&&r(e.prototype,t),n&&r(e,n),e}}(),i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},p=function e(t,n,r){null===t&&(t=Function.prototype);var o=Object.getOwnPropertyDescriptor(t,n);if(void 0===o){var i=Object.getPrototypeOf(t);return null===i?void 0:e(i,n,r)}if("value"in o)return o.value;var a=o.get;return void 0!==a?a.call(r):void 0},r=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)},a=function(e,t){var n={};for(var r in e)0<=t.indexOf(r)||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n},d=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},o=function e(t,n,r,o){var i=Object.getOwnPropertyDescriptor(t,n);if(void 0===i){var a=Object.getPrototypeOf(t);null!==a&&e(a,n,r,o)}else if("value"in i&&i.writable)i.value=r;else{var s=i.set;void 0!==s&&s.call(o,r)}return r},c=function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var n=[],r=!0,o=!1,i=void 0;try{for(var a,s=e[Symbol.iterator]();!(r=(a=s.next()).done)&&(n.push(a.value),!t||n.length!==t);r=!0);}catch(e){o=!0,i=e}finally{try{!r&&s.return&&s.return()}finally{if(o)throw i}}return n}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")},O=function(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)};function f(){}var h,y=(function(e){e.exports=function(){function e(e,t,n,r,o,i){if(i!==s){var a=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw a.name="Invariant Violation",a}}function t(){return e}var n={array:e.isRequired=e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t};return n.checkPropTypes=f,n.PropTypes=n}()}(h={exports:{}},h.exports),h.exports),v=0;function b(e,t){var n=e[t];return"function"==typeof n&&(e[t]=function(t){function n(){return t.apply(void 0,arguments)}return 0===v&&(v++,Object.keys(t).map(function(e){return n[e]=t[e],e}).reduce(b,n),v--),n}(n)),e}var m=y;Object.keys(m).reduce(b,m);var g=m.oneOf(["left","center","right"]),C=m.oneOf(["left","right"]);function k(r){function e(e,t,n){return null==e[t]?null:r(e,t,n)}return e.isRequired=r,e}var w=/^[a-z]{2,4}(-([A-Z][a-z]{3}|[0-9]{3}))?(-([A-Z]{2}|[0-9]{3}))?$/;k(function(e,t,n){if(!w.test(e[t]))return new Error("Invalid prop `"+t+"` supplied to `"+n+"`, expected a valid locale.")});m.oneOf(["top","bottom"]);var x=m.oneOf(["up","down"]),T=m.oneOf(["ok","pending","error","unknown"]),A=m.oneOf(["row","col","rowgroup","colgroup","auto"]),N=m.oneOfType([m.string,m.number]),j={text:N,value:m.any,rowspan:N,colspan:N,scope:A,align:g,dense:m.bool},E={float:C,strong:m.bool,bold:m.bool},P=m.oneOfType([m.string,m.number]),R=m.oneOfType([P,m.shape(i({},j,{sort:x,sortActive:m.bool}))]),S=m.oneOfType([P,m.shape(i({},j,E,{action:m.bool,state:T}))]),D=m.oneOfType([P,m.shape(i({},j,E))]),L=m.oneOfType([m.arrayOf(R),m.shape({cells:m.arrayOf(R)})]),U=m.oneOfType([m.arrayOf(S),m.shape({cells:m.arrayOf(S),action:m.bool})]),I=m.oneOfType([m.arrayOf(D),m.shape({cells:m.arrayOf(D)})]);m.oneOfType([L,m.arrayOf(L)]),m.oneOfType([U,m.arrayOf(U)]),m.oneOfType([I,m.arrayOf(I)]);var M,V,q,F,z=k(function(e,t,n){try{new window.URL(e[t],function(){if(document.baseURI)return document.baseURI;var e=document.getElementsByName("base");return e.length&&e[0].href?e[0].href:window.location.href}())}catch(e){return new Error("Invalid prop `"+t+"` supplied to `"+n+"`, expected a valid URL. "+e.message)}return null}),B=function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(e){return t.reduceRight(function(e,t){return t(e)},e)}},K={},$=(M=Object,V=M.getPrototypeOf||function(e){return e.__proto__},q=M.setPrototypeOf||function(e,t){return e.__proto__=t,e},F="object"===("undefined"==typeof Reflect?"undefined":_(Reflect))?Reflect.construct:function(e,t,n){var r,o=[null];return o.push.apply(o,t),r=e.bind.apply(e,o),q(new r,n.prototype)},function(e){var t=V(e);return q(e,q(function(){return F(t,arguments,V(this).constructor)},t))}),H=function(n){return $(function(e){function t(){return u(this,t),d(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return r(t,n),l(t,[{key:"init",value:function(){var e;this._id=((e=this.nodeName)in K||(K[e]=0),++K[e]),this._initialised=!0}},{key:"connectedCallback",value:function(){this._initialised||this.init()}},{key:"attributeChangedCallback",value:function(){this._initialised||this.init()}}],[{key:"uuidv4",value:function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(e){var t=16*Math.random()|0;return("x"==e?t:3&t|8).toString(16)})}}]),t}())},W={},Z=function(){try{var e=new window.CustomEvent("test",{cancelable:!0});if(e.preventDefault(),!0!==e.defaultPrevented)throw new Error("Could not prevent default");return window.CustomEvent}catch(e){}return t;function t(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{},n=t.bubbles,r=void 0!==n&&n,o=t.cancelable,i=void 0!==o&&o,a=t.detail,s=void 0===a?void 0:a,c=document.createEvent("CustomEvent");c.initCustomEvent(e,r,i,s);var u=c.preventDefault;return c.preventDefault=function(){u.call(c);try{Object.defineProperty(this,"defaultPrevented",{get:function(){return!0}})}catch(e){this.defaultPrevented=!0}},c}}();function G(e,t,n){var r=3<arguments.length&&void 0!==arguments[3]?arguments[3]:{},o=new Z(t,i({},r,{detail:n}));return e.dispatchEvent(o)}var J=function(){var e=!1;if("undefined"!=typeof window&&"function"==typeof window.addEventListener){var t=Object.defineProperty({},"passive",{get:function(){e=!0}}),n=function(){};window.addEventListener("testPassiveEventSupport",n,t),window.removeEventListener("testPassiveEventSupport",n,t)}return e}();function Y(e){for(var o=e.className,i=!1,a=!0,t=arguments.length,n=Array(1<t?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var s=n.map(function(e){var t=(n=e,new RegExp("^"+n+"$|^"+n+"\\s|\\s"+n+"\\s|\\s"+n+"$",r)).test(o);var n,r;t?i=!0:a=!1;return{className:e,hasClass:t}});return!(!a&&!i)&&s}var X=/\s+/,Q={transitionend:function(){for(var e=document.createElement("div").style,t={transition:"transitionend",OTransition:"oTransitionEnd otransitionend",MozTransition:"transitionend",WebkitTransition:"webkitTransitionEnd"},n=Object.keys(t),r=n.length,o=void 0,i=0;i<r;++i)if(void 0!==e[o=n[i]])return t[o];return""}()};function ee(n,e,r,o){var t=4<arguments.length&&void 0!==arguments[4]?arguments[4]:{},i=t.capture,a=void 0!==i&&i,s=t.passive,c=void 0===s||s;if(Q[e]&&(e=Q[e]),!n||!e)return null;var u=void 0===r?"undefined":_(r),l=r&&"string"===u;if("function"===u){if(o){var p=o;a=p.capture,c=p.passive}o=r}for(var d=J?{capture:a,passive:c}:a,f=l?function(e){var t=e.target;for(;!Y(t,r)&&t!==n;)t=t.parentNode;if(t!==n)return o(e,t)}:o,h=e.split(X),y=h.length,v=0;v<y;++v)n.addEventListener(h[v],f,d);return function e(){for(var t=0;t<y;++t)n.removeEventListener(h[t],f,d);!function(e,t){if(!e)return;for(var n=Object.keys(e),r=n.length,o=0;o<r;++o){var i=n[o];if(e[i]===t)return delete e[i]}}(this,e)}}function te(r){var o=1<arguments.length&&void 0!==arguments[1]?arguments[1]:0,e=2<arguments.length&&void 0!==arguments[2]?arguments[2]:{},t=e.leading,i=void 0!==t&&t,n=e.trailing,a=void 0===n||n,s=e.maxWait,c=void 0!==s&&s,u=void 0,l=void 0,p=void 0,d=void 0,f=!1,h=o!==c,y=!1!==c;function v(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return u=t,h&&(l&&clearTimeout(l),l=setTimeout(_,o)),y&&!p&&(p=setTimeout(b,c)),i&&!f&&(f=!0,d=r.apply(void 0,O(u))),d}return v.flush=function(){(l||p)&&(d=r.apply(void 0,O(u)));return g(),d},v.cancel=g,v;function _(){p&&clearTimeout(p),m()}function b(){l&&clearTimeout(l),m()}function m(){a&&(d=r.apply(void 0,O(u))),p=l=null,f=!1}function g(){l&&(clearTimeout(l),l=null),p&&(clearTimeout(p),p=null),u=void 0,f=!1}}window.__subscriptions=window.__subscriptions||{};var ne=window.__subscriptions;function re(e,t){var n=ee(2<arguments.length&&void 0!==arguments[2]?arguments[2]:document,e,t);ne[e]||(ne[e]={count:0});var r,o=ne[e];return o.count++,o.onsubscribe||(o.onsubscribe=te((r=e,function(){G(document,"pubsub/onsubscribe",r),G(document,"pubsub/onsubscribe/"+r,r),ne[r]&&delete ne[r].unsubscribe}),100)),o.onsubscribe(),function(){o.count--,n.call(this),o.count<=0&&delete ne[e]}}ee(document,"pubsub/onsubscribe",function(e){var t=e.detail;ne[t]||(ne[t]={count:0});var n=ne[t],r=n.queue;Array.isArray(r)&&(r.forEach(function(e){var t=c(e,3),n=t[0],r=t[1],o=t[2];G(o,n,r)}),delete n.queue)});var oe,ie=function(e,t){return e===t},ae=((oe=function(){var e;return(e=console).log.apply(e,arguments)},function(){var o=0<arguments.length&&void 0!==arguments[0]?arguments[0]:ie;return function(){for(var e=arguments.length,r=Array(e),t=0;t<e;t++)r[t]=arguments[t];return function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(){return o.apply(void 0,[].concat(r,t))?oe.apply(void 0,arguments):void 0}}}})()(!0),[]);var se=1,ce=3,ue=8;function le(e,t){var n=e.nodeType,r=e.nodeName;n===se&&function(e,t){for(var n=t.skipChildren&&t.skipChildren(),r=t.constructor.observedAttributes,o=r&&Array.isArray(r)&&r.length,i=function(e){return n&&o&&-1===r.indexOf(e)},a=t.attributes,s=e.attributes,c=null,u=null,l=null,p=null,d=s.length-1;0<=d;--d)if(p=s[d],l=p.name,c=p.namespaceURI,u=p.value,!i(l))if(c){var f=p.localName;t.getAttributeNS(c,f||l)!==u&&t.setAttributeNS(c,l,u)}else t.hasAttribute(l)?t.getAttribute(l)!==u&&("null"===u||"undefined"===u?t.removeAttribute(l):t.setAttribute(l,u)):t.setAttribute(l,u);for(var h=a.length-1;0<=h;--h)if(!1!==(p=a[h]).specified){if(l=p.name,c=p.namespaceURI,i(l))continue;c?(l=p.localName||l,e.hasAttributeNS(c,l)||t.removeAttributeNS(c,l)):e.hasAttributeNS(null,l)||t.removeAttribute(l)}}(e,t),n!==ce&&n!==ue||t.nodeValue===e.nodeValue||(t.nodeValue=e.nodeValue),"INPUT"===r?function(e,t){var n=e.value,r=t.value;pe(e,t,"checked"),pe(e,t,"disabled"),n!==r&&(t.setAttribute("value",n),t.value=n);"null"===n&&(t.value="",t.removeAttribute("value"));e.hasAttributeNS(null,"value")?"range"===t.type&&(t.value=n):t.removeAttribute("value")}(e,t):"OPTION"===r?pe(e,t,"selected"):"TEXTAREA"===r&&function(e,t){var n=e.value;n!==t.value&&(t.value=n);if(t.firstChild&&t.firstChild.nodeValue!==n){if(""===n&&t.firstChild.nodeValue===t.placeholder)return;t.firstChild.nodeValue=n}}(e,t)}function pe(e,t,n){e[n]!==t[n]&&(t[n]=e[n],e[n]?t.setAttribute(n,""):t.removeAttribute(n))}var de=3;function fe(e,t){return t?e?e.isSameNode&&e.isSameNode(t)?t:e.tagName!==t.tagName?e:(le(e,t),t.skipChildren&&t.skipChildren()||function(e,t){for(var n=void 0,r=void 0,o=void 0,i=void 0,a=0,s=0;n=t.childNodes[s],r=e.childNodes[s-a],n||r;s++)if(r)if(n)if(he(r,n))(o=fe(r,n))!==n&&(t.replaceChild(o,n),a++);else{i=null;for(var c=s;c<t.childNodes.length;c++)if(he(t.childNodes[c],r)){i=t.childNodes[c];break}i?((o=fe(r,i))!==i&&a++,t.insertBefore(o,n)):r.id||n.id?(t.insertBefore(r,n),a++):(o=fe(r,n))!==n&&(t.replaceChild(o,n),a++)}else t.appendChild(r),a++;else t.removeChild(n),s--}(e,t),t):null:e}function he(e,t){return e.id?e.id===t.id:e.isSameNode?e.isSameNode(t):e.tagName===t.tagName&&(e.type===de&&e.nodeValue===t.nodeValue)}var ye,ve,_e,be,me=(ye=Object,ve=ye.getPrototypeOf||function(e){return e.__proto__},_e=ye.setPrototypeOf||function(e,t){return e.__proto__=t,e},be="object"===("undefined"==typeof Reflect?"undefined":_(Reflect))?Reflect.construct:function(e,t,n){var r,o=[null];return o.push.apply(o,t),r=e.bind.apply(e,o),_e(new r,n.prototype)},function(e){var t=ve(e);return _e(e,_e(function(){return be(t,arguments,ve(this).constructor)},t))})(function(e){function s(e){var t;u(this,s);for(var n="\n    Web Component "+e.nodeName+"%c#"+e._id+" does not accept string as a return from a template. Maybe use bel?}",r=arguments.length,o=Array(1<r?r-1:0),i=1;i<r;i++)o[i-1]=arguments[i];var a=d(this,(t=s.__proto__||Object.getPrototypeOf(s)).call.apply(t,[this,n].concat(o)));return Error.captureStackTrace&&Error.captureStackTrace(a,s),a.name="TemplateNoStringReturnException",a}return r(s,e),s}(Error)),ge=!!document.createDocumentFragment().children,Oe=/[A-Z]/g;function Ce(e){return e.replace(Oe,ke)}function ke(e,t,n){var r=e.toLowerCase(),o=n.charAt(t+1);return 0===t||o.toUpperCase()===o?r:"-"+r}var we=/^\s*(?:true|false|null|undefined|-?[0-9]+\.?[0-9]*|[[{](?:.|[\s])*[\]}])\s*$/;function xe(t,n,e){var r=t;if(e)return function(t,n,e){var r=t;switch(e){case m.string:case m.string.isRequired:return t;case m.bool:case m.bool.isRequired:if(!t||n===t)return!0;case m.number:case m.number.isRequired:case m.object:case m.object.isRequired:case m.array:case m.array.isRequired:default:if(we.test(t))try{r=JSON.parse(t)}catch(e){console.error("Attribute "+n+" has an error:\n"+e+"\n",t)}}return r}(t,n,e);if(t&&n!==t){if(we.test(t))try{r=JSON.parse(t)}catch(e){console.error("Attribute "+n+" has an error:\n"+e+"\n",t)}}else r=!0;return r}var Te=/(?:^\w|[A-Z]|\b\w|\s+|[-_]+)/g,Ae=/[-_]+/g;function Ne(e){return e.replace(Te,je)}function je(e,t){return 0==+e||Ae.test(e)?"":0===t?e.toLowerCase():e.toUpperCase()}function Ee(e,t,n){var r=1===e.nodeType,o=e.constructor.propTypes,i=n;!n&&r&&(i=(void 0===o?{}:o)[Ne(t)]);if(r&&!e.hasAttribute(t))return i!==m.bool&&i!==m.bool.isRequired&&void 0;var a=e.value;return t?a=e.getAttribute(t):t=e.name,a=xe(a,t,i)}var Pe=/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream;function Re(n,e,r){var t,o=3<arguments.length&&void 0!==arguments[3]?arguments[3]:{},i=o.capture,a=void 0===i||i,s=o.passive,c=void 0===s||s,u=n.ownerDocument.documentElement,l=ee(u,e,function(e){var t=e.target;if(!n.contains(t)&&n!==t)return r(e)},{capture:a,passive:c});return t=u,Pe&&(t.style.cursor="pointer"),l}var Se=function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];for(var r=t.length,o={},i=0;i<r;++i){var a=t[i];o[a.toUpperCase()]=a}return o}("click","change","keyup","enter","move","leave","Escape","Esc","touchstart","touchmove","touchend","input","resize"),De="axa-change",Le="data-prevent-default";(function(){function r(e){var i=this,t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{};u(this,r),this._handleClick=function(e,t){i.shouldPreventDefault(t||e.currentTarget)&&e.preventDefault();var n=!i._lastToggleNode,r=t!==i._lastToggleNode,o=!n&&!r;n?(i._notify(Se.ENTER,t),i._onInteractive()):r&&i._notify(Se.MOVE,t,i._lastToggleNode),i._lastToggleNode=t,o&&i._options.sameClickClose&&i._close()},this._handleClose=function(e,t){i.shouldPreventDefault(t||e.currentTarget)&&e.preventDefault(),i._close()},this._handleKeyUp=function(e){(e.key===Se.ESCAPE||e.key===Se.ESC||27===e.keyCode)&&(e.preventDefault(),i._close())},this._init(e,t)}return l(r,[{key:"_init",value:function(e,t){e&&(this._wcNode=e),t&&(this._options=i({},r.DEFAULTS,t));var n=this._options.containerClass;this._container=n?this._wcNode.querySelector(n):this._wcNode,this._on()}},{key:"_on",value:function(){this._off(),this._unClick=ee(this._container,Se.CLICK,this._options.toggleClass,this._handleClick,{passive:!this._options.preventDefault})}},{key:"_off",value:function(){this._unClick&&this._unClick(),this._offInteractive()}},{key:"_onInteractive",value:function(){this._offInteractive();var e=this._container,t=this._options,n=t.closeClass,r=t.outerClose,o=t.escapeClose,i=t.preventDefault;n&&(this._unCloseClick=ee(e,Se.CLICK,n,this._handleClose,{passive:!i})),r&&(this._unOuterClick=Re(e,Se.CLICK,this._handleClose,{passive:!i})),o&&(this._unCloseEscape=ee(e.ownerDocument,Se.KEYUP,this._handleKeyUp,{passive:!1}))}},{key:"shouldPreventDefault",value:function(e){return e.hasAttribute(Le)?Ee(e,Le):this._options.preventDefault}},{key:"_offInteractive",value:function(){this._unOuterClick&&this._unOuterClick(),this._unCloseClick&&this._unCloseClick(),this._unCloseEscape&&this._unCloseEscape(),this.deleteLastToggleNode()}},{key:"_close",value:function(){this._lastToggleNode&&(this._notify(Se.LEAVE,this._lastToggleNode),this._offInteractive(),this.deleteLastToggleNode())}},{key:"_notify",value:function(e,t,n){e in this&&"function"==typeof this[e]&&this[e](t,n)}},{key:"enter",value:function(e){throw new Error("UiEvent.enter method not overwritten")}},{key:"move",value:function(e,t){}},{key:"leave",value:function(e){throw new Error("UiEvent.leave method not overwritten")}},{key:"destroy",value:function(){this._off(),delete this._wcNode,delete this._options}},{key:"deleteLastToggleNode",value:function(){delete this._lastToggleNode}},{key:"lastToggleNode",get:function(){return this._lastToggleNode}}]),r}()).DEFAULTS={containerClass:".js-ui-container",toggleClass:"js-ui-toggle",closeClass:"js-ui-close",escapeClose:!0,outerClose:!0,sameClickClose:!0,preventDefault:!0};var Ue=B(function(n){var e,t;return t=e=function(e){function t(){return u(this,t),d(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return r(t,n),t}(),e.version="2.0.1-beta.234",t},function(t){return function(e){function a(){var e,t,n;u(this,a);for(var r=arguments.length,o=Array(r),i=0;i<r;i++)o[i]=arguments[i];return(t=n=d(this,(e=a.__proto__||Object.getPrototypeOf(a)).call.apply(e,[this].concat(o))))._makeContextReady=function(){var e=(0<arguments.length&&void 0!==arguments[0]?arguments[0]:{}).detail;n.contextNode&&(clearTimeout(n.timeoutId),n.timeoutId=setTimeout(function(){n.contextCallback(n.contextNode,e)},10)),n.unContextEnabled&&n.unContextEnabled(),n.unContextEnabled=re("context/available",n._makeContextReady)},d(n,t)}return r(a,t),l(a,[{key:"connectedCallback",value:function(){p(a.prototype.__proto__||Object.getPrototypeOf(a.prototype),"connectedCallback",this)&&p(a.prototype.__proto__||Object.getPrototypeOf(a.prototype),"connectedCallback",this).call(this),this.contextCallback&&this._makeContextReady()}},{key:"disconnectedCallback",value:function(){p(a.prototype.__proto__||Object.getPrototypeOf(a.prototype),"disconnectedCallback",this)&&p(a.prototype.__proto__||Object.getPrototypeOf(a.prototype),"disconnectedCallback",this).call(this),this.unContextEnabled&&this.unContextEnabled()}},{key:"provideContext",value:function(){var e=this.nodeName.toLowerCase();this.__isContext=!0,function(e,t){var n=2<arguments.length&&void 0!==arguments[2]?arguments[2]:document;ne[e]||(ne[e]={count:0,queue:[]});var r=ne[e].queue;Array.isArray(r)?r.push([e,t,n]):G(n,e,t)}("context/available",this.__contextName=e)}},{key:"consumeContext",value:function(e){this.__consumedContext=e&&e.toLowerCase()}},{key:"contextNode",get:function(){for(var e=this.__consumedContext,t=this.parentNode;t&&(!t.__isContext||e&&e!==t.__contextName);)t=t.parentNode;return!(!t||!t.__isContext)&&t}}]),a}()},function(t){return function(e){function n(){return u(this,n),d(this,(n.__proto__||Object.getPrototypeOf(n)).apply(this,arguments))}return r(n,t),l(n,[{key:"appendChild",value:function(e){!this._isMorphing&&this._hasTemplate&&this._hasRendered?(this._lightDOMRefs.push(e),this.render()):p(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"appendChild",this).call(this,e)}},{key:"innerText",set:function(e){if(this._hasTemplate&&this._hasRendered){var t=document.createTextNode(e);this._lightDOMRefs=[t],this.render()}else o(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"innerText",e,this)}},{key:"textContent",set:function(e){if(this._hasTemplate&&this._hasRendered){var t=document.createTextNode(e);this._lightDOMRefs=[t],this.render()}else o(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"textContent",e,this)}},{key:"innerHTML",set:function(e){if(this._hasTemplate&&this._hasRendered){var t=document.createElement("div");t.innerHTML=e,this._lightDOMRefs=Array.from(t.children),this.render()}else o(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"innerHTML",e,this)}}]),n}()},function(t){return function(e){function i(){var e,t,s;u(this,i);for(var n=arguments.length,r=Array(n),o=0;o<n;o++)r[o]=arguments[o];return(t=s=d(this,(e=i.__proto__||Object.getPrototypeOf(i)).call.apply(e,[this].concat(r))))._reduceProps=function(e,t){var n=e.props,r=e.shouldUpdate,o="_"+t,i=n[t],a=s[o];return r||s.shouldUpdateCallback(i,a)?(s.props[t]=i,{props:n,shouldUpdate:!0}):{props:n,shouldUpdate:!1}},d(s,t)}return r(i,t),l(i,[{key:"init",value:function(e){var t=this;p(i.prototype.__proto__||Object.getPrototypeOf(i.prototype),"init",this).call(this,e),this._isConnected=!1,this.props={},this.updatedDebounced=te(function(){return t.updated&&t.updated()},50);var n=this.constructor.observedAttributes;Array.isArray(n)&&n.forEach(function(e){Ne(e)})}},{key:"connectedCallback",value:function(){var r=this;if(p(i.prototype.__proto__||Object.getPrototypeOf(i.prototype),"connectedCallback",this)&&p(i.prototype.__proto__||Object.getPrototypeOf(i.prototype),"connectedCallback",this).call(this),!this._isConnected){this._isConnected=!0;var e=this.constructor.observedAttributes;if(this.initialClassName=this.className,Array.isArray(e)){var o=this.constructor.propTypes;e.forEach(function(e){var t=Ne(e);if(r.hasAttribute(e)){var n=Ee(r,e,o[t]);r.props[t]=n}}),this.checkPropTypes()}}this.updated&&this.updated()}},{key:"attributeChangedCallback",value:function(e,t,n){if(p(i.prototype.__proto__||Object.getPrototypeOf(i.prototype),"attributeChangedCallback",this)&&p(i.prototype.__proto__||Object.getPrototypeOf(i.prototype),"attributeChangedCallback",this).call(this,e,t,n),this.shouldUpdateCallback(n,t)){var r=Ne(e);if(this.hasAttribute(e)){var o=this.constructor.propTypes;this.props[r]=xe(n,e,o[r])}else this.props[r]=null;this.checkPropTypes(),"value"===e&&null!==n&&G(this,De,n,{bubbles:!0,cancelable:!0,composed:!0}),this.updatedDebounced()}}},{key:"setProps",value:function(e){var t=this.constructor.observedAttributes,n=void 0===t?[]:t,r=Object.keys(e).filter(function(e){return-1<n.indexOf(Ce(e))}).reduce(this._reduceProps,{props:e,shouldUpdate:!1}).shouldUpdate;this.checkPropTypes(),r&&this._isConnected&&this.updated&&this.updated()}},{key:"checkPropTypes",value:function(){var e=this.constructor,t=e.propTypes,n=e.tagName;t&&m.checkPropTypes(t,this.props,"prop",n)}},{key:"shouldUpdateCallback",value:function(e,t){return e!==t}},{key:"disconnectedCallback",value:function(){this._isConnected=!1}}],[{key:"observedAttributes",get:function(){var e=this.propTypes;return e&&Object.keys(e).map(Ce)}}]),i}()},function(t){return function(e){function c(){return u(this,c),d(this,(c.__proto__||Object.getPrototypeOf(c)).apply(this,arguments))}return r(c,t),l(c,[{key:"init",value:function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{},t=e.template,n=a(e,["template"]);p(c.prototype.__proto__||Object.getPrototypeOf(c.prototype),"init",this).call(this,n),this._template=t,this._hasTemplate=!!t,this._hasRendered=!1,this.updated=this.render}},{key:"render",value:function(){var n=this,e=!this._hasRendered;if(this.willRenderCallback(e),this._hasTemplate){var t=this._template;try{if(e){for(var r=document.createDocumentFragment(),o=[];this.firstChild;)o.push(this.firstChild),r.appendChild(this.firstChild);this._lightDOMRefs=o,this.childrenFragment=r}else this._lightDOMRefs.forEach(function(e){var t=e.cloneNode(!0);n.childrenFragment.appendChild(t)});ge||(this.childrenFragment.children=Array.from(this.childrenFragment.childNodes).filter(function(e){return 1===e.nodeType}));var i=t(this.props,this.childrenFragment,this),a=document.createDocumentFragment();if(Array.isArray(i))i.forEach(function(e){a.appendChild(e)});else if(i){if("string"==typeof i)throw new me(this);a.appendChild(i)}if(e)p(c.prototype.__proto__||Object.getPrototypeOf(c.prototype),"appendChild",this).call(this,a);else{var s=this.cloneNode(!1);s._isMorphing=!0,s.appendChild(a),this._isMorphing=!0,function(e,t){if("object"!==(void 0===e?"undefined":_(e)))throw new Error("componentMorph: oldTree should be an object");if("object"!==(void 0===t?"undefined":_(t)))throw new Error("componentMorph: newTree should be an object");fe(t,e)}(this,s),function(){for(var e=void 0;e=ae.pop();)delete e.isSameNode;ae=[]}(),this._isMorphing=!1}}catch(e){console.error(e)}}this._hasRendered=!0,this.didRenderCallback(e)}},{key:"skipChildren",value:function(){return!this._isMorphing}},{key:"willRenderCallback",value:function(e){}},{key:"didRenderCallback",value:function(e){}}]),c}()},function(t){return function(e){function o(){return u(this,o),d(this,(o.__proto__||Object.getPrototypeOf(o)).apply(this,arguments))}return r(o,t),l(o,[{key:"init",value:function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{},t=e.styles,n=void 0===t?"":t,r=a(e,["styles"]);p(o.prototype.__proto__||Object.getPrototypeOf(o.prototype),"init",this).call(this,r),this._styles=n}},{key:"connectedCallback",value:function(){p(o.prototype.__proto__||Object.getPrototypeOf(o.prototype),"connectedCallback",this)&&p(o.prototype.__proto__||Object.getPrototypeOf(o.prototype),"connectedCallback",this).call(this),this._appendStyles()}},{key:"_appendStyles",value:function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:this;if(this._styles){var t=document.createElement("style"),n=document.createTextNode(this._styles);t.appendChild(n),e.insertAdjacentElement?e.insertAdjacentElement("afterbegin",t):e.appendChild(t)}}}]),o}()}),Ie=(B(Ue,H),B(Ue,function(o){return function(e){function a(){var e,t,n;u(this,a);for(var r=arguments.length,o=Array(r),i=0;i<r;i++)o[i]=arguments[i];return(t=n=d(this,(e=a.__proto__||Object.getPrototypeOf(a)).call.apply(e,[this].concat(o))))._appendStyles=function(){a.appendGlobalStyles(n._styles,n.nodeName)},d(n,t)}return r(a,o),l(a,null,[{key:"appendGlobalStyles",value:function(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:o.uuidv4();if(e&&!W[t]){var n=document.createElement("style"),r=document.createTextNode(e);W[t]=!0,n.appendChild(r),n.setAttribute("data-c-name",t.toLowerCase()),document.head.appendChild(n)}}}]),a}()},H)(HTMLElement));var Me,Ve,qe,Fe=/\n[\s]+$/,ze=/^\n[\s]+/,Be=/[\s]+$/,Ke=/^[\s]+/,$e=/[\n\s]+/g,He=["a","abbr","b","bdi","bdo","br","cite","data","dfn","em","i","kbd","mark","q","rp","rt","rtc","ruby","s","amp","small","span","strong","sub","sup","time","u","var","wbr"],We=["code","pre","textarea"],Ze=function e(t,n){if(Array.isArray(n))for(var r,o,i=t.nodeName.toLowerCase(),a=!1,s=0,c=n.length;s<c;s++){var u=n[s];if(Array.isArray(u))e(t,u);else{("number"==typeof u||"boolean"==typeof u||"function"==typeof u||u instanceof Date||u instanceof RegExp)&&(u=u.toString());var l=t.childNodes[t.childNodes.length-1];if("string"==typeof u)a=!0,l&&"#text"===l.nodeName?l.nodeValue+=u:(u=document.createTextNode(u),t.appendChild(u),l=u),s===c-1&&(a=!1,-1===He.indexOf(i)&&-1===We.indexOf(i)?""===(r=l.nodeValue.replace(ze,"").replace(Be,"").replace(Fe,"").replace($e," "))?t.removeChild(l):l.nodeValue=r:-1===We.indexOf(i)&&(o=0===s?"":" ",r=l.nodeValue.replace(ze,o).replace(Ke," ").replace(Be,"").replace(Fe,"").replace($e," "),l.nodeValue=r));else if(u&&u.nodeType){a&&(a=!1,-1===He.indexOf(i)&&-1===We.indexOf(i)?""===(r=l.nodeValue.replace(ze,"").replace(Fe,"").replace($e," "))?t.removeChild(l):l.nodeValue=r:-1===We.indexOf(i)&&(r=l.nodeValue.replace(Ke," ").replace(ze,"").replace(Fe,"").replace($e," "),l.nodeValue=r));var p=u.nodeName;p&&(i=p.toLowerCase()),t.appendChild(u)}}}},Ge=function(e,t){var n,r,o,i,a=e.src,s=e.alt,c=void 0===s?"Policy feature icon":s,u=e.title,l=e.description;return(n=document.createElement("article")).setAttribute("class","m-policy-feature-item__content"),Ze(n,["\n    ",a&&(r=document.createElement("img"),r.setAttribute("src",""+String(a)),r.setAttribute("alt",""+String(c)),r.setAttribute("class","m-policy-feature-item__icon"),r),"\n    ",t.querySelector(".js-m-policy-features-icon")||"","\n    ",u&&(o=document.createElement("h1"),o.setAttribute("class","m-policy-feature-item__title"),Ze(o,[u]),o),"\n    ",l&&(i=document.createElement("p"),i.setAttribute("class","m-policy-feature-item__description"),Ze(i,[l]),i),"\n  "]),n},Je=function(e){function t(){return u(this,t),d(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return r(t,Ie),l(t,[{key:"init",value:function(){p(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"init",this).call(this,{styles:".m-policy-feature-item {\n  display: block; }\n\n.m-policy-feature-item__icon {\n  height: 42px;\n  display: block;\n  margin: 50px auto 0 auto;\n  max-width: 100%;\n  color: #fff; }\n  @media (min-width: 768px) {\n    .m-policy-feature-item__icon {\n      height: 96px; } }\n\n.m-policy-feature-item__title {\n  /* Adds a hyphen where the word breaks, if supported (No Blink) */\n  -webkit-hyphens: auto;\n      -ms-hyphens: auto;\n          hyphens: auto;\n  /* These are technically the same, but use both */\n  overflow-wrap: break-word;\n  word-wrap: break-word;\n  font-size: 16px;\n  font-weight: 700;\n  line-height: 1.5;\n  letter-spacing: 0.01em;\n  text-align: center; }\n  @media (min-width: 576px) {\n    .m-policy-feature-item__title {\n      font-size: 18px; } }\n\n.m-policy-feature-item__description {\n  /* Adds a hyphen where the word breaks, if supported (No Blink) */\n  -webkit-hyphens: auto;\n      -ms-hyphens: auto;\n          hyphens: auto;\n  /* These are technically the same, but use both */\n  overflow-wrap: break-word;\n  word-wrap: break-word;\n  font-size: 14px;\n  font-weight: 400;\n  line-height: 1.5;\n  letter-spacing: 0.02em;\n  text-align: center; }\n  @media (min-width: 576px) {\n    .m-policy-feature-item__description {\n      font-size: 16px; } }\n\n.m-policy-feature-item__content {\n  margin: auto; }\n  @media (min-width: 576px) {\n    .m-policy-feature-item__content {\n      width: 240px; } }\n  @media (min-width: 768px) {\n    .m-policy-feature-item__content {\n      width: 210px; } }\n  @media (min-width: 992px) {\n    .m-policy-feature-item__content {\n      width: 255px; } }\n",template:Ge})}},{key:"connectedCallback",value:function(){p(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"connectedCallback",this).call(this),this.className=this.initialClassName+" m-policy-feature-item"}},{key:"disconnectedCallback",value:function(){p(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"disconnectedCallback",this).call(this)}}]),t}();return Je.tagName="axa-policy-feature-item",Je.propTypes={classes:m.string,src:z,alt:m.string,title:m.string,description:m.string},Me=Je.tagName,Ve=Je,customElements.get(Me)||customElements.define(Me,Ve,qe),Je});
