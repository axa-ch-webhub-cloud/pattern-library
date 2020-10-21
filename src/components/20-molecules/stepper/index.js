/* eslint-disable import/no-extraneous-dependencies */
import { CheckSvg } from '@axa-ch/materials/icons';
import { css, html, LitElement, svg, unsafeCSS } from 'lit-element';
import { defineVersioned } from '../../../utils/component-versioning';
import { applyDefaults } from '../../../utils/with-react';
import styles from './index.scss';

const checkIcon = svg([CheckSvg]);

class AXAStepper extends LitElement {
  static get tagName() {
    return 'axa-stepper';
  }

  static get styles() {
    return css`
      ${unsafeCSS(styles)}
    `;
  }

  static get properties() {
    return {
      steps: { type: Array },
      stepActive: { type: Number },
      stepProgress: { type: Number },
    };
  }

  constructor() {
    super();
    applyDefaults(this);
  }

  render() {
    const { min, max, floor } = Math;
    let { steps, stepActive, stepProgress } = this;

    stepActive = floor(max(stepActive, 1));
    stepProgress = max(min(stepProgress, 1), 0);

    steps = steps.map((text, index) => {
      const currentStep = index + 1;

      let state = 'active';
      let symbol = html`
        <span class="m-stepper__circle">${currentStep}</span>
      `;

      if (currentStep < stepActive) {
        state = 'done';
        symbol = checkIcon;
      } else if (currentStep > stepActive) {
        state = 'inactive';
      }

      return html`
        <div class="m-stepper__step m-stepper__step--${state}">
          ${symbol}<span class="m-stepper__text">${text}</span>
        </div>
      `;
    });

    const progress = (100 / steps.length) * (stepActive - 1 + stepProgress);

    return html`
      <div class="m-stepper">
        <div class="m-stepper__wrapper">
          ${steps}
        </div>
        <div class="m-stepper__progressbar">
          <div class="m-stepper__progress" style="width: ${progress}%"></div>
        </div>
      </div>
    `;
  }
}

/* eslint-disable no-undef */
defineVersioned([AXAStepper], __VERSION_INFO__);
export default AXAStepper;
