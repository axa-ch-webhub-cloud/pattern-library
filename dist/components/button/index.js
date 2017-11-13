!function(){"use strict";function t(){return Reflect.construct(HTMLElement,[],this.__proto__.constructor)}var n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},o=(function(){function t(t){this.value=t}function n(n){function o(r,a){try{var i=n[r](a),u=i.value;u instanceof t?Promise.resolve(u.value).then(function(t){o("next",t)},function(t){o("throw",t)}):e(i.done?"return":"normal",i.value)}catch(t){e("throw",t)}}function e(t,n){switch(t){case"return":r.resolve({value:n,done:!0});break;case"throw":r.reject(n);break;default:r.resolve({value:n,done:!1})}(r=r.next)?o(r.key,r.arg):a=null}var r,a;this._invoke=function(t,n){return new Promise(function(e,i){var u={key:t,arg:n,resolve:e,reject:i,next:null};a?a=a.next=u:(r=a=u,o(t,n))})},"function"!=typeof n.return&&(this.return=void 0)}"function"==typeof Symbol&&Symbol.asyncIterator&&(n.prototype[Symbol.asyncIterator]=function(){return this}),n.prototype.next=function(t){return this._invoke("next",t)},n.prototype.throw=function(t){return this._invoke("throw",t)},n.prototype.return=function(t){return this._invoke("return",t)}}(),function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}),e=function(){function t(t,n){for(var o=0;o<n.length;o++){var e=n[o];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(t,e.key,e)}}return function(n,o,e){return o&&t(n.prototype,o),e&&t(n,e),n}}(),r=function(t,n,o){return n in t?Object.defineProperty(t,n,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[n]=o,t},a=function(t,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function, not "+typeof n);t.prototype=Object.create(n&&n.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(t,n):t.__proto__=n)},i=function(t,n){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!n||"object"!=typeof n&&"function"!=typeof n?t:n},u=function(t,n){return n={exports:{}},t(n,n.exports),n.exports}(function(t){!function(){function o(){for(var t=[],r=0;r<arguments.length;r++){var a=arguments[r];if(a){var i=void 0===a?"undefined":n(a);if("string"===i||"number"===i)t.push(a);else if(Array.isArray(a))t.push(o.apply(null,a));else if("object"===i)for(var u in a)e.call(a,u)&&a[u]&&t.push(u)}}return t.join(" ")}var e={}.hasOwnProperty;t.exports?t.exports=o:window.classNames=o}()}),c="@keyframes fadeOutRightInLeft {\n  0% {\n    opacity: 1; }\n  50% {\n    opacity: 0;\n    transform: translate3d(100%, 0, 0); }\n  51% {\n    opacity: 0;\n    transform: translate3d(-100%, 0, 0); }\n  100% {\n    opacity: 1;\n    transform: none; } }\n\n.a-button {\n  font-size: 12px;\n  font-weight: 400;\n  line-height: 1.5;\n  letter-spacing: 0.02em;\n  position: relative;\n  padding: 10px 30px;\n  border-width: 2px;\n  border-style: solid;\n  text-decoration: none;\n  text-transform: uppercase;\n  vertical-align: middle;\n  color: #fff;\n  background: #00008f;\n  border-color: #00008f;\n  border-bottom-color: #00005b; }\n  @media (min-width: 767px) {\n    .a-button {\n      font-size: 14px;\n      font-weight: 400;\n      line-height: 1.21;\n      letter-spacing: 0.02em; } }\n  @media (min-width: 991px) {\n    .a-button {\n      font-size: 14px;\n      font-weight: 400;\n      line-height: 1.21;\n      letter-spacing: 0.02em; } }\n  @media (min-width: 1199px) {\n    .a-button {\n      font-size: 14px;\n      font-weight: 400;\n      line-height: 1.21;\n      letter-spacing: 0.02em; } }\n  a.a-button {\n    display: inline-block; }\n  .a-button:hover, .a-button:active, .a-button:focus {\n    cursor: pointer;\n    text-decoration: none;\n    outline: none; }\n  .a-button:disabled, .a-button[disabled] {\n    cursor: default !important; }\n  .a-button:hover, .a-button:active, .a-button:focus {\n    background: #00005b;\n    border-color: #00005b;\n    color: #fff; }\n  .a-button:disabled, .a-button[disabled] {\n    background: #999 !important;\n    border-color: #999 !important; }\n\n.a-button__icon {\n  width: 16px;\n  height: 16px;\n  padding: 10px;\n  border-left: 1px solid rgba(255, 255, 255, 0.2); }\n\n.a-button__arrow {\n  display: block;\n  position: absolute;\n  top: 50%;\n  margin-top: -6.5px;\n  fill: currentColor;\n  width: 13px;\n  height: 13px;\n  right: 30px; }\n\n.a-button--red {\n  color: #fff;\n  background: #f07662;\n  border-color: #f07662;\n  border-bottom-color: #ec4d33; }\n  .a-button--red:hover, .a-button--red:active, .a-button--red:focus {\n    background: #ec4d33;\n    border-color: #ec4d33;\n    color: #fff; }\n  .a-button--red:disabled, .a-button--red[disabled] {\n    background: #999 !important;\n    border-color: #999 !important; }\n\n.a-button--white {\n  color: #fff;\n  background: #fff;\n  border-color: #fff;\n  border-bottom-color: #00005b; }\n  .a-button--white:hover, .a-button--white:active, .a-button--white:focus {\n    background: #00005b;\n    border-color: #00005b;\n    color: #fff; }\n  .a-button--white:disabled, .a-button--white[disabled] {\n    background: #999 !important;\n    border-color: #999 !important; }\n\n.a-button--ghost {\n  color: #00008f;\n  background: transparent;\n  border-color: #00008f; }\n  .a-button--ghost:hover, .a-button--ghost:active, .a-button--ghost:focus {\n    color: #00005b;\n    background: transparent;\n    border-color: #00005b; }\n  .a-button--ghost.a-button--red {\n    color: #f07662;\n    background: transparent;\n    border-color: #f07662; }\n    .a-button--ghost.a-button--red:hover, .a-button--ghost.a-button--red:active, .a-button--ghost.a-button--red:focus {\n      color: #ec4d33;\n      background: transparent;\n      border-color: #ec4d33; }\n  .a-button--ghost.a-button--white {\n    color: #fff;\n    background: transparent;\n    border-color: #fff; }\n    .a-button--ghost.a-button--white:hover, .a-button--ghost.a-button--white:active, .a-button--ghost.a-button--white:focus {\n      color: #3b3fd8;\n      background: #fff;\n      border-color: #fff; }\n\n.a-button--motion {\n  overflow: hidden;\n  z-index: 0; }\n  .a-button--motion::after {\n    display: block;\n    content: '';\n    position: absolute;\n    left: 50%;\n    top: 50%;\n    width: 0;\n    height: 550px;\n    transform: translateX(-50%) translateY(-50%) rotate(45deg);\n    transition: all 0.3s cubic-bezier(0.455, 0.03, 0.515, 0.955) 0s;\n    z-index: -1; }\n  .a-button--motion:hover::after, .a-button--motion:focus::after {\n    width: 110%; }\n  .a-button--motion::after {\n    background: #00008f; }\n  .a-button--motion:hover, .a-button--motion:focus {\n    background: #00008f;\n    color: #fff; }\n    .a-button--motion:hover::after, .a-button--motion:focus::after {\n      background: #00005b; }\n  .a-button--motion.a-button--red::after {\n    background: #f07662; }\n  .a-button--motion.a-button--red:hover, .a-button--motion.a-button--red:focus {\n    background: #f07662;\n    color: #fff; }\n    .a-button--motion.a-button--red:hover::after, .a-button--motion.a-button--red:focus::after {\n      background: #ec4d33; }\n  .a-button--motion.a-button--white::after {\n    background: transparent; }\n  .a-button--motion.a-button--white:hover, .a-button--motion.a-button--white:focus {\n    background: transparent;\n    color: #3b3fd8; }\n    .a-button--motion.a-button--white:hover::after, .a-button--motion.a-button--white:focus::after {\n      background: #fff; }\n  .a-button--motion.a-button--ghost {\n    background: transparent !important; }\n  .a-button--motion:hover .a-button__arrow, .a-button--motion:active .a-button__arrow, .a-button--motion:focus .a-button__arrow {\n    animation-duration: 0.6s;\n    animation-timing-function: ease;\n    animation-fill-mode: both;\n    animation-name: fadeOutRightInLeft; }\n\n.a-button--arrow {\n  padding-right: 55px; }\n\n.a-button--x-pad-20 {\n  padding-left: 20px;\n  padding-right: 20px; }\n  .a-button--x-pad-20.a-button--arrow {\n    padding-right: 45px; }\n  .a-button--x-pad-20 .a-button__arrow {\n    right: 20px; }\n\n.a-button--x-pad-40 {\n  padding-left: 40px;\n  padding-right: 40px; }\n  .a-button--x-pad-40.a-button--arrow {\n    padding-right: 65px; }\n  .a-button--x-pad-40 .a-button__arrow {\n    right: 40px; }\n\n.a-button--sm {\n  font-size: 12px;\n  font-weight: 400;\n  line-height: 1.5;\n  letter-spacing: 0.02em;\n  padding-top: 5.5px;\n  padding-bottom: 5.5px;\n  border-width: 1px; }\n  @media (min-width: 767px) {\n    .a-button--sm {\n      font-size: 13px;\n      font-weight: 400;\n      line-height: 1.38;\n      letter-spacing: 0.02em; } }\n  @media (min-width: 991px) {\n    .a-button--sm {\n      font-size: 13px;\n      font-weight: 400;\n      line-height: 1.38;\n      letter-spacing: 0.02em; } }\n  @media (min-width: 1199px) {\n    .a-button--sm {\n      font-size: 13px;\n      font-weight: 400;\n      line-height: 1.38;\n      letter-spacing: 0.02em; } }\n\n.a-button--lg {\n  font-size: 12px;\n  font-weight: 400;\n  line-height: 1.5;\n  letter-spacing: 0.02em;\n  padding-top: 11px;\n  padding-bottom: 11px; }\n  @media (min-width: 767px) {\n    .a-button--lg {\n      font-size: 16px;\n      font-weight: 400;\n      line-height: 1.5;\n      letter-spacing: 0.02em; } }\n  @media (min-width: 991px) {\n    .a-button--lg {\n      font-size: 16px;\n      font-weight: 400;\n      line-height: 1.5;\n      letter-spacing: 0.02em; } }\n  @media (min-width: 1199px) {\n    .a-button--lg {\n      font-size: 16px;\n      font-weight: 400;\n      line-height: 1.5;\n      letter-spacing: 0.02em; } }\n";Object.setPrototypeOf(t.prototype,HTMLElement.prototype),Object.setPrototypeOf(t,HTMLElement);var s=document._currentScript||document.currentScript,b={},l=function(n){function r(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";o(this,r);var n=i(this,(r.__proto__||Object.getPrototypeOf(r)).call(this));n._styles=t;var e=void 0;return e=window.HTMLImports?HTMLImports.importForElement(s):s.ownerDocument,n.template=e.querySelector("template"),(!n.template||window.HTMLImports&&e!==HTMLImports.importForElement(n.template))&&(n.template=null),n.template&&(n.clone=document.importNode(n.template.content,!0)),n}return a(r,t),e(r,[{key:"connectedCallback",value:function(){this._appendStyles(),this.template&&this.clone&&this.appendChild(this.clone),this._render()}},{key:"_appendStyles",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this;if(this._styles){var n=document.createElement("style"),o=document.createTextNode(this._styles);n.appendChild(o),t.insertAdjacentElement?t.insertAdjacentElement("afterbegin",n):t.appendChild(n)}}},{key:"_render",value:function(){return null}}]),r}(),d=(function(t){function n(){return o(this,n),i(this,(n.__proto__||Object.getPrototypeOf(n)).apply(this,arguments))}a(n,l),e(n,[{key:"connectedCallback",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"open",n=this.attachShadow({mode:t});this._appendStyles(n),this.template&&this.clone&&n.appendChild(this.clone),this._render()}}])}(),function(t){function n(){return o(this,n),i(this,(n.__proto__||Object.getPrototypeOf(n)).apply(this,arguments))}return a(n,l),e(n,[{key:"_appendStyles",value:function(){if(this._styles&&!b[this._styles]){var t=document.createElement("style"),n=document.createTextNode(this._styles);t.appendChild(n),t.setAttribute("data-c-name",this.nodeName.toLowerCase()),document.querySelector("head").appendChild(t),b[this._styles]=!0}}}]),n}()),f=function(t){function n(){return o(this,n),i(this,(n.__proto__||Object.getPrototypeOf(n)).call(this,c))}return a(n,d),e(n,[{key:"_render",value:function(){var t,n=this.innerHTML,o=this.getAttribute("tag")||"button",e=this.getAttribute("color"),a=this.getAttribute("size"),i=this.hasAttribute("ghost"),c=this.hasAttribute("motion"),s=this.hasAttribute("arrow")||"",b=u("a-button",(t={},r(t,"a-button--"+e,e),r(t,"a-button--"+a,a),r(t,"a-button--ghost",i),r(t,"a-button--motion",c),r(t,"a-button--arrow",s),t));s&&(s='<svg xmlns="http://www.w3.org/2000/svg" class="a-button__arrow" viewBox="0 0 32 32">\n  <path d="M30.533 16.8c.333-.533.267-1.267-.2-1.667l-11.4-11.4c-1.2-1.2-3.133.667-1.867 1.867l9.133 9.133H2.666c-1.733 0-1.733 2.667 0 2.667h23.533l-9.133 9.133c-1.2 1.2.667 3.133 1.867 1.867l11.4-11.4.2-.2z"></path>\n</svg>'),"button"===o?this.innerHTML='<button type="button" class="'+b+'">\n        '+n+"\n        "+s+"\n      </button>":"a"===o&&(this.innerHTML='<a href="#" class="'+b+'">\n        '+n+"\n        "+s+"\n      </a>")}}]),n}();window.customElements.define("axa-button",f)}();
