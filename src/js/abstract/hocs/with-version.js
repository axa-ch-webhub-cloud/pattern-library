/* globals VERSION */

const withVersion = Base =>
  /**
   * Adds the current `version` from `package.json` to each component.
   *
   * @example
   * const AXAButton = customElements.get('axa-button');
   * console.log(AXAButton.version);
   *
   * // or by promise
   * customElements.whenDefined('axa-button')
   *   .then(() => {
   *     const AXAButton = customElements.get('axa-button');
   *     console.log(AXAButton.version);
   *     });
   */
  class WithVersion extends Base {
    static version = VERSION;
  };

export default withVersion;
