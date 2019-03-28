!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):e.StyleGuideWebComponent=t()}(this,function(){"use strict";function e(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}function t(e,t){return e(t={exports:{}},t.exports),t.exports}var _="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},u=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},a=function(){function n(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(e,t,o){return t&&n(e.prototype,t),o&&n(e,o),e}}(),i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n])}return e},l=function e(t,o,n){null===t&&(t=Function.prototype);var r=Object.getOwnPropertyDescriptor(t,o);if(void 0===r){var i=Object.getPrototypeOf(t);return null===i?void 0:e(i,o,n)}if("value"in r)return r.value;var a=r.get;return void 0!==a?a.call(n):void 0},n=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)},s=function(e,t){var o={};for(var n in e)0<=t.indexOf(n)||Object.prototype.hasOwnProperty.call(e,n)&&(o[n]=e[n]);return o},p=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},r=function e(t,o,n,r){var i=Object.getOwnPropertyDescriptor(t,o);if(void 0===i){var a=Object.getPrototypeOf(t);null!==a&&e(a,o,n,r)}else if("value"in i&&i.writable)i.value=n;else{var s=i.set;void 0!==s&&s.call(r,n)}return n},c=function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var o=[],n=!0,r=!1,i=void 0;try{for(var a,s=e[Symbol.iterator]();!(n=(a=s.next()).done)&&(o.push(a.value),!t||o.length!==t);n=!0);}catch(e){r=!0,i=e}finally{try{!n&&s.return&&s.return()}finally{if(r)throw i}}return o}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")},C=function(e){if(Array.isArray(e)){for(var t=0,o=Array(e.length);t<e.length;t++)o[t]=e[t];return o}return Array.from(e)},o=t(function(e,t){Object.defineProperty(t,"__esModule",{value:!0});var o="function"==typeof Symbol&&Symbol.for,n=o?Symbol.for("react.element"):60103,r=o?Symbol.for("react.portal"):60106,i=o?Symbol.for("react.fragment"):60107,a=o?Symbol.for("react.strict_mode"):60108,s=o?Symbol.for("react.profiler"):60114,c=o?Symbol.for("react.provider"):60109,u=o?Symbol.for("react.context"):60110,l=o?Symbol.for("react.async_mode"):60111,p=o?Symbol.for("react.concurrent_mode"):60111,f=o?Symbol.for("react.forward_ref"):60112,d=o?Symbol.for("react.suspense"):60113,h=o?Symbol.for("react.memo"):60115,y=o?Symbol.for("react.lazy"):60116;function v(e){if("object"===(void 0===e?"undefined":_(e))&&null!==e){var t=e.$$typeof;switch(t){case n:switch(e=e.type){case l:case p:case i:case s:case a:case d:return e;default:switch(e=e&&e.$$typeof){case u:case f:case c:return e;default:return t}}case y:case h:case r:return t}}}function b(e){return v(e)===p}t.typeOf=v,t.AsyncMode=l,t.ConcurrentMode=p,t.ContextConsumer=u,t.ContextProvider=c,t.Element=n,t.ForwardRef=f,t.Fragment=i,t.Lazy=y,t.Memo=h,t.Portal=r,t.Profiler=s,t.StrictMode=a,t.Suspense=d,t.isValidElementType=function(e){return"string"==typeof e||"function"==typeof e||e===i||e===p||e===s||e===a||e===d||"object"===(void 0===e?"undefined":_(e))&&null!==e&&(e.$$typeof===y||e.$$typeof===h||e.$$typeof===c||e.$$typeof===u||e.$$typeof===f)},t.isAsyncMode=function(e){return b(e)||v(e)===l},t.isConcurrentMode=b,t.isContextConsumer=function(e){return v(e)===u},t.isContextProvider=function(e){return v(e)===c},t.isElement=function(e){return"object"===(void 0===e?"undefined":_(e))&&null!==e&&e.$$typeof===n},t.isForwardRef=function(e){return v(e)===f},t.isFragment=function(e){return v(e)===i},t.isLazy=function(e){return v(e)===y},t.isMemo=function(e){return v(e)===h},t.isPortal=function(e){return v(e)===r},t.isProfiler=function(e){return v(e)===s},t.isStrictMode=function(e){return v(e)===a},t.isSuspense=function(e){return v(e)===d}});e(o);o.typeOf,o.AsyncMode,o.ConcurrentMode,o.ContextConsumer,o.ContextProvider,o.Element,o.ForwardRef,o.Fragment,o.Lazy,o.Memo,o.Portal,o.Profiler,o.StrictMode,o.Suspense,o.isValidElementType,o.isAsyncMode,o.isConcurrentMode,o.isContextConsumer,o.isContextProvider,o.isElement,o.isForwardRef,o.isFragment,o.isLazy,o.isMemo,o.isPortal,o.isProfiler,o.isStrictMode,o.isSuspense;var f=t(function(e,t){});e(f);f.typeOf,f.AsyncMode,f.ConcurrentMode,f.ContextConsumer,f.ContextProvider,f.Element,f.ForwardRef,f.Fragment,f.Lazy,f.Memo,f.Portal,f.Profiler,f.StrictMode,f.Suspense,f.isValidElementType,f.isAsyncMode,f.isConcurrentMode,f.isContextConsumer,f.isContextProvider,f.isElement,f.isForwardRef,f.isFragment,f.isLazy,f.isMemo,f.isPortal,f.isProfiler,f.isStrictMode,f.isSuspense,t(function(e){e.exports=o});var d=Object.getOwnPropertySymbols,h=Object.prototype.hasOwnProperty,y=Object.prototype.propertyIsEnumerable;(function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},o=0;o<10;o++)t["_"+String.fromCharCode(o)]=o;if("0123456789"!==Object.getOwnPropertyNames(t).map(function(e){return t[e]}).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach(function(e){n[e]=e}),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(e){return!1}})()&&Object.assign,Function.call.bind(Object.prototype.hasOwnProperty);function v(){}function b(){}b.resetWarningCache=v;var m=t(function(e){e.exports=function(){function e(e,t,o,n,r,i){if("SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"!==i){var a=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw a.name="Invariant Violation",a}}function t(){return e}var o={array:e.isRequired=e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:b,resetWarningCache:v};return o.PropTypes=o}()}),g=0;function O(e,t){var o=e[t];return"function"==typeof o&&(e[t]=function(t){function o(){return t.apply(void 0,arguments)}return 0===g&&(g++,Object.keys(t).map(function(e){return o[e]=t[e],e}).reduce(O,o),g--),o}(o)),e}var x=m;Object.keys(x).reduce(O,x);var k,w,P,T,E=x.oneOf(["left","center","right"]),A=x.oneOf(["left","right"]),j=(x.oneOf(["top","bottom"]),x.oneOf(["up","down"])),N=x.oneOf(["ok","pending","error","unknown"]),S=x.oneOf(["row","col","rowgroup","colgroup","auto"]),R=x.oneOfType([x.string,x.number]),M={text:R,value:x.any,rowspan:R,colspan:R,scope:S,align:E,dense:x.bool},L={float:A,strong:x.bool,bold:x.bool},D=x.oneOfType([x.string,x.number]),F=x.oneOfType([D,x.shape(i({},M,{sort:j,sortActive:x.bool}))]),U=x.oneOfType([D,x.shape(i({},M,L,{action:x.bool,state:N}))]),V=x.oneOfType([D,x.shape(i({},M,L))]),I=x.oneOfType([x.arrayOf(F),x.shape({cells:x.arrayOf(F)})]),$=x.oneOfType([x.arrayOf(U),x.shape({cells:x.arrayOf(U),action:x.bool})]),q=x.oneOfType([x.arrayOf(V),x.shape({cells:x.arrayOf(V)})]),z=(x.oneOfType([I,x.arrayOf(I)]),x.oneOfType([$,x.arrayOf($)]),x.oneOfType([q,x.arrayOf(q)]),function(){for(var e=arguments.length,t=Array(e),o=0;o<e;o++)t[o]=arguments[o];return function(e){return t.reduceRight(function(e,t){return t(e)},e)}}),W={},K=(k=Object,w=k.getPrototypeOf||function(e){return e.__proto__},P=k.setPrototypeOf||function(e,t){return e.__proto__=t,e},T="object"===("undefined"==typeof Reflect?"undefined":_(Reflect))?Reflect.construct:function(e,t,o){var n,r=[null];return r.push.apply(r,t),n=e.bind.apply(e,r),P(new n,o.prototype)},function(e){var t=w(e);return P(e,P(function(){return T(t,arguments,w(this).constructor)},t))}),H=function(o){return K(function(e){function t(){return u(this,t),p(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return n(t,o),a(t,[{key:"init",value:function(){var e;this._id=((e=this.nodeName)in W||(W[e]=0),++W[e]),this._initialised=!0}},{key:"connectedCallback",value:function(){this._initialised||this.init()}},{key:"attributeChangedCallback",value:function(){this._initialised||this.init()}}],[{key:"uuidv4",value:function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(e){var t=16*Math.random()|0;return("x"==e?t:3&t|8).toString(16)})}}]),t}())},G={},B=function(){try{var e=new window.CustomEvent("test",{cancelable:!0});if(e.preventDefault(),!0!==e.defaultPrevented)throw new Error("Could not prevent default");return window.CustomEvent}catch(e){}return t;function t(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{},o=t.bubbles,n=void 0!==o&&o,r=t.cancelable,i=void 0!==r&&r,a=t.detail,s=void 0===a?void 0:a,c=document.createEvent("CustomEvent");c.initCustomEvent(e,n,i,s);var u=c.preventDefault;return c.preventDefault=function(){u.call(c);try{Object.defineProperty(this,"defaultPrevented",{get:function(){return!0}})}catch(e){this.defaultPrevented=!0}},c}}();function J(e,t,o){var n=3<arguments.length&&void 0!==arguments[3]?arguments[3]:{},r=new B(t,i({},n,{detail:o}));return e.dispatchEvent(r)}var Y=function(){var e=!1;if("undefined"!=typeof window&&"function"==typeof window.addEventListener){var t=Object.defineProperty({},"passive",{get:function(){e=!0}}),o=function(){};window.addEventListener("testPassiveEventSupport",o,t),window.removeEventListener("testPassiveEventSupport",o,t)}return e}();function Z(e){for(var r=e.className,i=!1,a=!0,t=arguments.length,o=Array(1<t?t-1:0),n=1;n<t;n++)o[n-1]=arguments[n];var s=o.map(function(e){var t=(o=e,new RegExp("^"+o+"$|^"+o+"\\s|\\s"+o+"\\s|\\s"+o+"$",n)).test(r);var o,n;t?i=!0:a=!1;return{className:e,hasClass:t}});return!(!a&&!i)&&s}function X(e,t){if(!e)return!1;for(var o=Object.keys(e),n=o.length,r=0;r<n;++r){var i=o[r];if(e[i]===t)return delete e[i]}return!1}var Q=/\s+/,ee={transitionend:function(){for(var e=document.createElement("div").style,t={transition:"transitionend",OTransition:"oTransitionEnd otransitionend",MozTransition:"transitionend",WebkitTransition:"webkitTransitionEnd"},o=Object.keys(t),n=o.length,r=void 0,i=0;i<n;++i)if(void 0!==e[r=o[i]])return t[r];return""}()};function te(o,e,n,r){var t=4<arguments.length&&void 0!==arguments[4]?arguments[4]:{},i=t.capture,a=void 0!==i&&i,s=t.passive,c=void 0===s||s;if(ee[e]&&(e=ee[e]),!o||!e)return null;var u=void 0===n?"undefined":_(n),l=n&&"string"===u;if("function"===u){if(r){var p=r;a=p.capture,c=p.passive}r=n}for(var f=Y?{capture:a,passive:c}:a,d=l?function(e){var t=e.target;for(;!Z(t,n)&&t!==o;)t=t.parentNode;if(t!==o)return r(e,t)}:r,h=e.split(Q),y=h.length,v=0;v<y;++v)o.addEventListener(h[v],d,f);return function e(){for(var t=0;t<y;++t)o.removeEventListener(h[t],d,f);X(this,e)}}function oe(n){var r=1<arguments.length&&void 0!==arguments[1]?arguments[1]:0,e=2<arguments.length&&void 0!==arguments[2]?arguments[2]:{},t=e.leading,i=void 0!==t&&t,o=e.trailing,a=void 0===o||o,s=e.maxWait,c=void 0!==s&&s,u=void 0,l=void 0,p=void 0,f=void 0,d=!1,h=r!==c,y=!1!==c;function v(){for(var e=arguments.length,t=Array(e),o=0;o<e;o++)t[o]=arguments[o];return u=t,h&&(l&&clearTimeout(l),l=setTimeout(b,r)),y&&!p&&(p=setTimeout(_,c)),i&&!d&&(d=!0,f=n.apply(void 0,C(u))),f}return v.flush=function(){(l||p)&&(f=n.apply(void 0,C(u)));return g(),f},v.cancel=g,v;function b(){p&&clearTimeout(p),m()}function _(){l&&clearTimeout(l),m()}function m(){a&&(f=n.apply(void 0,C(u))),p=l=null,d=!1}function g(){l&&(clearTimeout(l),l=null),p&&(clearTimeout(p),p=null),u=void 0,d=!1}}window.__subscriptions=window.__subscriptions||{};var ne=window.__subscriptions;function re(e,t){var o=te(2<arguments.length&&void 0!==arguments[2]?arguments[2]:document,e,t);ne[e]||(ne[e]={count:0});var n,r=ne[e];return r.count++,r.onsubscribe||(r.onsubscribe=oe((n=e,function(){J(document,"pubsub/onsubscribe",n),J(document,"pubsub/onsubscribe/"+n,n),ne[n]&&delete ne[n].unsubscribe}),100)),r.onsubscribe(),function(){r.count--,o.call(this),r.count<=0&&delete ne[e]}}te(document,"pubsub/onsubscribe",function(e){var t=e.detail;ne[t]||(ne[t]={count:0});var o=ne[t],n=o.queue;Array.isArray(n)&&(n.forEach(function(e){var t=c(e,3),o=t[0],n=t[1],r=t[2];J(r,o,n)}),delete o.queue)});var ie,ae=function(e,t){return e===t},se=(ie=function(){var e;return(e=console).log.apply(e,arguments)},function(){var r=0<arguments.length&&void 0!==arguments[0]?arguments[0]:ae;return function(){for(var e=arguments.length,n=Array(e),t=0;t<e;t++)n[t]=arguments[t];return function(){for(var e=arguments.length,t=Array(e),o=0;o<e;o++)t[o]=arguments[o];return function(){return r.apply(void 0,[].concat(n,t))?ie.apply(void 0,arguments):void 0}}}}()(!0),[]);var ce=1,ue=3,le=8;function pe(e,t){var o=e.nodeType;o===ce&&function(e,t){for(var o=t.skipChildren&&t.skipChildren(),n=t.constructor.observedAttributes,r=n&&Array.isArray(n)&&n.length,i=function(e){return o&&r&&-1===n.indexOf(e)},a=t.attributes,s=e.attributes,c=null,u=null,l=null,p=null,f=s.length-1;0<=f;--f)if(p=s[f],l=p.name,c=p.namespaceURI,u=p.value,!i(l))if(c){var d=p.localName;t.getAttributeNS(c,d||l)!==u&&t.setAttributeNS(c,l,u)}else t.hasAttribute(l)?t.getAttribute(l)!==u&&("null"===u||"undefined"===u?t.removeAttribute(l):t.setAttribute(l,u)):t.setAttribute(l,u);for(var h=a.length-1;0<=h;--h)if(!1!==(p=a[h]).specified){if(l=p.name,c=p.namespaceURI,i(l))continue;c?(l=p.localName||l,e.hasAttributeNS(c,l)||t.removeAttributeNS(c,l)):e.hasAttributeNS(null,l)||t.removeAttribute(l)}}(e,t),o!==ue&&o!==le||t.nodeValue===e.nodeValue||(t.nodeValue=e.nodeValue)}function fe(e,t){var o=e.nodeName;"INPUT"===o?function(e,t){var o=e.value,n=t.value;de(e,t,"checked"),de(e,t,"disabled"),o!==n&&(t.setAttribute("value",o),t.value=o);"null"===o&&(t.value="",t.removeAttribute("value"));e.hasAttributeNS(null,"value")?"range"===t.type&&(t.value=o):t.removeAttribute("value")}(e,t):"OPTION"===o?de(e,t,"selected"):"TEXTAREA"===o?function(e,t){var o=e.value;o!==t.value&&(t.value=o);if(t.firstChild&&t.firstChild.nodeValue!==o){if(""===o&&t.firstChild.nodeValue===t.placeholder)return;t.firstChild.nodeValue=o}}(e,t):"SELECT"===o&&function(e,t){var o=-1,n=0,r=t.firstChild,i=void 0,a=void 0;for(;r;)if("OPTGROUP"===(a=r.nodeName&&r.nodeName.toUpperCase()))r=(i=r).firstChild;else{if("OPTION"===a){if(r.hasAttributeNS(null,"selected")){o=n;break}n+=1}!(r=r.nextSibling)&&i&&(r=i.nextSibling,i=null)}t.selectedIndex=o}(0,t)}function de(e,t,o){e[o]!==t[o]&&(t[o]=e[o],e[o]?t.setAttribute(o,""):t.removeAttribute(o))}var he=3;function ye(e,t){return t?e?e.isSameNode&&e.isSameNode(t)?t:e.tagName!==t.tagName?e:(pe(e,t),t.skipChildren&&t.skipChildren()||function(e,t){for(var o=void 0,n=void 0,r=void 0,i=void 0,a=0,s=0;o=t.childNodes[s],n=e.childNodes[s-a],o||n;s++)if(n)if(o)if(ve(n,o))(r=ye(n,o))!==o&&(t.replaceChild(r,o),a++);else{i=null;for(var c=s;c<t.childNodes.length;c++)if(ve(t.childNodes[c],n)){i=t.childNodes[c];break}i?((r=ye(n,i))!==i&&a++,t.insertBefore(r,o)):n.id||o.id?(t.insertBefore(n,o),a++):(r=ye(n,o))!==o&&(t.replaceChild(r,o),a++)}else t.appendChild(n),a++;else t.removeChild(o),s--}(e,t),fe(e,t),t):null:e}function ve(e,t){return e.id?e.id===t.id:e.isSameNode?e.isSameNode(t):e.tagName===t.tagName&&(e.type===he&&e.nodeValue===t.nodeValue)}var be,_e,me,ge,Ce=(be=Object,_e=be.getPrototypeOf||function(e){return e.__proto__},me=be.setPrototypeOf||function(e,t){return e.__proto__=t,e},ge="object"===("undefined"==typeof Reflect?"undefined":_(Reflect))?Reflect.construct:function(e,t,o){var n,r=[null];return r.push.apply(r,t),n=e.bind.apply(e,r),me(new n,o.prototype)},function(e){var t=_e(e);return me(e,me(function(){return ge(t,arguments,_e(this).constructor)},t))})(function(e){function s(e){var t;u(this,s);for(var o="\n    Web Component "+e.nodeName+"%c#"+e._id+" does not accept string as a return from a template. Maybe use bel?}",n=arguments.length,r=Array(1<n?n-1:0),i=1;i<n;i++)r[i-1]=arguments[i];var a=p(this,(t=s.__proto__||Object.getPrototypeOf(s)).call.apply(t,[this,o].concat(r)));return Error.captureStackTrace&&Error.captureStackTrace(a,s),a.name="TemplateNoStringReturnException",a}return n(s,e),s}(Error)),Oe=!!document.createDocumentFragment().children,xe=/[A-Z]/g;function ke(e){return e.replace(xe,we)}function we(e,t,o){var n=e.toLowerCase(),r=o.charAt(t+1);return 0===t||r.toUpperCase()===r?n:"-"+n}var Pe=/^\s*(?:true|false|null|undefined|-?[0-9]+\.?[0-9]*|[[{](?:.|[\s])*[\]}])\s*$/;function Te(t,o,e){var n=t;if(e)return function(t,o,e){var n=t;switch(e){case x.string:case x.string.isRequired:return t;case x.bool:case x.bool.isRequired:if(!t||o===t)return!0;case x.number:case x.number.isRequired:case x.object:case x.object.isRequired:case x.array:case x.array.isRequired:default:if(Pe.test(t))try{n=JSON.parse(t)}catch(e){console.error("Attribute "+o+" has an error:\n"+e+"\n",t)}}return n}(t,o,e);if(t&&o!==t){if(Pe.test(t))try{n=JSON.parse(t)}catch(e){console.error("Attribute "+o+" has an error:\n"+e+"\n",t)}}else n=!0;return n}var Ee=/(?:^\w|[A-Z]|\b\w|\s+|[-_]+)/g,Ae=/[-_]+/g;function je(e){return e.replace(Ee,Ne)}function Ne(e,t){return 0==+e||Ae.test(e)?"":0===t?e.toLowerCase():e.toUpperCase()}function Se(e,t,o){var n=1===e.nodeType,r=e.constructor.propTypes,i=o;!o&&n&&(i=(void 0===r?{}:r)[je(t)]);if(n&&!e.hasAttribute(t))return i!==x.bool&&i!==x.bool.isRequired&&void 0;var a=e.value;return t?a=e.getAttribute(t):t=e.name,a=Te(a,t,i)}var Re=/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream;function Me(o,e,n){var t,r=3<arguments.length&&void 0!==arguments[3]?arguments[3]:{},i=r.capture,a=void 0===i||i,s=r.passive,c=void 0===s||s,u=o.ownerDocument.documentElement,l=te(u,e,function(e){var t=e.target;if(!o.contains(t)&&o!==t)return n(e)},{capture:a,passive:c});return t=u,Re&&(t.style.cursor="pointer"),l}var Le=function(){for(var e=arguments.length,t=Array(e),o=0;o<e;o++)t[o]=arguments[o];for(var n=t.length,r={},i=0;i<n;++i){var a=t[i];r[a.toUpperCase()]=a}return r}("click","change","keyup","enter","move","leave","Escape","Esc","touchstart","touchmove","touchend","input","resize","paste"),De="axa-change",Fe="data-prevent-default";(function(){function n(e){var i=this,t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{};u(this,n),this._handleClick=function(e,t){i.shouldPreventDefault(t||e.currentTarget)&&e.preventDefault();var o=!i._lastToggleNode,n=t!==i._lastToggleNode,r=!o&&!n;o?(i._notify(Le.ENTER,t),i._onInteractive()):n&&i._notify(Le.MOVE,t,i._lastToggleNode),i._lastToggleNode=t,r&&i._options.sameClickClose&&i._close()},this._handleClose=function(e,t){i.shouldPreventDefault(t||e.currentTarget)&&e.preventDefault(),i._close()},this._handleKeyUp=function(e){(e.key===Le.ESCAPE||e.key===Le.ESC||27===e.keyCode)&&(e.preventDefault(),i._close())},this._init(e,t)}return a(n,[{key:"_init",value:function(e,t){e&&(this._wcNode=e),t&&(this._options=i({},n.DEFAULTS,t));var o=this._options.containerClass;this._container=o?this._wcNode.querySelector(o):this._wcNode,this._on()}},{key:"_on",value:function(){this._off(),this._unClick=te(this._container,Le.CLICK,this._options.toggleClass,this._handleClick,{passive:!this._options.preventDefault})}},{key:"_off",value:function(){this._unClick&&this._unClick(),this._offInteractive()}},{key:"_onInteractive",value:function(){this._offInteractive();var e=this._container,t=this._options,o=t.closeClass,n=t.outerClose,r=t.escapeClose,i=t.preventDefault;o&&(this._unCloseClick=te(e,Le.CLICK,o,this._handleClose,{passive:!i})),n&&(this._unOuterClick=Me(e,Le.CLICK,this._handleClose,{passive:!i})),r&&(this._unCloseEscape=te(e.ownerDocument,Le.KEYUP,this._handleKeyUp,{passive:!1}))}},{key:"shouldPreventDefault",value:function(e){return e.hasAttribute(Fe)?Se(e,Fe):this._options.preventDefault}},{key:"_offInteractive",value:function(){this._unOuterClick&&this._unOuterClick(),this._unCloseClick&&this._unCloseClick(),this._unCloseEscape&&this._unCloseEscape(),this.deleteLastToggleNode()}},{key:"_close",value:function(){this._lastToggleNode&&(this._notify(Le.LEAVE,this._lastToggleNode),this._offInteractive(),this.deleteLastToggleNode())}},{key:"_notify",value:function(e,t,o){e in this&&"function"==typeof this[e]&&this[e](t,o)}},{key:"enter",value:function(e){throw new Error("UiEvent.enter method not overwritten")}},{key:"move",value:function(e,t){}},{key:"leave",value:function(e){throw new Error("UiEvent.leave method not overwritten")}},{key:"destroy",value:function(){this._off(),delete this._wcNode,delete this._options}},{key:"deleteLastToggleNode",value:function(){delete this._lastToggleNode}},{key:"lastToggleNode",get:function(){return this._lastToggleNode}}]),n})().DEFAULTS={containerClass:".js-ui-container",toggleClass:"js-ui-toggle",closeClass:"js-ui-close",escapeClose:!0,outerClose:!0,sameClickClose:!0,preventDefault:!0};var Ue=z(function(o){var e,t;return t=e=function(e){function t(){return u(this,t),p(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return n(t,o),t}(),e.version="2.0.1-beta.262",t},function(t){return function(e){function o(){return u(this,o),p(this,(o.__proto__||Object.getPrototypeOf(o)).apply(this,arguments))}return n(o,t),a(o,[{key:"init",value:function(e){var t=this;l(o.prototype.__proto__||Object.getPrototypeOf(o.prototype),"init",this).call(this,e),this._makeContextReady=function(){var e=(0<arguments.length&&void 0!==arguments[0]?arguments[0]:{}).detail;t.contextNode&&(clearTimeout(t.timeoutId),t.timeoutId=setTimeout(function(){t.contextCallback(t.contextNode,e)},10)),t.unContextEnabled&&t.unContextEnabled(),t.unContextEnabled=re("context/available",t._makeContextReady)}}},{key:"connectedCallback",value:function(){l(o.prototype.__proto__||Object.getPrototypeOf(o.prototype),"connectedCallback",this)&&l(o.prototype.__proto__||Object.getPrototypeOf(o.prototype),"connectedCallback",this).call(this),this.contextCallback&&this._makeContextReady()}},{key:"disconnectedCallback",value:function(){l(o.prototype.__proto__||Object.getPrototypeOf(o.prototype),"disconnectedCallback",this)&&l(o.prototype.__proto__||Object.getPrototypeOf(o.prototype),"disconnectedCallback",this).call(this),this.unContextEnabled&&this.unContextEnabled()}},{key:"provideContext",value:function(){var e=this.nodeName.toLowerCase();this.__isContext=!0,function(e,t){var o=2<arguments.length&&void 0!==arguments[2]?arguments[2]:document;ne[e]||(ne[e]={count:0,queue:[]});var n=ne[e].queue;Array.isArray(n)?n.push([e,t,o]):J(o,e,t)}("context/available",this.__contextName=e)}},{key:"consumeContext",value:function(e){this.__consumedContext=e&&e.toLowerCase()}},{key:"contextNode",get:function(){for(var e=this.__consumedContext,t=this.parentNode;t&&(!t.__isContext||e&&e!==t.__contextName);)t=t.parentNode;return!(!t||!t.__isContext)&&t}}]),o}()},function(t){return function(e){function o(){return u(this,o),p(this,(o.__proto__||Object.getPrototypeOf(o)).apply(this,arguments))}return n(o,t),a(o,[{key:"appendChild",value:function(e){!this._isMorphing&&this._hasTemplate&&this._hasRendered?(this._lightDOMRefs.push(e),this.render()):l(o.prototype.__proto__||Object.getPrototypeOf(o.prototype),"appendChild",this).call(this,e)}},{key:"innerText",set:function(e){if(this._hasTemplate&&this._hasRendered){var t=document.createTextNode(e);this._lightDOMRefs=[t],this.render()}else r(o.prototype.__proto__||Object.getPrototypeOf(o.prototype),"innerText",e,this)}},{key:"textContent",set:function(e){if(this._hasTemplate&&this._hasRendered){var t=document.createTextNode(e);this._lightDOMRefs=[t],this.render()}else r(o.prototype.__proto__||Object.getPrototypeOf(o.prototype),"textContent",e,this)}},{key:"innerHTML",set:function(e){if(this._hasTemplate&&this._hasRendered){var t=document.createElement("div");t.innerHTML=e,this._lightDOMRefs=Array.from(t.children),this.render()}else r(o.prototype.__proto__||Object.getPrototypeOf(o.prototype),"innerHTML",e,this)}}]),o}()},function(t){return function(e){function i(){return u(this,i),p(this,(i.__proto__||Object.getPrototypeOf(i)).apply(this,arguments))}return n(i,t),a(i,[{key:"init",value:function(e){var t=this;l(i.prototype.__proto__||Object.getPrototypeOf(i.prototype),"init",this).call(this,e),this._isConnected=!1,this.props={},this.updatedDebounced=oe(function(){return t.updated&&t.updated()},50);var o=this.constructor.observedAttributes;Array.isArray(o)&&o.forEach(function(e){je(e)})}},{key:"connectedCallback",value:function(){var n=this;if(l(i.prototype.__proto__||Object.getPrototypeOf(i.prototype),"connectedCallback",this)&&l(i.prototype.__proto__||Object.getPrototypeOf(i.prototype),"connectedCallback",this).call(this),!this._isConnected){this._isConnected=!0;var e=this.constructor.observedAttributes;if(this.initialClassName=this.className,Array.isArray(e)){var r=this.constructor.propTypes;e.forEach(function(e){var t=je(e);if(n.hasAttribute(e)){var o=Se(n,e,r[t]);n.props[t]=o}}),this.checkPropTypes()}}this.updated&&this.updated()}},{key:"attributeChangedCallback",value:function(e,t,o){if(l(i.prototype.__proto__||Object.getPrototypeOf(i.prototype),"attributeChangedCallback",this)&&l(i.prototype.__proto__||Object.getPrototypeOf(i.prototype),"attributeChangedCallback",this).call(this,e,t,o),this.shouldUpdateCallback(o,t)){var n=je(e);if(this.hasAttribute(e)){var r=this.constructor.propTypes;this.props[n]=Te(o,e,r[n])}else this.props[n]=null;this.checkPropTypes(),"value"===e&&null!==o&&J(this,De,o,{bubbles:!0,cancelable:!0,composed:!0}),this.updatedDebounced()}}},{key:"setProps",value:function(e){var a=this;l(i.prototype.__proto__||Object.getPrototypeOf(i.prototype),"attributeChangedCallback",this)&&l(i.prototype.__proto__||Object.getPrototypeOf(i.prototype),"attributeChangedCallback",this).call(this);var t=this.constructor.observedAttributes,o=void 0===t?[]:t,n=Object.keys(e).filter(function(e){return-1<o.indexOf(ke(e))}).reduce(function(e,t){var o=e.props,n=e.shouldUpdate,r=o[t],i=a.props&&a.props[t]?a.props[t]:void 0;return n||a.shouldUpdateCallback(r,i)?(a.props[t]=r,{props:o,shouldUpdate:!0}):{props:o,shouldUpdate:!1}},{props:e,shouldUpdate:!1}).shouldUpdate;this.checkPropTypes(),n&&this._isConnected?this.updated&&this.updated():n&&!this._isConnected&&console.warn("setProps(): Custom Element not connected and props never update",this)}},{key:"checkPropTypes",value:function(){var e=this.constructor,t=e.propTypes,o=e.tagName,n=this.props;t&&x.checkPropTypes(t,n,"prop",o)}},{key:"shouldUpdateCallback",value:function(e,t){return e!==t}},{key:"disconnectedCallback",value:function(){this._isConnected=!1}}],[{key:"observedAttributes",get:function(){var e=this.propTypes;return e&&Object.keys(e).map(ke)}}]),i}()},function(t){return function(e){function c(){return u(this,c),p(this,(c.__proto__||Object.getPrototypeOf(c)).apply(this,arguments))}return n(c,t),a(c,[{key:"init",value:function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{},t=e.template,o=s(e,["template"]);l(c.prototype.__proto__||Object.getPrototypeOf(c.prototype),"init",this).call(this,o),this._template=t,this._hasTemplate=!!t,this._hasRendered=!1,this.updated=this.render}},{key:"render",value:function(){var o=this,e=!this._hasRendered;if(this.willRenderCallback(e),this._hasTemplate){var t=this._template;try{if(e){for(var n=document.createDocumentFragment(),r=[];this.firstChild;)r.push(this.firstChild),n.appendChild(this.firstChild);this._lightDOMRefs=r,this.childrenFragment=n}else this._lightDOMRefs.forEach(function(e){var t=e.cloneNode(!0);o.childrenFragment.appendChild(t)});Oe||(this.childrenFragment.children=Array.from(this.childrenFragment.childNodes).filter(function(e){return 1===e.nodeType}));var i=t(this.props,this.childrenFragment,this),a=document.createDocumentFragment();if(Array.isArray(i))i.forEach(function(e){a.appendChild(e)});else if(i){if("string"==typeof i)throw new Ce(this);a.appendChild(i)}if(e)l(c.prototype.__proto__||Object.getPrototypeOf(c.prototype),"appendChild",this).call(this,a);else{var s=this.cloneNode(!1);s._isMorphing=!0,s.appendChild(a),this._isMorphing=!0,function(e,t){if("object"!==(void 0===e?"undefined":_(e)))throw new Error("componentMorph: oldTree should be an object");if("object"!==(void 0===t?"undefined":_(t)))throw new Error("componentMorph: newTree should be an object");ye(t,e)}(this,s),function(){for(var e=void 0;e=se.pop();)delete e.isSameNode;se=[]}(),this._isMorphing=!1}}catch(e){console.error(e)}}this._hasRendered=!0,this.didRenderCallback(e)}},{key:"skipChildren",value:function(){return!this._isMorphing}},{key:"willRenderCallback",value:function(e){}},{key:"didRenderCallback",value:function(e){}}]),c}()},function(t){return function(e){function r(){return u(this,r),p(this,(r.__proto__||Object.getPrototypeOf(r)).apply(this,arguments))}return n(r,t),a(r,[{key:"init",value:function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{},t=e.styles,o=void 0===t?"":t,n=s(e,["styles"]);l(r.prototype.__proto__||Object.getPrototypeOf(r.prototype),"init",this).call(this,n),this._styles=o}},{key:"connectedCallback",value:function(){l(r.prototype.__proto__||Object.getPrototypeOf(r.prototype),"connectedCallback",this)&&l(r.prototype.__proto__||Object.getPrototypeOf(r.prototype),"connectedCallback",this).call(this),this._appendStyles()}},{key:"_appendStyles",value:function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:this;if(this._styles){var t=document.createElement("style"),o=document.createTextNode(this._styles);t.appendChild(o),e.insertAdjacentElement?e.insertAdjacentElement("afterbegin",t):e.appendChild(t)}}}]),r}()}),Ve=(z(Ue,H),z(Ue,function(r){return function(e){function o(){return u(this,o),p(this,(o.__proto__||Object.getPrototypeOf(o)).apply(this,arguments))}return n(o,r),a(o,[{key:"init",value:function(e){var t=this;l(o.prototype.__proto__||Object.getPrototypeOf(o.prototype),"init",this).call(this,e),this._appendStyles=function(){o.appendGlobalStyles(t._styles,t.nodeName)}}}],[{key:"appendGlobalStyles",value:function(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:r.uuidv4();if(e&&!G[t]){var o=document.createElement("style"),n=document.createTextNode(e);G[t]=!0,o.appendChild(n),o.setAttribute("data-c-name",t.toLowerCase()),document.head.appendChild(o)}}}]),o}()},H)(HTMLElement));var Ie,$e,qe,ze=/\n[\s]+$/,We=/^\n[\s]+/,Ke=/[\s]+$/,He=/^[\s]+/,Ge=/[\n\s]+/g,Be=["a","abbr","b","bdi","bdo","br","cite","data","dfn","em","i","kbd","mark","q","rp","rt","rtc","ruby","s","amp","small","span","strong","sub","sup","time","u","var","wbr"],Je=["code","pre","textarea"],Ye=function e(t,o){if(Array.isArray(o))for(var n,r,i=t.nodeName.toLowerCase(),a=!1,s=0,c=o.length;s<c;s++){var u=o[s];if(Array.isArray(u))e(t,u);else{("number"==typeof u||"boolean"==typeof u||"function"==typeof u||u instanceof Date||u instanceof RegExp)&&(u=u.toString());var l=t.childNodes[t.childNodes.length-1];if("string"==typeof u)a=!0,l&&"#text"===l.nodeName?l.nodeValue+=u:(u=document.createTextNode(u),t.appendChild(u),l=u),s===c-1&&(a=!1,-1===Be.indexOf(i)&&-1===Je.indexOf(i)?""===(n=l.nodeValue.replace(We,"").replace(Ke,"").replace(ze,"").replace(Ge," "))?t.removeChild(l):l.nodeValue=n:-1===Je.indexOf(i)&&(r=0===s?"":" ",n=l.nodeValue.replace(We,r).replace(He," ").replace(Ke,"").replace(ze,"").replace(Ge," "),l.nodeValue=n));else if(u&&u.nodeType){a&&(a=!1,-1===Be.indexOf(i)&&-1===Je.indexOf(i)?""===(n=l.nodeValue.replace(We,"").replace(ze,"").replace(Ge," "))?t.removeChild(l):l.nodeValue=n:-1===Je.indexOf(i)&&(n=l.nodeValue.replace(He," ").replace(We,"").replace(ze,"").replace(Ge," "),l.nodeValue=n));var p=u.nodeName;p&&(i=p.toLowerCase()),t.appendChild(u)}}}},Ze=function(e){var t,o,n,r,i,a,s,c,u=e.iconName,l=e.headline,p=e.description,f=e.buttonTitle,d=e.href;return(a=document.createElement("article")).setAttribute("class","o-form-option-box__wrap"),Ye(a,["\n    ",(r=document.createElement("div"),r.setAttribute("class","o-form-option-box__row o-form-option-box__row--1"),Ye(r,["\n      ",u?(s=document.createElement("axa-icon"),s.setAttribute("size","lg"),s.setAttribute("classes","o-form-option-box__icon"),s.setAttribute("icon",""+String(u)),s):"","\n      ",(n=document.createElement("div"),n.setAttribute("class","o-form-option-box__col"),Ye(n,["\n        ",(t=document.createElement("span"),t.setAttribute("class","o-form-option-box__headline"),Ye(t,[l]),t),"\n        ",(o=document.createElement("span"),o.setAttribute("class","o-form-option-box__description"),Ye(o,[p]),o),"\n      "]),n),"\n    "]),r),"\n    ",(i=document.createElement("div"),i.setAttribute("class","o-form-option-box__row"),Ye(i,["\n      ",f?(c=document.createElement("axa-button"),c.setAttribute("tag","a"),c.setAttribute("classes","o-form-option-box__button"),c.setAttribute("color","blue"),c.setAttribute("href",""+String(d)),Ye(c,[f]),c):"","\n    "]),i),"\n  "]),a},Xe=function(e){function t(){return u(this,t),p(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return n(t,Ve),a(t,[{key:"init",value:function(){l(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"init",this).call(this,{styles:".o-form-option-box {\n  display: block;\n  padding: 25px 20px;\n  background: #fff;\n  border: solid 1px #00008f;\n  border-radius: 5px; }\n  .o-form-option-box__row--1 {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    margin-bottom: 20px;\n    -ms-flex-wrap: wrap;\n        flex-wrap: wrap; }\n  .o-form-option-box__icon {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 20%;\n            flex: 0 0 20%; }\n  .o-form-option-box__col {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 80%;\n            flex: 0 0 80%; }\n  .o-form-option-box__headline {\n    font-size: 14px;\n    font-weight: 700;\n    line-height: 1.5;\n    letter-spacing: 0.02em;\n    color: #00008f; }\n    @media (min-width: 576px) {\n      .o-form-option-box__headline {\n        font-size: 16px; } }\n  .o-form-option-box__description {\n    font-size: 14px;\n    font-weight: 400;\n    line-height: 1.5;\n    letter-spacing: 0.02em;\n    color: #7f7f7f; }\n    @media (min-width: 576px) {\n      .o-form-option-box__description {\n        font-size: 16px; } }\n  .o-form-option-box__button {\n    width: 100%; }\n  .o-form-option-box__headline, .o-form-option-box__description {\n    display: block; }\n",template:Ze})}},{key:"connectedCallback",value:function(){l(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"connectedCallback",this).call(this),this.className="o-form-option-box "+(this.classes?this.classes:"")}},{key:"disconnectedCallback",value:function(){l(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"disconnectedCallback",this).call(this)}}]),t}();return Xe.tagName="axa-form-option-box",Xe.propTypes={classes:x.string,iconName:x.string,headline:x.string,description:x.string,buttonTitle:x.string,href:x.string},Ie=Xe.tagName,$e=Xe,customElements.get(Ie)||customElements.define(Ie,$e,qe),Xe});
