import html from "nanohtml";

export default (
  { classes, buttonName, title, fixed = false },
  childrenFragment
) => html`
  <article class="${classes} ${fixed ? "o-cookie-disclaimer--fixed" : ""}">
    <axa-container>
      <div
        class="o-cookie-disclaimer__container o-cookie-disclaimer__container--lx"
      >
        <h1 class="o-cookie-disclaimer__title">${title}</h1>
        ${childrenFragment}
      </div>
      <div
        class="o-cookie-disclaimer__container o-cookie-disclaimer__container--rx"
      >
        <axa-button
          ghost
          classes="js-cookie-disclaimer__button"
          color="white"
          tag="button"
          >${buttonName}</axa-button
        >
      </div>
    </axa-container>
  </article>
`;
