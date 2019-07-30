/* eslint-disable prefer-const */
/* eslint-disable import/no-mutable-exports */
export let AXAPopupMixin = superclass =>
  class extends superclass {
    static get properties() {
      return {
        _open: { type: Boolean },
      };
    }

    constructor() {
      super();
      this._open = false;
    }

    handlePopupClick = () => (this._open = !this._open);
  };
