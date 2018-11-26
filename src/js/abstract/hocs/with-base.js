import getId from '../utils/get-id';

const withBase = HTMLElement =>
  /**
   * Base class {BaseComponent}.
   * This class handles proper context upgrading fir init(),
   * it adds a unique `_id` and provides a static UUID generator.
   *
   * **IMPORTANT:** To make extended built-in elements and polyfilled browser working properly,
   * we can't rely on constructor(), due to context issues.
   *
   * @link https://github.com/WebReflection/document-register-element#v1-caveat
   * @link: https://github.com/ungap/custom-elements-builtin#constructor-caveat
   */
  class WithBase extends HTMLElement {
    init() {
      this._id = getId(this.nodeName);
      this._initialised = true;
    }

    // super important lazy initialize only once as need,
    // either upon connection
    connectedCallback() {
      if (!this._initialised) {
        this.init();
      }
    }

    // of upon attribute change (can happen before connection if not live)
    attributeChangedCallback() {
      if (!this._initialised) {
        this.init();
      }
    }

    static uuidv4() {
      const uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
        let r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8); // eslint-disable-line
        return v.toString(16);
      });

      return uuid;
    }
  };

export default withBase;
