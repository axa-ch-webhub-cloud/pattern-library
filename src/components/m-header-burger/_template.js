import html from 'nanohtml';
import raw from 'nanohtml/raw';

export default () => html`
  <button type="button" class="m-header-burger__button js-header-burger__button">
    ${raw('<axa-icon class="is-custom-element-disconnected" icon="menu" classes="m-header-burger__icon"></axa-icon>')}

    ${raw('<axa-icon class="is-custom-element-disconnected" icon="cross-gap" classes="m-header-burger__close-icon"></axa-icon>')}
  </button>
`;
