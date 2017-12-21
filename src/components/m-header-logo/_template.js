import bel from 'bel';
import raw from 'bel/raw';

export default ({ src, alt = 'AXA Logo' } = {}) => bel`
  <a href="#" class="m-header-logo__link">
    ${src ? bel`
      <img class="m-header-logo__img" src="${src}" alt="${alt}" />
    ` : raw('<axa-icon id="logo-AXA" classes="m-header-logo__icon"></axa-icon>')}
  </a>
`;
