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

    // ensure it's a positive integer
    stepActive = floor(max(stepActive, 1));

    // bound stepProgress between 0 and 1, inclusive
    stepProgress = max(min(stepProgress, 1), 0);

    steps = steps.map((text, index) => {
      const currentStep = index + 1;

      // default values: step is active
      let state = 'active';
      let symbol = html`
        <span class="m-stepper__circle js-stepper__circle">${currentStep}</span>
      `;

      // check whether this step is active
      if (currentStep < stepActive) {
        // a step after this one is active -> this one should be marked as done
        state = 'done';
        symbol = checkIcon;
      } else if (currentStep > stepActive) {
        // a step before this one is active -> this one should be marked as inactive
        state = 'inactive';
      }

      return html`
        <div class="m-stepper__step m-stepper__step--${state} js-stepper__step">
          ${symbol}<span class="m-stepper__text js-stepper__text">${text}</span>
        </div>
      `;
    });

    // convert stepper state to progress-bar length (in percent)
    const progress = (100 / steps.length) * (stepActive - 1 + stepProgress);

    return html`
      <div class="m-stepper">
        <div class="m-stepper__wrapper">
          ${steps}
        </div>
        <div class="m-stepper__progressbar">
          <div
            class="m-stepper__progress js-stepper__progress"
            style="width: ${progress}%"
          ></div>
        </div>
      </div>
    `;
  }
}

/* eslint-disable no-undef */
defineVersioned([AXAStepper], __VERSION_INFO__);
export default AXAStepper;
