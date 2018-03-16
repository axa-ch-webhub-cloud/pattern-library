import BaseComponent from './base-component';

/**
 * Base class {BaseComponentShadow}. This class extends the {BaseComponent} and
 * applies a shadow dom to it. Please be aware that only a few browser
 * implements this correctly. With other browser works as well, apart of the global contamination.
 * So if a inner shadow override a upper shadow and has the same class, the upper will be overridden from the
 * inners class as it has only one DOM.
 *
 * https://caniuse.com/#feat=shadowdom
 */
export default class BaseComponentShadow extends BaseComponent {
  /**
   * connectedCallback - description
   *
   * @param  {type} mode = 'open' description
   * @return {type}               description
   */
  connectedCallback(mode = 'open') {
    const shadowRoot = this.attachShadow({ mode });
    this._appendStyles(shadowRoot);
    this.render();
  }
}
