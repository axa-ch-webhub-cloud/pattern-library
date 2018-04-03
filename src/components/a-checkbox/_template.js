import html from 'nanohtml';

export default function ({
  inputId,
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
    <span class="a-checkbox__icon"></span>${childrenFragment}
  </label>`;
}
