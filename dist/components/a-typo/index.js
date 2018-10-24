var StyleGuideWebComponent=function(){"use strict";var t={},o=function(e){return e in t||(t[e]=0),++t[e]},r=function(){try{var e=new window.CustomEvent("test",{cancelable:!0});if(e.preventDefault(),!0!==e.defaultPrevented)throw new Error("Could not prevent default");return window.CustomEvent}catch(e){}return t;function t(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{},n=t.bubbles,o=void 0!==n&&n,i=t.cancelable,r=void 0!==i&&i,a=t.detail,l=void 0===a?void 0:a,s=document.createEvent("CustomEvent");s.initCustomEvent(e,o,r,l);var c=s.preventDefault;return s.preventDefault=function(){c.call(s);try{Object.defineProperty(this,"defaultPrevented",{get:function(){return!0}})}catch(e){this.defaultPrevented=!0}},s}}(),y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},p=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},i=function(){function o(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(e,t,n){return t&&o(e.prototype,t),n&&o(e,n),e}}(),a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},u=function e(t,n,o){null===t&&(t=Function.prototype);var i=Object.getOwnPropertyDescriptor(t,n);if(void 0===i){var r=Object.getPrototypeOf(t);return null===r?void 0:e(r,n,o)}if("value"in i)return i.value;var a=i.get;return void 0!==a?a.call(o):void 0},d=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)},l=function(e,t){var n={};for(var o in e)0<=t.indexOf(o)||Object.prototype.hasOwnProperty.call(e,o)&&(n[o]=e[o]);return n},h=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},f=function e(t,n,o,i){var r=Object.getOwnPropertyDescriptor(t,n);if(void 0===r){var a=Object.getPrototypeOf(t);null!==a&&e(a,n,o,i)}else if("value"in r&&r.writable)r.value=o;else{var l=r.set;void 0!==l&&l.call(i,o)}return o},s=function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var n=[],o=!0,i=!1,r=void 0;try{for(var a,l=e[Symbol.iterator]();!(o=(a=l.next()).done)&&(n.push(a.value),!t||n.length!==t);o=!0);}catch(e){i=!0,r=e}finally{try{!o&&l.return&&l.return()}finally{if(i)throw r}}return n}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")},x=function(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)};function _(e,t,n){var o=3<arguments.length&&void 0!==arguments[3]?arguments[3]:{},i=new r(t,a({},o,{detail:n}));return e.dispatchEvent(i)}var g=function(){var e=!1;if("undefined"!=typeof window&&"function"==typeof window.addEventListener){var t=Object.defineProperty({},"passive",{get:function(){e=!0}}),n=function(){};window.addEventListener("testPassiveEventSupport",n,t),window.removeEventListener("testPassiveEventSupport",n,t)}return e}();function v(e){for(var i=e.className,r=!1,a=!0,t=arguments.length,n=Array(1<t?t-1:0),o=1;o<t;o++)n[o-1]=arguments[o];var l=n.map(function(e){var t=(n=e,new RegExp("^"+n+"$|^"+n+"\\s|\\s"+n+"\\s|\\s"+n+"$",o)).test(i);var n,o;t?r=!0:a=!1;return{className:e,hasClass:t}});return!(!a&&!r)&&l}var b=/\s+/,O={transitionend:function(){for(var e=document.createElement("div").style,t={transition:"transitionend",OTransition:"oTransitionEnd otransitionend",MozTransition:"transitionend",WebkitTransition:"webkitTransitionEnd"},n=Object.keys(t),o=n.length,i=void 0,r=0;r<o;++r)if(void 0!==e[i=n[r]])return t[i];return""}()};function m(n,e,o,i){var t=4<arguments.length&&void 0!==arguments[4]?arguments[4]:{},r=t.capture,a=void 0!==r&&r,l=t.passive,s=void 0===l||l;if(O[e]&&(e=O[e]),!n||!e)return null;var c=void 0===o?"undefined":y(o),p=o&&"string"===c;if("function"===c){if(i){var u=i;a=u.capture,s=u.passive}i=o}for(var d=g?{capture:a,passive:s}:a,h=p?function(e){var t=e.target;for(;!v(t,o)&&t!==n;)t=t.parentNode;if(t!==n)return i(e,t)}:i,f=e.split(b),_=f.length,m=0;m<_;++m)n.addEventListener(f[m],h,d);return function e(){for(var t=0;t<_;++t)n.removeEventListener(f[t],h,d);!function(e,t){if(!e)return;for(var n=Object.keys(e),o=n.length,i=0;i<o;++i){var r=n[i];if(e[r]===t)return delete e[r]}}(this,e)}}function w(o){var i=1<arguments.length&&void 0!==arguments[1]?arguments[1]:0,e=2<arguments.length&&void 0!==arguments[2]?arguments[2]:{},t=e.leading,r=void 0!==t&&t,n=e.trailing,a=void 0===n||n,l=e.maxWait,s=void 0!==l&&l,c=void 0,p=void 0,u=void 0,d=void 0,h=!1,f=i!==s,_=!1!==s;function m(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return c=t,f&&(p&&clearTimeout(p),p=setTimeout(y,i)),_&&!u&&(u=setTimeout(g,s)),r&&!h&&(h=!0,d=o.apply(void 0,x(c))),d}return m.flush=function(){(p||u)&&(d=o.apply(void 0,x(c)));return b(),d},m.cancel=b,m;function y(){u&&clearTimeout(u),v()}function g(){p&&clearTimeout(p),v()}function v(){a&&(d=o.apply(void 0,x(c))),u=p=null,h=!1}function b(){p&&(clearTimeout(p),p=null),u&&(clearTimeout(u),u=null),c=void 0,h=!1}}window.__subscriptions=window.__subscriptions||{};var c=window.__subscriptions;function C(e,t){var n=m(2<arguments.length&&void 0!==arguments[2]?arguments[2]:document,e,t);c[e]||(c[e]={count:0});var o,i=c[e];return i.count++,i.onsubscribe||(i.onsubscribe=w((o=e,function(){_(document,"pubsub/onsubscribe",o),_(document,"pubsub/onsubscribe/"+o,o),c[o]&&delete c[o].unsubscribe}),100)),i.onsubscribe(),function(){i.count--,n.call(this),i.count<=0&&delete c[e]}}m(document,"pubsub/onsubscribe",function(e){var t=e.detail;c[t]||(c[t]={count:0});var n=c[t],o=n.queue;Array.isArray(o)&&(o.forEach(function(e){var t=s(e,3),n=t[0],o=t[1],i=t[2];_(i,n,o)}),delete n.queue)});var k,e=function(e,t){return e===t};(k=function(){var e;return(e=console).log.apply(e,arguments)},function(){var i=0<arguments.length&&void 0!==arguments[0]?arguments[0]:e;return function(){for(var e=arguments.length,o=Array(e),t=0;t<e;t++)o[t]=arguments[t];return function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(){return i.apply(void 0,[].concat(o,t))?k.apply(void 0,arguments):void 0}}}})()(!0);var n=Object.getOwnPropertySymbols,E=Object.prototype.hasOwnProperty,T=Object.prototype.propertyIsEnumerable;(function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map(function(e){return t[e]}).join(""))return!1;var o={};return"abcdefghijklmnopqrst".split("").forEach(function(e){o[e]=e}),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},o)).join("")}catch(e){return!1}})()&&Object.assign;var A="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";function P(){}var N;function j(e,t){return"function"==typeof e[t]&&(e[t]=function(e){return(!(1<arguments.length&&void 0!==arguments[1])||arguments[1])&&Object.keys(e).reduce(j,e),function(){return e.apply(void 0,arguments)}}(e[t],!1)),e}var S=(function(e){e.exports=function(){function e(e,t,n,o,i,r){if(r!==A){var a=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw a.name="Invariant Violation",a}}function t(){return e}var n={array:e.isRequired=e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t};return n.checkPropTypes=P,n.PropTypes=n}()}(N={exports:{}},N.exports),N.exports);Object.keys(S).reduce(j,S);var z=S.oneOf(["left","center","right"]),R=S.oneOfType([S.string,S.number]),D=S.oneOfType([S.arrayOf(F),S.shape({cells:S.arrayOf(F)})]),L=S.oneOfType([S.arrayOf(K),S.shape({cells:S.arrayOf(K),action:S.bool})]),M=S.oneOfType([S.arrayOf(B),S.shape({cells:S.arrayOf(B)})]),I=(S.oneOf(["row","col","rowgroup","colgroup","auto"]),S.oneOfType([S.arrayOf(F),S.arrayOf(D)]),S.oneOfType([S.arrayOf(K),S.arrayOf(L)]),S.oneOfType([S.arrayOf(B),S.arrayOf(M)]),S.oneOf(["up","down"])),U=S.oneOf(["left","right"]),V=S.oneOf(["ok","pending","error","unknown"]),q={text:R,value:S.any,rowspan:S.number,colspan:S.number,scope:null,align:z,dense:S.bool},H=S.oneOfType([S.string,S.number,S.shape(q)]),F=S.oneOfType([H,S.shape(a({},q,{sort:I,sortActive:S.bool}))]),K=S.oneOfType([H,S.shape(a({},q,{float:U,action:S.bool,strong:S.bool,bold:S.bool,state:V}))]),B=S.oneOfType([H,S.shape(a({},q,{float:U}))]),G=(S.oneOf(["top","bottom"]),function(e){function s(e,t){var n;p(this,s);for(var o="\n    Native Property >>>"+e+"<<< exists already at "+t.nodeName+"#"+t._id+" and evaluates to -> "+t[e]+".\n    Please consult the HTML spec for inherited DOM properties:\n    - Element Interface https://developer.mozilla.org/en-US/docs/Web/API/Element#Properties\n    - Node Interface https://developer.mozilla.org/en-US/docs/Web/API/Node#Properties",i=arguments.length,r=Array(2<i?i-2:0),a=2;a<i;a++)r[a-2]=arguments[a];var l=h(this,(n=s.__proto__||Object.getPrototypeOf(s)).call.apply(n,[this,o].concat(r)));return Error.captureStackTrace&&Error.captureStackTrace(l,s),l.name="PropertyExistsException",l}return d(s,e),s}(Error)),W=/[A-Z]/g;function $(e){return e.replace(W,J)}function J(e,t,n){var o=e.toLowerCase(),i=n.charAt(t+1);return 0===t||i.toUpperCase()===i?o:"-"+o}var Y=/^\s*(?:true|false|null|undefined|-?[0-9]+\.?[0-9]*|[[{](?:.|[\s])*[\]}])\s*$/;function Z(t,n,e){var o=t;if(e)return function(t,n,e){var o=t;switch(e){case S.string:case S.string.isRequired:return t;case S.bool:case S.bool.isRequired:if(!t||n===t)return!0;case S.number:case S.number.isRequired:case S.object:case S.object.isRequired:case S.array:case S.array.isRequired:default:if(Y.test(t))try{o=JSON.parse(t)}catch(e){console.error("Attribute "+n+" has an error:\n"+e+"\n",t)}}return o}(t,n,e);if(t&&n!==t){if(Y.test(t))try{o=JSON.parse(t)}catch(e){console.error("Attribute "+n+" has an error:\n"+e+"\n",t)}}else o=!0;return o}var X=/(?:^\w|[A-Z]|\b\w|\s+|[-_]+)/g,Q=/[-_]+/g;function ee(e){return e.replace(X,te)}function te(e,t){return 0==+e||Q.test(e)?"":0===t?e.toLowerCase():e.toUpperCase()}function ne(e,t,n){var o=1===e.nodeType,i=e.constructor.propTypes,r=n;!n&&o&&(r=(void 0===i?{}:i)[ee(t)]);if(o&&!e.hasAttribute(t))return r!==S.bool&&r!==S.bool.isRequired&&void 0;var a=e.value;return t?a=e.getAttribute(t):t=e.name,a=Z(a,t,r)}var oe=/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream;function ie(n,e,o){var t,i=3<arguments.length&&void 0!==arguments[3]?arguments[3]:{},r=i.capture,a=void 0===r||r,l=i.passive,s=void 0===l||l,c=n.ownerDocument.documentElement,p=m(c,e,function(e){var t=e.target;if(!n.contains(t)&&n!==t)return o(e)},{capture:a,passive:s});return t=c,oe&&(t.style.cursor="pointer"),p}var re=function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];for(var o=t.length,i={},r=0;r<o;++r){var a=t[r];i[a.toUpperCase()]=a}return i}("click","change","keyup","enter","move","leave","Escape","Esc","touchstart","touchmove","touchend","input","resize"),ae="axa-change",le="data-prevent-default";(function(){function o(e){var r=this,t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{};p(this,o),this._handleClick=function(e,t){r.shouldPreventDefault(t||e.currentTarget)&&e.preventDefault();var n=!r._lastToggleNode,o=t!==r._lastToggleNode,i=!n&&!o;n?(r._notify(re.ENTER,t),r._onInteractive()):o&&r._notify(re.MOVE,t,r._lastToggleNode),r._lastToggleNode=t,i&&r._options.sameClickClose&&r._close()},this._handleClose=function(e,t){r.shouldPreventDefault(t||e.currentTarget)&&e.preventDefault(),r._close()},this._handleKeyUp=function(e){(e.key===re.ESCAPE||e.key===re.ESC||27===e.keyCode)&&(e.preventDefault(),r._close())},this._init(e,t)}return i(o,[{key:"_init",value:function(e,t){e&&(this._wcNode=e),t&&(this._options=a({},o.DEFAULTS,t));var n=this._options.containerClass;this._container=n?this._wcNode.querySelector(n):this._wcNode,this._on()}},{key:"_on",value:function(){this._off(),this._unClick=m(this._container,re.CLICK,this._options.toggleClass,this._handleClick,{passive:!this._options.preventDefault})}},{key:"_off",value:function(){this._unClick&&this._unClick(),this._offInteractive()}},{key:"_onInteractive",value:function(){this._offInteractive(),this._options.closeClass&&(this._unCloseClick=m(this._container,re.CLICK,this._options.closeClass,this._handleClose,{passive:!this._options.preventDefault})),this._options.outerClose&&(this._unOuterClick=ie(this._container,re.CLICK,this._handleClose,{passive:!this._options.preventDefault})),this._options.escapeClose&&(this._unCloseEscape=m(this._container.ownerDocument,re.KEYUP,this._handleKeyUp,{passive:!1}))}},{key:"shouldPreventDefault",value:function(e){return e.hasAttribute(le)?ne(e,le):this._options.preventDefault}},{key:"_offInteractive",value:function(){this._unOuterClick&&this._unOuterClick(),this._unCloseClick&&this._unCloseClick(),this._unCloseEscape&&this._unCloseEscape(),this.deleteLastToggleNode()}},{key:"_close",value:function(){this._lastToggleNode&&(this._notify(re.LEAVE,this._lastToggleNode),this._offInteractive(),this.deleteLastToggleNode())}},{key:"_notify",value:function(e,t,n){e in this&&"function"==typeof this[e]&&this[e](t,n)}},{key:"enter",value:function(e){throw new Error("UiEvent.enter method not overwritten")}},{key:"move",value:function(e,t){}},{key:"leave",value:function(e){throw new Error("UiEvent.leave method not overwritten")}},{key:"destroy",value:function(){this._off(),delete this._wcNode,delete this._options}},{key:"deleteLastToggleNode",value:function(){delete this._lastToggleNode}},{key:"lastToggleNode",get:function(){return this._lastToggleNode}}]),o}()).DEFAULTS={containerClass:".js-ui-container",toggleClass:"js-ui-toggle",closeClass:"js-ui-close",escapeClose:!0,outerClose:!0,sameClickClose:!0,preventDefault:!0};var se=["title","checked","disabled"],ce=[];var pe=1,ue=3,de=8;function he(e,t){var n=e.nodeType,o=e.nodeName;n===pe&&function(e,t){for(var n=t.skipChildren&&t.skipChildren(),o=t.constructor.observedAttributes,i=o&&Array.isArray(o)&&o.length,r=function(e){return n&&i&&-1===o.indexOf(e)},a=t.attributes,l=e.attributes,s=null,c=null,p=null,u=null,d=l.length-1;0<=d;--d)if(u=l[d],p=u.name,s=u.namespaceURI,c=u.value,!r(p))if(s){var h=u.localName;t.getAttributeNS(s,h||p)!==c&&t.setAttributeNS(s,p,c)}else t.hasAttribute(p)?t.getAttribute(p)!==c&&("null"===c||"undefined"===c?t.removeAttribute(p):t.setAttribute(p,c)):t.setAttribute(p,c);for(var f=a.length-1;0<=f;--f)if(!1!==(u=a[f]).specified){if(p=u.name,s=u.namespaceURI,r(p))continue;s?(p=u.localName||p,e.hasAttributeNS(s,p)||t.removeAttributeNS(s,p)):e.hasAttributeNS(null,p)||t.removeAttribute(p)}}(e,t),n!==ue&&n!==de||t.nodeValue===e.nodeValue||(t.nodeValue=e.nodeValue),"INPUT"===o?function(e,t){var n=e.value,o=t.value;fe(e,t,"checked"),fe(e,t,"disabled"),n!==o&&(t.setAttribute("value",n),t.value=n);"null"===n&&(t.value="",t.removeAttribute("value"));e.hasAttributeNS(null,"value")?"range"===t.type&&(t.value=n):t.removeAttribute("value")}(e,t):"OPTION"===o?fe(e,t,"selected"):"TEXTAREA"===o&&function(e,t){var n=e.value;n!==t.value&&(t.value=n);if(t.firstChild&&t.firstChild.nodeValue!==n){if(""===n&&t.firstChild.nodeValue===t.placeholder)return;t.firstChild.nodeValue=n}}(e,t)}function fe(e,t,n){e[n]!==t[n]&&(t[n]=e[n],e[n]?t.setAttribute(n,""):t.removeAttribute(n))}var _e=3;function me(e,t){return t?e?e.isSameNode&&e.isSameNode(t)?t:e.tagName!==t.tagName?e:(he(e,t),t.skipChildren&&t.skipChildren()||function(e,t){for(var n=void 0,o=void 0,i=void 0,r=void 0,a=0,l=0;n=t.childNodes[l],o=e.childNodes[l-a],n||o;l++)if(o)if(n)if(ye(o,n))(i=me(o,n))!==n&&(t.replaceChild(i,n),a++);else{r=null;for(var s=l;s<t.childNodes.length;s++)if(ye(t.childNodes[s],o)){r=t.childNodes[s];break}r?((i=me(o,r))!==r&&a++,t.insertBefore(i,n)):o.id||n.id?(t.insertBefore(o,n),a++):(i=me(o,n))!==n&&(t.replaceChild(i,n),a++)}else t.appendChild(o),a++;else t.removeChild(n),l--}(e,t),t):null:e}function ye(e,t){return e.id?e.id===t.id:e.isSameNode?e.isSameNode(t):e.tagName===t.tagName&&(e.type===_e&&e.nodeValue===t.nodeValue)}var ge=function(e){function l(e){var t;p(this,l);for(var n="\n    Web Component "+e.nodeName+"%c#"+e._id+" does not accept string as a return from a template. Maybe use bel?}",o=arguments.length,i=Array(1<o?o-1:0),r=1;r<o;r++)i[r-1]=arguments[r];var a=h(this,(t=l.__proto__||Object.getPrototypeOf(l)).call.apply(t,[this,n].concat(i)));return Error.captureStackTrace&&Error.captureStackTrace(a,l),a.name="TemplateNoStringReturnException",a}return d(l,e),l}(Error),ve=!!document.createDocumentFragment().children;function be(){return Reflect.construct(HTMLElement,[],this.__proto__.constructor)}Object.setPrototypeOf(be.prototype,HTMLElement.prototype),Object.setPrototypeOf(be,HTMLElement);var xe=function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(e){return t.reduceRight(function(e,t){return t(e)},e)}}(function(t){return function(e){function a(){var e,t,n;p(this,a);for(var o=arguments.length,i=Array(o),r=0;r<o;r++)i[r]=arguments[r];return(t=n=h(this,(e=a.__proto__||Object.getPrototypeOf(a)).call.apply(e,[this].concat(i))))._makeContextReady=function(){var e=(0<arguments.length&&void 0!==arguments[0]?arguments[0]:{}).detail;n.contextNode&&(clearTimeout(n.timeoutId),n.timeoutId=setTimeout(function(){n.contextCallback(n.contextNode,e)},10)),n.unContextEnabled&&n.unContextEnabled(),n.unContextEnabled=C("context/available",n._makeContextReady)},h(n,t)}return d(a,t),i(a,[{key:"connectedCallback",value:function(){u(a.prototype.__proto__||Object.getPrototypeOf(a.prototype),"connectedCallback",this)&&u(a.prototype.__proto__||Object.getPrototypeOf(a.prototype),"connectedCallback",this).call(this),this.contextCallback&&this._makeContextReady()}},{key:"disconnectedCallback",value:function(){u(a.prototype.__proto__||Object.getPrototypeOf(a.prototype),"disconnectedCallback",this)&&u(a.prototype.__proto__||Object.getPrototypeOf(a.prototype),"disconnectedCallback",this).call(this),this.unContextEnabled&&this.unContextEnabled()}},{key:"provideContext",value:function(){var e=this.nodeName.toLowerCase();this.__isContext=!0,function(e,t){var n=2<arguments.length&&void 0!==arguments[2]?arguments[2]:document;c[e]||(c[e]={count:0,queue:[]});var o=c[e].queue;Array.isArray(o)?o.push([e,t,n]):_(n,e,t)}("context/available",this.__contextName=e)}},{key:"consumeContext",value:function(e){this.__consumedContext=e&&e.toLowerCase()}},{key:"contextNode",get:function(){for(var e=this.__consumedContext,t=this.parentNode;t&&(!t.__isContext||e&&e!==t.__contextName);)t=t.parentNode;return!(!t||!t.__isContext)&&t}}]),a}()},function(t){return function(e){function n(){return p(this,n),h(this,(n.__proto__||Object.getPrototypeOf(n)).apply(this,arguments))}return d(n,t),i(n,[{key:"appendChild",value:function(e){!this._isMorphing&&this._hasTemplate&&this._hasRendered?(this._lightDOMRefs.push(e),this.render()):u(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"appendChild",this).call(this,e)}},{key:"innerText",set:function(e){if(this._hasTemplate&&this._hasRendered){var t=document.createTextNode(e);this._lightDOMRefs=[t],this.render()}else f(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"innerText",e,this)}},{key:"textContent",set:function(e){if(this._hasTemplate&&this._hasRendered){var t=document.createTextNode(e);this._lightDOMRefs=[t],this.render()}else f(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"textContent",e,this)}},{key:"innerHTML",set:function(e){if(this._hasTemplate&&this._hasRendered){var t=document.createElement("div");t.innerHTML=e,this._lightDOMRefs=Array.from(t.children),this.render()}else f(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"innerHTML",e,this)}}]),n}()},function(t){return function(e){function c(e){p(this,c);var s=h(this,(c.__proto__||Object.getPrototypeOf(c)).call(this,e));s._reduceProps=function(e,t){var n=e.props,o=e.shouldUpdate,i=s._hasKeys[t];if(-1===se.indexOf(t)&&i)throw new G(t,s);var r="_"+t,a=n[t],l=s[r];return o||s.shouldUpdateCallback(a,l)?(s[r]=a,s._props[t]=a,i&&f(c.prototype.__proto__||Object.getPrototypeOf(c.prototype),t,a,s),{props:n,shouldUpdate:!0}):{props:n,shouldUpdate:!1}},s._isConnected=!1,s._props={},s._hasKeys={},s.updatedDebounced=w(function(){return s.updated&&s.updated()},50);var t=s.constructor.observedAttributes;return Array.isArray(t)&&t.forEach(function(e){var t,n=ee(e),o=n in s;if(-1===se.indexOf(n)&&o)throw new G(n,s);s._hasKeys[n]=o,Object.defineProperty(s,n,t={get:function(){return this._props[n]},set:function(e){this.shouldUpdateCallback(this._props[n],e)&&(this._props[n]=e,o&&f(t.__proto__||Object.getPrototypeOf(t),n,e,this),this._isConnected&&this.updatedDebounced())}})}),s}return d(c,t),i(c,null,[{key:"observedAttributes",get:function(){var e=this.propTypes;return e&&Object.keys(e).map($)}}]),i(c,[{key:"connectedCallback",value:function(){var i=this;if(u(c.prototype.__proto__||Object.getPrototypeOf(c.prototype),"connectedCallback",this)&&u(c.prototype.__proto__||Object.getPrototypeOf(c.prototype),"connectedCallback",this).call(this),!this._isConnected){this._isConnected=!0;var e=this.constructor.observedAttributes;if(this.initialClassName=this.className,Array.isArray(e)){var r=this.constructor.propTypes;e.forEach(function(e){var t=ee(e);if(i.hasAttribute(e)){var n=ne(i,e,r[t]),o=i._hasKeys[t];i._props[t]=n,o&&f(c.prototype.__proto__||Object.getPrototypeOf(c.prototype),t,n,i)}}),this.checkPropTypes()}}this.updated&&this.updated()}},{key:"attributeChangedCallback",value:function(e,t,n){if(this.shouldUpdateCallback(n,t)){var o=ee(e);if(this.hasAttribute(e)){var i=this.constructor.propTypes;this[o]=Z(n,e,i[o])}else this[o]=null;this.checkPropTypes(),"value"===e&&null!==n&&_(this,ae,n,{bubbles:!0,cancelable:!0,composed:!0})}}},{key:"setProps",value:function(e){var t=this.constructor.observedAttributes,n=void 0===t?[]:t,o=Object.keys(e).filter(function(e){return-1<n.indexOf($(e))}).reduce(this._reduceProps,{props:e,shouldUpdate:!1}).shouldUpdate;this.checkPropTypes(),o&&this._isConnected&&this.updated&&this.updated()}},{key:"checkPropTypes",value:function(){var e=this.constructor,t=e.propTypes,n=e.tagName;t&&S.checkPropTypes(t,this._props,"prop",n)}},{key:"shouldUpdateCallback",value:function(e,t){return e!==t}},{key:"disconnectedCallback",value:function(){this._isConnected=!1}}]),c}()},function(t){return function(e){function s(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{},t=e.template,n=l(e,["template"]);p(this,s);var o=h(this,(s.__proto__||Object.getPrototypeOf(s)).call(this,n));return o._template=t,o._hasTemplate=!!t,o._hasRendered=!1,o.updated=o.render,o}return d(s,t),i(s,[{key:"render",value:function(){var n=this,e=!this._hasRendered;if(this.willRenderCallback(e),this._hasTemplate){var t=this._template;try{if(e){for(var o=document.createDocumentFragment(),i=[];this.firstChild;)i.push(this.firstChild),o.appendChild(this.firstChild);this._lightDOMRefs=i,this.childrenFragment=o}else this._lightDOMRefs.forEach(function(e){var t=e.cloneNode(!0);n.childrenFragment.appendChild(t)});ve||(this.childrenFragment.children=Array.from(this.childrenFragment.childNodes).filter(function(e){return 1===e.nodeType}));var r=t(this._props,this.childrenFragment,this),a=document.createDocumentFragment();if(Array.isArray(r))r.forEach(function(e){a.appendChild(e)});else if(r){if("string"==typeof r)throw new ge(this);a.appendChild(r)}if(e)u(s.prototype.__proto__||Object.getPrototypeOf(s.prototype),"appendChild",this).call(this,a);else{var l=this.cloneNode(!1);l._isMorphing=!0,l.appendChild(a),this._isMorphing=!0,function(e,t){if("object"!==(void 0===e?"undefined":y(e)))throw new Error("componentMorph: oldTree should be an object");if("object"!==(void 0===t?"undefined":y(t)))throw new Error("componentMorph: newTree should be an object");me(t,e)}(this,l),function(){for(var e=void 0;e=ce.pop();)delete e.isSameNode;ce=[]}(),this._isMorphing=!1}}catch(e){console.error(e)}}this._hasRendered=!0,this.didRenderCallback(e)}},{key:"skipChildren",value:function(){return!this._isMorphing}},{key:"willRenderCallback",value:function(e){}},{key:"didRenderCallback",value:function(e){}}]),s}()},function(t){return function(e){function r(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{},t=e.styles,n=void 0===t?"":t,o=l(e,["styles"]);p(this,r);var i=h(this,(r.__proto__||Object.getPrototypeOf(r)).call(this,o));return i._styles=n,i}return d(r,t),i(r,[{key:"connectedCallback",value:function(){u(r.prototype.__proto__||Object.getPrototypeOf(r.prototype),"connectedCallback",this)&&u(r.prototype.__proto__||Object.getPrototypeOf(r.prototype),"connectedCallback",this).call(this),this._appendStyles()}},{key:"_appendStyles",value:function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:this;if(this._styles){var t=document.createElement("style"),n=document.createTextNode(this._styles);t.appendChild(n),e.insertAdjacentElement?e.insertAdjacentElement("afterbegin",t):e.appendChild(t)}}}]),r}()})(function(e){function n(e){p(this,n);var t=h(this,(n.__proto__||Object.getPrototypeOf(n)).call(this,e));return t._id=o(t.nodeName),t}return d(n,be),i(n,null,[{key:"uuidv4",value:function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(e){var t=16*Math.random()|0;return("x"==e?t:3&t|8).toString(16)})}}]),n}()),Oe={},we=function(e){function a(){var e,t,n;p(this,a);for(var o=arguments.length,i=Array(o),r=0;r<o;r++)i[r]=arguments[r];return(t=n=h(this,(e=a.__proto__||Object.getPrototypeOf(a)).call.apply(e,[this].concat(i))))._appendStyles=function(){a.appendGlobalStyles(n._styles,n.nodeName)},h(n,t)}return d(a,xe),i(a,null,[{key:"appendGlobalStyles",value:function(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:xe.uuidv4();if(e&&!Oe[t]){var n=document.createElement("style"),o=document.createTextNode(e);Oe[t]=!0,n.appendChild(o),n.setAttribute("data-c-name",t.toLowerCase()),document.head.appendChild(n)}}}]),a}();var Ce,ke,Ee='.a-typo__main-title--publico {\n  font-size: 46px;\n  font-weight: 700;\n  line-height: 1.13;\n  letter-spacing: 0.015em;\n  font-family: "Publico Headline", Georgia, serif; }\n  @media (min-width: 576px) {\n    .a-typo__main-title--publico {\n      font-size: 60px;\n      line-height: 1.05; } }\n  @media (min-width: 992px) {\n    .a-typo__main-title--publico {\n      font-size: 78px; } }\n\n.a-typo__page-title--publico {\n  font-size: 30px;\n  font-weight: 700;\n  line-height: 1.13;\n  letter-spacing: 0.015em;\n  font-family: "Publico Headline", Georgia, serif; }\n  @media (min-width: 576px) {\n    .a-typo__page-title--publico {\n      font-size: 50px;\n      line-height: 1.16; } }\n  @media (min-width: 992px) {\n    .a-typo__page-title--publico {\n      font-size: 62px; } }\n\n.a-typo__slice-title--publico {\n  font-size: 24px;\n  font-weight: 700;\n  line-height: 1.17;\n  letter-spacing: 0.015em;\n  font-family: "Publico Headline", Georgia, serif; }\n  @media (min-width: 576px) {\n    .a-typo__slice-title--publico {\n      font-size: 36px;\n      line-height: 1.13; } }\n  @media (min-width: 992px) {\n    .a-typo__slice-title--publico {\n      font-size: 48px; } }\n\n.a-typo__small-module-title--publico {\n  font-size: 20px;\n  font-weight: 700;\n  line-height: 1.5;\n  letter-spacing: 0.015em;\n  font-family: "Publico Headline", Georgia, serif; }\n  @media (min-width: 576px) {\n    .a-typo__small-module-title--publico {\n      font-size: 30px;\n      line-height: 1.17; } }\n  @media (min-width: 992px) {\n    .a-typo__small-module-title--publico {\n      font-size: 36px; } }\n\n.a-typo__main-title {\n  font-size: 46px;\n  font-weight: 700;\n  line-height: 1.13;\n  letter-spacing: 0.01em; }\n  @media (min-width: 576px) {\n    .a-typo__main-title {\n      font-size: 60px;\n      line-height: 1.05; } }\n  @media (min-width: 992px) {\n    .a-typo__main-title {\n      font-size: 78px; } }\n\n.a-typo__page-title {\n  font-size: 30px;\n  font-weight: 700;\n  line-height: 1.13;\n  letter-spacing: 0.01em; }\n  @media (min-width: 576px) {\n    .a-typo__page-title {\n      font-size: 50px;\n      line-height: 1.16; } }\n  @media (min-width: 992px) {\n    .a-typo__page-title {\n      font-size: 62px; } }\n\n.a-typo__slice-title {\n  font-size: 24px;\n  font-weight: 700;\n  line-height: 1.17;\n  letter-spacing: 0.01em; }\n  @media (min-width: 576px) {\n    .a-typo__slice-title {\n      font-size: 36px;\n      line-height: 1.13; } }\n  @media (min-width: 992px) {\n    .a-typo__slice-title {\n      font-size: 48px; } }\n\n.a-typo__small-module-title {\n  font-size: 20px;\n  font-weight: 700;\n  line-height: 1.5;\n  letter-spacing: 0.01em; }\n  @media (min-width: 576px) {\n    .a-typo__small-module-title {\n      font-size: 30px;\n      line-height: 1.17; } }\n  @media (min-width: 992px) {\n    .a-typo__small-module-title {\n      font-size: 36px; } }\n\n.a-typo__title {\n  font-size: 20px;\n  font-weight: 700;\n  line-height: 1.5;\n  letter-spacing: 0.01em; }\n  @media (min-width: 576px) {\n    .a-typo__title {\n      font-size: 28px;\n      line-height: 1.14; } }\n\n.a-typo__title--semibold {\n  font-size: 20px;\n  font-weight: 600;\n  line-height: 1.5;\n  letter-spacing: 0.01em; }\n  @media (min-width: 576px) {\n    .a-typo__title--semibold {\n      font-size: 28px;\n      line-height: 1.14; } }\n\n.a-typo__item-highlight {\n  font-size: 20px;\n  font-weight: 700;\n  line-height: 1.5;\n  letter-spacing: 0; }\n  @media (min-width: 576px) {\n    .a-typo__item-highlight {\n      font-size: 24px;\n      line-height: 1.2; } }\n\n.a-typo__item-highlight--semibold {\n  font-size: 20px;\n  font-weight: 600;\n  line-height: 1.5;\n  letter-spacing: 0; }\n  @media (min-width: 576px) {\n    .a-typo__item-highlight--semibold {\n      font-size: 24px;\n      line-height: 1.2; } }\n\n.a-typo__item-highlight--regular {\n  font-size: 20px;\n  font-weight: 400;\n  line-height: 1.5;\n  letter-spacing: 0; }\n  @media (min-width: 576px) {\n    .a-typo__item-highlight--regular {\n      font-size: 24px;\n      line-height: 1.2; } }\n\n.a-typo__text {\n  font-size: 18px;\n  font-weight: 400;\n  line-height: 1.5;\n  letter-spacing: 0.01em; }\n  @media (min-width: 576px) {\n    .a-typo__text {\n      font-size: 20px; } }\n\n.a-typo__text--semibold {\n  font-size: 18px;\n  font-weight: 600;\n  line-height: 1.5;\n  letter-spacing: 0.01em; }\n  @media (min-width: 576px) {\n    .a-typo__text--semibold {\n      font-size: 20px; } }\n\n.a-typo__text--bold {\n  font-size: 18px;\n  font-weight: 700;\n  line-height: 1.5;\n  letter-spacing: 0.01em; }\n  @media (min-width: 576px) {\n    .a-typo__text--bold {\n      font-size: 20px; } }\n\n.a-typo__text-longer {\n  font-size: 16px;\n  font-weight: 400;\n  line-height: 1.5;\n  letter-spacing: 0.01em; }\n  @media (min-width: 576px) {\n    .a-typo__text-longer {\n      font-size: 18px; } }\n\n.a-typo__text-longer--bold {\n  font-size: 16px;\n  font-weight: 700;\n  line-height: 1.5;\n  letter-spacing: 0.01em; }\n  @media (min-width: 576px) {\n    .a-typo__text-longer--bold {\n      font-size: 18px; } }\n\n.a-typo__secondary-text {\n  font-size: 14px;\n  font-weight: 400;\n  line-height: 1.5;\n  letter-spacing: 0.02em; }\n  @media (min-width: 576px) {\n    .a-typo__secondary-text {\n      font-size: 16px; } }\n\n.a-typo__secondary-text--semibold {\n  font-size: 14px;\n  font-weight: 600;\n  line-height: 1.5;\n  letter-spacing: 0.02em; }\n  @media (min-width: 576px) {\n    .a-typo__secondary-text--semibold {\n      font-size: 16px; } }\n\n.a-typo__secondary-text--bold {\n  font-size: 14px;\n  font-weight: 700;\n  line-height: 1.5;\n  letter-spacing: 0.02em; }\n  @media (min-width: 576px) {\n    .a-typo__secondary-text--bold {\n      font-size: 16px; } }\n\n.a-typo__tag {\n  font-size: 12px;\n  font-weight: 400;\n  line-height: 1.5;\n  letter-spacing: 0.02em; }\n  @media (min-width: 576px) {\n    .a-typo__tag {\n      font-size: 14px;\n      line-height: 1.21; } }\n\n.a-typo__tag--semibold {\n  font-size: 12px;\n  font-weight: 600;\n  line-height: 1.5;\n  letter-spacing: 0.02em; }\n  @media (min-width: 576px) {\n    .a-typo__tag--semibold {\n      font-size: 14px;\n      line-height: 1.21; } }\n\n.a-typo__tag--bold {\n  font-size: 12px;\n  font-weight: 700;\n  line-height: 1.5;\n  letter-spacing: 0.02em; }\n  @media (min-width: 576px) {\n    .a-typo__tag--bold {\n      font-size: 14px;\n      line-height: 1.21; } }\n\n.a-typo__legals {\n  font-size: 12px;\n  font-weight: 400;\n  line-height: 1.5;\n  letter-spacing: 0.02em; }\n  @media (min-width: 576px) {\n    .a-typo__legals {\n      font-size: 13px;\n      line-height: 1.38; } }\n\n.a-typo__legals--semibold {\n  font-size: 12px;\n  font-weight: 600;\n  line-height: 1.5;\n  letter-spacing: 0.02em; }\n  @media (min-width: 576px) {\n    .a-typo__legals--semibold {\n      font-size: 13px;\n      line-height: 1.38; } }\n\n.a-typo {\n  padding-right: 15px;\n  padding-left: 15px;\n  width: 100%;\n  margin-right: auto;\n  margin-left: auto;\n  max-width: auto;\n  display: block; }\n  @media (min-width: 576px) {\n    .a-typo {\n      max-width: 540px; } }\n  @media (min-width: 768px) {\n    .a-typo {\n      max-width: 720px; } }\n  @media (min-width: 992px) {\n    .a-typo {\n      max-width: 960px; } }\n  @media (min-width: 1200px) {\n    .a-typo {\n      max-width: 1140px; } }\n',Te=/\n[\s]+$/,Ae=/^\n[\s]+/,Pe=/[\s]+$/,Ne=/^[\s]+/,je=/[\n\s]+/g,Se=["a","abbr","b","bdi","bdo","br","cite","data","dfn","em","i","kbd","mark","q","rp","rt","rtc","ruby","s","amp","small","span","strong","sub","sup","time","u","var","wbr"],ze=["code","pre","textarea"],Re=function e(t,n){if(Array.isArray(n))for(var o,i,r=t.nodeName.toLowerCase(),a=!1,l=0,s=n.length;l<s;l++){var c=n[l];if(Array.isArray(c))e(t,c);else{("number"==typeof c||"boolean"==typeof c||"function"==typeof c||c instanceof Date||c instanceof RegExp)&&(c=c.toString());var p=t.childNodes[t.childNodes.length-1];if("string"==typeof c)a=!0,p&&"#text"===p.nodeName?p.nodeValue+=c:(c=document.createTextNode(c),t.appendChild(c),p=c),l===s-1&&(a=!1,-1===Se.indexOf(r)&&-1===ze.indexOf(r)?""===(o=p.nodeValue.replace(Ae,"").replace(Pe,"").replace(Te,"").replace(je," "))?t.removeChild(p):p.nodeValue=o:-1===ze.indexOf(r)&&(i=0===l?"":" ",o=p.nodeValue.replace(Ae,i).replace(Ne," ").replace(Pe,"").replace(Te,"").replace(je," "),p.nodeValue=o));else if(c&&c.nodeType){a&&(a=!1,-1===Se.indexOf(r)&&-1===ze.indexOf(r)?""===(o=p.nodeValue.replace(Ae,"").replace(Te,"").replace(je," "))?t.removeChild(p):p.nodeValue=o:-1===ze.indexOf(r)&&(o=p.nodeValue.replace(Ne," ").replace(Ae,"").replace(Te,"").replace(je," "),p.nodeValue=o));var u=c.nodeName;u&&(r=u.toLowerCase()),t.appendChild(c)}}}},De=function(){var e,t,n,o,i,r,a,l,s,c,p,u,d,h,f,_,m,y,g,v,b,x,O,w,C,k,E,T,A,P,N,j,S,z,R;return R=document.createElement("article"),Re(R,["\n    ",(e=document.createElement("h1"),e.setAttribute("class","a-typo__main-title--publico"),Re(e,["Main Title"]),e),"\n    ",(t=document.createElement("h2"),t.setAttribute("class","a-typo__page-title--publico"),Re(t,["Page Title"]),t),"\n    ",(n=document.createElement("h3"),n.setAttribute("class","a-typo__slice-title--publico"),Re(n,["Slice Title"]),n),"\n    ",(o=document.createElement("h4"),o.setAttribute("class","a-typo__small-module-title--publico"),Re(o,["Small Module Title"]),o),"\n\n    ",(i=document.createElement("h1"),i.setAttribute("class","a-typo__main-title"),Re(i,["Main Title"]),i),"\n    ",(r=document.createElement("h2"),r.setAttribute("class","a-typo__page-title"),Re(r,["Page Title"]),r),"\n    ",(a=document.createElement("h3"),a.setAttribute("class","a-typo__slice-title"),Re(a,["Slice Title"]),a),"\n    ",(l=document.createElement("h4"),l.setAttribute("class","a-typo__small-module-title"),Re(l,["Small Module Title"]),l),"\n    ",(s=document.createElement("h5"),s.setAttribute("class","a-typo__title"),Re(s,["Title"]),s),"\n    ",(c=document.createElement("h5"),c.setAttribute("class","a-typo__title--semibold"),Re(c,["Title (Semibold)"]),c),"\n\n    ",(_=document.createElement("p"),Re(_,["\n      ",(p=document.createElement("span"),p.setAttribute("class","a-typo__item-highlight"),Re(p,["Item Highlight"]),p),"\n      ",(u=document.createElement("br"),u),"\n      ",(d=document.createElement("span"),d.setAttribute("class","a-typo__item-highlight--semibold"),Re(d,["Item Highlight (Semibold)"]),d),"\n      ",(h=document.createElement("br"),h),"\n      ",(f=document.createElement("span"),f.setAttribute("class","a-typo__item-highlight--regular"),Re(f,["Item Highlight (Regular)"]),f),"\n    "]),_),"\n\n    ",(m=document.createElement("p"),m.setAttribute("class","a-typo__text"),Re(m,["Text"]),m),"\n    ",(y=document.createElement("p"),y.setAttribute("class","a-typo__text--semibold"),Re(y,["Text (Semibold)"]),y),"\n    ",(g=document.createElement("p"),g.setAttribute("class","a-typo__text--bold"),Re(g,["Text (Bold)"]),g),"\n    ",(v=document.createElement("p"),v.setAttribute("class","a-typo__text-longer"),Re(v,["Text Longer"]),v),"\n    ",(b=document.createElement("p"),b.setAttribute("class","a-typo__text-longer--bold"),Re(b,["Text Longer (Bold)"]),b),"\n    ",(x=document.createElement("p"),x.setAttribute("class","a-typo__secondary-text"),Re(x,["Secondary Text"]),x),"\n    ",(O=document.createElement("p"),O.setAttribute("class","a-typo__secondary-text--semibold"),Re(O,["Secondary Text (Semibold)"]),O),"\n    ",(w=document.createElement("p"),w.setAttribute("class","a-typo__secondary-text--bold"),Re(w,["Secondary Text (Bold)"]),w),"\n\n    ",(P=document.createElement("p"),Re(P,["\n      ",(C=document.createElement("span"),C.setAttribute("class","a-typo__tag"),Re(C,["Tag"]),C),"\n      ",(k=document.createElement("br"),k),"\n      ",(E=document.createElement("span"),E.setAttribute("class","a-typo__tag--semibold"),Re(E,["Tag (Semibold)"]),E),"\n      ",(T=document.createElement("br"),T),"\n      ",(A=document.createElement("span"),A.setAttribute("class","a-typo__tag--bold"),Re(A,["Tag (Bold)"]),A),"\n    "]),P),"\n\n    ",(z=document.createElement("p"),Re(z,["\n      ",(N=document.createElement("span"),N.setAttribute("class","a-typo__legals"),Re(N,["Legals"]),N),"\n      ",(j=document.createElement("br"),j),"\n      ",(S=document.createElement("span"),S.setAttribute("class","a-typo__legals--semibold"),Re(S,["Legals (Semibold)"]),S),"\n    "]),z),"\n  "]),R},Le=function(e){function t(){return p(this,t),h(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,{styles:Ee,template:De}))}return d(t,we),i(t,[{key:"connectedCallback",value:function(){u(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"connectedCallback",this).call(this),this.className=this.initialClassName+" a-typo"}}]),t}();return Le.tagName="axa-typo",Ce=Le.tagName,ke=Le,customElements.get(Ce)||customElements.define(Ce,ke),Le}();
