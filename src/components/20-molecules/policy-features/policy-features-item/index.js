import { LitElement, html, css, unsafeCSS, svg } from 'lit-element';
import { classMap } from 'lit-html/directives/class-map';
// eslint-disable-next-line import/no-extraneous-dependencies
import defineOnce from '../../../../utils/define-once';
import styles from './index.scss';
import { xhrCall } from '../../../../utils/requests';

class AXAPolicyFeaturesItem extends LitElement {
  static get tagName() {
    return 'axa-policy-features-item';
  }

  static get styles() {
    return css`
      ${unsafeCSS(styles)}
    `;
  }

  static get properties() {
    return {
      title: { type: String },
      description: { type: String },
      icon: { type: String },
      _loadedSvg: { type: String },
    };
  }

  constructor() {
    super();
    this.title = '';
    this.icon = '';
    this.description = '';
    this._loadedSvg = null;
    this._parentVariant = '';
  }

  firstUpdated() {
    const { icon } = this;

    if (/\.svg/.test(icon)) {
      xhrCall(icon).then(result => {
        this._loadedSvg = result;
      });
    } else if (/<svg/.test(icon)) {
      this._loadedSvg = icon;
    }

    // to handle svg fill color
    this._parentVariant = this.parentNode.getAttribute('variant');
  }

  render() {
    const { _loadedSvg, _parentVariant, title, description } = this;

    const classes = {
      'm-policy-features-item__icon': true,
      'm-policy-features-item__icon__style-axa-blue': _parentVariant === 'axa-blue',
      'm-policy-features-item__icon__style-wild-sand': _parentVariant === 'wild-sand',
      'm-policy-features-item__icon__style-white': _parentVariant === 'white',
    };

    return html`
      <section class="m-policy-features-item">
        <div
          class="${classMap(classes)}"
        >
          ${_loadedSvg && svg([_loadedSvg])}
        </div>
        <h1 class="m-policy-features-item__title">${title}</h1>
        <p class="m-policy-features-item__description">${description}</p>
      </section>
    `;
  }
}

defineOnce(AXAPolicyFeaturesItem.tagName, AXAPolicyFeaturesItem);

export default AXAPolicyFeaturesItem;
