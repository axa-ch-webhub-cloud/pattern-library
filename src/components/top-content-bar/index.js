(function () {
'use strict';

var _typeof11 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

(function () {
  'use strict';

  var _typeof10 = typeof Symbol === "function" && _typeof11(Symbol.iterator) === "symbol" ? function (obj) {
    return typeof obj === "undefined" ? "undefined" : _typeof11(obj);
  } : function (obj) {
    return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof11(obj);
  };

  (function () {
    'use strict';

    var _typeof9 = typeof Symbol === "function" && _typeof10(Symbol.iterator) === "symbol" ? function (obj) {
      return typeof obj === "undefined" ? "undefined" : _typeof10(obj);
    } : function (obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof10(obj);
    };

    (function () {
      'use strict';

      var _typeof8 = typeof Symbol === "function" && _typeof9(Symbol.iterator) === "symbol" ? function (obj) {
        return typeof obj === "undefined" ? "undefined" : _typeof9(obj);
      } : function (obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof9(obj);
      };

      (function () {
        'use strict';

        var _typeof7 = typeof Symbol === "function" && _typeof8(Symbol.iterator) === "symbol" ? function (obj) {
          return typeof obj === "undefined" ? "undefined" : _typeof8(obj);
        } : function (obj) {
          return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof8(obj);
        };

        (function () {
          'use strict';

          var _typeof6 = typeof Symbol === "function" && _typeof7(Symbol.iterator) === "symbol" ? function (obj) {
            return typeof obj === "undefined" ? "undefined" : _typeof7(obj);
          } : function (obj) {
            return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof7(obj);
          };

          (function () {
            'use strict';

            var _typeof5 = typeof Symbol === "function" && _typeof6(Symbol.iterator) === "symbol" ? function (obj) {
              return typeof obj === "undefined" ? "undefined" : _typeof6(obj);
            } : function (obj) {
              return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof6(obj);
            };

            (function () {
              'use strict';

              var _typeof4 = typeof Symbol === "function" && _typeof5(Symbol.iterator) === "symbol" ? function (obj) {
                return typeof obj === "undefined" ? "undefined" : _typeof5(obj);
              } : function (obj) {
                return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof5(obj);
              };

              (function () {
                'use strict';

                var _typeof3 = typeof Symbol === "function" && _typeof4(Symbol.iterator) === "symbol" ? function (obj) {
                  return typeof obj === "undefined" ? "undefined" : _typeof4(obj);
                } : function (obj) {
                  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof4(obj);
                };

                (function () {
                  'use strict';

                  var _typeof2 = typeof Symbol === "function" && _typeof3(Symbol.iterator) === "symbol" ? function (obj) {
                    return typeof obj === "undefined" ? "undefined" : _typeof3(obj);
                  } : function (obj) {
                    return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof3(obj);
                  };

                  (function () {
                    'use strict';

                    var _typeof = typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol" ? function (obj) {
                      return typeof obj === "undefined" ? "undefined" : _typeof2(obj);
                    } : function (obj) {
                      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof2(obj);
                    };

                    (function () {
                      'use strict';

                      var _createClass = function () {
                        function defineProperties(target, props) {
                          for (var i = 0; i < props.length; i++) {
                            var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
                          }
                        }return function (Constructor, protoProps, staticProps) {
                          if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
                        };
                      }();

                      function _classCallCheck(instance, Constructor) {
                        if (!(instance instanceof Constructor)) {
                          throw new TypeError("Cannot call a class as a function");
                        }
                      }

                      function _possibleConstructorReturn(self, call) {
                        if (!self) {
                          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        }return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
                      }

                      function _inherits(subClass, superClass) {
                        if (typeof superClass !== "function" && superClass !== null) {
                          throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
                        }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
                      }

                      function _CustomElement() {
                        return Reflect.construct(HTMLElement, [], this.__proto__.constructor);
                      }

                      Object.setPrototypeOf(_CustomElement.prototype, HTMLElement.prototype);
                      Object.setPrototypeOf(_CustomElement, HTMLElement);

                      var TopContentBar = function (_CustomElement2) {
                        _inherits(TopContentBar, _CustomElement2);

                        function TopContentBar() {
                          _classCallCheck(this, TopContentBar);

                          return _possibleConstructorReturn(this, (TopContentBar.__proto__ || Object.getPrototypeOf(TopContentBar)).apply(this, arguments));
                        }

                        _createClass(TopContentBar, [{
                          key: 'connectedCallback',
                          value: function connectedCallback() {
                            var type = this.getAttribute('type');
                            var box = document.createElement('div');

                            box.className = 'o-top-content-bar__box';

                            while (this.childNodes.length) {
                              box.appendChild(this.firstChild);
                            }

                            this.className = 'o-top-content-bar o-top-content-bar--' + type;

                            this.appendChild(box);
                          }
                        }]);

                        return TopContentBar;
                      }(_CustomElement);

                      window.customElements.define('axa-top-content-bar', TopContentBar);
                    })();
                  })();
                })();
              })();
            })();
          })();
        })();
      })();
    })();
  })();
})();

}());
