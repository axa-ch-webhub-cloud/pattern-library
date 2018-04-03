import html from 'nanohtml';

export default function ({
  inputId,
  type = 'text',
  placeholder = '',
  value = '',
  name,
  disabled = false,
}) {
  return html`<div class="a-form-input__wrapper">
      <input
          id="${inputId}"
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
