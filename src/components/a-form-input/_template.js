import bel from 'bel';

export default function ({
  id,
  type = 'text',
  placeholder = '',
  value = '',
  name,
  disabled = false,
}) {
  return bel`<div class="a-form-input__wrapper">
      <input
          id="${id}"
          class="a-form-input__input" 
          type="radio"
          name="${name}" 
          type="${type}" 
          placeholder="${placeholder}" 
          value="${value}" 
          disabled="${disabled}">
          <span class="a-form-input__valid-icon"></span>
    </div>
    `;
}
