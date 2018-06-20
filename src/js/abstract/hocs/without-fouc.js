import { add, remove } from '../../class-list';

const IS_DISCONNECTED_CLASS = 'is-custom-element-disconnected';

const withoutFouc = Base =>
  /**
   * Appends an optional custom element's stylesheet to the document.
   */
  class WithStyles extends Base {
    /**
     * connectedCallback - description
     *
     * @return {type}  description
     */
    connectedCallback() {
      if (super.connectedCallback) {
        super.connectedCallback();
      }

      remove(this, IS_DISCONNECTED_CLASS);

      this._appendStyles();
    }

    /**
     * disconnectedCallback - description
     *
     * @return {type}  description
     */
    disconnectedCallback() {
      if (super.disconnectedCallback) {
        super.disconnectedCallback();
      }

      add(this, IS_DISCONNECTED_CLASS);
    }
  };

export default withoutFouc;
