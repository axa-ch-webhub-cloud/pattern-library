!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):e.StyleGuideWebComponent=t()}(this,function(){"use strict";var e,_="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},u=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},i=function(){function o(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(e,t,n){return t&&o(e.prototype,t),n&&o(e,n),e}}(),r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},d=function e(t,n,o){null===t&&(t=Function.prototype);var i=Object.getOwnPropertyDescriptor(t,n);if(void 0===i){var r=Object.getPrototypeOf(t);return null===r?void 0:e(r,n,o)}if("value"in i)return i.value;var a=i.get;return void 0!==a?a.call(o):void 0},p=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)},a=function(e,t){var n={};for(var o in e)0<=t.indexOf(o)||Object.prototype.hasOwnProperty.call(e,o)&&(n[o]=e[o]);return n},f=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},h=function e(t,n,o,i){var r=Object.getOwnPropertyDescriptor(t,n);if(void 0===r){var a=Object.getPrototypeOf(t);null!==a&&e(a,n,o,i)}else if("value"in r&&r.writable)r.value=o;else{var s=r.set;void 0!==s&&s.call(i,o)}return o},s=function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var n=[],o=!0,i=!1,r=void 0;try{for(var a,s=e[Symbol.iterator]();!(o=(a=s.next()).done)&&(n.push(a.value),!t||n.length!==t);o=!0);}catch(e){i=!0,r=e}finally{try{!o&&s.return&&s.return()}finally{if(i)throw r}}return n}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")},k=function(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)},l=(function(e){!function(){var r={}.hasOwnProperty;function a(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var o=void 0===n?"undefined":_(n);if("string"===o||"number"===o)e.push(n);else if(Array.isArray(n))e.push(a.apply(null,n));else if("object"===o)for(var i in n)r.call(n,i)&&n[i]&&e.push(i)}}return e.join(" ")}e.exports?e.exports=a:window.classNames=a}()}(e={exports:{}},e.exports),e.exports),t={},o=function(e){return e in t||(t[e]=0),++t[e]},c=function(){try{var e=new window.CustomEvent("test",{cancelable:!0});if(e.preventDefault(),!0!==e.defaultPrevented)throw new Error("Could not prevent default");return window.CustomEvent}catch(e){}return t;function t(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{},n=t.bubbles,o=void 0!==n&&n,i=t.cancelable,r=void 0!==i&&i,a=t.detail,s=void 0===a?void 0:a,l=document.createEvent("CustomEvent");l.initCustomEvent(e,o,r,s);var c=l.preventDefault;return l.preventDefault=function(){c.call(l);try{Object.defineProperty(this,"defaultPrevented",{get:function(){return!0}})}catch(e){this.defaultPrevented=!0}},l}}();function v(e,t,n){var o=3<arguments.length&&void 0!==arguments[3]?arguments[3]:{},i=new c(t,r({},o,{detail:n}));return e.dispatchEvent(i)}var y=function(){var e=!1;if("undefined"!=typeof window&&"function"==typeof window.addEventListener){var t=Object.defineProperty({},"passive",{get:function(){e=!0}}),n=function(){};window.addEventListener("testPassiveEventSupport",n,t),window.removeEventListener("testPassiveEventSupport",n,t)}return e}(),m=/^\s+|\s{2,}|\s+$/g;function b(e,t){return new RegExp("^"+e+"$|^"+e+"\\s|\\s"+e+"\\s|\\s"+e+"$",t)}function g(e){for(var t=arguments.length,n=Array(1<t?t-1:0),o=1;o<t;o++)n[o-1]=arguments[o];var i=w.apply(void 0,[e].concat(n));if(!0!==i){var r=[].concat(n);Array.isArray(i)&&(r=i.reduce(x,[])),r&&(e.className+=" "+r.join(" "))}}function x(e,t){var n=t.className;return t.hasClass||e.push(n),e}function w(e){for(var n=e.className,o=!1,i=!0,t=arguments.length,r=Array(1<t?t-1:0),a=1;a<t;a++)r[a-1]=arguments[a];var s=r.map(function(e){var t=b(e).test(n);t?o=!0:i=!1;return{className:e,hasClass:t}});return!(!i&&!o)&&s}function C(e){for(var t=arguments.length,n=Array(1<t?t-1:0),o=1;o<t;o++)n[o-1]=arguments[o];var i=w.apply(void 0,[e].concat(n));if(!1!==i){var r=[].concat(n);if(Array.isArray(i)&&(r=i.reduce(O,[])),r){var a=e.className;e.className=r.reduce(A,a)}}}function O(e,t){var n=t.className;return t.hasClass&&e.push(n),e}function A(e,t){var n=b(t,"g");return e.replace(n," ").replace(m," ")}var E=/\s+/,N={transitionend:function(){for(var e=document.createElement("div").style,t={transition:"transitionend",OTransition:"oTransitionEnd otransitionend",MozTransition:"transitionend",WebkitTransition:"webkitTransitionEnd"},n=Object.keys(t),o=n.length,i=void 0,r=0;r<o;++r)if(void 0!==e[i=n[r]])return t[i];return""}()};function T(n,e,o,i){var t=4<arguments.length&&void 0!==arguments[4]?arguments[4]:{},r=t.capture,a=void 0!==r&&r,s=t.passive,l=void 0===s||s;if(N[e]&&(e=N[e]),!n||!e)return null;var c=void 0===o?"undefined":_(o),u=o&&"string"===c;if("function"===c){if(i){var d=i;a=d.capture,l=d.passive}i=o}for(var p=y?{capture:a,passive:l}:a,f=u?function(e){var t=e.target;for(;!w(t,o)&&t!==n;)t=t.parentNode;if(t!==n)return i(e,t)}:i,h=e.split(E),v=h.length,m=0;m<v;++m)n.addEventListener(h[m],f,p);return function e(){for(var t=0;t<v;++t)n.removeEventListener(h[t],f,p);!function(e,t){if(!e)return;for(var n=Object.keys(e),o=n.length,i=0;i<o;++i){var r=n[i];if(e[r]===t)return delete e[r]}}(this,e)}}function j(o){var i=1<arguments.length&&void 0!==arguments[1]?arguments[1]:0,e=2<arguments.length&&void 0!==arguments[2]?arguments[2]:{},t=e.leading,r=void 0!==t&&t,n=e.trailing,a=void 0===n||n,s=e.maxWait,l=void 0!==s&&s,c=void 0,u=void 0,d=void 0,p=void 0,f=!1,h=i!==l,v=!1!==l;function m(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return c=t,h&&(u&&clearTimeout(u),u=setTimeout(_,i)),v&&!d&&(d=setTimeout(y,l)),r&&!f&&(f=!0,p=o.apply(void 0,k(c))),p}return m.flush=function(){(u||d)&&(p=o.apply(void 0,k(c)));return g(),p},m.cancel=g,m;function _(){d&&clearTimeout(d),b()}function y(){u&&clearTimeout(u),b()}function b(){a&&(p=o.apply(void 0,k(c))),d=u=null,f=!1}function g(){u&&(clearTimeout(u),u=null),d&&(clearTimeout(d),d=null),c=void 0,f=!1}}var P={};function S(e,t){var n=T(2<arguments.length&&void 0!==arguments[2]?arguments[2]:document,e,t);P[e]||(P[e]={count:0});var o,i=P[e];return i.count++,i.onsubscribe||(i.onsubscribe=j((o=e,function(){v(document,"pubsub/onsubscribe",o),v(document,"pubsub/onsubscribe/"+o,o),P[o]&&delete P[o].unsubscribe}),100)),i.onsubscribe(),function(){i.count--,n.call(this),i.count<=0&&delete P[e]}}T(document,"pubsub/onsubscribe",function(e){var t=e.detail;P[t]||(P[t]={count:0});var n=P[t],o=n.queue;Array.isArray(o)&&(o.forEach(function(e){var t=s(e,3),n=t[0],o=t[1],i=t[2];v(i,n,o)}),delete n.queue)});var D,n=function(e,t){return e===t},L=((D=function(){var e;return(e=console).log.apply(e,arguments)},function(){var i=0<arguments.length&&void 0!==arguments[0]?arguments[0]:n;return function(){for(var e=arguments.length,o=Array(e),t=0;t<e;t++)o[t]=arguments[t];return function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(){return i.apply(void 0,[].concat(o,t))?D.apply(void 0,arguments):void 0}}}})()(!0),function(e){function l(e,t){var n;u(this,l);for(var o="\n    Native Property >>>"+e+"<<< exists already at "+t.nodeName+"#"+t._id+" and evaluates to -> "+t[e]+".\n    Please consult the HTML spec for inherited DOM properties:\n    - Element Interface https://developer.mozilla.org/en-US/docs/Web/API/Element#Properties\n    - Node Interface https://developer.mozilla.org/en-US/docs/Web/API/Node#Properties",i=arguments.length,r=Array(2<i?i-2:0),a=2;a<i;a++)r[a-2]=arguments[a];var s=f(this,(n=l.__proto__||Object.getPrototypeOf(l)).call.apply(n,[this,o].concat(r)));return Error.captureStackTrace&&Error.captureStackTrace(s,l),s.name="PropertyExistsException",s}return p(l,e),l}(Error)),R=/[A-Z]/g;function M(e,t,n){var o=e.toLowerCase(),i=n.charAt(t+1);return 0===t||i.toUpperCase()===i?o:"-"+o}var U=/^\s*(?:true|false|null|undefined|-?[0-9]+\.?[0-9]*|[[{](?:.|[\r\n])*[\]}])\s*$/;function I(t,n){var e=t;if(t&&n!==t){if(U.test(t))try{e=JSON.parse(t)}catch(e){console.error("Attribute "+n+" has an error:\n"+e+"\n",t)}}else e=!0;return e}var V=/(?:^\w|[A-Z]|\b\w|\s+|[-_]+)/g,F=/[-_]+/g;function z(e){return e.replace(V,K)}function K(e,t){return 0==+e||F.test(e)?"":0===t?e.toLowerCase():e.toUpperCase()}function q(e,t){if("function"==typeof e.hasAttribute&&!e.hasAttribute(t))return!1;var n=e.value;return t?n=e.getAttribute(t):t=e.name,n=I(n,t)}var H=["title","checked","disabled"],W=[];var $=1,B=3,G=8;function Z(e,t){var n=e.nodeType,o=e.nodeName;n===$&&function(e,t){for(var n=t.attributes,o=e.attributes,i=null,r=null,a=null,s=null,l=o.length-1;0<=l;--l)if(s=o[l],a=s.name,i=s.namespaceURI,r=s.value,i){var c=s.localName;t.getAttributeNS(i,c||a)!==r&&t.setAttributeNS(i,a,r)}else t.hasAttribute(a)?t.getAttribute(a)!==r&&("null"===r||"undefined"===r?t.removeAttribute(a):t.setAttribute(a,r)):t.setAttribute(a,r);for(var u=n.length-1;0<=u;--u)!1!==(s=n[u]).specified&&(a=s.name,(i=s.namespaceURI)?(a=s.localName||a,e.hasAttributeNS(i,a)||t.removeAttributeNS(i,a)):e.hasAttributeNS(null,a)||t.removeAttribute(a))}(e,t),n!==B&&n!==G||t.nodeValue===e.nodeValue||(t.nodeValue=e.nodeValue),"INPUT"===o?function(e,t){var n=e.value,o=t.value;J(e,t,"checked"),J(e,t,"disabled"),n!==o&&(t.setAttribute("value",n),t.value=n);"null"===n&&(t.value="",t.removeAttribute("value"));e.hasAttributeNS(null,"value")?"range"===t.type&&(t.value=n):t.removeAttribute("value")}(e,t):"OPTION"===o?J(e,t,"selected"):"TEXTAREA"===o&&function(e,t){var n=e.value;n!==t.value&&(t.value=n);if(t.firstChild&&t.firstChild.nodeValue!==n){if(""===n&&t.firstChild.nodeValue===t.placeholder)return;t.firstChild.nodeValue=n}}(e,t)}function J(e,t,n){e[n]!==t[n]&&(t[n]=e[n],e[n]?t.setAttribute(n,""):t.removeAttribute(n))}var X=3;function Y(e,t){return t?e?e.isSameNode&&e.isSameNode(t)?t:e.tagName!==t.tagName?e:(Z(e,t),t.skipChildren&&t.skipChildren()||function(e,t){for(var n=void 0,o=void 0,i=void 0,r=void 0,a=0,s=0;n=t.childNodes[s],o=e.childNodes[s-a],n||o;s++)if(o)if(n)if(Q(o,n))(i=Y(o,n))!==n&&(t.replaceChild(i,n),a++);else{r=null;for(var l=s;l<t.childNodes.length;l++)if(Q(t.childNodes[l],o)){r=t.childNodes[l];break}r?((i=Y(o,r))!==r&&a++,t.insertBefore(i,n)):o.id||n.id?(t.insertBefore(o,n),a++):(i=Y(o,n))!==n&&(t.replaceChild(i,n),a++)}else t.appendChild(o),a++;else t.removeChild(n),s--}(e,t),t):null:e}function Q(e,t){return e.id?e.id===t.id:e.isSameNode?e.isSameNode(t):e.tagName===t.tagName&&(e.type===X&&e.nodeValue===t.nodeValue)}var ee=function(e){function s(e){var t;u(this,s);for(var n="\n    Web Component "+e.nodeName+"%c#"+e._id+" does not accept string as a return from a template. Maybe use bel?}",o=arguments.length,i=Array(1<o?o-1:0),r=1;r<o;r++)i[r-1]=arguments[r];var a=f(this,(t=s.__proto__||Object.getPrototypeOf(s)).call.apply(t,[this,n].concat(i)));return Error.captureStackTrace&&Error.captureStackTrace(a,s),a.name="TemplateNoStringReturnException",a}return p(s,e),s}(Error);function te(){return Reflect.construct(HTMLElement,[],this.__proto__.constructor)}Object.setPrototypeOf(te.prototype,HTMLElement.prototype),Object.setPrototypeOf(te,HTMLElement);var ne=function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(e){return t.reduceRight(function(e,t){return t(e)},e)}}(function(t){return function(e){function a(){var e,t,n;u(this,a);for(var o=arguments.length,i=Array(o),r=0;r<o;r++)i[r]=arguments[r];return(t=n=f(this,(e=a.__proto__||Object.getPrototypeOf(a)).call.apply(e,[this].concat(i))))._makeContextReady=function(){var e=(0<arguments.length&&void 0!==arguments[0]?arguments[0]:{}).detail;n.contextNode&&(clearTimeout(n.timeoutId),n.timeoutId=setTimeout(function(){n.contextCallback(n.contextNode,e)},10)),n.unContextEnabled&&n.unContextEnabled(),n.unContextEnabled=S("context/available",n._makeContextReady)},f(n,t)}return p(a,t),i(a,[{key:"connectedCallback",value:function(){d(a.prototype.__proto__||Object.getPrototypeOf(a.prototype),"connectedCallback",this)&&d(a.prototype.__proto__||Object.getPrototypeOf(a.prototype),"connectedCallback",this).call(this),this.contextCallback&&this._makeContextReady()}},{key:"disconnectedCallback",value:function(){d(a.prototype.__proto__||Object.getPrototypeOf(a.prototype),"disconnectedCallback",this)&&d(a.prototype.__proto__||Object.getPrototypeOf(a.prototype),"disconnectedCallback",this).call(this),this.unContextEnabled&&this.unContextEnabled()}},{key:"provideContext",value:function(){var e=this.nodeName.toLowerCase();this.__isContext=!0,function(e,t){var n=2<arguments.length&&void 0!==arguments[2]?arguments[2]:document;P[e]||(P[e]={count:0,queue:[]});var o=P[e].queue;Array.isArray(o)?o.push([e,t,n]):v(n,e,t)}("context/available",this.__contextName=e)}},{key:"consumeContext",value:function(e){this.__consumedContext=e&&e.toLowerCase()}},{key:"contextNode",get:function(){for(var e=this.__consumedContext,t=this.parentNode;t&&(!t.__isContext||e&&e!==t.__contextName);)t=t.parentNode;return!(!t||!t.__isContext)&&t}}]),a}()},function(t){return function(e){function n(){return u(this,n),f(this,(n.__proto__||Object.getPrototypeOf(n)).apply(this,arguments))}return p(n,t),i(n,[{key:"appendChild",value:function(e){!this._isMorphing&&this._hasTemplate&&this._hasRendered?(this._lightDOMRefs.push(e),this.render()):d(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"appendChild",this).call(this,e)}},{key:"innerText",set:function(e){if(this._hasTemplate&&this._hasRendered){var t=document.createTextNode(e);this._lightDOMRefs=[t],this.render()}else h(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"innerText",e,this)}},{key:"textContent",set:function(e){if(this._hasTemplate&&this._hasRendered){var t=document.createTextNode(e);this._lightDOMRefs=[t],this.render()}else h(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"textContent",e,this)}},{key:"innerHTML",set:function(e){if(this._hasTemplate&&this._hasRendered){var t=document.createElement("div");t.innerHTML=e,this._lightDOMRefs=Array.from(t.children),this.render()}else h(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"innerHTML",e,this)}}]),n}()},function(t){return function(e){function c(e){u(this,c);var l=f(this,(c.__proto__||Object.getPrototypeOf(c)).call(this,e));l._reduceProps=function(e,t){var n=e.props,o=e.shouldUpdate,i=l._hasKeys[t];if(-1===H.indexOf(t)&&i)throw new L(t,l);var r="_"+t,a=n[t],s=l[r];return o||l.shouldUpdateCallback(a,s)?(l[r]=a,l._props[t]=a,i&&h(c.prototype.__proto__||Object.getPrototypeOf(c.prototype),t,a,l),{props:n,shouldUpdate:!0}):{props:n,shouldUpdate:!1}},l._isConnected=!1,l._props={},l._hasKeys={},l.updatedDebounced=j(function(){return l.updated&&l.updated()},50);var t=l.constructor.observedAttributes;return Array.isArray(t)&&t.forEach(function(e){var t,n=z(e),o=n in l;if(-1===H.indexOf(n)&&o)throw new L(n,l);l._hasKeys[n]=o,Object.defineProperty(l,n,t={get:function(){return this._props[n]},set:function(e){this.shouldUpdateCallback(this._props[n],e)&&(this._props[n]=e,o&&h(t.__proto__||Object.getPrototypeOf(t),n,e,this),this._isConnected&&this._hasRendered&&this.updatedDebounced())}})}),l}return p(c,t),i(c,[{key:"connectedCallback",value:function(){var i=this;if(d(c.prototype.__proto__||Object.getPrototypeOf(c.prototype),"connectedCallback",this)&&d(c.prototype.__proto__||Object.getPrototypeOf(c.prototype),"connectedCallback",this).call(this),!this._isConnected){this._isConnected=!0;var e=this.constructor.observedAttributes;this.initialClassName=this.className,Array.isArray(e)&&e.forEach(function(e){var t=z(e);if(i.hasAttribute(e)){var n=q(i,e),o=i._hasKeys[t];i._props[t]=n,o&&h(c.prototype.__proto__||Object.getPrototypeOf(c.prototype),t,n,i)}})}this.updated&&this.updated()}},{key:"attributeChangedCallback",value:function(e,t,n){this.shouldUpdateCallback(n,t)&&(this[z(e)]=I(n))}},{key:"setProps",value:function(e){var t=this.constructor.observedAttributes,n=void 0===t?[]:t;Object.keys(e).filter(function(e){return-1<n.indexOf(e.replace(R,M))}).reduce(this._reduceProps,{props:e,shouldUpdate:!1}).shouldUpdate&&this._isConnected&&this._hasRendered&&this.updated&&this.updated()}},{key:"shouldUpdateCallback",value:function(e,t){return e!==t}},{key:"skipChildren",value:function(){return!this._isMorphing}},{key:"disconnectedCallback",value:function(){this._isConnected=!1}}]),c}()},function(t){return function(e){function l(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{},t=e.template,n=a(e,["template"]);u(this,l);var o=f(this,(l.__proto__||Object.getPrototypeOf(l)).call(this,n));return o._template=t,o._hasTemplate=!!t,o._hasRendered=!1,o.updated=o.render,o}return p(l,t),i(l,[{key:"render",value:function(){var n=this,e=!this._hasRendered;if(this.willRenderCallback(e),this._hasTemplate){var t=this._template;try{if(e){for(var o=document.createDocumentFragment(),i=[];this.firstChild;)i.push(this.firstChild),o.appendChild(this.firstChild);this._lightDOMRefs=i,this.childrenFragment=o}else this._lightDOMRefs.forEach(function(e){var t=e.cloneNode(!0);n.childrenFragment.appendChild(t)});var r=t(this._props,this.childrenFragment),a=document.createDocumentFragment();if(Array.isArray(r))r.forEach(function(e){a.appendChild(e)});else if(r){if("string"==typeof r)throw new ee(this);a.appendChild(r)}if(e)d(l.prototype.__proto__||Object.getPrototypeOf(l.prototype),"appendChild",this).call(this,a);else{var s=this.cloneNode(!1);s._isMorphing=!0,s.appendChild(a),this._isMorphing=!0,function(e,t){if("object"!==(void 0===e?"undefined":_(e)))throw new Error("componentMorph: oldTree should be an object");if("object"!==(void 0===t?"undefined":_(t)))throw new Error("componentMorph: newTree should be an object");Y(t,e)}(this,s),function(){for(var e=void 0;e=W.pop();)delete e.isSameNode;W=[]}(),this._isMorphing=!1}}catch(e){console.error(e)}}this._hasRendered=!0,this.didRenderCallback(e)}},{key:"willRenderCallback",value:function(e){}},{key:"didRenderCallback",value:function(e){}}]),l}()},function(t){return function(e){function r(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{},t=e.styles,n=void 0===t?"":t,o=a(e,["styles"]);u(this,r);var i=f(this,(r.__proto__||Object.getPrototypeOf(r)).call(this,o));return i._styles=n,i}return p(r,t),i(r,[{key:"connectedCallback",value:function(){d(r.prototype.__proto__||Object.getPrototypeOf(r.prototype),"connectedCallback",this)&&d(r.prototype.__proto__||Object.getPrototypeOf(r.prototype),"connectedCallback",this).call(this),this._appendStyles()}},{key:"_appendStyles",value:function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:this;if(this._styles){var t=document.createElement("style"),n=document.createTextNode(this._styles);t.appendChild(n),e.insertAdjacentElement?e.insertAdjacentElement("afterbegin",t):e.appendChild(t)}}}]),r}()})(function(e){function n(e){u(this,n);var t=f(this,(n.__proto__||Object.getPrototypeOf(n)).call(this,e));return t._id=o(t.nodeName),t}return p(n,te),i(n,null,[{key:"uuidv4",value:function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(e){var t=16*Math.random()|0;return("x"==e?t:3&t|8).toString(16)})}}]),n}()),oe={},ie=function(e){function a(){var e,t,n;u(this,a);for(var o=arguments.length,i=Array(o),r=0;r<o;r++)i[r]=arguments[r];return(t=n=f(this,(e=a.__proto__||Object.getPrototypeOf(a)).call.apply(e,[this].concat(i))))._appendStyles=function(){a.appendGlobalStyles(n._styles,n.nodeName)},f(n,t)}return p(a,ne),i(a,null,[{key:"appendGlobalStyles",value:function(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:ne.uuidv4();if(e&&!oe[t]){var n=document.createElement("style"),o=document.createTextNode(e);oe[t]=!0,n.appendChild(o),n.setAttribute("data-c-name",t.toLowerCase()),document.head.appendChild(n)}}}]),a}(),re=".m-footer-links {\n  padding-right: 15px;\n  padding-left: 15px;\n  position: relative;\n  width: 100%;\n  min-height: 1px;\n  max-width: 25%;\n  -webkit-box-flex: 0;\n      -ms-flex: 0 0 25%;\n          flex: 0 0 25%;\n  display: block;\n  margin-left: 0 !important; }\n  @media (max-width: 991px) {\n    .m-footer-links {\n      max-width: 33.33333%;\n      -webkit-box-flex: 0;\n          -ms-flex: 0 0 33.33333%;\n              flex: 0 0 33.33333%; } }\n  @media (max-width: 575px) {\n    .m-footer-links {\n      position: static;\n      width: auto;\n      max-width: none;\n      -webkit-box-flex: 1;\n          -ms-flex: auto;\n              flex: auto;\n      padding: 0; } }\n\n.m-footer-links__row {\n  margin-right: -15px;\n  margin-left: -15px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap; }\n\n.m-footer-links__block {\n  margin-left: 60px; }\n  .m-footer-links__block:first-child {\n    margin-left: 0; }\n  @media (max-width: 575px) {\n    .m-footer-links__block {\n      position: relative; } }\n\n.m-footer-links__category {\n  /* Adds a hyphen where the word breaks, if supported (No Blink) */\n  -webkit-hyphens: auto;\n      -ms-hyphens: auto;\n          hyphens: auto;\n  /* These are technically the same, but use both */\n  overflow-wrap: break-word;\n  word-wrap: break-word;\n  font-size: 14px;\n  font-weight: 700;\n  line-height: 1.5;\n  letter-spacing: 0.02em;\n  display: block;\n  color: #fff;\n  text-transform: uppercase; }\n  @media (min-width: 576px) {\n    .m-footer-links__category {\n      font-size: 16px; } }\n  @media (max-width: 575px) {\n    .m-footer-links__category {\n      font-size: 14px;\n      font-weight: 600;\n      line-height: 1.5;\n      letter-spacing: 0.02em;\n      cursor: pointer;\n      position: relative;\n      padding: 20px 60px 20px 30px;\n      border-bottom: 1px solid #2425aa;\n      background: #3b3fd8; } }\n  @media (max-width: 575px) and (min-width: 576px) {\n    .m-footer-links__category {\n      font-size: 16px; } }\n  @media (max-width: 575px) {\n      .m-footer-links__category:hover, .m-footer-links__category:active, .m-footer-links__category:focus {\n        cursor: pointer; } }\n\n.m-footer-links__category__icon {\n  width: 10px;\n  height: 10px;\n  display: block;\n  fill: currentColor;\n  position: absolute;\n  top: 50%;\n  right: 30px;\n  margin-top: -5px;\n  color: #999;\n  -webkit-transition: -webkit-transform 0.3s ease;\n  transition: -webkit-transform 0.3s ease;\n  transition: transform 0.3s ease;\n  transition: transform 0.3s ease, -webkit-transform 0.3s ease;\n  display: none; }\n  .is-dropdown-open .m-footer-links__category__icon {\n    -webkit-transform: rotate(180deg);\n            transform: rotate(180deg); }\n  @media (max-width: 575px) {\n    .m-footer-links__category__icon {\n      display: block; } }\n\n.m-footer-links__list {\n  padding: 0;\n  margin: 0;\n  list-style-type: none;\n  display: block;\n  padding-top: 15px; }\n  @media (max-width: 991px) {\n    .m-footer-links__list {\n      padding-top: 10px; } }\n  @media (max-width: 575px) {\n    .m-footer-links__list {\n      position: absolute;\n      top: 100%;\n      z-index: 1000;\n      height: 0;\n      min-width: 100%;\n      overflow: hidden;\n      -webkit-transition: height 0.3s ease;\n      transition: height 0.3s ease;\n      position: static;\n      display: block;\n      margin: 0;\n      padding: 0;\n      background: #3032c1; }\n      .is-dropdown-open > .m-footer-links__list {\n        height: auto; } }\n  @media (min-width: 576px) {\n    .m-footer-links__list {\n      height: auto !important; } }\n\n.m-footer-links__list-item {\n  display: block;\n  width: 100%;\n  margin-top: 10px; }\n  @media (max-width: 991px) {\n    .m-footer-links__list-item {\n      margin-top: 8px; } }\n  @media (max-width: 575px) {\n    .m-footer-links__list-item {\n      margin-top: 0;\n      border-bottom: 1px solid #3b3fd8; }\n      .m-footer-links__list-item:last-child {\n        border-bottom: none; } }\n\n.m-footer-links__link {\n  /* Adds a hyphen where the word breaks, if supported (No Blink) */\n  -webkit-hyphens: auto;\n      -ms-hyphens: auto;\n          hyphens: auto;\n  /* These are technically the same, but use both */\n  overflow-wrap: break-word;\n  word-wrap: break-word;\n  font-size: 12px;\n  font-weight: 400;\n  line-height: 1.5;\n  letter-spacing: 0.02em;\n  display: block;\n  padding: 5px 0;\n  color: #fff; }\n  @media (min-width: 576px) {\n    .m-footer-links__link {\n      font-size: 14px;\n      line-height: 1.21; } }\n  .is-footer-links__list-item-active > .m-footer-links__link, .m-footer-links__link:hover, .m-footer-links__link:active, .m-footer-links__link:focus {\n    color: rgba(255, 255, 255, 0.65);\n    text-decoration: none; }\n  @media (max-width: 575px) {\n    .m-footer-links__link {\n      padding: 20px 30px; } }\n\n.m-footer-links--cols-2 {\n  max-width: 41.66667%;\n  -webkit-box-flex: 0;\n      -ms-flex: 0 0 41.66667%;\n          flex: 0 0 41.66667%; }\n  @media (min-width: 576px) {\n    .m-footer-links--cols-2 .m-footer-links__list {\n      -webkit-column-count: 2;\n              column-count: 2; } }\n  @media (min-width: 576px) {\n    .m-footer-links--cols-2 .m-footer-links__list-item {\n      display: inline-block; } }\n  @media (max-width: 991px) {\n    .m-footer-links--cols-2 {\n      max-width: 66.66667%;\n      -webkit-box-flex: 0;\n          -ms-flex: 0 0 66.66667%;\n              flex: 0 0 66.66667%; } }\n  @media (max-width: 575px) {\n    .m-footer-links--cols-2 {\n      position: static;\n      width: auto;\n      max-width: none;\n      -webkit-box-flex: 1;\n          -ms-flex: auto;\n              flex: auto; } }\n",ae=/\n[\s]+$/,se=/^\n[\s]+/,le=/[\s]+$/,ce=/^[\s]+/,ue=/[\n\s]+/g,de=["a","abbr","b","bdi","bdo","br","cite","data","dfn","em","i","kbd","mark","q","rp","rt","rtc","ruby","s","amp","small","span","strong","sub","sup","time","u","var","wbr"],pe=["code","pre","textarea"],fe=function e(t,n){if(Array.isArray(n))for(var o,i,r=t.nodeName.toLowerCase(),a=!1,s=0,l=n.length;s<l;s++){var c=n[s];if(Array.isArray(c))e(t,c);else{("number"==typeof c||"boolean"==typeof c||"function"==typeof c||c instanceof Date||c instanceof RegExp)&&(c=c.toString());var u=t.childNodes[t.childNodes.length-1];if("string"==typeof c)a=!0,u&&"#text"===u.nodeName?u.nodeValue+=c:(c=document.createTextNode(c),t.appendChild(c),u=c),s===l-1&&(a=!1,-1===de.indexOf(r)&&-1===pe.indexOf(r)?""===(o=u.nodeValue.replace(se,"").replace(le,"").replace(ae,"").replace(ue," "))?t.removeChild(u):u.nodeValue=o:-1===pe.indexOf(r)&&(i=0===s?"":" ",o=u.nodeValue.replace(se,i).replace(ce," ").replace(le,"").replace(ae,"").replace(ue," "),u.nodeValue=o));else if(c&&c.nodeType){a&&(a=!1,-1===de.indexOf(r)&&-1===pe.indexOf(r)?""===(o=u.nodeValue.replace(se,"").replace(ae,"").replace(ue," "))?t.removeChild(u):u.nodeValue=o:-1===pe.indexOf(r)&&(o=u.nodeValue.replace(ce," ").replace(se,"").replace(ae,"").replace(ue," "),u.nodeValue=o));var d=c.nodeName;d&&(r=d.toLowerCase()),t.appendChild(c)}}}};var he=function(e){var t,n=document.createElement("div");return n.innerHTML=e,t=n.childNodes,Array.isArray(t)?t:[].slice.call(t)},ve='<axa-icon icon="angle-bracket-down" classes="m-footer-links__category__icon"></axa-icon>';function me(e){var t,n,o,i=e.title,r=e.items;return(o=document.createElement("div")).setAttribute("class","m-footer-links__block js-dropdown"),fe(o,["\n    ",(t=document.createElement("strong"),t.setAttribute("class","m-footer-links__category js-dropdown__toggle"),fe(t,[i,he(ve)]),t),"\n\n    ",(n=document.createElement("ul"),n.setAttribute("class","m-footer-links__list"),fe(n,["\n      ",Array.isArray(r)&&r.map(function(e,t){var n,o,i=e.name,r=e.url,a=e.isActive;return(o=document.createElement("li")).setAttribute("class","m-footer-links__list-item "+String(a?"is-footer-links__list-item-active":"")),fe(o,["\n          ",(n=document.createElement("a"),n.setAttribute("href",""+String(r)),n.setAttribute("index",""+String(t)),n.setAttribute("class","m-footer-links__link js-footer-links__link"),fe(n,[i]),n),"\n        "]),o}),"\n    "]),n),"\n  "]),o}var _e=/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream;function ye(n,e,o){var t,i=3<arguments.length&&void 0!==arguments[3]?arguments[3]:{},r=i.capture,a=void 0===r||r,s=i.passive,l=void 0===s||s,c=n.ownerDocument.documentElement,u=T(c,e,function(e){var t=e.target;if(!n.contains(t)&&n!==t)return o(e)},{capture:a,passive:l});return t=c,_e&&(t.style.cursor="pointer"),u}var be=function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];for(var o=t.length,i={},r=0;r<o;++r){var a=t[r];i[a.toUpperCase()]=a}return i}("click","keyup","enter","move","leave","Escape","Esc"),ge="data-prevent-default",ke=function(){function o(e){var r=this,t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{};u(this,o),this._handleClick=function(e,t){r.shouldPreventDefault(t||e.currentTarget)&&e.preventDefault();var n=!r._lastToggleNode,o=t!==r._lastToggleNode,i=!n&&!o;n?(r._notify(be.ENTER,t),r._onInteractive()):o&&r._notify(be.MOVE,t,r._lastToggleNode),r._lastToggleNode=t,i&&r._options.sameClickClose&&r._close()},this._handleClose=function(e,t){r.shouldPreventDefault(t||e.currentTarget)&&e.preventDefault(),r._close()},this._handleKeyUp=function(e){(e.key===be.ESCAPE||e.key===be.ESC||27===e.keyCode)&&(e.preventDefault(),r._close())},this._init(e,t)}return i(o,[{key:"_init",value:function(e,t){e&&(this._wcNode=e),t&&(this._options=r({},o.DEFAULTS,t));var n=this._options.containerClass;this._container=n?this._wcNode.querySelector(n):this._wcNode,this._on()}},{key:"_on",value:function(){this._off(),this._unClick=T(this._container,be.CLICK,this._options.toggleClass,this._handleClick,{passive:!this._options.preventDefault})}},{key:"_off",value:function(){this._unClick&&this._unClick(),this._offInteractive()}},{key:"_onInteractive",value:function(){this._offInteractive(),this._options.closeClass&&(this._unCloseClick=T(this._container,be.CLICK,this._options.closeClass,this._handleClose,{passive:!this._options.preventDefault})),this._options.outerClose&&(this._unOuterClick=ye(this._container,be.CLICK,this._handleClose,{passive:!this._options.preventDefault})),this._options.escapeClose&&(this._unCloseEscape=T(this._container.ownerDocument,be.KEYUP,this._handleKeyUp,{passive:!1}))}},{key:"shouldPreventDefault",value:function(e){return e.hasAttribute(ge)?q(e,ge):this._options.preventDefault}},{key:"_offInteractive",value:function(){this._unOuterClick&&this._unOuterClick(),this._unCloseClick&&this._unCloseClick(),this._unCloseEscape&&this._unCloseEscape(),delete this._lastToggleNode}},{key:"_close",value:function(){this._lastToggleNode&&(this._notify(be.LEAVE,this._lastToggleNode),this._offInteractive(),delete this._lastToggleNode)}},{key:"_notify",value:function(e,t,n){e in this&&"function"==typeof this[e]&&this[e](t,n)}},{key:"enter",value:function(e){throw new Error("UiEvent.enter method not overwritten")}},{key:"move",value:function(e,t){}},{key:"leave",value:function(e){throw new Error("UiEvent.leave method not overwritten")}},{key:"destroy",value:function(){this._off(),delete this._wcNode,delete this._options}}]),o}();ke.DEFAULTS={containerClass:".js-ui-container",toggleClass:"js-ui-toggle",closeClass:"js-ui-close",escapeClose:!0,outerClose:!0,sameClickClose:!0,preventDefault:!0};var xe,we=function(){if(!window.getComputedStyle)return null;var e=window.getComputedStyle(document.documentElement,""),t=(Array.prototype.slice.call(e).join("").match(/-(moz|webkit|ms)-/)||""===e.OLink&&["","o"])[1];return{dom:"WebKit|Moz|MS|O".match(new RegExp("("+t+")","i"))[1],lowercase:t,css:"-"+t+"-",js:t[0].toUpperCase()+t.slice(1)}}().lowercase,Ce=function(){var e=window.requestAnimationFrame||window[we+"RequestAnimationFrame"];if(e)e=e.bind(window);else{var i=0;e=function(e){var t=Date.now(),n=Math.max(0,16-(t-i)),o=setTimeout(function(){e(t+n)},n);return i=t+n,o}}return e}(),Oe=(xe=(xe=window.cancelAnimationFrame||window[we+"CancelAnimationFrame"]||window[we+"CancelRequestAnimationFrame"])?xe.bind(window):function(e){clearTimeout(e)},function(e){function o(e,t){u(this,o),t=r({},o.DEFAULTS,t);var n=f(this,(o.__proto__||Object.getPrototypeOf(o)).call(this,e,t));return n.handleTransitionEnd=function(e){"height"===e.propertyName&&(n.isOpen&&(e.target.style.height=""),n.offInteractive(),C(n.wcNode,n.options.isAnimatingClass))},n.options=t,n.wcNode=e,n.isOpen=!1,n}return p(o,ke),i(o,[{key:"onInteractive",value:function(){this.offInteractive(),this.unTransitionEnd=T(this.wcNode,"transitionend",this.handleTransitionEnd)}},{key:"offInteractive",value:function(){this.unTransitionEnd&&this.unTransitionEnd()}},{key:"enter",value:function(e){var t=e.parentNode,n=t.lastElementChild;if(!this.isOpen){this.isOpen=!0,g(t,this.options.isAnimatingClass),n.style.overflow="scroll";var o=n.scrollHeight;n.style.overflow="",this.onInteractive(),n.style.height=o+"px",g(t,this.options.isOpenClass)}}},{key:"leave",value:function(e){var t=this,n=e.parentNode,o=n.lastElementChild,i=o.scrollHeight;this.isOpen&&(this.isOpen=!1,this.onInteractive(),g(n,this.options.isAnimatingClass),Ce(function(){o.style.height=i+"px",Ce(function(){C(n,t.options.isOpenClass),o.style.height=0})}))}},{key:"reset",value:function(){var e=this.wcNode.querySelector(this.options.containerClass);e&&(e.lastElementChild.style.height="",C(e,this.options.isOpenClass))}},{key:"destroy",value:function(){d(o.prototype.__proto__||Object.getPrototypeOf(o.prototype),"destroy",this).call(this),this.reset(),delete this.wcNode,delete this.options}}]),o}());Oe.DEFAULTS={containerClass:".js-dropdown",toggleClass:"js-dropdown__toggle",isOpenClass:"is-dropdown-open",isAnimatingClass:"is-dropdown-animating"};var Ae=function(){function n(e,t){u(this,n),this.wcNode=e,this.options=r({},n.DEFAULTS,t),this.handleClick=this.handleClick.bind(this),this.on()}return i(n,[{key:"on",value:function(){var o=this;this.off(),this.unsubscribe=S("device-state/change",function(e){var t=e.detail.breakpoint,n=-1<"xs".indexOf(t);n&&!o.dropDown?o.dropDown=new Oe(o.wcNode):!n&&o.dropDown&&(o.dropDown.destroy(),delete o.dropDown)}),this.unClick=T(this.wcNode,"click",this.options.link,this.handleClick,{passive:!1})}},{key:"off",value:function(){this.unsubscribe&&this.unsubscribe(),this.unClick&&this.unClick()}},{key:"handleClick",value:function(e,t){var n=q(t,"index"),o=this.wcNode.items;v(this.wcNode,"axa-click",o[n],{bubbles:!0,cancelable:!0,composed:!0})||e.preventDefault()}},{key:"destroy",value:function(){this.off(),this.dropDown&&(this.dropDown.destroy(),delete this.dropDown),delete this.wcNode}}]),n}();Ae.DEFAULTS={link:"js-footer-links__link"};var Ee,Ne,Te,je=function(e){function t(){return u(this,t),f(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,{styles:re,template:me}))}return p(t,ie),i(t,null,[{key:"observedAttributes",get:function(){return["cols","items","title"]}}]),i(t,[{key:"connectedCallback",value:function(){d(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"connectedCallback",this).call(this)}},{key:"willRenderCallback",value:function(){var e,t,n,o=this.cols;this.className=l(this.initialClassName,"m-footer-links",((t="m-footer-links--cols-"+(n=o))in(e={"m-footer-links--cols":o})?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e))}},{key:"didRenderCallback",value:function(){this.footerLinks&&this.footerLinks.destroy(),this.footerLinks=new Ae(this)}},{key:"disconnectedCallback",value:function(){this.footerLinks&&(this.footerLinks.destroy(),delete this.footerLinks)}}]),t}();return je.tagName="axa-footer-links",Ee=function(){window.customElements.define(je.tagName,je)},Ne=0,Te=function(){if(0===Ne)try{Ee.apply(void 0,arguments),Ne+=1,document.removeEventListener("DOMContentLoaded"),document.removeEventListener("WebComponentsReady")}catch(e){}},document.addEventListener("DOMContentLoaded",Te,!1),document.addEventListener("WebComponentsReady",Te,!1),je});
