import bel from 'bel';
import raw from 'bel/raw';

export default () => bel`
  <button type="button" class="m-header-burger__button js-header-burger__button">
    ${raw('<axa-icon id="menu" classes="m-header-burger__icon"></axa-icon>')}

    ${raw('<axa-icon id="cross-gap" classes="m-header-burger__close-icon"></axa-icon>')}
  </button>
`;
