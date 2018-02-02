!function(e,n){"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):e.StyleGuideWebComponent=n()}(this,function(){"use strict";function e(e,n){return e(n={exports:{}},n.exports),n.exports}var n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},t=function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")},o=function(){function e(e,n){for(var t=0;t<n.length;t++){var o=n[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(n,t,o){return t&&e(n.prototype,t),o&&e(n,o),n}}(),r=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},i=function e(n,t,o){null===n&&(n=Function.prototype);var r=Object.getOwnPropertyDescriptor(n,t);if(void 0===r){var i=Object.getPrototypeOf(n);return null===i?void 0:e(i,t,o)}if("value"in r)return r.value;var a=r.get;return void 0!==a?a.call(o):void 0},a=function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function, not "+typeof n);e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(e,n):e.__proto__=n)},s=function(e,n){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!n||"object"!=typeof n&&"function"!=typeof n?e:n},l=function(){return function(e,n){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,n){var t=[],o=!0,r=!1,i=void 0;try{for(var a,s=e[Symbol.iterator]();!(o=(a=s.next()).done)&&(t.push(a.value),!n||t.length!==n);o=!0);}catch(e){r=!0,i=e}finally{try{!o&&s.return&&s.return()}finally{if(r)throw i}}return t}(e,n);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),c=function(e,n){return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))},d=function(e){if(Array.isArray(e)){for(var n=0,t=Array(e.length);n<e.length;n++)t[n]=e[n];return t}return Array.from(e)},u=e(function(e){!function(){var t={}.hasOwnProperty;function o(){for(var e=[],r=0;r<arguments.length;r++){var i=arguments[r];if(i){var a=void 0===i?"undefined":n(i);if("string"===a||"number"===a)e.push(i);else if(Array.isArray(i))e.push(o.apply(null,i));else if("object"===a)for(var s in i)t.call(i,s)&&i[s]&&e.push(s)}}return e.join(" ")}e.exports?e.exports=o:window.classNames=o}()}),p=".m-dropdown {\n  position: relative;\n  display: inline-block; }\n\n.m-dropdown__select-wrap {\n  padding: 10.5px 55px 10.5px 20px;\n  background: #fff;\n  border: 1px solid #ccc;\n  color: #333;\n  position: relative;\n  display: block;\n  width: 100%;\n  /* undo padding frame padding */\n  padding: 0 !important;\n  overflow: hidden;\n  cursor: pointer; }\n  .m-dropdown__select-wrap:hover, .m-dropdown__select-wrap:active, .m-dropdown__select-wrap:focus {\n    outline: none;\n    border-color: #00008f; }\n    .m-dropdown__select-wrap:hover .m-dropdown__icon, .m-dropdown__select-wrap:active .m-dropdown__icon, .m-dropdown__select-wrap:focus .m-dropdown__icon {\n      color: #00008f; }\n\n.m-dropdown__select {\n  display: block;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  /* important: fake it to have 0 width */\n  float: left;\n  /* overflow is indented to fix browser who don't support hiding the native arrow */\n  width: 120%;\n  height: 50px;\n  padding: 0;\n  margin-right: -120%;\n  line-height: 50px;\n  /* not ideal, firefox is buggy here - see fix at the bottom */\n  text-indent: 20px;\n  /* not ideal, firefox is buggy here - see fix at the bottom */\n  vertical-align: middle;\n  cursor: pointer;\n  /* don't use background nor border - the parent deals with that */\n  background: transparent;\n  border: none;\n  color: inherit;\n  /* disable native appearance like arrow */\n  -webkit-appearance: none;\n  -moz-appearance: none;\n       appearance: none;\n  /* disable outline styles */\n  /* fix firefox focus stuff */\n  /* stylelint-disable plugin/selector-bem-pattern */\n  /* stylelint-enable */\n  /* fix ugly blue screen at focused option value in IE */\n  /* fix native select arrows on IE */ }\n  .m-dropdown__select:active, .m-dropdown__select:focus {\n    border: none;\n    -webkit-box-shadow: none !important;\n            box-shadow: none !important;\n    outline: none !important; }\n  .m-dropdown__select:focus {\n    color: #333; }\n    .m-dropdown__select:focus + .m-dropdown__icon {\n      color: #00008f; }\n  .m-dropdown__select::-moz-focus-inner,\n  .m-dropdown__select option::-moz-focus-inner {\n    border: none;\n    box-shadow: none !important;\n    outline: none !important; }\n  .m-dropdown__select:focus::-ms-value {\n    color: inherit;\n    background: transparent; }\n  .m-dropdown__select::-ms-expand {\n    display: none; }\n  @media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {\n    .m-dropdown__select {\n      /* IE10+ CSS styles go here */\n      /* fix IE not adhering to `text-indent` rules at <select> tags */\n      padding-left: 20px; } }\n\n@-moz-document url-prefix() {\n  .m-dropdown__select {\n    /* ugly fix of firefox related issues */\n    /* Fix Firefox doubles text-indent value */\n    text-indent: 10px;\n    /* fix firefox dotted border on focused selects */ }\n    .m-dropdown__select:focus {\n      color: transparent;\n      text-shadow: 0 0 0 #00008f; } }\n\n.m-dropdown__select-icon {\n  display: block;\n  float: right;\n  height: 50px;\n  padding: 0 20px;\n  margin-left: -100%;\n  pointer-events: none;\n  background: #fff;\n  /* fix missing height of wrapping root node of <axa-icon> */ }\n  .m-dropdown__select-icon > * {\n    display: block;\n    height: 100%; }\n  .m-dropdown__select-icon .m-dropdown__icon {\n    position: relative;\n    right: auto; }\n\n.m-dropdown__toggle {\n  background: transparent;\n  border: none;\n  font-size: 16px;\n  font-weight: 400;\n  line-height: 1.5;\n  letter-spacing: 0.01em;\n  cursor: pointer;\n  position: relative;\n  padding: 10.5px 55px 10.5px 20px;\n  background: #fff;\n  border: 1px solid #ccc;\n  color: #333; }\n  .m-dropdown__toggle:hover, .m-dropdown__toggle:active, .m-dropdown__toggle:focus {\n    outline: none;\n    cursor: pointer; }\n  @media (min-width: 576px) {\n    .m-dropdown__toggle {\n      font-size: 18px; } }\n  .m-dropdown__toggle:hover, .m-dropdown__toggle:active, .m-dropdown__toggle:focus {\n    cursor: pointer; }\n  .m-dropdown__toggle:hover, .m-dropdown__toggle:active, .m-dropdown__toggle:focus {\n    outline: none;\n    border-color: #00008f; }\n    .m-dropdown__toggle:hover .m-dropdown__icon, .m-dropdown__toggle:active .m-dropdown__icon, .m-dropdown__toggle:focus .m-dropdown__icon {\n      color: #00008f; }\n  .m-dropdown__toggle:hover::after, .m-dropdown__toggle:active::after, .m-dropdown__toggle:focus::after {\n    display: block; }\n  .m-dropdown__toggle::after {\n    position: absolute;\n    bottom: -1px;\n    left: 0;\n    z-index: 1001;\n    display: none;\n    width: 100%;\n    height: 1px;\n    overflow: hidden;\n    content: '';\n    background: #00008f; }\n\n.m-dropdown__icon {\n  width: 15px;\n  height: 15px;\n  display: block;\n  fill: currentColor;\n  position: absolute;\n  top: 50%;\n  right: 20px;\n  margin-top: -7.5px;\n  color: #999;\n  -webkit-transition: -webkit-transform 0.3s ease;\n  transition: -webkit-transform 0.3s ease;\n  transition: transform 0.3s ease;\n  transition: transform 0.3s ease, -webkit-transform 0.3s ease; }\n  .is-dropdown-open .m-dropdown__icon {\n    -webkit-transform: rotate(180deg);\n            transform: rotate(180deg); }\n\n.m-dropdown__content {\n  padding: 0;\n  margin: 0;\n  list-style-type: none;\n  position: absolute;\n  top: 100%;\n  z-index: 1000;\n  height: 0;\n  min-width: 100%;\n  overflow: hidden;\n  -webkit-transition: height 0.3s ease;\n  transition: height 0.3s ease;\n  margin-top: -1px;\n  background: #fff; }\n  .is-dropdown-open > .m-dropdown__content {\n    height: auto; }\n  .m-dropdown--in-flow > .m-dropdown__content {\n    position: static; }\n\n.m-dropdown__item {\n  border-left: 1px solid #ccc;\n  border-right: 1px solid #ccc; }\n  .m-dropdown__item:first-child {\n    border-top: 1px solid #ccc; }\n  .m-dropdown__item:last-child {\n    border-bottom: 3px solid #ccc; }\n\n.m-dropdown__link {\n  font-size: 16px;\n  font-weight: 400;\n  line-height: 1.5;\n  letter-spacing: 0.01em;\n  display: block;\n  padding: 10.5px 20px;\n  color: #333;\n  white-space: nowrap; }\n  @media (min-width: 576px) {\n    .m-dropdown__link {\n      font-size: 18px; } }\n  .m-dropdown__link:hover, .m-dropdown__link:active, .m-dropdown__link:focus {\n    color: #00008f;\n    text-decoration: none;\n    background: #f5f5f5; }\n",f=function(e){return function(n,t,o){for(var r in t)r in h&&(t[h[r]]=t[r],delete t[r]);return e(n,t,o)}},h={class:"className",for:"htmlFor","http-equiv":"httpEquiv"};var m=1,v=2,_=3,g=4,y=5,w=6,b=7,x=8,k=9,C=10,E=11,O=12,T=13;var A=RegExp("^("+["area","base","basefont","bgsound","br","col","command","embed","frame","hr","img","input","isindex","keygen","link","meta","param","source","track","wbr","!--","animate","animateTransform","circle","cursor","desc","ellipse","feBlend","feColorMatrix","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","font-face-format","font-face-name","font-face-uri","glyph","glyphRef","hkern","image","line","missing-glyph","mpath","path","polygon","polyline","rect","set","stop","tref","use","view","vkern"].join("|")+")(?:[.#][a-zA-Z0-9-￿_:-]+)*$");var N=/\n[\s]+$/,j=/^\n[\s]+/,S=/[\s]+$/,L=/^[\s]+/,P=/[\n\s]+/g,D=["a","abbr","b","bdi","bdo","br","cite","data","dfn","em","i","kbd","mark","q","rp","rt","rtc","ruby","s","amp","small","span","strong","sub","sup","time","u","var","wbr"],F=["code","pre"],I=function e(n,t){if(Array.isArray(t))for(var o,r,i=n.nodeName.toLowerCase(),a=!1,s=0,l=t.length;s<l;s++){var c=t[s];if(Array.isArray(c))e(n,c);else{("number"==typeof c||"boolean"==typeof c||"function"==typeof c||c instanceof Date||c instanceof RegExp)&&(c=c.toString());var d=n.childNodes[n.childNodes.length-1];if("string"==typeof c)a=!0,d&&"#text"===d.nodeName?d.nodeValue+=c:(c=document.createTextNode(c),n.appendChild(c),d=c),s===l-1&&(a=!1,-1===D.indexOf(i)&&-1===F.indexOf(i)?""===(o=d.nodeValue.replace(j,"").replace(S,"").replace(N,"").replace(P," "))?n.removeChild(d):d.nodeValue=o:-1===F.indexOf(i)&&(r=0===s?"":" ",o=d.nodeValue.replace(j,r).replace(L," ").replace(S,"").replace(N,"").replace(P," "),d.nodeValue=o));else if(c&&c.nodeType){a&&(a=!1,-1===D.indexOf(i)&&-1===F.indexOf(i)?""===(o=d.nodeValue.replace(j,"").replace(N,"").replace(P," "))?n.removeChild(d):d.nodeValue=o:-1===F.indexOf(i)&&(o=d.nodeValue.replace(L," ").replace(j,"").replace(N,"").replace(P," "),d.nodeValue=o));var u=c.nodeName;u&&(i=u.toLowerCase()),n.appendChild(c)}}}},M=e(function(e){var t="http://www.w3.org/2000/svg",o="http://www.w3.org/1999/xlink",r=["autofocus","checked","defaultchecked","disabled","formnovalidate","indeterminate","readonly","required","selected","willvalidate"],i="!--",a=["svg","altGlyph","altGlyphDef","altGlyphItem","animate","animateColor","animateMotion","animateTransform","circle","clipPath","color-profile","cursor","defs","desc","ellipse","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","filter","font","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","foreignObject","g","glyph","glyphRef","hkern","image","line","linearGradient","marker","mask","metadata","missing-glyph","mpath","path","pattern","polygon","polyline","radialGradient","rect","set","stop","switch","symbol","text","textPath","title","tref","tspan","use","view","vkern"];function s(e,n,s){var l;-1!==a.indexOf(e)&&(n.namespace=t);var c=!1;if(n.namespace&&(c=n.namespace,delete n.namespace),c)l=document.createElementNS(c,e);else{if(e===i)return document.createComment(n.comment);l=document.createElement(e)}for(var d in n)if(n.hasOwnProperty(d)){var u=d.toLowerCase(),p=n[d];if("classname"===u&&(u="class",d="class"),"htmlFor"===d&&(d="for"),-1!==r.indexOf(u))if("true"===p)p=u;else if("false"===p)continue;"on"===u.slice(0,2)?l[d]=p:c?"xlink:href"===d?l.setAttributeNS(o,d,p):/^xmlns($|:)/i.test(d)||l.setAttributeNS(null,d,p):l.setAttribute(d,p)}return I(l,s),l}e.exports=function(e,t){t||(t={});var o=t.concat||function(e,n){return String(e)+String(n)};return!1!==t.attrToProp&&(e=f(e)),function(i){for(var a=m,s="",l=arguments.length,c=[],d=0;d<i.length;d++)if(d<l-1){var u=arguments[d+1],p=z(i[d]),f=a;f===C&&(f=x),f===k&&(f=x),f===b&&(f=x),f===g&&(f=y),p.push([0,f,u]),c.push.apply(c,p)}else c.push.apply(c,z(i[d]));var h,N=[null,{},[]],j=[[N,-1]];for(d=0;d<c.length;d++){var S=j[j.length-1][0],L=(p=c[d])[0];if(L===v&&/^\//.test(p[1])){var P=j[j.length-1][1];j.length>1&&(j.pop(),j[j.length-1][0][2][P]=e(S[0],S[1],S[2].length?S[2]:void 0))}else if(L===v){var D=[p[1],{},[]];S[2].push(D),j.push([D,S[2].length-1])}else if(L===y||0===L&&p[1]===y){for(var F,I="";d<c.length;d++)if(c[d][0]===y)I=o(I,c[d][1]);else{if(0!==c[d][0]||c[d][1]!==y)break;if("object"!==n(c[d][2])||I)I=o(I,c[d][2]);else for(F in c[d][2])c[d][2].hasOwnProperty(F)&&!S[1][F]&&(S[1][F]=c[d][2][F])}c[d][0]===E&&d++;for(var M=d;d<c.length;d++)if(c[d][0]===x||c[d][0]===y)S[1][I]?""===c[d][1]||(S[1][I]=o(S[1][I],c[d][1])):S[1][I]=r(c[d][1]);else{if(0!==c[d][0]||c[d][1]!==x&&c[d][1]!==y){!I.length||S[1][I]||d!==M||c[d][0]!==_&&c[d][0]!==O||(S[1][I]=I.toLowerCase()),c[d][0]===_&&d--;break}S[1][I]?""===c[d][2]||(S[1][I]=o(S[1][I],c[d][2])):S[1][I]=r(c[d][2])}}else if(L===y)S[1][p[1]]=!0;else if(0===L&&p[1]===y)S[1][p[2]]=!0;else if(L===_)h=S[0],A.test(h)&&j.length&&(P=j[j.length-1][1],j.pop(),j[j.length-1][0][2][P]=e(S[0],S[1],S[2].length?S[2]:void 0));else if(0===L&&p[1]===m)void 0===p[2]||null===p[2]?p[2]="":p[2]||(p[2]=o("",p[2])),Array.isArray(p[2][0])?S[2].push.apply(S[2],p[2]):S[2].push(p[2]);else if(L===m)S[2].push(p[1]);else if(L!==E&&L!==O)throw new Error("unhandled: "+L)}if(N[2].length>1&&/^\s*$/.test(N[2][0])&&N[2].shift(),N[2].length>2||2===N[2].length&&/\S/.test(N[2][1]))throw new Error("multiple root elements must be wrapped in an enclosing tag");return Array.isArray(N[2][0])&&"string"==typeof N[2][0][0]&&Array.isArray(N[2][0][2])&&(N[2][0]=e(N[2][0][0],N[2][0][1],N[2][0][2])),N[2][0];function z(e){var n,o=[];a===b&&(a=g);for(var r=0;r<e.length;r++){var i=e.charAt(r);a===m&&"<"===i?(s.length&&o.push([m,s]),s="",a=v):">"===i&&(n=a)!==k&&n!==C&&a!==T?(a===v?o.push([v,s]):a===y?o.push([y,s]):a===x&&s.length&&o.push([x,s]),o.push([_]),s="",a=m):a===T&&/-$/.test(s)&&"-"===i?(t.comments&&o.push([x,s.substr(0,s.length-1)],[_]),s="",a=m):a===v&&/^!--$/.test(s)?(t.comments&&o.push([v,s],[y,"comment"],[E]),s=i,a=T):a===m||a===T?s+=i:a===v&&/\s/.test(i)?(o.push([v,s]),s="",a=g):a===v?s+=i:a===g&&/[^\s"'=/]/.test(i)?(a=y,s=i):a===g&&/\s/.test(i)?(s.length&&o.push([y,s]),o.push([O])):a===y&&/\s/.test(i)?(o.push([y,s]),s="",a=w):a===y&&"="===i?(o.push([y,s],[E]),s="",a=b):a===y?s+=i:a!==w&&a!==g||"="!==i?a!==w&&a!==g||/\s/.test(i)?a===b&&'"'===i?a=C:a===b&&"'"===i?a=k:a===C&&'"'===i?(o.push([x,s],[O]),s="",a=g):a===k&&"'"===i?(o.push([x,s],[O]),s="",a=g):a!==b||/\s/.test(i)?a===x&&/\s/.test(i)?(o.push([x,s],[O]),s="",a=g):a!==x&&a!==k&&a!==C||(s+=i):(a=x,r--):(o.push([O]),/[\w-]/.test(i)?(s+=i,a=y):a=g):(o.push([E]),a=b)}return a===m&&s.length?(o.push([m,s]),s=""):a===x&&s.length?(o.push([x,s]),s=""):a===C&&s.length?(o.push([x,s]),s=""):a===k&&s.length?(o.push([x,s]),s=""):a===y&&(o.push([y,s]),s=""),o}};function r(e){return"function"==typeof e?e:"string"==typeof e?e:e&&"object"===(void 0===e?"undefined":n(e))?e:o("",e)}}(s,{comments:!0}),e.exports.default=e.exports,e.exports.createElement=s});M.createElement;var z=function(e){return"undefined"!=typeof window?((t=document.createElement("div")).innerHTML=e,o=t.childNodes,Array.isArray(o)?o:[].slice.call(o)):((n=new String(e)).__encoded=!0,n);var n,t,o},R=c(['<div class="m-dropdown__select-wrap" tabindex="0">\n    <select class="m-dropdown__select">\n      ','\n    </select>\n    <div class="m-dropdown__select-icon">',"</div>\n  </div>"],['<div class="m-dropdown__select-wrap" tabindex="0">\n    <select class="m-dropdown__select">\n      ','\n    </select>\n    <div class="m-dropdown__select-icon">',"</div>\n  </div>"]),q=c(['\n        <option data-url="','">',"</option>\n      "],['\n        <option data-url="','">',"</option>\n      "]),G=c(['<button type="button" class="m-dropdown__toggle js-dropdown__toggle">\n    ',"","\n  </button>"],['<button type="button" class="m-dropdown__toggle js-dropdown__toggle">\n    ',"","\n  </button>"]),U=c(['<ul class="m-dropdown__content">\n    ',"\n  </ul>"],['<ul class="m-dropdown__content">\n    ',"\n  </ul>"]),V=c(['\n      <li class="m-dropdown__item">\n        <a class="m-dropdown__link" href="','">',"</a>\n      </li>\n    "],['\n      <li class="m-dropdown__item">\n        <a class="m-dropdown__link" href="','">',"</a>\n      </li>\n    "]),$='<axa-icon id="angle-bracket-down" classes="m-dropdown__icon"></axa-icon>',K=function(e){var n,t,o,r,i=e.native,a=function(e,n){var t={};for(var o in e)n.indexOf(o)>=0||Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t}(e,["native"]);return i?(r=a.items,M(R,r&&r.map(function(e){var n=e.name,t=e.url;return M(q,t,n)}),z($))):(t=(n=a).title,o=n.items,[M(G,t,z($)),M(U,o&&o.map(function(e){var n=e.name,t=e.url;return M(V,t,n)}))])},W=/^\s*(?:true|false|null|undefined|-?[0-9]+\.?[0-9]*|[[{](?:.|[\r\n])*[\]}])\s*$/;function B(e,n){if("function"==typeof e.hasAttribute&&!e.hasAttribute(n))return!1;var t=e.value;if(n?t=e.getAttribute(n):n=e.name,t&&n!==t){if(W.test(t))try{t=JSON.parse(t)}catch(n){console.error("Attribute "+e+" has an error:\n"+n+"\n",t)}}else t=!0;return t}var H=function(){try{var e=new window.CustomEvent("test");if(e.preventDefault(),!0!==e.defaultPrevented)throw new Error("Could not prevent default");return window.CustomEvent}catch(e){}return n;function n(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},t=n.bubbles,o=void 0!==t&&t,r=n.cancelable,i=void 0!==r&&r,a=n.detail,s=void 0===a?void 0:a,l=document.createEvent("CustomEvent");l.initCustomEvent(e,o,i,s);var c=l.preventDefault;return l.preventDefault=function(){c.call(l);try{Object.defineProperty(this,"defaultPrevented",{get:function(){return!0}})}catch(e){this.defaultPrevented=!0}},l}}();function J(e,n,t){var o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},i=new H(n,r({},o,{detail:t}));e.dispatchEvent(i)}var Y=/^\s+|\s{2,}|\s+$/g;function Z(e,n){return new RegExp("^"+e+"$|^"+e+"\\s|\\s"+e+"\\s|\\s"+e+"$",n)}function Q(e,n){return Z(n).test(e.className)}function X(e,n){if(!e)return!1;for(var t=Object.keys(e),o=t.length,r=0;r<o;++r){var i=t[r];if(e[i]===n)return delete e[i]}return!1}var ee=/\s+/,ne={transitionend:function(){for(var e=document.createElement("div").style,n={transition:"transitionend",OTransition:"oTransitionEnd otransitionend",MozTransition:"transitionend",WebkitTransition:"webkitTransitionEnd"},t=Object.keys(n),o=t.length,r=void 0,i=0;i<o;++i)if(void 0!==e[r=t[i]])return n[r];return null}()};function te(e,t,o,r){var i=arguments.length>4&&void 0!==arguments[4]&&arguments[4];if(ne[t]&&(t=ne[t]),!e||!t)return null;var a=void 0===o?"undefined":n(o);"function"===a&&(i=!!r,r=o);for(var s=o&&"string"===a?function(n){var t=n.target;for(;!Q(t,o)&&t!==e;)t=t.parentNode;if(t!==e)return r(n,t)}:r,l=t.split(ee),c=l.length,d=0;d<c;++d)e.addEventListener(l[d],s,i);return function n(){for(var t=0;t<c;++t)e.removeEventListener(l[t],s,i);X(this,n)}}var oe={};function re(e,n){var t=te(arguments.length>2&&void 0!==arguments[2]?arguments[2]:document,e,n);oe[e]||(oe[e]={count:0});var o,r=oe[e];return r.count++,r.onsubscribe||(r.onsubscribe=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},o=t.leading,r=void 0!==o&&o,i=t.trailing,a=void 0===i||i,s=t.maxWait,l=void 0!==s&&s,c=void 0,u=void 0,p=void 0,f=void 0,h=!1,m=n!==l,v=!1!==l;function _(){for(var t=arguments.length,o=Array(t),i=0;i<t;i++)o[i]=arguments[i];return c=o,m&&(u&&clearTimeout(u),u=setTimeout(g,n)),v&&!p&&(p=setTimeout(y,l)),r&&!h&&(h=!0,f=e.apply(void 0,d(c))),f}return _.flush=function(){return(u||p)&&(f=e.apply(void 0,d(c))),b(),f},_.cancel=b,_;function g(){p&&clearTimeout(p),w()}function y(){u&&clearTimeout(u),w()}function w(){a&&(f=e.apply(void 0,d(c))),u=null,p=null,h=!1}function b(){u&&(clearTimeout(u),u=null),p&&(clearTimeout(p),p=null),c=void 0,h=!1}}((o=e,function(){J(document,"pubsub/onsubscribe",o),J(document,"pubsub/onsubscribe/"+o,o),oe[o]&&delete oe[o].unsubscribe}),100)),r.onsubscribe(),function(){r.count--,t.call(this),r.count<=0&&delete oe[e]}}function ie(){return Reflect.construct(HTMLElement,[],this.__proto__.constructor)}te(document,"pubsub/onsubscribe",function(e){var n=e.detail;oe[n]||(oe[n]={count:0});var t=oe[n],o=t.queue;Array.isArray(o)&&(o.forEach(function(e){var n=l(e,3),t=n[0],o=n[1],r=n[2];J(r,t,o)}),delete t.queue)}),Object.setPrototypeOf(ie.prototype,HTMLElement.prototype),Object.setPrototypeOf(ie,HTMLElement);var ae={},se="throwed",le=function(e){function n(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",o=arguments[1];t(this,n);var r=s(this,(n.__proto__||Object.getPrototypeOf(n)).call(this));return r._makeContextReady=r._makeContextReady.bind(r),r._initialise(e,o),r}return a(n,ie),o(n,[{key:"_initialise",value:function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;this.initialClassName=this.className,this._styles=e,this._template=n}},{key:"connectedCallback",value:function(){this._appendStyles(),this.render(),this.contextCallback&&this._makeContextReady()}},{key:"disconnectedCallback",value:function(){this.unContextEnabled&&this.unContextEnabled()}},{key:"_appendStyles",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this;if(this._styles){var n=document.createElement("style"),t=document.createTextNode(this._styles);n.appendChild(t),e.insertAdjacentElement?e.insertAdjacentElement("afterbegin",n):e.appendChild(n)}}},{key:"render",value:function(){var e=this;if(!this._hasRendered){var n=this._template;if(n)try{for(var t=document.createDocumentFragment();this.firstChild;)t.appendChild(this.firstChild);var o=n(function(e){if(!e.hasAttributes)return null;for(var n={},t=e.attributes,o=t.length,r=0;r<o;++r){var i=t[r];n[i.name]=B(i)}return n}(this),t);if(Array.isArray(o))o.forEach(function(n){e.appendChild(n)});else if(o){if("string"==typeof o){var r=new Error(se);throw console.error("\n%cWeb Component %c"+this.nodeName+"%c does not accept string as a return from a template. Maybe use bel?\n\nStack Trace: "+r.stack+"\n","color: #580000; font-size: 14px; line-height:16px;","background: #8b0000; color: #FFF; font-size: 14px; line-height:16px;","color: #580000; font-size: 14px; line-height:16px;"),r}this.appendChild(o)}this._hasRendered=!0}catch(r){r.message!==se&&console.error("\n%cWeb Component %c"+this.nodeName+"%c has an error while loading its template:\n"+r+"\n\nStack Trace: "+r.stack+"\n","color: #580000; font-size: 14px; line-height:16px;","background: #8b0000; color: #FFF; font-size: 14px; line-height:16px;","color: #580000; font-size: 14px; line-height:16px;")}}}},{key:"enableContext",value:function(){var e=this.nodeName.toLowerCase();this.__isContext=!0,this.__contextName=e,function(e,n){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:document;oe[e]||(oe[e]={count:0,queue:[]});var o=oe[e].queue;Array.isArray(o)?o.push([e,n,t]):J(t,e,n)}("context/enabled",e)}},{key:"selectContext",value:function(e){this.__selectedContext=e.toLowerCase()}},{key:"_makeContextReady",value:function(){var e=this,n=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}).detail;this.contextNode&&(clearTimeout(this.timeoutId),this.timeoutId=setTimeout(function(){e.contextCallback(e.contextNode,n)},10)),this.unContextEnabled&&this.unContextEnabled(),this.unContextEnabled=re("context/enabled",this._makeContextReady)}},{key:"contextNode",get:function(){for(var e=this.__selectedContext,n=this.parentNode;n&&(!n.__isContext||e&&e!==n.__contextName);)n=n.parentNode;return!(!n||!n.__isContext)&&n}}],[{key:"uuidv4",value:function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(e){var n=16*Math.random()|0;return("x"==e?n:3&n|8).toString(16)})}}]),n}(),ce=(function(e){function n(){return t(this,n),s(this,(n.__proto__||Object.getPrototypeOf(n)).apply(this,arguments))}a(n,le),o(n,[{key:"connectedCallback",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"open",n=this.attachShadow({mode:e});this._appendStyles(n),this.render()}}])}(),function(e){function n(){return t(this,n),s(this,(n.__proto__||Object.getPrototypeOf(n)).apply(this,arguments))}return a(n,le),o(n,[{key:"_appendStyles",value:function(){n.appendGlobalStyles(this._styles,this.nodeName)}}],[{key:"appendGlobalStyles",value:function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:le.uuidv4();if(e&&!ae[e]){var t=document.createElement("style"),o=document.createTextNode(e);t.appendChild(o),t.setAttribute("data-c-name",n.toLowerCase()),document.querySelector("head").appendChild(t),ae[e]=!0}}}]),n}());var de=function(){for(var e=arguments.length,n=Array(e),t=0;t<e;t++)n[t]=arguments[t];for(var o=n.length,r={},i=0;i<o;++i){var a=n[i];r[a.toUpperCase()]=a}return r}("click","keyup","enter","move","leave","Escape","Esc"),ue=function(){function e(n){var o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};t(this,e),this._rootNode=n,this._options=r({},e.DEFAULTS,o),this._handleClick=this._handleClick.bind(this),this._handleClose=this._handleClose.bind(this),this._handleKeyUp=this._handleKeyUp.bind(this),this._init()}return o(e,[{key:"_init",value:function(){var e=this._options.containerClass;this._container=e?this._rootNode.querySelector(e):this._rootNode,this._on()}},{key:"_on",value:function(){this._off(),this._unClick=te(this._container,de.CLICK,this._options.toggleClass,this._handleClick)}},{key:"_off",value:function(){this._unClick&&this._unClick(),this._offInteractive()}},{key:"_onInteractive",value:function(){this._offInteractive(),this._options.closeClass&&(this._unCloseClick=te(this._container,de.CLICK,this._options.closeClass,this._handleClose)),this._options.outerClose&&(this._unOuterClick=function(e,n,t){var o=!(arguments.length>3&&void 0!==arguments[3])||arguments[3],r=e.ownerDocument.documentElement;return r.addEventListener(n,i,o),function e(){r.removeEventListener(n,i,o),X(this,e)};function i(n){var o=n.target;if(!e.contains(o)&&e!==o)return t(n)}}(this._container,de.CLICK,this._handleClose)),this._options.escapeClose&&(this._unCloseEscape=te(this._container.ownerDocument,de.KEYUP,this._handleKeyUp))}},{key:"_offInteractive",value:function(){this._unOuterClick&&this._unOuterClick(),this._unCloseClick&&this._unCloseClick(),this._unCloseEscape&&this._unCloseEscape(),delete this._lastToggleNode}},{key:"_handleClick",value:function(e,n){this._options.useDefaultEvent||e.preventDefault();var t=!this._lastToggleNode,o=n!==this._lastToggleNode,r=!t&&!o;t?(this._notify(de.ENTER,n),this._onInteractive()):o&&this._notify(de.MOVE,n,this._lastToggleNode),this._lastToggleNode=n,r&&this._options.sameClickClose&&this._close()}},{key:"_handleClose",value:function(e){this._options.useDefaultEvent||e.preventDefault(),this._close()}},{key:"_handleKeyUp",value:function(e){(e.key===de.ESCAPE||e.key===de.ESC||27===e.keyCode)&&(e.preventDefault(),this._close())}},{key:"_close",value:function(){this._lastToggleNode&&(this._notify(de.LEAVE,this._lastToggleNode),this._offInteractive(),delete this._lastToggleNode)}},{key:"_notify",value:function(e,n,t){e in this&&"function"==typeof this[e]&&this[e](n,t)}},{key:"enter",value:function(e){throw new Error("UiEvent.enter method not overwritten")}},{key:"move",value:function(e,n){}},{key:"leave",value:function(e){throw new Error("UiEvent.leave method not overwritten")}},{key:"destroy",value:function(){this._off(),delete this._rootNode,delete this._options}}]),e}();ue.DEFAULTS={containerClass:".js-ui-container",toggleClass:"js-ui-toggle",closeClass:"js-ui-close",escapeClose:!0,outerClose:!0,sameClickClose:!0,useDefaultEvent:!1};var pe,fe=function(){if(!window.getComputedStyle)return null;var e=window.getComputedStyle(document.documentElement,""),n=(Array.prototype.slice.call(e).join("").match(/-(moz|webkit|ms)-/)||""===e.OLink&&["","o"])[1];return{dom:"WebKit|Moz|MS|O".match(new RegExp("("+n+")","i"))[1],lowercase:n,css:"-"+n+"-",js:n[0].toUpperCase()+n.slice(1)}}().lowercase,he=function(){var e=window.requestAnimationFrame||window[fe+"RequestAnimationFrame"];if(e)e=e.bind(window);else{var n=0;e=function(e){var t=Date.now(),o=Math.max(0,16-(t-n)),r=setTimeout(function(){e(t+o)},o);return n=t+o,r}}return e}(),me=(pe=(pe=window.cancelAnimationFrame||window[fe+"CancelAnimationFrame"]||window[fe+"CancelRequestAnimationFrame"])?pe.bind(window):function(e){clearTimeout(e)},function(e){function n(e,o){t(this,n),o=r({},n.DEFAULTS,o);var i=s(this,(n.__proto__||Object.getPrototypeOf(n)).call(this,e,o));return i.options=o,i.rootNode=e,i.handleTransitionEnd=i.handleTransitionEnd.bind(i),i}return a(n,ue),o(n,[{key:"onInteractive",value:function(){this.offInteractive(),this.unTransitionEnd=te(this.rootNode,"transitionend",this.handleTransitionEnd)}},{key:"offInteractive",value:function(){this.unTransitionEnd&&this.unTransitionEnd()}},{key:"enter",value:function(e){var n=e.parentNode,t=n.lastElementChild;t.style.overflow="scroll";var o,r,i=t.scrollHeight;t.style.overflow="",this.onInteractive(),t.style.height=i+"px",o=n,r=this.options.isOpenClass,Q(o,r)||(o.className+=" "+r)}},{key:"leave",value:function(e){var n=this,t=e.parentNode,o=t.lastElementChild,r=o.scrollHeight;this.offInteractive(),he(function(){o.style.height=r+"px",he(function(){!function(e,n){if(Q(e,n)){var t=Z(n,"g");e.className=e.className.replace(t," ").replace(Y," ")}}(t,n.options.isOpenClass),o.style.height=0})})}},{key:"handleTransitionEnd",value:function(e){"height"===e.propertyName&&(e.target.style.height="",this.offInteractive())}},{key:"destroy",value:function(){i(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"destroy",this).call(this),delete this.rootNode,delete this.options}}]),n}());me.DEFAULTS={containerClass:".js-dropdown",toggleClass:"js-dropdown__toggle",isOpenClass:"is-dropdown-open"};var ve,_e,ge,ye=function(e){function n(){return t(this,n),s(this,(n.__proto__||Object.getPrototypeOf(n)).call(this,p,K))}return a(n,ce),o(n,[{key:"connectedCallback",value:function(){i(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"connectedCallback",this).call(this),this.dropDown=new me(this,{containerClass:null})}},{key:"disconnectedCallback",value:function(){this.dropDown.destroy(),delete this.dropDown}},{key:"render",value:function(){i(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"render",this).call(this);var e=this.hasAttribute("in-flow");this.className=u(this.initialClassName,"m-dropdown js-dropdown",{"m-dropdown--in-flow":e})}}]),n}();return ve=function(){window.customElements.define("axa-dropdown",ye),ce.appendGlobalStyles(p)},_e=0,ge=function(){if(0===_e)try{ve.apply(void 0,arguments),_e+=1,document.removeEventListener("DOMContentLoaded"),document.removeEventListener("WebComponentsReady")}catch(e){}},document.addEventListener("DOMContentLoaded",ge,!1),document.addEventListener("WebComponentsReady",ge,!1),ye});
