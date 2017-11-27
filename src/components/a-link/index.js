import classnames from 'classnames';

import styles from './index.scss';
import { BaseComponentGlobal } from '../_abstract/component-types';

class Link extends BaseComponentGlobal {
  constructor() {
    super(styles);

    this.initialInnerHTML = this.innerHTML;
  }

  _render() {
    const { initialInnerHTML } = this;
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
      arrow = '<axa-icon id="arrow" classes="a-link__arrow"></axa-icon>';
    }

    if (listed) {
      listed = '<axa-icon id="arrow" classes="a-link__listed"></axa-icon>';
    }

    this.innerHTML = `<a href="#" class="${classes}">
      ${listed}
      ${initialInnerHTML}
      ${arrow}
    </a>`;
  }
}

window.customElements.define('axa-link', Link);

BaseComponentGlobal.appendGlobalStyles(styles);
