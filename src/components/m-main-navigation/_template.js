import bel from 'bel';
import raw from 'bel/raw';

const logoIcon = '<axa-icon id="logo-AXA" classes="m-main-navigation__logo-img"></axa-icon>';

export default ({ title, items }) => [
  bel`
  <div class="m-main-navigation__box">
    <div class="m-main-navigation__logo">
      <a href="#" class="m-main-navigation__logo-link">
        ${raw(logoIcon)}
      </a>
    </div>

    <nav class="m-main-navigation__nav">
      <ul class="m-main-navigation__list js-main-navigation__list">
        <li class="m-main-navigation__list-item">
          <a href="#" class="m-main-navigation__list-link js-main-navigation__list-link">car insurance</a>
        </li>
        <li class="m-main-navigation__list-item">
          <a href="#" class="m-main-navigation__list-link js-main-navigation__list-link">home insurance</a>
        </li>
        <li class="m-main-navigation__list-item">
          <a href="#" class="m-main-navigation__list-link js-main-navigation__list-link">health insurance<br>sub line</a>
        </li>
        <li class="m-main-navigation__list-item">
          <a href="#" class="m-main-navigation__list-link js-main-navigation__list-link">travel insurance</a>
        </li>
      </ul>
    </nav>

    <a href="#" class="a-button a-button--ghost a-button--motion hide-md-down">Pay or review</a>

    <form class="m-main-navigation__form">
      <axa-icon id="search-left" classes="m-main-navigation__search-icon"></axa-icon>

      <input type="text" class="m-main-navigation__search" />
    </form>

    <button role="button" class="m-main-navigation__burger js-main-navigation__burger">
      <axa-icon id="menu" classes="m-main-navigation__burger-icon"></axa-icon>

      <axa-icon id="cross-gap" classes="m-main-navigation__close-icon"></axa-icon>
    </button>
  </div>
`,
];
