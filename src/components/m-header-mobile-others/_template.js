import bel from 'bel';

export default ({ items }) => bel`
  <ul class="m-header-mobile-others__list">
    ${items && items.map(({ name, url, isActive = false }) => bel`
      <li class="m-header-mobile-others__list-item">
        <a href="${url}" class="m-header-mobile-others__link js-header-mobile-close ${isActive && 'is-header-mobile-others-active'}">${name}</a>
      </li>`)}
  </ul>
`;
