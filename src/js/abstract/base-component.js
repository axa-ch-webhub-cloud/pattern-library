import lifecycleLogger from './utils/lifecycle-logger';

import withContext from './hocs/with-context';
import withMonkeyPatches from './hocs/with-monkey-patches';
import withUpdate from './hocs/with-update';
import withRender from './hocs/with-render';

const ids = {};
const getId = (nodeName) => {
  if (!(nodeName in ids)) {
    ids[nodeName] = 0;
  }

  return ++ids[nodeName]; // eslint-disable-line no-plusplus
};

export default withContext(withMonkeyPatches(withUpdate(withRender(class BaseComponent extends HTMLElement {
  constructor(styles = '', template) {
    super();

    this._initialise(styles, template);
    this._id = getId(this.nodeName);
  }

  /**
   * _initialise - description
   *
   * @param  {type} styles description
   * @param  {type} template description
   * @return {type}        description
   */
  _initialise(styles, template = null) {
    this._styles = styles;
    this._template = template;
    this._hasTemplate = !!template;
    this._hasRendered = false;
    this._isConnected = false;
  }

  /**
   * connectedCallback - description
   *
   * @return {type}  description
   */
  connectedCallback() {
    if (ENV !== PROD) {
      lifecycleLogger(this.logLifecycle)(`\n^^^ connectedCallback -> ${this.nodeName}#${this._id}`);
    }

    if (!this._isConnected) {
      this._isConnected = true;
    }

    this._appendStyles();
  }

  /**
   * disconnectedCallback - description
   *
   * @return {type}  description
   */
  disconnectedCallback() {
    if (ENV !== PROD) {
      lifecycleLogger(this.logLifecycle)(`$$$ disconnectedCallback -> ${this.nodeName}#${this._id}\n`);
    }

    this._isConnected = false;
  }
  /**
   * _appendStyles - description
   *
   * @return {type}  description
   */
  _appendStyles(el = this) {
    if (this._styles) {
      const styleNode = document.createElement('style');
      const styleText = document.createTextNode(this._styles);
      styleNode.appendChild(styleText);
      if (el.insertAdjacentElement) {
        el.insertAdjacentElement('afterbegin', styleNode);
      } else {
        el.appendChild(styleNode);
      }
    }
  }

  static uuidv4() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
      let r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8); // eslint-disable-line
      return v.toString(16);
    });
  }
}))));
