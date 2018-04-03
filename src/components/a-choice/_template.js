import html from 'nanohtml';

export default function ({
  inputId,
  value,
  name,
  checked = false,
  disabled = false,
}, childrenFragment) {
  return html`<label class="a-choice__wrapper">
    <input
      id=${inputId}
      class="a-choice__input" 
      type="radio"
      name="${name}" 
      checked="${checked}" 
      value="${value}" 
      disabled="${disabled}">
      <span class="a-choice__label">${childrenFragment}</span>
  </label>`;
}
