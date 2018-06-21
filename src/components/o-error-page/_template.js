import classnames from 'classnames';
import html from 'nanohtml';
import raw from 'nanohtml/raw';

export default ({
  code,
  status,
  title,
  message,
  items,
  ctaHref,
  ctaTitle,
}) => {
  const hasItems = Array.isArray(items) && items.length;

  return html`
    <article class='o-error-page__container'>
      <h4 class="o-error-page__status">${status}</h4>
      <h1 class="o-error-page__title">${title}</h1>
  
      <p class="${classnames('o-error-page__message', { 'o-error-page__message--semibold': hasItems })}">${raw(message)}</p>
      
      ${(hasItems && html`
        <ul class="o-error-page__list">
          ${items.map(item => html`<li class="o-error-page__list-item">${item}</li>`)}
        </ul>
      `) || null}
      
      ${(ctaHref && ctaTitle && html`
        <axa-button class="o-error-page__cta" href="${ctaHref}" tag="a" color="white" ghost motion>${ctaTitle}</axa-button>
      `) || null}
    </article>
  `;
};
