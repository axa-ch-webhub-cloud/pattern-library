import { applyDefaults } from '../../../../utils/with-react';

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
