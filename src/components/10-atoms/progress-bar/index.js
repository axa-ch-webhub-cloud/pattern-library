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
      fullWidth: { type: Boolean, defaultValue: false },
      value: { type: String },
      max: { type: String },
      text: { type: String },
    };
  }

  constructor() {
    super();
    applyDefaults(this);
  }

  calculatePercantage() {
    //checks if the max value is empty or if its not a number
    if (this.max != '') {
      //makes sure that the value is not bigger than the max value
      if (Number(this.value) > Number(this.max)) {
        return 100;
      } else {
        //calculates the percantage
        return (this.value / this.max) * 100;
      }
      //checks if the value is blank (not defined)
    } else if (this.value === '') {
      return 0;
    } else {
      //checks if the value is over 100 when there is no max value
      if (Number(this.value) > 100) {
        return 100;
      } else {
        return this.value;
      }
    }
  }

  render() {
    const classesBorder = {
      'a-progress-bar--small': this.small,
      'a-progress-bar--full-width': this.fullWidth,
    };

    const classesLoader = {
      'a-progress-bar--small': this.small,
      'a-progress-bar--full-width-loader': this.fullWidth,
      'a-progress-bar--full-width-loader-max':
        this.fullWidth && this.value >= 100,
    };

    return html`
      <article>
        <div class="a-progress-bar--border ${classMap(classesBorder)}">
          <div
            class="a-progress-bar ${classMap(classesLoader)}"
            style="width: ${this.calculatePercantage()}%"
          ></div>
        </div>
        <div
          class="${this.text === ''
            ? 'a-progress-bar--label-disabled'
            : 'a-progress-bar--label'}"
        >
          <axa-text variant="${this.small === true ? 'size-3' : 'size-2'}"
            >${this.text}</axa-text
          >
        </div>
      </article>
    `;
  }
}

defineVersioned([AXAProgressBar], __VERSION_INFO__);

export default AXAProgressBar;
