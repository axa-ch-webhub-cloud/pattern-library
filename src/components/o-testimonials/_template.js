import html from 'nanohtml';

export default ({
  title,
  subtitle,
}, childrenFragment) => html`
  <article class="o-testimonials__background js-o-testimonials">
    <axa-container>
        ${title && html`<h1 class="o-testimonials__title">${title}</h1>`}
        ${subtitle && html`<p class="o-testimonials__subtitle">${subtitle}</p>`}
        <div class="o-testimonials__navigator js-o-testimonials__navigator">
          <button class="o-testimonials__arrow-left js-o-testimonials__control-left"></button>
          <div class="o-testimonials__content">
            ${childrenFragment}
          </div>
          <button class="o-testimonials__arrow-right js-o-testimonials__control-right"></button>
        </div>
    </axa-container>
  </article>
`;
