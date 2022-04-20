// module globals (next minor)
// let openPopupInstance;
//
import { applyDefaults } from '../../../../utils/with-react';

export const AXAPopupMixin = (superclass) =>
  class extends superclass {
    static get properties() {
      return {
        _open: { type: Boolean },
      };
    }

    constructor() {
      super();
      applyDefaults(this);
    }

    handlePopupButtonClick = () => {
      this._open = !this._open;

      // (next minor)
      // if (!this._open) {
      //   if (openPopupInstance && openPopupInstance !== this) {
      //     console.log('AooO');
      //     openPopupInstance._open = false;
      //   }
      //
      //   this._open = true;
      //   openPopupInstance = this;
      // } else {
      //   openPopupInstance = null;
      // }
    };
  };
