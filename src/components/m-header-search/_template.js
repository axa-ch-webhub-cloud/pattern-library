import bel from 'bel';
import raw from 'bel/raw';

export default (props) => bel`
  <form class="m-header-search__form">
    ${raw('<axa-icon id="search-left" classes="m-header-search__icon"></axa-icon>')}

    <input type="text" class="m-header-search__input" />
  </form>
`;
