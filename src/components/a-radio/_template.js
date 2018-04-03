import html from 'nanohtml';

export default function ({
  inputId,
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
    <i class="a-radio__icon"></i>${childrenFragment}
  </label>`;
}
