import getId from './utils/get-id';
import lifecycleLogger from './utils/lifecycle-logger';

import withContext from './hocs/with-context';
import withMonkeyPatches from './hocs/with-monkey-patches';
import withUpdate from './hocs/with-update';
import withRender from './hocs/with-render';
import withStyles from './hocs/with-styles';

/**
 * Base class {BaseComponent}. This class checks if a template is set in the custom element
 * and if yes appends it. It also appends custom styles to the top of the dom tree.
 */
class BaseComponent extends HTMLElement {
  constructor({ styles = '', template, ...options } = {}) {
    super(options);

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

  static uuidv4() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
      let r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8); // eslint-disable-line
      return v.toString(16);
    });
  }
}

export default withContext(withMonkeyPatches(withUpdate(withRender(withStyles(BaseComponent)))));
