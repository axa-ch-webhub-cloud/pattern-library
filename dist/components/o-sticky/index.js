var StyleGuideWebComponent=function(e){"use strict";function t(e,t){return e(t={exports:{}},t.exports),t.exports}var n=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,i=Object.prototype.propertyIsEnumerable;(function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map(function(e){return t[e]}).join(""))return!1;var o={};return"abcdefghijklmnopqrst".split("").forEach(function(e){o[e]=e}),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},o)).join("")}catch(e){return!1}})()&&Object.assign;var r="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},c=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},u=function e(t,n,o){null===t&&(t=Function.prototype);var i=Object.getOwnPropertyDescriptor(t,n);if(void 0===i){var r=Object.getPrototypeOf(t);return null===r?void 0:e(r,n,o)}if("value"in i)return i.value;var s=i.get;return void 0!==s?s.call(o):void 0},d=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)},p=function(e,t){var n={};for(var o in e)t.indexOf(o)>=0||Object.prototype.hasOwnProperty.call(e,o)&&(n[o]=e[o]);return n},h=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},f=function e(t,n,o,i){var r=Object.getOwnPropertyDescriptor(t,n);if(void 0===r){var s=Object.getPrototypeOf(t);null!==s&&e(s,n,o,i)}else if("value"in r&&r.writable)r.value=o;else{var a=r.set;void 0!==a&&a.call(i,o)}return o},y=function(){return function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var n=[],o=!0,i=!1,r=void 0;try{for(var s,a=e[Symbol.iterator]();!(o=(s=a.next()).done)&&(n.push(s.value),!t||n.length!==t);o=!0);}catch(e){i=!0,r=e}finally{try{!o&&a.return&&a.return()}finally{if(i)throw r}}return n}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),v=function(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)};function _(){}var b=t(function(e){e.exports=function(){function e(e,t,n,o,i,s){if(s!==r){var a=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw a.name="Invariant Violation",a}}function t(){return e}e.isRequired=e;var n={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t};return n.checkPropTypes=_,n.PropTypes=n,n}()}),g=t(function(e){!function(){var t={}.hasOwnProperty;function n(){for(var e=[],o=0;o<arguments.length;o++){var i=arguments[o];if(i){var r=void 0===i?"undefined":s(i);if("string"===r||"number"===r)e.push(i);else if(Array.isArray(i))e.push(n.apply(null,i));else if("object"===r)for(var a in i)t.call(i,a)&&i[a]&&e.push(a)}}return e.join(" ")}e.exports?e.exports=n:window.classNames=n}()}),m={},k=function(e){return e in m||(m[e]=0),++m[e]},C=function(){try{var e=new window.CustomEvent("test",{cancelable:!0});if(e.preventDefault(),!0!==e.defaultPrevented)throw new Error("Could not prevent default");return window.CustomEvent}catch(e){}return t;function t(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.bubbles,o=void 0!==n&&n,i=t.cancelable,r=void 0!==i&&i,s=t.detail,a=void 0===s?void 0:s,c=document.createEvent("CustomEvent");c.initCustomEvent(e,o,r,a);var l=c.preventDefault;return c.preventDefault=function(){l.call(c);try{Object.defineProperty(this,"defaultPrevented",{get:function(){return!0}})}catch(e){this.defaultPrevented=!0}},c}}();function O(e,t,n){var o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},i=new C(t,l({},o,{detail:n}));return e.dispatchEvent(i)}var x=function(){var e=!1;if("undefined"!=typeof window&&"function"==typeof window.addEventListener){var t=Object.defineProperty({},"passive",{get:function(){e=!0}}),n=function(){};window.addEventListener("testPassiveEventSupport",n,t),window.removeEventListener("testPassiveEventSupport",n,t)}return e}(),w=/^\s+|\s{2,}|\s+$/g;function A(e,t){return new RegExp("^"+e+"$|^"+e+"\\s|\\s"+e+"\\s|\\s"+e+"$",t)}function T(e){for(var t=arguments.length,n=Array(t>1?t-1:0),o=1;o<t;o++)n[o-1]=arguments[o];var i=E.apply(void 0,[e].concat(n));if(!0!==i){var r=[].concat(n);Array.isArray(i)&&(r=i.reduce(N,[])),r&&(e.className+=" "+r.join(" "))}}function N(e,t){var n=t.className;return t.hasClass||e.push(n),e}function E(e){for(var t=e.className,n=!1,o=!0,i=arguments.length,r=Array(i>1?i-1:0),s=1;s<i;s++)r[s-1]=arguments[s];var a=r.map(function(e){var i=A(e).test(t);i?n=!0:o=!1;return{className:e,hasClass:i}});return!(!o&&!n)&&a}function S(e){for(var t=arguments.length,n=Array(t>1?t-1:0),o=1;o<t;o++)n[o-1]=arguments[o];var i=E.apply(void 0,[e].concat(n));if(!1!==i){var r=[].concat(n);if(Array.isArray(i)&&(r=i.reduce(j,[])),r){var s=e.className;e.className=r.reduce(P,s)}}}function j(e,t){var n=t.className;return t.hasClass&&e.push(n),e}function P(e,t){var n=A(t,"g");return e.replace(n," ").replace(w," ")}var D=/\s+/,I={transitionend:function(){for(var e=document.createElement("div").style,t={transition:"transitionend",OTransition:"oTransitionEnd otransitionend",MozTransition:"transitionend",WebkitTransition:"webkitTransitionEnd"},n=Object.keys(t),o=n.length,i=void 0,r=0;r<o;++r)if(void 0!==e[i=n[r]])return t[i];return""}()};function L(e,t,n,o){var i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{},r=i.capture,a=void 0!==r&&r,c=i.passive,l=void 0===c||c;if(I[t]&&(t=I[t]),!e||!t)return null;var u=void 0===n?"undefined":s(n),d=n&&"string"===u;if("function"===u){if(o){var p=o;a=p.capture,l=p.passive}o=n}for(var h=x?{capture:a,passive:l}:a,f=d?function(t){var i=t.target;for(;!E(i,n)&&i!==e;)i=i.parentNode;if(i!==e)return o(t,i)}:o,y=t.split(D),v=y.length,_=0;_<v;++_)e.addEventListener(y[_],f,h);return function t(){for(var n=0;n<v;++n)e.removeEventListener(y[n],f,h);!function(e,t){if(!e)return!1;for(var n=Object.keys(e),o=n.length,i=0;i<o;++i){var r=n[i];if(e[r]===t)return delete e[r]}}(this,t)}}function R(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},o=n.leading,i=void 0!==o&&o,r=n.trailing,s=void 0===r||r,a=n.maxWait,c=void 0!==a&&a,l=void 0,u=void 0,d=void 0,p=void 0,h=!1,f=t!==c,y=!1!==c;function _(){for(var n=arguments.length,o=Array(n),r=0;r<n;r++)o[r]=arguments[r];return l=o,f&&(u&&clearTimeout(u),u=setTimeout(b,t)),y&&!d&&(d=setTimeout(g,c)),i&&!h&&(h=!0,p=e.apply(void 0,v(l))),p}return _.flush=function(){(u||d)&&(p=e.apply(void 0,v(l)));return k(),p},_.cancel=k,_;function b(){d&&clearTimeout(d),m()}function g(){u&&clearTimeout(u),m()}function m(){s&&(p=e.apply(void 0,v(l))),u=null,d=null,h=!1}function k(){u&&(clearTimeout(u),u=null),d&&(clearTimeout(d),d=null),l=void 0,h=!1}}window.__subscriptions=window.__subscriptions||{};var U=window.__subscriptions;function F(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:document;U[e]||(U[e]={count:0,queue:[]});var o=U[e].queue;Array.isArray(o)?o.push([e,t,n]):O(n,e,t)}function M(e,t){var n=L(arguments.length>2&&void 0!==arguments[2]?arguments[2]:document,e,t);U[e]||(U[e]={count:0});var o,i=U[e];return i.count++,i.onsubscribe||(i.onsubscribe=R((o=e,function(){O(document,"pubsub/onsubscribe",o),O(document,"pubsub/onsubscribe/"+o,o),U[o]&&delete U[o].unsubscribe}),100)),i.onsubscribe(),function(){i.count--,n.call(this),i.count<=0&&delete U[e]}}L(document,"pubsub/onsubscribe",function(e){var t=e.detail;U[t]||(U[t]={count:0});var n=U[t],o=n.queue;Array.isArray(o)&&(o.forEach(function(e){var t=y(e,3),n=t[0],o=t[1],i=t[2];O(i,n,o)}),delete n.queue)});var V,z=function(e,t){return e===t},q=((V=function(){var e;return(e=console).log.apply(e,arguments)},function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:z;return function(){for(var t=arguments.length,n=Array(t),o=0;o<t;o++)n[o]=arguments[o];return function(){for(var t=arguments.length,o=Array(t),i=0;i<t;i++)o[i]=arguments[i];return function(){return e.apply(void 0,[].concat(n,o))?V.apply(void 0,arguments):void 0}}}})()(!0),function(e){function t(e,n){var o;a(this,t);for(var i="\n    Native Property >>>"+e+"<<< exists already at "+n.nodeName+"#"+n._id+" and evaluates to -> "+n[e]+".\n    Please consult the HTML spec for inherited DOM properties:\n    - Element Interface https://developer.mozilla.org/en-US/docs/Web/API/Element#Properties\n    - Node Interface https://developer.mozilla.org/en-US/docs/Web/API/Node#Properties",r=arguments.length,s=Array(r>2?r-2:0),c=2;c<r;c++)s[c-2]=arguments[c];var l=h(this,(o=t.__proto__||Object.getPrototypeOf(t)).call.apply(o,[this,i].concat(s)));return Error.captureStackTrace&&Error.captureStackTrace(l,t),l.name="PropertyExistsException",l}return d(t,e),t}(Error)),B=/[A-Z]/g;function K(e){return e.replace(B,W)}function W(e,t,n){var o=e.toLowerCase(),i=n.charAt(t+1);return 0===t||i.toUpperCase()===i?o:"-"+o}var H=/^\s*(?:true|false|null|undefined|-?[0-9]+\.?[0-9]*|[[{](?:.|[\s])*[\]}])\s*$/;function Y(e,t){var n=e;if(e&&t!==e){if(H.test(e))try{n=JSON.parse(e)}catch(n){console.error("Attribute "+t+" has an error:\n"+n+"\n",e)}}else n=!0;return n}var $=/(?:^\w|[A-Z]|\b\w|\s+|[-_]+)/g,X=/[-_]+/g;function G(e){return e.replace($,Z)}function Z(e,t){return 0==+e||X.test(e)?"":0===t?e.toLowerCase():e.toUpperCase()}function J(e,t){if("function"==typeof e.hasAttribute&&!e.hasAttribute(t))return!1;var n=e.value;return t?n=e.getAttribute(t):t=e.name,n=Y(n,t)}function Q(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];for(var o=t.length,i={},r=0;r<o;++r){var s=t[r];i[s.toUpperCase()]=s}return i}var ee=/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream;function te(e,t,n){var o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},i=o.capture,r=void 0===i||i,s=o.passive,a=void 0===s||s,c=e.ownerDocument.documentElement,l=L(c,t,function(t){var o=t.target;if(!e.contains(o)&&e!==o)return n(t)},{capture:r,passive:a});return ee&&(c.style.cursor="pointer"),l}var ne=Q("click","change","keyup","enter","move","leave","Escape","Esc","touchstart","touchmove","touchend","input","resize"),oe="axa-change",ie="data-prevent-default";((function(){function e(t){var n=this,o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};a(this,e),this._handleClick=function(e,t){n.shouldPreventDefault(t||e.currentTarget)&&e.preventDefault();var o=!n._lastToggleNode,i=t!==n._lastToggleNode,r=!o&&!i;o?(n._notify(ne.ENTER,t),n._onInteractive()):i&&n._notify(ne.MOVE,t,n._lastToggleNode),n._lastToggleNode=t,r&&n._options.sameClickClose&&n._close()},this._handleClose=function(e,t){n.shouldPreventDefault(t||e.currentTarget)&&e.preventDefault(),n._close()},this._handleKeyUp=function(e){(e.key===ne.ESCAPE||e.key===ne.ESC||27===e.keyCode)&&(e.preventDefault(),n._close())},this._init(t,o)}return c(e,[{key:"_init",value:function(t,n){t&&(this._wcNode=t),n&&(this._options=l({},e.DEFAULTS,n));var o=this._options.containerClass;this._container=o?this._wcNode.querySelector(o):this._wcNode,this._on()}},{key:"_on",value:function(){this._off(),this._unClick=L(this._container,ne.CLICK,this._options.toggleClass,this._handleClick,{passive:!this._options.preventDefault})}},{key:"_off",value:function(){this._unClick&&this._unClick(),this._offInteractive()}},{key:"_onInteractive",value:function(){this._offInteractive(),this._options.closeClass&&(this._unCloseClick=L(this._container,ne.CLICK,this._options.closeClass,this._handleClose,{passive:!this._options.preventDefault})),this._options.outerClose&&(this._unOuterClick=te(this._container,ne.CLICK,this._handleClose,{passive:!this._options.preventDefault})),this._options.escapeClose&&(this._unCloseEscape=L(this._container.ownerDocument,ne.KEYUP,this._handleKeyUp,{passive:!1}))}},{key:"shouldPreventDefault",value:function(e){return e.hasAttribute(ie)?J(e,ie):this._options.preventDefault}},{key:"_offInteractive",value:function(){this._unOuterClick&&this._unOuterClick(),this._unCloseClick&&this._unCloseClick(),this._unCloseEscape&&this._unCloseEscape(),this.deleteLastToggleNode()}},{key:"_close",value:function(){this._lastToggleNode&&(this._notify(ne.LEAVE,this._lastToggleNode),this._offInteractive(),this.deleteLastToggleNode())}},{key:"_notify",value:function(e,t,n){e in this&&"function"==typeof this[e]&&this[e](t,n)}},{key:"enter",value:function(e){throw new Error("UiEvent.enter method not overwritten")}},{key:"move",value:function(e,t){}},{key:"leave",value:function(e){throw new Error("UiEvent.leave method not overwritten")}},{key:"destroy",value:function(){this._off(),delete this._wcNode,delete this._options}},{key:"deleteLastToggleNode",value:function(){delete this._lastToggleNode}},{key:"lastToggleNode",get:function(){return this._lastToggleNode}}]),e})()).DEFAULTS={containerClass:".js-ui-container",toggleClass:"js-ui-toggle",closeClass:"js-ui-close",escapeClose:!0,outerClose:!0,sameClickClose:!0,preventDefault:!0};var re=["title","checked","disabled"],se=[];var ae=1,ce=3,le=8;function ue(e,t){var n=e.nodeType,o=e.nodeName;n===ae&&function(e,t){for(var n=t.skipChildren&&t.skipChildren(),o=t.constructor.observedAttributes,i=o&&Array.isArray(o)&&o.length,r=function(e){return n&&i&&-1===o.indexOf(e)},s=t.attributes,a=e.attributes,c=null,l=null,u=null,d=null,p=a.length-1;p>=0;--p)if(d=a[p],u=d.name,c=d.namespaceURI,l=d.value,!r(u))if(c){var h=d.localName;t.getAttributeNS(c,h||u)!==l&&t.setAttributeNS(c,u,l)}else t.hasAttribute(u)?t.getAttribute(u)!==l&&("null"===l||"undefined"===l?t.removeAttribute(u):t.setAttribute(u,l)):t.setAttribute(u,l);for(var f=s.length-1;f>=0;--f)if(!1!==(d=s[f]).specified){if(u=d.name,c=d.namespaceURI,r(u))continue;c?(u=d.localName||u,e.hasAttributeNS(c,u)||t.removeAttributeNS(c,u)):e.hasAttributeNS(null,u)||t.removeAttribute(u)}}(e,t),n!==ce&&n!==le||t.nodeValue===e.nodeValue||(t.nodeValue=e.nodeValue),"INPUT"===o?function(e,t){var n=e.value,o=t.value;de(e,t,"checked"),de(e,t,"disabled"),n!==o&&(t.setAttribute("value",n),t.value=n);"null"===n&&(t.value="",t.removeAttribute("value"));e.hasAttributeNS(null,"value")?"range"===t.type&&(t.value=n):t.removeAttribute("value")}(e,t):"OPTION"===o?de(e,t,"selected"):"TEXTAREA"===o&&function(e,t){var n=e.value;n!==t.value&&(t.value=n);if(t.firstChild&&t.firstChild.nodeValue!==n){if(""===n&&t.firstChild.nodeValue===t.placeholder)return;t.firstChild.nodeValue=n}}(e,t)}function de(e,t,n){e[n]!==t[n]&&(t[n]=e[n],e[n]?t.setAttribute(n,""):t.removeAttribute(n))}var pe=3;function he(e,t){return t?e?e.isSameNode&&e.isSameNode(t)?t:e.tagName!==t.tagName?e:(ue(e,t),t.skipChildren&&t.skipChildren()||function(e,t){for(var n=void 0,o=void 0,i=void 0,r=void 0,s=0,a=0;n=t.childNodes[a],o=e.childNodes[a-s],n||o;a++)if(o)if(n)if(fe(o,n))(i=he(o,n))!==n&&(t.replaceChild(i,n),s++);else{r=null;for(var c=a;c<t.childNodes.length;c++)if(fe(t.childNodes[c],o)){r=t.childNodes[c];break}r?((i=he(o,r))!==r&&s++,t.insertBefore(i,n)):o.id||n.id?(t.insertBefore(o,n),s++):(i=he(o,n))!==n&&(t.replaceChild(i,n),s++)}else t.appendChild(o),s++;else t.removeChild(n),a--}(e,t),t):null:e}function fe(e,t){return e.id?e.id===t.id:e.isSameNode?e.isSameNode(t):e.tagName===t.tagName&&(e.type===pe&&e.nodeValue===t.nodeValue)}var ye=function(e){function t(e){var n;a(this,t);for(var o="\n    Web Component "+e.nodeName+"%c#"+e._id+" does not accept string as a return from a template. Maybe use bel?}",i=arguments.length,r=Array(i>1?i-1:0),s=1;s<i;s++)r[s-1]=arguments[s];var c=h(this,(n=t.__proto__||Object.getPrototypeOf(t)).call.apply(n,[this,o].concat(r)));return Error.captureStackTrace&&Error.captureStackTrace(c,t),c.name="TemplateNoStringReturnException",c}return d(t,e),t}(Error),ve=!!document.createDocumentFragment().children;function _e(){return Reflect.construct(HTMLElement,[],this.__proto__.constructor)}Object.setPrototypeOf(_e.prototype,HTMLElement.prototype),Object.setPrototypeOf(_e,HTMLElement);var be=function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(e){return t.reduceRight(function(e,t){return t(e)},e)}}(function(e){return function(t){function n(){var e,t,o;a(this,n);for(var i=arguments.length,r=Array(i),s=0;s<i;s++)r[s]=arguments[s];return t=o=h(this,(e=n.__proto__||Object.getPrototypeOf(n)).call.apply(e,[this].concat(r))),o._makeContextReady=function(){var e=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}).detail;o.contextNode&&(clearTimeout(o.timeoutId),o.timeoutId=setTimeout(function(){o.contextCallback(o.contextNode,e)},10)),o.unContextEnabled&&o.unContextEnabled(),o.unContextEnabled=M("context/available",o._makeContextReady)},h(o,t)}return d(n,e),c(n,[{key:"connectedCallback",value:function(){u(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"connectedCallback",this)&&u(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"connectedCallback",this).call(this),this.contextCallback&&this._makeContextReady()}},{key:"disconnectedCallback",value:function(){u(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"disconnectedCallback",this)&&u(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"disconnectedCallback",this).call(this),this.unContextEnabled&&this.unContextEnabled()}},{key:"provideContext",value:function(){var e=this.nodeName.toLowerCase();this.__isContext=!0,this.__contextName=e,F("context/available",e)}},{key:"consumeContext",value:function(e){this.__consumedContext=e&&e.toLowerCase()}},{key:"contextNode",get:function(){for(var e=this.__consumedContext,t=this.parentNode;t&&(!t.__isContext||e&&e!==t.__contextName);)t=t.parentNode;return!(!t||!t.__isContext)&&t}}]),n}()},function(e){return function(t){function n(){return a(this,n),h(this,(n.__proto__||Object.getPrototypeOf(n)).apply(this,arguments))}return d(n,e),c(n,[{key:"appendChild",value:function(e){!this._isMorphing&&this._hasTemplate&&this._hasRendered?(this._lightDOMRefs.push(e),this.render()):u(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"appendChild",this).call(this,e)}},{key:"innerText",set:function(e){if(this._hasTemplate&&this._hasRendered){var t=document.createTextNode(e);this._lightDOMRefs=[t],this.render()}else f(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"innerText",e,this)}},{key:"textContent",set:function(e){if(this._hasTemplate&&this._hasRendered){var t=document.createTextNode(e);this._lightDOMRefs=[t],this.render()}else f(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"textContent",e,this)}},{key:"innerHTML",set:function(e){if(this._hasTemplate&&this._hasRendered){var t=document.createElement("div");t.innerHTML=e,this._lightDOMRefs=Array.from(t.children),this.render()}else f(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"innerHTML",e,this)}}]),n}()},function(e){return function(t){function n(e){a(this,n);var t=h(this,(n.__proto__||Object.getPrototypeOf(n)).call(this,e));t._reduceProps=function(e,o){var i=e.props,r=e.shouldUpdate,s=t._hasKeys[o];if(-1===re.indexOf(o)&&s)throw new q(o,t);var a="_"+o,c=i[o],l=t[a];return r||t.shouldUpdateCallback(c,l)?(t[a]=c,t._props[o]=c,s&&f(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),o,c,t),{props:i,shouldUpdate:!0}):{props:i,shouldUpdate:!1}},t._isConnected=!1,t._props={},t._hasKeys={},t.updatedDebounced=R(function(){return t.updated&&t.updated()},50);var o=t.constructor.observedAttributes;return Array.isArray(o)&&o.forEach(function(e){var n,o=G(e),i=o in t;if(-1===re.indexOf(o)&&i)throw new q(o,t);t._hasKeys[o]=i,Object.defineProperty(t,o,n={get:function(){return this._props[o]},set:function(e){this.shouldUpdateCallback(this._props[o],e)&&(this._props[o]=e,i&&f(n.__proto__||Object.getPrototypeOf(n),o,e,this),this._isConnected&&this.updatedDebounced())}})}),t}return d(n,e),c(n,null,[{key:"observedAttributes",get:function(){var e=this.propTypes;return e&&Object.keys(e).map(K)}}]),c(n,[{key:"connectedCallback",value:function(){var e=this;if(u(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"connectedCallback",this)&&u(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"connectedCallback",this).call(this),!this._isConnected){this._isConnected=!0;var t=this.constructor.observedAttributes;this.initialClassName=this.className,Array.isArray(t)&&(t.forEach(function(t){var o=G(t);if(e.hasAttribute(t)){var i=J(e,t),r=e._hasKeys[o];e._props[o]=i,r&&f(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),o,i,e)}}),this.checkPropTypes())}this.updated&&this.updated()}},{key:"attributeChangedCallback",value:function(e,t,n){if(this.shouldUpdateCallback(n,t)){var o=G(e);this.hasAttribute(e)?this[o]=Y(n,e):this[o]=null,this.checkPropTypes(),"value"===e&&null!==n&&O(this,oe,n,{bubbles:!0,cancelable:!0,composed:!0})}}},{key:"setProps",value:function(e){var t=this.constructor.observedAttributes,n=void 0===t?[]:t,o=Object.keys(e).filter(function(e){return n.indexOf(K(e))>-1}).reduce(this._reduceProps,{props:e,shouldUpdate:!1}).shouldUpdate;this.checkPropTypes(),o&&this._isConnected&&this.updated&&this.updated()}},{key:"checkPropTypes",value:function(){var e=this.constructor,t=e.propTypes,n=e.tagName;t&&b.checkPropTypes(t,this._props,"prop",n)}},{key:"shouldUpdateCallback",value:function(e,t){return e!==t}},{key:"disconnectedCallback",value:function(){this._isConnected=!1}}]),n}()},function(e){return function(t){function n(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.template,o=p(e,["template"]);a(this,n);var i=h(this,(n.__proto__||Object.getPrototypeOf(n)).call(this,o));return i._template=t,i._hasTemplate=!!t,i._hasRendered=!1,i.updated=i.render,i}return d(n,e),c(n,[{key:"render",value:function(){var e=this,t=!this._hasRendered;if(this.willRenderCallback(t),this._hasTemplate){var o=this._template;try{if(t){for(var i=document.createDocumentFragment(),r=[];this.firstChild;)r.push(this.firstChild),i.appendChild(this.firstChild);this._lightDOMRefs=r,this.childrenFragment=i}else this._lightDOMRefs.forEach(function(t){var n=t.cloneNode(!0);e.childrenFragment.appendChild(n)});ve||(this.childrenFragment.children=Array.from(this.childrenFragment.childNodes).filter(function(e){return 1===e.nodeType}));var a=o(this._props,this.childrenFragment,this),c=document.createDocumentFragment();if(Array.isArray(a))a.forEach(function(e){c.appendChild(e)});else if(a){if("string"==typeof a)throw new ye(this);c.appendChild(a)}if(t)u(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"appendChild",this).call(this,c);else{var l=this.cloneNode(!1);l._isMorphing=!0,l.appendChild(c),this._isMorphing=!0,function(e,t){if("object"!==(void 0===e?"undefined":s(e)))throw new Error("componentMorph: oldTree should be an object");if("object"!==(void 0===t?"undefined":s(t)))throw new Error("componentMorph: newTree should be an object");he(t,e)}(this,l),function(){for(var e=void 0;e=se.pop();)delete e.isSameNode;se=[]}(),this._isMorphing=!1}}catch(e){console.error(e)}}this._hasRendered=!0,this.didRenderCallback(t)}},{key:"skipChildren",value:function(){return!this._isMorphing}},{key:"willRenderCallback",value:function(e){}},{key:"didRenderCallback",value:function(e){}}]),n}()},function(e){return function(t){function n(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.styles,o=void 0===t?"":t,i=p(e,["styles"]);a(this,n);var r=h(this,(n.__proto__||Object.getPrototypeOf(n)).call(this,i));return r._styles=o,r}return d(n,e),c(n,[{key:"connectedCallback",value:function(){u(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"connectedCallback",this)&&u(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"connectedCallback",this).call(this),this._appendStyles()}},{key:"_appendStyles",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this;if(this._styles){var t=document.createElement("style"),n=document.createTextNode(this._styles);t.appendChild(n),e.insertAdjacentElement?e.insertAdjacentElement("afterbegin",t):e.appendChild(t)}}}]),n}()})(function(e){function t(e){a(this,t);var n=h(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n._id=k(n.nodeName),n}return d(t,_e),c(t,null,[{key:"uuidv4",value:function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(e){var t=16*Math.random()|0;return("x"==e?t:3&t|8).toString(16)})}}]),t}()),ge={},me=function(e){function t(){var e,n,o;a(this,t);for(var i=arguments.length,r=Array(i),s=0;s<i;s++)r[s]=arguments[s];return n=o=h(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(r))),o._appendStyles=function(){t.appendGlobalStyles(o._styles,o.nodeName)},h(o,n)}return d(t,be),c(t,null,[{key:"appendGlobalStyles",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:be.uuidv4();if(e&&!ge[t]){var n=document.createElement("style"),o=document.createTextNode(e);ge[t]=!0,n.appendChild(o),n.setAttribute("data-c-name",t.toLowerCase()),document.head.appendChild(n)}}}]),t}();function ke(e,t){customElements.get(e)||customElements.define(e,t)}var Ce=".o-sticky-container {\n  position: relative;\n  display: block; }\n\n.o-sticky-container--debug {\n  background: rgba(255, 255, 0, 0.5); }\n  .o-sticky-container--debug::before {\n    content: ''; }\n  .o-sticky-container--debug.is-sticky-container-active {\n    background: green; }\n    .o-sticky-container--debug.is-sticky-container-active::before {\n      content: 'is-active'; }\n  .o-sticky-container--debug.is-sticky-container-idle::before {\n    content: 'is-idle'; }\n",Oe=".o-sticky {\n  display: block; }\n\n.o-sticky__placeholder {\n  display: block;\n  height: 0; }\n\n.o-sticky__box {\n  display: block; }\n  .is-sticky-sticky > .o-sticky__box {\n    position: fixed;\n    top: 0;\n    z-index: 1020; }\n  .is-sticky-bottom > .o-sticky__box {\n    position: absolute;\n    bottom: 0;\n    z-index: 1020; }\n  .is-sticky-in-flow > .o-sticky__box {\n    position: static; }\n\n.o-sticky--debug > .o-sticky__box {\n  background: rgba(0, 0, 255, 0.5);\n  color: #fff; }\n  .o-sticky--debug > .o-sticky__box::before, .o-sticky--debug > .o-sticky__box::after {\n    content: '';\n    color: yellow; }\n\n.o-sticky--debug.is-sticky-sticky > .o-sticky__box {\n  background: rgba(255, 0, 0, 0.7); }\n  .o-sticky--debug.is-sticky-sticky > .o-sticky__box::before {\n    content: 'is-sticky'; }\n\n.o-sticky--debug.is-sticky-bottom > .o-sticky__box {\n  background: rgba(255, 165, 0, 0.7); }\n  .o-sticky--debug.is-sticky-bottom > .o-sticky__box::before {\n    content: 'is-bottom'; }\n\n.o-sticky--debug.is-sticky-in-flow > .o-sticky__box::before {\n  content: 'is-in-flow'; }\n\n.o-sticky--debug.is-sticky-scroll-up > .o-sticky__box::after {\n  content: 'is-scroll-up'; }\n\n.o-sticky--debug.is-sticky-scroll-down > .o-sticky__box::after {\n  content: 'is-scroll-down'; }\n",xe=/\n[\s]+$/,we=/^\n[\s]+/,Ae=/[\s]+$/,Te=/^[\s]+/,Ne=/[\n\s]+/g,Ee=["a","abbr","b","bdi","bdo","br","cite","data","dfn","em","i","kbd","mark","q","rp","rt","rtc","ruby","s","amp","small","span","strong","sub","sup","time","u","var","wbr"],Se=["code","pre","textarea"],je=function e(t,n){if(Array.isArray(n))for(var o,i,r=t.nodeName.toLowerCase(),s=!1,a=0,c=n.length;a<c;a++){var l=n[a];if(Array.isArray(l))e(t,l);else{("number"==typeof l||"boolean"==typeof l||"function"==typeof l||l instanceof Date||l instanceof RegExp)&&(l=l.toString());var u=t.childNodes[t.childNodes.length-1];if("string"==typeof l)s=!0,u&&"#text"===u.nodeName?u.nodeValue+=l:(l=document.createTextNode(l),t.appendChild(l),u=l),a===c-1&&(s=!1,-1===Ee.indexOf(r)&&-1===Se.indexOf(r)?""===(o=u.nodeValue.replace(we,"").replace(Ae,"").replace(xe,"").replace(Ne," "))?t.removeChild(u):u.nodeValue=o:-1===Se.indexOf(r)&&(i=0===a?"":" ",o=u.nodeValue.replace(we,i).replace(Te," ").replace(Ae,"").replace(xe,"").replace(Ne," "),u.nodeValue=o));else if(l&&l.nodeType){s&&(s=!1,-1===Ee.indexOf(r)&&-1===Se.indexOf(r)?""===(o=u.nodeValue.replace(we,"").replace(xe,"").replace(Ne," "))?t.removeChild(u):u.nodeValue=o:-1===Se.indexOf(r)&&(o=u.nodeValue.replace(Te," ").replace(we,"").replace(xe,"").replace(Ne," "),u.nodeValue=o));var d=l.nodeName;d&&(r=d.toLowerCase()),t.appendChild(l)}}}};function Pe(e,t){var n,o;return[(n=document.createElement("div"),n.setAttribute("class","o-sticky__placeholder js-sticky__placeholder"),n),(o=document.createElement("div"),o.setAttribute("class","o-sticky__box js-sticky__box"),je(o,[t]),o)]}var De="pageYOffset"in window?function(){return window.pageYOffset}:function(){var e=document,t=e.body;return e.documentElement.scrollTop||t.scrollTop||0};var Ie,Le=function(){if(!window.getComputedStyle)return null;var e=window.getComputedStyle(document.documentElement,""),t=(Array.prototype.slice.call(e).join("").match(/-(moz|webkit|ms)-/)||""===e.OLink&&["","o"])[1];return{dom:"WebKit|Moz|MS|O".match(new RegExp("("+t+")","i"))[1],lowercase:t,css:"-"+t+"-",js:t[0].toUpperCase()+t.slice(1)}}().lowercase,Re=function(){var e=window.requestAnimationFrame||window[Le+"RequestAnimationFrame"];if(e)e=e.bind(window);else{var t=0;e=function(e){var n=Date.now(),o=Math.max(0,16-(n-t)),i=setTimeout(function(){e(n+o)},o);return t=n+o,i}}return e}(),Ue=(Ie=(Ie=window.cancelAnimationFrame||window[Le+"CancelAnimationFrame"]||window[Le+"CancelRequestAnimationFrame"])?Ie.bind(window):function(e){clearTimeout(e)},void 0),Fe=0,Me=["resize","orientationchange"].join(" "),Ve=[Me,"scroll","touchstart","touchmove","touchend","pageshow","load"].join(" "),ze=function(){function e(){var t=this;a(this,e),this._change=function(){var e=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}).type;Me.indexOf(e)>=0&&(t.forceRepaint=!0),t.framePending||Re(function(){for(var e=t.containerNodes,n=t.forceRepaint,o=t.lastScrollTop,i=t.isDirectionFrozen,r=t.lastDirection,s=De(),a=s-o,c=i?r:a>0?1:a<0?-1:r,l=0,u=e.length;l<u;l++){var d=e[l],p=d.getBoundingClientRect(),h=p.top,f=p.bottom;F("sticky-container/"+(h<=0&&f>=0?"active":"idle"),{containerTop:h,containerBottom:f,direction:c,forceRepaint:n},d)}t.lastScrollTop=s,t.lastDirection=c,t.framePending=!1,t.forceRepaint=!1})},this._freezeDirection=function(){t.isDirectionFrozen=!0,t.lastDirection=-1},this._thawDirection=function(){t.isDirectionFrozen=!1},this.forceRepaint=!1,this.framePending=!1,this.lastScrollTop=0,this.isDirectionFrozen=!1,this.containerNodes=[],this._on()}return c(e,[{key:"addContainer",value:function(e){this.containerNodes.push(e),this._change()}},{key:"_on",value:function(){this._off(),this._unChange=L(window,Ve,this._change),this._unFreezeDirection=M("sticky-container/freeze-direction",this._freezeDirection),this._unThawDirection=M("sticky-container/thaw-direction",this._thawDirection)}},{key:"_off",value:function(){this._unChange&&this._unChange(),this._unFreezeDirection&&this._unFreezeDirection(),this._unThawDirection&&this._unThawDirection()}},{key:"remove",value:function(e){var t,n,o;e&&(t=this.containerNodes,n=e,(o=t.indexOf(n))>-1&&t.splice(o,1)),--Fe<=0&&Ue&&(this._off(),delete this.containerNodes,Ue=null)}}]),e}();function qe(){return Ue||(Ue=new ze),Fe++,Ue}function Be(e,t){for(var n=[],o=Object.keys(t),i=o.length,r=0;r<i;++r){var s=o[r];n.push(s+":"+t[s]+";")}e.style.cssText=n.join("")}var Ke=Q("IS_IN_FLOW","IS_STICKY","IS_BOTTOM"),We=function(){function e(t){a(this,e),He.call(this),this.wcNode=t,this.state=Ke.IS_IN_FLOW,this.lastDirection=0,this.placeholder=t.querySelector(e.DEFAULTS.placeholderClass),this.box=t.querySelector(e.DEFAULTS.boxClass),this.spy=qe()}return c(e,[{key:"_on",value:function(){this._off(),this._unActive=M("sticky-container/active",this._update,this._contextNode),this._unIdle=M("sticky-container/idle",this._update,this._contextNode)}},{key:"_off",value:function(){this._unActive&&this._unActive(),this._unIdle&&this._unIdle()}},{key:"destroy",value:function(){this._off(),this.spy.remove(),delete this.spy,delete this.roodNode,delete this.placeholder,delete this.box,delete this._contextNode}},{key:"contextNode",set:function(e){this._contextNode=e,this._on()}}]),e}();We.DEFAULTS={placeholderClass:".js-sticky__placeholder",boxClass:".js-sticky__box",isStickyClass:"is-sticky-sticky",isBottomClass:"is-sticky-bottom",isScrollUp:"is-sticky-scroll-up",isScrollDown:"is-sticky-scroll-down"};var He=function(){var e=this;this._update=function(t){var n=t.detail,o=n.containerBottom,i=n.direction,r=n.forceRepaint,s=e.wcNode,a=e.state,c=i!==e.lastDirection,l=s.offsetHeight,u=s.offsetWidth,d=s.getBoundingClientRect(),p=d.left,h=d.top,f=h>0,y=h<=0&&o>=l,v=h<=0&&o<l;c&&1===i?(T(s,We.DEFAULTS.isScrollDown),S(s,We.DEFAULTS.isScrollUp)):c&&-1===i&&(T(s,We.DEFAULTS.isScrollUp),S(s,We.DEFAULTS.isScrollDown)),y&&(r||a!==Ke.IS_STICKY)&&(e.state=Ke.IS_STICKY,T(s,We.DEFAULTS.isStickyClass),S(s,We.DEFAULTS.isBottomClass),Be(e.placeholder,{height:l+"px"}),Be(e.box,{left:p+"px",width:u+"px"})),v&&(r||a!==Ke.IS_BOTTOM)&&(e.state=Ke.IS_BOTTOM,S(s,We.DEFAULTS.isStickyClass),T(s,We.DEFAULTS.isBottomClass),Be(e.placeholder,{height:l+"px"}),Be(e.box,{left:p+"px",width:u+"px"})),f&&(r||a!==Ke.IS_IN_FLOW)&&(e.state=Ke.IS_IN_FLOW,S(s,We.DEFAULTS.isStickyClass),S(s,We.DEFAULTS.isBottomClass),Be(e.placeholder,{height:""}),Be(e.box,{left:"",width:""}))}},Ye=Q("IS_IDLE","IS_ACTIVE"),$e=function(){function e(t){var n=this;a(this,e),this._active=function(){n.state!==Ye.IS_ACTIVE&&(n.state=Ye.IS_ACTIVE,T(n.roodNode,e.DEFAULTS.isActiveClass),S(n.roodNode,e.DEFAULTS.isIdleClass))},this._idle=function(){n.state!==Ye.IS_IDLE&&(n.state=Ye.IS_IDLE,T(n.roodNode,e.DEFAULTS.isIdleClass),S(n.roodNode,e.DEFAULTS.isActiveClass))},this.roodNode=t,this.state=Ye.IS_IDLE,this.spy=qe(),this.spy.addContainer(t),this._on()}return c(e,[{key:"_on",value:function(){this._off(),this._unActive=M("sticky-container/active",this._active,this.roodNode),this._unIdle=M("sticky-container/idle",this._idle,this.roodNode)}},{key:"_off",value:function(){this._unActive&&this._unActive(),this._unIdle&&this._unIdle()}},{key:"destroy",value:function(){this._off(),this.spy.remove(this.roodNode),delete this.spy,delete this.roodNode}}]),e}();$e.DEFAULTS={isActiveClass:"is-sticky-container-active",isIdleClass:"is-sticky-container-idle"};var Xe=function(e){function t(){a(this,t);var e=h(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,{styles:Ce}));return e.provideContext(),e}return d(t,me),c(t,[{key:"connectedCallback",value:function(){u(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"connectedCallback",this).call(this);var e=this.debug;this.className=g(this.initialClassName,"o-sticky-container js-sticky-container",{"o-sticky-container--debug":e}),this.stickyContainer=new $e(this)}},{key:"disconnectedCallback",value:function(){this.stickyContainer&&(this.stickyContainer.destroy(),delete this.stickyContainer)}}]),t}();Xe.tagName="axa-sticky-container",Xe.propTypes={debug:b.bool};var Ge=function(e){function t(){a(this,t);var e=h(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,{styles:Oe,template:Pe}));return e.consumeContext("axa-sticky-container"),e}return d(t,me),c(t,[{key:"willRenderCallback",value:function(){var e=this.debug;this.className=g(this.initialClassName,"o-sticky js-sticky",{"o-sticky--debug":e})}},{key:"didRenderCallback",value:function(){this.sticky&&this.sticky.destroy(),this.sticky=new We(this);var e=this.contextNode;e&&this.contextCallback(e)}},{key:"contextCallback",value:function(e){this.sticky&&(this.sticky.contextNode=e)}},{key:"disconnectedCallback",value:function(){this.sticky&&(this.sticky.destroy(),delete this.sticky)}}]),t}();Ge.tagName="axa-sticky",Ge.propTypes={debug:b.bool},ke(Xe.tagName,Xe),ke(Ge.tagName,Ge);var Ze={AXASticky:Ge,AXAStickyContainer:Xe};return e.AXAStickyContainer=Xe,e.AXASticky=Ge,e.default=Ze,e}({});
