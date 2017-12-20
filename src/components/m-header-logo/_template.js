import bel from 'bel';
import raw from 'bel/raw';

export default () => bel`
  <a href="#" class="m-header-logo__link">
    ${raw('<axa-icon id="logo-AXA" classes="m-header-logo__icon"></axa-icon>')}
  </a>
`;
