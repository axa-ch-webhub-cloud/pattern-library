/* eslint-disable import/no-extraneous-dependencies */
import AXAIcon from '@axa-ch/icon';
import { html } from 'lit';
import { classMap } from 'lit/directives/class-map.js';
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
      text: { type: String },
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

    defineVersioned([AXAIcon], __VERSION_INFO__, this);
  }

  render() {
    const {
      text = '',
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
    `;
  }
}

defineVersioned([AXAInputFile], __VERSION_INFO__);

export default AXAInputFile;
