var StyleGuideWebComponent=function(){"use strict";function e(e,t,n){var i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},a=new o(t,s({},i,{detail:n}));e.dispatchEvent(a)}function t(e,t,n,i){function o(){for(var t=0;t<h;++t)e.removeEventListener(p[t],s,l);!function(e,t){if(!e)return!1;for(var n=Object.keys(e),i=n.length,o=0;o<i;++o){var a=n[o];if(e[a]===t)return delete e[a]}}(this,o)}var l=arguments.length>4&&void 0!==arguments[4]&&arguments[4];if(g[t]&&(t=g[t]),!e||!t)return null;var r=void 0===n?"undefined":a(n);"function"===r&&(l=!!i,i=n);for(var s=n&&"string"===r?function(t){for(var o=t.target;!function(e,t){return function(e,t){return new RegExp("^"+e+"$|^"+e+"\\s|\\s"+e+"\\s|\\s"+e+"$",t)}(t).test(e.className)}(o,n)&&o!==e;)o=o.parentNode;if(o!==e)return i(t,o)}:i,p=t.split(d),h=p.length,c=0;c<h;++c)e.addEventListener(p[c],s,l);return o}function n(){return Reflect.construct(HTMLElement,[],this.__proto__.constructor)}var i=/^\s*(?:true|false|null|undefined|-?[0-9]+\.?[0-9]*|[[{](?:.|[\r\n])*[\]}])\s*$/,o=function(){function e(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.bubbles,i=void 0!==n&&n,o=t.cancelable,a=void 0!==o&&o,l=t.detail,r=void 0===l?void 0:l,s=document.createEvent("CustomEvent");s.initCustomEvent(e,i,a,r);var p=s.preventDefault;return s.preventDefault=function(){p.call(s);try{Object.defineProperty(this,"defaultPrevented",{get:function(){return!0}})}catch(e){this.defaultPrevented=!0}},s}try{var t=new window.CustomEvent("test");if(t.preventDefault(),!0!==t.defaultPrevented)throw new Error("Could not prevent default");return window.CustomEvent}catch(e){}return e}(),a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},l=(function(){function e(e){this.value=e}function t(t){function n(o,a){try{var l=t[o](a),r=l.value;r instanceof e?Promise.resolve(r.value).then(function(e){n("next",e)},function(e){n("throw",e)}):i(l.done?"return":"normal",l.value)}catch(e){i("throw",e)}}function i(e,t){switch(e){case"return":o.resolve({value:t,done:!0});break;case"throw":o.reject(t);break;default:o.resolve({value:t,done:!1})}(o=o.next)?n(o.key,o.arg):a=null}var o,a;this._invoke=function(e,t){return new Promise(function(i,l){var r={key:e,arg:t,resolve:i,reject:l,next:null};a?a=a.next=r:(o=a=r,n(e,t))})},"function"!=typeof t.return&&(this.return=void 0)}"function"==typeof Symbol&&Symbol.asyncIterator&&(t.prototype[Symbol.asyncIterator]=function(){return this}),t.prototype.next=function(e){return this._invoke("next",e)},t.prototype.throw=function(e){return this._invoke("throw",e)},t.prototype.return=function(e){return this._invoke("return",e)}}(),function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}),r=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},p=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)},h=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},c=function(){return function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var n=[],i=!0,o=!1,a=void 0;try{for(var l,r=e[Symbol.iterator]();!(i=(l=r.next()).done)&&(n.push(l.value),!t||n.length!==t);i=!0);}catch(e){o=!0,a=e}finally{try{!i&&r.return&&r.return()}finally{if(o)throw a}}return n}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),f=function(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)},d=/\s+/,g={transitionend:function(){for(var e=document.createElement("div").style,t={transition:"transitionend",OTransition:"oTransitionEnd otransitionend",MozTransition:"transitionend",WebkitTransition:"webkitTransitionEnd"},n=Object.keys(t),i=n.length,o=void 0,a=0;a<i;++a)if(o=n[a],void 0!==e[o])return t[o];return null}()},m={};t(document,"pubsub/onsubscribe",function(t){var n=t.detail;m[n]||(m[n]={count:0});var i=m[n],o=i.queue;Array.isArray(o)&&(o.forEach(function(t){var n=c(t,3),i=n[0],o=n[1];e(n[2],i,o)}),delete i.queue)}),Object.setPrototypeOf(n.prototype,HTMLElement.prototype),Object.setPrototypeOf(n,HTMLElement);var u={},y=function(o){function a(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments[1];l(this,a);var n=h(this,(a.__proto__||Object.getPrototypeOf(a)).call(this));return n._makeContextReady=n._makeContextReady.bind(n),n._initialise(e,t),n}return p(a,n),r(a,[{key:"_initialise",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;this.initialClassName=this.className,this._styles=e,this._template=t}},{key:"connectedCallback",value:function(){this._appendStyles(),this.render(),this.contextCallback&&this._makeContextReady()}},{key:"disconnectedCallback",value:function(){this.unContextEnabled&&this.unContextEnabled()}},{key:"_appendStyles",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this;if(this._styles){var t=document.createElement("style"),n=document.createTextNode(this._styles);t.appendChild(n),e.insertAdjacentElement?e.insertAdjacentElement("afterbegin",t):e.appendChild(t)}}},{key:"render",value:function(){var e=this;if(!this._hasRendered){var t=this._template;if(t)try{for(var n=document.createDocumentFragment();this.firstChild;)n.appendChild(this.firstChild);var o=t(function(e){if(!e.hasAttributes)return null;for(var t={},n=e.attributes,o=n.length,a=0;a<o;++a){var l=n[a];t[l.name]=function(e,t){if("function"==typeof e.hasAttribute&&!e.hasAttribute(t))return!1;var n=e.value;if(t?n=e.getAttribute(t):t=e.name,n&&t!==n){if(i.test(n))try{n=JSON.parse(n)}catch(t){console.error("Attribute "+e+" has an error:\n"+t+"\n",n)}}else n=!0;return n}(l)}return t}(this),n);if(Array.isArray(o))o.forEach(function(t){e.appendChild(t)});else if(o){if("string"==typeof o){var a=new Error("throwed");throw console.error("\n%cWeb Component %c"+this.nodeName+"%c does not accept string as a return from a template. Maybe use bel?\n\nStack Trace: "+a.stack+"\n","color: #580000; font-size: 14px; line-height:16px;","background: #8b0000; color: #FFF; font-size: 14px; line-height:16px;","color: #580000; font-size: 14px; line-height:16px;"),a}this.appendChild(o)}this._hasRendered=!0}catch(a){"throwed"!==a.message&&console.error("\n%cWeb Component %c"+this.nodeName+"%c has an error while loading its template:\n"+a+"\n\nStack Trace: "+a.stack+"\n","color: #580000; font-size: 14px; line-height:16px;","background: #8b0000; color: #FFF; font-size: 14px; line-height:16px;","color: #580000; font-size: 14px; line-height:16px;")}}}},{key:"enableContext",value:function(){var t=this.nodeName.toLowerCase();this.__isContext=!0,this.__contextName=t,function(t,n){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:document;m[t]||(m[t]={count:0,queue:[]});var o=m[t].queue;Array.isArray(o)?o.push([t,n,i]):e(i,t,n)}("context/enabled",t)}},{key:"selectContext",value:function(e){this.__selectedContext=e.toLowerCase()}},{key:"_makeContextReady",value:function(){var n=this;this.contextNode?(clearTimeout(this.timeoutId),this.timeoutId=setTimeout(function(){n.contextCallback(n.contextNode)},10)):this.unContextEnabled||(this.unContextEnabled=function(n,i){var o=t(arguments.length>2&&void 0!==arguments[2]?arguments[2]:document,n,i);m[n]||(m[n]={count:0});var a=m[n];return a.count++,a.onsubscribe||(a.onsubscribe=function(e){function t(){for(var t=arguments.length,i=Array(t),a=0;a<t;a++)i[a]=arguments[a];return d=i,x&&(g&&clearTimeout(g),g=setTimeout(function(){m&&clearTimeout(m),n()},o)),_&&!m&&(m=setTimeout(function(){g&&clearTimeout(g),n()},c)),r&&!y&&(y=!0,u=e.apply(void 0,f(d))),u}function n(){p&&(u=e.apply(void 0,f(d))),g=null,m=null,y=!1}function i(){g&&(clearTimeout(g),g=null),m&&(clearTimeout(m),m=null),d=void 0,y=!1}var o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},l=a.leading,r=void 0!==l&&l,s=a.trailing,p=void 0===s||s,h=a.maxWait,c=void 0!==h&&h,d=void 0,g=void 0,m=void 0,u=void 0,y=!1,x=o!==c,_=!1!==c;return t.flush=function(){return(g||m)&&(u=e.apply(void 0,f(d))),i(),u},t.cancel=i,t}(function(t){return function(){e(document,"pubsub/onsubscribe",t),e(document,"pubsub/onsubscribe/"+t,t),m[t]&&delete m[t].unsubscribe}}(n),100)),a.onsubscribe(),function(){a.count--,o.call(this),a.count<=0&&delete m[n]}}("context/enabled",this._makeContextReady))}},{key:"contextNode",get:function(){for(var e=this.__selectedContext,t=this.parentNode;t&&(!t.__isContext||e&&e!==t.__contextName);)t=t.parentNode;return!(!t||!t.__isContext)&&t}}],[{key:"uuidv4",value:function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(e){var t=16*Math.random()|0;return("x"==e?t:3&t|8).toString(16)})}}]),a}(),x=(function(e){function t(){return l(this,t),h(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}p(t,y),r(t,[{key:"connectedCallback",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"open",t=this.attachShadow({mode:e});this._appendStyles(t),this.render()}}])}(),function(e){function t(){return l(this,t),h(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return p(t,y),r(t,[{key:"_appendStyles",value:function(){t.appendGlobalStyles(this._styles,this.nodeName)}}],[{key:"appendGlobalStyles",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:y.uuidv4();if(e&&!u[e]){var n=document.createElement("style"),i=document.createTextNode(e);n.appendChild(i),n.setAttribute("data-c-name",t.toLowerCase()),document.querySelector("head").appendChild(n),u[e]=!0}}}]),t}()),_='.a-typo {\n  padding-right: 15px;\n  padding-left: 15px;\n  width: 100%;\n  margin-right: auto;\n  margin-left: auto;\n  max-width: auto;\n  display: block; }\n  @media (min-width: 576px) {\n    .a-typo {\n      max-width: 540px; } }\n  @media (min-width: 768px) {\n    .a-typo {\n      max-width: 720px; } }\n  @media (min-width: 992px) {\n    .a-typo {\n      max-width: 960px; } }\n  @media (min-width: 1200px) {\n    .a-typo {\n      max-width: 1140px; } }\n\n.a-typo__main-title--publico {\n  font-family: "Publico Headline", Georgia, serif;\n  font-size: 46px;\n  font-weight: 700;\n  line-height: 1.13;\n  letter-spacing: 0.02em; }\n  @media (min-width: 576px) {\n    .a-typo__main-title--publico {\n      font-family: "Publico Headline", Georgia, serif;\n      font-size: 78px;\n      font-weight: 700;\n      line-height: 1.05;\n      letter-spacing: 0.02em; } }\n  @media (min-width: 768px) {\n    .a-typo__main-title--publico {\n      font-family: "Publico Headline", Georgia, serif;\n      font-size: 78px;\n      font-weight: 700;\n      line-height: 1.05;\n      letter-spacing: 0.02em; } }\n  @media (min-width: 992px) {\n    .a-typo__main-title--publico {\n      font-family: "Publico Headline", Georgia, serif;\n      font-size: 78px;\n      font-weight: 700;\n      line-height: 1.05;\n      letter-spacing: 0.02em; } }\n\n.a-typo__page-title--publico {\n  font-family: "Publico Headline", Georgia, serif;\n  font-size: 30px;\n  font-weight: 700;\n  line-height: 1.13;\n  letter-spacing: 0.02em; }\n  @media (min-width: 576px) {\n    .a-typo__page-title--publico {\n      font-family: "Publico Headline", Georgia, serif;\n      font-size: 62px;\n      font-weight: 700;\n      line-height: 1.16;\n      letter-spacing: 0.02em; } }\n  @media (min-width: 768px) {\n    .a-typo__page-title--publico {\n      font-family: "Publico Headline", Georgia, serif;\n      font-size: 62px;\n      font-weight: 700;\n      line-height: 1.16;\n      letter-spacing: 0.02em; } }\n  @media (min-width: 992px) {\n    .a-typo__page-title--publico {\n      font-family: "Publico Headline", Georgia, serif;\n      font-size: 62px;\n      font-weight: 700;\n      line-height: 1.16;\n      letter-spacing: 0.02em; } }\n\n.a-typo__slice-title--publico {\n  font-family: "Publico Headline", Georgia, serif;\n  font-size: 24px;\n  font-weight: 700;\n  line-height: 1.17;\n  letter-spacing: 0.02em; }\n  @media (min-width: 576px) {\n    .a-typo__slice-title--publico {\n      font-family: "Publico Headline", Georgia, serif;\n      font-size: 48px;\n      font-weight: 700;\n      line-height: 1.13;\n      letter-spacing: 0.02em; } }\n  @media (min-width: 768px) {\n    .a-typo__slice-title--publico {\n      font-family: "Publico Headline", Georgia, serif;\n      font-size: 48px;\n      font-weight: 700;\n      line-height: 1.13;\n      letter-spacing: 0.02em; } }\n  @media (min-width: 992px) {\n    .a-typo__slice-title--publico {\n      font-family: "Publico Headline", Georgia, serif;\n      font-size: 48px;\n      font-weight: 700;\n      line-height: 1.13;\n      letter-spacing: 0.02em; } }\n\n.a-typo__small-module-title--publico {\n  font-family: "Publico Headline", Georgia, serif;\n  font-size: 20px;\n  font-weight: 700;\n  line-height: 1.5;\n  letter-spacing: 0.02em; }\n  @media (min-width: 576px) {\n    .a-typo__small-module-title--publico {\n      font-family: "Publico Headline", Georgia, serif;\n      font-size: 36px;\n      font-weight: 700;\n      line-height: 1.17;\n      letter-spacing: 0.02em; } }\n  @media (min-width: 768px) {\n    .a-typo__small-module-title--publico {\n      font-family: "Publico Headline", Georgia, serif;\n      font-size: 36px;\n      font-weight: 700;\n      line-height: 1.17;\n      letter-spacing: 0.02em; } }\n  @media (min-width: 992px) {\n    .a-typo__small-module-title--publico {\n      font-family: "Publico Headline", Georgia, serif;\n      font-size: 36px;\n      font-weight: 700;\n      line-height: 1.17;\n      letter-spacing: 0.02em; } }\n\n.a-typo__main-title {\n  font-size: 46px;\n  font-weight: 700;\n  line-height: 1.13;\n  letter-spacing: 0.01em; }\n  @media (min-width: 576px) {\n    .a-typo__main-title {\n      font-size: 78px;\n      font-weight: 700;\n      line-height: 1.05;\n      letter-spacing: 0.01em; } }\n  @media (min-width: 768px) {\n    .a-typo__main-title {\n      font-size: 78px;\n      font-weight: 700;\n      line-height: 1.05;\n      letter-spacing: 0.01em; } }\n  @media (min-width: 992px) {\n    .a-typo__main-title {\n      font-size: 78px;\n      font-weight: 700;\n      line-height: 1.05;\n      letter-spacing: 0.01em; } }\n\n.a-typo__page-title {\n  font-size: 30px;\n  font-weight: 700;\n  line-height: 1.13;\n  letter-spacing: 0.01em; }\n  @media (min-width: 576px) {\n    .a-typo__page-title {\n      font-size: 62px;\n      font-weight: 700;\n      line-height: 1.16;\n      letter-spacing: 0.01em; } }\n  @media (min-width: 768px) {\n    .a-typo__page-title {\n      font-size: 62px;\n      font-weight: 700;\n      line-height: 1.16;\n      letter-spacing: 0.01em; } }\n  @media (min-width: 992px) {\n    .a-typo__page-title {\n      font-size: 62px;\n      font-weight: 700;\n      line-height: 1.16;\n      letter-spacing: 0.01em; } }\n\n.a-typo__slice-title {\n  font-size: 24px;\n  font-weight: 700;\n  line-height: 1.17;\n  letter-spacing: 0.01em; }\n  @media (min-width: 576px) {\n    .a-typo__slice-title {\n      font-size: 48px;\n      font-weight: 700;\n      line-height: 1.13;\n      letter-spacing: 0.01em; } }\n  @media (min-width: 768px) {\n    .a-typo__slice-title {\n      font-size: 48px;\n      font-weight: 700;\n      line-height: 1.13;\n      letter-spacing: 0.01em; } }\n  @media (min-width: 992px) {\n    .a-typo__slice-title {\n      font-size: 48px;\n      font-weight: 700;\n      line-height: 1.13;\n      letter-spacing: 0.01em; } }\n\n.a-typo__small-module-title {\n  font-size: 20px;\n  font-weight: 700;\n  line-height: 1.5;\n  letter-spacing: 0.01em; }\n  @media (min-width: 576px) {\n    .a-typo__small-module-title {\n      font-size: 36px;\n      font-weight: 700;\n      line-height: 1.17;\n      letter-spacing: 0.01em; } }\n  @media (min-width: 768px) {\n    .a-typo__small-module-title {\n      font-size: 36px;\n      font-weight: 700;\n      line-height: 1.17;\n      letter-spacing: 0.01em; } }\n  @media (min-width: 992px) {\n    .a-typo__small-module-title {\n      font-size: 36px;\n      font-weight: 700;\n      line-height: 1.17;\n      letter-spacing: 0.01em; } }\n\n.a-typo__title {\n  font-size: 20px;\n  font-weight: 700;\n  line-height: 1.5;\n  letter-spacing: 0.01em; }\n  @media (min-width: 576px) {\n    .a-typo__title {\n      font-size: 28px;\n      font-weight: 700;\n      line-height: 1.14;\n      letter-spacing: 0.01em; } }\n  @media (min-width: 768px) {\n    .a-typo__title {\n      font-size: 28px;\n      font-weight: 700;\n      line-height: 1.14;\n      letter-spacing: 0.01em; } }\n  @media (min-width: 992px) {\n    .a-typo__title {\n      font-size: 28px;\n      font-weight: 700;\n      line-height: 1.14;\n      letter-spacing: 0.01em; } }\n\n.a-typo__title--semibold {\n  font-size: 20px;\n  font-weight: 600;\n  line-height: 1.5;\n  letter-spacing: 0.01em; }\n  @media (min-width: 576px) {\n    .a-typo__title--semibold {\n      font-size: 28px;\n      font-weight: 600;\n      line-height: 1.14;\n      letter-spacing: 0.01em; } }\n  @media (min-width: 768px) {\n    .a-typo__title--semibold {\n      font-size: 28px;\n      font-weight: 600;\n      line-height: 1.14;\n      letter-spacing: 0.01em; } }\n  @media (min-width: 992px) {\n    .a-typo__title--semibold {\n      font-size: 28px;\n      font-weight: 600;\n      line-height: 1.14;\n      letter-spacing: 0.01em; } }\n\n.a-typo__item-highlight {\n  font-size: 20px;\n  font-weight: 700;\n  line-height: 1.5;\n  letter-spacing: 0; }\n  @media (min-width: 576px) {\n    .a-typo__item-highlight {\n      font-size: 24px;\n      font-weight: 700;\n      line-height: 1.2;\n      letter-spacing: 0; } }\n  @media (min-width: 768px) {\n    .a-typo__item-highlight {\n      font-size: 24px;\n      font-weight: 700;\n      line-height: 1.2;\n      letter-spacing: 0; } }\n  @media (min-width: 992px) {\n    .a-typo__item-highlight {\n      font-size: 24px;\n      font-weight: 700;\n      line-height: 1.2;\n      letter-spacing: 0; } }\n\n.a-typo__text {\n  font-size: 18px;\n  font-weight: 400;\n  line-height: 1.5;\n  letter-spacing: 0.01em; }\n  @media (min-width: 576px) {\n    .a-typo__text {\n      font-size: 20px;\n      font-weight: 400;\n      line-height: 1.5;\n      letter-spacing: 0.01em; } }\n  @media (min-width: 768px) {\n    .a-typo__text {\n      font-size: 20px;\n      font-weight: 400;\n      line-height: 1.5;\n      letter-spacing: 0.01em; } }\n  @media (min-width: 992px) {\n    .a-typo__text {\n      font-size: 20px;\n      font-weight: 400;\n      line-height: 1.5;\n      letter-spacing: 0.01em; } }\n\n.a-typo__text--semibold {\n  font-size: 18px;\n  font-weight: 600;\n  line-height: 1.5;\n  letter-spacing: 0.01em; }\n  @media (min-width: 576px) {\n    .a-typo__text--semibold {\n      font-size: 20px;\n      font-weight: 600;\n      line-height: 1.5;\n      letter-spacing: 0.01em; } }\n  @media (min-width: 768px) {\n    .a-typo__text--semibold {\n      font-size: 20px;\n      font-weight: 600;\n      line-height: 1.5;\n      letter-spacing: 0.01em; } }\n  @media (min-width: 992px) {\n    .a-typo__text--semibold {\n      font-size: 20px;\n      font-weight: 600;\n      line-height: 1.5;\n      letter-spacing: 0.01em; } }\n\n.a-typo__text--bold {\n  font-size: 18px;\n  font-weight: 700;\n  line-height: 1.5;\n  letter-spacing: 0.01em; }\n  @media (min-width: 576px) {\n    .a-typo__text--bold {\n      font-size: 20px;\n      font-weight: 700;\n      line-height: 1.5;\n      letter-spacing: 0.01em; } }\n  @media (min-width: 768px) {\n    .a-typo__text--bold {\n      font-size: 20px;\n      font-weight: 700;\n      line-height: 1.5;\n      letter-spacing: 0.01em; } }\n  @media (min-width: 992px) {\n    .a-typo__text--bold {\n      font-size: 20px;\n      font-weight: 700;\n      line-height: 1.5;\n      letter-spacing: 0.01em; } }\n\n.a-typo__text-longer {\n  font-size: 16px;\n  font-weight: 400;\n  line-height: 1.5;\n  letter-spacing: 0.01em; }\n  @media (min-width: 576px) {\n    .a-typo__text-longer {\n      font-size: 18px;\n      font-weight: 400;\n      line-height: 1.5;\n      letter-spacing: 0.01em; } }\n  @media (min-width: 768px) {\n    .a-typo__text-longer {\n      font-size: 18px;\n      font-weight: 400;\n      line-height: 1.5;\n      letter-spacing: 0.01em; } }\n  @media (min-width: 992px) {\n    .a-typo__text-longer {\n      font-size: 18px;\n      font-weight: 400;\n      line-height: 1.5;\n      letter-spacing: 0.01em; } }\n\n.a-typo__text-longer--bold {\n  font-size: 16px;\n  font-weight: 700;\n  line-height: 1.5;\n  letter-spacing: 0.01em; }\n  @media (min-width: 576px) {\n    .a-typo__text-longer--bold {\n      font-size: 18px;\n      font-weight: 700;\n      line-height: 1.5;\n      letter-spacing: 0.01em; } }\n  @media (min-width: 768px) {\n    .a-typo__text-longer--bold {\n      font-size: 18px;\n      font-weight: 700;\n      line-height: 1.5;\n      letter-spacing: 0.01em; } }\n  @media (min-width: 992px) {\n    .a-typo__text-longer--bold {\n      font-size: 18px;\n      font-weight: 700;\n      line-height: 1.5;\n      letter-spacing: 0.01em; } }\n\n.a-typo__secondary-text {\n  font-size: 14px;\n  font-weight: 400;\n  line-height: 1.5;\n  letter-spacing: 0.02em; }\n  @media (min-width: 576px) {\n    .a-typo__secondary-text {\n      font-size: 16px;\n      font-weight: 400;\n      line-height: 1.5;\n      letter-spacing: 0.02em; } }\n  @media (min-width: 768px) {\n    .a-typo__secondary-text {\n      font-size: 16px;\n      font-weight: 400;\n      line-height: 1.5;\n      letter-spacing: 0.02em; } }\n  @media (min-width: 992px) {\n    .a-typo__secondary-text {\n      font-size: 16px;\n      font-weight: 400;\n      line-height: 1.5;\n      letter-spacing: 0.02em; } }\n\n.a-typo__secondary-text--semibold {\n  font-size: 14px;\n  font-weight: 600;\n  line-height: 1.5;\n  letter-spacing: 0.02em; }\n  @media (min-width: 576px) {\n    .a-typo__secondary-text--semibold {\n      font-size: 16px;\n      font-weight: 600;\n      line-height: 1.5;\n      letter-spacing: 0.02em; } }\n  @media (min-width: 768px) {\n    .a-typo__secondary-text--semibold {\n      font-size: 16px;\n      font-weight: 600;\n      line-height: 1.5;\n      letter-spacing: 0.02em; } }\n  @media (min-width: 992px) {\n    .a-typo__secondary-text--semibold {\n      font-size: 16px;\n      font-weight: 600;\n      line-height: 1.5;\n      letter-spacing: 0.02em; } }\n\n.a-typo__secondary-text--bold {\n  font-size: 14px;\n  font-weight: 700;\n  line-height: 1.5;\n  letter-spacing: 0.02em; }\n  @media (min-width: 576px) {\n    .a-typo__secondary-text--bold {\n      font-size: 16px;\n      font-weight: 700;\n      line-height: 1.5;\n      letter-spacing: 0.02em; } }\n  @media (min-width: 768px) {\n    .a-typo__secondary-text--bold {\n      font-size: 16px;\n      font-weight: 700;\n      line-height: 1.5;\n      letter-spacing: 0.02em; } }\n  @media (min-width: 992px) {\n    .a-typo__secondary-text--bold {\n      font-size: 16px;\n      font-weight: 700;\n      line-height: 1.5;\n      letter-spacing: 0.02em; } }\n\n.a-typo__tag {\n  font-size: 12px;\n  font-weight: 400;\n  line-height: 1.5;\n  letter-spacing: 0.02em; }\n  @media (min-width: 576px) {\n    .a-typo__tag {\n      font-size: 14px;\n      font-weight: 400;\n      line-height: 1.21;\n      letter-spacing: 0.02em; } }\n  @media (min-width: 768px) {\n    .a-typo__tag {\n      font-size: 14px;\n      font-weight: 400;\n      line-height: 1.21;\n      letter-spacing: 0.02em; } }\n  @media (min-width: 992px) {\n    .a-typo__tag {\n      font-size: 14px;\n      font-weight: 400;\n      line-height: 1.21;\n      letter-spacing: 0.02em; } }\n\n.a-typo__tag--semibold {\n  font-size: 12px;\n  font-weight: 600;\n  line-height: 1.5;\n  letter-spacing: 0.02em; }\n  @media (min-width: 576px) {\n    .a-typo__tag--semibold {\n      font-size: 14px;\n      font-weight: 600;\n      line-height: 1.21;\n      letter-spacing: 0.02em; } }\n  @media (min-width: 768px) {\n    .a-typo__tag--semibold {\n      font-size: 14px;\n      font-weight: 600;\n      line-height: 1.21;\n      letter-spacing: 0.02em; } }\n  @media (min-width: 992px) {\n    .a-typo__tag--semibold {\n      font-size: 14px;\n      font-weight: 600;\n      line-height: 1.21;\n      letter-spacing: 0.02em; } }\n\n.a-typo__tag--bold {\n  font-size: 12px;\n  font-weight: 700;\n  line-height: 1.5;\n  letter-spacing: 0.02em; }\n  @media (min-width: 576px) {\n    .a-typo__tag--bold {\n      font-size: 14px;\n      font-weight: 700;\n      line-height: 1.21;\n      letter-spacing: 0.02em; } }\n  @media (min-width: 768px) {\n    .a-typo__tag--bold {\n      font-size: 14px;\n      font-weight: 700;\n      line-height: 1.21;\n      letter-spacing: 0.02em; } }\n  @media (min-width: 992px) {\n    .a-typo__tag--bold {\n      font-size: 14px;\n      font-weight: 700;\n      line-height: 1.21;\n      letter-spacing: 0.02em; } }\n\n.a-typo__legals {\n  font-size: 12px;\n  font-weight: 400;\n  line-height: 1.5;\n  letter-spacing: 0.02em; }\n  @media (min-width: 576px) {\n    .a-typo__legals {\n      font-size: 13px;\n      font-weight: 400;\n      line-height: 1.38;\n      letter-spacing: 0.02em; } }\n  @media (min-width: 768px) {\n    .a-typo__legals {\n      font-size: 13px;\n      font-weight: 400;\n      line-height: 1.38;\n      letter-spacing: 0.02em; } }\n  @media (min-width: 992px) {\n    .a-typo__legals {\n      font-size: 13px;\n      font-weight: 400;\n      line-height: 1.38;\n      letter-spacing: 0.02em; } }\n\n.a-typo__legals--semibold {\n  font-size: 12px;\n  font-weight: 600;\n  line-height: 1.5;\n  letter-spacing: 0.02em; }\n  @media (min-width: 576px) {\n    .a-typo__legals--semibold {\n      font-size: 13px;\n      font-weight: 600;\n      line-height: 1.38;\n      letter-spacing: 0.02em; } }\n  @media (min-width: 768px) {\n    .a-typo__legals--semibold {\n      font-size: 13px;\n      font-weight: 600;\n      line-height: 1.38;\n      letter-spacing: 0.02em; } }\n  @media (min-width: 992px) {\n    .a-typo__legals--semibold {\n      font-size: 13px;\n      font-weight: 600;\n      line-height: 1.38;\n      letter-spacing: 0.02em; } }\n',b=function(e){return function(t,n,i){for(var o in n)o in w&&(n[w[o]]=n[o],delete n[o]);return e(t,n,i)}},w={class:"className",for:"htmlFor","http-equiv":"httpEquiv"},v=1,z=2,T=3,C=4,k=5,S=6,O=7,P=8,E=9,A=10,L=11,N=12,j=13,G=RegExp("^("+["area","base","basefont","bgsound","br","col","command","embed","frame","hr","img","input","isindex","keygen","link","meta","param","source","track","wbr","!--","animate","animateTransform","circle","cursor","desc","ellipse","feBlend","feColorMatrix","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","font-face-format","font-face-name","font-face-uri","glyph","glyphRef","hkern","image","line","missing-glyph","mpath","path","polygon","polyline","rect","set","stop","tref","use","view","vkern"].join("|")+")(?:[.#][a-zA-Z0-9-￿_:-]+)*$"),M=/\n[\s]+$/,H=/^\n[\s]+/,F=/[\s]+$/,R=/^[\s]+/,D=/[\n\s]+/g,B=["a","abbr","b","bdi","bdo","br","cite","data","dfn","em","i","kbd","mark","q","rp","rt","rtc","ruby","s","amp","small","span","strong","sub","sup","time","u","var","wbr"],I=["code","pre"],$=function e(t,n){if(Array.isArray(n))for(var i,o,a=t.nodeName.toLowerCase(),l=!1,r=0,s=n.length;r<s;r++){var p=n[r];if(Array.isArray(p))e(t,p);else{("number"==typeof p||"boolean"==typeof p||"function"==typeof p||p instanceof Date||p instanceof RegExp)&&(p=p.toString());var h=t.childNodes[t.childNodes.length-1];if("string"==typeof p)l=!0,h&&"#text"===h.nodeName?h.nodeValue+=p:(p=document.createTextNode(p),t.appendChild(p),h=p),r===s-1&&(l=!1,-1===B.indexOf(a)&&-1===I.indexOf(a)?""===(i=h.nodeValue.replace(H,"").replace(F,"").replace(M,"").replace(D," "))?t.removeChild(h):h.nodeValue=i:-1===I.indexOf(a)&&(o=0===r?"":" ",i=h.nodeValue.replace(H,o).replace(R," ").replace(F,"").replace(M,"").replace(D," "),h.nodeValue=i));else if(p&&p.nodeType){l&&(l=!1,-1===B.indexOf(a)&&-1===I.indexOf(a)?""===(i=h.nodeValue.replace(H,"").replace(M,"").replace(D," "))?t.removeChild(h):h.nodeValue=i:-1===I.indexOf(a)&&(i=h.nodeValue.replace(R," ").replace(H,"").replace(M,"").replace(D," "),h.nodeValue=i));var c=p.nodeName;c&&(a=c.toLowerCase()),t.appendChild(p)}}}},q=function(e,t){return t={exports:{}},e(t,t.exports),t.exports}(function(e){function t(e,t,a){var s;-1!==r.indexOf(e)&&(t.namespace=n);var p=!1;if(t.namespace&&(p=t.namespace,delete t.namespace),p)s=document.createElementNS(p,e);else{if(e===l)return document.createComment(t.comment);s=document.createElement(e)}for(var h in t)if(t.hasOwnProperty(h)){var c=h.toLowerCase(),f=t[h];if("classname"===c&&(c="class",h="class"),"htmlFor"===h&&(h="for"),-1!==o.indexOf(c))if("true"===f)f=c;else if("false"===f)continue;"on"===c.slice(0,2)?s[h]=f:p?"xlink:href"===h?s.setAttributeNS(i,h,f):/^xmlns($|:)/i.test(h)||s.setAttributeNS(null,h,f):s.setAttribute(h,f)}return $(s,a),s}var n="http://www.w3.org/2000/svg",i="http://www.w3.org/1999/xlink",o=["autofocus","checked","defaultchecked","disabled","formnovalidate","indeterminate","readonly","required","selected","willvalidate"],l="!--",r=["svg","altGlyph","altGlyphDef","altGlyphItem","animate","animateColor","animateMotion","animateTransform","circle","clipPath","color-profile","cursor","defs","desc","ellipse","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","filter","font","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","foreignObject","g","glyph","glyphRef","hkern","image","line","linearGradient","marker","mask","metadata","missing-glyph","mpath","path","pattern","polygon","polyline","radialGradient","rect","set","stop","switch","symbol","text","textPath","title","tref","tspan","use","view","vkern"];e.exports=function(e,t){function n(e){return"function"==typeof e?e:"string"==typeof e?e:e&&"object"===(void 0===e?"undefined":a(e))?e:i("",e)}t||(t={});var i=t.concat||function(e,t){return String(e)+String(t)};return!1!==t.attrToProp&&(e=b(e)),function(o){function l(e){var n=[];r===O&&(r=C);for(var i=0;i<e.length;i++){var o=e.charAt(i);r===v&&"<"===o?(s.length&&n.push([v,s]),s="",r=z):">"!==o||function(e){return e===E||e===A}(r)||r===j?r===j&&/-$/.test(s)&&"-"===o?(t.comments&&n.push([P,s.substr(0,s.length-1)],[T]),s="",r=v):r===z&&/^!--$/.test(s)?(t.comments&&n.push([z,s],[k,"comment"],[L]),s=o,r=j):r===v||r===j?s+=o:r===z&&/\s/.test(o)?(n.push([z,s]),s="",r=C):r===z?s+=o:r===C&&/[^\s"'=/]/.test(o)?(r=k,s=o):r===C&&/\s/.test(o)?(s.length&&n.push([k,s]),n.push([N])):r===k&&/\s/.test(o)?(n.push([k,s]),s="",r=S):r===k&&"="===o?(n.push([k,s],[L]),s="",r=O):r===k?s+=o:r!==S&&r!==C||"="!==o?r!==S&&r!==C||/\s/.test(o)?r===O&&'"'===o?r=A:r===O&&"'"===o?r=E:r===A&&'"'===o?(n.push([P,s],[N]),s="",r=C):r===E&&"'"===o?(n.push([P,s],[N]),s="",r=C):r!==O||/\s/.test(o)?r===P&&/\s/.test(o)?(n.push([P,s],[N]),s="",r=C):r!==P&&r!==E&&r!==A||(s+=o):(r=P,i--):(n.push([N]),/[\w-]/.test(o)?(s+=o,r=k):r=C):(n.push([L]),r=O):(r===z?n.push([z,s]):r===k?n.push([k,s]):r===P&&s.length&&n.push([P,s]),n.push([T]),s="",r=v)}return r===v&&s.length?(n.push([v,s]),s=""):r===P&&s.length?(n.push([P,s]),s=""):r===A&&s.length?(n.push([P,s]),s=""):r===E&&s.length?(n.push([P,s]),s=""):r===k&&(n.push([k,s]),s=""),n}for(var r=v,s="",p=arguments.length,h=[],c=0;c<o.length;c++)if(c<p-1){var f=arguments[c+1],d=l(o[c]),g=r;g===A&&(g=P),g===E&&(g=P),g===O&&(g=P),g===C&&(g=k),d.push([0,g,f]),h.push.apply(h,d)}else h.push.apply(h,l(o[c]));for(var m=[null,{},[]],u=[[m,-1]],c=0;c<h.length;c++){var y=u[u.length-1][0],x=(d=h[c])[0];if(x===z&&/^\//.test(d[1]))H=u[u.length-1][1],u.length>1&&(u.pop(),u[u.length-1][0][2][H]=e(y[0],y[1],y[2].length?y[2]:void 0));else if(x===z){var _=[d[1],{},[]];y[2].push(_),u.push([_,y[2].length-1])}else if(x===k||0===x&&d[1]===k){for(var b,w="";c<h.length;c++)if(h[c][0]===k)w=i(w,h[c][1]);else{if(0!==h[c][0]||h[c][1]!==k)break;if("object"!==a(h[c][2])||w)w=i(w,h[c][2]);else for(b in h[c][2])h[c][2].hasOwnProperty(b)&&!y[1][b]&&(y[1][b]=h[c][2][b])}h[c][0]===L&&c++;for(var M=c;c<h.length;c++)if(h[c][0]===P||h[c][0]===k)y[1][w]?""===h[c][1]||(y[1][w]=i(y[1][w],h[c][1])):y[1][w]=n(h[c][1]);else{if(0!==h[c][0]||h[c][1]!==P&&h[c][1]!==k){!w.length||y[1][w]||c!==M||h[c][0]!==T&&h[c][0]!==N||(y[1][w]=w.toLowerCase()),h[c][0]===T&&c--;break}y[1][w]?""===h[c][2]||(y[1][w]=i(y[1][w],h[c][2])):y[1][w]=n(h[c][2])}}else if(x===k)y[1][d[1]]=!0;else if(0===x&&d[1]===k)y[1][d[2]]=!0;else if(x===T){if(function(e){return G.test(e)}(y[0])&&u.length){var H=u[u.length-1][1];u.pop(),u[u.length-1][0][2][H]=e(y[0],y[1],y[2].length?y[2]:void 0)}}else if(0===x&&d[1]===v)void 0===d[2]||null===d[2]?d[2]="":d[2]||(d[2]=i("",d[2])),Array.isArray(d[2][0])?y[2].push.apply(y[2],d[2]):y[2].push(d[2]);else if(x===v)y[2].push(d[1]);else if(x!==L&&x!==N)throw new Error("unhandled: "+x)}if(m[2].length>1&&/^\s*$/.test(m[2][0])&&m[2].shift(),m[2].length>2||2===m[2].length&&/\S/.test(m[2][1]))throw new Error("multiple root elements must be wrapped in an enclosing tag");return Array.isArray(m[2][0])&&"string"==typeof m[2][0][0]&&Array.isArray(m[2][0][2])&&(m[2][0]=e(m[2][0][0],m[2][0][1],m[2][0][2])),m[2][0]}}(t,{comments:!0}),e.exports.default=e.exports,e.exports.createElement=t}),V=function(e,t){return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}(['\n  <article>\n    <h1 class="a-typo__main-title--publico">Main Title</h1>\n    <h2 class="a-typo__page-title--publico">Page Title</h2>\n    <h3 class="a-typo__slice-title--publico">Slice Title</h3>\n    <h4 class="a-typo__small-module-title--publico">Small Module Title</h4>\n    \n    <h1 class="a-typo__main-title">Main Title</h1>\n    <h2 class="a-typo__page-title">Page Title</h2>\n    <h3 class="a-typo__slice-title">Slice Title</h3>\n    <h4 class="a-typo__small-module-title">Small Module Title</h4>\n    <h5 class="a-typo__title">Title</h5>\n    <h5 class="a-typo__title--semibold">Title (Semibold)</h5>\n\n    <p>\n      <span class="a-typo__item-highlight">Item Highlight</span>\n    </p>\n\n    <p class="a-typo__text">Text</p>\n    <p class="a-typo__text--semibold">Text (Semibold)</p>\n    <p class="a-typo__text--bold">Text (Bold)</p>\n    <p class="a-typo__text-longer">Text Longer</p>\n    <p class="a-typo__text-longer--bold">Text Longer (Bold)</p>\n    <p class="a-typo__secondary-text">Secondary Text</p>\n    <p class="a-typo__secondary-text--semibold">Secondary Text (Semibold)</p>\n    <p class="a-typo__secondary-text--bold">Secondary Text (Bold)</p>\n\n    <p>\n      <span class="a-typo__tag">Tag</span>\n      <br>\n      <span class="a-typo__tag--semibold">Tag (Semibold)</span>\n      <br>\n      <span class="a-typo__tag--bold">Tag (Bold)</span>\n    </p>\n    \n    <p>\n      <span class="a-typo__legals">Legals</span>\n      <br>\n      <span class="a-typo__legals--semibold">Legals (Semibold)</span>\n    </p>\n  </article>\n'],['\n  <article>\n    <h1 class="a-typo__main-title--publico">Main Title</h1>\n    <h2 class="a-typo__page-title--publico">Page Title</h2>\n    <h3 class="a-typo__slice-title--publico">Slice Title</h3>\n    <h4 class="a-typo__small-module-title--publico">Small Module Title</h4>\n    \n    <h1 class="a-typo__main-title">Main Title</h1>\n    <h2 class="a-typo__page-title">Page Title</h2>\n    <h3 class="a-typo__slice-title">Slice Title</h3>\n    <h4 class="a-typo__small-module-title">Small Module Title</h4>\n    <h5 class="a-typo__title">Title</h5>\n    <h5 class="a-typo__title--semibold">Title (Semibold)</h5>\n\n    <p>\n      <span class="a-typo__item-highlight">Item Highlight</span>\n    </p>\n\n    <p class="a-typo__text">Text</p>\n    <p class="a-typo__text--semibold">Text (Semibold)</p>\n    <p class="a-typo__text--bold">Text (Bold)</p>\n    <p class="a-typo__text-longer">Text Longer</p>\n    <p class="a-typo__text-longer--bold">Text Longer (Bold)</p>\n    <p class="a-typo__secondary-text">Secondary Text</p>\n    <p class="a-typo__secondary-text--semibold">Secondary Text (Semibold)</p>\n    <p class="a-typo__secondary-text--bold">Secondary Text (Bold)</p>\n\n    <p>\n      <span class="a-typo__tag">Tag</span>\n      <br>\n      <span class="a-typo__tag--semibold">Tag (Semibold)</span>\n      <br>\n      <span class="a-typo__tag--bold">Tag (Bold)</span>\n    </p>\n    \n    <p>\n      <span class="a-typo__legals">Legals</span>\n      <br>\n      <span class="a-typo__legals--semibold">Legals (Semibold)</span>\n    </p>\n  </article>\n']),W=function(){return q(V)},J=function(e){function t(){return l(this,t),h(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,_,W))}return p(t,x),r(t,[{key:"connectedCallback",value:function(){(function e(t,n,i){null===t&&(t=Function.prototype);var o=Object.getOwnPropertyDescriptor(t,n);if(void 0===o){var a=Object.getPrototypeOf(t);return null===a?void 0:e(a,n,i)}if("value"in o)return o.value;var l=o.get;if(void 0!==l)return l.call(i)})(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"connectedCallback",this).call(this),this.className=this.initialClassName+" a-typo"}}]),t}();return function(e){var t=0,n=function(){if(0===t)try{e.apply(void 0,arguments),t+=1,document.removeEventListener("DOMContentLoaded"),document.removeEventListener("WebComponentsReady")}catch(e){}};document.addEventListener("DOMContentLoaded",n,!1),document.addEventListener("WebComponentsReady",n,!1)}(function(){window.customElements.define("axa-typo",J)}),J}();
