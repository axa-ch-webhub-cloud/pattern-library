import bel from 'bel';

export default ({ others }) => bel`
  <ul class="m-header-mobile-others__list">
    ${others && others.map(({ name, url, isActive = false }) => bel`
      <li class="m-header-mobile-others__list-item">
        <a href="${url}" class="m-header-mobile-others__link ${isActive && 'is-active'}">${name}</a>
      </li>`)}
  </ul>
`;
