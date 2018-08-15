import html from 'nanohtml';

export default ({
  title,
  subtitle,
  autoRotateEnabled = true,
  autoRotateTime = 5000,
}, childrenFragment) => html`
  <article class="o-testimonials__background js-o-testimonials" 
  data-auto-rotate-enabled="${autoRotateEnabled}" 
  data-auto-rotate-time="${autoRotateTime}">
    ${title && html`<h1 class="o-testimonials__title">${title}</h1>`}
    ${subtitle && html`<p class="o-testimonials__subtitle">${subtitle}</p>`}
    <div class="o-testimonials__navigator">
      <div class="o-testimonials__arrow-left js-o-testimonials__control-left"></div>
      <div class="o-testimonials__content">
        ${childrenFragment}
      </div>
      <div class="o-testimonials__arrow-right js-o-testimonials__control-right"></div>
    </div>
  </article>
`;
