import html from 'nanohtml';

export default ({ src, alt = 'Policy feature icon', title, description }) => html`
  <div class="m-policy-feature-item__content">
    <img class="m-policy-feature-item__icon" src="${src}" alt="${alt}">
    ${title && html`<h3 class="m-policy-feature-item__title">${title}</h3>`}
    <h3 class="m-policy-feature-item__title"></h3>
    ${description && html`<p class="m-policy-feature-item__description">${description}</p>`}
  </div>
`;
