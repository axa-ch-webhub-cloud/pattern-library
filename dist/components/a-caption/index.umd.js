!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):t.StyleGuideWebComponent=e()}(this,function(){"use strict";function t(t,e){return t(e={exports:{}},e.exports),e.exports}var e=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable;(function(){try{if(!Object.assign)return!1;var t=new String("abc");if(t[5]="de","5"===Object.getOwnPropertyNames(t)[0])return!1;for(var e={},n=0;n<10;n++)e["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(e).map(function(t){return e[t]}).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach(function(t){r[t]=t}),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(t){return!1}})()&&Object.assign;var i="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},a=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")},l=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),s=function(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t},u=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},c=function t(e,n,r){null===e&&(e=Function.prototype);var i=Object.getOwnPropertyDescriptor(e,n);if(void 0===i){var o=Object.getPrototypeOf(e);return null===o?void 0:t(o,n,r)}if("value"in i)return i.value;var a=i.get;return void 0!==a?a.call(r):void 0},p=function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)},d=function(t,e){var n={};for(var r in t)e.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r]);return n},f=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e},h=function t(e,n,r,i){var o=Object.getOwnPropertyDescriptor(e,n);if(void 0===o){var a=Object.getPrototypeOf(e);null!==a&&t(a,n,r,i)}else if("value"in o&&o.writable)o.value=r;else{var l=o.set;void 0!==l&&l.call(i,r)}return r},g=function(){return function(t,e){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return function(t,e){var n=[],r=!0,i=!1,o=void 0;try{for(var a,l=t[Symbol.iterator]();!(r=(a=l.next()).done)&&(n.push(a.value),!e||n.length!==e);r=!0);}catch(t){i=!0,o=t}finally{try{!r&&l.return&&l.return()}finally{if(i)throw o}}return n}(t,e);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),v=function(t){if(Array.isArray(t)){for(var e=0,n=Array(t.length);e<t.length;e++)n[e]=t[e];return n}return Array.from(t)};function y(){}var _,b,m,x,O=t(function(t){t.exports=function(){function t(t,e,n,r,o,a){if(a!==i){var l=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw l.name="Invariant Violation",l}}function e(){return t}t.isRequired=t;var n={array:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e};return n.checkPropTypes=y,n.PropTypes=n,n}()}),C=t(function(t){!function(){var e={}.hasOwnProperty;function n(){for(var t=[],r=0;r<arguments.length;r++){var i=arguments[r];if(i){var a=void 0===i?"undefined":o(i);if("string"===a||"number"===a)t.push(i);else if(Array.isArray(i))t.push(n.apply(null,i));else if("object"===a)for(var l in i)e.call(i,l)&&i[l]&&t.push(l)}}return t.join(" ")}t.exports?t.exports=n:window.classNames=n}()}),w=function(){for(var t=arguments.length,e=Array(t),n=0;n<t;n++)e[n]=arguments[n];return function(t){return e.reduceRight(function(t,e){return e(t)},t)}},k={},T=(_=Object,b=_.getPrototypeOf||function(t){return t.__proto__},m=_.setPrototypeOf||function(t,e){return t.__proto__=e,t},x="object"===("undefined"==typeof Reflect?"undefined":o(Reflect))?Reflect.construct:function(t,e,n){var r,i=[null];return i.push.apply(i,e),r=t.bind.apply(t,i),m(new r,n.prototype)},function(t){var e=b(t);return m(t,m(function(){return x(e,arguments,b(this).constructor)},e))}),j=function(t){return T(function(e){function n(){return a(this,n),f(this,(n.__proto__||Object.getPrototypeOf(n)).apply(this,arguments))}return p(n,t),l(n,[{key:"init",value:function(){var t;this._id=((t=this.nodeName)in k||(k[t]=0),++k[t]),this._initialised=!0}},{key:"connectedCallback",value:function(){this._initialised||this.init()}},{key:"attributeChangedCallback",value:function(){this._initialised||this.init()}}],[{key:"uuidv4",value:function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(t){var e=16*Math.random()|0;return("x"==t?e:3&e|8).toString(16)})}}]),n}())},N={},P=function(){try{var t=new window.CustomEvent("test",{cancelable:!0});if(t.preventDefault(),!0!==t.defaultPrevented)throw new Error("Could not prevent default");return window.CustomEvent}catch(t){}return e;function e(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=e.bubbles,r=void 0!==n&&n,i=e.cancelable,o=void 0!==i&&i,a=e.detail,l=void 0===a?void 0:a,s=document.createEvent("CustomEvent");s.initCustomEvent(t,r,o,l);var u=s.preventDefault;return s.preventDefault=function(){u.call(s);try{Object.defineProperty(this,"defaultPrevented",{get:function(){return!0}})}catch(t){this.defaultPrevented=!0}},s}}();function A(t,e,n){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},i=new P(e,u({},r,{detail:n}));return t.dispatchEvent(i)}var E=function(){var t=!1;if("undefined"!=typeof window&&"function"==typeof window.addEventListener){var e=Object.defineProperty({},"passive",{get:function(){t=!0}}),n=function(){};window.addEventListener("testPassiveEventSupport",n,e),window.removeEventListener("testPassiveEventSupport",n,e)}return t}();function S(t){for(var e=t.className,n=!1,r=!0,i=arguments.length,o=Array(i>1?i-1:0),a=1;a<i;a++)o[a-1]=arguments[a];var l=o.map(function(t){var i=(o=t,new RegExp("^"+o+"$|^"+o+"\\s|\\s"+o+"\\s|\\s"+o+"$",a)).test(e);var o,a;i?n=!0:r=!1;return{className:t,hasClass:i}});return!(!r&&!n)&&l}var R=/\s+/,D={transitionend:function(){for(var t=document.createElement("div").style,e={transition:"transitionend",OTransition:"oTransitionEnd otransitionend",MozTransition:"transitionend",WebkitTransition:"webkitTransitionEnd"},n=Object.keys(e),r=n.length,i=void 0,o=0;o<r;++o)if(void 0!==t[i=n[o]])return e[i];return""}()};function L(t,e,n,r){var i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{},a=i.capture,l=void 0!==a&&a,s=i.passive,u=void 0===s||s;if(D[e]&&(e=D[e]),!t||!e)return null;var c=void 0===n?"undefined":o(n),p=n&&"string"===c;if("function"===c){if(r){var d=r;l=d.capture,u=d.passive}r=n}for(var f=E?{capture:l,passive:u}:l,h=p?function(e){var i=e.target;for(;!S(i,n)&&i!==t;)i=i.parentNode;if(i!==t)return r(e,i)}:r,g=e.split(R),v=g.length,y=0;y<v;++y)t.addEventListener(g[y],h,f);return function e(){for(var n=0;n<v;++n)t.removeEventListener(g[n],h,f);!function(t,e){if(!t)return!1;for(var n=Object.keys(t),r=n.length,i=0;i<r;++i){var o=n[i];if(t[o]===e)return delete t[o]}}(this,e)}}function I(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=n.leading,i=void 0!==r&&r,o=n.trailing,a=void 0===o||o,l=n.maxWait,s=void 0!==l&&l,u=void 0,c=void 0,p=void 0,d=void 0,f=!1,h=e!==s,g=!1!==s;function y(){for(var n=arguments.length,r=Array(n),o=0;o<n;o++)r[o]=arguments[o];return u=r,h&&(c&&clearTimeout(c),c=setTimeout(_,e)),g&&!p&&(p=setTimeout(b,s)),i&&!f&&(f=!0,d=t.apply(void 0,v(u))),d}return y.flush=function(){(c||p)&&(d=t.apply(void 0,v(u)));return x(),d},y.cancel=x,y;function _(){p&&clearTimeout(p),m()}function b(){c&&clearTimeout(c),m()}function m(){a&&(d=t.apply(void 0,v(u))),c=null,p=null,f=!1}function x(){c&&(clearTimeout(c),c=null),p&&(clearTimeout(p),p=null),u=void 0,f=!1}}window.__subscriptions=window.__subscriptions||{};var U=window.__subscriptions;function M(t,e){var n=L(arguments.length>2&&void 0!==arguments[2]?arguments[2]:document,t,e);U[t]||(U[t]={count:0});var r,i=U[t];return i.count++,i.onsubscribe||(i.onsubscribe=I((r=t,function(){A(document,"pubsub/onsubscribe",r),A(document,"pubsub/onsubscribe/"+r,r),U[r]&&delete U[r].unsubscribe}),100)),i.onsubscribe(),function(){i.count--,n.call(this),i.count<=0&&delete U[t]}}L(document,"pubsub/onsubscribe",function(t){var e=t.detail;U[e]||(U[e]={count:0});var n=U[e],r=n.queue;Array.isArray(r)&&(r.forEach(function(t){var e=g(t,3),n=e[0],r=e[1],i=e[2];A(i,n,r)}),delete n.queue)});var q,F=function(t,e){return t===e},V=((q=function(){var t;return(t=console).log.apply(t,arguments)},function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:F;return function(){for(var e=arguments.length,n=Array(e),r=0;r<e;r++)n[r]=arguments[r];return function(){for(var e=arguments.length,r=Array(e),i=0;i<e;i++)r[i]=arguments[i];return function(){return t.apply(void 0,[].concat(n,r))?q.apply(void 0,arguments):void 0}}}})()(!0),[]);var K=1,H=3,W=8;function z(t,e){var n=t.nodeType,r=t.nodeName;n===K&&function(t,e){for(var n=e.skipChildren&&e.skipChildren(),r=e.constructor.observedAttributes,i=r&&Array.isArray(r)&&r.length,o=function(t){return n&&i&&-1===r.indexOf(t)},a=e.attributes,l=t.attributes,s=null,u=null,c=null,p=null,d=l.length-1;d>=0;--d)if(p=l[d],c=p.name,s=p.namespaceURI,u=p.value,!o(c))if(s){var f=p.localName;e.getAttributeNS(s,f||c)!==u&&e.setAttributeNS(s,c,u)}else e.hasAttribute(c)?e.getAttribute(c)!==u&&("null"===u||"undefined"===u?e.removeAttribute(c):e.setAttribute(c,u)):e.setAttribute(c,u);for(var h=a.length-1;h>=0;--h)if(!1!==(p=a[h]).specified){if(c=p.name,s=p.namespaceURI,o(c))continue;s?(c=p.localName||c,t.hasAttributeNS(s,c)||e.removeAttributeNS(s,c)):t.hasAttributeNS(null,c)||e.removeAttribute(c)}}(t,e),n!==H&&n!==W||e.nodeValue===t.nodeValue||(e.nodeValue=t.nodeValue),"INPUT"===r?function(t,e){var n=t.value,r=e.value;B(t,e,"checked"),B(t,e,"disabled"),n!==r&&(e.setAttribute("value",n),e.value=n);"null"===n&&(e.value="",e.removeAttribute("value"));t.hasAttributeNS(null,"value")?"range"===e.type&&(e.value=n):e.removeAttribute("value")}(t,e):"OPTION"===r?B(t,e,"selected"):"TEXTAREA"===r&&function(t,e){var n=t.value;n!==e.value&&(e.value=n);if(e.firstChild&&e.firstChild.nodeValue!==n){if(""===n&&e.firstChild.nodeValue===e.placeholder)return;e.firstChild.nodeValue=n}}(t,e)}function B(t,e,n){t[n]!==e[n]&&(e[n]=t[n],t[n]?e.setAttribute(n,""):e.removeAttribute(n))}var G=3;function $(t,e){return e?t?t.isSameNode&&t.isSameNode(e)?e:t.tagName!==e.tagName?t:(z(t,e),e.skipChildren&&e.skipChildren()||function(t,e){for(var n=void 0,r=void 0,i=void 0,o=void 0,a=0,l=0;n=e.childNodes[l],r=t.childNodes[l-a],n||r;l++)if(r)if(n)if(J(r,n))(i=$(r,n))!==n&&(e.replaceChild(i,n),a++);else{o=null;for(var s=l;s<e.childNodes.length;s++)if(J(e.childNodes[s],r)){o=e.childNodes[s];break}o?((i=$(r,o))!==o&&a++,e.insertBefore(i,n)):r.id||n.id?(e.insertBefore(r,n),a++):(i=$(r,n))!==n&&(e.replaceChild(i,n),a++)}else e.appendChild(r),a++;else e.removeChild(n),l--}(t,e),e):null:t}function J(t,e){return t.id?t.id===e.id:t.isSameNode?t.isSameNode(e):t.tagName===e.tagName&&(t.type===G&&t.nodeValue===e.nodeValue)}var Y,Z,X,Q,tt=(Y=Object,Z=Y.getPrototypeOf||function(t){return t.__proto__},X=Y.setPrototypeOf||function(t,e){return t.__proto__=e,t},Q="object"===("undefined"==typeof Reflect?"undefined":o(Reflect))?Reflect.construct:function(t,e,n){var r,i=[null];return i.push.apply(i,e),r=t.bind.apply(t,i),X(new r,n.prototype)},function(t){var e=Z(t);return X(t,X(function(){return Q(e,arguments,Z(this).constructor)},e))})(function(t){function e(t){var n;a(this,e);for(var r="\n    Web Component "+t.nodeName+"%c#"+t._id+" does not accept string as a return from a template. Maybe use bel?}",i=arguments.length,o=Array(i>1?i-1:0),l=1;l<i;l++)o[l-1]=arguments[l];var s=f(this,(n=e.__proto__||Object.getPrototypeOf(e)).call.apply(n,[this,r].concat(o)));return Error.captureStackTrace&&Error.captureStackTrace(s,e),s.name="TemplateNoStringReturnException",s}return p(e,t),e}(Error)),et=!!document.createDocumentFragment().children,nt=0;function rt(t,e){var n=t[e];return"function"==typeof n&&(t[e]=function(t){function e(){return t.apply(void 0,arguments)}return 0===nt&&(nt++,Object.keys(t).map(function(n){return e[n]=t[n],n}).reduce(rt,e),nt--),e}(n)),t}var it=O;Object.keys(it).reduce(rt,it);var ot=it.oneOf(["left","center","right"]),at=it.oneOf(["left","right"]),lt=it.oneOf(["top","bottom"]),st=it.oneOf(["up","down"]),ut=it.oneOf(["ok","pending","error","unknown"]),ct=it.oneOf(["row","col","rowgroup","colgroup","auto"]),pt=it.oneOfType([it.string,it.number]),dt={text:pt,value:it.any,rowspan:pt,colspan:pt,scope:ct,align:ot,dense:it.bool},ft={float:at,strong:it.bool,bold:it.bool},ht=it.oneOfType([it.string,it.number]),gt=it.oneOfType([ht,it.shape(u({},dt,{sort:st,sortActive:it.bool}))]),vt=it.oneOfType([ht,it.shape(u({},dt,ft,{action:it.bool,state:ut}))]),yt=it.oneOfType([ht,it.shape(u({},dt,ft))]),_t=it.oneOfType([it.arrayOf(gt),it.shape({cells:it.arrayOf(gt)})]),bt=it.oneOfType([it.arrayOf(vt),it.shape({cells:it.arrayOf(vt),action:it.bool})]),mt=it.oneOfType([it.arrayOf(yt),it.shape({cells:it.arrayOf(yt)})]),xt=(it.oneOfType([_t,it.arrayOf(_t)]),it.oneOfType([bt,it.arrayOf(bt)]),it.oneOfType([mt,it.arrayOf(mt)]),/[A-Z]/g);function Ot(t){return t.replace(xt,Ct)}function Ct(t,e,n){var r=t.toLowerCase(),i=n.charAt(e+1);return 0===e||i.toUpperCase()===i?r:"-"+r}var wt=/^\s*(?:true|false|null|undefined|-?[0-9]+\.?[0-9]*|[[{](?:.|[\s])*[\]}])\s*$/;function kt(t,e,n){var r=t;if(n)return function(t,e,n){var r=t;switch(n){case it.string:case it.string.isRequired:return t;case it.bool:case it.bool.isRequired:if(!t||e===t)return!0;case it.number:case it.number.isRequired:case it.object:case it.object.isRequired:case it.array:case it.array.isRequired:default:if(wt.test(t))try{r=JSON.parse(t)}catch(n){console.error("Attribute "+e+" has an error:\n"+n+"\n",t)}}return r}(t,e,n);if(t&&e!==t){if(wt.test(t))try{r=JSON.parse(t)}catch(n){console.error("Attribute "+e+" has an error:\n"+n+"\n",t)}}else r=!0;return r}var Tt=/(?:^\w|[A-Z]|\b\w|\s+|[-_]+)/g,jt=/[-_]+/g;function Nt(t){return t.replace(Tt,Pt)}function Pt(t,e){return 0==+t||jt.test(t)?"":0===e?t.toLowerCase():t.toUpperCase()}function At(t,e,n){var r=1===t.nodeType,i=t.constructor.propTypes,o=n;!n&&r&&(o=(void 0===i?{}:i)[Nt(e)]);if(r&&!t.hasAttribute(e))return o!==it.bool&&o!==it.bool.isRequired&&void 0;var a=t.value;return e?a=t.getAttribute(e):e=t.name,a=kt(a,e,o)}var Et=/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream;function St(t,e,n){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},i=r.capture,o=void 0===i||i,a=r.passive,l=void 0===a||a,s=t.ownerDocument.documentElement,u=L(s,e,function(e){var r=e.target;if(!t.contains(r)&&t!==r)return n(e)},{capture:o,passive:l});return Et&&(s.style.cursor="pointer"),u}var Rt=function(){for(var t=arguments.length,e=Array(t),n=0;n<t;n++)e[n]=arguments[n];for(var r=e.length,i={},o=0;o<r;++o){var a=e[o];i[a.toUpperCase()]=a}return i}("click","change","keyup","enter","move","leave","Escape","Esc","touchstart","touchmove","touchend","input","resize"),Dt="axa-change",Lt="data-prevent-default";((function(){function t(e){var n=this,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};a(this,t),this._handleClick=function(t,e){n.shouldPreventDefault(e||t.currentTarget)&&t.preventDefault();var r=!n._lastToggleNode,i=e!==n._lastToggleNode,o=!r&&!i;r?(n._notify(Rt.ENTER,e),n._onInteractive()):i&&n._notify(Rt.MOVE,e,n._lastToggleNode),n._lastToggleNode=e,o&&n._options.sameClickClose&&n._close()},this._handleClose=function(t,e){n.shouldPreventDefault(e||t.currentTarget)&&t.preventDefault(),n._close()},this._handleKeyUp=function(t){(t.key===Rt.ESCAPE||t.key===Rt.ESC||27===t.keyCode)&&(t.preventDefault(),n._close())},this._init(e,r)}return l(t,[{key:"_init",value:function(e,n){e&&(this._wcNode=e),n&&(this._options=u({},t.DEFAULTS,n));var r=this._options.containerClass;this._container=r?this._wcNode.querySelector(r):this._wcNode,this._on()}},{key:"_on",value:function(){this._off(),this._unClick=L(this._container,Rt.CLICK,this._options.toggleClass,this._handleClick,{passive:!this._options.preventDefault})}},{key:"_off",value:function(){this._unClick&&this._unClick(),this._offInteractive()}},{key:"_onInteractive",value:function(){this._offInteractive(),this._options.closeClass&&(this._unCloseClick=L(this._container,Rt.CLICK,this._options.closeClass,this._handleClose,{passive:!this._options.preventDefault})),this._options.outerClose&&(this._unOuterClick=St(this._container,Rt.CLICK,this._handleClose,{passive:!this._options.preventDefault})),this._options.escapeClose&&(this._unCloseEscape=L(this._container.ownerDocument,Rt.KEYUP,this._handleKeyUp,{passive:!1}))}},{key:"shouldPreventDefault",value:function(t){return t.hasAttribute(Lt)?At(t,Lt):this._options.preventDefault}},{key:"_offInteractive",value:function(){this._unOuterClick&&this._unOuterClick(),this._unCloseClick&&this._unCloseClick(),this._unCloseEscape&&this._unCloseEscape(),this.deleteLastToggleNode()}},{key:"_close",value:function(){this._lastToggleNode&&(this._notify(Rt.LEAVE,this._lastToggleNode),this._offInteractive(),this.deleteLastToggleNode())}},{key:"_notify",value:function(t,e,n){t in this&&"function"==typeof this[t]&&this[t](e,n)}},{key:"enter",value:function(t){throw new Error("UiEvent.enter method not overwritten")}},{key:"move",value:function(t,e){}},{key:"leave",value:function(t){throw new Error("UiEvent.leave method not overwritten")}},{key:"destroy",value:function(){this._off(),delete this._wcNode,delete this._options}},{key:"deleteLastToggleNode",value:function(){delete this._lastToggleNode}},{key:"lastToggleNode",get:function(){return this._lastToggleNode}}]),t})()).DEFAULTS={containerClass:".js-ui-container",toggleClass:"js-ui-toggle",closeClass:"js-ui-close",escapeClose:!0,outerClose:!0,sameClickClose:!0,preventDefault:!0};var It=w(function(t){return function(e){function n(){var t,e,r;a(this,n);for(var i=arguments.length,o=Array(i),l=0;l<i;l++)o[l]=arguments[l];return e=r=f(this,(t=n.__proto__||Object.getPrototypeOf(n)).call.apply(t,[this].concat(o))),r._makeContextReady=function(){var t=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}).detail;r.contextNode&&(clearTimeout(r.timeoutId),r.timeoutId=setTimeout(function(){r.contextCallback(r.contextNode,t)},10)),r.unContextEnabled&&r.unContextEnabled(),r.unContextEnabled=M("context/available",r._makeContextReady)},f(r,e)}return p(n,t),l(n,[{key:"connectedCallback",value:function(){c(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"connectedCallback",this)&&c(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"connectedCallback",this).call(this),this.contextCallback&&this._makeContextReady()}},{key:"disconnectedCallback",value:function(){c(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"disconnectedCallback",this)&&c(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"disconnectedCallback",this).call(this),this.unContextEnabled&&this.unContextEnabled()}},{key:"provideContext",value:function(){var t=this.nodeName.toLowerCase();this.__isContext=!0,this.__contextName=t,function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:document;U[t]||(U[t]={count:0,queue:[]});var r=U[t].queue;Array.isArray(r)?r.push([t,e,n]):A(n,t,e)}("context/available",t)}},{key:"consumeContext",value:function(t){this.__consumedContext=t&&t.toLowerCase()}},{key:"contextNode",get:function(){for(var t=this.__consumedContext,e=this.parentNode;e&&(!e.__isContext||t&&t!==e.__contextName);)e=e.parentNode;return!(!e||!e.__isContext)&&e}}]),n}()},function(t){return function(e){function n(){return a(this,n),f(this,(n.__proto__||Object.getPrototypeOf(n)).apply(this,arguments))}return p(n,t),l(n,[{key:"appendChild",value:function(t){!this._isMorphing&&this._hasTemplate&&this._hasRendered?(this._lightDOMRefs.push(t),this.render()):c(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"appendChild",this).call(this,t)}},{key:"innerText",set:function(t){if(this._hasTemplate&&this._hasRendered){var e=document.createTextNode(t);this._lightDOMRefs=[e],this.render()}else h(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"innerText",t,this)}},{key:"textContent",set:function(t){if(this._hasTemplate&&this._hasRendered){var e=document.createTextNode(t);this._lightDOMRefs=[e],this.render()}else h(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"textContent",t,this)}},{key:"innerHTML",set:function(t){if(this._hasTemplate&&this._hasRendered){var e=document.createElement("div");e.innerHTML=t,this._lightDOMRefs=Array.from(e.children),this.render()}else h(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"innerHTML",t,this)}}]),n}()},function(t){return function(e){function n(){var t,e,r;a(this,n);for(var i=arguments.length,o=Array(i),l=0;l<i;l++)o[l]=arguments[l];return e=r=f(this,(t=n.__proto__||Object.getPrototypeOf(n)).call.apply(t,[this].concat(o))),r._reduceProps=function(t,e){var n=t.props,i=t.shouldUpdate,o="_"+e,a=n[e],l=r[o];return i||r.shouldUpdateCallback(a,l)?(r.props[e]=a,{props:n,shouldUpdate:!0}):{props:n,shouldUpdate:!1}},f(r,e)}return p(n,t),l(n,[{key:"init",value:function(t){var e=this;c(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"init",this).call(this,t),this._isConnected=!1,this.props={},this.updatedDebounced=I(function(){return e.updated&&e.updated()},50);var r=this.constructor.observedAttributes;Array.isArray(r)&&r.forEach(function(t){Nt(t)})}},{key:"connectedCallback",value:function(){var t=this;if(c(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"connectedCallback",this)&&c(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"connectedCallback",this).call(this),!this._isConnected){this._isConnected=!0;var e=this.constructor.observedAttributes;if(this.initialClassName=this.className,Array.isArray(e)){var r=this.constructor.propTypes;e.forEach(function(e){var n=Nt(e);if(t.hasAttribute(e)){var i=At(t,e,r[n]);t.props[n]=i}}),this.checkPropTypes()}}this.updated&&this.updated()}},{key:"attributeChangedCallback",value:function(t,e,r){if(c(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"attributeChangedCallback",this)&&c(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"attributeChangedCallback",this).call(this,t,e,r),this.shouldUpdateCallback(r,e)){var i=Nt(t);if(this.hasAttribute(t)){var o=this.constructor.propTypes;this.props[i]=kt(r,t,o[i])}else this.props[i]=null;this.checkPropTypes(),"value"===t&&null!==r&&A(this,Dt,r,{bubbles:!0,cancelable:!0,composed:!0}),this.updatedDebounced()}}},{key:"setProps",value:function(t){var e=this.constructor.observedAttributes,n=void 0===e?[]:e,r=Object.keys(t).filter(function(t){return n.indexOf(Ot(t))>-1}).reduce(this._reduceProps,{props:t,shouldUpdate:!1}).shouldUpdate;this.checkPropTypes(),r&&this._isConnected&&this.updated&&this.updated()}},{key:"checkPropTypes",value:function(){var t=this.constructor,e=t.propTypes,n=t.tagName;e&&it.checkPropTypes(e,this.props,"prop",n)}},{key:"shouldUpdateCallback",value:function(t,e){return t!==e}},{key:"disconnectedCallback",value:function(){this._isConnected=!1}}],[{key:"observedAttributes",get:function(){var t=this.propTypes;return t&&Object.keys(t).map(Ot)}}]),n}()},function(t){return function(e){function n(){return a(this,n),f(this,(n.__proto__||Object.getPrototypeOf(n)).apply(this,arguments))}return p(n,t),l(n,[{key:"init",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.template,r=d(t,["template"]);c(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"init",this).call(this,r),this._template=e,this._hasTemplate=!!e,this._hasRendered=!1,this.updated=this.render}},{key:"render",value:function(){var t=this,e=!this._hasRendered;if(this.willRenderCallback(e),this._hasTemplate){var r=this._template;try{if(e){for(var i=document.createDocumentFragment(),a=[];this.firstChild;)a.push(this.firstChild),i.appendChild(this.firstChild);this._lightDOMRefs=a,this.childrenFragment=i}else this._lightDOMRefs.forEach(function(e){var n=e.cloneNode(!0);t.childrenFragment.appendChild(n)});et||(this.childrenFragment.children=Array.from(this.childrenFragment.childNodes).filter(function(t){return 1===t.nodeType}));var l=r(this.props,this.childrenFragment,this),s=document.createDocumentFragment();if(Array.isArray(l))l.forEach(function(t){s.appendChild(t)});else if(l){if("string"==typeof l)throw new tt(this);s.appendChild(l)}if(e)c(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"appendChild",this).call(this,s);else{var u=this.cloneNode(!1);u._isMorphing=!0,u.appendChild(s),this._isMorphing=!0,function(t,e){if("object"!==(void 0===t?"undefined":o(t)))throw new Error("componentMorph: oldTree should be an object");if("object"!==(void 0===e?"undefined":o(e)))throw new Error("componentMorph: newTree should be an object");$(e,t)}(this,u),function(){for(var t=void 0;t=V.pop();)delete t.isSameNode;V=[]}(),this._isMorphing=!1}}catch(t){console.error(t)}}this._hasRendered=!0,this.didRenderCallback(e)}},{key:"skipChildren",value:function(){return!this._isMorphing}},{key:"willRenderCallback",value:function(t){}},{key:"didRenderCallback",value:function(t){}}]),n}()},function(t){return function(e){function n(){return a(this,n),f(this,(n.__proto__||Object.getPrototypeOf(n)).apply(this,arguments))}return p(n,t),l(n,[{key:"init",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.styles,r=void 0===e?"":e,i=d(t,["styles"]);c(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"init",this).call(this,i),this._styles=r}},{key:"connectedCallback",value:function(){c(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"connectedCallback",this)&&c(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"connectedCallback",this).call(this),this._appendStyles()}},{key:"_appendStyles",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this;if(this._styles){var e=document.createElement("style"),n=document.createTextNode(this._styles);e.appendChild(n),t.insertAdjacentElement?t.insertAdjacentElement("afterbegin",e):t.appendChild(e)}}}]),n}()});w(It,j);var Ut,Mt,qt,Ft=w(It,function(t){return function(e){function n(){var t,e,r;a(this,n);for(var i=arguments.length,o=Array(i),l=0;l<i;l++)o[l]=arguments[l];return e=r=f(this,(t=n.__proto__||Object.getPrototypeOf(n)).call.apply(t,[this].concat(o))),r._appendStyles=function(){n.appendGlobalStyles(r._styles,r.nodeName)},f(r,e)}return p(n,t),l(n,null,[{key:"appendGlobalStyles",value:function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:t.uuidv4();if(e&&!N[n]){var r=document.createElement("style"),i=document.createTextNode(e);N[n]=!0,r.appendChild(i),r.setAttribute("data-c-name",n.toLowerCase()),document.head.appendChild(r)}}}]),n}()},j)(HTMLTableCaptionElement),Vt=function(t){function e(){return a(this,e),f(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return p(e,Ft),l(e,[{key:"init",value:function(){c(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"init",this).call(this,{styles:".a-caption {\n  font-size: 12px;\n  font-weight: 400;\n  line-height: 1.5;\n  letter-spacing: 0.02em;\n  padding: 10px 10px;\n  color: #7f7f7f; }\n  @media (min-width: 576px) {\n    .a-caption {\n      font-size: 14px;\n      line-height: 1.21; } }\n  @media (max-width: 767px) {\n    .a-caption {\n      padding-left: 10px;\n      padding-right: 10px; } }\n\n.a-caption--top {\n  caption-side: top; }\n\n.a-caption--bottom {\n  caption-side: bottom; }\n\n.u-align-left {\n  text-align: left; }\n\n.u-align-center {\n  text-align: center; }\n\n.u-align-right {\n  text-align: right; }\n\n@media (max-width: 575px) {\n  .u-align-left-xs-down {\n    text-align: left; }\n  .u-align-center-xs-down {\n    text-align: center; }\n  .u-align-right-xs-down {\n    text-align: right; } }\n\n.u-align-left-xs-up {\n  text-align: left; }\n\n.u-align-center-xs-up {\n  text-align: center; }\n\n.u-align-right-xs-up {\n  text-align: right; }\n\n@media (max-width: 575px) {\n  .u-align-left-xs {\n    text-align: left; }\n  .u-align-center-xs {\n    text-align: center; }\n  .u-align-right-xs {\n    text-align: right; } }\n\n@media (max-width: 767px) {\n  .u-align-left-sm-down {\n    text-align: left; }\n  .u-align-center-sm-down {\n    text-align: center; }\n  .u-align-right-sm-down {\n    text-align: right; } }\n\n@media (min-width: 576px) {\n  .u-align-left-sm-up {\n    text-align: left; }\n  .u-align-center-sm-up {\n    text-align: center; }\n  .u-align-right-sm-up {\n    text-align: right; } }\n\n@media (min-width: 576px) and (max-width: 767px) {\n  .u-align-left-sm {\n    text-align: left; }\n  .u-align-center-sm {\n    text-align: center; }\n  .u-align-right-sm {\n    text-align: right; } }\n\n@media (max-width: 991px) {\n  .u-align-left-md-down {\n    text-align: left; }\n  .u-align-center-md-down {\n    text-align: center; }\n  .u-align-right-md-down {\n    text-align: right; } }\n\n@media (min-width: 768px) {\n  .u-align-left-md-up {\n    text-align: left; }\n  .u-align-center-md-up {\n    text-align: center; }\n  .u-align-right-md-up {\n    text-align: right; } }\n\n@media (min-width: 768px) and (max-width: 991px) {\n  .u-align-left-md {\n    text-align: left; }\n  .u-align-center-md {\n    text-align: center; }\n  .u-align-right-md {\n    text-align: right; } }\n\n@media (max-width: 1199px) {\n  .u-align-left-lg-down {\n    text-align: left; }\n  .u-align-center-lg-down {\n    text-align: center; }\n  .u-align-right-lg-down {\n    text-align: right; } }\n\n@media (min-width: 992px) {\n  .u-align-left-lg-up {\n    text-align: left; }\n  .u-align-center-lg-up {\n    text-align: center; }\n  .u-align-right-lg-up {\n    text-align: right; } }\n\n@media (min-width: 992px) and (max-width: 1199px) {\n  .u-align-left-lg {\n    text-align: left; }\n  .u-align-center-lg {\n    text-align: center; }\n  .u-align-right-lg {\n    text-align: right; } }\n\n@media (max-width: 1439px) {\n  .u-align-left-xl-down {\n    text-align: left; }\n  .u-align-center-xl-down {\n    text-align: center; }\n  .u-align-right-xl-down {\n    text-align: right; } }\n\n@media (min-width: 1200px) {\n  .u-align-left-xl-up {\n    text-align: left; }\n  .u-align-center-xl-up {\n    text-align: center; }\n  .u-align-right-xl-up {\n    text-align: right; } }\n\n@media (min-width: 1200px) and (max-width: 1439px) {\n  .u-align-left-xl {\n    text-align: left; }\n  .u-align-center-xl {\n    text-align: center; }\n  .u-align-right-xl {\n    text-align: right; } }\n\n.u-align-left-xxl-down {\n  text-align: left; }\n\n.u-align-center-xxl-down {\n  text-align: center; }\n\n.u-align-right-xxl-down {\n  text-align: right; }\n\n@media (min-width: 1440px) {\n  .u-align-left-xxl-up {\n    text-align: left; }\n  .u-align-center-xxl-up {\n    text-align: center; }\n  .u-align-right-xxl-up {\n    text-align: right; } }\n\n@media (min-width: 1440px) {\n  .u-align-left-xxl {\n    text-align: left; }\n  .u-align-center-xxl {\n    text-align: center; }\n  .u-align-right-xxl {\n    text-align: right; } }\n"})}},{key:"willRenderCallback",value:function(){var t,e=this.props,n=e.classes,r=e.align,i=e.side;this.className=C("a-caption",n,(s(t={},"u-align-"+r,r),s(t,"a-caption--"+i,i),t))}}]),e}();return Vt.tagName="axa-caption",Vt.builtInTagName="caption",Vt.propTypes={classes:O.string,align:ot,side:lt},Ut=Vt.tagName,Mt=Vt,qt={extends:Vt.builtInTagName},customElements.get(Ut)||customElements.define(Ut,Mt,qt),Vt});
