/* eslint-disable import/no-extraneous-dependencies */
import AXAIcon from '@axa-ch/icon';
import { html } from 'lit-element';
import { render } from 'lit-html';
import { classMap } from 'lit-html/directives/class-map';
import {
  defineVersioned,
  versionedHtml,
} from '../../../utils/component-versioning';
import createRefId from '../../../utils/create-ref-id';
import NoShadowDOM from '../../../utils/no-shadow';
import { applyDefaults } from '../../../utils/with-react';
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
      // secondary, red,  inverted
      variant: { type: String },
      icon: { type: String },
      refId: { type: String, defaultValue: `input-file-${createRefId()}` },
      large: { type: Boolean },
      motionOff: { type: Boolean },
      disabled: { type: Boolean, reflect: true },
      accept: {
        type: String,
        defaultValue: 'image/jpg, image/jpeg, application/pdf, image/png',
      },
      capture: { type: Boolean },
      multiple: { type: Boolean },
      onChange: { type: Function, attribute: false },
    };
  }

  constructor() {
    super();

    applyDefaults(this);
    /* eslint-disable no-undef */
    defineVersioned([AXAIcon], __VERSION_INFO__, this);
    /* eslint-enable no-undef */
  }

  update(changedProperties) {
    super.update(changedProperties);
    this.customRender();
  }

  watch(mode) {
    switch (mode) {
      case 'stop':
        if (this._observer) {
          this._observer.disconnect();
        }

        break;
      case 'start':
        if (!this._observer) {
          this._observer = new MutationObserver(() => this.customRender());
        }

        this._observer.observe(this, {
          childList: true,
        });

        break;
      default:
        break;
    }
  }

  customRender() {
    this.watch('stop');

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

    const text = this.textContent.trim();
    const div = document.createElement('div');

    render(
      html`
        <label class="a-input-file ${classMap(classes)}" for="${this.refId}">
          <span class="a-input-file__flex-wrapper">
            ${icon &&
              versionedHtml(this)`
              <axa-icon class="a-input-file__icon js-input-file__icon" icon="${icon}"></axa-icon>
            `}
            ${text}
          </span>
        </label>
        <input
          type="${TYPE}"
          accept="${accept}"
          ?multiple="${multiple}"
          ?capture="${capture}"
          @change="${this.onChange}"
          class="a-input-file__input js-input-file__input"
          id="${this.refId}"
        />
      `,
      div
    );

    this.innerHTML = div.innerHTML;
    this.watch('start');
  }

  disconnectedCallback() {
    super.disconnectedCallback();

    // disconnect installed observer
    this.watch('stop');
  }
}

/* eslint-disable no-undef */
defineVersioned([AXAInputFile], __VERSION_INFO__);

export default AXAInputFile;
