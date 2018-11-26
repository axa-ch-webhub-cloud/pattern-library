var StyleGuideWebComponent=function(){"use strict";var e=Object.getOwnPropertySymbols,t=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable;(function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map(function(e){return t[e]}).join(""))return!1;var o={};return"abcdefghijklmnopqrst".split("").forEach(function(e){o[e]=e}),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},o)).join("")}catch(e){return!1}})()&&Object.assign;var o="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},i=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},a=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},l=function e(t,n,o){null===t&&(t=Function.prototype);var r=Object.getOwnPropertyDescriptor(t,n);if(void 0===r){var i=Object.getPrototypeOf(t);return null===i?void 0:e(i,n,o)}if("value"in r)return r.value;var a=r.get;return void 0!==a?a.call(o):void 0},c=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)},u=function(e,t){var n={};for(var o in e)t.indexOf(o)>=0||Object.prototype.hasOwnProperty.call(e,o)&&(n[o]=e[o]);return n},p=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},d=function e(t,n,o,r){var i=Object.getOwnPropertyDescriptor(t,n);if(void 0===i){var a=Object.getPrototypeOf(t);null!==a&&e(a,n,o,r)}else if("value"in i&&i.writable)i.value=o;else{var s=i.set;void 0!==s&&s.call(r,o)}return o},h=function(){return function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var n=[],o=!0,r=!1,i=void 0;try{for(var a,s=e[Symbol.iterator]();!(o=(a=s.next()).done)&&(n.push(a.value),!t||n.length!==t);o=!0);}catch(e){r=!0,i=e}finally{try{!o&&s.return&&s.return()}finally{if(r)throw i}}return n}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),f=function(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)};function y(){}var v,_=0;function b(e,t){var n=e[t];return"function"==typeof n&&(e[t]=function(e){function t(){return e.apply(void 0,arguments)}return 0===_&&(_++,Object.keys(e).map(function(n){return t[n]=e[n],n}).reduce(b,t),_--),t}(n)),e}var g=(function(e){e.exports=function(){function e(e,t,n,r,i,a){if(a!==o){var s=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw s.name="Invariant Violation",s}}function t(){return e}e.isRequired=e;var n={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t};return n.checkPropTypes=y,n.PropTypes=n,n}()}(v={exports:{}},v.exports),v.exports);Object.keys(g).reduce(b,g);var m=g.oneOf(["left","center","right"]),k=g.oneOf(["left","right"]);function C(e){function t(t,n,o){return null==t[n]?null:e(t,n,o)}return t.isRequired=e,t}var O=/^[a-z]{2,4}(-([A-Z][a-z]{3}|[0-9]{3}))?(-([A-Z]{2}|[0-9]{3}))?$/;var w=C(function(e,t,n){if(!O.test(e[t]))return new Error("Invalid prop `"+t+"` supplied to `"+n+"`, expected a valid locale.")}),x=(g.oneOf(["top","bottom"]),g.oneOf(["up","down"])),T=g.oneOf(["ok","pending","error","unknown"]),j=g.oneOf(["row","col","rowgroup","colgroup","auto"]),A=g.oneOfType([g.string,g.number]),N={text:A,value:g.any,rowspan:A,colspan:A,scope:j,align:m,dense:g.bool},P={float:k,strong:g.bool,bold:g.bool},E=g.oneOfType([g.string,g.number]),D=g.oneOfType([E,g.shape(s({},N,{sort:x,sortActive:g.bool}))]),R=g.oneOfType([E,g.shape(s({},N,P,{action:g.bool,state:T}))]),S=g.oneOfType([E,g.shape(s({},N,P))]),I=g.oneOfType([g.arrayOf(D),g.shape({cells:g.arrayOf(D)})]),M=g.oneOfType([g.arrayOf(R),g.shape({cells:g.arrayOf(R),action:g.bool})]),L=g.oneOfType([g.arrayOf(S),g.shape({cells:g.arrayOf(S)})]);g.oneOfType([I,g.arrayOf(I)]),g.oneOfType([M,g.arrayOf(M)]),g.oneOfType([L,g.arrayOf(L)]);C(function(e,t,n){try{new window.URL(e[t],function(){if(document.baseURI)return document.baseURI;var e=document.getElementsByName("base");return e.length&&e[0].href?e[0].href:window.location.href}())}catch(e){return new Error("Invalid prop `"+t+"` supplied to `"+n+"`, expected a valid URL. "+e.message)}return null});var U,V,F,q,Y=function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(e){return t.reduceRight(function(e,t){return t(e)},e)}},B={},K=(U=Object,V=U.getPrototypeOf||function(e){return e.__proto__},F=U.setPrototypeOf||function(e,t){return e.__proto__=t,e},q="object"===("undefined"==typeof Reflect?"undefined":r(Reflect))?Reflect.construct:function(e,t,n){var o,r=[null];return r.push.apply(r,t),o=e.bind.apply(e,r),F(new o,n.prototype)},function(e){var t=V(e);return F(e,F(function(){return q(t,arguments,V(this).constructor)},t))}),$=function(e){return K(function(t){function n(){return i(this,n),p(this,(n.__proto__||Object.getPrototypeOf(n)).apply(this,arguments))}return c(n,e),a(n,[{key:"init",value:function(){var e;this._id=((e=this.nodeName)in B||(B[e]=0),++B[e]),this._initialised=!0}},{key:"connectedCallback",value:function(){this._initialised||this.init()}},{key:"attributeChangedCallback",value:function(){this._initialised||this.init()}}],[{key:"uuidv4",value:function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(e){var t=16*Math.random()|0;return("x"==e?t:3&t|8).toString(16)})}}]),n}())},z={},H=function(){try{var e=new window.CustomEvent("test",{cancelable:!0});if(e.preventDefault(),!0!==e.defaultPrevented)throw new Error("Could not prevent default");return window.CustomEvent}catch(e){}return t;function t(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.bubbles,o=void 0!==n&&n,r=t.cancelable,i=void 0!==r&&r,a=t.detail,s=void 0===a?void 0:a,l=document.createEvent("CustomEvent");l.initCustomEvent(e,o,i,s);var c=l.preventDefault;return l.preventDefault=function(){c.call(l);try{Object.defineProperty(this,"defaultPrevented",{get:function(){return!0}})}catch(e){this.defaultPrevented=!0}},l}}();function W(e,t,n){var o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},r=new H(t,s({},o,{detail:n}));return e.dispatchEvent(r)}var Z=function(){var e=!1;if("undefined"!=typeof window&&"function"==typeof window.addEventListener){var t=Object.defineProperty({},"passive",{get:function(){e=!0}}),n=function(){};window.addEventListener("testPassiveEventSupport",n,t),window.removeEventListener("testPassiveEventSupport",n,t)}return e}();function G(e){for(var t=e.className,n=!1,o=!0,r=arguments.length,i=Array(r>1?r-1:0),a=1;a<r;a++)i[a-1]=arguments[a];var s=i.map(function(e){var r=(i=e,new RegExp("^"+i+"$|^"+i+"\\s|\\s"+i+"\\s|\\s"+i+"$",a)).test(t);var i,a;r?n=!0:o=!1;return{className:e,hasClass:r}});return!(!o&&!n)&&s}var J=/\s+/,X={transitionend:function(){for(var e=document.createElement("div").style,t={transition:"transitionend",OTransition:"oTransitionEnd otransitionend",MozTransition:"transitionend",WebkitTransition:"webkitTransitionEnd"},n=Object.keys(t),o=n.length,r=void 0,i=0;i<o;++i)if(void 0!==e[r=n[i]])return t[r];return""}()};function Q(e,t,n,o){var i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{},a=i.capture,s=void 0!==a&&a,l=i.passive,c=void 0===l||l;if(X[t]&&(t=X[t]),!e||!t)return null;var u=void 0===n?"undefined":r(n),p=n&&"string"===u;if("function"===u){if(o){var d=o;s=d.capture,c=d.passive}o=n}for(var h=Z?{capture:s,passive:c}:s,f=p?function(t){var r=t.target;for(;!G(r,n)&&r!==e;)r=r.parentNode;if(r!==e)return o(t,r)}:o,y=t.split(J),v=y.length,_=0;_<v;++_)e.addEventListener(y[_],f,h);return function t(){for(var n=0;n<v;++n)e.removeEventListener(y[n],f,h);!function(e,t){if(!e)return!1;for(var n=Object.keys(e),o=n.length,r=0;r<o;++r){var i=n[r];if(e[i]===t)return delete e[i]}}(this,t)}}function ee(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},o=n.leading,r=void 0!==o&&o,i=n.trailing,a=void 0===i||i,s=n.maxWait,l=void 0!==s&&s,c=void 0,u=void 0,p=void 0,d=void 0,h=!1,y=t!==l,v=!1!==l;function _(){for(var n=arguments.length,o=Array(n),i=0;i<n;i++)o[i]=arguments[i];return c=o,y&&(u&&clearTimeout(u),u=setTimeout(b,t)),v&&!p&&(p=setTimeout(g,l)),r&&!h&&(h=!0,d=e.apply(void 0,f(c))),d}return _.flush=function(){(u||p)&&(d=e.apply(void 0,f(c)));return k(),d},_.cancel=k,_;function b(){p&&clearTimeout(p),m()}function g(){u&&clearTimeout(u),m()}function m(){a&&(d=e.apply(void 0,f(c))),u=null,p=null,h=!1}function k(){u&&(clearTimeout(u),u=null),p&&(clearTimeout(p),p=null),c=void 0,h=!1}}window.__subscriptions=window.__subscriptions||{};var te=window.__subscriptions;function ne(e,t){var n=Q(arguments.length>2&&void 0!==arguments[2]?arguments[2]:document,e,t);te[e]||(te[e]={count:0});var o,r=te[e];return r.count++,r.onsubscribe||(r.onsubscribe=ee((o=e,function(){W(document,"pubsub/onsubscribe",o),W(document,"pubsub/onsubscribe/"+o,o),te[o]&&delete te[o].unsubscribe}),100)),r.onsubscribe(),function(){r.count--,n.call(this),r.count<=0&&delete te[e]}}Q(document,"pubsub/onsubscribe",function(e){var t=e.detail;te[t]||(te[t]={count:0});var n=te[t],o=n.queue;Array.isArray(o)&&(o.forEach(function(e){var t=h(e,3),n=t[0],o=t[1],r=t[2];W(r,n,o)}),delete n.queue)});var oe,re=function(e,t){return e===t},ie=((oe=function(){var e;return(e=console).log.apply(e,arguments)},function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:re;return function(){for(var t=arguments.length,n=Array(t),o=0;o<t;o++)n[o]=arguments[o];return function(){for(var t=arguments.length,o=Array(t),r=0;r<t;r++)o[r]=arguments[r];return function(){return e.apply(void 0,[].concat(n,o))?oe.apply(void 0,arguments):void 0}}}})()(!0),[]);var ae=1,se=3,le=8;function ce(e,t){var n=e.nodeType,o=e.nodeName;n===ae&&function(e,t){for(var n=t.skipChildren&&t.skipChildren(),o=t.constructor.observedAttributes,r=o&&Array.isArray(o)&&o.length,i=function(e){return n&&r&&-1===o.indexOf(e)},a=t.attributes,s=e.attributes,l=null,c=null,u=null,p=null,d=s.length-1;d>=0;--d)if(p=s[d],u=p.name,l=p.namespaceURI,c=p.value,!i(u))if(l){var h=p.localName;t.getAttributeNS(l,h||u)!==c&&t.setAttributeNS(l,u,c)}else t.hasAttribute(u)?t.getAttribute(u)!==c&&("null"===c||"undefined"===c?t.removeAttribute(u):t.setAttribute(u,c)):t.setAttribute(u,c);for(var f=a.length-1;f>=0;--f)if(!1!==(p=a[f]).specified){if(u=p.name,l=p.namespaceURI,i(u))continue;l?(u=p.localName||u,e.hasAttributeNS(l,u)||t.removeAttributeNS(l,u)):e.hasAttributeNS(null,u)||t.removeAttribute(u)}}(e,t),n!==se&&n!==le||t.nodeValue===e.nodeValue||(t.nodeValue=e.nodeValue),"INPUT"===o?function(e,t){var n=e.value,o=t.value;ue(e,t,"checked"),ue(e,t,"disabled"),n!==o&&(t.setAttribute("value",n),t.value=n);"null"===n&&(t.value="",t.removeAttribute("value"));e.hasAttributeNS(null,"value")?"range"===t.type&&(t.value=n):t.removeAttribute("value")}(e,t):"OPTION"===o?ue(e,t,"selected"):"TEXTAREA"===o&&function(e,t){var n=e.value;n!==t.value&&(t.value=n);if(t.firstChild&&t.firstChild.nodeValue!==n){if(""===n&&t.firstChild.nodeValue===t.placeholder)return;t.firstChild.nodeValue=n}}(e,t)}function ue(e,t,n){e[n]!==t[n]&&(t[n]=e[n],e[n]?t.setAttribute(n,""):t.removeAttribute(n))}var pe=3;function de(e,t){return t?e?e.isSameNode&&e.isSameNode(t)?t:e.tagName!==t.tagName?e:(ce(e,t),t.skipChildren&&t.skipChildren()||function(e,t){for(var n=void 0,o=void 0,r=void 0,i=void 0,a=0,s=0;n=t.childNodes[s],o=e.childNodes[s-a],n||o;s++)if(o)if(n)if(he(o,n))(r=de(o,n))!==n&&(t.replaceChild(r,n),a++);else{i=null;for(var l=s;l<t.childNodes.length;l++)if(he(t.childNodes[l],o)){i=t.childNodes[l];break}i?((r=de(o,i))!==i&&a++,t.insertBefore(r,n)):o.id||n.id?(t.insertBefore(o,n),a++):(r=de(o,n))!==n&&(t.replaceChild(r,n),a++)}else t.appendChild(o),a++;else t.removeChild(n),s--}(e,t),t):null:e}function he(e,t){return e.id?e.id===t.id:e.isSameNode?e.isSameNode(t):e.tagName===t.tagName&&(e.type===pe&&e.nodeValue===t.nodeValue)}var fe,ye,ve,_e,be=(fe=Object,ye=fe.getPrototypeOf||function(e){return e.__proto__},ve=fe.setPrototypeOf||function(e,t){return e.__proto__=t,e},_e="object"===("undefined"==typeof Reflect?"undefined":r(Reflect))?Reflect.construct:function(e,t,n){var o,r=[null];return r.push.apply(r,t),o=e.bind.apply(e,r),ve(new o,n.prototype)},function(e){var t=ye(e);return ve(e,ve(function(){return _e(t,arguments,ye(this).constructor)},t))})(function(e){function t(e){var n;i(this,t);for(var o="\n    Web Component "+e.nodeName+"%c#"+e._id+" does not accept string as a return from a template. Maybe use bel?}",r=arguments.length,a=Array(r>1?r-1:0),s=1;s<r;s++)a[s-1]=arguments[s];var l=p(this,(n=t.__proto__||Object.getPrototypeOf(t)).call.apply(n,[this,o].concat(a)));return Error.captureStackTrace&&Error.captureStackTrace(l,t),l.name="TemplateNoStringReturnException",l}return c(t,e),t}(Error)),ge=!!document.createDocumentFragment().children,me=/[A-Z]/g;function ke(e){return e.replace(me,Ce)}function Ce(e,t,n){var o=e.toLowerCase(),r=n.charAt(t+1);return 0===t||r.toUpperCase()===r?o:"-"+o}var Oe=/^\s*(?:true|false|null|undefined|-?[0-9]+\.?[0-9]*|[[{](?:.|[\s])*[\]}])\s*$/;function we(e,t,n){var o=e;if(n)return function(e,t,n){var o=e;switch(n){case g.string:case g.string.isRequired:return e;case g.bool:case g.bool.isRequired:if(!e||t===e)return!0;case g.number:case g.number.isRequired:case g.object:case g.object.isRequired:case g.array:case g.array.isRequired:default:if(Oe.test(e))try{o=JSON.parse(e)}catch(n){console.error("Attribute "+t+" has an error:\n"+n+"\n",e)}}return o}(e,t,n);if(e&&t!==e){if(Oe.test(e))try{o=JSON.parse(e)}catch(n){console.error("Attribute "+t+" has an error:\n"+n+"\n",e)}}else o=!0;return o}var xe=/(?:^\w|[A-Z]|\b\w|\s+|[-_]+)/g,Te=/[-_]+/g;function je(e){return e.replace(xe,Ae)}function Ae(e,t){return 0==+e||Te.test(e)?"":0===t?e.toLowerCase():e.toUpperCase()}function Ne(e,t,n){var o=1===e.nodeType,r=e.constructor.propTypes,i=n;!n&&o&&(i=(void 0===r?{}:r)[je(t)]);if(o&&!e.hasAttribute(t))return i!==g.bool&&i!==g.bool.isRequired&&void 0;var a=e.value;return t?a=e.getAttribute(t):t=e.name,a=we(a,t,i)}var Pe=/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream;function Ee(e,t,n){var o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},r=o.capture,i=void 0===r||r,a=o.passive,s=void 0===a||a,l=e.ownerDocument.documentElement,c=Q(l,t,function(t){var o=t.target;if(!e.contains(o)&&e!==o)return n(t)},{capture:i,passive:s});return Pe&&(l.style.cursor="pointer"),c}var De=function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];for(var o=t.length,r={},i=0;i<o;++i){var a=t[i];r[a.toUpperCase()]=a}return r}("click","change","keyup","enter","move","leave","Escape","Esc","touchstart","touchmove","touchend","input","resize"),Re="axa-change",Se="data-prevent-default";((function(){function e(t){var n=this,o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};i(this,e),this._handleClick=function(e,t){n.shouldPreventDefault(t||e.currentTarget)&&e.preventDefault();var o=!n._lastToggleNode,r=t!==n._lastToggleNode,i=!o&&!r;o?(n._notify(De.ENTER,t),n._onInteractive()):r&&n._notify(De.MOVE,t,n._lastToggleNode),n._lastToggleNode=t,i&&n._options.sameClickClose&&n._close()},this._handleClose=function(e,t){n.shouldPreventDefault(t||e.currentTarget)&&e.preventDefault(),n._close()},this._handleKeyUp=function(e){(e.key===De.ESCAPE||e.key===De.ESC||27===e.keyCode)&&(e.preventDefault(),n._close())},this._init(t,o)}return a(e,[{key:"_init",value:function(t,n){t&&(this._wcNode=t),n&&(this._options=s({},e.DEFAULTS,n));var o=this._options.containerClass;this._container=o?this._wcNode.querySelector(o):this._wcNode,this._on()}},{key:"_on",value:function(){this._off(),this._unClick=Q(this._container,De.CLICK,this._options.toggleClass,this._handleClick,{passive:!this._options.preventDefault})}},{key:"_off",value:function(){this._unClick&&this._unClick(),this._offInteractive()}},{key:"_onInteractive",value:function(){this._offInteractive(),this._options.closeClass&&(this._unCloseClick=Q(this._container,De.CLICK,this._options.closeClass,this._handleClose,{passive:!this._options.preventDefault})),this._options.outerClose&&(this._unOuterClick=Ee(this._container,De.CLICK,this._handleClose,{passive:!this._options.preventDefault})),this._options.escapeClose&&(this._unCloseEscape=Q(this._container.ownerDocument,De.KEYUP,this._handleKeyUp,{passive:!1}))}},{key:"shouldPreventDefault",value:function(e){return e.hasAttribute(Se)?Ne(e,Se):this._options.preventDefault}},{key:"_offInteractive",value:function(){this._unOuterClick&&this._unOuterClick(),this._unCloseClick&&this._unCloseClick(),this._unCloseEscape&&this._unCloseEscape(),this.deleteLastToggleNode()}},{key:"_close",value:function(){this._lastToggleNode&&(this._notify(De.LEAVE,this._lastToggleNode),this._offInteractive(),this.deleteLastToggleNode())}},{key:"_notify",value:function(e,t,n){e in this&&"function"==typeof this[e]&&this[e](t,n)}},{key:"enter",value:function(e){throw new Error("UiEvent.enter method not overwritten")}},{key:"move",value:function(e,t){}},{key:"leave",value:function(e){throw new Error("UiEvent.leave method not overwritten")}},{key:"destroy",value:function(){this._off(),delete this._wcNode,delete this._options}},{key:"deleteLastToggleNode",value:function(){delete this._lastToggleNode}},{key:"lastToggleNode",get:function(){return this._lastToggleNode}}]),e})()).DEFAULTS={containerClass:".js-ui-container",toggleClass:"js-ui-toggle",closeClass:"js-ui-close",escapeClose:!0,outerClose:!0,sameClickClose:!0,preventDefault:!0};var Ie=Y(function(e){return function(t){function n(){var e,t,o;i(this,n);for(var r=arguments.length,a=Array(r),s=0;s<r;s++)a[s]=arguments[s];return t=o=p(this,(e=n.__proto__||Object.getPrototypeOf(n)).call.apply(e,[this].concat(a))),o._makeContextReady=function(){var e=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}).detail;o.contextNode&&(clearTimeout(o.timeoutId),o.timeoutId=setTimeout(function(){o.contextCallback(o.contextNode,e)},10)),o.unContextEnabled&&o.unContextEnabled(),o.unContextEnabled=ne("context/available",o._makeContextReady)},p(o,t)}return c(n,e),a(n,[{key:"connectedCallback",value:function(){l(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"connectedCallback",this)&&l(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"connectedCallback",this).call(this),this.contextCallback&&this._makeContextReady()}},{key:"disconnectedCallback",value:function(){l(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"disconnectedCallback",this)&&l(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"disconnectedCallback",this).call(this),this.unContextEnabled&&this.unContextEnabled()}},{key:"provideContext",value:function(){var e=this.nodeName.toLowerCase();this.__isContext=!0,this.__contextName=e,function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:document;te[e]||(te[e]={count:0,queue:[]});var o=te[e].queue;Array.isArray(o)?o.push([e,t,n]):W(n,e,t)}("context/available",e)}},{key:"consumeContext",value:function(e){this.__consumedContext=e&&e.toLowerCase()}},{key:"contextNode",get:function(){for(var e=this.__consumedContext,t=this.parentNode;t&&(!t.__isContext||e&&e!==t.__contextName);)t=t.parentNode;return!(!t||!t.__isContext)&&t}}]),n}()},function(e){return function(t){function n(){return i(this,n),p(this,(n.__proto__||Object.getPrototypeOf(n)).apply(this,arguments))}return c(n,e),a(n,[{key:"appendChild",value:function(e){!this._isMorphing&&this._hasTemplate&&this._hasRendered?(this._lightDOMRefs.push(e),this.render()):l(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"appendChild",this).call(this,e)}},{key:"innerText",set:function(e){if(this._hasTemplate&&this._hasRendered){var t=document.createTextNode(e);this._lightDOMRefs=[t],this.render()}else d(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"innerText",e,this)}},{key:"textContent",set:function(e){if(this._hasTemplate&&this._hasRendered){var t=document.createTextNode(e);this._lightDOMRefs=[t],this.render()}else d(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"textContent",e,this)}},{key:"innerHTML",set:function(e){if(this._hasTemplate&&this._hasRendered){var t=document.createElement("div");t.innerHTML=e,this._lightDOMRefs=Array.from(t.children),this.render()}else d(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"innerHTML",e,this)}}]),n}()},function(e){return function(t){function n(){var e,t,o;i(this,n);for(var r=arguments.length,a=Array(r),s=0;s<r;s++)a[s]=arguments[s];return t=o=p(this,(e=n.__proto__||Object.getPrototypeOf(n)).call.apply(e,[this].concat(a))),o._reduceProps=function(e,t){var n=e.props,r=e.shouldUpdate,i="_"+t,a=n[t],s=o[i];return r||o.shouldUpdateCallback(a,s)?(o.props[t]=a,{props:n,shouldUpdate:!0}):{props:n,shouldUpdate:!1}},p(o,t)}return c(n,e),a(n,[{key:"init",value:function(e){var t=this;l(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"init",this).call(this,e),this._isConnected=!1,this.props={},this.updatedDebounced=ee(function(){return t.updated&&t.updated()},50);var o=this.constructor.observedAttributes;Array.isArray(o)&&o.forEach(function(e){je(e)})}},{key:"connectedCallback",value:function(){var e=this;if(l(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"connectedCallback",this)&&l(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"connectedCallback",this).call(this),!this._isConnected){this._isConnected=!0;var t=this.constructor.observedAttributes;if(this.initialClassName=this.className,Array.isArray(t)){var o=this.constructor.propTypes;t.forEach(function(t){var n=je(t);if(e.hasAttribute(t)){var r=Ne(e,t,o[n]);e.props[n]=r}}),this.checkPropTypes()}}this.updated&&this.updated()}},{key:"attributeChangedCallback",value:function(e,t,o){if(l(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"attributeChangedCallback",this)&&l(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"attributeChangedCallback",this).call(this,e,t,o),this.shouldUpdateCallback(o,t)){var r=je(e);if(this.hasAttribute(e)){var i=this.constructor.propTypes;this.props[r]=we(o,e,i[r])}else this.props[r]=null;this.checkPropTypes(),"value"===e&&null!==o&&W(this,Re,o,{bubbles:!0,cancelable:!0,composed:!0}),this.updatedDebounced()}}},{key:"setProps",value:function(e){var t=this.constructor.observedAttributes,n=void 0===t?[]:t,o=Object.keys(e).filter(function(e){return n.indexOf(ke(e))>-1}).reduce(this._reduceProps,{props:e,shouldUpdate:!1}).shouldUpdate;this.checkPropTypes(),o&&this._isConnected&&this.updated&&this.updated()}},{key:"checkPropTypes",value:function(){var e=this.constructor,t=e.propTypes,n=e.tagName;t&&g.checkPropTypes(t,this.props,"prop",n)}},{key:"shouldUpdateCallback",value:function(e,t){return e!==t}},{key:"disconnectedCallback",value:function(){this._isConnected=!1}}],[{key:"observedAttributes",get:function(){var e=this.propTypes;return e&&Object.keys(e).map(ke)}}]),n}()},function(e){return function(t){function n(){return i(this,n),p(this,(n.__proto__||Object.getPrototypeOf(n)).apply(this,arguments))}return c(n,e),a(n,[{key:"init",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.template,o=u(e,["template"]);l(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"init",this).call(this,o),this._template=t,this._hasTemplate=!!t,this._hasRendered=!1,this.updated=this.render}},{key:"render",value:function(){var e=this,t=!this._hasRendered;if(this.willRenderCallback(t),this._hasTemplate){var o=this._template;try{if(t){for(var i=document.createDocumentFragment(),a=[];this.firstChild;)a.push(this.firstChild),i.appendChild(this.firstChild);this._lightDOMRefs=a,this.childrenFragment=i}else this._lightDOMRefs.forEach(function(t){var n=t.cloneNode(!0);e.childrenFragment.appendChild(n)});ge||(this.childrenFragment.children=Array.from(this.childrenFragment.childNodes).filter(function(e){return 1===e.nodeType}));var s=o(this.props,this.childrenFragment,this),c=document.createDocumentFragment();if(Array.isArray(s))s.forEach(function(e){c.appendChild(e)});else if(s){if("string"==typeof s)throw new be(this);c.appendChild(s)}if(t)l(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"appendChild",this).call(this,c);else{var u=this.cloneNode(!1);u._isMorphing=!0,u.appendChild(c),this._isMorphing=!0,function(e,t){if("object"!==(void 0===e?"undefined":r(e)))throw new Error("componentMorph: oldTree should be an object");if("object"!==(void 0===t?"undefined":r(t)))throw new Error("componentMorph: newTree should be an object");de(t,e)}(this,u),function(){for(var e=void 0;e=ie.pop();)delete e.isSameNode;ie=[]}(),this._isMorphing=!1}}catch(e){console.error(e)}}this._hasRendered=!0,this.didRenderCallback(t)}},{key:"skipChildren",value:function(){return!this._isMorphing}},{key:"willRenderCallback",value:function(e){}},{key:"didRenderCallback",value:function(e){}}]),n}()},function(e){return function(t){function n(){return i(this,n),p(this,(n.__proto__||Object.getPrototypeOf(n)).apply(this,arguments))}return c(n,e),a(n,[{key:"init",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.styles,o=void 0===t?"":t,r=u(e,["styles"]);l(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"init",this).call(this,r),this._styles=o}},{key:"connectedCallback",value:function(){l(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"connectedCallback",this)&&l(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"connectedCallback",this).call(this),this._appendStyles()}},{key:"_appendStyles",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this;if(this._styles){var t=document.createElement("style"),n=document.createTextNode(this._styles);t.appendChild(n),e.insertAdjacentElement?e.insertAdjacentElement("afterbegin",t):e.appendChild(t)}}}]),n}()}),Me=(Y(Ie,$),Y(Ie,function(e){return function(t){function n(){var e,t,o;i(this,n);for(var r=arguments.length,a=Array(r),s=0;s<r;s++)a[s]=arguments[s];return t=o=p(this,(e=n.__proto__||Object.getPrototypeOf(n)).call.apply(e,[this].concat(a))),o._appendStyles=function(){n.appendGlobalStyles(o._styles,o.nodeName)},p(o,t)}return c(n,e),a(n,null,[{key:"appendGlobalStyles",value:function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:e.uuidv4();if(t&&!z[n]){var o=document.createElement("style"),r=document.createTextNode(t);z[n]=!0,o.appendChild(r),o.setAttribute("data-c-name",n.toLowerCase()),document.head.appendChild(o)}}}]),n}()},$)(HTMLElement));var Le=/\n[\s]+$/,Ue=/^\n[\s]+/,Ve=/[\s]+$/,Fe=/^[\s]+/,qe=/[\n\s]+/g,Ye=["a","abbr","b","bdi","bdo","br","cite","data","dfn","em","i","kbd","mark","q","rp","rt","rtc","ruby","s","amp","small","span","strong","sub","sup","time","u","var","wbr"],Be=["code","pre","textarea"],Ke=function e(t,n){if(Array.isArray(n))for(var o,r,i=t.nodeName.toLowerCase(),a=!1,s=0,l=n.length;s<l;s++){var c=n[s];if(Array.isArray(c))e(t,c);else{("number"==typeof c||"boolean"==typeof c||"function"==typeof c||c instanceof Date||c instanceof RegExp)&&(c=c.toString());var u=t.childNodes[t.childNodes.length-1];if("string"==typeof c)a=!0,u&&"#text"===u.nodeName?u.nodeValue+=c:(c=document.createTextNode(c),t.appendChild(c),u=c),s===l-1&&(a=!1,-1===Ye.indexOf(i)&&-1===Be.indexOf(i)?""===(o=u.nodeValue.replace(Ue,"").replace(Ve,"").replace(Le,"").replace(qe," "))?t.removeChild(u):u.nodeValue=o:-1===Be.indexOf(i)&&(r=0===s?"":" ",o=u.nodeValue.replace(Ue,r).replace(Fe," ").replace(Ve,"").replace(Le,"").replace(qe," "),u.nodeValue=o));else if(c&&c.nodeType){a&&(a=!1,-1===Ye.indexOf(i)&&-1===Be.indexOf(i)?""===(o=u.nodeValue.replace(Ue,"").replace(Le,"").replace(qe," "))?t.removeChild(u):u.nodeValue=o:-1===Be.indexOf(i)&&(o=u.nodeValue.replace(Fe," ").replace(Ue,"").replace(Le,"").replace(qe," "),u.nodeValue=o));var p=c.nodeName;p&&(i=p.toLowerCase()),t.appendChild(c)}}}},$e=function(e,t,n){var o,r;return(o=document.createElement("div")).setAttribute("class","m-datepicker-body js-datepicker-body"),Ke(o,["\n    ",(r=n.datepickerBody.store,r?r.getCells():[]).map(function(e,t){var n;return(n=document.createElement("button")).setAttribute("data-index",""+String(t)),n.setAttribute("class",""+String(e.getClasses())),Ke(n,[e.getText()]),n}),"\n  "]),o},ze=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,o=arguments.length>2&&void 0!==arguments[2]&&arguments[2];i(this,e),this.text=t,this.index=n,this.isToday=o}return a(e,[{key:"getClasses",value:function(){return e.classes}},{key:"getIndex",value:function(){return this.index}},{key:"getText",value:function(){return this.text}},{key:"getIsToday",value:function(){return this.isToday}}]),e}();ze.classes="m-datepicker-body__cell js-datepicker__calender-body__cell";var He=function(e){function t(){return i(this,t),p(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return c(t,ze),a(t,[{key:"getClasses",value:function(){return l(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"getClasses",this).call(this)+" "+t.classes}}]),t}();He.classes="m-datepicker-body__not-current-month";var We=function(e){function t(){return i(this,t),p(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return c(t,ze),a(t,[{key:"getClasses",value:function(){return l(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"getClasses",this).call(this)+" "+t.classes}}]),t}();We.classes="m-datepicker-body__not-current-month";var Ze=function(e){function t(){return i(this,t),p(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return c(t,ze),a(t,[{key:"getClasses",value:function(){return l(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"getClasses",this).call(this)+" "+t.classes}}]),t}();Ze.classes="m-datepicker-body__current-month";var Ge=function(e){function t(){return i(this,t),p(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return c(t,Ze),a(t,[{key:"getClasses",value:function(){return l(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"getClasses",this).call(this)+" "+t.classes}}]),t}();Ge.classes="m-datepicker-body__today";var Je=function(e){function t(){return i(this,t),p(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return c(t,Ze),a(t,[{key:"getClasses",value:function(){return l(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"getClasses",this).call(this)+" "+t.classes}}]),t}();Je.classes="m-datepicker-body__selected-day";var Xe,Qe,et,tt=function(){function e(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:(new Date).getFullYear(),o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:(new Date).getMonth(),r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;i(this,e),this.cells=[],this.today=new Date,this.init(t,n,o,r)}return a(e,[{key:"init",value:function(e,t,n,o){var r=new Date(t,n,1),i=new Date(t,n+1,0).getDate(),a=new Date(t,n,0),s=new Date(t,n+1,1),l=function(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"en-uk",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:new Date,n=new Date,o=n.getDay(),r=n.getDate(),i=t.toLocaleString(e,{weekday:"long"}),a=null,s=new Date(n.getFullYear(),n.getMonth()+1,0).getDate();1!==o;)r<s?r+=1:(r=1,n.setMonth(n.getMonth()+1)),n.setDate(r),o=n.getDay();return[].concat(f(Array(7).keys())).forEach(function(t){n.setDate(r+t),i===n.toLocaleString(e,{weekday:"long"})&&(a=t)}),a}(e,r),c=this.today.getFullYear(),u=this.today.getMonth(),p=o||this.today.getDate();this.cells=[].concat(f(Array(42).keys())).map(function(e){if(e<l){var r=a.getDate()-(l-1-e);return new We(r,e)}var d=new Date(t,n,e+1-l),h=d.getTime(),f=new Date(c,u,p).getTime();return o&&d.getDate()===p&&e-l<i?new Ge(e-l+1,e,!0):h===f&&e-l<p?new Ge(e-l+1,e,!0):e-l<i?new Ze(e-l+1,e):new He(s.getDate()+(e-i-l),e)})}},{key:"setCell",value:function(e,t){this.cells[e]=t}},{key:"getCell",value:function(e){return this.cells[e]}},{key:"getCells",value:function(){return this.cells}}]),e}(),nt=function(){function e(t){var n=this;i(this,e),this.handleClick=function(e){e.preventDefault(),e.stopPropagation(),n.selected=null;var t=+e.target.dataset.index;if(t||0===t){var o=n._store.getCell(t);o instanceof He?(n.updateDate(n.date.getMonth()+1),n.cleanupValueIndex()):o instanceof We?(n.updateDate(n.date.getMonth()-1),n.cleanupValueIndex()):(n.wcNode.setAttribute("value",o.getText()),n.wcNode.setAttribute("index",t))}},this.wcNode=t,this.selected=null,this.date=new Date}return a(e,[{key:"init",value:function(e,t,n,o,r,i){this._store=new tt(t,n,o,r),this.selected=null,this.prepareCells(e),this.listenToCells(),this.index=e,this.allowedYears=i,this.locale=t,(o||0===o)&&this.date.setMonth(o),n&&this.date.setFullYear(n)}},{key:"prepareCells",value:function(e){if(this.selected&&!e){var t=new Je(this.selected.getText(),this.selected.getIndex(),this.selected.getIsToday());this._store.setCell(this.selected.getIndex(),t)}if(e||0===e){var n=this._store.getCell(e);n instanceof Ze&&this.handleCurrentMonth(e,n)}}},{key:"listenToCells",value:function(){this.offClicks(),this.unClickEnd=Q(this.wcNode,De.CLICK,"js-datepicker-body",this.handleClick,{capture:!0,passive:!1})}},{key:"offClicks",value:function(){this.unClickEnd&&this.unClickEnd()}},{key:"cleanupValueIndex",value:function(){this.wcNode.removeAttribute("index"),this.wcNode.removeAttribute("value")}},{key:"handleCurrentMonth",value:function(e,t){if(null!==this.selected){var n=this.selected.getIndex(),o=this.selected.getIsToday(),r=this.selected.getText(),i=new Ze(r,n,o);this._store.setCell(n,i)}var a=new Je(t.getText(),t.getIndex(),t.getIsToday());this._store.setCell(e,a),this.selected=a,a.isToday||(this._store.cells=this._store.cells.map(function(e){return e instanceof Ge?new Ze(e.getText(),e.getIndex(),!0):e}))}},{key:"updateDate",value:function(e){this.date=new Date(this.date.getFullYear(),this.date.getMonth()),this.date.setMonth(e);var t=this.date.getFullYear();this.allowedYears&&!~this.allowedYears.indexOf(t)||(this.wcNode.setAttribute("year",t),this.wcNode.setAttribute("month",this.date.getMonth()))}},{key:"store",get:function(){return this._store}}]),e}(),ot=function(e){function t(){return i(this,t),p(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return c(t,Me),a(t,[{key:"init",value:function(){l(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"init",this).call(this,{styles:".m-datepicker-body {\n  padding-top: 5px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-flow: row wrap;\n          flex-flow: row wrap;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between; }\n\n.m-datepicker-body__cell {\n  width: 35.28571px;\n  height: 35.28571px;\n  padding-left: 0;\n  padding-right: 0;\n  background-color: transparent;\n  border-radius: 100px;\n  cursor: pointer;\n  border: none; }\n\n.m-datepicker-body__cell:focus {\n  outline: none; }\n\n.m-datepicker-body__not-current-month {\n  color: #ccc; }\n\n.m-datepicker-body__current-month {\n  color: #333; }\n\n.m-datepicker-body__current-month:hover {\n  -webkit-box-shadow: 0 0 0 3px #00008f inset;\n          box-shadow: 0 0 0 3px #00008f inset;\n  background-color: #fff;\n  color: #333;\n  opacity: 0.5; }\n\n.m-datepicker-body__current-month:hover.m-datepicker-body__selected-day,\n.m-datepicker-body__current-month:hover.m-datepicker-body__today {\n  background-color: #00008f;\n  color: #fff;\n  opacity: 1; }\n\n.m-datepicker-body__selected-day,\n.m-datepicker-body__today {\n  background-color: #00008f;\n  color: #fff; }\n",template:$e}),this.datepickerBody=new nt(this)}},{key:"connectedCallback",value:function(){l(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"connectedCallback",this).call(this),this.className=this.initialClassName+" m-datepicker-body"}},{key:"disconnectedCallback",value:function(){l(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"disconnectedCallback",this).call(this)}},{key:"willRenderCallback",value:function(){var e=Ne(this,"month");e=e||0===e?e:void 0;var t=Ne(this,"day");t=t||0===t?t:void 0,this.datepickerBody.init(Ne(this,"index"),Ne(this,"locale"),Ne(this,"year")||void 0,e,t,Ne(this,"allowed-years"))}},{key:"attributeChangedCallback",value:function(e,n,o){l(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"attributeChangedCallback",this).call(this,e,n,o),"month"!==e&&"year"!==e||!this.shouldUpdateCallback(o,n)||null===o||null===n||W(this,Re,null,{bubbles:!0,cancelable:!0,composed:!0})}}]),t}();return ot.tagName="axa-datepicker-body",ot.propTypes={classes:g.string,locale:w,value:g.string,index:g.number,year:g.number,month:g.number,day:g.number,allowedYears:g.arrayOf(g.number)},Xe=ot.tagName,Qe=ot,customElements.get(Xe)||customElements.define(Xe,Qe,et),ot}();
