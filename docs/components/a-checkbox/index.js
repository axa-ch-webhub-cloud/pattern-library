var StyleGuideWebComponent=function(){"use strict";function e(e,t){return e(t={exports:{}},t.exports),t.exports}var t=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable;(function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map(function(e){return t[e]}).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach(function(e){r[e]=e}),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(e){return!1}})()&&Object.assign;var c="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},u=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},o=function(){function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,t,n){return t&&r(e.prototype,t),n&&r(e,n),e}}(),i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},p=function e(t,n,r){null===t&&(t=Function.prototype);var o=Object.getOwnPropertyDescriptor(t,n);if(void 0===o){var i=Object.getPrototypeOf(t);return null===i?void 0:e(i,n,r)}if("value"in o)return o.value;var a=o.get;return void 0!==a?a.call(r):void 0},d=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)},a=function(e,t){var n={};for(var r in e)0<=t.indexOf(r)||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n},f=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},h=function e(t,n,r,o){var i=Object.getOwnPropertyDescriptor(t,n);if(void 0===i){var a=Object.getPrototypeOf(t);null!==a&&e(a,n,r,o)}else if("value"in i&&i.writable)i.value=r;else{var c=i.set;void 0!==c&&c.call(o,r)}return r},s=function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var n=[],r=!0,o=!1,i=void 0;try{for(var a,c=e[Symbol.iterator]();!(r=(a=c.next()).done)&&(n.push(a.value),!t||n.length!==t);r=!0);}catch(e){o=!0,i=e}finally{try{!r&&c.return&&c.return()}finally{if(o)throw i}}return n}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")},k=function(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)};function l(){}var v=e(function(e){e.exports=function(){function e(e,t,n,r,o,i){if(i!==c){var a=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw a.name="Invariant Violation",a}}function t(){return e}var n={array:e.isRequired=e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t};return n.checkPropTypes=l,n.PropTypes=n}()}),b=0;function _(e,t){var n=e[t];return"function"==typeof n&&(e[t]=function(t){function n(){return t.apply(void 0,arguments)}return 0===b&&(b++,Object.keys(t).map(function(e){return n[e]=t[e],e}).reduce(_,n),b--),n}(n)),e}var m=v;Object.keys(m).reduce(_,m);var g=m.oneOf(["left","center","right"]),x=m.oneOfType([m.string,m.number]),O=m.oneOfType([m.arrayOf(P),m.shape({cells:m.arrayOf(P)})]),C=m.oneOfType([m.arrayOf(S),m.shape({cells:m.arrayOf(S),action:m.bool})]),w=m.oneOfType([m.arrayOf(R),m.shape({cells:m.arrayOf(R)})]),T=(m.oneOf(["row","col","rowgroup","colgroup","auto"]),m.oneOfType([m.arrayOf(P),m.arrayOf(O)]),m.oneOfType([m.arrayOf(S),m.arrayOf(C)]),m.oneOfType([m.arrayOf(R),m.arrayOf(w)]),m.oneOf(["up","down"])),A=m.oneOf(["left","right"]),N=m.oneOf(["ok","pending","error","unknown"]),E={text:x,value:m.any,rowspan:m.number,colspan:m.number,scope:null,align:g,dense:m.bool},j=m.oneOfType([m.string,m.number,m.shape(E)]),P=m.oneOfType([j,m.shape(i({},E,{sort:T,sortActive:m.bool}))]),S=m.oneOfType([j,m.shape(i({},E,{float:A,action:m.bool,strong:m.bool,bold:m.bool,state:N}))]),R=m.oneOfType([j,m.shape(i({},E,{float:A}))]),D=(m.oneOf(["top","bottom"]),e(function(e){!function(){var i={}.hasOwnProperty;function a(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var r=void 0===n?"undefined":y(n);if("string"===r||"number"===r)e.push(n);else if(Array.isArray(n))e.push(a.apply(null,n));else if("object"===r)for(var o in n)i.call(n,o)&&n[o]&&e.push(o)}}return e.join(" ")}e.exports?e.exports=a:window.classNames=a}()})),L={},M=function(e){return e in L||(L[e]=0),++L[e]},I=function(){try{var e=new window.CustomEvent("test",{cancelable:!0});if(e.preventDefault(),!0!==e.defaultPrevented)throw new Error("Could not prevent default");return window.CustomEvent}catch(e){}return t;function t(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{},n=t.bubbles,r=void 0!==n&&n,o=t.cancelable,i=void 0!==o&&o,a=t.detail,c=void 0===a?void 0:a,s=document.createEvent("CustomEvent");s.initCustomEvent(e,r,i,c);var l=s.preventDefault;return s.preventDefault=function(){l.call(s);try{Object.defineProperty(this,"defaultPrevented",{get:function(){return!0}})}catch(e){this.defaultPrevented=!0}},s}}();function U(e,t,n){var r=3<arguments.length&&void 0!==arguments[3]?arguments[3]:{},o=new I(t,i({},r,{detail:n}));return e.dispatchEvent(o)}var V=function(){var e=!1;if("undefined"!=typeof window&&"function"==typeof window.addEventListener){var t=Object.defineProperty({},"passive",{get:function(){e=!0}}),n=function(){};window.addEventListener("testPassiveEventSupport",n,t),window.removeEventListener("testPassiveEventSupport",n,t)}return e}();function q(e){for(var o=e.className,i=!1,a=!0,t=arguments.length,n=Array(1<t?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var c=n.map(function(e){var t=(n=e,new RegExp("^"+n+"$|^"+n+"\\s|\\s"+n+"\\s|\\s"+n+"$",r)).test(o);var n,r;t?i=!0:a=!1;return{className:e,hasClass:t}});return!(!a&&!i)&&c}var F=/\s+/,H={transitionend:function(){for(var e=document.createElement("div").style,t={transition:"transitionend",OTransition:"oTransitionEnd otransitionend",MozTransition:"transitionend",WebkitTransition:"webkitTransitionEnd"},n=Object.keys(t),r=n.length,o=void 0,i=0;i<r;++i)if(void 0!==e[o=n[i]])return t[o];return""}()};function K(n,e,r,o){var t=4<arguments.length&&void 0!==arguments[4]?arguments[4]:{},i=t.capture,a=void 0!==i&&i,c=t.passive,s=void 0===c||c;if(H[e]&&(e=H[e]),!n||!e)return null;var l=void 0===r?"undefined":y(r),u=r&&"string"===l;if("function"===l){if(o){var p=o;a=p.capture,s=p.passive}o=r}for(var d=V?{capture:a,passive:s}:a,f=u?function(e){var t=e.target;for(;!q(t,r)&&t!==n;)t=t.parentNode;if(t!==n)return o(e,t)}:o,h=e.split(F),v=h.length,b=0;b<v;++b)n.addEventListener(h[b],f,d);return function e(){for(var t=0;t<v;++t)n.removeEventListener(h[t],f,d);!function(e,t){if(!e)return;for(var n=Object.keys(e),r=n.length,o=0;o<r;++o){var i=n[o];if(e[i]===t)return delete e[i]}}(this,e)}}function W(r){var o=1<arguments.length&&void 0!==arguments[1]?arguments[1]:0,e=2<arguments.length&&void 0!==arguments[2]?arguments[2]:{},t=e.leading,i=void 0!==t&&t,n=e.trailing,a=void 0===n||n,c=e.maxWait,s=void 0!==c&&c,l=void 0,u=void 0,p=void 0,d=void 0,f=!1,h=o!==s,v=!1!==s;function b(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return l=t,h&&(u&&clearTimeout(u),u=setTimeout(y,o)),v&&!p&&(p=setTimeout(_,s)),i&&!f&&(f=!0,d=r.apply(void 0,k(l))),d}return b.flush=function(){(u||p)&&(d=r.apply(void 0,k(l)));return g(),d},b.cancel=g,b;function y(){p&&clearTimeout(p),m()}function _(){u&&clearTimeout(u),m()}function m(){a&&(d=r.apply(void 0,k(l))),p=u=null,f=!1}function g(){u&&(clearTimeout(u),u=null),p&&(clearTimeout(p),p=null),l=void 0,f=!1}}window.__subscriptions=window.__subscriptions||{};var $=window.__subscriptions;function B(e,t){var n=K(2<arguments.length&&void 0!==arguments[2]?arguments[2]:document,e,t);$[e]||($[e]={count:0});var r,o=$[e];return o.count++,o.onsubscribe||(o.onsubscribe=W((r=e,function(){U(document,"pubsub/onsubscribe",r),U(document,"pubsub/onsubscribe/"+r,r),$[r]&&delete $[r].unsubscribe}),100)),o.onsubscribe(),function(){o.count--,n.call(this),o.count<=0&&delete $[e]}}K(document,"pubsub/onsubscribe",function(e){var t=e.detail;$[t]||($[t]={count:0});var n=$[t],r=n.queue;Array.isArray(r)&&(r.forEach(function(e){var t=s(e,3),n=t[0],r=t[1],o=t[2];U(o,n,r)}),delete n.queue)});var G,z=function(e,t){return e===t},J=((G=function(){var e;return(e=console).log.apply(e,arguments)},function(){var o=0<arguments.length&&void 0!==arguments[0]?arguments[0]:z;return function(){for(var e=arguments.length,r=Array(e),t=0;t<e;t++)r[t]=arguments[t];return function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(){return o.apply(void 0,[].concat(r,t))?G.apply(void 0,arguments):void 0}}}})()(!0),/[A-Z]/g);function Y(e){return e.replace(J,Z)}function Z(e,t,n){var r=e.toLowerCase(),o=n.charAt(t+1);return 0===t||o.toUpperCase()===o?r:"-"+r}var X=/^\s*(?:true|false|null|undefined|-?[0-9]+\.?[0-9]*|[[{](?:.|[\s])*[\]}])\s*$/;function Q(t,n,e){var r=t;if(e)return function(t,n,e){var r=t;switch(e){case m.string:case m.string.isRequired:return t;case m.bool:case m.bool.isRequired:if(!t||n===t)return!0;case m.number:case m.number.isRequired:case m.object:case m.object.isRequired:case m.array:case m.array.isRequired:default:if(X.test(t))try{r=JSON.parse(t)}catch(e){console.error("Attribute "+n+" has an error:\n"+e+"\n",t)}}return r}(t,n,e);if(t&&n!==t){if(X.test(t))try{r=JSON.parse(t)}catch(e){console.error("Attribute "+n+" has an error:\n"+e+"\n",t)}}else r=!0;return r}var ee=/(?:^\w|[A-Z]|\b\w|\s+|[-_]+)/g,te=/[-_]+/g;function ne(e){return e.replace(ee,re)}function re(e,t){return 0==+e||te.test(e)?"":0===t?e.toLowerCase():e.toUpperCase()}function oe(e,t,n){var r=1===e.nodeType,o=e.constructor.propTypes,i=n;!n&&r&&(i=(void 0===o?{}:o)[ne(t)]);if(r&&!e.hasAttribute(t))return i!==m.bool&&i!==m.bool.isRequired&&void 0;var a=e.value;return t?a=e.getAttribute(t):t=e.name,a=Q(a,t,i)}var ie=/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream;function ae(n,e,r){var t,o=3<arguments.length&&void 0!==arguments[3]?arguments[3]:{},i=o.capture,a=void 0===i||i,c=o.passive,s=void 0===c||c,l=n.ownerDocument.documentElement,u=K(l,e,function(e){var t=e.target;if(!n.contains(t)&&n!==t)return r(e)},{capture:a,passive:s});return t=l,ie&&(t.style.cursor="pointer"),u}var ce=function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];for(var r=t.length,o={},i=0;i<r;++i){var a=t[i];o[a.toUpperCase()]=a}return o}("click","change","keyup","enter","move","leave","Escape","Esc","touchstart","touchmove","touchend","input","resize"),se="axa-change",le="data-prevent-default";(function(){function r(e){var i=this,t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{};u(this,r),this._handleClick=function(e,t){i.shouldPreventDefault(t||e.currentTarget)&&e.preventDefault();var n=!i._lastToggleNode,r=t!==i._lastToggleNode,o=!n&&!r;n?(i._notify(ce.ENTER,t),i._onInteractive()):r&&i._notify(ce.MOVE,t,i._lastToggleNode),i._lastToggleNode=t,o&&i._options.sameClickClose&&i._close()},this._handleClose=function(e,t){i.shouldPreventDefault(t||e.currentTarget)&&e.preventDefault(),i._close()},this._handleKeyUp=function(e){(e.key===ce.ESCAPE||e.key===ce.ESC||27===e.keyCode)&&(e.preventDefault(),i._close())},this._init(e,t)}return o(r,[{key:"_init",value:function(e,t){e&&(this._wcNode=e),t&&(this._options=i({},r.DEFAULTS,t));var n=this._options.containerClass;this._container=n?this._wcNode.querySelector(n):this._wcNode,this._on()}},{key:"_on",value:function(){this._off(),this._unClick=K(this._container,ce.CLICK,this._options.toggleClass,this._handleClick,{passive:!this._options.preventDefault})}},{key:"_off",value:function(){this._unClick&&this._unClick(),this._offInteractive()}},{key:"_onInteractive",value:function(){this._offInteractive(),this._options.closeClass&&(this._unCloseClick=K(this._container,ce.CLICK,this._options.closeClass,this._handleClose,{passive:!this._options.preventDefault})),this._options.outerClose&&(this._unOuterClick=ae(this._container,ce.CLICK,this._handleClose,{passive:!this._options.preventDefault})),this._options.escapeClose&&(this._unCloseEscape=K(this._container.ownerDocument,ce.KEYUP,this._handleKeyUp,{passive:!1}))}},{key:"shouldPreventDefault",value:function(e){return e.hasAttribute(le)?oe(e,le):this._options.preventDefault}},{key:"_offInteractive",value:function(){this._unOuterClick&&this._unOuterClick(),this._unCloseClick&&this._unCloseClick(),this._unCloseEscape&&this._unCloseEscape(),this.deleteLastToggleNode()}},{key:"_close",value:function(){this._lastToggleNode&&(this._notify(ce.LEAVE,this._lastToggleNode),this._offInteractive(),this.deleteLastToggleNode())}},{key:"_notify",value:function(e,t,n){e in this&&"function"==typeof this[e]&&this[e](t,n)}},{key:"enter",value:function(e){throw new Error("UiEvent.enter method not overwritten")}},{key:"move",value:function(e,t){}},{key:"leave",value:function(e){throw new Error("UiEvent.leave method not overwritten")}},{key:"destroy",value:function(){this._off(),delete this._wcNode,delete this._options}},{key:"deleteLastToggleNode",value:function(){delete this._lastToggleNode}},{key:"lastToggleNode",get:function(){return this._lastToggleNode}}]),r}()).DEFAULTS={containerClass:".js-ui-container",toggleClass:"js-ui-toggle",closeClass:"js-ui-close",escapeClose:!0,outerClose:!0,sameClickClose:!0,preventDefault:!0};var ue=[];var pe=1,de=3,fe=8;function he(e,t){var n=e.nodeType,r=e.nodeName;n===pe&&function(e,t){for(var n=t.skipChildren&&t.skipChildren(),r=t.constructor.observedAttributes,o=r&&Array.isArray(r)&&r.length,i=function(e){return n&&o&&-1===r.indexOf(e)},a=t.attributes,c=e.attributes,s=null,l=null,u=null,p=null,d=c.length-1;0<=d;--d)if(p=c[d],u=p.name,s=p.namespaceURI,l=p.value,!i(u))if(s){var f=p.localName;t.getAttributeNS(s,f||u)!==l&&t.setAttributeNS(s,u,l)}else t.hasAttribute(u)?t.getAttribute(u)!==l&&("null"===l||"undefined"===l?t.removeAttribute(u):t.setAttribute(u,l)):t.setAttribute(u,l);for(var h=a.length-1;0<=h;--h)if(!1!==(p=a[h]).specified){if(u=p.name,s=p.namespaceURI,i(u))continue;s?(u=p.localName||u,e.hasAttributeNS(s,u)||t.removeAttributeNS(s,u)):e.hasAttributeNS(null,u)||t.removeAttribute(u)}}(e,t),n!==de&&n!==fe||t.nodeValue===e.nodeValue||(t.nodeValue=e.nodeValue),"INPUT"===r?function(e,t){var n=e.value,r=t.value;ve(e,t,"checked"),ve(e,t,"disabled"),n!==r&&(t.setAttribute("value",n),t.value=n);"null"===n&&(t.value="",t.removeAttribute("value"));e.hasAttributeNS(null,"value")?"range"===t.type&&(t.value=n):t.removeAttribute("value")}(e,t):"OPTION"===r?ve(e,t,"selected"):"TEXTAREA"===r&&function(e,t){var n=e.value;n!==t.value&&(t.value=n);if(t.firstChild&&t.firstChild.nodeValue!==n){if(""===n&&t.firstChild.nodeValue===t.placeholder)return;t.firstChild.nodeValue=n}}(e,t)}function ve(e,t,n){e[n]!==t[n]&&(t[n]=e[n],e[n]?t.setAttribute(n,""):t.removeAttribute(n))}var be=3;function ye(e,t){return t?e?e.isSameNode&&e.isSameNode(t)?t:e.tagName!==t.tagName?e:(he(e,t),t.skipChildren&&t.skipChildren()||function(e,t){for(var n=void 0,r=void 0,o=void 0,i=void 0,a=0,c=0;n=t.childNodes[c],r=e.childNodes[c-a],n||r;c++)if(r)if(n)if(_e(r,n))(o=ye(r,n))!==n&&(t.replaceChild(o,n),a++);else{i=null;for(var s=c;s<t.childNodes.length;s++)if(_e(t.childNodes[s],r)){i=t.childNodes[s];break}i?((o=ye(r,i))!==i&&a++,t.insertBefore(o,n)):r.id||n.id?(t.insertBefore(r,n),a++):(o=ye(r,n))!==n&&(t.replaceChild(o,n),a++)}else t.appendChild(r),a++;else t.removeChild(n),c--}(e,t),t):null:e}function _e(e,t){return e.id?e.id===t.id:e.isSameNode?e.isSameNode(t):e.tagName===t.tagName&&(e.type===be&&e.nodeValue===t.nodeValue)}var me=function(e){function c(e){var t;u(this,c);for(var n="\n    Web Component "+e.nodeName+"%c#"+e._id+" does not accept string as a return from a template. Maybe use bel?}",r=arguments.length,o=Array(1<r?r-1:0),i=1;i<r;i++)o[i-1]=arguments[i];var a=f(this,(t=c.__proto__||Object.getPrototypeOf(c)).call.apply(t,[this,n].concat(o)));return Error.captureStackTrace&&Error.captureStackTrace(a,c),a.name="TemplateNoStringReturnException",a}return d(c,e),c}(Error),ge=!!document.createDocumentFragment().children;function ke(){return Reflect.construct(HTMLElement,[],this.__proto__.constructor)}Object.setPrototypeOf(ke.prototype,HTMLElement.prototype),Object.setPrototypeOf(ke,HTMLElement);var xe=function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(e){return t.reduceRight(function(e,t){return t(e)},e)}}(function(t){return function(e){function a(){var e,t,n;u(this,a);for(var r=arguments.length,o=Array(r),i=0;i<r;i++)o[i]=arguments[i];return(t=n=f(this,(e=a.__proto__||Object.getPrototypeOf(a)).call.apply(e,[this].concat(o))))._makeContextReady=function(){var e=(0<arguments.length&&void 0!==arguments[0]?arguments[0]:{}).detail;n.contextNode&&(clearTimeout(n.timeoutId),n.timeoutId=setTimeout(function(){n.contextCallback(n.contextNode,e)},10)),n.unContextEnabled&&n.unContextEnabled(),n.unContextEnabled=B("context/available",n._makeContextReady)},f(n,t)}return d(a,t),o(a,[{key:"connectedCallback",value:function(){p(a.prototype.__proto__||Object.getPrototypeOf(a.prototype),"connectedCallback",this)&&p(a.prototype.__proto__||Object.getPrototypeOf(a.prototype),"connectedCallback",this).call(this),this.contextCallback&&this._makeContextReady()}},{key:"disconnectedCallback",value:function(){p(a.prototype.__proto__||Object.getPrototypeOf(a.prototype),"disconnectedCallback",this)&&p(a.prototype.__proto__||Object.getPrototypeOf(a.prototype),"disconnectedCallback",this).call(this),this.unContextEnabled&&this.unContextEnabled()}},{key:"provideContext",value:function(){var e=this.nodeName.toLowerCase();this.__isContext=!0,function(e,t){var n=2<arguments.length&&void 0!==arguments[2]?arguments[2]:document;$[e]||($[e]={count:0,queue:[]});var r=$[e].queue;Array.isArray(r)?r.push([e,t,n]):U(n,e,t)}("context/available",this.__contextName=e)}},{key:"consumeContext",value:function(e){this.__consumedContext=e&&e.toLowerCase()}},{key:"contextNode",get:function(){for(var e=this.__consumedContext,t=this.parentNode;t&&(!t.__isContext||e&&e!==t.__contextName);)t=t.parentNode;return!(!t||!t.__isContext)&&t}}]),a}()},function(t){return function(e){function n(){return u(this,n),f(this,(n.__proto__||Object.getPrototypeOf(n)).apply(this,arguments))}return d(n,t),o(n,[{key:"appendChild",value:function(e){!this._isMorphing&&this._hasTemplate&&this._hasRendered?(this._lightDOMRefs.push(e),this.render()):p(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"appendChild",this).call(this,e)}},{key:"innerText",set:function(e){if(this._hasTemplate&&this._hasRendered){var t=document.createTextNode(e);this._lightDOMRefs=[t],this.render()}else h(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"innerText",e,this)}},{key:"textContent",set:function(e){if(this._hasTemplate&&this._hasRendered){var t=document.createTextNode(e);this._lightDOMRefs=[t],this.render()}else h(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"textContent",e,this)}},{key:"innerHTML",set:function(e){if(this._hasTemplate&&this._hasRendered){var t=document.createElement("div");t.innerHTML=e,this._lightDOMRefs=Array.from(t.children),this.render()}else h(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"innerHTML",e,this)}}]),n}()},function(t){return function(e){function l(e){u(this,l);var s=f(this,(l.__proto__||Object.getPrototypeOf(l)).call(this,e));s._reduceProps=function(e,t){var n=e.props,r=e.shouldUpdate,o=s._hasKeys[t],i="_"+t,a=n[t],c=s[i];return r||s.shouldUpdateCallback(a,c)?(s.props[t]=a,o&&h(l.prototype.__proto__||Object.getPrototypeOf(l.prototype),t,a,s),{props:n,shouldUpdate:!0}):{props:n,shouldUpdate:!1}},s._isConnected=!1,s.props={},s.updatedDebounced=W(function(){return s.updated&&s.updated()},50);var t=s.constructor.observedAttributes;return Array.isArray(t)&&t.forEach(function(e){ne(e)}),s}return d(l,t),o(l,null,[{key:"observedAttributes",get:function(){var e=this.propTypes;return e&&Object.keys(e).map(Y)}}]),o(l,[{key:"connectedCallback",value:function(){var r=this;if(p(l.prototype.__proto__||Object.getPrototypeOf(l.prototype),"connectedCallback",this)&&p(l.prototype.__proto__||Object.getPrototypeOf(l.prototype),"connectedCallback",this).call(this),!this._isConnected){this._isConnected=!0;var e=this.constructor.observedAttributes;if(this.initialClassName=this.className,Array.isArray(e)){var o=this.constructor.propTypes;e.forEach(function(e){var t=ne(e);if(r.hasAttribute(e)){var n=oe(r,e,o[t]);r.props[t]=n}}),this.checkPropTypes()}}this.updated&&this.updated()}},{key:"attributeChangedCallback",value:function(e,t,n){if(this.shouldUpdateCallback(n,t)){var r=ne(e);if(this.hasAttribute(e)){var o=this.constructor.propTypes;this.props[r]=Q(n,e,o[r])}else this.props[r]=null;this.checkPropTypes(),"value"===e&&null!==n&&U(this,se,n,{bubbles:!0,cancelable:!0,composed:!0}),this.updatedDebounced()}}},{key:"setProps",value:function(e){var t=this.constructor.observedAttributes,n=void 0===t?[]:t,r=Object.keys(e).filter(function(e){return-1<n.indexOf(Y(e))}).reduce(this._reduceProps,{props:e,shouldUpdate:!1}).shouldUpdate;this.checkPropTypes(),r&&this._isConnected&&this.updated&&this.updated()}},{key:"checkPropTypes",value:function(){var e=this.constructor,t=e.propTypes,n=e.tagName;t&&m.checkPropTypes(t,this.props,"prop",n)}},{key:"shouldUpdateCallback",value:function(e,t){return e!==t}},{key:"disconnectedCallback",value:function(){this._isConnected=!1}}]),l}()},function(t){return function(e){function s(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{},t=e.template,n=a(e,["template"]);u(this,s);var r=f(this,(s.__proto__||Object.getPrototypeOf(s)).call(this,n));return r._template=t,r._hasTemplate=!!t,r._hasRendered=!1,r.updated=r.render,r}return d(s,t),o(s,[{key:"render",value:function(){var n=this,e=!this._hasRendered;if(this.willRenderCallback(e),this._hasTemplate){var t=this._template;try{if(e){for(var r=document.createDocumentFragment(),o=[];this.firstChild;)o.push(this.firstChild),r.appendChild(this.firstChild);this._lightDOMRefs=o,this.childrenFragment=r}else this._lightDOMRefs.forEach(function(e){var t=e.cloneNode(!0);n.childrenFragment.appendChild(t)});ge||(this.childrenFragment.children=Array.from(this.childrenFragment.childNodes).filter(function(e){return 1===e.nodeType}));var i=t(this.props,this.childrenFragment,this),a=document.createDocumentFragment();if(Array.isArray(i))i.forEach(function(e){a.appendChild(e)});else if(i){if("string"==typeof i)throw new me(this);a.appendChild(i)}if(e)p(s.prototype.__proto__||Object.getPrototypeOf(s.prototype),"appendChild",this).call(this,a);else{var c=this.cloneNode(!1);c._isMorphing=!0,c.appendChild(a),this._isMorphing=!0,function(e,t){if("object"!==(void 0===e?"undefined":y(e)))throw new Error("componentMorph: oldTree should be an object");if("object"!==(void 0===t?"undefined":y(t)))throw new Error("componentMorph: newTree should be an object");ye(t,e)}(this,c),function(){for(var e=void 0;e=ue.pop();)delete e.isSameNode;ue=[]}(),this._isMorphing=!1}}catch(e){console.error(e)}}this._hasRendered=!0,this.didRenderCallback(e)}},{key:"skipChildren",value:function(){return!this._isMorphing}},{key:"willRenderCallback",value:function(e){}},{key:"didRenderCallback",value:function(e){}}]),s}()},function(t){return function(e){function i(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{},t=e.styles,n=void 0===t?"":t,r=a(e,["styles"]);u(this,i);var o=f(this,(i.__proto__||Object.getPrototypeOf(i)).call(this,r));return o._styles=n,o}return d(i,t),o(i,[{key:"connectedCallback",value:function(){p(i.prototype.__proto__||Object.getPrototypeOf(i.prototype),"connectedCallback",this)&&p(i.prototype.__proto__||Object.getPrototypeOf(i.prototype),"connectedCallback",this).call(this),this._appendStyles()}},{key:"_appendStyles",value:function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:this;if(this._styles){var t=document.createElement("style"),n=document.createTextNode(this._styles);t.appendChild(n),e.insertAdjacentElement?e.insertAdjacentElement("afterbegin",t):e.appendChild(t)}}}]),i}()})(function(e){function n(e){u(this,n);var t=f(this,(n.__proto__||Object.getPrototypeOf(n)).call(this,e));return t._id=M(t.nodeName),t}return d(n,ke),o(n,null,[{key:"uuidv4",value:function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(e){var t=16*Math.random()|0;return("x"==e?t:3&t|8).toString(16)})}}]),n}()),Oe={},Ce=function(e){function a(){var e,t,n;u(this,a);for(var r=arguments.length,o=Array(r),i=0;i<r;i++)o[i]=arguments[i];return(t=n=f(this,(e=a.__proto__||Object.getPrototypeOf(a)).call.apply(e,[this].concat(o))))._appendStyles=function(){a.appendGlobalStyles(n._styles,n.nodeName)},f(n,t)}return d(a,xe),o(a,null,[{key:"appendGlobalStyles",value:function(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:xe.uuidv4();if(e&&!Oe[t]){var n=document.createElement("style"),r=document.createTextNode(e);Oe[t]=!0,n.appendChild(r),n.setAttribute("data-c-name",t.toLowerCase()),document.head.appendChild(n)}}}]),a}();var we='.a-checkbox:hover:not(.a-checkbox--disabled):not(.a-checkbox--error) {\n  color: #00008f; }\n  .a-checkbox:hover:not(.a-checkbox--disabled):not(.a-checkbox--error) .a-checkbox__icon {\n    border-color: #00008f; }\n    .a-checkbox:hover:not(.a-checkbox--disabled):not(.a-checkbox--error) .a-checkbox__icon::after {\n      border-color: #00008f; }\n\n.a-checkbox .a-checkbox__wrapper {\n  position: relative;\n  display: -webkit-inline-box;\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n  min-height: 20px;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  line-height: 1.5; }\n\n.a-checkbox .a-checkbox__input {\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  clip: rect(0, 0, 0, 0);\n  margin: -1px;\n  overflow: hidden; }\n  .a-checkbox .a-checkbox__input:focus + .a-checkbox__icon {\n    border-color: #00008f; }\n    .a-checkbox .a-checkbox__input:focus + .a-checkbox__icon::after {\n      border-color: #00008f; }\n  .a-checkbox .a-checkbox__input:checked + .a-checkbox__icon::after {\n    border-color: #00008f;\n    background-color: #00008f; }\n  .a-checkbox .a-checkbox__input:disabled + .a-checkbox__icon {\n    cursor: default;\n    border-color: #999; }\n    .a-checkbox .a-checkbox__input:disabled + .a-checkbox__icon::after {\n      border-color: transparent; }\n\n.a-checkbox .a-checkbox__icon {\n  -webkit-transition: all 0.2s ease;\n  transition: all 0.2s ease;\n  width: 18px;\n  height: 18px;\n  display: -webkit-inline-box;\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n  margin-right: 20px;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  background: #fff;\n  border: 1px solid #999;\n  cursor: pointer;\n  border-radius: 0; }\n  .a-checkbox .a-checkbox__icon::after {\n    width: 8px;\n    height: 8px;\n    border: 1px solid transparent;\n    content: ""; }\n  .a-checkbox .a-checkbox__icon::after {\n    border-radius: 0; }\n\n.a-checkbox--error {\n  color: #c91432; }\n  .a-checkbox--error .a-checkbox__icon {\n    border-color: #c91432; }\n\n.a-checkbox--disabled {\n  color: #999; }\n',Te=/\n[\s]+$/,Ae=/^\n[\s]+/,Ne=/[\s]+$/,Ee=/^[\s]+/,je=/[\n\s]+/g,Pe=["a","abbr","b","bdi","bdo","br","cite","data","dfn","em","i","kbd","mark","q","rp","rt","rtc","ruby","s","amp","small","span","strong","sub","sup","time","u","var","wbr"],Se=["code","pre","textarea"],Re=function e(t,n){if(Array.isArray(n))for(var r,o,i=t.nodeName.toLowerCase(),a=!1,c=0,s=n.length;c<s;c++){var l=n[c];if(Array.isArray(l))e(t,l);else{("number"==typeof l||"boolean"==typeof l||"function"==typeof l||l instanceof Date||l instanceof RegExp)&&(l=l.toString());var u=t.childNodes[t.childNodes.length-1];if("string"==typeof l)a=!0,u&&"#text"===u.nodeName?u.nodeValue+=l:(l=document.createTextNode(l),t.appendChild(l),u=l),c===s-1&&(a=!1,-1===Pe.indexOf(i)&&-1===Se.indexOf(i)?""===(r=u.nodeValue.replace(Ae,"").replace(Ne,"").replace(Te,"").replace(je," "))?t.removeChild(u):u.nodeValue=r:-1===Se.indexOf(i)&&(o=0===c?"":" ",r=u.nodeValue.replace(Ae,o).replace(Ee," ").replace(Ne,"").replace(Te,"").replace(je," "),u.nodeValue=r));else if(l&&l.nodeType){a&&(a=!1,-1===Pe.indexOf(i)&&-1===Se.indexOf(i)?""===(r=u.nodeValue.replace(Ae,"").replace(Te,"").replace(je," "))?t.removeChild(u):u.nodeValue=r:-1===Se.indexOf(i)&&(r=u.nodeValue.replace(Ee," ").replace(Ae,"").replace(Te,"").replace(je," "),u.nodeValue=r));var p=l.nodeName;p&&(i=p.toLowerCase()),t.appendChild(l)}}}};function De(e,t){var n,r,o,i=e.inputId,a=void 0===i?xe.uuidv4():i,c=e.value,s=e.name,l=e.checked,u=void 0!==l&&l,p=e.disabled,d=void 0!==p&&p;return(o=document.createElement("label")).setAttribute("class","a-checkbox__wrapper"),Re(o,["\n    ",(n=document.createElement("input"),n.setAttribute("id",""+String(a)),n.setAttribute("type","checkbox"),n.setAttribute("name",""+String(s)),u&&n.setAttribute("checked","checked"),n.setAttribute("value",""+String(c)),d&&n.setAttribute("disabled","disabled"),n.setAttribute("class","a-checkbox__input"),n),"\n    ",(r=document.createElement("span"),r.setAttribute("class","a-checkbox__icon"),r),t,"\n  "]),o}var Le,Me,Ie=function(e){function t(){return u(this,t),f(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,{styles:we,template:De}))}return d(t,Ce),o(t,[{key:"willRenderCallback",value:function(){var e=this.error,t=this.checked,n=this.disabled;this.className=D(this.initialClassName,"a-checkbox",{"a-checkbox--error":e,"a-checkbox--checked":t,"a-checkbox--disabled":n})}}]),t}();return Ie.tagName="axa-checkbox",Ie.propTypes={inputId:m.string,error:m.bool,value:m.string,name:m.string,checked:m.bool,disabled:m.bool},Le=Ie.tagName,Me=Ie,customElements.get(Le)||customElements.define(Le,Me),Ie}();
