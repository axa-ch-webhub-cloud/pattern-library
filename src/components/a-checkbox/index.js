import { BaseComponent } from '../_abstract/component-types';
import on from '../../js/on';
import styles from './index.scss';

const KEYCODE = {
  SPACE: 32,
};


class Checkbox extends BaseComponent {
  static get observedAttributes() {
    return ['checked', 'disabled'];
  }

  constructor() {
    super();

    const template = document.createElement('template');
    template.innerHTML = `<style>${styles}</style>`;

    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }

  _render() {
    if (!this.hasAttribute('role')) {
      this.setAttribute('role', 'checkbox');
    }

    if (!this.hasAttribute('tabindex')) {
      this.setAttribute('tabindex', '0');
    }

    this._upgradeProperty('checked');
    this._upgradeProperty('disabled');

    on(this, 'keyup', null, this._onKeyUp);
    on(this, 'click', null, this._onClick);
  }

  _upgradeProperty(prop) {
    if (Object.prototype.hasOwnProperty.call(this, prop)) {
      const value = this[prop];
      delete this[prop];
      this[prop] = value;
    }
  }

  attributeChangedCallback(name, oldValue, newValue) {
    const hasValue = newValue !== null;
    switch (name) {
      case 'checked':
        this.setAttribute('aria-checked', hasValue);
        break;
      case 'disabled':
        this.setAttribute('aria-disabled', hasValue);
        if (hasValue) {
          this.removeAttribute('tabindex');
          this.blur();
        } else {
          this.setAttribute('tabindex', '0');
        }
        break;
      default:
        break;
    }
  }

  _onKeyUp(event) {
    if (event.altKey) {
      return;
    }

    switch (event.keyCode) {
      case KEYCODE.SPACE:
        event.preventDefault();
        this._toggleChecked();
        break;
      default:
        break;
    }
  }

  _onClick(event) {
    this._toggleChecked();
  }

  _toggleChecked() {
    if (this.disabled)
      return;
    this.checked = !this.checked;
    this.dispatchEvent(new CustomEvent('change', {
      detail: {
        checked: this.checked,
      },
      bubbles: true,
    }));
  }

  set checked(value) {
    const isChecked = Boolean(value);
    if (isChecked) {
      this.setAttribute('checked', '');
    } else {
      this.removeAttribute('checked');
    }
  }

  get checked() {
    return this.hasAttribute('checked');
  }

  set disabled(value) {
    const isDisabled = Boolean(value);
    if (isDisabled) {
      this.setAttribute('disabled', '');
    } else {
      this.removeAttribute('disabled');
    }
  }

  get disabled() {
    return this.hasAttribute('disabled');
  }
}

window.customElements.define('axa-checkbox', Checkbox);
