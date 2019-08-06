// module globals
let openPopupInstance;

export const AXAPopupMixin = superclass =>
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

    handlePopupButtonClick = () => {
      if (!this._open) {
        if (openPopupInstance && openPopupInstance !== this) {
          console.log('AooO');
          openPopupInstance._open = false;
        }

        this._open = true;
        openPopupInstance = this;
      } else {
        openPopupInstance = null;
      }
    }
  };
