import { html } from 'lit-element';
import { classMap } from 'lit-html/directives/class-map';
import { unsafeHTML } from 'lit-html/directives/unsafe-html';
/* eslint-disable import/no-extraneous-dependencies */
import '@axa-ch/icon';
import defineOnce from '../../../utils/define-once';
import NoShadowDOM from '../../../utils/no-shadow';
import styles from './index.scss';

const TYPE = 'file';
class AXAInputFile extends NoShadowDOM {
  static get tagName() {
    return 'axa-input-file';
  }

  static get styles() {
    return styles;
  }

  static get properties() {
    return {
      // secondary, red,  inverted, inverted-green, inverted-dark-blue
      variant: { type: String },
      icon: { type: String },
      id: { type: String },
      large: { type: Boolean },
      motionOff: { type: Boolean },
      disabled: { type: Boolean, reflect: true },
      accept: { type: String },
      capture: { type: Boolean },
      multiple: { type: Boolean },
    };
  }

  constructor() {
    super();
    this.variant = '';
    this.icon = '';
    this.refId =
      this.id ||
      `input-file-${Math.random()
        .toString(36)
        .slice(2)}`;
    this.large = false;
    this.motionOff = false;
    this.disabled = false;
    this.accept = 'image/jpg, image/jpeg, application/pdf, image/png';
    this.capture = false;
    this.multiple = false;
    this.onChange = () => {};
  }

  render() {
    const {
      large,
      motionOff,
      disabled,
      variant = '',
      icon = '',
      accept,
      capture,
      multiple,
    } = this;

    const classes = {
      'a-input-file--secondary': variant === 'secondary',
      'a-input-file--red': variant === 'red',
      'a-input-file--inverted': variant === 'inverted',
      'a-input-file--large': large,
      'a-input-file--motion': !motionOff,
      'a-input-file--disabled': disabled,
    };

    return html`
      <label class="a-input-file ${classMap(classes)}" for="${this.refId}">
        ${icon &&
          html`
            <axa-icon class="a-input-file__icon" icon="${icon}"></axa-icon>
          `}
        ${unsafeHTML(this.innerHTML)}
      </label>
      <input
        type="${TYPE}"
        accept="${accept}"
        ?multiple="${multiple}"
        ?capture="${capture}"
        @change="${this.onChange}"
        class="a-input-file__input"
        id="${this.refId}"
      />
    `;
  }
}

defineOnce(AXAInputFile.tagName, AXAInputFile);

export default AXAInputFile;
