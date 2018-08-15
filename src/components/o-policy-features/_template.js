import html from 'nanohtml';

export default function ({ title, axaStyle }, childrenFragment) {
  const STYLE_WHITELIST = ['default', 'dark-indigo', 'axa-blue', 'wild-sand', 'white'];
  let allowedStyle = 'default';
  if (STYLE_WHITELIST.indexOf(axaStyle) > -1) {
    allowedStyle = axaStyle;
  }
  return html`
  <article class="o-policy-features__content o-policy-features__style-${allowedStyle}">
    ${title && html`<h1 class="o-policy-features__title">${title}</h1>`}
      <div class="o-policy-features__items">
          ${childrenFragment}
      </div>
  </article>
`;
}
