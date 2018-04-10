import html from 'nanohtml';
import BaseComponent from '../../js/abstract/base-component';

export default function ({
  inputId = BaseComponent.uuidv4(),
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
          name="${name}" 
          type="${type}" 
          placeholder="${placeholder}" 
          value="${value}" 
          disabled="${disabled}">
          <span class="a-form-input__valid-icon"></span>
    </div>
    `;
}
