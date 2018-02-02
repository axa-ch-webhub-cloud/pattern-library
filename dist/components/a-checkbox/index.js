var StyleGuideWebComponent=function(){"use strict";function e(e,t){var n,r;return(n=t,new RegExp("^"+n+"$|^"+n+"\\s|\\s"+n+"\\s|\\s"+n+"$",r)).test(e.className)}var t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},i=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)},a=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},c=function(){return function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var n=[],r=!0,o=!1,i=void 0;try{for(var a,c=e[Symbol.iterator]();!(r=(a=c.next()).done)&&(n.push(a.value),!t||n.length!==t);r=!0);}catch(e){o=!0,i=e}finally{try{!r&&c.return&&c.return()}finally{if(o)throw i}}return n}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),u=function(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)},s=/\s+/,l={transitionend:function(){for(var e=document.createElement("div").style,t={transition:"transitionend",OTransition:"oTransitionEnd otransitionend",MozTransition:"transitionend",WebkitTransition:"webkitTransitionEnd"},n=Object.keys(t),r=n.length,o=void 0,i=0;i<r;++i)if(void 0!==e[o=n[i]])return t[o];return null}()};function d(n,r,o,i){var a=arguments.length>4&&void 0!==arguments[4]&&arguments[4];if(l[r]&&(r=l[r]),!n||!r)return null;var c=void 0===o?"undefined":t(o);"function"===c&&(a=!!i,i=o);for(var u=o&&"string"===c?function(t){var r=t.target;for(;!e(r,o)&&r!==n;)r=r.parentNode;if(r!==n)return i(t,r)}:i,d=r.split(s),h=d.length,f=0;f<h;++f)n.addEventListener(d[f],u,a);return function e(){for(var t=0;t<h;++t)n.removeEventListener(d[t],u,a);!function(e,t){if(!e)return!1;for(var n=Object.keys(e),r=n.length,o=0;o<r;++o){var i=n[o];if(e[i]===t)return delete e[i]}}(this,e)}}var h=/^\s*(?:true|false|null|undefined|-?[0-9]+\.?[0-9]*|[[{](?:.|[\r\n])*[\]}])\s*$/;function f(e,t){if("function"==typeof e.hasAttribute&&!e.hasAttribute(t))return!1;var n=e.value;if(t?n=e.getAttribute(t):t=e.name,n&&t!==n){if(h.test(n))try{n=JSON.parse(n)}catch(t){console.error("Attribute "+e+" has an error:\n"+t+"\n",n)}}else n=!0;return n}var b=function(){try{var e=new window.CustomEvent("test");if(e.preventDefault(),!0!==e.defaultPrevented)throw new Error("Could not prevent default");return window.CustomEvent}catch(e){}return t;function t(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.bubbles,r=void 0!==n&&n,o=t.cancelable,i=void 0!==o&&o,a=t.detail,c=void 0===a?void 0:a,u=document.createEvent("CustomEvent");u.initCustomEvent(e,r,i,c);var s=u.preventDefault;return u.preventDefault=function(){s.call(u);try{Object.defineProperty(this,"defaultPrevented",{get:function(){return!0}})}catch(e){this.defaultPrevented=!0}},u}}();function p(e,t,n){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},i=new b(t,o({},r,{detail:n}));e.dispatchEvent(i)}var v={};function y(e,t){var n=d(arguments.length>2&&void 0!==arguments[2]?arguments[2]:document,e,t);v[e]||(v[e]={count:0});var r,o=v[e];return o.count++,o.onsubscribe||(o.onsubscribe=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=n.leading,o=void 0!==r&&r,i=n.trailing,a=void 0===i||i,c=n.maxWait,s=void 0!==c&&c,l=void 0,d=void 0,h=void 0,f=void 0,b=!1,p=t!==s,v=!1!==s;function y(){for(var n=arguments.length,r=Array(n),i=0;i<n;i++)r[i]=arguments[i];return l=r,p&&(d&&clearTimeout(d),d=setTimeout(m,t)),v&&!h&&(h=setTimeout(x,s)),o&&!b&&(b=!0,f=e.apply(void 0,u(l))),f}return y.flush=function(){return(d||h)&&(f=e.apply(void 0,u(l))),g(),f},y.cancel=g,y;function m(){h&&clearTimeout(h),k()}function x(){d&&clearTimeout(d),k()}function k(){a&&(f=e.apply(void 0,u(l))),d=null,h=null,b=!1}function g(){d&&(clearTimeout(d),d=null),h&&(clearTimeout(h),h=null),l=void 0,b=!1}}((r=e,function(){p(document,"pubsub/onsubscribe",r),p(document,"pubsub/onsubscribe/"+r,r),v[r]&&delete v[r].unsubscribe}),100)),o.onsubscribe(),function(){o.count--,n.call(this),o.count<=0&&delete v[e]}}function m(){return Reflect.construct(HTMLElement,[],this.__proto__.constructor)}d(document,"pubsub/onsubscribe",function(e){var t=e.detail;v[t]||(v[t]={count:0});var n=v[t],r=n.queue;Array.isArray(r)&&(r.forEach(function(e){var t=c(e,3),n=t[0],r=t[1],o=t[2];p(o,n,r)}),delete n.queue)}),Object.setPrototypeOf(m.prototype,HTMLElement.prototype),Object.setPrototypeOf(m,HTMLElement);var x,k,g,_={},C="throwed",E=function(e){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",r=arguments[1];n(this,t);var o=a(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return o._makeContextReady=o._makeContextReady.bind(o),o._initialise(e,r),o}return i(t,m),r(t,[{key:"_initialise",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;this.initialClassName=this.className,this._styles=e,this._template=t}},{key:"connectedCallback",value:function(){this._appendStyles(),this.render(),this.contextCallback&&this._makeContextReady()}},{key:"disconnectedCallback",value:function(){this.unContextEnabled&&this.unContextEnabled()}},{key:"_appendStyles",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this;if(this._styles){var t=document.createElement("style"),n=document.createTextNode(this._styles);t.appendChild(n),e.insertAdjacentElement?e.insertAdjacentElement("afterbegin",t):e.appendChild(t)}}},{key:"render",value:function(){var e=this;if(!this._hasRendered){var t=this._template;if(t)try{for(var n=document.createDocumentFragment();this.firstChild;)n.appendChild(this.firstChild);var r=t(function(e){if(!e.hasAttributes)return null;for(var t={},n=e.attributes,r=n.length,o=0;o<r;++o){var i=n[o];t[i.name]=f(i)}return t}(this),n);if(Array.isArray(r))r.forEach(function(t){e.appendChild(t)});else if(r){if("string"==typeof r){var o=new Error(C);throw console.error("\n%cWeb Component %c"+this.nodeName+"%c does not accept string as a return from a template. Maybe use bel?\n\nStack Trace: "+o.stack+"\n","color: #580000; font-size: 14px; line-height:16px;","background: #8b0000; color: #FFF; font-size: 14px; line-height:16px;","color: #580000; font-size: 14px; line-height:16px;"),o}this.appendChild(r)}this._hasRendered=!0}catch(o){o.message!==C&&console.error("\n%cWeb Component %c"+this.nodeName+"%c has an error while loading its template:\n"+o+"\n\nStack Trace: "+o.stack+"\n","color: #580000; font-size: 14px; line-height:16px;","background: #8b0000; color: #FFF; font-size: 14px; line-height:16px;","color: #580000; font-size: 14px; line-height:16px;")}}}},{key:"enableContext",value:function(){var e=this.nodeName.toLowerCase();this.__isContext=!0,this.__contextName=e,function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:document;v[e]||(v[e]={count:0,queue:[]});var r=v[e].queue;Array.isArray(r)?r.push([e,t,n]):p(n,e,t)}("context/enabled",e)}},{key:"selectContext",value:function(e){this.__selectedContext=e.toLowerCase()}},{key:"_makeContextReady",value:function(){var e=this,t=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}).detail;this.contextNode&&(clearTimeout(this.timeoutId),this.timeoutId=setTimeout(function(){e.contextCallback(e.contextNode,t)},10)),this.unContextEnabled&&this.unContextEnabled(),this.unContextEnabled=y("context/enabled",this._makeContextReady)}},{key:"contextNode",get:function(){for(var e=this.__selectedContext,t=this.parentNode;t&&(!t.__isContext||e&&e!==t.__contextName);)t=t.parentNode;return!(!t||!t.__isContext)&&t}}],[{key:"uuidv4",value:function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(e){var t=16*Math.random()|0;return("x"==e?t:3&t|8).toString(16)})}}]),t}(),w=(function(e){function t(){return n(this,t),a(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}i(t,E),r(t,[{key:"connectedCallback",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"open",t=this.attachShadow({mode:e});this._appendStyles(t),this.render()}}])}(),function(e){function t(){return n(this,t),a(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return i(t,E),r(t,[{key:"_appendStyles",value:function(){t.appendGlobalStyles(this._styles,this.nodeName)}}],[{key:"appendGlobalStyles",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:E.uuidv4();if(e&&!_[e]){var n=document.createElement("style"),r=document.createTextNode(e);n.appendChild(r),n.setAttribute("data-c-name",t.toLowerCase()),document.querySelector("head").appendChild(n),_[e]=!0}}}]),t}()),A=".a-checkbox {\n  display: inline-block;\n  width: 16px;\n  height: 16px;\n  background: #fff;\n  border: 1px solid #999; }\n\n.a-checkbox[hidden] {\n  display: none; }\n\n.a-checkbox[checked] {\n  background: #3032c1;\n  border-color: #3032c1; }\n\n.a-checkbox[disabled] {\n  background: #999;\n  border-color: #999; }\n\n.a-checkbox[checked][disabled] {\n  background: #999;\n  border-color: #999; }\n",O=32,T=function(e){function t(){return n(this,t),a(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,A))}return i(t,w),r(t,null,[{key:"observedAttributes",get:function(){return["checked","disabled"]}}]),r(t,[{key:"render",value:function(){this.className=this.initialClassName+" a-checkbox",this.hasAttribute("role")||this.setAttribute("role","checkbox"),this.hasAttribute("tabindex")||this.setAttribute("tabindex","0"),this._upgradeProperty("checked"),this._upgradeProperty("disabled"),d(this,"keyup",this._onKeyUp),d(this,"click",this._onClick)}},{key:"_upgradeProperty",value:function(e){if(Object.prototype.hasOwnProperty.call(this,e)){var t=this[e];delete this[e],this[e]=t}}},{key:"attributeChangedCallback",value:function(e,t,n){var r=null!==n;switch(e){case"checked":this.setAttribute("aria-checked",r);break;case"disabled":this.setAttribute("aria-disabled",r),r?(this.removeAttribute("tabindex"),this.blur()):this.setAttribute("tabindex","0")}}},{key:"_onKeyUp",value:function(e){if(!e.altKey)switch(e.keyCode){case O:e.preventDefault(),this._toggleChecked()}}},{key:"_onClick",value:function(){this._toggleChecked()}},{key:"_toggleChecked",value:function(){this.disabled||(this.checked=!this.checked,this.dispatchEvent(new b("change",{detail:{checked:this.checked},bubbles:!0})))}},{key:"checked",set:function(e){Boolean(e)?this.setAttribute("checked",""):this.removeAttribute("checked")},get:function(){return this.hasAttribute("checked")}},{key:"disabled",set:function(e){Boolean(e)?this.setAttribute("disabled",""):this.removeAttribute("disabled")},get:function(){return this.hasAttribute("disabled")}}]),t}();return x=function(){window.customElements.define("axa-checkbox",T)},k=0,g=function(){if(0===k)try{x.apply(void 0,arguments),k+=1,document.removeEventListener("DOMContentLoaded"),document.removeEventListener("WebComponentsReady")}catch(e){}},document.addEventListener("DOMContentLoaded",g,!1),document.addEventListener("WebComponentsReady",g,!1),T}();
