var StyleGuideWebComponent=function(){"use strict";var e,t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o=function e(t,n,r){null===t&&(t=Function.prototype);var i=Object.getOwnPropertyDescriptor(t,n);if(void 0===i){var o=Object.getPrototypeOf(t);return null===o?void 0:e(o,n,r)}if("value"in i)return i.value;var a=i.get;return void 0!==a?a.call(r):void 0},a=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)},l=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n},u=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},s=function e(t,n,r,i){var o=Object.getOwnPropertyDescriptor(t,n);if(void 0===o){var a=Object.getPrototypeOf(t);null!==a&&e(a,n,r,i)}else if("value"in o&&o.writable)o.value=r;else{var l=o.set;void 0!==l&&l.call(i,r)}return r},c=function(){return function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var n=[],r=!0,i=!1,o=void 0;try{for(var a,l=e[Symbol.iterator]();!(r=(a=l.next()).done)&&(n.push(a.value),!t||n.length!==t);r=!0);}catch(e){i=!0,o=e}finally{try{!r&&l.return&&l.return()}finally{if(i)throw o}}return n}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),p=function(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)},d=(function(e){!function(){var n={}.hasOwnProperty;function r(){for(var e=[],i=0;i<arguments.length;i++){var o=arguments[i];if(o){var a=void 0===o?"undefined":t(o);if("string"===a||"number"===a)e.push(o);else if(Array.isArray(o))e.push(r.apply(null,o));else if("object"===a)for(var l in o)n.call(o,l)&&o[l]&&e.push(l)}}return e.join(" ")}e.exports?e.exports=r:window.classNames=r}()}(e={exports:{}},e.exports),e.exports),f={},h=function(e){return e in f||(f[e]=0),++f[e]},v=function(){try{var e=new window.CustomEvent("test",{cancelable:!0});if(e.preventDefault(),!0!==e.defaultPrevented)throw new Error("Could not prevent default");return window.CustomEvent}catch(e){}return t;function t(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.bubbles,r=void 0!==n&&n,i=t.cancelable,o=void 0!==i&&i,a=t.detail,l=void 0===a?void 0:a,u=document.createEvent("CustomEvent");u.initCustomEvent(e,r,o,l);var s=u.preventDefault;return u.preventDefault=function(){s.call(u);try{Object.defineProperty(this,"defaultPrevented",{get:function(){return!0}})}catch(e){this.defaultPrevented=!0}},u}}();function b(e,t,n){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},o=new v(t,i({},r,{detail:n}));return e.dispatchEvent(o)}var y=function(){var e=!1;if("undefined"!=typeof window&&"function"==typeof window.addEventListener){var t=Object.defineProperty({},"passive",{get:function(){e=!0}}),n=function(){};window.addEventListener("testPassiveEventSupport",n,t),window.removeEventListener("testPassiveEventSupport",n,t)}return e}();function _(e){for(var t=e.className,n=!1,r=!0,i=arguments.length,o=Array(i>1?i-1:0),a=1;a<i;a++)o[a-1]=arguments[a];var l=o.map(function(e){var i=(o=e,new RegExp("^"+o+"$|^"+o+"\\s|\\s"+o+"\\s|\\s"+o+"$",a)).test(t);var o,a;i?n=!0:r=!1;return{className:e,hasClass:i}});return!(!r&&!n)&&l}var m=/\s+/,g={transitionend:function(){for(var e=document.createElement("div").style,t={transition:"transitionend",OTransition:"oTransitionEnd otransitionend",MozTransition:"transitionend",WebkitTransition:"webkitTransitionEnd"},n=Object.keys(t),r=n.length,i=void 0,o=0;o<r;++o)if(void 0!==e[i=n[o]])return t[i];return""}()};function x(e,n,r,i){var o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{},a=o.capture,l=void 0!==a&&a,u=o.passive,s=void 0===u||u;if(g[n]&&(n=g[n]),!e||!n)return null;var c=void 0===r?"undefined":t(r),p=r&&"string"===c;if("function"===c){if(i){var d=i;l=d.capture,s=d.passive}i=r}for(var f=y?{capture:l,passive:s}:l,h=p?function(t){var n=t.target;for(;!_(n,r)&&n!==e;)n=n.parentNode;if(n!==e)return i(t,n)}:i,v=n.split(m),b=v.length,x=0;x<b;++x)e.addEventListener(v[x],h,f);return function t(){for(var n=0;n<b;++n)e.removeEventListener(v[n],h,f);!function(e,t){if(!e)return!1;for(var n=Object.keys(e),r=n.length,i=0;i<r;++i){var o=n[i];if(e[o]===t)return delete e[o]}}(this,t)}}function O(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=n.leading,i=void 0!==r&&r,o=n.trailing,a=void 0===o||o,l=n.maxWait,u=void 0!==l&&l,s=void 0,c=void 0,d=void 0,f=void 0,h=!1,v=t!==u,b=!1!==u;function y(){for(var n=arguments.length,r=Array(n),o=0;o<n;o++)r[o]=arguments[o];return s=r,v&&(c&&clearTimeout(c),c=setTimeout(_,t)),b&&!d&&(d=setTimeout(m,u)),i&&!h&&(h=!0,f=e.apply(void 0,p(s))),f}return y.flush=function(){(c||d)&&(f=e.apply(void 0,p(s)));return x(),f},y.cancel=x,y;function _(){d&&clearTimeout(d),g()}function m(){c&&clearTimeout(c),g()}function g(){a&&(f=e.apply(void 0,p(s))),c=null,d=null,h=!1}function x(){c&&(clearTimeout(c),c=null),d&&(clearTimeout(d),d=null),s=void 0,h=!1}}window.__subscriptions=window.__subscriptions||{};var C=window.__subscriptions;function w(e,t){var n=x(arguments.length>2&&void 0!==arguments[2]?arguments[2]:document,e,t);C[e]||(C[e]={count:0});var r,i=C[e];return i.count++,i.onsubscribe||(i.onsubscribe=O((r=e,function(){b(document,"pubsub/onsubscribe",r),b(document,"pubsub/onsubscribe/"+r,r),C[r]&&delete C[r].unsubscribe}),100)),i.onsubscribe(),function(){i.count--,n.call(this),i.count<=0&&delete C[e]}}x(document,"pubsub/onsubscribe",function(e){var t=e.detail;C[t]||(C[t]={count:0});var n=C[t],r=n.queue;Array.isArray(r)&&(r.forEach(function(e){var t=c(e,3),n=t[0],r=t[1],i=t[2];b(i,n,r)}),delete n.queue)});var k,A=function(e,t){return e===t},N=((k=function(){var e;return(e=console).log.apply(e,arguments)},function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:A;return function(){for(var t=arguments.length,n=Array(t),r=0;r<t;r++)n[r]=arguments[r];return function(){for(var t=arguments.length,r=Array(t),i=0;i<t;i++)r[i]=arguments[i];return function(){return e.apply(void 0,[].concat(n,r))?k.apply(void 0,arguments):void 0}}}})()(!0),function(e){function t(e,r){var i;n(this,t);for(var o="\n    Native Property >>>"+e+"<<< exists already at "+r.nodeName+"#"+r._id+" and evaluates to -> "+r[e]+".\n    Please consult the HTML spec for inherited DOM properties:\n    - Element Interface https://developer.mozilla.org/en-US/docs/Web/API/Element#Properties\n    - Node Interface https://developer.mozilla.org/en-US/docs/Web/API/Node#Properties",a=arguments.length,l=Array(a>2?a-2:0),s=2;s<a;s++)l[s-2]=arguments[s];var c=u(this,(i=t.__proto__||Object.getPrototypeOf(t)).call.apply(i,[this,o].concat(l)));return Error.captureStackTrace&&Error.captureStackTrace(c,t),c.name="PropertyExistsException",c}return a(t,e),t}(Error)),E=/[A-Z]/g;function P(e,t,n){var r=e.toLowerCase(),i=n.charAt(t+1);return 0===t||i.toUpperCase()===i?r:"-"+r}var j=/^\s*(?:true|false|null|undefined|-?[0-9]+\.?[0-9]*|[[{](?:.|[\s])*[\]}])\s*$/;function T(e,t){var n=e;if(e&&t!==e){if(j.test(e))try{n=JSON.parse(e)}catch(n){console.error("Attribute "+t+" has an error:\n"+n+"\n",e)}}else n=!0;return n}var S=/(?:^\w|[A-Z]|\b\w|\s+|[-_]+)/g,R=/[-_]+/g;function M(e){return e.replace(S,L)}function L(e,t){return 0==+e||R.test(e)?"":0===t?e.toLowerCase():e.toUpperCase()}var D=["title","checked","disabled"],V=[];var U=1,I=3,F=8;function H(e,t){var n=e.nodeType,r=e.nodeName;n===U&&function(e,t){for(var n=t.attributes,r=e.attributes,i=null,o=null,a=null,l=null,u=r.length-1;u>=0;--u)if(l=r[u],a=l.name,i=l.namespaceURI,o=l.value,i){var s=l.localName;t.getAttributeNS(i,s||a)!==o&&t.setAttributeNS(i,a,o)}else t.hasAttribute(a)?t.getAttribute(a)!==o&&("null"===o||"undefined"===o?t.removeAttribute(a):t.setAttribute(a,o)):t.setAttribute(a,o);for(var c=n.length-1;c>=0;--c)!1!==(l=n[c]).specified&&(a=l.name,(i=l.namespaceURI)?(a=l.localName||a,e.hasAttributeNS(i,a)||t.removeAttributeNS(i,a)):e.hasAttributeNS(null,a)||t.removeAttribute(a))}(e,t),n!==I&&n!==F||t.nodeValue===e.nodeValue||(t.nodeValue=e.nodeValue),"INPUT"===r?function(e,t){var n=e.value,r=t.value;z(e,t,"checked"),z(e,t,"disabled"),n!==r&&(t.setAttribute("value",n),t.value=n);"null"===n&&(t.value="",t.removeAttribute("value"));e.hasAttributeNS(null,"value")?"range"===t.type&&(t.value=n):t.removeAttribute("value")}(e,t):"OPTION"===r?z(e,t,"selected"):"TEXTAREA"===r&&function(e,t){var n=e.value;n!==t.value&&(t.value=n);if(t.firstChild&&t.firstChild.nodeValue!==n){if(""===n&&t.firstChild.nodeValue===t.placeholder)return;t.firstChild.nodeValue=n}}(e,t)}function z(e,t,n){e[n]!==t[n]&&(t[n]=e[n],e[n]?t.setAttribute(n,""):t.removeAttribute(n))}var W=3;function q(e,t){return t?e?e.isSameNode&&e.isSameNode(t)?t:e.tagName!==t.tagName?e:(H(e,t),t.skipChildren&&t.skipChildren()||function(e,t){for(var n=void 0,r=void 0,i=void 0,o=void 0,a=0,l=0;n=t.childNodes[l],r=e.childNodes[l-a],n||r;l++)if(r)if(n)if($(r,n))(i=q(r,n))!==n&&(t.replaceChild(i,n),a++);else{o=null;for(var u=l;u<t.childNodes.length;u++)if($(t.childNodes[u],r)){o=t.childNodes[u];break}o?((i=q(r,o))!==o&&a++,t.insertBefore(i,n)):r.id||n.id?(t.insertBefore(r,n),a++):(i=q(r,n))!==n&&(t.replaceChild(i,n),a++)}else t.appendChild(r),a++;else t.removeChild(n),l--}(e,t),t):null:e}function $(e,t){return e.id?e.id===t.id:e.isSameNode?e.isSameNode(t):e.tagName===t.tagName&&(e.type===W&&e.nodeValue===t.nodeValue)}var K=function(e){function t(e){var r;n(this,t);for(var i="\n    Web Component "+e.nodeName+"%c#"+e._id+" does not accept string as a return from a template. Maybe use bel?}",o=arguments.length,a=Array(o>1?o-1:0),l=1;l<o;l++)a[l-1]=arguments[l];var s=u(this,(r=t.__proto__||Object.getPrototypeOf(t)).call.apply(r,[this,i].concat(a)));return Error.captureStackTrace&&Error.captureStackTrace(s,t),s.name="TemplateNoStringReturnException",s}return a(t,e),t}(Error),G=!!document.createDocumentFragment().children;function B(){return Reflect.construct(HTMLElement,[],this.__proto__.constructor)}Object.setPrototypeOf(B.prototype,HTMLElement.prototype),Object.setPrototypeOf(B,HTMLElement);var Z=function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(e){return t.reduceRight(function(e,t){return t(e)},e)}}(function(e){return function(t){function i(){var e,t,r;n(this,i);for(var o=arguments.length,a=Array(o),l=0;l<o;l++)a[l]=arguments[l];return t=r=u(this,(e=i.__proto__||Object.getPrototypeOf(i)).call.apply(e,[this].concat(a))),r._makeContextReady=function(){var e=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}).detail;r.contextNode&&(clearTimeout(r.timeoutId),r.timeoutId=setTimeout(function(){r.contextCallback(r.contextNode,e)},10)),r.unContextEnabled&&r.unContextEnabled(),r.unContextEnabled=w("context/available",r._makeContextReady)},u(r,t)}return a(i,e),r(i,[{key:"connectedCallback",value:function(){o(i.prototype.__proto__||Object.getPrototypeOf(i.prototype),"connectedCallback",this)&&o(i.prototype.__proto__||Object.getPrototypeOf(i.prototype),"connectedCallback",this).call(this),this.contextCallback&&this._makeContextReady()}},{key:"disconnectedCallback",value:function(){o(i.prototype.__proto__||Object.getPrototypeOf(i.prototype),"disconnectedCallback",this)&&o(i.prototype.__proto__||Object.getPrototypeOf(i.prototype),"disconnectedCallback",this).call(this),this.unContextEnabled&&this.unContextEnabled()}},{key:"provideContext",value:function(){var e=this.nodeName.toLowerCase();this.__isContext=!0,this.__contextName=e,function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:document;C[e]||(C[e]={count:0,queue:[]});var r=C[e].queue;Array.isArray(r)?r.push([e,t,n]):b(n,e,t)}("context/available",e)}},{key:"consumeContext",value:function(e){this.__consumedContext=e&&e.toLowerCase()}},{key:"contextNode",get:function(){for(var e=this.__consumedContext,t=this.parentNode;t&&(!t.__isContext||e&&e!==t.__contextName);)t=t.parentNode;return!(!t||!t.__isContext)&&t}}]),i}()},function(e){return function(t){function i(){return n(this,i),u(this,(i.__proto__||Object.getPrototypeOf(i)).apply(this,arguments))}return a(i,e),r(i,[{key:"appendChild",value:function(e){!this._isMorphing&&this._hasTemplate&&this._hasRendered?(this._lightDOMRefs.push(e),this.render()):o(i.prototype.__proto__||Object.getPrototypeOf(i.prototype),"appendChild",this).call(this,e)}},{key:"innerText",set:function(e){if(this._hasTemplate&&this._hasRendered){var t=document.createTextNode(e);this._lightDOMRefs=[t],this.render()}else s(i.prototype.__proto__||Object.getPrototypeOf(i.prototype),"innerText",e,this)}},{key:"textContent",set:function(e){if(this._hasTemplate&&this._hasRendered){var t=document.createTextNode(e);this._lightDOMRefs=[t],this.render()}else s(i.prototype.__proto__||Object.getPrototypeOf(i.prototype),"textContent",e,this)}},{key:"innerHTML",set:function(e){if(this._hasTemplate&&this._hasRendered){var t=document.createElement("div");t.innerHTML=e,this._lightDOMRefs=Array.from(t.children),this.render()}else s(i.prototype.__proto__||Object.getPrototypeOf(i.prototype),"innerHTML",e,this)}}]),i}()},function(e){return function(t){function i(e){n(this,i);var t=u(this,(i.__proto__||Object.getPrototypeOf(i)).call(this,e));t._reduceProps=function(e,n){var r=e.props,o=e.shouldUpdate,a=t._hasKeys[n];if(-1===D.indexOf(n)&&a)throw new N(n,t);var l="_"+n,u=r[n],c=t[l];return o||t.shouldUpdateCallback(u,c)?(t[l]=u,t._props[n]=u,a&&s(i.prototype.__proto__||Object.getPrototypeOf(i.prototype),n,u,t),{props:r,shouldUpdate:!0}):{props:r,shouldUpdate:!1}},t._isConnected=!1,t._props={},t._hasKeys={},t.updatedDebounced=O(function(){return t.updated&&t.updated()},50);var r=t.constructor.observedAttributes;return Array.isArray(r)&&r.forEach(function(e){var n,r=M(e),i=r in t;if(-1===D.indexOf(r)&&i)throw new N(r,t);t._hasKeys[r]=i,Object.defineProperty(t,r,n={get:function(){return this._props[r]},set:function(e){this.shouldUpdateCallback(this._props[r],e)&&(this._props[r]=e,i&&s(n.__proto__||Object.getPrototypeOf(n),r,e,this),this._isConnected&&this._hasRendered&&this.updatedDebounced())}})}),t}return a(i,e),r(i,[{key:"connectedCallback",value:function(){var e=this;if(o(i.prototype.__proto__||Object.getPrototypeOf(i.prototype),"connectedCallback",this)&&o(i.prototype.__proto__||Object.getPrototypeOf(i.prototype),"connectedCallback",this).call(this),!this._isConnected){this._isConnected=!0;var t=this.constructor.observedAttributes;this.initialClassName=this.className,Array.isArray(t)&&t.forEach(function(t){var n=M(t);if(e.hasAttribute(t)){var r=function(e,t){if("function"==typeof e.hasAttribute&&!e.hasAttribute(t))return!1;var n=e.value;return t?n=e.getAttribute(t):t=e.name,n=T(n,t)}(e,t),o=e._hasKeys[n];e._props[n]=r,o&&s(i.prototype.__proto__||Object.getPrototypeOf(i.prototype),n,r,e)}})}this.updated&&this.updated()}},{key:"attributeChangedCallback",value:function(e,t,n){this.shouldUpdateCallback(n,t)&&(this[M(e)]=T(n))}},{key:"setProps",value:function(e){var t=this.constructor.observedAttributes,n=void 0===t?[]:t;Object.keys(e).filter(function(e){return n.indexOf(e.replace(E,P))>-1}).reduce(this._reduceProps,{props:e,shouldUpdate:!1}).shouldUpdate&&this._isConnected&&this._hasRendered&&this.updated&&this.updated()}},{key:"shouldUpdateCallback",value:function(e,t){return e!==t}},{key:"disconnectedCallback",value:function(){this._isConnected=!1}}]),i}()},function(e){return function(i){function s(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.template,r=l(e,["template"]);n(this,s);var i=u(this,(s.__proto__||Object.getPrototypeOf(s)).call(this,r));return i._template=t,i._hasTemplate=!!t,i._hasRendered=!1,i.updated=i.render,i}return a(s,e),r(s,[{key:"render",value:function(){var e=this,n=!this._hasRendered;if(this.willRenderCallback(n),this._hasTemplate){var r=this._template;try{if(n){for(var i=document.createDocumentFragment(),a=[];this.firstChild;)a.push(this.firstChild),i.appendChild(this.firstChild);this._lightDOMRefs=a,this.childrenFragment=i}else this._lightDOMRefs.forEach(function(t){var n=t.cloneNode(!0);e.childrenFragment.appendChild(n)});G||(this.childrenFragment.children=Array.from(this.childrenFragment.childNodes).filter(function(e){return 1===e.nodeType}));var l=r(this._props,this.childrenFragment),u=document.createDocumentFragment();if(Array.isArray(l))l.forEach(function(e){u.appendChild(e)});else if(l){if("string"==typeof l)throw new K(this);u.appendChild(l)}if(n)o(s.prototype.__proto__||Object.getPrototypeOf(s.prototype),"appendChild",this).call(this,u);else{var c=this.cloneNode(!1);c._isMorphing=!0,c.appendChild(u),this._isMorphing=!0,function(e,n){if("object"!==(void 0===e?"undefined":t(e)))throw new Error("componentMorph: oldTree should be an object");if("object"!==(void 0===n?"undefined":t(n)))throw new Error("componentMorph: newTree should be an object");q(n,e)}(this,c),function(){for(var e=void 0;e=V.pop();)delete e.isSameNode;V=[]}(),this._isMorphing=!1}}catch(e){console.error(e)}}this._hasRendered=!0,this.didRenderCallback(n)}},{key:"skipChildren",value:function(){return!this._isMorphing}},{key:"willRenderCallback",value:function(e){}},{key:"didRenderCallback",value:function(e){}}]),s}()},function(e){return function(t){function i(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.styles,r=void 0===t?"":t,o=l(e,["styles"]);n(this,i);var a=u(this,(i.__proto__||Object.getPrototypeOf(i)).call(this,o));return a._styles=r,a}return a(i,e),r(i,[{key:"connectedCallback",value:function(){o(i.prototype.__proto__||Object.getPrototypeOf(i.prototype),"connectedCallback",this)&&o(i.prototype.__proto__||Object.getPrototypeOf(i.prototype),"connectedCallback",this).call(this),this._appendStyles()}},{key:"_appendStyles",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this;if(this._styles){var t=document.createElement("style"),n=document.createTextNode(this._styles);t.appendChild(n),e.insertAdjacentElement?e.insertAdjacentElement("afterbegin",t):e.appendChild(t)}}}]),i}()})(function(e){function t(e){n(this,t);var r=u(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return r._id=h(r.nodeName),r}return a(t,B),r(t,null,[{key:"uuidv4",value:function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(e){var t=16*Math.random()|0;return("x"==e?t:3&t|8).toString(16)})}}]),t}()),J={},X=function(e){function t(){var e,r,i;n(this,t);for(var o=arguments.length,a=Array(o),l=0;l<o;l++)a[l]=arguments[l];return r=i=u(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(a))),i._appendStyles=function(){t.appendGlobalStyles(i._styles,i.nodeName)},u(i,r)}return a(t,Z),r(t,null,[{key:"appendGlobalStyles",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:Z.uuidv4();if(e&&!J[t]){var n=document.createElement("style"),r=document.createTextNode(e);J[t]=!0,n.appendChild(r),n.setAttribute("data-c-name",t.toLowerCase()),document.head.appendChild(n)}}}]),t}();var Q='.a-input {\n  display: block;\n  width: 100%; }\n  .a-input:not(:first-child) {\n    margin-top: 5px; }\n    @media (min-width: 768px) {\n      .a-input:not(:first-child) {\n        margin-top: 10px; } }\n\n.a-input__wrapper {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  width: 100%; }\n\n.a-input__input {\n  -webkit-transition: all 0.2s ease;\n  transition: all 0.2s ease;\n  font-size: 12px;\n  font-weight: 400;\n  line-height: 1.5;\n  letter-spacing: 0.02em;\n  display: -webkit-inline-box;\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n  height: 40px;\n  padding: 0 20px;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n  color: #333;\n  background: #fff;\n  outline: none;\n  border: 1px solid #ccc;\n  -webkit-appearance: none;\n     -moz-appearance: none;\n          appearance: none; }\n  @media (min-width: 576px) {\n    .a-input__input {\n      font-size: 14px;\n      line-height: 1.21; } }\n  .a-input__input::-webkit-input-placeholder {\n    color: #999; }\n  .a-input__input:-ms-input-placeholder {\n    color: #999; }\n  .a-input__input::-ms-input-placeholder {\n    color: #999; }\n  .a-input__input::placeholder {\n    color: #999; }\n  .a-input__input:hover:not(:disabled):not(.a-input--error), .a-input__input:active:not(:disabled):not(.a-input--error), .a-input__input:focus:not(:disabled):not(.a-input--error) {\n    border-color: #00008f; }\n  .a-input__input:disabled {\n    background-color: #f5f5f5; }\n\n.a-input--error .a-input__input {\n  border-color: #c91432; }\n\n.a-input--valid .a-input__valid-icon {\n  display: -webkit-inline-box;\n  display: -ms-inline-flexbox;\n  display: inline-flex; }\n\n.a-input--inline {\n  display: inline-block;\n  width: auto;\n  vertical-align: middle; }\n  .a-input--inline + .a-input--inline {\n    margin-left: 10px; }\n    @media (min-width: 768px) {\n      .a-input--inline + .a-input--inline {\n        margin-left: 15px; } }\n  .a-input--inline .a-input__wrapper {\n    display: inline-block;\n    width: auto;\n    vertical-align: middle; }\n\n.a-input__valid-icon {\n  display: none;\n  width: 48px;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-flex: 0;\n      -ms-flex-positive: 0;\n          flex-grow: 0;\n  -ms-flex-negative: 0;\n      flex-shrink: 0; }\n  .a-input__valid-icon::before {\n    display: block;\n    width: 8px;\n    height: 16px;\n    content: "";\n    border: solid #1cc54e;\n    border-width: 0 2px 2px 0;\n    -webkit-transform: rotate(45deg);\n            transform: rotate(45deg); }\n',Y=/\n[\s]+$/,ee=/^\n[\s]+/,te=/[\s]+$/,ne=/^[\s]+/,re=/[\n\s]+/g,ie=["a","abbr","b","bdi","bdo","br","cite","data","dfn","em","i","kbd","mark","q","rp","rt","rtc","ruby","s","amp","small","span","strong","sub","sup","time","u","var","wbr"],oe=["code","pre","textarea"],ae=function e(t,n){if(Array.isArray(n))for(var r,i,o=t.nodeName.toLowerCase(),a=!1,l=0,u=n.length;l<u;l++){var s=n[l];if(Array.isArray(s))e(t,s);else{("number"==typeof s||"boolean"==typeof s||"function"==typeof s||s instanceof Date||s instanceof RegExp)&&(s=s.toString());var c=t.childNodes[t.childNodes.length-1];if("string"==typeof s)a=!0,c&&"#text"===c.nodeName?c.nodeValue+=s:(s=document.createTextNode(s),t.appendChild(s),c=s),l===u-1&&(a=!1,-1===ie.indexOf(o)&&-1===oe.indexOf(o)?""===(r=c.nodeValue.replace(ee,"").replace(te,"").replace(Y,"").replace(re," "))?t.removeChild(c):c.nodeValue=r:-1===oe.indexOf(o)&&(i=0===l?"":" ",r=c.nodeValue.replace(ee,i).replace(ne," ").replace(te,"").replace(Y,"").replace(re," "),c.nodeValue=r));else if(s&&s.nodeType){a&&(a=!1,-1===ie.indexOf(o)&&-1===oe.indexOf(o)?""===(r=c.nodeValue.replace(ee,"").replace(Y,"").replace(re," "))?t.removeChild(c):c.nodeValue=r:-1===oe.indexOf(o)&&(r=c.nodeValue.replace(ne," ").replace(ee,"").replace(Y,"").replace(re," "),c.nodeValue=r));var p=s.nodeName;p&&(o=p.toLowerCase()),t.appendChild(s)}}}};function le(e){var t,n,r,i=e.inputId,o=void 0===i?Z.uuidv4():i,a=e.type,l=void 0===a?"text":a,u=e.placeholder,s=void 0===u?"":u,c=e.value,p=void 0===c?"":c,d=e.name,f=e.disabled,h=void 0!==f&&f;return(r=document.createElement("div")).setAttribute("class","a-input__wrapper"),ae(r,["\n      ",(t=document.createElement("input"),t.setAttribute("id",""+String(o)),t.setAttribute("name",""+String(d)),t.setAttribute("type",""+String(l)),t.setAttribute("placeholder",""+String(s)),t.setAttribute("value",""+String(p)),h&&t.setAttribute("disabled","disabled"),t.setAttribute("class","a-input__input"),t),"\n          ",(n=document.createElement("span"),n.setAttribute("class","a-input__valid-icon"),n),"\n    "]),r}var ue,se,ce=function(e){function t(){return n(this,t),u(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,{styles:Q,template:le}))}return a(t,X),r(t,null,[{key:"observedAttributes",get:function(){return["valid","inline","error","disabled","input-id","type","placeholder","value","name"]}}]),r(t,[{key:"willRenderCallback",value:function(){var e=this.valid,t=this.inline,n=this.error,r=this.disabled;this.className=d("a-input",this.initialClassName,{"a-input--valid":e,"a-input--inline":t,"a-input--error":n,"a-input--disabled":r})}}]),t}();return ce.tagName="axa-input",ue=ce.tagName,se=ce,customElements.get(ue)||customElements.define(ue,se),ce}();
