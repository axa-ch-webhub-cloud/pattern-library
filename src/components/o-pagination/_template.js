import html from 'nanohtml';
import raw from 'nanohtml/raw';
import classnames from 'classnames';

export default ({ classes, items, first, last }, childrenFragment) => html`
  <nav class="o-pagination ${classes}">
    ${childrenFragment}

    ${(first && html`
      <a class="o-pagination__first" href=${''} />${raw('&lt;')}</a>
    `) || ''}

    ${Array.isArray(items) && items.map(({ href, active, page }, index) => html`
      <a class="o-pagination__link ${classnames({
        'o-pagination__link--active': active,
      })}" href=${href}/>${page || index + 1}</a>
    `)}

    ${(last && html`
      <a class="o-pagination__last" href=${''} />${raw('&gt;')}</a>
    `) || ''}
  </nav>
`;
