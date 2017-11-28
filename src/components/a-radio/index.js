import on from '../../js/on';
import { BaseComponentGlobal } from '../_abstract/component-types';
import styles from './index.scss';


const KEYCODE = {
  SPACE: 32,
};

class Radio extends BaseComponentGlobal {
  static get observedAttributes() {
    return ['checked', 'disabled'];
  }

  constructor() {
    super(styles);
  }

  render() {
    this.className = 'a-radio';

    if (!this.hasAttribute('role')) {
      this.setAttribute('role', 'radio');
    }

    if (!this.hasAttribute('tabindex')) {
      this.setAttribute('tabindex', '-1');
    }

    on(this, 'keyup', this._onKeyUp);
    on(this, 'click', this._onClick);

    this._upgradeProperty('disabled');
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

  _onClick() {
    this._toggleChecked();
  }

  _toggleChecked() {
    if (this.disabled) {
      return;
    }
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

window.customElements.define('axa-radio', Radio);
