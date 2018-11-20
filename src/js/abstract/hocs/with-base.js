import getId from '../utils/get-id';

const withBase = HTMLElement =>
  /**
   * Base class {BaseComponent}.
   * This class handles proper context upgrading within the constructor,
   * it adds a unique `_id` and provides a static UUID generator.
   *
   * @link https://github.com/WebReflection/document-register-element#v1-caveat
   */
  class WithBase extends HTMLElement {
    constructor(self) {
      // eslint-disable-next-line no-param-reassign
      self = super(self);

      self.init();

      return self;
    }

    init() {
      this._id = getId(this.nodeName);
      this._initialised = true;
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
