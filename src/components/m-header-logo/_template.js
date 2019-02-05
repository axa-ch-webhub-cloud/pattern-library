import html from 'nanohtml';
import raw from 'nanohtml/raw';

export default ({ src, alt = 'AXA Logo', href = '#' } = {}) => html`
  <a href="${href}" class="m-header-logo__link js-header-logo__link">
    ${src ? html`
      <img class="m-header-logo__img" src="${src}" alt="${alt}" />
    ` : raw('<axa-icon icon="logo-AXA" size="sm" icon-class="a-icon__svg--medium m-header-logo__icon"></axa-icon>')}
  </a>
`;
