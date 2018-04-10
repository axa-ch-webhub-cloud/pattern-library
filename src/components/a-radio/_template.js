import html from 'nanohtml';
import BaseComponent from '../../js/abstract/base-component';

export default function ({
  inputId = BaseComponent.uuidv4(),
  value,
  name,
  checked = false,
  disabled = false,
}, childrenFragment) {
  return html`<label class="a-radio__wrapper">
    <input
      id="${inputId}"
      class="a-radio__input" 
      type="radio"
      name="${name}" 
      checked="${checked}" 
      value="${value}" 
      disabled="${disabled}">
    <span class="a-radio__icon"></span>${childrenFragment}
  </label>`;
}
