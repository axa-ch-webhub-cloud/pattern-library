var StyleGuideWebComponent=function(){"use strict";function e(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}function t(e,t){return e(t={exports:{}},t.exports),t.exports}var _="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},l=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},a=function(){function o(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(e,t,n){return t&&o(e.prototype,t),n&&o(e,n),e}}(),r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},c=function e(t,n,o){null===t&&(t=Function.prototype);var i=Object.getOwnPropertyDescriptor(t,n);if(void 0===i){var r=Object.getPrototypeOf(t);return null===r?void 0:e(r,n,o)}if("value"in i)return i.value;var a=i.get;return void 0!==a?a.call(o):void 0},o=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)},s=function(e,t){var n={};for(var o in e)0<=t.indexOf(o)||Object.prototype.hasOwnProperty.call(e,o)&&(n[o]=e[o]);return n},p=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},i=function e(t,n,o,i){var r=Object.getOwnPropertyDescriptor(t,n);if(void 0===r){var a=Object.getPrototypeOf(t);null!==a&&e(a,n,o,i)}else if("value"in r&&r.writable)r.value=o;else{var s=r.set;void 0!==s&&s.call(i,o)}return o},u=function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var n=[],o=!0,i=!1,r=void 0;try{for(var a,s=e[Symbol.iterator]();!(o=(a=s.next()).done)&&(n.push(a.value),!t||n.length!==t);o=!0);}catch(e){i=!0,r=e}finally{try{!o&&s.return&&s.return()}finally{if(i)throw r}}return n}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")},C=function(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)},n=t(function(e,t){Object.defineProperty(t,"__esModule",{value:!0});var n="function"==typeof Symbol&&Symbol.for,o=n?Symbol.for("react.element"):60103,i=n?Symbol.for("react.portal"):60106,r=n?Symbol.for("react.fragment"):60107,a=n?Symbol.for("react.strict_mode"):60108,s=n?Symbol.for("react.profiler"):60114,u=n?Symbol.for("react.provider"):60109,l=n?Symbol.for("react.context"):60110,c=n?Symbol.for("react.async_mode"):60111,p=n?Symbol.for("react.concurrent_mode"):60111,d=n?Symbol.for("react.forward_ref"):60112,f=n?Symbol.for("react.suspense"):60113,h=n?Symbol.for("react.memo"):60115,y=n?Symbol.for("react.lazy"):60116;function v(e){if("object"===(void 0===e?"undefined":_(e))&&null!==e){var t=e.$$typeof;switch(t){case o:switch(e=e.type){case c:case p:case r:case s:case a:case f:return e;default:switch(e=e&&e.$$typeof){case l:case d:case u:return e;default:return t}}case y:case h:case i:return t}}}function b(e){return v(e)===p}t.typeOf=v,t.AsyncMode=c,t.ConcurrentMode=p,t.ContextConsumer=l,t.ContextProvider=u,t.Element=o,t.ForwardRef=d,t.Fragment=r,t.Lazy=y,t.Memo=h,t.Portal=i,t.Profiler=s,t.StrictMode=a,t.Suspense=f,t.isValidElementType=function(e){return"string"==typeof e||"function"==typeof e||e===r||e===p||e===s||e===a||e===f||"object"===(void 0===e?"undefined":_(e))&&null!==e&&(e.$$typeof===y||e.$$typeof===h||e.$$typeof===u||e.$$typeof===l||e.$$typeof===d)},t.isAsyncMode=function(e){return b(e)||v(e)===c},t.isConcurrentMode=b,t.isContextConsumer=function(e){return v(e)===l},t.isContextProvider=function(e){return v(e)===u},t.isElement=function(e){return"object"===(void 0===e?"undefined":_(e))&&null!==e&&e.$$typeof===o},t.isForwardRef=function(e){return v(e)===d},t.isFragment=function(e){return v(e)===r},t.isLazy=function(e){return v(e)===y},t.isMemo=function(e){return v(e)===h},t.isPortal=function(e){return v(e)===i},t.isProfiler=function(e){return v(e)===s},t.isStrictMode=function(e){return v(e)===a},t.isSuspense=function(e){return v(e)===f}});e(n);n.typeOf,n.AsyncMode,n.ConcurrentMode,n.ContextConsumer,n.ContextProvider,n.Element,n.ForwardRef,n.Fragment,n.Lazy,n.Memo,n.Portal,n.Profiler,n.StrictMode,n.Suspense,n.isValidElementType,n.isAsyncMode,n.isConcurrentMode,n.isContextConsumer,n.isContextProvider,n.isElement,n.isForwardRef,n.isFragment,n.isLazy,n.isMemo,n.isPortal,n.isProfiler,n.isStrictMode,n.isSuspense;var d=t(function(e,t){});e(d);d.typeOf,d.AsyncMode,d.ConcurrentMode,d.ContextConsumer,d.ContextProvider,d.Element,d.ForwardRef,d.Fragment,d.Lazy,d.Memo,d.Portal,d.Profiler,d.StrictMode,d.Suspense,d.isValidElementType,d.isAsyncMode,d.isConcurrentMode,d.isContextConsumer,d.isContextProvider,d.isElement,d.isForwardRef,d.isFragment,d.isLazy,d.isMemo,d.isPortal,d.isProfiler,d.isStrictMode,d.isSuspense,t(function(e){e.exports=n});var f=Object.getOwnPropertySymbols,h=Object.prototype.hasOwnProperty,y=Object.prototype.propertyIsEnumerable;(function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map(function(e){return t[e]}).join(""))return!1;var o={};return"abcdefghijklmnopqrst".split("").forEach(function(e){o[e]=e}),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},o)).join("")}catch(e){return!1}})()&&Object.assign,Function.call.bind(Object.prototype.hasOwnProperty);function v(){}function b(){}b.resetWarningCache=v;var m=t(function(e){e.exports=function(){function e(e,t,n,o,i,r){if("SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"!==r){var a=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw a.name="Invariant Violation",a}}function t(){return e}var n={array:e.isRequired=e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:b,resetWarningCache:v};return n.PropTypes=n}()}),g=0;function O(e,t){var n=e[t];return"function"==typeof n&&(e[t]=function(t){function n(){return t.apply(void 0,arguments)}return 0===g&&(g++,Object.keys(t).map(function(e){return n[e]=t[e],e}).reduce(O,n),g--),n}(n)),e}var k=m;Object.keys(k).reduce(O,k);var x,w,P,T,E=k.oneOf(["left","center","right"]),A=k.oneOf(["left","right"]),j=(k.oneOf(["top","bottom"]),k.oneOf(["up","down"])),N=k.oneOf(["ok","pending","error","unknown"]),S=k.oneOf(["row","col","rowgroup","colgroup","auto"]),R=k.oneOfType([k.string,k.number]),L={text:R,value:k.any,rowspan:R,colspan:R,scope:S,align:E,dense:k.bool},M={float:A,strong:k.bool,bold:k.bool},I=k.oneOfType([k.string,k.number]),D=k.oneOfType([I,k.shape(r({},L,{sort:j,sortActive:k.bool}))]),U=k.oneOfType([I,k.shape(r({},L,M,{action:k.bool,state:N}))]),F=k.oneOfType([I,k.shape(r({},L,M))]),V=k.oneOfType([k.arrayOf(D),k.shape({cells:k.arrayOf(D)})]),$=k.oneOfType([k.arrayOf(U),k.shape({cells:k.arrayOf(U),action:k.bool})]),q=k.oneOfType([k.arrayOf(F),k.shape({cells:k.arrayOf(F)})]),B=(k.oneOfType([V,k.arrayOf(V)]),k.oneOfType([$,k.arrayOf($)]),k.oneOfType([q,k.arrayOf(q)]),t(function(e){!function(){var a={}.hasOwnProperty;function s(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var o=void 0===n?"undefined":_(n);if("string"===o||"number"===o)e.push(n);else if(Array.isArray(n)&&n.length){var i=s.apply(null,n);i&&e.push(i)}else if("object"===o)for(var r in n)a.call(n,r)&&n[r]&&e.push(r)}}return e.join(" ")}e.exports?(s.default=s,e.exports=s):window.classNames=s}()})),z=function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(e){return t.reduceRight(function(e,t){return t(e)},e)}},K={},W=(x=Object,w=x.getPrototypeOf||function(e){return e.__proto__},P=x.setPrototypeOf||function(e,t){return e.__proto__=t,e},T="object"===("undefined"==typeof Reflect?"undefined":_(Reflect))?Reflect.construct:function(e,t,n){var o,i=[null];return i.push.apply(i,t),o=e.bind.apply(e,i),P(new o,n.prototype)},function(e){var t=w(e);return P(e,P(function(){return T(t,arguments,w(this).constructor)},t))}),H=function(n){return W(function(e){function t(){return l(this,t),p(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return o(t,n),a(t,[{key:"init",value:function(){var e;this._id=((e=this.nodeName)in K||(K[e]=0),++K[e]),this._initialised=!0}},{key:"connectedCallback",value:function(){this._initialised||this.init()}},{key:"attributeChangedCallback",value:function(){this._initialised||this.init()}}],[{key:"uuidv4",value:function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(e){var t=16*Math.random()|0;return("x"==e?t:3&t|8).toString(16)})}}]),t}())},G={},J=function(){try{var e=new window.CustomEvent("test",{cancelable:!0});if(e.preventDefault(),!0!==e.defaultPrevented)throw new Error("Could not prevent default");return window.CustomEvent}catch(e){}return t;function t(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{},n=t.bubbles,o=void 0!==n&&n,i=t.cancelable,r=void 0!==i&&i,a=t.detail,s=void 0===a?void 0:a,u=document.createEvent("CustomEvent");u.initCustomEvent(e,o,r,s);var l=u.preventDefault;return u.preventDefault=function(){l.call(u);try{Object.defineProperty(this,"defaultPrevented",{get:function(){return!0}})}catch(e){this.defaultPrevented=!0}},u}}();function Y(e,t,n){var o=3<arguments.length&&void 0!==arguments[3]?arguments[3]:{},i=new J(t,r({},o,{detail:n}));return e.dispatchEvent(i)}var Z=function(){var e=!1;if("undefined"!=typeof window&&"function"==typeof window.addEventListener){var t=Object.defineProperty({},"passive",{get:function(){e=!0}}),n=function(){};window.addEventListener("testPassiveEventSupport",n,t),window.removeEventListener("testPassiveEventSupport",n,t)}return e}();function X(e){for(var i=e.className,r=!1,a=!0,t=arguments.length,n=Array(1<t?t-1:0),o=1;o<t;o++)n[o-1]=arguments[o];var s=n.map(function(e){var t=(n=e,new RegExp("^"+n+"$|^"+n+"\\s|\\s"+n+"\\s|\\s"+n+"$",o)).test(i);var n,o;t?r=!0:a=!1;return{className:e,hasClass:t}});return!(!a&&!r)&&s}function Q(e,t){if(!e)return!1;for(var n=Object.keys(e),o=n.length,i=0;i<o;++i){var r=n[i];if(e[r]===t)return delete e[r]}return!1}var ee=/\s+/,te={transitionend:function(){for(var e=document.createElement("div").style,t={transition:"transitionend",OTransition:"oTransitionEnd otransitionend",MozTransition:"transitionend",WebkitTransition:"webkitTransitionEnd"},n=Object.keys(t),o=n.length,i=void 0,r=0;r<o;++r)if(void 0!==e[i=n[r]])return t[i];return""}()};function ne(n,e,o,i){var t=4<arguments.length&&void 0!==arguments[4]?arguments[4]:{},r=t.capture,a=void 0!==r&&r,s=t.passive,u=void 0===s||s;if(te[e]&&(e=te[e]),!n||!e)return null;var l=void 0===o?"undefined":_(o),c=o&&"string"===l;if("function"===l){if(i){var p=i;a=p.capture,u=p.passive}i=o}for(var d=Z?{capture:a,passive:u}:a,f=c?function(e){var t=e.target;for(;!X(t,o)&&t!==n;)t=t.parentNode;if(t!==n)return i(e,t)}:i,h=e.split(ee),y=h.length,v=0;v<y;++v)n.addEventListener(h[v],f,d);return function e(){for(var t=0;t<y;++t)n.removeEventListener(h[t],f,d);Q(this,e)}}function oe(o){var i=1<arguments.length&&void 0!==arguments[1]?arguments[1]:0,e=2<arguments.length&&void 0!==arguments[2]?arguments[2]:{},t=e.leading,r=void 0!==t&&t,n=e.trailing,a=void 0===n||n,s=e.maxWait,u=void 0!==s&&s,l=void 0,c=void 0,p=void 0,d=void 0,f=!1,h=i!==u,y=!1!==u;function v(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return l=t,h&&(c&&clearTimeout(c),c=setTimeout(b,i)),y&&!p&&(p=setTimeout(_,u)),r&&!f&&(f=!0,d=o.apply(void 0,C(l))),d}return v.flush=function(){(c||p)&&(d=o.apply(void 0,C(l)));return g(),d},v.cancel=g,v;function b(){p&&clearTimeout(p),m()}function _(){c&&clearTimeout(c),m()}function m(){a&&(d=o.apply(void 0,C(l))),p=c=null,f=!1}function g(){c&&(clearTimeout(c),c=null),p&&(clearTimeout(p),p=null),l=void 0,f=!1}}window.__subscriptions=window.__subscriptions||{};var ie=window.__subscriptions;function re(e,t){var n=ne(2<arguments.length&&void 0!==arguments[2]?arguments[2]:document,e,t);ie[e]||(ie[e]={count:0});var o,i=ie[e];return i.count++,i.onsubscribe||(i.onsubscribe=oe((o=e,function(){Y(document,"pubsub/onsubscribe",o),Y(document,"pubsub/onsubscribe/"+o,o),ie[o]&&delete ie[o].unsubscribe}),100)),i.onsubscribe(),function(){i.count--,n.call(this),i.count<=0&&delete ie[e]}}ne(document,"pubsub/onsubscribe",function(e){var t=e.detail;ie[t]||(ie[t]={count:0});var n=ie[t],o=n.queue;Array.isArray(o)&&(o.forEach(function(e){var t=u(e,3),n=t[0],o=t[1],i=t[2];Y(i,n,o)}),delete n.queue)});var ae,se=function(e,t){return e===t},ue=(ae=function(){var e;return(e=console).log.apply(e,arguments)},function(){var i=0<arguments.length&&void 0!==arguments[0]?arguments[0]:se;return function(){for(var e=arguments.length,o=Array(e),t=0;t<e;t++)o[t]=arguments[t];return function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(){return i.apply(void 0,[].concat(o,t))?ae.apply(void 0,arguments):void 0}}}}()(!0),[]);var le=1,ce=3,pe=8;function de(e,t){var n=e.nodeType;n===le&&function(e,t){for(var n=t.skipChildren&&t.skipChildren(),o=t.constructor.observedAttributes,i=o&&Array.isArray(o)&&o.length,r=function(e){return n&&i&&-1===o.indexOf(e)},a=t.attributes,s=e.attributes,u=null,l=null,c=null,p=null,d=s.length-1;0<=d;--d)if(p=s[d],c=p.name,u=p.namespaceURI,l=p.value,!r(c))if(u){var f=p.localName;t.getAttributeNS(u,f||c)!==l&&t.setAttributeNS(u,c,l)}else t.hasAttribute(c)?t.getAttribute(c)!==l&&("null"===l||"undefined"===l?t.removeAttribute(c):t.setAttribute(c,l)):t.setAttribute(c,l);for(var h=a.length-1;0<=h;--h)if(!1!==(p=a[h]).specified){if(c=p.name,u=p.namespaceURI,r(c))continue;u?(c=p.localName||c,e.hasAttributeNS(u,c)||t.removeAttributeNS(u,c)):e.hasAttributeNS(null,c)||t.removeAttribute(c)}}(e,t),n!==ce&&n!==pe||t.nodeValue===e.nodeValue||(t.nodeValue=e.nodeValue)}function fe(e,t){var n=e.nodeName;"INPUT"===n?function(e,t){var n=e.value,o=t.value;he(e,t,"checked"),he(e,t,"disabled"),n!==o&&(t.setAttribute("value",n),t.value=n);"null"===n&&(t.value="",t.removeAttribute("value"));e.hasAttributeNS(null,"value")?"range"===t.type&&(t.value=n):t.removeAttribute("value")}(e,t):"OPTION"===n?he(e,t,"selected"):"TEXTAREA"===n?function(e,t){var n=e.value;n!==t.value&&(t.value=n);if(t.firstChild&&t.firstChild.nodeValue!==n){if(""===n&&t.firstChild.nodeValue===t.placeholder)return;t.firstChild.nodeValue=n}}(e,t):"SELECT"===n&&function(e,t){var n=-1,o=0,i=t.firstChild,r=void 0,a=void 0;for(;i;)if("OPTGROUP"===(a=i.nodeName&&i.nodeName.toUpperCase()))i=(r=i).firstChild;else{if("OPTION"===a){if(i.hasAttributeNS(null,"selected")){n=o;break}o+=1}!(i=i.nextSibling)&&r&&(i=r.nextSibling,r=null)}t.selectedIndex=n}(0,t)}function he(e,t,n){e[n]!==t[n]&&(t[n]=e[n],e[n]?t.setAttribute(n,""):t.removeAttribute(n))}var ye=3;function ve(e,t){return t?e?e.isSameNode&&e.isSameNode(t)?t:e.tagName!==t.tagName?e:(de(e,t),t.skipChildren&&t.skipChildren()||function(e,t){for(var n=void 0,o=void 0,i=void 0,r=void 0,a=0,s=0;n=t.childNodes[s],o=e.childNodes[s-a],n||o;s++)if(o)if(n)if(be(o,n))(i=ve(o,n))!==n&&(t.replaceChild(i,n),a++);else{r=null;for(var u=s;u<t.childNodes.length;u++)if(be(t.childNodes[u],o)){r=t.childNodes[u];break}r?((i=ve(o,r))!==r&&a++,t.insertBefore(i,n)):o.id||n.id?(t.insertBefore(o,n),a++):(i=ve(o,n))!==n&&(t.replaceChild(i,n),a++)}else t.appendChild(o),a++;else t.removeChild(n),s--}(e,t),fe(e,t),t):null:e}function be(e,t){return e.id?e.id===t.id:e.isSameNode?e.isSameNode(t):e.tagName===t.tagName&&(e.type===ye&&e.nodeValue===t.nodeValue)}var _e,me,ge,Ce,Oe=(_e=Object,me=_e.getPrototypeOf||function(e){return e.__proto__},ge=_e.setPrototypeOf||function(e,t){return e.__proto__=t,e},Ce="object"===("undefined"==typeof Reflect?"undefined":_(Reflect))?Reflect.construct:function(e,t,n){var o,i=[null];return i.push.apply(i,t),o=e.bind.apply(e,i),ge(new o,n.prototype)},function(e){var t=me(e);return ge(e,ge(function(){return Ce(t,arguments,me(this).constructor)},t))})(function(e){function s(e){var t;l(this,s);for(var n="\n    Web Component "+e.nodeName+"%c#"+e._id+" does not accept string as a return from a template. Maybe use bel?}",o=arguments.length,i=Array(1<o?o-1:0),r=1;r<o;r++)i[r-1]=arguments[r];var a=p(this,(t=s.__proto__||Object.getPrototypeOf(s)).call.apply(t,[this,n].concat(i)));return Error.captureStackTrace&&Error.captureStackTrace(a,s),a.name="TemplateNoStringReturnException",a}return o(s,e),s}(Error)),ke=!!document.createDocumentFragment().children,xe=/[A-Z]/g;function we(e){return e.replace(xe,Pe)}function Pe(e,t,n){var o=e.toLowerCase(),i=n.charAt(t+1);return 0===t||i.toUpperCase()===i?o:"-"+o}var Te=/^\s*(?:true|false|null|undefined|-?[0-9]+\.?[0-9]*|[[{](?:.|[\s])*[\]}])\s*$/;function Ee(t,n,e){var o=t;if(e)return function(t,n,e){var o=t;switch(e){case k.string:case k.string.isRequired:return t;case k.bool:case k.bool.isRequired:if(!t||n===t)return!0;case k.number:case k.number.isRequired:case k.object:case k.object.isRequired:case k.array:case k.array.isRequired:default:if(Te.test(t))try{o=JSON.parse(t)}catch(e){console.error("Attribute "+n+" has an error:\n"+e+"\n",t)}}return o}(t,n,e);if(t&&n!==t){if(Te.test(t))try{o=JSON.parse(t)}catch(e){console.error("Attribute "+n+" has an error:\n"+e+"\n",t)}}else o=!0;return o}var Ae=/(?:^\w|[A-Z]|\b\w|\s+|[-_]+)/g,je=/[-_]+/g;function Ne(e){return e.replace(Ae,Se)}function Se(e,t){return 0==+e||je.test(e)?"":0===t?e.toLowerCase():e.toUpperCase()}function Re(e,t,n){var o=1===e.nodeType,i=e.constructor.propTypes,r=n;!n&&o&&(r=(void 0===i?{}:i)[Ne(t)]);if(o&&!e.hasAttribute(t))return r!==k.bool&&r!==k.bool.isRequired&&void 0;var a=e.value;return t?a=e.getAttribute(t):t=e.name,a=Ee(a,t,r)}var Le=/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream;function Me(n,e,o){var t,i=3<arguments.length&&void 0!==arguments[3]?arguments[3]:{},r=i.capture,a=void 0===r||r,s=i.passive,u=void 0===s||s,l=n.ownerDocument.documentElement,c=ne(l,e,function(e){var t=e.target;if(!n.contains(t)&&n!==t)return o(e)},{capture:a,passive:u});return t=l,Le&&(t.style.cursor="pointer"),c}var Ie=function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];for(var o=t.length,i={},r=0;r<o;++r){var a=t[r];i[a.toUpperCase()]=a}return i}("click","change","keyup","enter","move","leave","Escape","Esc","touchstart","touchmove","touchend","input","resize","paste"),De="axa-click",Ue="axa-load",Fe="axa-render",Ve="axa-change",$e="data-prevent-default";(function(){function o(e){var r=this,t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{};l(this,o),this._handleClick=function(e,t){r.shouldPreventDefault(t||e.currentTarget)&&e.preventDefault();var n=!r._lastToggleNode,o=t!==r._lastToggleNode,i=!n&&!o;n?(r._notify(Ie.ENTER,t),r._onInteractive()):o&&r._notify(Ie.MOVE,t,r._lastToggleNode),r._lastToggleNode=t,i&&r._options.sameClickClose&&r._close()},this._handleClose=function(e,t){r.shouldPreventDefault(t||e.currentTarget)&&e.preventDefault(),r._close()},this._handleKeyUp=function(e){(e.key===Ie.ESCAPE||e.key===Ie.ESC||27===e.keyCode)&&(e.preventDefault(),r._close())},this._init(e,t)}return a(o,[{key:"_init",value:function(e,t){e&&(this._wcNode=e),t&&(this._options=r({},o.DEFAULTS,t));var n=this._options.containerClass;this._container=n?this._wcNode.querySelector(n):this._wcNode,this._on()}},{key:"_on",value:function(){this._off(),this._unClick=ne(this._container,Ie.CLICK,this._options.toggleClass,this._handleClick,{passive:!this._options.preventDefault})}},{key:"_off",value:function(){this._unClick&&this._unClick(),this._offInteractive()}},{key:"_onInteractive",value:function(){this._offInteractive();var e=this._container,t=this._options,n=t.closeClass,o=t.outerClose,i=t.escapeClose,r=t.preventDefault;n&&(this._unCloseClick=ne(e,Ie.CLICK,n,this._handleClose,{passive:!r})),o&&(this._unOuterClick=Me(e,Ie.CLICK,this._handleClose,{passive:!r})),i&&(this._unCloseEscape=ne(e.ownerDocument,Ie.KEYUP,this._handleKeyUp,{passive:!1}))}},{key:"shouldPreventDefault",value:function(e){return e.hasAttribute($e)?Re(e,$e):this._options.preventDefault}},{key:"_offInteractive",value:function(){this._unOuterClick&&this._unOuterClick(),this._unCloseClick&&this._unCloseClick(),this._unCloseEscape&&this._unCloseEscape(),this.deleteLastToggleNode()}},{key:"_close",value:function(){this._lastToggleNode&&(this._notify(Ie.LEAVE,this._lastToggleNode),this._offInteractive(),this.deleteLastToggleNode())}},{key:"_notify",value:function(e,t,n){e in this&&"function"==typeof this[e]&&this[e](t,n)}},{key:"enter",value:function(e){throw new Error("UiEvent.enter method not overwritten")}},{key:"move",value:function(e,t){}},{key:"leave",value:function(e){throw new Error("UiEvent.leave method not overwritten")}},{key:"destroy",value:function(){this._off(),delete this._wcNode,delete this._options}},{key:"deleteLastToggleNode",value:function(){delete this._lastToggleNode}},{key:"lastToggleNode",get:function(){return this._lastToggleNode}}]),o})().DEFAULTS={containerClass:".js-ui-container",toggleClass:"js-ui-toggle",closeClass:"js-ui-close",escapeClose:!0,outerClose:!0,sameClickClose:!0,preventDefault:!0};var qe=z(function(n){var e,t;return t=e=function(e){function t(){return l(this,t),p(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return o(t,n),t}(),e.version="2.0.1-beta.262",t},function(t){return function(e){function n(){return l(this,n),p(this,(n.__proto__||Object.getPrototypeOf(n)).apply(this,arguments))}return o(n,t),a(n,[{key:"init",value:function(e){var t=this;c(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"init",this).call(this,e),this._makeContextReady=function(){var e=(0<arguments.length&&void 0!==arguments[0]?arguments[0]:{}).detail;t.contextNode&&(clearTimeout(t.timeoutId),t.timeoutId=setTimeout(function(){t.contextCallback(t.contextNode,e)},10)),t.unContextEnabled&&t.unContextEnabled(),t.unContextEnabled=re("context/available",t._makeContextReady)}}},{key:"connectedCallback",value:function(){c(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"connectedCallback",this)&&c(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"connectedCallback",this).call(this),this.contextCallback&&this._makeContextReady()}},{key:"disconnectedCallback",value:function(){c(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"disconnectedCallback",this)&&c(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"disconnectedCallback",this).call(this),this.unContextEnabled&&this.unContextEnabled()}},{key:"provideContext",value:function(){var e=this.nodeName.toLowerCase();this.__isContext=!0,function(e,t){var n=2<arguments.length&&void 0!==arguments[2]?arguments[2]:document;ie[e]||(ie[e]={count:0,queue:[]});var o=ie[e].queue;Array.isArray(o)?o.push([e,t,n]):Y(n,e,t)}("context/available",this.__contextName=e)}},{key:"consumeContext",value:function(e){this.__consumedContext=e&&e.toLowerCase()}},{key:"contextNode",get:function(){for(var e=this.__consumedContext,t=this.parentNode;t&&(!t.__isContext||e&&e!==t.__contextName);)t=t.parentNode;return!(!t||!t.__isContext)&&t}}]),n}()},function(t){return function(e){function n(){return l(this,n),p(this,(n.__proto__||Object.getPrototypeOf(n)).apply(this,arguments))}return o(n,t),a(n,[{key:"appendChild",value:function(e){!this._isMorphing&&this._hasTemplate&&this._hasRendered?(this._lightDOMRefs.push(e),this.render()):c(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"appendChild",this).call(this,e)}},{key:"innerText",set:function(e){if(this._hasTemplate&&this._hasRendered){var t=document.createTextNode(e);this._lightDOMRefs=[t],this.render()}else i(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"innerText",e,this)}},{key:"textContent",set:function(e){if(this._hasTemplate&&this._hasRendered){var t=document.createTextNode(e);this._lightDOMRefs=[t],this.render()}else i(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"textContent",e,this)}},{key:"innerHTML",set:function(e){if(this._hasTemplate&&this._hasRendered){var t=document.createElement("div");t.innerHTML=e,this._lightDOMRefs=Array.from(t.children),this.render()}else i(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"innerHTML",e,this)}}]),n}()},function(t){return function(e){function r(){return l(this,r),p(this,(r.__proto__||Object.getPrototypeOf(r)).apply(this,arguments))}return o(r,t),a(r,[{key:"init",value:function(e){var t=this;c(r.prototype.__proto__||Object.getPrototypeOf(r.prototype),"init",this).call(this,e),this._isConnected=!1,this.props={},this.updatedDebounced=oe(function(){return t.updated&&t.updated()},50);var n=this.constructor.observedAttributes;Array.isArray(n)&&n.forEach(function(e){Ne(e)})}},{key:"connectedCallback",value:function(){var o=this;if(c(r.prototype.__proto__||Object.getPrototypeOf(r.prototype),"connectedCallback",this)&&c(r.prototype.__proto__||Object.getPrototypeOf(r.prototype),"connectedCallback",this).call(this),!this._isConnected){this._isConnected=!0;var e=this.constructor.observedAttributes;if(this.initialClassName=this.className,Array.isArray(e)){var i=this.constructor.propTypes;e.forEach(function(e){var t=Ne(e);if(o.hasAttribute(e)){var n=Re(o,e,i[t]);o.props[t]=n}}),this.checkPropTypes()}}this.updated&&this.updated()}},{key:"attributeChangedCallback",value:function(e,t,n){if(c(r.prototype.__proto__||Object.getPrototypeOf(r.prototype),"attributeChangedCallback",this)&&c(r.prototype.__proto__||Object.getPrototypeOf(r.prototype),"attributeChangedCallback",this).call(this,e,t,n),this.shouldUpdateCallback(n,t)){var o=Ne(e);if(this.hasAttribute(e)){var i=this.constructor.propTypes;this.props[o]=Ee(n,e,i[o])}else this.props[o]=null;this.checkPropTypes(),"value"===e&&null!==n&&Y(this,Ve,n,{bubbles:!0,cancelable:!0,composed:!0}),this.updatedDebounced()}}},{key:"setProps",value:function(e){var a=this;c(r.prototype.__proto__||Object.getPrototypeOf(r.prototype),"attributeChangedCallback",this)&&c(r.prototype.__proto__||Object.getPrototypeOf(r.prototype),"attributeChangedCallback",this).call(this);var t=this.constructor.observedAttributes,n=void 0===t?[]:t,o=Object.keys(e).filter(function(e){return-1<n.indexOf(we(e))}).reduce(function(e,t){var n=e.props,o=e.shouldUpdate,i=n[t],r=a.props&&a.props[t]?a.props[t]:void 0;return o||a.shouldUpdateCallback(i,r)?(a.props[t]=i,{props:n,shouldUpdate:!0}):{props:n,shouldUpdate:!1}},{props:e,shouldUpdate:!1}).shouldUpdate;this.checkPropTypes(),o&&this._isConnected?this.updated&&this.updated():o&&!this._isConnected&&console.warn("setProps(): Custom Element not connected and props never update",this)}},{key:"checkPropTypes",value:function(){var e=this.constructor,t=e.propTypes,n=e.tagName,o=this.props;t&&k.checkPropTypes(t,o,"prop",n)}},{key:"shouldUpdateCallback",value:function(e,t){return e!==t}},{key:"disconnectedCallback",value:function(){this._isConnected=!1}}],[{key:"observedAttributes",get:function(){var e=this.propTypes;return e&&Object.keys(e).map(we)}}]),r}()},function(t){return function(e){function u(){return l(this,u),p(this,(u.__proto__||Object.getPrototypeOf(u)).apply(this,arguments))}return o(u,t),a(u,[{key:"init",value:function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{},t=e.template,n=s(e,["template"]);c(u.prototype.__proto__||Object.getPrototypeOf(u.prototype),"init",this).call(this,n),this._template=t,this._hasTemplate=!!t,this._hasRendered=!1,this.updated=this.render}},{key:"render",value:function(){var n=this,e=!this._hasRendered;if(this.willRenderCallback(e),this._hasTemplate){var t=this._template;try{if(e){for(var o=document.createDocumentFragment(),i=[];this.firstChild;)i.push(this.firstChild),o.appendChild(this.firstChild);this._lightDOMRefs=i,this.childrenFragment=o}else this._lightDOMRefs.forEach(function(e){var t=e.cloneNode(!0);n.childrenFragment.appendChild(t)});ke||(this.childrenFragment.children=Array.from(this.childrenFragment.childNodes).filter(function(e){return 1===e.nodeType}));var r=t(this.props,this.childrenFragment,this),a=document.createDocumentFragment();if(Array.isArray(r))r.forEach(function(e){a.appendChild(e)});else if(r){if("string"==typeof r)throw new Oe(this);a.appendChild(r)}if(e)c(u.prototype.__proto__||Object.getPrototypeOf(u.prototype),"appendChild",this).call(this,a);else{var s=this.cloneNode(!1);s._isMorphing=!0,s.appendChild(a),this._isMorphing=!0,function(e,t){if("object"!==(void 0===e?"undefined":_(e)))throw new Error("componentMorph: oldTree should be an object");if("object"!==(void 0===t?"undefined":_(t)))throw new Error("componentMorph: newTree should be an object");ve(t,e)}(this,s),function(){for(var e=void 0;e=ue.pop();)delete e.isSameNode;ue=[]}(),this._isMorphing=!1}}catch(e){console.error(e)}}this._hasRendered=!0,this.didRenderCallback(e)}},{key:"skipChildren",value:function(){return!this._isMorphing}},{key:"willRenderCallback",value:function(e){}},{key:"didRenderCallback",value:function(e){}}]),u}()},function(t){return function(e){function i(){return l(this,i),p(this,(i.__proto__||Object.getPrototypeOf(i)).apply(this,arguments))}return o(i,t),a(i,[{key:"init",value:function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{},t=e.styles,n=void 0===t?"":t,o=s(e,["styles"]);c(i.prototype.__proto__||Object.getPrototypeOf(i.prototype),"init",this).call(this,o),this._styles=n}},{key:"connectedCallback",value:function(){c(i.prototype.__proto__||Object.getPrototypeOf(i.prototype),"connectedCallback",this)&&c(i.prototype.__proto__||Object.getPrototypeOf(i.prototype),"connectedCallback",this).call(this),this._appendStyles()}},{key:"_appendStyles",value:function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:this;if(this._styles){var t=document.createElement("style"),n=document.createTextNode(this._styles);t.appendChild(n),e.insertAdjacentElement?e.insertAdjacentElement("afterbegin",t):e.appendChild(t)}}}]),i}()}),Be=z(qe,H),ze=z(qe,function(i){return function(e){function n(){return l(this,n),p(this,(n.__proto__||Object.getPrototypeOf(n)).apply(this,arguments))}return o(n,i),a(n,[{key:"init",value:function(e){var t=this;c(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"init",this).call(this,e),this._appendStyles=function(){n.appendGlobalStyles(t._styles,t.nodeName)}}}],[{key:"appendGlobalStyles",value:function(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:i.uuidv4();if(e&&!G[t]){var n=document.createElement("style"),o=document.createTextNode(e);G[t]=!0,n.appendChild(o),n.setAttribute("data-c-name",t.toLowerCase()),document.head.appendChild(n)}}}]),n}()},H)(HTMLElement);var Ke=/\n[\s]+$/,We=/^\n[\s]+/,He=/[\s]+$/,Ge=/^[\s]+/,Je=/[\n\s]+/g,Ye=["a","abbr","b","bdi","bdo","br","cite","data","dfn","em","i","kbd","mark","q","rp","rt","rtc","ruby","s","amp","small","span","strong","sub","sup","time","u","var","wbr"],Ze=["code","pre","textarea"],Xe=function e(t,n){if(Array.isArray(n))for(var o,i,r=t.nodeName.toLowerCase(),a=!1,s=0,u=n.length;s<u;s++){var l=n[s];if(Array.isArray(l))e(t,l);else{("number"==typeof l||"boolean"==typeof l||"function"==typeof l||l instanceof Date||l instanceof RegExp)&&(l=l.toString());var c=t.childNodes[t.childNodes.length-1];if("string"==typeof l)a=!0,c&&"#text"===c.nodeName?c.nodeValue+=l:(l=document.createTextNode(l),t.appendChild(l),c=l),s===u-1&&(a=!1,-1===Ye.indexOf(r)&&-1===Ze.indexOf(r)?""===(o=c.nodeValue.replace(We,"").replace(He,"").replace(Ke,"").replace(Je," "))?t.removeChild(c):c.nodeValue=o:-1===Ze.indexOf(r)&&(i=0===s?"":" ",o=c.nodeValue.replace(We,i).replace(Ge," ").replace(He,"").replace(Ke,"").replace(Je," "),c.nodeValue=o));else if(l&&l.nodeType){a&&(a=!1,-1===Ye.indexOf(r)&&-1===Ze.indexOf(r)?""===(o=c.nodeValue.replace(We,"").replace(Ke,"").replace(Je," "))?t.removeChild(c):c.nodeValue=o:-1===Ze.indexOf(r)&&(o=c.nodeValue.replace(Ge," ").replace(We,"").replace(Ke,"").replace(Je," "),c.nodeValue=o));var p=l.nodeName;p&&(r=p.toLowerCase()),t.appendChild(l)}}}},Qe=Be(HTMLElement);function et(e){var t,n,o,i,r,a=e.inputId,s=void 0===a?Qe.uuidv4():a,u=e.type,l=void 0===u?"text":u,c=e.placeholder,p=void 0===c?"":c,d=e.value,f=void 0===d?"":d,h=e.name,y=void 0===h?"":h,v=e.disabled,b=void 0!==v&&v,_=e.icon,m=void 0!==_&&_,g=e.autocomplete,C=void 0===g?"off":g,O=e.readonly,k=void 0!==O&&O;return(o=document.createElement("div")).setAttribute("class","a-input__wrapper"),Xe(o,["\n      ",(t=document.createElement("input"),t.setAttribute("id",""+String(s)),t.setAttribute("name",""+String(y)),t.setAttribute("type",""+String(l)),t.setAttribute("placeholder",""+String(p)),t.setAttribute("value",""+String(f)),b&&t.setAttribute("disabled","disabled"),t.setAttribute("autocomplete",""+String(C)),k&&t.setAttribute("readonly","readonly"),t.setAttribute("class","a-input__input js-input__input"),t),"\n          ",(n=document.createElement("span"),n.setAttribute("class","a-input__valid-icon"),n),"\n          ",m?(r=document.createElement("button"),r.setAttribute("type","button"),r.setAttribute("class","a-input__icon-button js-input__icon-button"),Xe(r,["\n            ",(i=document.createElement("axa-icon"),i.setAttribute("classes","a-input__icon"),i.setAttribute("icon",""+String(m)),i.setAttribute("icon-class","a-icon__svg--small"),i),"\n          "]),r):"","\n      "]),o}var tt,nt,ot,it=function(){function t(e){l(this,t),this.wcNode=e}return a(t,[{key:"init",value:function(){this.iconButton=this.wcNode.querySelector(".js-input__icon-button"),this.inputfield=this.wcNode.querySelector(".js-input__input"),this.disablePaste=Re(this.wcNode,"disable-paste"),this.cursorPosition=0,this.listenToButtons(),this.listenToInputChange(),this.disablePaste&&this.listenToPaste(),Y(this.inputfield,Ue,this.inputfield.value,{bubbles:!0,cancelable:!0,composed:!0})}},{key:"listenToButtons",value:function(){var e=this;this.offListenToButtons(),this.unIconButtonListenerEnd=ne(this.iconButton,Ie.CLICK,function(){Y(e.iconButton,De,e.inputfield.value,{bubbles:!0,cancelable:!0,composed:!0})})}},{key:"listenToPaste",value:function(){this.offListenToPaste(),this.disablePasteListener=ne(this.inputfield,Ie.PASTE,function(e){e.preventDefault()},{capture:!0,passive:!1})}},{key:"offListenToPaste",value:function(){this.disablePasteListener&&this.disablePasteListener()}},{key:"offListenToButtons",value:function(){this.unIconButtonListenerEnd&&this.unIconButtonListenerEnd()}},{key:"listenToInputChange",value:function(){var t=this;this.offListenToInputChange(),this.unInputListenerEnd=ne(this.wcNode,Ie.INPUT,"js-input__input",function(e){t.cursorPosition=e.target.selectionStart,Y(t.inputfield,Ve,{value:e.target.value,position:e.target.selectionStart||0},{bubbles:!0,cancelable:!0,composed:!0})})}},{key:"offListenToInputChange",value:function(){this.unInputListenerEnd&&this.unInputListenerEnd()}},{key:"destroy",value:function(){this.offListenToInputChange(),this.offListenToButtons(),this.offListenToPaste()}}]),t}(),rt=function(e){function t(){return l(this,t),p(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return o(t,ze),a(t,[{key:"init",value:function(){c(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"init",this).call(this,{styles:'.a-input {\n  display: block;\n  width: 100%; }\n  .a-input:not(:first-child) {\n    margin-top: 5px; }\n    @media (min-width: 768px) {\n      .a-input:not(:first-child) {\n        margin-top: 10px; } }\n\n.a-input__wrapper {\n  position: relative;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  width: 100%; }\n\n.a-input__input {\n  -webkit-transition: all 0.2s ease;\n  transition: all 0.2s ease;\n  display: -webkit-inline-box;\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n  height: 40px;\n  padding: 0 20px;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n  line-height: normal;\n  color: #333;\n  background: #fff;\n  outline: none;\n  border: 1px solid #ccc;\n  -webkit-appearance: none;\n     -moz-appearance: none;\n          appearance: none; }\n  .a-input__input::-webkit-input-placeholder {\n    color: #999; }\n  .a-input__input::-ms-input-placeholder {\n    color: #999; }\n  .a-input__input::placeholder {\n    color: #999; }\n  .a-input__input::-ms-clear {\n    display: none; }\n  .a-input__input:hover:not(:disabled):not(.a-input--error), .a-input__input:active:not(:disabled):not(.a-input--error), .a-input__input:focus:not(:disabled):not(.a-input--error) {\n    border-color: #00008f; }\n  .a-input__input:disabled, .a-input__input:-moz-read-only {\n    background-color: #f5f5f5; }\n  .a-input__input:disabled, .a-input__input:read-only {\n    background-color: #f5f5f5; }\n\n.a-input--icon {\n  display: inline-block;\n  vertical-align: middle;\n  line-height: 0; }\n  .a-input--icon .a-input__input {\n    padding: 0 40px 0 20px; }\n\n.a-input--error .a-input__input {\n  border-color: #c91432; }\n\n.a-input--valid .a-input__valid-icon {\n  display: -webkit-inline-box;\n  display: -ms-inline-flexbox;\n  display: inline-flex; }\n\n.a-input--inline {\n  display: inline-block;\n  width: auto;\n  vertical-align: middle; }\n  .a-input--inline + .a-input--inline {\n    margin-left: 10px; }\n    @media (min-width: 768px) {\n      .a-input--inline + .a-input--inline {\n        margin-left: 15px; } }\n  .a-input--inline .a-input__wrapper {\n    position: relative;\n    display: inline-block;\n    width: auto;\n    vertical-align: middle; }\n\n.a-input__valid-icon {\n  display: none;\n  width: 48px;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-flex: 0;\n      -ms-flex-positive: 0;\n          flex-grow: 0;\n  -ms-flex-negative: 0;\n      flex-shrink: 0; }\n  .a-input__valid-icon::before {\n    display: block;\n    width: 8px;\n    height: 16px;\n    content: "";\n    border: solid #1cc54e;\n    border-width: 0 2px 2px 0;\n    -webkit-transform: rotate(45deg);\n            transform: rotate(45deg); }\n\n.a-input__icon-button {\n  position: absolute;\n  right: 0;\n  top: 0;\n  padding: 5px;\n  height: 100%;\n  width: 40px;\n  background: transparent;\n  border: none;\n  outline: none; }\n\n.a-input__icon-button:hover {\n  cursor: pointer; }\n\n.a-input__icon {\n  height: 16px;\n  width: 16px;\n  fill: #00008f; }\n',template:et}),this.input=new it(this)}},{key:"willRenderCallback",value:function(){var e=this.props,t=e.icon,n=e.valid,o=e.inline,i=e.error,r=e.disabled,a=e.readonly;this.className=B("a-input",this.initialClassName,{"a-input--valid":n,"a-input--inline":o,"a-input--error":i,"a-input--disabled":r,"a-input--readonly":a,"a-input--icon":t})}},{key:"didRenderCallback",value:function(){this.input.init(),Y(this,Fe,"",this.input.inputfield,{bubbles:!0,cancelable:!0,composed:!0})}},{key:"disconnectedCallback",value:function(){this.input.destroy()}}]),t}();return rt.tagName="axa-input",rt.propTypes={valid:k.bool,inline:k.bool,error:k.string,disabled:k.bool,inputId:k.string,type:k.string,placeholder:k.string,value:k.string,name:k.string,icon:k.string,disablePaste:k.bool,readonly:k.bool},tt=rt.tagName,nt=rt,customElements.get(tt)||customElements.define(tt,nt,ot),rt}();
