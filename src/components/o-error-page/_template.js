import classnames from 'classnames';
import html from 'nanohtml';
import raw from 'nanohtml/raw';

import getNodeId from '../../js/get-node-id';

export default ({
  code, // eslint-disable-line
  status,
  title,
  message,
  items,
  ctaHref,
  ctaTitle,
}, childrenFragment, wcNode) => {
  const hasItems = Array.isArray(items) && items.length;
  const hasChildren = childrenFragment && childrenFragment.childElementCount;

  const errorPage = html`
    <article class="o-error-page__container">
      <h4 class="o-error-page__status">${status}</h4>
      <h1 class="o-error-page__title">${title}</h1>
  
      <p class="${classnames('o-error-page__message', { 'o-error-page__message--semibold': hasItems })}">${raw(message)}</p>
      
      ${(hasItems && html`
        <ul class="o-error-page__list">
          ${items.map((item, index) => html`<li class="o-error-page__list-item" id="${getNodeId(wcNode, null, index)}">${item}</li>`)}
        </ul>
      `) || null}
      
      ${(ctaHref && ctaTitle && html`
        <axa-button class="o-error-page__cta" href="${ctaHref}" tag="a" color="white" ghost motion>${ctaTitle}</axa-button>
      `) || null}
    </article>
  `;

  if (!hasChildren) {
    return errorPage;
  }

  return [
    errorPage,
    html`<arcticle class="o-error-page__discover">
      <p class="o-error-page__discover-text">${childrenFragment}</p>
    </arcticle>`,
  ];
};
