import html from 'nanohtml';

export default ({ title }, childrenFragment) => html`
  <div class="o-policy-features__content">
    ${title && html`<h2 class="o-policy-features__title">${title}</h2>`}
      <div class="o-policy-features__items">
          ${childrenFragment}
      </div>
  </div>
`;
