import html from 'nanohtml';

export default ({
                  title,
                  subtitle,
                }, childrenFragment) => html`
  <article class="o-testimonials__background">
    ${title && html`<h3 class="o-testimonials__title">${title}</h3>`}
    ${subtitle && html`<p class="o-testimonials__subtitle">${subtitle}</p>`}
    <div class="o-testimonials__navigator">
      <div class="o-testimonials__arrow-left"></div>
      <div class="o-testimonials__content">
        ${childrenFragment}
      </div>
      <div class="o-testimonials__arrow-right"></div>
    </div>
  </article>
`;
