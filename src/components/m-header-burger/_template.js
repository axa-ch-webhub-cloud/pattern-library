import html from 'nanohtml/lib/browser';
import raw from 'nanohtml/raw';

export default () => html`
  <button type="button" class="m-header-burger__button js-header-burger__button">
    ${raw('<axa-icon icon="menu" classes="m-header-burger__icon"></axa-icon>')}

    ${raw('<axa-icon icon="cross-gap" classes="m-header-burger__close-icon"></axa-icon>')}
  </button>
`;
