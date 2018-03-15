import on from '../../js/on';
import BaseComponentGlobal from '../../js/base-component-global';
import styles from './index.scss';
import wcdomready from '../../js/wcdomready';
import CustomEvent from '../../js/custom-event';

const KEYCODE = {
  SPACE: 32,
};

class AXACheckbox extends BaseComponentGlobal {
  static get observedAttributes() {
    return ['checked', 'disabled'];
  }

  constructor() {
    super(styles);
  }

  render() {
    this.className = `${this.initialClassName} a-checkbox`;

    if (!this.hasAttribute('role')) {
      this.setAttribute('role', 'checkbox');
    }

    if (!this.hasAttribute('tabindex')) {
      this.setAttribute('tabindex', '0');
    }

    this._upgradeProperty('checked');
    this._upgradeProperty('disabled');

    on(this, 'keyup', this._onKeyUp);
    on(this, 'click', this._onClick);
  }

  /* Make properties lazy
   * A developer might attempt to set a property on your element before its definition has been loaded.
   * This is especially true if the developer is using a framework which handles loading components, inserting them into to the page, and binding their properties to a model.

   * In the following React example, we bind the checked property.
   * If the definition for axa-checkbox was lazy loaded it's possible that React might attempt to set the checked property before the element has upgraded.

   *  <axa-checkbox checked={checked}></axa-checkbox>
   *  A custom element should handle this scenario by checking if any properties have already been set on its instance.

   *  render() {
   *    ...
   *    this._upgradeProperty('checked');
   *  }

   *  _upgradeProperty(prop) {
   *    if (this.hasOwnProperty(prop)) {
   *      let value = this[prop];
   *      delete this[prop];
   *      this[prop] = value;
   *    }
   *  }
   *  _upgradeProperty() captures the value from the unupgraded instance and deletes the property so it does not shadow the custom element's own property setter.
   *  This way, when the element's definition does finally load, it can immediately reflect the correct state.
*/
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

wcdomready(() => {
  window.customElements.define('axa-checkbox', AXACheckbox);
});

export default AXACheckbox;
