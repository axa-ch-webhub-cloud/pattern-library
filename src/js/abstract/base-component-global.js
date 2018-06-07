import BaseComponent from './base-component';

const memory = {};
let styleTags;

/**
 * Base class {BaseComponentGlobal}. This class extends the {BaseComponent} and
 * applies threat the component as a global element. the use is not recommended but
 * in some occasion it can make sense. Typical use case is if a component
 * is used more than once and has lots of css.
 * The style will be included only once in the DOM and is insert in the head of the main document.
 */
export default class BaseComponentGlobal extends BaseComponent {
  _appendStyles = () => {
    BaseComponentGlobal.appendGlobalStyles(this._styles, this.nodeName);
  }

  /**
   * @static appendGlobalStyles - This allows you to add styles also without having to
   * append the custom element into the dom
   *
   * @param  {type} styles description
   * @param  {type} [nodeName=UUID] description
   * @return {type}        description
   */
  static appendGlobalStyles(styles, nodeName = BaseComponent.uuidv4()) {
    if (styles && !memory[nodeName]) {
      let target = document.head.lastChild;
      const styleNode = document.createElement('style');
      const styleText = document.createTextNode(styles);

      memory[nodeName] = true;

      styleNode.appendChild(styleText);
      styleNode.setAttribute('data-c-name', nodeName.toLowerCase());

      // It's super important that each components CSS is evaluated after our reboot.css
      // Especially regarding integration this should prevent breaking our cascade.
      if (!styleTags) {
        styleTags = document.getElementsByTagName('style');
      }

      const { length } = styleTags;

      if (length) {
        target = styleTags[length - 1];
      }

      // append directly after the last found style node
      target.parentNode.insertBefore(styleNode, target.nextSibling);
    }
  }
}
