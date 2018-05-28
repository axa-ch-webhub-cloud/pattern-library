import BaseComponent from './base-component';

var memory = {};

/**
 * Base class {BaseComponentGlobal}. This class extends the {BaseComponent} and
 * applies threat the component as a global element. the use is not recommended but
 * in some occasion it can make sense. Typical use case is if a component
 * is used more than once and has lots of css.
 * The style will be included only once in the DOM and is insert in the head of the main document.
 */

var BaseComponentGlobal = function (_BaseComponent) {
  babelHelpers.inherits(BaseComponentGlobal, _BaseComponent);

  function BaseComponentGlobal() {
    babelHelpers.classCallCheck(this, BaseComponentGlobal);
    return babelHelpers.possibleConstructorReturn(this, (BaseComponentGlobal.__proto__ || Object.getPrototypeOf(BaseComponentGlobal)).apply(this, arguments));
  }

  babelHelpers.createClass(BaseComponentGlobal, [{
    key: '_appendStyles',
    value: function _appendStyles() {
      BaseComponentGlobal.appendGlobalStyles(this._styles, this.nodeName);
    }

    /**
     * @static appendGlobalStyles - This allows you to add styles also without having to
     * append the custom element into the dom
     *
     * @param  {type} styles description
     * @param  {type} nodeName description
     * @return {type}        description
     */

  }], [{
    key: 'appendGlobalStyles',
    value: function appendGlobalStyles(styles) {
      var nodeName = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : BaseComponent.uuidv4();

      if (styles) {
        if (!memory[styles]) {
          var styleNode = document.createElement('style');
          var styleText = document.createTextNode(styles);
          styleNode.appendChild(styleText);
          styleNode.setAttribute('data-c-name', nodeName.toLowerCase());
          document.querySelector('head').appendChild(styleNode);
          memory[styles] = true;
        }
      }
    }
  }]);
  return BaseComponentGlobal;
}(BaseComponent);

export default BaseComponentGlobal;