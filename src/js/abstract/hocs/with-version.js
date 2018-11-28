/* globals VERSION */

const withVersion = Base =>
  /**
   * Add the current `version` from `package.json` to each component.
   */
  class WithVersion extends Base {
    static version = VERSION;
  };

export default withVersion;
