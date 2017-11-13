import classnames from 'classnames';

import styles from './index.scss';
import { BaseComponentGlobal } from '../_abstract/component-types';

// @Todo: replace by proper icon system as soon as it is ready
const arrowIcon = `<svg xmlns="http://www.w3.org/2000/svg" class="a-link__arrow" viewBox="0 0 32 32">
  <path d="M30.533 16.8c.333-.533.267-1.267-.2-1.667l-11.4-11.4c-1.2-1.2-3.133.667-1.867 1.867l9.133 9.133H2.666c-1.733 0-1.733 2.667 0 2.667h23.533l-9.133 9.133c-1.2 1.2.667 3.133 1.867 1.867l11.4-11.4.2-.2z"></path>
</svg>`;
const listedIcon = `<svg xmlns="http://www.w3.org/2000/svg" class="a-link__listed" viewBox="0 0 32 32">
  <path d="M30.533 16.8c.333-.533.267-1.267-.2-1.667l-11.4-11.4c-1.2-1.2-3.133.667-1.867 1.867l9.133 9.133H2.666c-1.733 0-1.733 2.667 0 2.667h23.533l-9.133 9.133c-1.2 1.2.667 3.133 1.867 1.867l11.4-11.4.2-.2z"></path>
</svg>`;

class Button extends BaseComponentGlobal {
  constructor() {
    super(styles);

    this.initialInnerHTML = this.innerHTML;
  }

  _render() {
    const initialInnerHTML = this.initialInnerHTML;
    const color = this.getAttribute('color');
    const size = this.getAttribute('size');
    const motion = this.hasAttribute('motion');
    let arrow = this.hasAttribute('arrow') || '';
    let listed = this.hasAttribute('listed') || '';
    const classes = classnames('a-link', {
      [`a-link--${color}`]: color,
      [`a-link--${size}`]: size,
      'a-link--motion': motion,
      'a-link--arrow': arrow,
      'a-link--listed': listed,
    });

    if (arrow) {
      arrow = arrowIcon;
    }

    if (listed) {
      listed = listedIcon;
    }

    this.innerHTML = `<a href="#" class="${classes}">
      ${listed}
      ${initialInnerHTML}
      ${arrow}
    </a>`;
  }
}

window.customElements.define('axa-link', Button);
