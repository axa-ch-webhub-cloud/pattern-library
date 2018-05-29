import html from 'nanohtml';
import BaseComponent from '../../js/abstract/base-component';

export default function ({
  inputId = BaseComponent.uuidv4(),
  value,
  name,
  checked = false,
  disabled = false,
  controlled = false,
}, childrenFragment) {
  return html`<label class="a-choice__wrapper">
    <input
      id=${inputId}
      class="a-choice__input a-choice__input--${controlled ? 'controlled' : 'uncontrolled'}"
      type="radio"
      name="${name}"
      checked="${checked}"
      value="${value}"
      disabled="${disabled}">
      <span class="a-choice__label">${childrenFragment}</span>
  </label>`;
}
