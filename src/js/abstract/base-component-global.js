import BaseComponent from './base-component';

const memory = {};

/**
 * Base class {BaseComponentGlobal}. This class extends the {BaseComponent} and
 * applies threat the component as a global element. the use is not recommended but
 * in some occasion it can make sense. Typical use case is if a component
 * is used more than once and has lots of css.
 * The style will be included only once in the DOM and is insert in the head of the main document.
 */
export default class BaseComponentGlobal extends BaseComponent {
  _appendStyles() {
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
  static appendGlobalStyles(styles, nodeName = BaseComponent.uuidv4()) {
    if (styles) {
      if (!memory[styles]) {
        const styleNode = document.createElement('style');
        const styleText = document.createTextNode(styles);
        styleNode.appendChild(styleText);
        styleNode.setAttribute('data-c-name', nodeName.toLowerCase());
        document.querySelector('head').insertAdjacentElement('afterbegin', styleNode);
        memory[styles] = true;
      }
    }
  }
}
