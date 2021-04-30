import { LitElement, html, css, unsafeCSS } from 'lit-element';
import { classMap } from 'lit-html/directives/class-map';
import { defineVersioned } from '../../../utils/component-versioning';
import { applyDefaults } from '../../../utils/with-react';
import styles from './index.scss';

class AXAProgressBar extends LitElement {
  static get tagName() {
    return 'axa-progress-bar';
  }

  static get styles() {
    return css`
      ${unsafeCSS(styles)}
    `;
  }

  static get properties() {
    return {
      small: { type: Boolean, defaultValue: false },
      noBorderRadius: { type: Boolean },
      value: { type: Number },
      max: { type: Number },
      text: { type: String },
    };
  }

  constructor() {
    super();
    applyDefaults(this);
  }

  calculatePercantage() {
    if (this.max !== 0) {
      if (this.value > this.max) {
        return 100;
      }
      return (this.value / this.max) * 100;
    } else if (this.value > 100) {
      return 100;
    }
    return this.value;
  }

  render() {
    const classesBorder = {
      'a-progress-bar__small': this.small,
      'a-progress-bar__no-border-radius': this.noBorderRadius,
    };

    const classesLoader = {
      'a-progress-bar__small': this.small,
      'a-progress-bar__no-border-radius-loader': this.noBorderRadius,
      'a-progress-bar__no-border-radius-loader-max':
        this.noBorderRadius && this.value >= 100,
    };

    return html`
      <article>
        <div class="a-progress-bar__border ${classMap(classesBorder)}">
          <div
            class="a-progress-bar__progress-bar ${classMap(classesLoader)}"
            style="width: ${this.calculatePercantage()}%"
          ></div>
        </div>
        <div
          class="${this.text === ''
            ? 'a-progress-bar__label-hide'
            : 'a-progress-bar__label'}"
        >
          <axa-text variant="${this.small ? 'size-3' : 'size-2'}"
            >${this.text}</axa-text
          >
        </div>
      </article>
    `;
  }
}

defineVersioned([AXAProgressBar], __VERSION_INFO__);

export default AXAProgressBar;
