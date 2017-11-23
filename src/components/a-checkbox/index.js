import classnames from 'classnames';
import { BaseComponentGlobal } from '../_abstract/component-types';
import observeAttrChange from '../../js/observe-attr-change';
import setTabbable from '../../js/set-tabbable';
import styles from './index.scss';

class Checkbox extends BaseComponentGlobal {
  constructor() {
    super(styles);
    this.initialInnerHTML = this.innerHTML;
    this.innerHTML = '';
  }

  _render() {
    const { initialInnerHTML } = this;
    const disabled = this.getAttribute('disabled');
    const checked = this.getAttribute('checked');
    const id = this.getAttribute('id');
    this.inputAttrs = ['id', 'name', 'value', 'disabled', 'checked'];
    this.inputEl = this._addRealInput();

    if (initialInnerHTML.trim() !== '') {
      const label = document.createElement('label');
      label.setAttribute('for', `a-checkbox-${id}`);
      label.setAttribute('class', 'a-checkbox__label');
      label.innerHTML = initialInnerHTML;
      this.appendChild(label);
    }

    observeAttrChange(this, (attr, value) => {
      if (value === null) {
        this.inputEl.removeAttribute(attr);
      } else {
        this.inputEl.setAttribute(attr, value);
      }
    });

    this.className = classnames('a-checkbox', {
      'a-checkbox--disabled': disabled,
      'a-checkbox--checked': checked,
    });

    if (!this.classList.contains('a-checkbox--disabled')) {
      setTabbable(this, () => {
        this.inputEl.click();
      });
    }
  }

  _addRealInput() {
    const inputEl = document.createElement('input');
    inputEl.setAttribute('type', 'checkbox');
    inputEl.setAttribute('tabindex', '-1');

    Array.from(this.attributes).forEach((attr) => {
      if (this.inputAttrs.includes(attr.name) && attr.value !== null) {
        inputEl.setAttribute(attr.name, attr.value);
        if (attr.name === 'id') {
          this.setAttribute('id', `a-checkbox-${attr.value}`);
        }
      }
    });
    this.appendChild(inputEl);
    this.insertAdjacentHTML('beforeend', '<span class="a-checkbox__indicator"/>');

    return inputEl;
  }
}

window.customElements.define('axa-checkbox', Checkbox);
