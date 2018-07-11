var StyleGuideWebComponent=function(){"use strict";var e,t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},o=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},r=function e(t,n,o){null===t&&(t=Function.prototype);var i=Object.getOwnPropertyDescriptor(t,n);if(void 0===i){var r=Object.getPrototypeOf(t);return null===r?void 0:e(r,n,o)}if("value"in i)return i.value;var a=i.get;return void 0!==a?a.call(o):void 0},a=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)},s=function(e,t){var n={};for(var o in e)t.indexOf(o)>=0||Object.prototype.hasOwnProperty.call(e,o)&&(n[o]=e[o]);return n},l=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},c=function e(t,n,o,i){var r=Object.getOwnPropertyDescriptor(t,n);if(void 0===r){var a=Object.getPrototypeOf(t);null!==a&&e(a,n,o,i)}else if("value"in r&&r.writable)r.value=o;else{var s=r.set;void 0!==s&&s.call(i,o)}return o},u=function(){return function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var n=[],o=!0,i=!1,r=void 0;try{for(var a,s=e[Symbol.iterator]();!(o=(a=s.next()).done)&&(n.push(a.value),!t||n.length!==t);o=!0);}catch(e){i=!0,r=e}finally{try{!o&&s.return&&s.return()}finally{if(i)throw r}}return n}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),d=function(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)},p=(function(e){!function(){var n={}.hasOwnProperty;function o(){for(var e=[],i=0;i<arguments.length;i++){var r=arguments[i];if(r){var a=void 0===r?"undefined":t(r);if("string"===a||"number"===a)e.push(r);else if(Array.isArray(r))e.push(o.apply(null,r));else if("object"===a)for(var s in r)n.call(r,s)&&r[s]&&e.push(s)}}return e.join(" ")}e.exports?e.exports=o:window.classNames=o}()}(e={exports:{}},e.exports),e.exports),f={},h=function(e){return e in f||(f[e]=0),++f[e]},v=function(){try{var e=new window.CustomEvent("test",{cancelable:!0});if(e.preventDefault(),!0!==e.defaultPrevented)throw new Error("Could not prevent default");return window.CustomEvent}catch(e){}return t;function t(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.bubbles,o=void 0!==n&&n,i=t.cancelable,r=void 0!==i&&i,a=t.detail,s=void 0===a?void 0:a,l=document.createEvent("CustomEvent");l.initCustomEvent(e,o,r,s);var c=l.preventDefault;return l.preventDefault=function(){c.call(l);try{Object.defineProperty(this,"defaultPrevented",{get:function(){return!0}})}catch(e){this.defaultPrevented=!0}},l}}();function m(e,t,n){var o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},r=new v(t,i({},o,{detail:n}));return e.dispatchEvent(r)}var _=function(){var e=!1;if("undefined"!=typeof window&&"function"==typeof window.addEventListener){var t=Object.defineProperty({},"passive",{get:function(){e=!0}}),n=function(){};window.addEventListener("testPassiveEventSupport",n,t),window.removeEventListener("testPassiveEventSupport",n,t)}return e}(),y=/^\s+|\s{2,}|\s+$/g;function b(e,t){return new RegExp("^"+e+"$|^"+e+"\\s|\\s"+e+"\\s|\\s"+e+"$",t)}function g(e){for(var t=arguments.length,n=Array(t>1?t-1:0),o=1;o<t;o++)n[o-1]=arguments[o];var i=w.apply(void 0,[e].concat(n));if(!0!==i){var r=[].concat(n);Array.isArray(i)&&(r=i.reduce(k,[])),r&&(e.className+=" "+r.join(" "))}}function k(e,t){var n=t.className;return t.hasClass||e.push(n),e}function w(e){for(var t=e.className,n=!1,o=!0,i=arguments.length,r=Array(i>1?i-1:0),a=1;a<i;a++)r[a-1]=arguments[a];var s=r.map(function(e){var i=b(e).test(t);i?n=!0:o=!1;return{className:e,hasClass:i}});return!(!o&&!n)&&s}function x(e){for(var t=arguments.length,n=Array(t>1?t-1:0),o=1;o<t;o++)n[o-1]=arguments[o];var i=w.apply(void 0,[e].concat(n));if(!1!==i){var r=[].concat(n);if(Array.isArray(i)&&(r=i.reduce(C,[])),r){var a=e.className;e.className=r.reduce(O,a)}}}function C(e,t){var n=t.className;return t.hasClass&&e.push(n),e}function O(e,t){var n=b(t,"g");return e.replace(n," ").replace(y," ")}var A=/\s+/,N={transitionend:function(){for(var e=document.createElement("div").style,t={transition:"transitionend",OTransition:"oTransitionEnd otransitionend",MozTransition:"transitionend",WebkitTransition:"webkitTransitionEnd"},n=Object.keys(t),o=n.length,i=void 0,r=0;r<o;++r)if(void 0!==e[i=n[r]])return t[i];return""}()};function E(e,n,o,i){var r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{},a=r.capture,s=void 0!==a&&a,l=r.passive,c=void 0===l||l;if(N[n]&&(n=N[n]),!e||!n)return null;var u=void 0===o?"undefined":t(o),d=o&&"string"===u;if("function"===u){if(i){var p=i;s=p.capture,c=p.passive}i=o}for(var f=_?{capture:s,passive:c}:s,h=d?function(t){var n=t.target;for(;!w(n,o)&&n!==e;)n=n.parentNode;if(n!==e)return i(t,n)}:i,v=n.split(A),m=v.length,y=0;y<m;++y)e.addEventListener(v[y],h,f);return function t(){for(var n=0;n<m;++n)e.removeEventListener(v[n],h,f);!function(e,t){if(!e)return!1;for(var n=Object.keys(e),o=n.length,i=0;i<o;++i){var r=n[i];if(e[r]===t)return delete e[r]}}(this,t)}}function T(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},o=n.leading,i=void 0!==o&&o,r=n.trailing,a=void 0===r||r,s=n.maxWait,l=void 0!==s&&s,c=void 0,u=void 0,p=void 0,f=void 0,h=!1,v=t!==l,m=!1!==l;function _(){for(var n=arguments.length,o=Array(n),r=0;r<n;r++)o[r]=arguments[r];return c=o,v&&(u&&clearTimeout(u),u=setTimeout(y,t)),m&&!p&&(p=setTimeout(b,l)),i&&!h&&(h=!0,f=e.apply(void 0,d(c))),f}return _.flush=function(){(u||p)&&(f=e.apply(void 0,d(c)));return k(),f},_.cancel=k,_;function y(){p&&clearTimeout(p),g()}function b(){u&&clearTimeout(u),g()}function g(){a&&(f=e.apply(void 0,d(c))),u=null,p=null,h=!1}function k(){u&&(clearTimeout(u),u=null),p&&(clearTimeout(p),p=null),c=void 0,h=!1}}window.__subscriptions=window.__subscriptions||{};var j=window.__subscriptions;function P(e,t){var n=E(arguments.length>2&&void 0!==arguments[2]?arguments[2]:document,e,t);j[e]||(j[e]={count:0});var o,i=j[e];return i.count++,i.onsubscribe||(i.onsubscribe=T((o=e,function(){m(document,"pubsub/onsubscribe",o),m(document,"pubsub/onsubscribe/"+o,o),j[o]&&delete j[o].unsubscribe}),100)),i.onsubscribe(),function(){i.count--,n.call(this),i.count<=0&&delete j[e]}}E(document,"pubsub/onsubscribe",function(e){var t=e.detail;j[t]||(j[t]={count:0});var n=j[t],o=n.queue;Array.isArray(o)&&(o.forEach(function(e){var t=u(e,3),n=t[0],o=t[1],i=t[2];m(i,n,o)}),delete n.queue)});var S,D=function(e,t){return e===t},L=((S=function(){var e;return(e=console).log.apply(e,arguments)},function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:D;return function(){for(var t=arguments.length,n=Array(t),o=0;o<t;o++)n[o]=arguments[o];return function(){for(var t=arguments.length,o=Array(t),i=0;i<t;i++)o[i]=arguments[i];return function(){return e.apply(void 0,[].concat(n,o))?S.apply(void 0,arguments):void 0}}}})()(!0),function(e){function t(e,o){var i;n(this,t);for(var r="\n    Native Property >>>"+e+"<<< exists already at "+o.nodeName+"#"+o._id+" and evaluates to -> "+o[e]+".\n    Please consult the HTML spec for inherited DOM properties:\n    - Element Interface https://developer.mozilla.org/en-US/docs/Web/API/Element#Properties\n    - Node Interface https://developer.mozilla.org/en-US/docs/Web/API/Node#Properties",a=arguments.length,s=Array(a>2?a-2:0),c=2;c<a;c++)s[c-2]=arguments[c];var u=l(this,(i=t.__proto__||Object.getPrototypeOf(t)).call.apply(i,[this,r].concat(s)));return Error.captureStackTrace&&Error.captureStackTrace(u,t),u.name="PropertyExistsException",u}return a(t,e),t}(Error)),R=/[A-Z]/g;function M(e,t,n){var o=e.toLowerCase(),i=n.charAt(t+1);return 0===t||i.toUpperCase()===i?o:"-"+o}var U=/^\s*(?:true|false|null|undefined|-?[0-9]+\.?[0-9]*|[[{](?:.|[\s])*[\]}])\s*$/;function I(e,t){var n=e;if(e&&t!==e){if(U.test(e))try{n=JSON.parse(e)}catch(n){console.error("Attribute "+t+" has an error:\n"+n+"\n",e)}}else n=!0;return n}var F=/(?:^\w|[A-Z]|\b\w|\s+|[-_]+)/g,V=/[-_]+/g;function z(e){return e.replace(F,H)}function H(e,t){return 0==+e||V.test(e)?"":0===t?e.toLowerCase():e.toUpperCase()}function K(e,t){if("function"==typeof e.hasAttribute&&!e.hasAttribute(t))return!1;var n=e.value;return t?n=e.getAttribute(t):t=e.name,n=I(n,t)}var q=["title","checked","disabled"],W=[];var $=1,B=3,G=8;function Z(e,t){var n=e.nodeType,o=e.nodeName;n===$&&function(e,t){for(var n=t.attributes,o=e.attributes,i=null,r=null,a=null,s=null,l=o.length-1;l>=0;--l)if(s=o[l],a=s.name,i=s.namespaceURI,r=s.value,i){var c=s.localName;t.getAttributeNS(i,c||a)!==r&&t.setAttributeNS(i,a,r)}else t.hasAttribute(a)?t.getAttribute(a)!==r&&("null"===r||"undefined"===r?t.removeAttribute(a):t.setAttribute(a,r)):t.setAttribute(a,r);for(var u=n.length-1;u>=0;--u)!1!==(s=n[u]).specified&&(a=s.name,(i=s.namespaceURI)?(a=s.localName||a,e.hasAttributeNS(i,a)||t.removeAttributeNS(i,a)):e.hasAttributeNS(null,a)||t.removeAttribute(a))}(e,t),n!==B&&n!==G||t.nodeValue===e.nodeValue||(t.nodeValue=e.nodeValue),"INPUT"===o?function(e,t){var n=e.value,o=t.value;J(e,t,"checked"),J(e,t,"disabled"),n!==o&&(t.setAttribute("value",n),t.value=n);"null"===n&&(t.value="",t.removeAttribute("value"));e.hasAttributeNS(null,"value")?"range"===t.type&&(t.value=n):t.removeAttribute("value")}(e,t):"OPTION"===o?J(e,t,"selected"):"TEXTAREA"===o&&function(e,t){var n=e.value;n!==t.value&&(t.value=n);if(t.firstChild&&t.firstChild.nodeValue!==n){if(""===n&&t.firstChild.nodeValue===t.placeholder)return;t.firstChild.nodeValue=n}}(e,t)}function J(e,t,n){e[n]!==t[n]&&(t[n]=e[n],e[n]?t.setAttribute(n,""):t.removeAttribute(n))}var X=3;function Y(e,t){return t?e?e.isSameNode&&e.isSameNode(t)?t:e.tagName!==t.tagName?e:(Z(e,t),t.skipChildren&&t.skipChildren()||function(e,t){for(var n=void 0,o=void 0,i=void 0,r=void 0,a=0,s=0;n=t.childNodes[s],o=e.childNodes[s-a],n||o;s++)if(o)if(n)if(Q(o,n))(i=Y(o,n))!==n&&(t.replaceChild(i,n),a++);else{r=null;for(var l=s;l<t.childNodes.length;l++)if(Q(t.childNodes[l],o)){r=t.childNodes[l];break}r?((i=Y(o,r))!==r&&a++,t.insertBefore(i,n)):o.id||n.id?(t.insertBefore(o,n),a++):(i=Y(o,n))!==n&&(t.replaceChild(i,n),a++)}else t.appendChild(o),a++;else t.removeChild(n),s--}(e,t),t):null:e}function Q(e,t){return e.id?e.id===t.id:e.isSameNode?e.isSameNode(t):e.tagName===t.tagName&&(e.type===X&&e.nodeValue===t.nodeValue)}var ee=function(e){function t(e){var o;n(this,t);for(var i="\n    Web Component "+e.nodeName+"%c#"+e._id+" does not accept string as a return from a template. Maybe use bel?}",r=arguments.length,a=Array(r>1?r-1:0),s=1;s<r;s++)a[s-1]=arguments[s];var c=l(this,(o=t.__proto__||Object.getPrototypeOf(t)).call.apply(o,[this,i].concat(a)));return Error.captureStackTrace&&Error.captureStackTrace(c,t),c.name="TemplateNoStringReturnException",c}return a(t,e),t}(Error),te=!!document.createDocumentFragment().children;function ne(){return Reflect.construct(HTMLElement,[],this.__proto__.constructor)}Object.setPrototypeOf(ne.prototype,HTMLElement.prototype),Object.setPrototypeOf(ne,HTMLElement);var oe=function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(e){return t.reduceRight(function(e,t){return t(e)},e)}}(function(e){return function(t){function i(){var e,t,o;n(this,i);for(var r=arguments.length,a=Array(r),s=0;s<r;s++)a[s]=arguments[s];return t=o=l(this,(e=i.__proto__||Object.getPrototypeOf(i)).call.apply(e,[this].concat(a))),o._makeContextReady=function(){var e=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}).detail;o.contextNode&&(clearTimeout(o.timeoutId),o.timeoutId=setTimeout(function(){o.contextCallback(o.contextNode,e)},10)),o.unContextEnabled&&o.unContextEnabled(),o.unContextEnabled=P("context/available",o._makeContextReady)},l(o,t)}return a(i,e),o(i,[{key:"connectedCallback",value:function(){r(i.prototype.__proto__||Object.getPrototypeOf(i.prototype),"connectedCallback",this)&&r(i.prototype.__proto__||Object.getPrototypeOf(i.prototype),"connectedCallback",this).call(this),this.contextCallback&&this._makeContextReady()}},{key:"disconnectedCallback",value:function(){r(i.prototype.__proto__||Object.getPrototypeOf(i.prototype),"disconnectedCallback",this)&&r(i.prototype.__proto__||Object.getPrototypeOf(i.prototype),"disconnectedCallback",this).call(this),this.unContextEnabled&&this.unContextEnabled()}},{key:"provideContext",value:function(){var e=this.nodeName.toLowerCase();this.__isContext=!0,this.__contextName=e,function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:document;j[e]||(j[e]={count:0,queue:[]});var o=j[e].queue;Array.isArray(o)?o.push([e,t,n]):m(n,e,t)}("context/available",e)}},{key:"consumeContext",value:function(e){this.__consumedContext=e&&e.toLowerCase()}},{key:"contextNode",get:function(){for(var e=this.__consumedContext,t=this.parentNode;t&&(!t.__isContext||e&&e!==t.__contextName);)t=t.parentNode;return!(!t||!t.__isContext)&&t}}]),i}()},function(e){return function(t){function i(){return n(this,i),l(this,(i.__proto__||Object.getPrototypeOf(i)).apply(this,arguments))}return a(i,e),o(i,[{key:"appendChild",value:function(e){!this._isMorphing&&this._hasTemplate&&this._hasRendered?(this._lightDOMRefs.push(e),this.render()):r(i.prototype.__proto__||Object.getPrototypeOf(i.prototype),"appendChild",this).call(this,e)}},{key:"innerText",set:function(e){if(this._hasTemplate&&this._hasRendered){var t=document.createTextNode(e);this._lightDOMRefs=[t],this.render()}else c(i.prototype.__proto__||Object.getPrototypeOf(i.prototype),"innerText",e,this)}},{key:"textContent",set:function(e){if(this._hasTemplate&&this._hasRendered){var t=document.createTextNode(e);this._lightDOMRefs=[t],this.render()}else c(i.prototype.__proto__||Object.getPrototypeOf(i.prototype),"textContent",e,this)}},{key:"innerHTML",set:function(e){if(this._hasTemplate&&this._hasRendered){var t=document.createElement("div");t.innerHTML=e,this._lightDOMRefs=Array.from(t.children),this.render()}else c(i.prototype.__proto__||Object.getPrototypeOf(i.prototype),"innerHTML",e,this)}}]),i}()},function(e){return function(t){function i(e){n(this,i);var t=l(this,(i.__proto__||Object.getPrototypeOf(i)).call(this,e));t._reduceProps=function(e,n){var o=e.props,r=e.shouldUpdate,a=t._hasKeys[n];if(-1===q.indexOf(n)&&a)throw new L(n,t);var s="_"+n,l=o[n],u=t[s];return r||t.shouldUpdateCallback(l,u)?(t[s]=l,t._props[n]=l,a&&c(i.prototype.__proto__||Object.getPrototypeOf(i.prototype),n,l,t),{props:o,shouldUpdate:!0}):{props:o,shouldUpdate:!1}},t._isConnected=!1,t._props={},t._hasKeys={},t.updatedDebounced=T(function(){return t.updated&&t.updated()},50);var o=t.constructor.observedAttributes;return Array.isArray(o)&&o.forEach(function(e){var n,o=z(e),i=o in t;if(-1===q.indexOf(o)&&i)throw new L(o,t);t._hasKeys[o]=i,Object.defineProperty(t,o,n={get:function(){return this._props[o]},set:function(e){this.shouldUpdateCallback(this._props[o],e)&&(this._props[o]=e,i&&c(n.__proto__||Object.getPrototypeOf(n),o,e,this),this._isConnected&&this._hasRendered&&this.updatedDebounced())}})}),t}return a(i,e),o(i,[{key:"connectedCallback",value:function(){var e=this;if(r(i.prototype.__proto__||Object.getPrototypeOf(i.prototype),"connectedCallback",this)&&r(i.prototype.__proto__||Object.getPrototypeOf(i.prototype),"connectedCallback",this).call(this),!this._isConnected){this._isConnected=!0;var t=this.constructor.observedAttributes;this.initialClassName=this.className,Array.isArray(t)&&t.forEach(function(t){var n=z(t);if(e.hasAttribute(t)){var o=K(e,t),r=e._hasKeys[n];e._props[n]=o,r&&c(i.prototype.__proto__||Object.getPrototypeOf(i.prototype),n,o,e)}})}this.updated&&this.updated()}},{key:"attributeChangedCallback",value:function(e,t,n){this.shouldUpdateCallback(n,t)&&(this[z(e)]=I(n))}},{key:"setProps",value:function(e){var t=this.constructor.observedAttributes,n=void 0===t?[]:t;Object.keys(e).filter(function(e){return n.indexOf(e.replace(R,M))>-1}).reduce(this._reduceProps,{props:e,shouldUpdate:!1}).shouldUpdate&&this._isConnected&&this._hasRendered&&this.updated&&this.updated()}},{key:"shouldUpdateCallback",value:function(e,t){return e!==t}},{key:"disconnectedCallback",value:function(){this._isConnected=!1}}]),i}()},function(e){return function(i){function c(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.template,o=s(e,["template"]);n(this,c);var i=l(this,(c.__proto__||Object.getPrototypeOf(c)).call(this,o));return i._template=t,i._hasTemplate=!!t,i._hasRendered=!1,i.updated=i.render,i}return a(c,e),o(c,[{key:"render",value:function(){var e=this,n=!this._hasRendered;if(this.willRenderCallback(n),this._hasTemplate){var o=this._template;try{if(n){for(var i=document.createDocumentFragment(),a=[];this.firstChild;)a.push(this.firstChild),i.appendChild(this.firstChild);this._lightDOMRefs=a,this.childrenFragment=i}else this._lightDOMRefs.forEach(function(t){var n=t.cloneNode(!0);e.childrenFragment.appendChild(n)});te||(this.childrenFragment.children=Array.from(this.childrenFragment.childNodes).filter(function(e){return 1===e.nodeType}));var s=o(this._props,this.childrenFragment),l=document.createDocumentFragment();if(Array.isArray(s))s.forEach(function(e){l.appendChild(e)});else if(s){if("string"==typeof s)throw new ee(this);l.appendChild(s)}if(n)r(c.prototype.__proto__||Object.getPrototypeOf(c.prototype),"appendChild",this).call(this,l);else{var u=this.cloneNode(!1);u._isMorphing=!0,u.appendChild(l),this._isMorphing=!0,function(e,n){if("object"!==(void 0===e?"undefined":t(e)))throw new Error("componentMorph: oldTree should be an object");if("object"!==(void 0===n?"undefined":t(n)))throw new Error("componentMorph: newTree should be an object");Y(n,e)}(this,u),function(){for(var e=void 0;e=W.pop();)delete e.isSameNode;W=[]}(),this._isMorphing=!1}}catch(e){console.error(e)}}this._hasRendered=!0,this.didRenderCallback(n)}},{key:"skipChildren",value:function(){return!this._isMorphing}},{key:"willRenderCallback",value:function(e){}},{key:"didRenderCallback",value:function(e){}}]),c}()},function(e){return function(t){function i(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.styles,o=void 0===t?"":t,r=s(e,["styles"]);n(this,i);var a=l(this,(i.__proto__||Object.getPrototypeOf(i)).call(this,r));return a._styles=o,a}return a(i,e),o(i,[{key:"connectedCallback",value:function(){r(i.prototype.__proto__||Object.getPrototypeOf(i.prototype),"connectedCallback",this)&&r(i.prototype.__proto__||Object.getPrototypeOf(i.prototype),"connectedCallback",this).call(this),this._appendStyles()}},{key:"_appendStyles",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this;if(this._styles){var t=document.createElement("style"),n=document.createTextNode(this._styles);t.appendChild(n),e.insertAdjacentElement?e.insertAdjacentElement("afterbegin",t):e.appendChild(t)}}}]),i}()})(function(e){function t(e){n(this,t);var o=l(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return o._id=h(o.nodeName),o}return a(t,ne),o(t,null,[{key:"uuidv4",value:function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(e){var t=16*Math.random()|0;return("x"==e?t:3&t|8).toString(16)})}}]),t}()),ie={},re=function(e){function t(){var e,o,i;n(this,t);for(var r=arguments.length,a=Array(r),s=0;s<r;s++)a[s]=arguments[s];return o=i=l(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(a))),i._appendStyles=function(){t.appendGlobalStyles(i._styles,i.nodeName)},l(i,o)}return a(t,oe),o(t,null,[{key:"appendGlobalStyles",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:oe.uuidv4();if(e&&!ie[t]){var n=document.createElement("style"),o=document.createTextNode(e);ie[t]=!0,n.appendChild(o),n.setAttribute("data-c-name",t.toLowerCase()),document.head.appendChild(n)}}}]),t}();var ae=".m-footer-links {\n  padding-right: 15px;\n  padding-left: 15px;\n  position: relative;\n  width: 100%;\n  min-height: 1px;\n  max-width: 25%;\n  -webkit-box-flex: 0;\n      -ms-flex: 0 0 25%;\n          flex: 0 0 25%;\n  display: block;\n  margin-left: 0 !important; }\n  @media (max-width: 991px) {\n    .m-footer-links {\n      max-width: 33.33333%;\n      -webkit-box-flex: 0;\n          -ms-flex: 0 0 33.33333%;\n              flex: 0 0 33.33333%; } }\n  @media (max-width: 575px) {\n    .m-footer-links {\n      position: static;\n      width: auto;\n      max-width: none;\n      -webkit-box-flex: 1;\n          -ms-flex: auto;\n              flex: auto;\n      padding: 0; } }\n\n.m-footer-links__row {\n  margin-right: -15px;\n  margin-left: -15px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap; }\n\n.m-footer-links__block {\n  margin-left: 60px; }\n  .m-footer-links__block:first-child {\n    margin-left: 0; }\n  @media (max-width: 575px) {\n    .m-footer-links__block {\n      position: relative; } }\n\n.m-footer-links__category {\n  /* Adds a hyphen where the word breaks, if supported (No Blink) */\n  -webkit-hyphens: auto;\n      -ms-hyphens: auto;\n          hyphens: auto;\n  /* These are technically the same, but use both */\n  overflow-wrap: break-word;\n  word-wrap: break-word;\n  font-size: 14px;\n  font-weight: 700;\n  line-height: 1.5;\n  letter-spacing: 0.02em;\n  display: block;\n  color: #fff;\n  text-transform: uppercase; }\n  @media (min-width: 576px) {\n    .m-footer-links__category {\n      font-size: 16px; } }\n  @media (max-width: 575px) {\n    .m-footer-links__category {\n      font-size: 14px;\n      font-weight: 600;\n      line-height: 1.5;\n      letter-spacing: 0.02em;\n      cursor: pointer;\n      position: relative;\n      padding: 20px 60px 20px 30px;\n      border-bottom: 1px solid #2425aa;\n      background: #3b3fd8; } }\n  @media (max-width: 575px) and (min-width: 576px) {\n    .m-footer-links__category {\n      font-size: 16px; } }\n  @media (max-width: 575px) {\n      .m-footer-links__category:hover, .m-footer-links__category:active, .m-footer-links__category:focus {\n        cursor: pointer; } }\n\n.m-footer-links__category__icon {\n  width: 10px;\n  height: 10px;\n  display: block;\n  fill: currentColor;\n  position: absolute;\n  top: 50%;\n  right: 30px;\n  margin-top: -5px;\n  color: #999;\n  -webkit-transition: -webkit-transform 0.3s ease;\n  transition: -webkit-transform 0.3s ease;\n  transition: transform 0.3s ease;\n  transition: transform 0.3s ease, -webkit-transform 0.3s ease;\n  display: none; }\n  .is-dropdown-open .m-footer-links__category__icon {\n    -webkit-transform: rotate(180deg);\n            transform: rotate(180deg); }\n  @media (max-width: 575px) {\n    .m-footer-links__category__icon {\n      display: block; } }\n\n.m-footer-links__list {\n  padding: 0;\n  margin: 0;\n  list-style-type: none;\n  display: block;\n  padding-top: 15px; }\n  @media (max-width: 991px) {\n    .m-footer-links__list {\n      padding-top: 10px; } }\n  @media (max-width: 575px) {\n    .m-footer-links__list {\n      position: absolute;\n      top: 100%;\n      z-index: 1000;\n      height: 0;\n      min-width: 100%;\n      overflow: hidden;\n      -webkit-transition: height 0.3s ease;\n      transition: height 0.3s ease;\n      position: static;\n      display: block;\n      margin: 0;\n      padding: 0;\n      background: #3032c1; }\n      .is-dropdown-open > .m-footer-links__list {\n        height: auto; } }\n  @media (min-width: 576px) {\n    .m-footer-links__list {\n      height: auto !important; } }\n\n.m-footer-links__list-item {\n  display: block;\n  width: 100%;\n  margin-top: 10px; }\n  @media (max-width: 991px) {\n    .m-footer-links__list-item {\n      margin-top: 8px; } }\n  @media (max-width: 575px) {\n    .m-footer-links__list-item {\n      margin-top: 0;\n      border-bottom: 1px solid #3b3fd8; }\n      .m-footer-links__list-item:last-child {\n        border-bottom: none; } }\n\n.m-footer-links__link {\n  /* Adds a hyphen where the word breaks, if supported (No Blink) */\n  -webkit-hyphens: auto;\n      -ms-hyphens: auto;\n          hyphens: auto;\n  /* These are technically the same, but use both */\n  overflow-wrap: break-word;\n  word-wrap: break-word;\n  font-size: 12px;\n  font-weight: 400;\n  line-height: 1.5;\n  letter-spacing: 0.02em;\n  display: block;\n  padding: 5px 0;\n  color: #fff; }\n  @media (min-width: 576px) {\n    .m-footer-links__link {\n      font-size: 14px;\n      line-height: 1.21; } }\n  .is-footer-links__list-item-active > .m-footer-links__link, .m-footer-links__link:hover, .m-footer-links__link:active, .m-footer-links__link:focus {\n    color: rgba(255, 255, 255, 0.65);\n    text-decoration: none; }\n  @media (max-width: 575px) {\n    .m-footer-links__link {\n      padding: 20px 30px; } }\n\n.m-footer-links--cols-2 {\n  max-width: 41.66667%;\n  -webkit-box-flex: 0;\n      -ms-flex: 0 0 41.66667%;\n          flex: 0 0 41.66667%; }\n  @media (min-width: 576px) {\n    .m-footer-links--cols-2 .m-footer-links__list {\n      -webkit-column-count: 2;\n              column-count: 2; } }\n  @media (min-width: 576px) {\n    .m-footer-links--cols-2 .m-footer-links__list-item {\n      display: inline-block; } }\n  @media (max-width: 991px) {\n    .m-footer-links--cols-2 {\n      max-width: 66.66667%;\n      -webkit-box-flex: 0;\n          -ms-flex: 0 0 66.66667%;\n              flex: 0 0 66.66667%; } }\n  @media (max-width: 575px) {\n    .m-footer-links--cols-2 {\n      position: static;\n      width: auto;\n      max-width: none;\n      -webkit-box-flex: 1;\n          -ms-flex: auto;\n              flex: auto; } }\n",se=/\n[\s]+$/,le=/^\n[\s]+/,ce=/[\s]+$/,ue=/^[\s]+/,de=/[\n\s]+/g,pe=["a","abbr","b","bdi","bdo","br","cite","data","dfn","em","i","kbd","mark","q","rp","rt","rtc","ruby","s","amp","small","span","strong","sub","sup","time","u","var","wbr"],fe=["code","pre","textarea"],he=function e(t,n){if(Array.isArray(n))for(var o,i,r=t.nodeName.toLowerCase(),a=!1,s=0,l=n.length;s<l;s++){var c=n[s];if(Array.isArray(c))e(t,c);else{("number"==typeof c||"boolean"==typeof c||"function"==typeof c||c instanceof Date||c instanceof RegExp)&&(c=c.toString());var u=t.childNodes[t.childNodes.length-1];if("string"==typeof c)a=!0,u&&"#text"===u.nodeName?u.nodeValue+=c:(c=document.createTextNode(c),t.appendChild(c),u=c),s===l-1&&(a=!1,-1===pe.indexOf(r)&&-1===fe.indexOf(r)?""===(o=u.nodeValue.replace(le,"").replace(ce,"").replace(se,"").replace(de," "))?t.removeChild(u):u.nodeValue=o:-1===fe.indexOf(r)&&(i=0===s?"":" ",o=u.nodeValue.replace(le,i).replace(ue," ").replace(ce,"").replace(se,"").replace(de," "),u.nodeValue=o));else if(c&&c.nodeType){a&&(a=!1,-1===pe.indexOf(r)&&-1===fe.indexOf(r)?""===(o=u.nodeValue.replace(le,"").replace(se,"").replace(de," "))?t.removeChild(u):u.nodeValue=o:-1===fe.indexOf(r)&&(o=u.nodeValue.replace(ue," ").replace(le,"").replace(se,"").replace(de," "),u.nodeValue=o));var d=c.nodeName;d&&(r=d.toLowerCase()),t.appendChild(c)}}}};var ve=function(e){var t,n=document.createElement("div");return n.innerHTML=e,t=n.childNodes,Array.isArray(t)?t:[].slice.call(t)},me='<axa-icon icon="angle-bracket-down" classes="m-footer-links__category__icon"></axa-icon>';function _e(e){var t,n,o,i=e.title,r=e.items;return(o=document.createElement("div")).setAttribute("class","m-footer-links__block js-dropdown"),he(o,["\n    ",(t=document.createElement("strong"),t.setAttribute("class","m-footer-links__category js-dropdown__toggle"),he(t,[i,ve(me)]),t),"\n\n    ",(n=document.createElement("ul"),n.setAttribute("class","m-footer-links__list"),he(n,["\n      ",Array.isArray(r)&&r.map(function(e,t){var n,o,i=e.name,r=e.url,a=e.isActive;return(o=document.createElement("li")).setAttribute("class","m-footer-links__list-item "+String(a?"is-footer-links__list-item-active":"")),he(o,["\n          ",(n=document.createElement("a"),n.setAttribute("href",""+String(r)),n.setAttribute("index",""+String(t)),n.setAttribute("class","m-footer-links__link js-footer-links__link"),he(n,[i]),n),"\n        "]),o}),"\n    "]),n),"\n  "]),o}var ye=/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream;function be(e,t,n){var o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},i=o.capture,r=void 0===i||i,a=o.passive,s=void 0===a||a,l=e.ownerDocument.documentElement,c=E(l,t,function(t){var o=t.target;if(!e.contains(o)&&e!==o)return n(t)},{capture:r,passive:s});return ye&&(l.style.cursor="pointer"),c}var ge=function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];for(var o=t.length,i={},r=0;r<o;++r){var a=t[r];i[a.toUpperCase()]=a}return i}("click","keyup","enter","move","leave","Escape","Esc"),ke="data-prevent-default",we=function(){function e(t){var o=this,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};n(this,e),this._handleClick=function(e,t){o.shouldPreventDefault(t||e.currentTarget)&&e.preventDefault();var n=!o._lastToggleNode,i=t!==o._lastToggleNode,r=!n&&!i;n?(o._notify(ge.ENTER,t),o._onInteractive()):i&&o._notify(ge.MOVE,t,o._lastToggleNode),o._lastToggleNode=t,r&&o._options.sameClickClose&&o._close()},this._handleClose=function(e,t){o.shouldPreventDefault(t||e.currentTarget)&&e.preventDefault(),o._close()},this._handleKeyUp=function(e){(e.key===ge.ESCAPE||e.key===ge.ESC||27===e.keyCode)&&(e.preventDefault(),o._close())},this._init(t,i)}return o(e,[{key:"_init",value:function(t,n){t&&(this._wcNode=t),n&&(this._options=i({},e.DEFAULTS,n));var o=this._options.containerClass;this._container=o?this._wcNode.querySelector(o):this._wcNode,this._on()}},{key:"_on",value:function(){this._off(),this._unClick=E(this._container,ge.CLICK,this._options.toggleClass,this._handleClick,{passive:!this._options.preventDefault})}},{key:"_off",value:function(){this._unClick&&this._unClick(),this._offInteractive()}},{key:"_onInteractive",value:function(){this._offInteractive(),this._options.closeClass&&(this._unCloseClick=E(this._container,ge.CLICK,this._options.closeClass,this._handleClose,{passive:!this._options.preventDefault})),this._options.outerClose&&(this._unOuterClick=be(this._container,ge.CLICK,this._handleClose,{passive:!this._options.preventDefault})),this._options.escapeClose&&(this._unCloseEscape=E(this._container.ownerDocument,ge.KEYUP,this._handleKeyUp,{passive:!1}))}},{key:"shouldPreventDefault",value:function(e){return e.hasAttribute(ke)?K(e,ke):this._options.preventDefault}},{key:"_offInteractive",value:function(){this._unOuterClick&&this._unOuterClick(),this._unCloseClick&&this._unCloseClick(),this._unCloseEscape&&this._unCloseEscape(),this.deleteLastToggleNode()}},{key:"_close",value:function(){this._lastToggleNode&&(this._notify(ge.LEAVE,this._lastToggleNode),this._offInteractive(),this.deleteLastToggleNode())}},{key:"_notify",value:function(e,t,n){e in this&&"function"==typeof this[e]&&this[e](t,n)}},{key:"enter",value:function(e){throw new Error("UiEvent.enter method not overwritten")}},{key:"move",value:function(e,t){}},{key:"leave",value:function(e){throw new Error("UiEvent.leave method not overwritten")}},{key:"destroy",value:function(){this._off(),delete this._wcNode,delete this._options}},{key:"deleteLastToggleNode",value:function(){delete this._lastToggleNode}},{key:"lastToggleNode",get:function(){return this._lastToggleNode}}]),e}();we.DEFAULTS={containerClass:".js-ui-container",toggleClass:"js-ui-toggle",closeClass:"js-ui-close",escapeClose:!0,outerClose:!0,sameClickClose:!0,preventDefault:!0};var xe,Ce=function(){if(!window.getComputedStyle)return null;var e=window.getComputedStyle(document.documentElement,""),t=(Array.prototype.slice.call(e).join("").match(/-(moz|webkit|ms)-/)||""===e.OLink&&["","o"])[1];return{dom:"WebKit|Moz|MS|O".match(new RegExp("("+t+")","i"))[1],lowercase:t,css:"-"+t+"-",js:t[0].toUpperCase()+t.slice(1)}}().lowercase,Oe=function(){var e=window.requestAnimationFrame||window[Ce+"RequestAnimationFrame"];if(e)e=e.bind(window);else{var t=0;e=function(e){var n=Date.now(),o=Math.max(0,16-(n-t)),i=setTimeout(function(){e(n+o)},o);return t=n+o,i}}return e}(),Ae=(xe=(xe=window.cancelAnimationFrame||window[Ce+"CancelAnimationFrame"]||window[Ce+"CancelRequestAnimationFrame"])?xe.bind(window):function(e){clearTimeout(e)},function(e){function t(e,o){n(this,t),o=i({},t.DEFAULTS,o);var r=l(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,o));return r.handleTransitionEnd=function(e){"height"===e.propertyName&&(r._removeHeightOnElement(e.target),r.offInteractive(),x(r.wcNode,r.options.isAnimatingClass))},r.handleClick=function(e){if(e.preventDefault(),r.offClicks(),r.wcNode.getAttribute("value")===e.target.dataset.index)r.leave(r.lastToggleNode),r.deleteLastToggleNode();else{var t=e.target.dataset.index;r.wcNode.setAttribute("value",t)}},r.options=o,r.wcNode=e,r.isOpen=!1,r}return a(t,we),o(t,[{key:"onInteractive",value:function(){this.offInteractive(),this.unTransitionEnd=E(this.wcNode,"transitionend",this.handleTransitionEnd)}},{key:"onClicks",value:function(){this.offClicks(),this.unClickEnd=E(this.wcNode,ge.CLICK,this.options.selectClass,this.handleClick,{capture:!0,passive:!1})}},{key:"offInteractive",value:function(){this.unTransitionEnd&&this.unTransitionEnd()}},{key:"offClicks",value:function(){this.unClickEnd&&this.unClickEnd()}},{key:"enter",value:function(e){var t=e.parentNode,n=t.lastElementChild;if(!this.isOpen){this.isOpen=!0,g(t,this.options.isAnimatingClass),n.style.overflow="scroll";var o=n.scrollHeight;n.style.overflow="",this.onInteractive(),this.onClicks(),n.style.height=o+"px",g(t,this.options.isOpenClass)}}},{key:"leave",value:function(e){var t=this,n=e.parentNode,o=n.lastElementChild,i=o.scrollHeight;this.isOpen&&(this.isOpen=!1,this.onInteractive(),this.onClicks(),g(n,this.options.isAnimatingClass),Oe(function(){o.style.height=i+"px",Oe(function(){x(n,t.options.isOpenClass),o.style.height=0})}))}},{key:"_removeHeightOnElement",value:function(e){this.isOpen&&(e.style.height="")}},{key:"reset",value:function(){var e=this.wcNode.querySelector(this.options.containerClass);e&&(e.lastElementChild.style.height="",x(e,this.options.isOpenClass))}},{key:"destroy",value:function(){r(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"destroy",this).call(this),this.reset(),delete this.wcNode,delete this.options}}]),t}());Ae.DEFAULTS={containerClass:".js-dropdown",toggleClass:"js-dropdown__toggle",isOpenClass:"is-dropdown-open",isAnimatingClass:"is-dropdown-animating",selectClass:"js-dropdown__content"};var Ne=function(){function e(t,o){n(this,e),this.wcNode=t,this.options=i({},e.DEFAULTS,o),this.handleClick=this.handleClick.bind(this),this.on()}return o(e,[{key:"on",value:function(){var e=this;this.off(),this.unsubscribe=P("device-state/change",function(t){var n=t.detail.breakpoint,o="xs".indexOf(n)>-1;o&&!e.dropDown?e.dropDown=new Ae(e.wcNode):!o&&e.dropDown&&(e.dropDown.destroy(),delete e.dropDown)}),this.unClick=E(this.wcNode,"click",this.options.link,this.handleClick,{passive:!1})}},{key:"off",value:function(){this.unsubscribe&&this.unsubscribe(),this.unClick&&this.unClick()}},{key:"handleClick",value:function(e,t){var n=K(t,"index"),o=this.wcNode.items;m(this.wcNode,"axa-click",o[n],{bubbles:!0,cancelable:!0,composed:!0})||e.preventDefault()}},{key:"destroy",value:function(){this.off(),this.dropDown&&(this.dropDown.destroy(),delete this.dropDown),delete this.wcNode}}]),e}();Ne.DEFAULTS={link:"js-footer-links__link"};var Ee,Te,je=function(e){function t(){return n(this,t),l(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,{styles:ae,template:_e}))}return a(t,re),o(t,null,[{key:"observedAttributes",get:function(){return["cols","items","title"]}}]),o(t,[{key:"connectedCallback",value:function(){r(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"connectedCallback",this).call(this)}},{key:"willRenderCallback",value:function(){var e,t,n,o=this.cols;this.className=p(this.initialClassName,"m-footer-links",(n=o,(t="m-footer-links--cols-"+o)in(e={"m-footer-links--cols":o})?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e))}},{key:"didRenderCallback",value:function(){this.footerLinks&&this.footerLinks.destroy(),this.footerLinks=new Ne(this)}},{key:"disconnectedCallback",value:function(){this.footerLinks&&(this.footerLinks.destroy(),delete this.footerLinks)}}]),t}();return je.tagName="axa-footer-links",Ee=je.tagName,Te=je,customElements.get(Ee)||customElements.define(Ee,Te),je}();
