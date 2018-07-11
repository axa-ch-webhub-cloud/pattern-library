!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):t.StyleGuideWebComponent=e()}(this,function(){"use strict";var t={},e=function(e){return e in t||(t[e]=0),++t[e]},n=function(){try{var t=new window.CustomEvent("test",{cancelable:!0});if(t.preventDefault(),!0!==t.defaultPrevented)throw new Error("Could not prevent default");return window.CustomEvent}catch(t){}return e;function e(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=e.bubbles,r=void 0!==n&&n,o=e.cancelable,i=void 0!==o&&o,a=e.detail,u=void 0===a?void 0:a,c=document.createEvent("CustomEvent");c.initCustomEvent(t,r,i,u);var s=c.preventDefault;return c.preventDefault=function(){s.call(c);try{Object.defineProperty(this,"defaultPrevented",{get:function(){return!0}})}catch(t){this.defaultPrevented=!0}},c}}(),r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},o=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")},i=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),a=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},u=function t(e,n,r){null===e&&(e=Function.prototype);var o=Object.getOwnPropertyDescriptor(e,n);if(void 0===o){var i=Object.getPrototypeOf(e);return null===i?void 0:t(i,n,r)}if("value"in o)return o.value;var a=o.get;return void 0!==a?a.call(r):void 0},c=function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)},s=function(t,e){var n={};for(var r in t)e.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r]);return n},l=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e},d=function t(e,n,r,o){var i=Object.getOwnPropertyDescriptor(e,n);if(void 0===i){var a=Object.getPrototypeOf(e);null!==a&&t(a,n,r,o)}else if("value"in i&&i.writable)i.value=r;else{var u=i.set;void 0!==u&&u.call(o,r)}return r},p=function(){return function(t,e){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return function(t,e){var n=[],r=!0,o=!1,i=void 0;try{for(var a,u=t[Symbol.iterator]();!(r=(a=u.next()).done)&&(n.push(a.value),!e||n.length!==e);r=!0);}catch(t){o=!0,i=t}finally{try{!r&&u.return&&u.return()}finally{if(o)throw i}}return n}(t,e);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),f=function(t){if(Array.isArray(t)){for(var e=0,n=Array(t.length);e<t.length;e++)n[e]=t[e];return n}return Array.from(t)};function h(t,e,r){var o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},i=new n(e,a({},o,{detail:r}));return t.dispatchEvent(i)}var v=function(){var t=!1;if("undefined"!=typeof window&&"function"==typeof window.addEventListener){var e=Object.defineProperty({},"passive",{get:function(){t=!0}}),n=function(){};window.addEventListener("testPassiveEventSupport",n,e),window.removeEventListener("testPassiveEventSupport",n,e)}return t}();function y(t){for(var e=t.className,n=!1,r=!0,o=arguments.length,i=Array(o>1?o-1:0),a=1;a<o;a++)i[a-1]=arguments[a];var u=i.map(function(t){var o=(i=t,new RegExp("^"+i+"$|^"+i+"\\s|\\s"+i+"\\s|\\s"+i+"$",a)).test(e);var i,a;o?n=!0:r=!1;return{className:t,hasClass:o}});return!(!r&&!n)&&u}var _=/\s+/,b={transitionend:function(){for(var t=document.createElement("div").style,e={transition:"transitionend",OTransition:"oTransitionEnd otransitionend",MozTransition:"transitionend",WebkitTransition:"webkitTransitionEnd"},n=Object.keys(e),r=n.length,o=void 0,i=0;i<r;++i)if(void 0!==t[o=n[i]])return e[o];return""}()};function m(t,e,n,o){var i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{},a=i.capture,u=void 0!==a&&a,c=i.passive,s=void 0===c||c;if(b[e]&&(e=b[e]),!t||!e)return null;var l=void 0===n?"undefined":r(n),d=n&&"string"===l;if("function"===l){if(o){var p=o;u=p.capture,s=p.passive}o=n}for(var f=v?{capture:u,passive:s}:u,h=d?function(e){var r=e.target;for(;!y(r,n)&&r!==t;)r=r.parentNode;if(r!==t)return o(e,r)}:o,m=e.split(_),g=m.length,O=0;O<g;++O)t.addEventListener(m[O],h,f);return function e(){for(var n=0;n<g;++n)t.removeEventListener(m[n],h,f);!function(t,e){if(!t)return!1;for(var n=Object.keys(t),r=n.length,o=0;o<r;++o){var i=n[o];if(t[i]===e)return delete t[i]}}(this,e)}}function g(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=n.leading,o=void 0!==r&&r,i=n.trailing,a=void 0===i||i,u=n.maxWait,c=void 0!==u&&u,s=void 0,l=void 0,d=void 0,p=void 0,h=!1,v=e!==c,y=!1!==c;function _(){for(var n=arguments.length,r=Array(n),i=0;i<n;i++)r[i]=arguments[i];return s=r,v&&(l&&clearTimeout(l),l=setTimeout(b,e)),y&&!d&&(d=setTimeout(m,c)),o&&!h&&(h=!0,p=t.apply(void 0,f(s))),p}return _.flush=function(){(l||d)&&(p=t.apply(void 0,f(s)));return O(),p},_.cancel=O,_;function b(){d&&clearTimeout(d),g()}function m(){l&&clearTimeout(l),g()}function g(){a&&(p=t.apply(void 0,f(s))),l=null,d=null,h=!1}function O(){l&&(clearTimeout(l),l=null),d&&(clearTimeout(d),d=null),s=void 0,h=!1}}window.__subscriptions=window.__subscriptions||{};var O=window.__subscriptions;function C(t,e){var n=m(arguments.length>2&&void 0!==arguments[2]?arguments[2]:document,t,e);O[t]||(O[t]={count:0});var r,o=O[t];return o.count++,o.onsubscribe||(o.onsubscribe=g((r=t,function(){h(document,"pubsub/onsubscribe",r),h(document,"pubsub/onsubscribe/"+r,r),O[r]&&delete O[r].unsubscribe}),100)),o.onsubscribe(),function(){o.count--,n.call(this),o.count<=0&&delete O[t]}}m(document,"pubsub/onsubscribe",function(t){var e=t.detail;O[e]||(O[e]={count:0});var n=O[e],r=n.queue;Array.isArray(r)&&(r.forEach(function(t){var e=p(t,3),n=e[0],r=e[1],o=e[2];h(o,n,r)}),delete n.queue)});var x,k=function(t,e){return t===e},A=((x=function(){var t;return(t=console).log.apply(t,arguments)},function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:k;return function(){for(var e=arguments.length,n=Array(e),r=0;r<e;r++)n[r]=arguments[r];return function(){for(var e=arguments.length,r=Array(e),o=0;o<e;o++)r[o]=arguments[o];return function(){return t.apply(void 0,[].concat(n,r))?x.apply(void 0,arguments):void 0}}}})()(!0),function(t){function e(t,n){var r;o(this,e);for(var i="\n    Native Property >>>"+t+"<<< exists already at "+n.nodeName+"#"+n._id+" and evaluates to -> "+n[t]+".\n    Please consult the HTML spec for inherited DOM properties:\n    - Element Interface https://developer.mozilla.org/en-US/docs/Web/API/Element#Properties\n    - Node Interface https://developer.mozilla.org/en-US/docs/Web/API/Node#Properties",a=arguments.length,u=Array(a>2?a-2:0),c=2;c<a;c++)u[c-2]=arguments[c];var s=l(this,(r=e.__proto__||Object.getPrototypeOf(e)).call.apply(r,[this,i].concat(u)));return Error.captureStackTrace&&Error.captureStackTrace(s,e),s.name="PropertyExistsException",s}return c(e,t),e}(Error)),w=/[A-Z]/g;function N(t,e,n){var r=t.toLowerCase(),o=n.charAt(e+1);return 0===e||o.toUpperCase()===o?r:"-"+r}var P=/^\s*(?:true|false|null|undefined|-?[0-9]+\.?[0-9]*|[[{](?:.|[\s])*[\]}])\s*$/;function E(t,e){var n=t;if(t&&e!==t){if(P.test(t))try{n=JSON.parse(t)}catch(n){console.error("Attribute "+e+" has an error:\n"+n+"\n",t)}}else n=!0;return n}var j=/(?:^\w|[A-Z]|\b\w|\s+|[-_]+)/g,T=/[-_]+/g;function S(t){return t.replace(j,R)}function R(t,e){return 0==+t||T.test(t)?"":0===e?t.toLowerCase():t.toUpperCase()}var M=["title","checked","disabled"],D=[];var L=1,U=3,I=8;function F(t,e){var n=t.nodeType,r=t.nodeName;n===L&&function(t,e){for(var n=e.attributes,r=t.attributes,o=null,i=null,a=null,u=null,c=r.length-1;c>=0;--c)if(u=r[c],a=u.name,o=u.namespaceURI,i=u.value,o){var s=u.localName;e.getAttributeNS(o,s||a)!==i&&e.setAttributeNS(o,a,i)}else e.hasAttribute(a)?e.getAttribute(a)!==i&&("null"===i||"undefined"===i?e.removeAttribute(a):e.setAttribute(a,i)):e.setAttribute(a,i);for(var l=n.length-1;l>=0;--l)!1!==(u=n[l]).specified&&(a=u.name,(o=u.namespaceURI)?(a=u.localName||a,t.hasAttributeNS(o,a)||e.removeAttributeNS(o,a)):t.hasAttributeNS(null,a)||e.removeAttribute(a))}(t,e),n!==U&&n!==I||e.nodeValue===t.nodeValue||(e.nodeValue=t.nodeValue),"INPUT"===r?function(t,e){var n=t.value,r=e.value;V(t,e,"checked"),V(t,e,"disabled"),n!==r&&(e.setAttribute("value",n),e.value=n);"null"===n&&(e.value="",e.removeAttribute("value"));t.hasAttributeNS(null,"value")?"range"===e.type&&(e.value=n):e.removeAttribute("value")}(t,e):"OPTION"===r?V(t,e,"selected"):"TEXTAREA"===r&&function(t,e){var n=t.value;n!==e.value&&(e.value=n);if(e.firstChild&&e.firstChild.nodeValue!==n){if(""===n&&e.firstChild.nodeValue===e.placeholder)return;e.firstChild.nodeValue=n}}(t,e)}function V(t,e,n){t[n]!==e[n]&&(e[n]=t[n],t[n]?e.setAttribute(n,""):e.removeAttribute(n))}var H=3;function W(t,e){return e?t?t.isSameNode&&t.isSameNode(e)?e:t.tagName!==e.tagName?t:(F(t,e),e.skipChildren&&e.skipChildren()||function(t,e){for(var n=void 0,r=void 0,o=void 0,i=void 0,a=0,u=0;n=e.childNodes[u],r=t.childNodes[u-a],n||r;u++)if(r)if(n)if(q(r,n))(o=W(r,n))!==n&&(e.replaceChild(o,n),a++);else{i=null;for(var c=u;c<e.childNodes.length;c++)if(q(e.childNodes[c],r)){i=e.childNodes[c];break}i?((o=W(r,i))!==i&&a++,e.insertBefore(o,n)):r.id||n.id?(e.insertBefore(r,n),a++):(o=W(r,n))!==n&&(e.replaceChild(o,n),a++)}else e.appendChild(r),a++;else e.removeChild(n),u--}(t,e),e):null:t}function q(t,e){return t.id?t.id===e.id:t.isSameNode?t.isSameNode(e):t.tagName===e.tagName&&(t.type===H&&t.nodeValue===e.nodeValue)}var K=function(t){function e(t){var n;o(this,e);for(var r="\n    Web Component "+t.nodeName+"%c#"+t._id+" does not accept string as a return from a template. Maybe use bel?}",i=arguments.length,a=Array(i>1?i-1:0),u=1;u<i;u++)a[u-1]=arguments[u];var c=l(this,(n=e.__proto__||Object.getPrototypeOf(e)).call.apply(n,[this,r].concat(a)));return Error.captureStackTrace&&Error.captureStackTrace(c,e),c.name="TemplateNoStringReturnException",c}return c(e,t),e}(Error),z=!!document.createDocumentFragment().children;function G(){return Reflect.construct(HTMLElement,[],this.__proto__.constructor)}Object.setPrototypeOf(G.prototype,HTMLElement.prototype),Object.setPrototypeOf(G,HTMLElement);var $=function(){for(var t=arguments.length,e=Array(t),n=0;n<t;n++)e[n]=arguments[n];return function(t){return e.reduceRight(function(t,e){return e(t)},t)}}(function(t){return function(e){function n(){var t,e,r;o(this,n);for(var i=arguments.length,a=Array(i),u=0;u<i;u++)a[u]=arguments[u];return e=r=l(this,(t=n.__proto__||Object.getPrototypeOf(n)).call.apply(t,[this].concat(a))),r._makeContextReady=function(){var t=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}).detail;r.contextNode&&(clearTimeout(r.timeoutId),r.timeoutId=setTimeout(function(){r.contextCallback(r.contextNode,t)},10)),r.unContextEnabled&&r.unContextEnabled(),r.unContextEnabled=C("context/available",r._makeContextReady)},l(r,e)}return c(n,t),i(n,[{key:"connectedCallback",value:function(){u(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"connectedCallback",this)&&u(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"connectedCallback",this).call(this),this.contextCallback&&this._makeContextReady()}},{key:"disconnectedCallback",value:function(){u(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"disconnectedCallback",this)&&u(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"disconnectedCallback",this).call(this),this.unContextEnabled&&this.unContextEnabled()}},{key:"provideContext",value:function(){var t=this.nodeName.toLowerCase();this.__isContext=!0,this.__contextName=t,function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:document;O[t]||(O[t]={count:0,queue:[]});var r=O[t].queue;Array.isArray(r)?r.push([t,e,n]):h(n,t,e)}("context/available",t)}},{key:"consumeContext",value:function(t){this.__consumedContext=t&&t.toLowerCase()}},{key:"contextNode",get:function(){for(var t=this.__consumedContext,e=this.parentNode;e&&(!e.__isContext||t&&t!==e.__contextName);)e=e.parentNode;return!(!e||!e.__isContext)&&e}}]),n}()},function(t){return function(e){function n(){return o(this,n),l(this,(n.__proto__||Object.getPrototypeOf(n)).apply(this,arguments))}return c(n,t),i(n,[{key:"appendChild",value:function(t){!this._isMorphing&&this._hasTemplate&&this._hasRendered?(this._lightDOMRefs.push(t),this.render()):u(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"appendChild",this).call(this,t)}},{key:"innerText",set:function(t){if(this._hasTemplate&&this._hasRendered){var e=document.createTextNode(t);this._lightDOMRefs=[e],this.render()}else d(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"innerText",t,this)}},{key:"textContent",set:function(t){if(this._hasTemplate&&this._hasRendered){var e=document.createTextNode(t);this._lightDOMRefs=[e],this.render()}else d(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"textContent",t,this)}},{key:"innerHTML",set:function(t){if(this._hasTemplate&&this._hasRendered){var e=document.createElement("div");e.innerHTML=t,this._lightDOMRefs=Array.from(e.children),this.render()}else d(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"innerHTML",t,this)}}]),n}()},function(t){return function(e){function n(t){o(this,n);var e=l(this,(n.__proto__||Object.getPrototypeOf(n)).call(this,t));e._reduceProps=function(t,r){var o=t.props,i=t.shouldUpdate,a=e._hasKeys[r];if(-1===M.indexOf(r)&&a)throw new A(r,e);var u="_"+r,c=o[r],s=e[u];return i||e.shouldUpdateCallback(c,s)?(e[u]=c,e._props[r]=c,a&&d(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),r,c,e),{props:o,shouldUpdate:!0}):{props:o,shouldUpdate:!1}},e._isConnected=!1,e._props={},e._hasKeys={},e.updatedDebounced=g(function(){return e.updated&&e.updated()},50);var r=e.constructor.observedAttributes;return Array.isArray(r)&&r.forEach(function(t){var n,r=S(t),o=r in e;if(-1===M.indexOf(r)&&o)throw new A(r,e);e._hasKeys[r]=o,Object.defineProperty(e,r,n={get:function(){return this._props[r]},set:function(t){this.shouldUpdateCallback(this._props[r],t)&&(this._props[r]=t,o&&d(n.__proto__||Object.getPrototypeOf(n),r,t,this),this._isConnected&&this._hasRendered&&this.updatedDebounced())}})}),e}return c(n,t),i(n,[{key:"connectedCallback",value:function(){var t=this;if(u(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"connectedCallback",this)&&u(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"connectedCallback",this).call(this),!this._isConnected){this._isConnected=!0;var e=this.constructor.observedAttributes;this.initialClassName=this.className,Array.isArray(e)&&e.forEach(function(e){var r=S(e);if(t.hasAttribute(e)){var o=function(t,e){if("function"==typeof t.hasAttribute&&!t.hasAttribute(e))return!1;var n=t.value;return e?n=t.getAttribute(e):e=t.name,n=E(n,e)}(t,e),i=t._hasKeys[r];t._props[r]=o,i&&d(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),r,o,t)}})}this.updated&&this.updated()}},{key:"attributeChangedCallback",value:function(t,e,n){this.shouldUpdateCallback(n,e)&&(this[S(t)]=E(n))}},{key:"setProps",value:function(t){var e=this.constructor.observedAttributes,n=void 0===e?[]:e;Object.keys(t).filter(function(t){return n.indexOf(t.replace(w,N))>-1}).reduce(this._reduceProps,{props:t,shouldUpdate:!1}).shouldUpdate&&this._isConnected&&this._hasRendered&&this.updated&&this.updated()}},{key:"shouldUpdateCallback",value:function(t,e){return t!==e}},{key:"disconnectedCallback",value:function(){this._isConnected=!1}}]),n}()},function(t){return function(e){function n(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.template,r=s(t,["template"]);o(this,n);var i=l(this,(n.__proto__||Object.getPrototypeOf(n)).call(this,r));return i._template=e,i._hasTemplate=!!e,i._hasRendered=!1,i.updated=i.render,i}return c(n,t),i(n,[{key:"render",value:function(){var t=this,e=!this._hasRendered;if(this.willRenderCallback(e),this._hasTemplate){var o=this._template;try{if(e){for(var i=document.createDocumentFragment(),a=[];this.firstChild;)a.push(this.firstChild),i.appendChild(this.firstChild);this._lightDOMRefs=a,this.childrenFragment=i}else this._lightDOMRefs.forEach(function(e){var n=e.cloneNode(!0);t.childrenFragment.appendChild(n)});z||(this.childrenFragment.children=Array.from(this.childrenFragment.childNodes).filter(function(t){return 1===t.nodeType}));var c=o(this._props,this.childrenFragment),s=document.createDocumentFragment();if(Array.isArray(c))c.forEach(function(t){s.appendChild(t)});else if(c){if("string"==typeof c)throw new K(this);s.appendChild(c)}if(e)u(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"appendChild",this).call(this,s);else{var l=this.cloneNode(!1);l._isMorphing=!0,l.appendChild(s),this._isMorphing=!0,function(t,e){if("object"!==(void 0===t?"undefined":r(t)))throw new Error("componentMorph: oldTree should be an object");if("object"!==(void 0===e?"undefined":r(e)))throw new Error("componentMorph: newTree should be an object");W(e,t)}(this,l),function(){for(var t=void 0;t=D.pop();)delete t.isSameNode;D=[]}(),this._isMorphing=!1}}catch(t){console.error(t)}}this._hasRendered=!0,this.didRenderCallback(e)}},{key:"skipChildren",value:function(){return!this._isMorphing}},{key:"willRenderCallback",value:function(t){}},{key:"didRenderCallback",value:function(t){}}]),n}()},function(t){return function(e){function n(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.styles,r=void 0===e?"":e,i=s(t,["styles"]);o(this,n);var a=l(this,(n.__proto__||Object.getPrototypeOf(n)).call(this,i));return a._styles=r,a}return c(n,t),i(n,[{key:"connectedCallback",value:function(){u(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"connectedCallback",this)&&u(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"connectedCallback",this).call(this),this._appendStyles()}},{key:"_appendStyles",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this;if(this._styles){var e=document.createElement("style"),n=document.createTextNode(this._styles);e.appendChild(n),t.insertAdjacentElement?t.insertAdjacentElement("afterbegin",e):t.appendChild(e)}}}]),n}()})(function(t){function n(t){o(this,n);var r=l(this,(n.__proto__||Object.getPrototypeOf(n)).call(this,t));return r._id=e(r.nodeName),r}return c(n,G),i(n,null,[{key:"uuidv4",value:function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(t){var e=16*Math.random()|0;return("x"==t?e:3&e|8).toString(16)})}}]),n}()),B={},Z=function(t){function e(){var t,n,r;o(this,e);for(var i=arguments.length,a=Array(i),u=0;u<i;u++)a[u]=arguments[u];return n=r=l(this,(t=e.__proto__||Object.getPrototypeOf(e)).call.apply(t,[this].concat(a))),r._appendStyles=function(){e.appendGlobalStyles(r._styles,r.nodeName)},l(r,n)}return c(e,$),i(e,null,[{key:"appendGlobalStyles",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:$.uuidv4();if(t&&!B[e]){var n=document.createElement("style"),r=document.createTextNode(t);B[e]=!0,n.appendChild(r),n.setAttribute("data-c-name",e.toLowerCase()),document.head.appendChild(n)}}}]),e}();var J,X,Q=function(t){function e(){return o(this,e),l(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return c(e,Z),i(e,[{key:"connectedCallback",value:function(){u(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"connectedCallback",this).call(this),this.className=this.initialClassName+" o-footer"}}]),e}();return Q.tagName="axa-footer",J=Q.tagName,X=Q,customElements.get(J)||customElements.define(J,X),Q});
