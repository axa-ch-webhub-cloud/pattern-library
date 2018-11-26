import html from 'nanohtml';
import BaseComponent from '../../js/abstract/base-component';

export default function ({
  inputId = BaseComponent.uuidv4(),
  value,
  name,
  checked = false,
  disabled = false,
}, childrenFragment) {
  return html`<label class="a-checkbox__wrapper">
    <input
      id="${inputId}"
      class="a-checkbox__input" 
      type="checkbox"
      name="${name}" 
      checked="${checked}" 
      value="${value}" 
      disabled="${disabled}">
    <span class="a-checkbox__icon"></span>
    <div class="a-checkbox__content">${childrenFragment}</div>
  </label>`;
}
