!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):e.StyleGuideWebComponent=t()}(this,function(){"use strict";function e(e,t){return e(t={exports:{}},t.exports),t.exports}var t=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable;(function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map(function(e){return t[e]}).join(""))return!1;var o={};return"abcdefghijklmnopqrst".split("").forEach(function(e){o[e]=e}),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},o)).join("")}catch(e){return!1}})()&&Object.assign;var s="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},u=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},r=function(){function o(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(e,t,n){return t&&o(e.prototype,t),n&&o(e,n),e}}(),i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},p=function e(t,n,o){null===t&&(t=Function.prototype);var r=Object.getOwnPropertyDescriptor(t,n);if(void 0===r){var i=Object.getPrototypeOf(t);return null===i?void 0:e(i,n,o)}if("value"in r)return r.value;var a=r.get;return void 0!==a?a.call(o):void 0},f=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)},a=function(e,t){var n={};for(var o in e)0<=t.indexOf(o)||Object.prototype.hasOwnProperty.call(e,o)&&(n[o]=e[o]);return n},d=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},h=function e(t,n,o,r){var i=Object.getOwnPropertyDescriptor(t,n);if(void 0===i){var a=Object.getPrototypeOf(t);null!==a&&e(a,n,o,r)}else if("value"in i&&i.writable)i.value=o;else{var s=i.set;void 0!==s&&s.call(r,o)}return o},l=function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var n=[],o=!0,r=!1,i=void 0;try{for(var a,s=e[Symbol.iterator]();!(o=(a=s.next()).done)&&(n.push(a.value),!t||n.length!==t);o=!0);}catch(e){r=!0,i=e}finally{try{!o&&s.return&&s.return()}finally{if(r)throw i}}return n}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")},x=function(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)};function c(){}var v=e(function(e){e.exports=function(){function e(e,t,n,o,r,i){if(i!==s){var a=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw a.name="Invariant Violation",a}}function t(){return e}var n={array:e.isRequired=e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t};return n.checkPropTypes=c,n.PropTypes=n}()}),y=0;function _(e,t){var n=e[t];return"function"==typeof n&&(e[t]=function(t){function n(){return t.apply(void 0,arguments)}return 0===y&&(y++,Object.keys(t).map(function(e){return n[e]=t[e],e}).reduce(_,n),y--),n}(n)),e}var b=v;Object.keys(b).reduce(_,b);var g=b.oneOf(["left","center","right"]),O=b.oneOfType([b.string,b.number]),C=b.oneOfType([b.arrayOf(P),b.shape({cells:b.arrayOf(P)})]),k=b.oneOfType([b.arrayOf(S),b.shape({cells:b.arrayOf(S),action:b.bool})]),w=b.oneOfType([b.arrayOf(R),b.shape({cells:b.arrayOf(R)})]),T=(b.oneOf(["row","col","rowgroup","colgroup","auto"]),b.oneOfType([b.arrayOf(P),b.arrayOf(C)]),b.oneOfType([b.arrayOf(S),b.arrayOf(k)]),b.oneOfType([b.arrayOf(R),b.arrayOf(w)]),b.oneOf(["up","down"])),A=b.oneOf(["left","right"]),E=b.oneOf(["ok","pending","error","unknown"]),N={text:O,value:b.any,rowspan:b.number,colspan:b.number,scope:null,align:g,dense:b.bool},j=b.oneOfType([b.string,b.number,b.shape(N)]),P=b.oneOfType([j,b.shape(i({},N,{sort:T,sortActive:b.bool}))]),S=b.oneOfType([j,b.shape(i({},N,{float:A,action:b.bool,strong:b.bool,bold:b.bool,state:E}))]),R=b.oneOfType([j,b.shape(i({},N,{float:A}))]);function D(o){function e(e,t,n){return null==e[t]?null:o(e,t,n)}return e.isRequired=o,e}var L=/^[a-z]{2,4}(-([A-Z][a-z]{3}|[0-9]{3}))?(-([A-Z]{2}|[0-9]{3}))?$/;D(function(e,t,n){if(!L.test(e[t]))return new Error("Invalid prop `"+t+"` supplied to `"+n+"`, expected a valid locale.")});b.oneOf(["top","bottom"]);var U=D(function(e,t,n){try{new window.URL(e[t],function(){if(document.baseURI)return document.baseURI;var e=document.getElementsByName("base");return e.length&&e[0].href?e[0].href:window.location.href}())}catch(e){return new Error("Invalid prop `"+t+"` supplied to `"+n+"`, expected a valid URL. "+e.message)}return null}),I=e(function(e){!function(){var i={}.hasOwnProperty;function a(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var o=void 0===n?"undefined":m(n);if("string"===o||"number"===o)e.push(n);else if(Array.isArray(n))e.push(a.apply(null,n));else if("object"===o)for(var r in n)i.call(n,r)&&n[r]&&e.push(r)}}return e.join(" ")}e.exports?e.exports=a:window.classNames=a}()}),M={},V=function(e){return e in M||(M[e]=0),++M[e]},q=function(){try{var e=new window.CustomEvent("test",{cancelable:!0});if(e.preventDefault(),!0!==e.defaultPrevented)throw new Error("Could not prevent default");return window.CustomEvent}catch(e){}return t;function t(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{},n=t.bubbles,o=void 0!==n&&n,r=t.cancelable,i=void 0!==r&&r,a=t.detail,s=void 0===a?void 0:a,l=document.createEvent("CustomEvent");l.initCustomEvent(e,o,i,s);var c=l.preventDefault;return l.preventDefault=function(){c.call(l);try{Object.defineProperty(this,"defaultPrevented",{get:function(){return!0}})}catch(e){this.defaultPrevented=!0}},l}}();function F(e,t,n){var o=3<arguments.length&&void 0!==arguments[3]?arguments[3]:{},r=new q(t,i({},o,{detail:n}));return e.dispatchEvent(r)}var z=function(){var e=!1;if("undefined"!=typeof window&&"function"==typeof window.addEventListener){var t=Object.defineProperty({},"passive",{get:function(){e=!0}}),n=function(){};window.addEventListener("testPassiveEventSupport",n,t),window.removeEventListener("testPassiveEventSupport",n,t)}return e}();function H(e){for(var r=e.className,i=!1,a=!0,t=arguments.length,n=Array(1<t?t-1:0),o=1;o<t;o++)n[o-1]=arguments[o];var s=n.map(function(e){var t=(n=e,new RegExp("^"+n+"$|^"+n+"\\s|\\s"+n+"\\s|\\s"+n+"$",o)).test(r);var n,o;t?i=!0:a=!1;return{className:e,hasClass:t}});return!(!a&&!i)&&s}var K=/\s+/,$={transitionend:function(){for(var e=document.createElement("div").style,t={transition:"transitionend",OTransition:"oTransitionEnd otransitionend",MozTransition:"transitionend",WebkitTransition:"webkitTransitionEnd"},n=Object.keys(t),o=n.length,r=void 0,i=0;i<o;++i)if(void 0!==e[r=n[i]])return t[r];return""}()};function B(n,e,o,r){var t=4<arguments.length&&void 0!==arguments[4]?arguments[4]:{},i=t.capture,a=void 0!==i&&i,s=t.passive,l=void 0===s||s;if($[e]&&(e=$[e]),!n||!e)return null;var c=void 0===o?"undefined":m(o),u=o&&"string"===c;if("function"===c){if(r){var p=r;a=p.capture,l=p.passive}r=o}for(var f=z?{capture:a,passive:l}:a,d=u?function(e){var t=e.target;for(;!H(t,o)&&t!==n;)t=t.parentNode;if(t!==n)return r(e,t)}:r,h=e.split(K),v=h.length,y=0;y<v;++y)n.addEventListener(h[y],d,f);return function e(){for(var t=0;t<v;++t)n.removeEventListener(h[t],d,f);!function(e,t){if(!e)return;for(var n=Object.keys(e),o=n.length,r=0;r<o;++r){var i=n[r];if(e[i]===t)return delete e[i]}}(this,e)}}function W(o){var r=1<arguments.length&&void 0!==arguments[1]?arguments[1]:0,e=2<arguments.length&&void 0!==arguments[2]?arguments[2]:{},t=e.leading,i=void 0!==t&&t,n=e.trailing,a=void 0===n||n,s=e.maxWait,l=void 0!==s&&s,c=void 0,u=void 0,p=void 0,f=void 0,d=!1,h=r!==l,v=!1!==l;function y(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return c=t,h&&(u&&clearTimeout(u),u=setTimeout(m,r)),v&&!p&&(p=setTimeout(_,l)),i&&!d&&(d=!0,f=o.apply(void 0,x(c))),f}return y.flush=function(){(u||p)&&(f=o.apply(void 0,x(c)));return g(),f},y.cancel=g,y;function m(){p&&clearTimeout(p),b()}function _(){u&&clearTimeout(u),b()}function b(){a&&(f=o.apply(void 0,x(c))),p=u=null,d=!1}function g(){u&&(clearTimeout(u),u=null),p&&(clearTimeout(p),p=null),c=void 0,d=!1}}window.__subscriptions=window.__subscriptions||{};var Z=window.__subscriptions;function G(e,t){var n=B(2<arguments.length&&void 0!==arguments[2]?arguments[2]:document,e,t);Z[e]||(Z[e]={count:0});var o,r=Z[e];return r.count++,r.onsubscribe||(r.onsubscribe=W((o=e,function(){F(document,"pubsub/onsubscribe",o),F(document,"pubsub/onsubscribe/"+o,o),Z[o]&&delete Z[o].unsubscribe}),100)),r.onsubscribe(),function(){r.count--,n.call(this),r.count<=0&&delete Z[e]}}B(document,"pubsub/onsubscribe",function(e){var t=e.detail;Z[t]||(Z[t]={count:0});var n=Z[t],o=n.queue;Array.isArray(o)&&(o.forEach(function(e){var t=l(e,3),n=t[0],o=t[1],r=t[2];F(r,n,o)}),delete n.queue)});var J,Y=function(e,t){return e===t},X=((J=function(){var e;return(e=console).log.apply(e,arguments)},function(){var r=0<arguments.length&&void 0!==arguments[0]?arguments[0]:Y;return function(){for(var e=arguments.length,o=Array(e),t=0;t<e;t++)o[t]=arguments[t];return function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(){return r.apply(void 0,[].concat(o,t))?J.apply(void 0,arguments):void 0}}}})()(!0),/[A-Z]/g);function Q(e){return e.replace(X,ee)}function ee(e,t,n){var o=e.toLowerCase(),r=n.charAt(t+1);return 0===t||r.toUpperCase()===r?o:"-"+o}var te=/^\s*(?:true|false|null|undefined|-?[0-9]+\.?[0-9]*|[[{](?:.|[\s])*[\]}])\s*$/;function ne(t,n,e){var o=t;if(e)return function(t,n,e){var o=t;switch(e){case b.string:case b.string.isRequired:return t;case b.bool:case b.bool.isRequired:if(!t||n===t)return!0;case b.number:case b.number.isRequired:case b.object:case b.object.isRequired:case b.array:case b.array.isRequired:default:if(te.test(t))try{o=JSON.parse(t)}catch(e){console.error("Attribute "+n+" has an error:\n"+e+"\n",t)}}return o}(t,n,e);if(t&&n!==t){if(te.test(t))try{o=JSON.parse(t)}catch(e){console.error("Attribute "+n+" has an error:\n"+e+"\n",t)}}else o=!0;return o}var oe=/(?:^\w|[A-Z]|\b\w|\s+|[-_]+)/g,re=/[-_]+/g;function ie(e){return e.replace(oe,ae)}function ae(e,t){return 0==+e||re.test(e)?"":0===t?e.toLowerCase():e.toUpperCase()}function se(e,t,n){var o=1===e.nodeType,r=e.constructor.propTypes,i=n;!n&&o&&(i=(void 0===r?{}:r)[ie(t)]);if(o&&!e.hasAttribute(t))return i!==b.bool&&i!==b.bool.isRequired&&void 0;var a=e.value;return t?a=e.getAttribute(t):t=e.name,a=ne(a,t,i)}var le=/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream;function ce(n,e,o){var t,r=3<arguments.length&&void 0!==arguments[3]?arguments[3]:{},i=r.capture,a=void 0===i||i,s=r.passive,l=void 0===s||s,c=n.ownerDocument.documentElement,u=B(c,e,function(e){var t=e.target;if(!n.contains(t)&&n!==t)return o(e)},{capture:a,passive:l});return t=c,le&&(t.style.cursor="pointer"),u}var ue=function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];for(var o=t.length,r={},i=0;i<o;++i){var a=t[i];r[a.toUpperCase()]=a}return r}("click","change","keyup","enter","move","leave","Escape","Esc","touchstart","touchmove","touchend","input","resize"),pe="axa-change",fe="data-prevent-default";(function(){function o(e){var i=this,t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{};u(this,o),this._handleClick=function(e,t){i.shouldPreventDefault(t||e.currentTarget)&&e.preventDefault();var n=!i._lastToggleNode,o=t!==i._lastToggleNode,r=!n&&!o;n?(i._notify(ue.ENTER,t),i._onInteractive()):o&&i._notify(ue.MOVE,t,i._lastToggleNode),i._lastToggleNode=t,r&&i._options.sameClickClose&&i._close()},this._handleClose=function(e,t){i.shouldPreventDefault(t||e.currentTarget)&&e.preventDefault(),i._close()},this._handleKeyUp=function(e){(e.key===ue.ESCAPE||e.key===ue.ESC||27===e.keyCode)&&(e.preventDefault(),i._close())},this._init(e,t)}return r(o,[{key:"_init",value:function(e,t){e&&(this._wcNode=e),t&&(this._options=i({},o.DEFAULTS,t));var n=this._options.containerClass;this._container=n?this._wcNode.querySelector(n):this._wcNode,this._on()}},{key:"_on",value:function(){this._off(),this._unClick=B(this._container,ue.CLICK,this._options.toggleClass,this._handleClick,{passive:!this._options.preventDefault})}},{key:"_off",value:function(){this._unClick&&this._unClick(),this._offInteractive()}},{key:"_onInteractive",value:function(){this._offInteractive(),this._options.closeClass&&(this._unCloseClick=B(this._container,ue.CLICK,this._options.closeClass,this._handleClose,{passive:!this._options.preventDefault})),this._options.outerClose&&(this._unOuterClick=ce(this._container,ue.CLICK,this._handleClose,{passive:!this._options.preventDefault})),this._options.escapeClose&&(this._unCloseEscape=B(this._container.ownerDocument,ue.KEYUP,this._handleKeyUp,{passive:!1}))}},{key:"shouldPreventDefault",value:function(e){return e.hasAttribute(fe)?se(e,fe):this._options.preventDefault}},{key:"_offInteractive",value:function(){this._unOuterClick&&this._unOuterClick(),this._unCloseClick&&this._unCloseClick(),this._unCloseEscape&&this._unCloseEscape(),this.deleteLastToggleNode()}},{key:"_close",value:function(){this._lastToggleNode&&(this._notify(ue.LEAVE,this._lastToggleNode),this._offInteractive(),this.deleteLastToggleNode())}},{key:"_notify",value:function(e,t,n){e in this&&"function"==typeof this[e]&&this[e](t,n)}},{key:"enter",value:function(e){throw new Error("UiEvent.enter method not overwritten")}},{key:"move",value:function(e,t){}},{key:"leave",value:function(e){throw new Error("UiEvent.leave method not overwritten")}},{key:"destroy",value:function(){this._off(),delete this._wcNode,delete this._options}},{key:"deleteLastToggleNode",value:function(){delete this._lastToggleNode}},{key:"lastToggleNode",get:function(){return this._lastToggleNode}}]),o}()).DEFAULTS={containerClass:".js-ui-container",toggleClass:"js-ui-toggle",closeClass:"js-ui-close",escapeClose:!0,outerClose:!0,sameClickClose:!0,preventDefault:!0};var de=[];var he=1,ve=3,ye=8;function me(e,t){var n=e.nodeType,o=e.nodeName;n===he&&function(e,t){for(var n=t.skipChildren&&t.skipChildren(),o=t.constructor.observedAttributes,r=o&&Array.isArray(o)&&o.length,i=function(e){return n&&r&&-1===o.indexOf(e)},a=t.attributes,s=e.attributes,l=null,c=null,u=null,p=null,f=s.length-1;0<=f;--f)if(p=s[f],u=p.name,l=p.namespaceURI,c=p.value,!i(u))if(l){var d=p.localName;t.getAttributeNS(l,d||u)!==c&&t.setAttributeNS(l,u,c)}else t.hasAttribute(u)?t.getAttribute(u)!==c&&("null"===c||"undefined"===c?t.removeAttribute(u):t.setAttribute(u,c)):t.setAttribute(u,c);for(var h=a.length-1;0<=h;--h)if(!1!==(p=a[h]).specified){if(u=p.name,l=p.namespaceURI,i(u))continue;l?(u=p.localName||u,e.hasAttributeNS(l,u)||t.removeAttributeNS(l,u)):e.hasAttributeNS(null,u)||t.removeAttribute(u)}}(e,t),n!==ve&&n!==ye||t.nodeValue===e.nodeValue||(t.nodeValue=e.nodeValue),"INPUT"===o?function(e,t){var n=e.value,o=t.value;_e(e,t,"checked"),_e(e,t,"disabled"),n!==o&&(t.setAttribute("value",n),t.value=n);"null"===n&&(t.value="",t.removeAttribute("value"));e.hasAttributeNS(null,"value")?"range"===t.type&&(t.value=n):t.removeAttribute("value")}(e,t):"OPTION"===o?_e(e,t,"selected"):"TEXTAREA"===o&&function(e,t){var n=e.value;n!==t.value&&(t.value=n);if(t.firstChild&&t.firstChild.nodeValue!==n){if(""===n&&t.firstChild.nodeValue===t.placeholder)return;t.firstChild.nodeValue=n}}(e,t)}function _e(e,t,n){e[n]!==t[n]&&(t[n]=e[n],e[n]?t.setAttribute(n,""):t.removeAttribute(n))}var be=3;function ge(e,t){return t?e?e.isSameNode&&e.isSameNode(t)?t:e.tagName!==t.tagName?e:(me(e,t),t.skipChildren&&t.skipChildren()||function(e,t){for(var n=void 0,o=void 0,r=void 0,i=void 0,a=0,s=0;n=t.childNodes[s],o=e.childNodes[s-a],n||o;s++)if(o)if(n)if(xe(o,n))(r=ge(o,n))!==n&&(t.replaceChild(r,n),a++);else{i=null;for(var l=s;l<t.childNodes.length;l++)if(xe(t.childNodes[l],o)){i=t.childNodes[l];break}i?((r=ge(o,i))!==i&&a++,t.insertBefore(r,n)):o.id||n.id?(t.insertBefore(o,n),a++):(r=ge(o,n))!==n&&(t.replaceChild(r,n),a++)}else t.appendChild(o),a++;else t.removeChild(n),s--}(e,t),t):null:e}function xe(e,t){return e.id?e.id===t.id:e.isSameNode?e.isSameNode(t):e.tagName===t.tagName&&(e.type===be&&e.nodeValue===t.nodeValue)}var Oe=function(e){function s(e){var t;u(this,s);for(var n="\n    Web Component "+e.nodeName+"%c#"+e._id+" does not accept string as a return from a template. Maybe use bel?}",o=arguments.length,r=Array(1<o?o-1:0),i=1;i<o;i++)r[i-1]=arguments[i];var a=d(this,(t=s.__proto__||Object.getPrototypeOf(s)).call.apply(t,[this,n].concat(r)));return Error.captureStackTrace&&Error.captureStackTrace(a,s),a.name="TemplateNoStringReturnException",a}return f(s,e),s}(Error),Ce=!!document.createDocumentFragment().children;function ke(){return Reflect.construct(HTMLElement,[],this.__proto__.constructor)}Object.setPrototypeOf(ke.prototype,HTMLElement.prototype),Object.setPrototypeOf(ke,HTMLElement);var we=function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(e){return t.reduceRight(function(e,t){return t(e)},e)}}(function(t){return function(e){function a(){var e,t,n;u(this,a);for(var o=arguments.length,r=Array(o),i=0;i<o;i++)r[i]=arguments[i];return(t=n=d(this,(e=a.__proto__||Object.getPrototypeOf(a)).call.apply(e,[this].concat(r))))._makeContextReady=function(){var e=(0<arguments.length&&void 0!==arguments[0]?arguments[0]:{}).detail;n.contextNode&&(clearTimeout(n.timeoutId),n.timeoutId=setTimeout(function(){n.contextCallback(n.contextNode,e)},10)),n.unContextEnabled&&n.unContextEnabled(),n.unContextEnabled=G("context/available",n._makeContextReady)},d(n,t)}return f(a,t),r(a,[{key:"connectedCallback",value:function(){p(a.prototype.__proto__||Object.getPrototypeOf(a.prototype),"connectedCallback",this)&&p(a.prototype.__proto__||Object.getPrototypeOf(a.prototype),"connectedCallback",this).call(this),this.contextCallback&&this._makeContextReady()}},{key:"disconnectedCallback",value:function(){p(a.prototype.__proto__||Object.getPrototypeOf(a.prototype),"disconnectedCallback",this)&&p(a.prototype.__proto__||Object.getPrototypeOf(a.prototype),"disconnectedCallback",this).call(this),this.unContextEnabled&&this.unContextEnabled()}},{key:"provideContext",value:function(){var e=this.nodeName.toLowerCase();this.__isContext=!0,function(e,t){var n=2<arguments.length&&void 0!==arguments[2]?arguments[2]:document;Z[e]||(Z[e]={count:0,queue:[]});var o=Z[e].queue;Array.isArray(o)?o.push([e,t,n]):F(n,e,t)}("context/available",this.__contextName=e)}},{key:"consumeContext",value:function(e){this.__consumedContext=e&&e.toLowerCase()}},{key:"contextNode",get:function(){for(var e=this.__consumedContext,t=this.parentNode;t&&(!t.__isContext||e&&e!==t.__contextName);)t=t.parentNode;return!(!t||!t.__isContext)&&t}}]),a}()},function(t){return function(e){function n(){return u(this,n),d(this,(n.__proto__||Object.getPrototypeOf(n)).apply(this,arguments))}return f(n,t),r(n,[{key:"appendChild",value:function(e){!this._isMorphing&&this._hasTemplate&&this._hasRendered?(this._lightDOMRefs.push(e),this.render()):p(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"appendChild",this).call(this,e)}},{key:"innerText",set:function(e){if(this._hasTemplate&&this._hasRendered){var t=document.createTextNode(e);this._lightDOMRefs=[t],this.render()}else h(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"innerText",e,this)}},{key:"textContent",set:function(e){if(this._hasTemplate&&this._hasRendered){var t=document.createTextNode(e);this._lightDOMRefs=[t],this.render()}else h(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"textContent",e,this)}},{key:"innerHTML",set:function(e){if(this._hasTemplate&&this._hasRendered){var t=document.createElement("div");t.innerHTML=e,this._lightDOMRefs=Array.from(t.children),this.render()}else h(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"innerHTML",e,this)}}]),n}()},function(t){return function(e){function c(e){u(this,c);var l=d(this,(c.__proto__||Object.getPrototypeOf(c)).call(this,e));l._reduceProps=function(e,t){var n=e.props,o=e.shouldUpdate,r=l._hasKeys[t],i="_"+t,a=n[t],s=l[i];return o||l.shouldUpdateCallback(a,s)?(l.props[t]=a,r&&h(c.prototype.__proto__||Object.getPrototypeOf(c.prototype),t,a,l),{props:n,shouldUpdate:!0}):{props:n,shouldUpdate:!1}},l._isConnected=!1,l.props={},l.updatedDebounced=W(function(){return l.updated&&l.updated()},50);var t=l.constructor.observedAttributes;return Array.isArray(t)&&t.forEach(function(e){ie(e)}),l}return f(c,t),r(c,null,[{key:"observedAttributes",get:function(){var e=this.propTypes;return e&&Object.keys(e).map(Q)}}]),r(c,[{key:"connectedCallback",value:function(){var o=this;if(p(c.prototype.__proto__||Object.getPrototypeOf(c.prototype),"connectedCallback",this)&&p(c.prototype.__proto__||Object.getPrototypeOf(c.prototype),"connectedCallback",this).call(this),!this._isConnected){this._isConnected=!0;var e=this.constructor.observedAttributes;if(this.initialClassName=this.className,Array.isArray(e)){var r=this.constructor.propTypes;e.forEach(function(e){var t=ie(e);if(o.hasAttribute(e)){var n=se(o,e,r[t]);o.props[t]=n}}),this.checkPropTypes()}}this.updated&&this.updated()}},{key:"attributeChangedCallback",value:function(e,t,n){if(this.shouldUpdateCallback(n,t)){var o=ie(e);if(this.hasAttribute(e)){var r=this.constructor.propTypes;this.props[o]=ne(n,e,r[o])}else this.props[o]=null;this.checkPropTypes(),"value"===e&&null!==n&&F(this,pe,n,{bubbles:!0,cancelable:!0,composed:!0}),this.updatedDebounced()}}},{key:"setProps",value:function(e){var t=this.constructor.observedAttributes,n=void 0===t?[]:t,o=Object.keys(e).filter(function(e){return-1<n.indexOf(Q(e))}).reduce(this._reduceProps,{props:e,shouldUpdate:!1}).shouldUpdate;this.checkPropTypes(),o&&this._isConnected&&this.updated&&this.updated()}},{key:"checkPropTypes",value:function(){var e=this.constructor,t=e.propTypes,n=e.tagName;t&&b.checkPropTypes(t,this.props,"prop",n)}},{key:"shouldUpdateCallback",value:function(e,t){return e!==t}},{key:"disconnectedCallback",value:function(){this._isConnected=!1}}]),c}()},function(t){return function(e){function l(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{},t=e.template,n=a(e,["template"]);u(this,l);var o=d(this,(l.__proto__||Object.getPrototypeOf(l)).call(this,n));return o._template=t,o._hasTemplate=!!t,o._hasRendered=!1,o.updated=o.render,o}return f(l,t),r(l,[{key:"render",value:function(){var n=this,e=!this._hasRendered;if(this.willRenderCallback(e),this._hasTemplate){var t=this._template;try{if(e){for(var o=document.createDocumentFragment(),r=[];this.firstChild;)r.push(this.firstChild),o.appendChild(this.firstChild);this._lightDOMRefs=r,this.childrenFragment=o}else this._lightDOMRefs.forEach(function(e){var t=e.cloneNode(!0);n.childrenFragment.appendChild(t)});Ce||(this.childrenFragment.children=Array.from(this.childrenFragment.childNodes).filter(function(e){return 1===e.nodeType}));var i=t(this.props,this.childrenFragment,this),a=document.createDocumentFragment();if(Array.isArray(i))i.forEach(function(e){a.appendChild(e)});else if(i){if("string"==typeof i)throw new Oe(this);a.appendChild(i)}if(e)p(l.prototype.__proto__||Object.getPrototypeOf(l.prototype),"appendChild",this).call(this,a);else{var s=this.cloneNode(!1);s._isMorphing=!0,s.appendChild(a),this._isMorphing=!0,function(e,t){if("object"!==(void 0===e?"undefined":m(e)))throw new Error("componentMorph: oldTree should be an object");if("object"!==(void 0===t?"undefined":m(t)))throw new Error("componentMorph: newTree should be an object");ge(t,e)}(this,s),function(){for(var e=void 0;e=de.pop();)delete e.isSameNode;de=[]}(),this._isMorphing=!1}}catch(e){console.error(e)}}this._hasRendered=!0,this.didRenderCallback(e)}},{key:"skipChildren",value:function(){return!this._isMorphing}},{key:"willRenderCallback",value:function(e){}},{key:"didRenderCallback",value:function(e){}}]),l}()},function(t){return function(e){function i(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{},t=e.styles,n=void 0===t?"":t,o=a(e,["styles"]);u(this,i);var r=d(this,(i.__proto__||Object.getPrototypeOf(i)).call(this,o));return r._styles=n,r}return f(i,t),r(i,[{key:"connectedCallback",value:function(){p(i.prototype.__proto__||Object.getPrototypeOf(i.prototype),"connectedCallback",this)&&p(i.prototype.__proto__||Object.getPrototypeOf(i.prototype),"connectedCallback",this).call(this),this._appendStyles()}},{key:"_appendStyles",value:function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:this;if(this._styles){var t=document.createElement("style"),n=document.createTextNode(this._styles);t.appendChild(n),e.insertAdjacentElement?e.insertAdjacentElement("afterbegin",t):e.appendChild(t)}}}]),i}()})(function(e){function n(e){u(this,n);var t=d(this,(n.__proto__||Object.getPrototypeOf(n)).call(this,e));return t._id=V(t.nodeName),t}return f(n,ke),r(n,null,[{key:"uuidv4",value:function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(e){var t=16*Math.random()|0;return("x"==e?t:3&t|8).toString(16)})}}]),n}()),Te={},Ae=function(e){function a(){var e,t,n;u(this,a);for(var o=arguments.length,r=Array(o),i=0;i<o;i++)r[i]=arguments[i];return(t=n=d(this,(e=a.__proto__||Object.getPrototypeOf(a)).call.apply(e,[this].concat(r))))._appendStyles=function(){a.appendGlobalStyles(n._styles,n.nodeName)},d(n,t)}return f(a,we),r(a,null,[{key:"appendGlobalStyles",value:function(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:we.uuidv4();if(e&&!Te[t]){var n=document.createElement("style"),o=document.createTextNode(e);Te[t]=!0,n.appendChild(o),n.setAttribute("data-c-name",t.toLowerCase()),document.head.appendChild(n)}}}]),a}();var Ee=".m-footer-social {\n  padding-right: 15px;\n  padding-left: 15px;\n  position: relative;\n  width: 100%;\n  min-height: 1px;\n  max-width: 33.33333%;\n  -webkit-box-flex: 0;\n      -ms-flex: 0 0 33.33333%;\n          flex: 0 0 33.33333%;\n  display: block;\n  text-align: left; }\n  .m-footer-social:first-child:last-child {\n    position: static;\n    width: auto;\n    max-width: none;\n    -webkit-box-flex: 1;\n        -ms-flex: auto;\n            flex: auto;\n    -webkit-box-flex: 0;\n        -ms-flex: 0 1 auto;\n            flex: 0 1 auto; }\n  @media (max-width: 991px) {\n    .m-footer-social {\n      position: static;\n      width: auto;\n      max-width: none;\n      -webkit-box-flex: 1;\n          -ms-flex: auto;\n              flex: auto;\n      margin-bottom: -10px; }\n      .m-footer-social:first-child {\n        margin-bottom: 0; } }\n  @media (max-width: 575px) {\n    .m-footer-social {\n      padding: 25px 30px;\n      margin-bottom: 0; } }\n\n.m-footer-social__title {\n  /* Adds a hyphen where the word breaks, if supported (No Blink) */\n  -webkit-hyphens: auto;\n      -ms-hyphens: auto;\n          hyphens: auto;\n  /* These are technically the same, but use both */\n  overflow-wrap: break-word;\n  word-wrap: break-word;\n  font-size: 14px;\n  font-weight: 700;\n  line-height: 1.5;\n  letter-spacing: 0.02em;\n  color: #fff;\n  text-transform: uppercase; }\n  @media (min-width: 576px) {\n    .m-footer-social__title {\n      font-size: 16px; } }\n  @media (max-width: 991px) {\n    .m-footer-social__title {\n      /* stylelint-disable-next-line declaration-no-important */\n      display: none !important; } }\n\n.m-footer-social__list {\n  padding: 0;\n  margin: 0;\n  list-style-type: none;\n  *zoom: 1;\n  margin: 15px -10px 0 -10px; }\n  .m-footer-social__list::before, .m-footer-social__list::after {\n    display: table;\n    content: \" \"; }\n  .m-footer-social__list::after {\n    clear: both; }\n  .m-footer-social__list:first-child {\n    margin-top: 0; }\n  @media (max-width: 991px) {\n    .m-footer-social__list {\n      margin-top: 25px; } }\n  @media (max-width: 575px) {\n    .m-footer-social__list {\n      margin: -10px; } }\n\n.m-footer-social__list-item {\n  display: block;\n  float: left;\n  margin-right: 10px; }\n  .m-footer-social__list-item:last-child {\n    margin-right: 0; }\n\n.m-footer-social__link {\n  display: block;\n  padding: 10px; }\n\n.m-footer-social__icon {\n  width: 25px;\n  height: 25px;\n  display: block;\n  fill: currentColor;\n  color: #fff; }\n\n.m-footer-social--inline .m-footer-social__box {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center; }\n\n.m-footer-social--inline .m-footer-social__title {\n  display: block;\n  margin-right: 20px; }\n  .m-footer-social--inline .m-footer-social__title::after {\n    content: ':'; }\n\n.m-footer-social--inline .m-footer-social__list {\n  margin-top: 0; }\n\n.m-footer-social--light {\n  position: static;\n  width: auto;\n  max-width: none;\n  -webkit-box-flex: 1;\n      -ms-flex: auto;\n          flex: auto; }\n  .m-footer-social--light .m-footer-social__title {\n    font-size: 12px;\n    font-weight: 700;\n    line-height: 1.5;\n    letter-spacing: 0.02em; }\n    @media (min-width: 576px) {\n      .m-footer-social--light .m-footer-social__title {\n        font-size: 14px;\n        line-height: 1.21; } }\n  .m-footer-social--light .m-footer-social__icon {\n    width: 20px;\n    height: 20px; }\n",Ne=/\n[\s]+$/,je=/^\n[\s]+/,Pe=/[\s]+$/,Se=/^[\s]+/,Re=/[\n\s]+/g,De=["a","abbr","b","bdi","bdo","br","cite","data","dfn","em","i","kbd","mark","q","rp","rt","rtc","ruby","s","amp","small","span","strong","sub","sup","time","u","var","wbr"],Le=["code","pre","textarea"],Ue=function e(t,n){if(Array.isArray(n))for(var o,r,i=t.nodeName.toLowerCase(),a=!1,s=0,l=n.length;s<l;s++){var c=n[s];if(Array.isArray(c))e(t,c);else{("number"==typeof c||"boolean"==typeof c||"function"==typeof c||c instanceof Date||c instanceof RegExp)&&(c=c.toString());var u=t.childNodes[t.childNodes.length-1];if("string"==typeof c)a=!0,u&&"#text"===u.nodeName?u.nodeValue+=c:(c=document.createTextNode(c),t.appendChild(c),u=c),s===l-1&&(a=!1,-1===De.indexOf(i)&&-1===Le.indexOf(i)?""===(o=u.nodeValue.replace(je,"").replace(Pe,"").replace(Ne,"").replace(Re," "))?t.removeChild(u):u.nodeValue=o:-1===Le.indexOf(i)&&(r=0===s?"":" ",o=u.nodeValue.replace(je,r).replace(Se," ").replace(Pe,"").replace(Ne,"").replace(Re," "),u.nodeValue=o));else if(c&&c.nodeType){a&&(a=!1,-1===De.indexOf(i)&&-1===Le.indexOf(i)?""===(o=u.nodeValue.replace(je,"").replace(Ne,"").replace(Re," "))?t.removeChild(u):u.nodeValue=o:-1===Le.indexOf(i)&&(o=u.nodeValue.replace(Se," ").replace(je,"").replace(Ne,"").replace(Re," "),u.nodeValue=o));var p=c.nodeName;p&&(i=p.toLowerCase()),t.appendChild(c)}}}};function Ie(e){var t,n,o,r=e.title,i=e.items,a=void 0===i?[]:i;return(n=document.createElement("aside")).setAttribute("class","m-footer-social__box"),Ue(n,["\n    ",r&&(o=document.createElement("strong"),o.setAttribute("class","m-footer-social__title"),Ue(o,[r]),o),"\n\n    ",(t=document.createElement("ul"),t.setAttribute("class","m-footer-social__list"),Ue(t,["\n      ",Array.isArray(a)&&a.map(function(e){var t,n,o,r=e.name,i=e.url;return(o=document.createElement("li")).setAttribute("class","m-footer-social__list-item"),Ue(o,["\n          ",(n=document.createElement("a"),n.setAttribute("href",""+String(i)),n.setAttribute("class","m-footer-social__link"),Ue(n,["\n            ",(t=document.createElement("axa-icon"),t.setAttribute("icon",""+String(r)),t.setAttribute("classes","m-footer-social__icon"),t),"\n          "]),n),"\n        "]),o}),"\n    "]),t),"\n  "]),n}var Me,Ve,qe=function(e){function t(){return u(this,t),d(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,{styles:Ee,template:Ie}))}return f(t,Ae),r(t,[{key:"willRenderCallback",value:function(){var e=this.props,t=e.inline,n=e.light;this.className=I(this.initialClassName,"m-footer-social",{"m-footer-social--inline":t,"m-footer-social--light":n})}}]),t}();return qe.tagName="axa-footer-social",qe.propTypes={inline:b.bool,items:b.arrayOf(b.shape({name:b.string,url:U})),light:b.bool,title:b.string},Me=qe.tagName,Ve=qe,customElements.get(Me)||customElements.define(Me,Ve),qe});
