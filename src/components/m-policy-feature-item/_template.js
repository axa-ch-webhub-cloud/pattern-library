import html from 'nanohtml';

export default ({ src, alt = 'Policy feature icon', title, description }, childrenFragment) => html`
  <article class="m-policy-feature-item__content">
    ${src &&
      html`
        <img class="m-policy-feature-item__icon" src="${src}" alt="${alt}" />
      `}
    ${childrenFragment.querySelector('.js-m-policy-features-icon') || ''}
    ${title &&
      html`
        <h1 class="m-policy-feature-item__title">${title}</h1>
      `}
    ${description &&
      html`
        <p class="m-policy-feature-item__description">${description}</p>
      `}
  </article>
`;
