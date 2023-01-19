import applyDefaults from '../../../../utils/apply-defaults.js';

export const AXAPopupMixin = superclass =>
  class extends superclass {
    static get properties() {
      return {
        _open: { type: Boolean },
      };
    }

    constructor() {
      super();
      applyDefaults(this);
      this.handlePopupButtonClick = this.handlePopupButtonClick.bind(this);
    }

    handlePopupButtonClick() {
      this._open = !this._open;
    }
  };
