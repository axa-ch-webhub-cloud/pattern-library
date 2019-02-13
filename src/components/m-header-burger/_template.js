import html from 'nanohtml';
import raw from 'nanohtml/raw';

export default () => html`
  <button type="button" class="m-header-burger__button js-header-burger__button">
    ${raw('<axa-icon icon="menu" icon-class="a-icon__svg--small" classes="m-header-burger__icon"></axa-icon>')}
    ${raw('<axa-icon icon="cross-gap" icon-class="a-icon__svg--small" classes="m-header-burger__close-icon"></axa-icon>')}
  </button>
`;
