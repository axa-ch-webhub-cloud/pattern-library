import bel from 'bel';
import raw from 'bel/raw';

export default ({ action, href, method = 'POST' } = {}) => bel`
  <form class="m-header-search__form" action="${action}" method="${method}">
    <a class="m-header-search__page-link" href="${href}">
      ${raw('<axa-icon id="search-left" classes="m-header-search__icon"></axa-icon>')}
    </a>

    <input type="text" class="m-header-search__input" placeholder="search..." />
  </form>
`;
