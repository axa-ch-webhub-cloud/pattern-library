import html from 'nanohtml';
import BaseComponent from '../../js/abstract/base-component';

export default function ({
  inputId = BaseComponent.uuidv4(),
  type = 'text',
  placeholder = '',
  value = '',
  name = '',
  disabled = false,
  icon = false,
  autocomplete = 'off',
  readonly = false,
}) {
  return html`<div class="a-input__wrapper">
      <input
          id="${inputId}"
          class="a-input__input js-input__input"
          name="${name}"
          type="${type}"
          placeholder="${placeholder}"
          value="${value}"
          disabled="${disabled}"
          autocomplete="${autocomplete}"
          readonly="${readonly}">
          <span class="a-input__valid-icon"></span>
          ${icon ? html`<button class="a-input__icon-button js-input__icon-button" type="button">
            <axa-icon classes="a-input__icon" icon="${icon}" icon-class="a-icon__svg--small"></axa-icon>
          </button>` : ''}
      </div>
    `;
}
