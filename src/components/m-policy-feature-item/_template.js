import html from 'nanohtml';

export default ({ src, alt = 'Policy feature icon', title, description }) => html`
  <article class="m-policy-feature-item__content">
    <img class="m-policy-feature-item__icon" src="${src}" alt="${alt}">
    ${title && html`<h1 class="m-policy-feature-item__title">${title}</h1>`}
    ${description && html`<p class="m-policy-feature-item__description">${description}</p>`}
  </article>
`;
