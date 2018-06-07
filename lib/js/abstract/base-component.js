import _Object$setPrototypeOf from 'babel-runtime/core-js/object/set-prototype-of';
import _Reflect$construct from 'babel-runtime/core-js/reflect/construct';
import _Object$getPrototypeOf from 'babel-runtime/core-js/object/get-prototype-of';
import _classCallCheck from 'babel-runtime/helpers/classCallCheck';
import _createClass from 'babel-runtime/helpers/createClass';
import _possibleConstructorReturn from 'babel-runtime/helpers/possibleConstructorReturn';
import _inherits from 'babel-runtime/helpers/inherits';

function _CustomElement() {
  return _Reflect$construct(HTMLElement, [], this.__proto__.constructor);
}

;

_Object$setPrototypeOf(_CustomElement.prototype, HTMLElement.prototype);

_Object$setPrototypeOf(_CustomElement, HTMLElement);

import getId from './utils/get-id';
import compose from '../compose';

import withContext from './hocs/with-context';
import withMonkeyPatches from './hocs/with-monkey-patches';
import withUpdate from './hocs/with-update';
import withRender from './hocs/with-render';
import withStyles from './hocs/with-styles';

var withAllHocs = compose(withContext, withMonkeyPatches, withUpdate, withRender, withStyles);

/**
 * Base class {BaseComponent}. This class checks if a template is set in the custom element
 * and if yes appends it. It also appends custom styles to the top of the dom tree.
 */

var BaseComponent = function (_CustomElement2) {
  _inherits(BaseComponent, _CustomElement2);

  function BaseComponent(options) {
    _classCallCheck(this, BaseComponent);

    var _this = _possibleConstructorReturn(this, (BaseComponent.__proto__ || _Object$getPrototypeOf(BaseComponent)).call(this, options));

    _this._id = getId(_this.nodeName);
    return _this;
  }

  _createClass(BaseComponent, null, [{
    key: 'uuidv4',
    value: function uuidv4() {
      var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        var r = Math.random() * 16 | 0,
            v = c == 'x' ? r : r & 0x3 | 0x8; // eslint-disable-line
        return v.toString(16);
      });

      return uuid;
    }
  }]);

  return BaseComponent;
}(_CustomElement);

export default withAllHocs(BaseComponent);