var StyleGuideWebComponent=function(){"use strict";function e(e,t){return e(t={exports:{}},t.exports),t.exports}var t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},i=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},o=function e(t,n,i){null===t&&(t=Function.prototype);var a=Object.getOwnPropertyDescriptor(t,n);if(void 0===a){var o=Object.getPrototypeOf(t);return null===o?void 0:e(o,n,i)}if("value"in a)return a.value;var r=a.get;return void 0!==r?r.call(i):void 0},r=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)},s=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},l=function(){return function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var n=[],i=!0,a=!1,o=void 0;try{for(var r,s=e[Symbol.iterator]();!(i=(r=s.next()).done)&&(n.push(r.value),!t||n.length!==t);i=!0);}catch(e){a=!0,o=e}finally{try{!i&&s.return&&s.return()}finally{if(a)throw o}}return n}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),c=function(e,t){return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))},u=function(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)},d=e(function(e){!function(){var n={}.hasOwnProperty;function i(){for(var e=[],a=0;a<arguments.length;a++){var o=arguments[a];if(o){var r=void 0===o?"undefined":t(o);if("string"===r||"number"===r)e.push(o);else if(Array.isArray(o))e.push(i.apply(null,o));else if("object"===r)for(var s in o)n.call(o,s)&&o[s]&&e.push(s)}}return e.join(" ")}e.exports?e.exports=i:window.classNames=i}()}),h=".m-header-mobile-navigation {\n  display: block; }\n  .m-header-mobile-navigation:first-child {\n    margin-top: -20px; }\n\n.m-header-mobile-navigation--relative {\n  position: relative; }\n\n.m-header-mobile-navigation__nav {\n  display: block;\n  background: #fff; }\n  .m-header-mobile-navigation__nav .m-header-mobile-navigation__nav {\n    -webkit-transform: translate3d(0, 0, 0);\n            transform: translate3d(0, 0, 0);\n    -webkit-backface-visibility: hidden;\n            backface-visibility: hidden;\n    position: absolute;\n    left: 0;\n    right: 0;\n    top: 0;\n    z-index: 1050;\n    min-height: 100%;\n    -webkit-transform: translateX(110%);\n            transform: translateX(110%);\n    -webkit-transition: -webkit-transform 0.2s ease;\n    transition: -webkit-transform 0.2s ease;\n    transition: transform 0.2s ease;\n    transition: transform 0.2s ease, -webkit-transform 0.2s ease; }\n    @media (min-width: 576px) {\n      .m-header-mobile-navigation__nav .m-header-mobile-navigation__nav {\n        left: 10px;\n        -webkit-box-shadow: -5px 0 10px -5px rgba(0, 0, 0, 0.3);\n                box-shadow: -5px 0 10px -5px rgba(0, 0, 0, 0.3); } }\n  .is-header-mobile-navigation-nav-open > .m-header-mobile-navigation__nav {\n    -webkit-transform: translateX(0);\n            transform: translateX(0); }\n\n.m-header-mobile-navigation__list {\n  padding: 0;\n  margin: 0;\n  list-style-type: none; }\n\n.m-header-mobile-navigation__list-item {\n  display: block;\n  border-bottom: 1px solid #ccc; }\n  .m-header-mobile-navigation__list-item:first-child {\n    border-top: 1px solid #ccc; }\n\n.m-header-mobile-navigation__category,\n.m-header-mobile-navigation__back,\n.m-header-mobile-navigation__list-link {\n  padding-right: 15px;\n  padding-left: 15px;\n  width: 100%;\n  margin-right: auto;\n  margin-left: auto;\n  /* Adds a hyphen where the word breaks, if supported (No Blink) */\n  -webkit-hyphens: auto;\n      -ms-hyphens: auto;\n          hyphens: auto;\n  /* These are technically the same, but use both */\n  overflow-wrap: break-word;\n  word-wrap: break-word;\n  color: #00008f;\n  cursor: pointer;\n  position: relative;\n  display: block;\n  padding-left: 60px;\n  padding-right: 40px;\n  text-transform: uppercase; }\n  .m-header-mobile-navigation__category.is-header-mobile-navigation-active, .m-header-mobile-navigation__category:hover, .m-header-mobile-navigation__category:active, .m-header-mobile-navigation__category:focus,\n  .m-header-mobile-navigation__back.is-header-mobile-navigation-active,\n  .m-header-mobile-navigation__back:hover,\n  .m-header-mobile-navigation__back:active,\n  .m-header-mobile-navigation__back:focus,\n  .m-header-mobile-navigation__list-link.is-header-mobile-navigation-active,\n  .m-header-mobile-navigation__list-link:hover,\n  .m-header-mobile-navigation__list-link:active,\n  .m-header-mobile-navigation__list-link:focus {\n    color: #00005b; }\n\n.m-header-mobile-navigation__category,\n.m-header-mobile-navigation__back {\n  background: transparent;\n  border: none;\n  background: transparent;\n  text-align: left; }\n  .m-header-mobile-navigation__category:hover, .m-header-mobile-navigation__category:active, .m-header-mobile-navigation__category:focus,\n  .m-header-mobile-navigation__back:hover,\n  .m-header-mobile-navigation__back:active,\n  .m-header-mobile-navigation__back:focus {\n    outline: none;\n    cursor: pointer; }\n\n.m-header-mobile-navigation__category,\n.m-header-mobile-navigation__list-link {\n  font-size: 14px;\n  font-weight: 600;\n  line-height: 1.5;\n  letter-spacing: 0.02em;\n  padding-top: 20px;\n  padding-bottom: 20px; }\n  @media (min-width: 576px) {\n    .m-header-mobile-navigation__category,\n    .m-header-mobile-navigation__list-link {\n      font-size: 16px; } }\n\n.m-header-mobile-navigation__category {\n  padding-right: 70px; }\n\n.m-header-mobile-navigation__back {\n  font-size: 20px;\n  font-weight: 700;\n  line-height: 1.5;\n  letter-spacing: 0;\n  padding-top: 30px;\n  padding-bottom: 30px;\n  padding-left: 105px; }\n  @media (min-width: 576px) {\n    .m-header-mobile-navigation__back {\n      font-size: 24px;\n      line-height: 1.2; } }\n\n.m-header-mobile-navigation__icon-next,\n.m-header-mobile-navigation__icon-back {\n  width: 15px;\n  height: 15px;\n  display: block;\n  fill: currentColor;\n  position: absolute;\n  top: 50%;\n  margin-top: -7.5px;\n  pointer-events: none; }\n\n.m-header-mobile-navigation__icon-next {\n  right: 40px;\n  -webkit-transform: rotate(-90deg);\n          transform: rotate(-90deg); }\n\n.m-header-mobile-navigation__icon-back {\n  left: 60px;\n  -webkit-transform: rotate(90deg);\n          transform: rotate(90deg); }\n",f=function(e){return function(t,n,i){for(var a in n)a in p&&(n[p[a]]=n[a],delete n[a]);return e(t,n,i)}},p={class:"className",for:"htmlFor","http-equiv":"httpEquiv"};var m=1,v=2,b=3,g=4,y=5,_=6,x=7,k=8,C=9,w=10,O=11,N=12,E=13;var S=RegExp("^("+["area","base","basefont","bgsound","br","col","command","embed","frame","hr","img","input","isindex","keygen","link","meta","param","source","track","wbr","!--","animate","animateTransform","circle","cursor","desc","ellipse","feBlend","feColorMatrix","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","font-face-format","font-face-name","font-face-uri","glyph","glyphRef","hkern","image","line","missing-glyph","mpath","path","polygon","polyline","rect","set","stop","tref","use","view","vkern"].join("|")+")(?:[.#][a-zA-Z0-9-￿_:-]+)*$");var j=/\n[\s]+$/,A=/^\n[\s]+/,T=/[\s]+$/,L=/^[\s]+/,F=/[\n\s]+/g,P=["a","abbr","b","bdi","bdo","br","cite","data","dfn","em","i","kbd","mark","q","rp","rt","rtc","ruby","s","amp","small","span","strong","sub","sup","time","u","var","wbr"],M=["code","pre"],D=function e(t,n){if(Array.isArray(n))for(var i,a,o=t.nodeName.toLowerCase(),r=!1,s=0,l=n.length;s<l;s++){var c=n[s];if(Array.isArray(c))e(t,c);else{("number"==typeof c||"boolean"==typeof c||"function"==typeof c||c instanceof Date||c instanceof RegExp)&&(c=c.toString());var u=t.childNodes[t.childNodes.length-1];if("string"==typeof c)r=!0,u&&"#text"===u.nodeName?u.nodeValue+=c:(c=document.createTextNode(c),t.appendChild(c),u=c),s===l-1&&(r=!1,-1===P.indexOf(o)&&-1===M.indexOf(o)?""===(i=u.nodeValue.replace(A,"").replace(T,"").replace(j,"").replace(F," "))?t.removeChild(u):u.nodeValue=i:-1===M.indexOf(o)&&(a=0===s?"":" ",i=u.nodeValue.replace(A,a).replace(L," ").replace(T,"").replace(j,"").replace(F," "),u.nodeValue=i));else if(c&&c.nodeType){r&&(r=!1,-1===P.indexOf(o)&&-1===M.indexOf(o)?""===(i=u.nodeValue.replace(A,"").replace(j,"").replace(F," "))?t.removeChild(u):u.nodeValue=i:-1===M.indexOf(o)&&(i=u.nodeValue.replace(L," ").replace(A,"").replace(j,"").replace(F," "),u.nodeValue=i));var d=c.nodeName;d&&(o=d.toLowerCase()),t.appendChild(c)}}}},R=e(function(e){var n="http://www.w3.org/2000/svg",i="http://www.w3.org/1999/xlink",a=["autofocus","checked","defaultchecked","disabled","formnovalidate","indeterminate","readonly","required","selected","willvalidate"],o="!--",r=["svg","altGlyph","altGlyphDef","altGlyphItem","animate","animateColor","animateMotion","animateTransform","circle","clipPath","color-profile","cursor","defs","desc","ellipse","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","filter","font","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","foreignObject","g","glyph","glyphRef","hkern","image","line","linearGradient","marker","mask","metadata","missing-glyph","mpath","path","pattern","polygon","polyline","radialGradient","rect","set","stop","switch","symbol","text","textPath","title","tref","tspan","use","view","vkern"];function s(e,t,s){var l;-1!==r.indexOf(e)&&(t.namespace=n);var c=!1;if(t.namespace&&(c=t.namespace,delete t.namespace),c)l=document.createElementNS(c,e);else{if(e===o)return document.createComment(t.comment);l=document.createElement(e)}for(var u in t)if(t.hasOwnProperty(u)){var d=u.toLowerCase(),h=t[u];if("classname"===d&&(d="class",u="class"),"htmlFor"===u&&(u="for"),-1!==a.indexOf(d))if("true"===h)h=d;else if("false"===h)continue;"on"===d.slice(0,2)?l[u]=h:c?"xlink:href"===u?l.setAttributeNS(i,u,h):/^xmlns($|:)/i.test(u)||l.setAttributeNS(null,u,h):l.setAttribute(u,h)}return D(l,s),l}e.exports=function(e,n){n||(n={});var i=n.concat||function(e,t){return String(e)+String(t)};return!1!==n.attrToProp&&(e=f(e)),function(o){for(var r=m,s="",l=arguments.length,c=[],u=0;u<o.length;u++)if(u<l-1){var d=arguments[u+1],h=z(o[u]),f=r;f===w&&(f=k),f===C&&(f=k),f===x&&(f=k),f===g&&(f=y),h.push([0,f,d]),c.push.apply(c,h)}else c.push.apply(c,z(o[u]));var p,j=[null,{},[]],A=[[j,-1]];for(u=0;u<c.length;u++){var T=A[A.length-1][0],L=(h=c[u])[0];if(L===v&&/^\//.test(h[1])){var F=A[A.length-1][1];A.length>1&&(A.pop(),A[A.length-1][0][2][F]=e(T[0],T[1],T[2].length?T[2]:void 0))}else if(L===v){var P=[h[1],{},[]];T[2].push(P),A.push([P,T[2].length-1])}else if(L===y||0===L&&h[1]===y){for(var M,D="";u<c.length;u++)if(c[u][0]===y)D=i(D,c[u][1]);else{if(0!==c[u][0]||c[u][1]!==y)break;if("object"!==t(c[u][2])||D)D=i(D,c[u][2]);else for(M in c[u][2])c[u][2].hasOwnProperty(M)&&!T[1][M]&&(T[1][M]=c[u][2][M])}c[u][0]===O&&u++;for(var R=u;u<c.length;u++)if(c[u][0]===k||c[u][0]===y)T[1][D]?""===c[u][1]||(T[1][D]=i(T[1][D],c[u][1])):T[1][D]=a(c[u][1]);else{if(0!==c[u][0]||c[u][1]!==k&&c[u][1]!==y){!D.length||T[1][D]||u!==R||c[u][0]!==b&&c[u][0]!==N||(T[1][D]=D.toLowerCase()),c[u][0]===b&&u--;break}T[1][D]?""===c[u][2]||(T[1][D]=i(T[1][D],c[u][2])):T[1][D]=a(c[u][2])}}else if(L===y)T[1][h[1]]=!0;else if(0===L&&h[1]===y)T[1][h[2]]=!0;else if(L===b)p=T[0],S.test(p)&&A.length&&(F=A[A.length-1][1],A.pop(),A[A.length-1][0][2][F]=e(T[0],T[1],T[2].length?T[2]:void 0));else if(0===L&&h[1]===m)void 0===h[2]||null===h[2]?h[2]="":h[2]||(h[2]=i("",h[2])),Array.isArray(h[2][0])?T[2].push.apply(T[2],h[2]):T[2].push(h[2]);else if(L===m)T[2].push(h[1]);else if(L!==O&&L!==N)throw new Error("unhandled: "+L)}if(j[2].length>1&&/^\s*$/.test(j[2][0])&&j[2].shift(),j[2].length>2||2===j[2].length&&/\S/.test(j[2][1]))throw new Error("multiple root elements must be wrapped in an enclosing tag");return Array.isArray(j[2][0])&&"string"==typeof j[2][0][0]&&Array.isArray(j[2][0][2])&&(j[2][0]=e(j[2][0][0],j[2][0][1],j[2][0][2])),j[2][0];function z(e){var t,i=[];r===x&&(r=g);for(var a=0;a<e.length;a++){var o=e.charAt(a);r===m&&"<"===o?(s.length&&i.push([m,s]),s="",r=v):">"===o&&(t=r)!==C&&t!==w&&r!==E?(r===v?i.push([v,s]):r===y?i.push([y,s]):r===k&&s.length&&i.push([k,s]),i.push([b]),s="",r=m):r===E&&/-$/.test(s)&&"-"===o?(n.comments&&i.push([k,s.substr(0,s.length-1)],[b]),s="",r=m):r===v&&/^!--$/.test(s)?(n.comments&&i.push([v,s],[y,"comment"],[O]),s=o,r=E):r===m||r===E?s+=o:r===v&&/\s/.test(o)?(i.push([v,s]),s="",r=g):r===v?s+=o:r===g&&/[^\s"'=/]/.test(o)?(r=y,s=o):r===g&&/\s/.test(o)?(s.length&&i.push([y,s]),i.push([N])):r===y&&/\s/.test(o)?(i.push([y,s]),s="",r=_):r===y&&"="===o?(i.push([y,s],[O]),s="",r=x):r===y?s+=o:r!==_&&r!==g||"="!==o?r!==_&&r!==g||/\s/.test(o)?r===x&&'"'===o?r=w:r===x&&"'"===o?r=C:r===w&&'"'===o?(i.push([k,s],[N]),s="",r=g):r===C&&"'"===o?(i.push([k,s],[N]),s="",r=g):r!==x||/\s/.test(o)?r===k&&/\s/.test(o)?(i.push([k,s],[N]),s="",r=g):r!==k&&r!==C&&r!==w||(s+=o):(r=k,a--):(i.push([N]),/[\w-]/.test(o)?(s+=o,r=y):r=g):(i.push([O]),r=x)}return r===m&&s.length?(i.push([m,s]),s=""):r===k&&s.length?(i.push([k,s]),s=""):r===w&&s.length?(i.push([k,s]),s=""):r===C&&s.length?(i.push([k,s]),s=""):r===y&&(i.push([y,s]),s=""),i}};function a(e){return"function"==typeof e?e:"string"==typeof e?e:e&&"object"===(void 0===e?"undefined":t(e))?e:i("",e)}}(s,{comments:!0}),e.exports.default=e.exports,e.exports.createElement=s}),z=(R.createElement,c(['\n    <li class="m-header-mobile-navigation__list-item">\n      ',"\n    </li>\n  "],['\n    <li class="m-header-mobile-navigation__list-item">\n      ',"\n    </li>\n  "])),B=c(['<button type="button" class="m-header-mobile-navigation__category js-header-mobile-navigation__category ','">\n          ','\n          <axa-icon id="angle-bracket-down" classes="m-header-mobile-navigation__icon-next"></axa-icon>\n        </button>\n        '],['<button type="button" class="m-header-mobile-navigation__category js-header-mobile-navigation__category ','">\n          ','\n          <axa-icon id="angle-bracket-down" classes="m-header-mobile-navigation__icon-next"></axa-icon>\n        </button>\n        ']),G=c(['\n        <a class="m-header-mobile-navigation__list-link js-header-mobile-navigation__list-link js-header-mobile-close ','"\n           href="','">',"</a>\n      "],['\n        <a class="m-header-mobile-navigation__list-link js-header-mobile-navigation__list-link js-header-mobile-close ','"\n           href="','">',"</a>\n      "]),$=c(['\n    <div class="m-header-mobile-navigation__nav ','">\n      ','\n      <ul class="m-header-mobile-navigation__list">\n        ',"\n        ","\n      </ul>\n    </div>\n  "],['\n    <div class="m-header-mobile-navigation__nav ','">\n      ','\n      <ul class="m-header-mobile-navigation__list">\n        ',"\n        ","\n      </ul>\n    </div>\n  "]),q=c(['\n        <button type="button" class="m-header-mobile-navigation__back js-header-mobile-navigation__back">\n          <axa-icon id="angle-bracket-down" classes="m-header-mobile-navigation__icon-back"></axa-icon>\n          ',"\n        </button>\n      "],['\n        <button type="button" class="m-header-mobile-navigation__back js-header-mobile-navigation__back">\n          <axa-icon id="angle-bracket-down" classes="m-header-mobile-navigation__icon-back"></axa-icon>\n          ',"\n        </button>\n      "]);function V(e){var t=e.name,n=e.url,i=e.isActive,a=e.items,o=i?"is-header-mobile-navigation-active":"";return R(z,!!a?[R(B,o,t),W(a,e)]:R(G,o,n,t))}function W(e,t){return R($,!t&&"js-header-mobile-navigation__nav",t&&R(q,t.name),t&&V(a({},t,{name:"index page",items:null})),e.map(V))}var I=function(e){return W(e.items)},X=/^\s*(?:true|false|null|undefined|-?[0-9]+\.?[0-9]*|[[{](?:.|[\r\n])*[\]}])\s*$/;function H(e,t){if("function"==typeof e.hasAttribute&&!e.hasAttribute(t))return!1;var n=e.value;if(t?n=e.getAttribute(t):t=e.name,n&&t!==n){if(X.test(n))try{n=JSON.parse(n)}catch(t){console.error("Attribute "+e+" has an error:\n"+t+"\n",n)}}else n=!0;return n}var U=function(){try{var e=new window.CustomEvent("test");if(e.preventDefault(),!0!==e.defaultPrevented)throw new Error("Could not prevent default");return window.CustomEvent}catch(e){}return t;function t(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.bubbles,i=void 0!==n&&n,a=t.cancelable,o=void 0!==a&&a,r=t.detail,s=void 0===r?void 0:r,l=document.createEvent("CustomEvent");l.initCustomEvent(e,i,o,s);var c=l.preventDefault;return l.preventDefault=function(){c.call(l);try{Object.defineProperty(this,"defaultPrevented",{get:function(){return!0}})}catch(e){this.defaultPrevented=!0}},l}}();function J(e,t,n){var i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},o=new U(t,a({},i,{detail:n}));e.dispatchEvent(o)}var Z=/^\s+|\s{2,}|\s+$/g;function K(e,t){return new RegExp("^"+e+"$|^"+e+"\\s|\\s"+e+"\\s|\\s"+e+"$",t)}function Q(e,t){return K(t).test(e.className)}function Y(e,t){if(Q(e,t)){var n=K(t,"g");e.className=e.className.replace(n," ").replace(Z," ")}}var ee=/\s+/,te={transitionend:function(){for(var e=document.createElement("div").style,t={transition:"transitionend",OTransition:"oTransitionEnd otransitionend",MozTransition:"transitionend",WebkitTransition:"webkitTransitionEnd"},n=Object.keys(t),i=n.length,a=void 0,o=0;o<i;++o)if(void 0!==e[a=n[o]])return t[a];return null}()};function ne(e,n,i,a){var o=arguments.length>4&&void 0!==arguments[4]&&arguments[4];if(te[n]&&(n=te[n]),!e||!n)return null;var r=void 0===i?"undefined":t(i);"function"===r&&(o=!!a,a=i);for(var s=i&&"string"===r?function(t){var n=t.target;for(;!Q(n,i)&&n!==e;)n=n.parentNode;if(n!==e)return a(t,n)}:a,l=n.split(ee),c=l.length,u=0;u<c;++u)e.addEventListener(l[u],s,o);return function t(){for(var n=0;n<c;++n)e.removeEventListener(l[n],s,o);!function(e,t){if(!e)return!1;for(var n=Object.keys(e),i=n.length,a=0;a<i;++a){var o=n[a];if(e[o]===t)return delete e[o]}}(this,t)}}var ie={};function ae(e,t){var n=ne(arguments.length>2&&void 0!==arguments[2]?arguments[2]:document,e,t);ie[e]||(ie[e]={count:0});var i,a=ie[e];return a.count++,a.onsubscribe||(a.onsubscribe=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},i=n.leading,a=void 0!==i&&i,o=n.trailing,r=void 0===o||o,s=n.maxWait,l=void 0!==s&&s,c=void 0,d=void 0,h=void 0,f=void 0,p=!1,m=t!==l,v=!1!==l;function b(){for(var n=arguments.length,i=Array(n),o=0;o<n;o++)i[o]=arguments[o];return c=i,m&&(d&&clearTimeout(d),d=setTimeout(g,t)),v&&!h&&(h=setTimeout(y,l)),a&&!p&&(p=!0,f=e.apply(void 0,u(c))),f}return b.flush=function(){return(d||h)&&(f=e.apply(void 0,u(c))),x(),f},b.cancel=x,b;function g(){h&&clearTimeout(h),_()}function y(){d&&clearTimeout(d),_()}function _(){r&&(f=e.apply(void 0,u(c))),d=null,h=null,p=!1}function x(){d&&(clearTimeout(d),d=null),h&&(clearTimeout(h),h=null),c=void 0,p=!1}}((i=e,function(){J(document,"pubsub/onsubscribe",i),J(document,"pubsub/onsubscribe/"+i,i),ie[i]&&delete ie[i].unsubscribe}),100)),a.onsubscribe(),function(){a.count--,n.call(this),a.count<=0&&delete ie[e]}}function oe(){return Reflect.construct(HTMLElement,[],this.__proto__.constructor)}ne(document,"pubsub/onsubscribe",function(e){var t=e.detail;ie[t]||(ie[t]={count:0});var n=ie[t],i=n.queue;Array.isArray(i)&&(i.forEach(function(e){var t=l(e,3),n=t[0],i=t[1],a=t[2];J(a,n,i)}),delete n.queue)}),Object.setPrototypeOf(oe.prototype,HTMLElement.prototype),Object.setPrototypeOf(oe,HTMLElement);var re={},se="throwed",le=function(e){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",i=arguments[1];n(this,t);var a=s(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return a._makeContextReady=a._makeContextReady.bind(a),a._initialise(e,i),a}return r(t,oe),i(t,[{key:"_initialise",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;this.initialClassName=this.className,this._styles=e,this._template=t}},{key:"connectedCallback",value:function(){this._appendStyles(),this.render(),this.contextCallback&&this._makeContextReady()}},{key:"disconnectedCallback",value:function(){this.unContextEnabled&&this.unContextEnabled()}},{key:"_appendStyles",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this;if(this._styles){var t=document.createElement("style"),n=document.createTextNode(this._styles);t.appendChild(n),e.insertAdjacentElement?e.insertAdjacentElement("afterbegin",t):e.appendChild(t)}}},{key:"render",value:function(){var e=this;if(!this._hasRendered){var t=this._template;if(t)try{for(var n=document.createDocumentFragment();this.firstChild;)n.appendChild(this.firstChild);var i=t(function(e){if(!e.hasAttributes)return null;for(var t={},n=e.attributes,i=n.length,a=0;a<i;++a){var o=n[a];t[o.name]=H(o)}return t}(this),n);if(Array.isArray(i))i.forEach(function(t){e.appendChild(t)});else if(i){if("string"==typeof i){var a=new Error(se);throw console.error("\n%cWeb Component %c"+this.nodeName+"%c does not accept string as a return from a template. Maybe use bel?\n\nStack Trace: "+a.stack+"\n","color: #580000; font-size: 14px; line-height:16px;","background: #8b0000; color: #FFF; font-size: 14px; line-height:16px;","color: #580000; font-size: 14px; line-height:16px;"),a}this.appendChild(i)}this._hasRendered=!0}catch(a){a.message!==se&&console.error("\n%cWeb Component %c"+this.nodeName+"%c has an error while loading its template:\n"+a+"\n\nStack Trace: "+a.stack+"\n","color: #580000; font-size: 14px; line-height:16px;","background: #8b0000; color: #FFF; font-size: 14px; line-height:16px;","color: #580000; font-size: 14px; line-height:16px;")}}}},{key:"enableContext",value:function(){var e=this.nodeName.toLowerCase();this.__isContext=!0,this.__contextName=e,function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:document;ie[e]||(ie[e]={count:0,queue:[]});var i=ie[e].queue;Array.isArray(i)?i.push([e,t,n]):J(n,e,t)}("context/enabled",e)}},{key:"selectContext",value:function(e){this.__selectedContext=e.toLowerCase()}},{key:"_makeContextReady",value:function(){var e=this,t=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}).detail;this.contextNode&&(clearTimeout(this.timeoutId),this.timeoutId=setTimeout(function(){e.contextCallback(e.contextNode,t)},10)),this.unContextEnabled&&this.unContextEnabled(),this.unContextEnabled=ae("context/enabled",this._makeContextReady)}},{key:"contextNode",get:function(){for(var e=this.__selectedContext,t=this.parentNode;t&&(!t.__isContext||e&&e!==t.__contextName);)t=t.parentNode;return!(!t||!t.__isContext)&&t}}],[{key:"uuidv4",value:function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(e){var t=16*Math.random()|0;return("x"==e?t:3&t|8).toString(16)})}}]),t}(),ce=(function(e){function t(){return n(this,t),s(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}r(t,le),i(t,[{key:"connectedCallback",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"open",t=this.attachShadow({mode:e});this._appendStyles(t),this.render()}}])}(),function(e){function t(){return n(this,t),s(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return r(t,le),i(t,[{key:"_appendStyles",value:function(){t.appendGlobalStyles(this._styles,this.nodeName)}}],[{key:"appendGlobalStyles",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:le.uuidv4();if(e&&!re[e]){var n=document.createElement("style"),i=document.createTextNode(e);n.appendChild(i),n.setAttribute("data-c-name",t.toLowerCase()),document.querySelector("head").appendChild(n),re[e]=!0}}}]),t}()),ue=function(){function e(t,i){n(this,e),this.rootNode=t,this.options=a({},e.DEFAULTS,i),this.isOpen=!1,this.opened=[],this.handleCategoryClick=this.handleCategoryClick.bind(this),this.handleBackClick=this.handleBackClick.bind(this),this.open=this.open.bind(this),this.close=this.close.bind(this),this.fadeFinish=this.fadeFinish.bind(this),this.init()}return i(e,[{key:"init",value:function(){this.nav=this.rootNode.querySelector(this.options.nav),this.on()}},{key:"on",value:function(){this.off(),this.unCategoryClick=ne(this.nav,"click",this.options.category,this.handleCategoryClick),this.unBackClick=ne(this.nav,"click",this.options.back,this.handleBackClick)}},{key:"off",value:function(){this.unCategoryClick&&this.unCategoryClick(),this.unBackClick&&this.unBackClick(),this.offContextEnabled()}},{key:"onContextEnabled",value:function(){this._contextNode&&(this.offContextEnabled(),this.unSubscribeOpen=ae("header-mobile/open",this.open,this._contextNode),this.unSubscribeClose=ae("header-mobile/close",this.close,this._contextNode),this.unSubscribeFadeFinish=ae("header-mobile/fade-finish",this.fadeFinish,this._contextNode))}},{key:"offContextEnabled",value:function(){this.unSubscribeOpen&&this.unSubscribeOpen(),this.unSubscribeClose&&this.unSubscribeClose()}},{key:"open",value:function(){this.isOpen=!0}},{key:"close",value:function(){this.isOpen=!1}},{key:"fadeFinish",value:function(){if(!this.isOpen)for(var e=this.opened.pop();e;){Y(e.parentNode,this.options.isSubMenuOpenClass),e=this.opened.pop()}}},{key:"handleCategoryClick",value:function(e,t){e.preventDefault();var n,i,a=t.parentNode;if(a.lastChild!==t){var o=this.rootNode.parentNode.parentNode,r=o.scrollTop;n=a,i=this.options.isSubMenuOpenClass,Q(n,i)||(n.className+=" "+i),o.scrollTop=0,this.opened.push({parentNode:a,scrollTop:r})}}},{key:"handleBackClick",value:function(e){e.preventDefault();var t=this.opened.pop(),n=t.parentNode,i=t.scrollTop,a=this.rootNode.parentNode.parentNode;Y(n,this.options.isSubMenuOpenClass),a.scrollTop=i}},{key:"destroy",value:function(){this.off(),delete this.rootNode,delete this.nav,delete this._contextNode,delete this.opened}},{key:"contextNode",set:function(e){this._contextNode=e,this.onContextEnabled()}}]),e}();ue.DEFAULTS={nav:".js-header-mobile-navigation__nav",category:"js-header-mobile-navigation__category",back:"js-header-mobile-navigation__back",isSubMenuOpenClass:"is-header-mobile-navigation-nav-open"};var de,he,fe,pe=function(e){function t(){n(this,t);var e=s(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,h,I));return e.selectContext("axa-header"),e}return r(t,ce),i(t,[{key:"connectedCallback",value:function(){o(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"connectedCallback",this).call(this);var e=H(this,"relative");this.className=d(this.initialClassName,"m-header-mobile-navigation",{"m-header-mobile-navigation--relative":e}),this.interaction=new ue(this)}},{key:"contextCallback",value:function(e){this.interaction.contextNode=e}},{key:"disconnectedCallback",value:function(){o(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"disconnectedCallback",this).call(this),this.interaction.destroy(),delete this.interaction}}]),t}();return de=function(){window.customElements.define("axa-header-mobile-navigation",pe)},he=0,fe=function(){if(0===he)try{de.apply(void 0,arguments),he+=1,document.removeEventListener("DOMContentLoaded"),document.removeEventListener("WebComponentsReady")}catch(e){}},document.addEventListener("DOMContentLoaded",fe,!1),document.addEventListener("WebComponentsReady",fe,!1),pe}();
