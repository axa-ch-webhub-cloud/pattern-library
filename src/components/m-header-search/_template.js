import html from 'nanohtml';
import raw from 'nanohtml/raw';

export default ({ action, href, method = 'POST' } = {}) => html`
  <form class="m-header-search__form" action="${action}" method="${method}">
    <a class="m-header-search__page-link" href="${href}">
      ${raw('<axa-icon class="is-custom-element-disconnected" icon="search-left" classes="m-header-search__icon"></axa-icon>')}
    </a>

    <input type="text" class="m-header-search__input" placeholder="search..." />
  </form>
`;
