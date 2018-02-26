import bel from 'bel';

export default function ({
  id,
  value,
  name,
  checked = false,
  disabled = false,
}, childrenFragment) {
  return bel`<label class="a-choice__wrapper">
    <input
      id="${id}"
      class="a-choice__input" 
      type="radio"
      name="${name}" 
      checked="${checked}" 
      value="${value}" 
      disabled="${disabled}">
      <span class="a-choice__label">${childrenFragment}</span>
  </label>`;
}
