import classnames from 'classnames';

import styles from './index.scss';
import { BaseComponentGlobal } from '../_abstract/component-types';

// @Todo: replace by proper icon system as soon as it is ready
const arrowIcon = `
<svg class="a-button__arrow">
  <use xlink:href="#src--assets--icons--arrow" />
</svg>`;

class Button extends BaseComponentGlobal {
  constructor() {
    super(styles);

    this.initialInnerHTML = this.innerHTML;
  }

  _render() {
    const initialInnerHTML = this.initialInnerHTML;
    const tag = this.getAttribute('tag') || 'button';
    const color = this.getAttribute('color');
    const size = this.getAttribute('size');
    const ghost = this.hasAttribute('ghost');
    const motion = this.hasAttribute('motion');
    let arrow = this.hasAttribute('arrow') || '';
    const classes = classnames('a-button', {
      [`a-button--${color}`]: color,
      [`a-button--${size}`]: size,
      'a-button--ghost': ghost,
      'a-button--motion': motion,
      'a-button--arrow': arrow,
    });

    if (arrow) {
      arrow = arrowIcon;
    }

    if (tag === 'button') {
      this.innerHTML = `<button type="button" class="${classes}">
        ${initialInnerHTML}
        ${arrow}
      </button>`;
    } else if (tag === 'a') {
      this.innerHTML = `<a href="#" class="${classes}">
        ${initialInnerHTML}
        ${arrow}
      </a>`;
    }
  }
}

window.customElements.define('axa-button', Button);

BaseComponentGlobal.appendGlobalStyles(styles);
