import html from 'nanohtml';

export default ({
  classes,
  buttonName,
  title,
  linkTitle,
  href,
  fixed = false,
}, childrenFragment) => html`
  <article class="${classes} ${fixed ? 'o-cookie-disclaimer--fixed' : ''}">
    <axa-container>
      <div class="o-cookie-disclaimer__container o-cookie-disclaimer__container--lx">
        <h1 class="o-cookie-disclaimer__title">${title}</h1>
        ${childrenFragment}
        <axa-link color="white" href="${href}" arrow>${linkTitle}</axa-link>
      </div>
      <div class="o-cookie-disclaimer__container o-cookie-disclaimer__container--rx">
        <axa-button ghost color="white" tag="button">${buttonName}</axa-button>
      </div>
    </axa-container>
  </article>
`;
