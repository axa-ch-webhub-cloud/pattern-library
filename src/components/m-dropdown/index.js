import classnames from 'classnames';
import styles from './index.scss';
import { BaseComponentGlobal } from '../_abstract/component-types';
import DropDown from './js/drop-down';

const arrowIcon = `<svg class="m-dropdown__icon">
  <use xlink:href="#src--assets--icons--angle-bracket-right" />
</svg>`;

class Dropdown extends BaseComponentGlobal {
  constructor() {
    super(styles);

    this.initialInnerHTML = this.innerHTML;
  }

  connectedCallback() {
    super.connectedCallback();

    this.dropDown = new DropDown(this, {
      containerClass: null,
    });
  }

  disconnectedCallback() {
    this.dropDown.destroy();
    delete this.dropDown;
  }

  _render() {
    const { initialInnerHTML } = this;
    const title = this.getAttribute('title');
    const inFlow = this.hasAttribute('in-flow');
    const tag = this.getAttribute('tag') || 'ul';

    this.className = classnames('m-dropdown js-dropdown', {
      'm-dropdown--in-flow': inFlow,
    });

    this.innerHTML = `<button role="button" class="m-dropdown__toggle js-dropdown__toggle">
        ${title}${arrowIcon}
      </button>
      <${tag} class="m-dropdown__content">${initialInnerHTML}</${tag}>`;
  }
}

window.customElements.define('axa-dropdown', Dropdown);

BaseComponentGlobal.appendGlobalStyles(styles);
