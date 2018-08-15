import html from 'nanohtml';

export default ({ title }, childrenFragment) => html`
  <article class="o-policy-features__content">
    ${title && html`<h1 class="o-policy-features__title">${title}</h1>`}
      <div class="o-policy-features__items">
          ${childrenFragment}
      </div>
  </article>
`;
