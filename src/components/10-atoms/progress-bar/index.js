import { LitElement, html, css, unsafeCSS } from 'lit';
import { classMap } from 'lit/directives/class-map.js';
import { defineVersioned } from '../../../utils/component-versioning';
import applyDefaults from '../../../utils/apply-defaults';
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
    }
    if (this.value > 100) {
      return 100;
    }
    return this.value;
  }

  render() {
    const classesBorder = {
      'a-progress-bar__small': this.small,
      'a-progress-bar__border--no-border-radius': this.noBorderRadius,
    };

    const classesLoader = {
      'a-progress-bar__small': this.small,
      'a-progress-bar__loader--no-border-radius': this.noBorderRadius,
      'a-progress-bar__loader--no-border-radius-max':
        this.noBorderRadius && this.value >= (this.max === 0 ? 100 : this.max),
    };

    return html`
      <article class="a-progress-bar">
        <div class="a-progress-bar__border ${classMap(classesBorder)}">
          <div
            class="a-progress-bar__loader ${classMap(classesLoader)}"
            style="width: ${this.calculatePercantage()}%"
          ></div>
        </div>
        <div
          class="${this.text === ''
            ? 'a-progress-bar__label--hidden'
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
