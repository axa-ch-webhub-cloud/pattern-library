const withDataSeleniumId = Base =>
  /**
   * Base class {WithBaseGlobal}. This class extends the {Base} and
   * applies styles globally by injecting them within `<head>` section.
   * This is the recommended approach.
   */
  class WithDataSeleniumId extends Base {

    connectedCallback() {
      if (super.connectedCallback) {
        super.connectedCallback();
      }

      const { constructor: { tagName } } = this;
      const DATA_SELENIUMID = 'data-seleniumid';
      const ID = 'id';

      if(!this.hasAttribute(DATA_SELENIUMID) ){
        if(this.hasAttribute(ID)) {
          this.setAttribute(DATA_SELENIUMID, this.getAttribute(ID));
        } else {
          this.setAttribute(DATA_SELENIUMID, tagName);
        }
      }
    }

  };

export default withDataSeleniumId;
